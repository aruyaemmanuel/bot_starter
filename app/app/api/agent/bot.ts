import {
  TelegramUpdate,
  sendMessage,
  answerCallbackQuery,
  sendMainMenu,
  renderServiceDetail,
  recordInquiryConfirmation,
} from './apihandlers';
import {LLMHandler } from './llm_handler';

export class Bot {
  private token: string;
  private groq_key: string;
  private agent: LLMHandler;

  constructor(token: string, groq_key: string) {
    this.token = token;
    this.groq_key = groq_key;
    this.agent = new LLMHandler(this.groq_key, this.token);
  }

  /**
   * Primary entry point for processing incoming webhook updates.
   */
  async processUpdate(update: TelegramUpdate): Promise<void> {
    // 1. Handle Inline Button Clicks (Callback Queries)
    if (update.callback_query) {
      await this.handleCallbackQuery(update.callback_query);
      return;
    }

    // 2. Handle Direct Text Messages
    if (update.message) {
      const { chat, from, text } = update.message;
      const chatId = chat.id;
      const senderName = from.first_name || 'there';
      const messageText = text?.trim() || '';

      console.log(`[Incoming Message] Chat: ${chatId} | User: ${senderName} | Text: "${messageText}"`);

      if (messageText === '/start') {
        await sendMainMenu(this.token, chatId, senderName);
      } else if (messageText.startsWith('/')) {
        await sendMessage(this.token, chatId, "Sorry, I don't recognize that command yet.");
      } else {
        await this.handleGenericMessage(chatId, senderName, messageText);
      }
    }
  }

  /**
   * Handles button click callbacks and routes to respective sub-views.
   */
  private async handleCallbackQuery(query: NonNullable<TelegramUpdate['callback_query']>): Promise<void> {
    const chatId = query.message?.chat.id;
    const messageId = query.message?.message_id;
    const data = query.data;
    const userName = query.from.first_name || 'there';

    if (!chatId || !messageId) return;

    // Acknowledge the button click so the UI removes the loading spinner
    await answerCallbackQuery(this.token, query.id);

    // Route menu actions
    if (data === 'menu:main') {
      await sendMainMenu(this.token, chatId, userName);
    } else if (data.startsWith('service:')) {
      await renderServiceDetail(this.token, chatId, data, messageId);
    } else if (data.startsWith('consult:')) {
      await recordInquiryConfirmation(this.token, chatId, data, messageId);
    }
  }

  /**
   * Handles non-command text input by forwarding intent processing to the LLM agent.
   */
  private async handleGenericMessage(chatId: number, senderName: string, text: string): Promise<void> {
    await this.agent.handleUserMessage(chatId, senderName, text);
  }
}

import Groq from 'groq-sdk';
import { agentTools } from './tools';
import {
  renderServiceDetail,
  recordInquiryConfirmation,
  sendMainMenu,
  sendMessage,
  getBusinessInfo,
} from './apihandlers';

export class LLMHandler {
  private groq: Groq;
  private botToken: string;
  private model: string;

  constructor(
    groqApiKey: string,
    botToken: string,
    model = 'openai/gpt-oss-120b'
  ) {
    this.groq = new Groq({ apiKey: groqApiKey });
    this.botToken = botToken;
    this.model = model;
  }

  /**
   * Processes generic text through LLM tool decision loop
   */
  async handleUserMessage(
    chatId: number,
    senderName: string,
    text: string
  ): Promise<void> {
    const messages: Groq.Chat.Completions.ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: `You are an intelligent agency representative. Assist users with queries about web development, AI automation, mobile apps, and custom bots. Whenever appropriate, invoke tools to display business details, services, or UI elements in Telegram.`,
      },
      {
        role: 'user',
        content: `[User Name: ${senderName}] ${text}`,
      },
    ];

    try {
      const response = await this.groq.chat.completions.create({
        model: this.model,
        messages,
        tools: agentTools,
        tool_choice: 'auto',
      });

      const responseMessage = response.choices[0].message;

      // Check if LLM requested function calls
      if (responseMessage.tool_calls && responseMessage.tool_calls.length > 0) {
        for (const toolCall of responseMessage.tool_calls) {
          const fnName = toolCall.function.name;
          
          let args: Record<string, any> = {};
          try {
            args = toolCall.function.arguments
              ? JSON.parse(toolCall.function.arguments)
              : {};
          } catch (e: any) {
            console.error('Failed to parse tool call arguments:', e?.message || String(e));
          }

          if (fnName === 'getBusinessInfo') {
            await getBusinessInfo(this.botToken, chatId, args.topic);
          } else if (fnName === 'showServiceInfo') {
            await renderServiceDetail(this.botToken, chatId, args.serviceKey);
          } else if (fnName === 'bookConsultation') {
            await recordInquiryConfirmation(this.botToken, chatId, args.serviceKey);
          } else if (fnName === 'showMainMenu') {
            await sendMainMenu(this.botToken, chatId, args.userName || senderName);
          }
        }
        return;
      }

      // If no tool was executed, return LLM text response
      if (responseMessage.content) {
        await sendMessage(this.botToken, chatId, responseMessage.content);
      }
    } catch (error: any) {
      // Safely print plain string message to avoid Next.js code-frame crashes in Termux
      const errorMessage = error?.message || String(error);
      console.error('[Agent Exception Message]:', errorMessage);

      await sendMessage(
        this.botToken,
        chatId,
        "I'm having trouble processing that request right now."
      );
    }
  }
}

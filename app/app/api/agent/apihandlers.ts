import businessInfo from './business_info.json';

export interface TelegramUpdate {
  update_id: number;
  message?: {
    message_id: number;
    from: {
      id: number;
      first_name: string;
      username?: string;
    };
    chat: {
      id: number;
      type: string;
    };
    text?: string;
    date: number;
  };
  callback_query?: {
    id: string;
    from: {
      id: number;
      first_name: string;
    };
    message?: {
      message_id: number;
      chat: {
        id: number;
      };
    };
    data: string;
  };
}

export interface ServiceDetail {
  title: string;
  description: string;
}

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  'service_1': {
    title: 'YOUR_SERVICE_1_TITLE',
    description: 'YOUR_SERVICE_1_DESCRIPTION',
  },
  'service_2': {
    title: 'YOUR_SERVICE_2_TITLE',
    description: 'YOUR_SERVICE_2_DESCRIPTION',
  },
  'service_3': {
    title: 'YOUR_SERVICE_3_TITLE',
    description: 'YOUR_SERVICE_3_DESCRIPTION',
  },
  'service_4': {
    title: 'YOUR_SERVICE_4_TITLE',
    description: 'YOUR_SERVICE_4_DESCRIPTION',
  },
};

/**
 * Low-level Telegram HTTP API requests
 */
export async function sendMessage(
  token: string,
  chatId: number,
  text: string,
  extraOptions: Record<string, any> = {}
): Promise<boolean> {
  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        ...extraOptions,
      }),
    });

    const data = await response.json();
    if (!data.ok) console.error('[Telegram API Error - sendMessage]:', data.description);
    return data.ok;
  } catch (error) {
    console.error('[Send Message Exception]:', error);
    return false;
  }
}

export async function editMessageText(
  token: string,
  chatId: number,
  messageId: number,
  text: string,
  extraOptions: Record<string, any> = {}
): Promise<boolean> {
  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/editMessageText`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        message_id: messageId,
        text,
        ...extraOptions,
      }),
    });

    const data = await response.json();
    if (!data.ok) console.error('[Telegram API Error - editMessageText]:', data.description);
    return data.ok;
  } catch (error) {
    console.error('[Edit Message Exception]:', error);
    return false;
  }
}

export async function getBusinessInfo(
  botToken: string,
  chatId: number,
  topic?: string
): Promise<void> {
  // Format services list from JSON
  const servicesList = businessInfo.services
    .map((s) => `• **${s.name}**\n  ${s.description}`)
    .join('\n\n');

  // Build markdown message string
  const businessMessage = `
🚀 **${businessInfo.businessName}**
_${businessInfo.tagline}_

${businessInfo.overview}

**Our Core Services:**
${servicesList}

💰 **Pricing:** ${businessInfo.pricing.startingPrice}.

---
${businessInfo.cta.message}
  `.trim();

  // Construct Inline Buttons from JSON links
  const replyMarkup = {
    inline_keyboard: [
      [
        { text: '📅 Book Consultation', url: businessInfo.cta.links.booking },
      ],
      [
        { text: '💬 Chat on WhatsApp', url: businessInfo.cta.links.whatsapp },
        { text: '🌐 Visit Website', url: businessInfo.cta.links.website },
      ],
    ],
  };

  // Send formatted response to Telegram
  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: businessMessage,
      parse_mode: 'Markdown',
      reply_markup: replyMarkup,
    }),
  });
}

export async function answerCallbackQuery(token: string, callbackQueryId: string): Promise<boolean> {
  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/answerCallbackQuery`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ callback_query_id: callbackQueryId }),
    });

    const data = await response.json();
    return data.ok;
  } catch (error) {
    console.error('[Answer Callback Exception]:', error);
    return false;
  }
}

/**
 * High-level view rendering helpers (Ready to be exposed to your Groq LLM or Bot handler)
 */

export async function sendMainMenu(token: string, chatId: number, name: string): Promise<boolean> {
  const welcomeText =
    `Hello <b>${name}</b>! 👋\n\n` +
    `Welcome! Please select an option below to learn more:`;

  const keyboard = {
    inline_keyboard: [
      [{ text: 'YOUR_SERVICE_1_BUTTON_TEXT', callback_data: 'service:service_1' }],
      [{ text: 'YOUR_SERVICE_2_BUTTON_TEXT', callback_data: 'service:service_2' }],
      [{ text: 'YOUR_SERVICE_3_BUTTON_TEXT', callback_data: 'service:service_3' }],
      [{ text: 'YOUR_SERVICE_4_BUTTON_TEXT', callback_data: 'service:service_4' }],
    ],
  };

  return await sendMessage(token, chatId, welcomeText, {
    parse_mode: 'HTML',
    reply_markup: keyboard,
  });
}

export async function renderServiceDetail(
  token: string,
  chatId: number,
  serviceKey: string,
  messageId?: number
): Promise<boolean> {
  // Normalize service key if prefix included (e.g., 'service:service_1' -> 'service_1')
  const cleanKey = serviceKey.replace('service:', '');
  const service = SERVICE_DETAILS[cleanKey] || {
    title: 'Service Information',
    description: 'Contact us directly to discuss custom requirements.',
  };

  const text =
    `<b>${service.title}</b>\n\n` +
    `${service.description}\n\n` +
    `<i>Would you like to book a consultation for this service?</i>`;

  const keyboard = {
    inline_keyboard: [
      [{ text: '📩 Book Consultation', callback_data: `consult:${cleanKey}` }],
      [{ text: '⬅️ Back to Services', callback_data: 'menu:main' }],
    ],
  };

  if (messageId) {
    return await editMessageText(token, chatId, messageId, text, {
      parse_mode: 'HTML',
      reply_markup: keyboard,
    });
  }

  return await sendMessage(token, chatId, text, {
    parse_mode: 'HTML',
    reply_markup: keyboard,
  });
}

export async function recordInquiryConfirmation(
  token: string,
  chatId: number,
  serviceKey: string,
  messageId?: number
): Promise<boolean> {
  const cleanKey = serviceKey.replace('consult:', '').replace('service:', '');
  const serviceName = cleanKey.replace('_', ' ').toUpperCase();
  
  const confirmationText =
    `✅ <b>Inquiry Received!</b>\n\n` +
    `Thank you for your interest in <b>${serviceName}</b>. Our team will contact you shortly to discuss your project requirements.`;

  const keyboard = {
    inline_keyboard: [[{ text: '⬅️ Back to Main Menu', callback_data: 'menu:main' }]],
  };

  if (messageId) {
    return await editMessageText(token, chatId, messageId, confirmationText, {
      parse_mode: 'HTML',
      reply_markup: keyboard,
    });
  }

  return await sendMessage(token, chatId, confirmationText, {
    parse_mode: 'HTML',
    reply_markup: keyboard,
  });
}

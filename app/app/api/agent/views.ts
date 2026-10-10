import { CallbackAction } from './types';

export const Views = {
  mainMenu(name: string) {
    return {
      text: `Hello <b>${name}</b>! 👋\n\nWelcome to our business center. Please select a service below to learn more:`,
      keyboard: {
        inline_keyboard: [
          [{ text: '🌐 Web Development', callback_data: CallbackAction.SERVICE_WEB }],
          [{ text: '🤖 AI Automation', callback_data: CallbackAction.SERVICE_AI }],
          [{ text: '📱 Mobile App Development', callback_data: CallbackAction.SERVICE_MOBILE }],
        ],
      },
    };
  },

  serviceDetail(serviceKey: CallbackAction) {
    const details = {
      [CallbackAction.SERVICE_WEB]: {
        title: '🌐 Web Development',
        desc: 'We build high-performance web applications, e-commerce platforms, and landing pages tailored to your brand.',
      },
      [CallbackAction.SERVICE_AI]: {
        title: '🤖 AI Automation',
        desc: 'Streamline operations with custom AI agents, workflow automation, and smart Telegram/WhatsApp bots.',
      },
      [CallbackAction.SERVICE_MOBILE]: {
        title: '📱 Mobile App Development',
        desc: 'Cross-platform iOS and Android apps built with React Native for maximum speed and smooth UX.',
      },
    };

    const service = details[serviceKey as keyof typeof details];

    return {
      text: `<b>${service.title}</b>\n\n${service.desc}\n\n<i>Would you like to request a quote or speak to a representative?</i>`,
      keyboard: {
        inline_keyboard: [
          [{ text: '📩 Book Consultation', callback_data: `consult:${serviceKey}` }],
          [{ text: '⬅️ Back to Services', callback_data: CallbackAction.MAIN_MENU }],
        ],
      },
    };
  },
};

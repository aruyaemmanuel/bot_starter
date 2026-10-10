// agent/tools.ts
import Groq from 'groq-sdk';

export const agentTools: Groq.Chat.Completions.ChatCompletionTool[] = [
  {
    type: 'function',
    function: {
      name: 'getBusinessInfo',
      description: 'Get detailed information about the business services, background, pricing, and contact links.',
      parameters: {
        type: 'object',
        properties: {
          topic: {
            type: ['string', 'null'],
            description: "Optional specific topic requested (e.g., 'pricing', 'services', 'about', 'contact'). Omit or leave null for general info.",
          },
        },
        required: [],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'showServiceInfo',
      description: 'Displays specific service details and interactive buttons for the requested service option.',
      parameters: {
        type: 'object',
        properties: {
          serviceKey: {
            type: 'string',
            enum: ['service_1', 'service_2', 'service_3', 'service_4'],
            description: 'The key of the service requested.',
          },
        },
        required: ['serviceKey'],
      },
    },
  },
  {
    type: 'function',
    function: {
      name: 'showMainMenu',
      description: 'Displays the main navigation menu with all available service options to the user.',
      parameters: {
        type: 'object',
        properties: {
          userName: { type: 'string' },
        },
        required: ['userName'],
      },
    },
  },
];

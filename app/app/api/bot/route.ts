// import { NextResponse } from 'next/server';
// import { Bot } from '../agent/bot';



// export async function POST(request: Request) {
//   try {
//     // Read uppercase env variables or fallback to lowercase if defined
//     const botToken = process.env.TOKEN;
//     const groqKey = process.env.GROQ_KEY;
//     if (!botToken || !groqKey) {
//       console.error('[Configuration Error]: Missing Telegram Bot Token or Groq API Key in environment variables.');
//       return NextResponse.json(
//         { error: 'Server misconfiguration: Missing API keys' }, 
//         { status: 500 }
//       );
//     }

//     const update = await request.json();

//     // Instantiate Bot per execution (or inside request scope)
//     const bot = new Bot(botToken, groqKey);
//     await bot.processUpdate(update);

//     console.log('The update was processed successfully');
//     return NextResponse.json({ status: 'ok' });

//   } catch (error) {
//     console.error('Error processing update:', error);
//     return NextResponse.json(
//       { error: 'Internal Server Error', details: error instanceof Error ? error.message : String(error) }, 
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from 'next/server';
import { Bot } from '../agent/bot';

export async function POST(request: Request) {
  try {
    // Read environment variables
    const botToken = process.env.TOKEN;
    const groqKey = process.env.GROQ_KEY;

    if (!botToken || !groqKey) {
      console.error('[Configuration Error]: Missing TOKEN or GROQ_KEY in environment variables.');
      return NextResponse.json(
        { error: 'Server misconfiguration: Missing API keys' }, 
        { status: 500 }
      );
    }

    const update = await request.json();

    // Safely execute bot processing
    try {
      const bot = new Bot(botToken, groqKey);
      await bot.processUpdate(update);
      console.log('The update was processed successfully');
    } catch (botError: any) {
      // Print full raw stack trace to Termux terminal as plain text
      console.error('\n================ 🚨 BOT EXECUTION ERROR 🚨 ================');
      console.error(botError?.stack || botError?.message || String(botError));
      console.error('===========================================================\n');
    }

    // Always respond with 200 OK to Telegram so pending updates don't queue up
    return NextResponse.json({ status: 'ok' }, { status: 200 });

  } catch (error: any) {
    // Handle JSON parsing or request-level failures
    console.error('\n================ 🚨 ROUTE REQUEST ERROR 🚨 ================');
    console.error(error?.stack || error?.message || String(error));
    console.error('===========================================================\n');

    return NextResponse.json(
      { status: 'error_handled', details: error?.message || String(error) }, 
      { status: 200 }
    );
  }
}


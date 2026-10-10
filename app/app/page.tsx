"use client";

// import { useState } from "react";
// import { Bricolage_Grotesque, Figtree } from "next/font/google";

// const display = Bricolage_Grotesque({
//   subsets: ["latin"],
//   variable: "--font-display",
// });
// const body = Figtree({ subsets: ["latin"], variable: "--font-body" });

// type Capability = {
//   id: string;
//   label: string[];
//   x: number;
//   y: number;
//   title: string;
//   summary: string;
//   points: string[];
//   ask: string;
//   reply: string;
// };

// // Seven cells: Sales sits in the middle, the rest surround it.
// const capabilities: Capability[] = [
//   {
//     id: "sales",
//     label: ["Sales"],
//     x: 200,
//     y: 190,
//     title: "Turns enquiries into orders",
//     summary:
//       "BeeBee talks to buyers the way your best salesperson would, and it never leaves a message waiting.",
//     points: [
//       "Recommends products and answers objections",
//       "Quotes, confirms order details and hands over to fulfilment",
//       "Follows up on abandoned carts and quiet quotes",
//     ],
//     ask: "Do you have the black one in size 42? I need it by Friday.",
//     reply:
//       "Yes, 3 left in size 42. Delivery by Thursday is possible if you order before 4 pm. Want me to reserve one?",
//   },
//   {
//     id: "content",
//     label: ["Content"],
//     x: 143,
//     y: 91,
//     title: "Keeps your content moving",
//     summary:
//       "Plans, writes and schedules the posts, product pages and updates your business needs every week.",
//     points: [
//       "Drafts a week of posts from your products and recent wins",
//       "Keeps descriptions and prices consistent everywhere",
//       "Queues drafts for your approval, or publishes within your rules",
//     ],
//     ask: "Plan next week's posts. We just restocked the leather range.",
//     reply:
//       "Five posts drafted: restock announcement, two styling ideas, one customer photo, one limited-offer reminder. Ready for your review.",
//   },
//   {
//     id: "ads",
//     label: ["Advertising"],
//     x: 257,
//     y: 91,
//     title: "Runs ads and watches the spend",
//     summary:
//       "Builds campaigns from what is already selling and moves budget toward what brings buyers.",
//     points: [
//       "Writes ad copy and picks audiences from your best customers",
//       "Shifts budget to ads that produce sales, not just clicks",
//       "Pauses anything that goes over your cost-per-lead limit",
//     ],
//     ask: "Why did we spend so much on Tuesday?",
//     reply:
//       "Two ads got heavy traffic but no orders. I paused them and moved the budget to the restock ad, which converted 3x better.",
//   },
//   {
//     id: "leads",
//     label: ["Leads"],
//     x: 314,
//     y: 190,
//     title: "Finds and qualifies new leads",
//     summary:
//       "Captures every enquiry, works out who is serious, and keeps following up until they answer or say no.",
//     points: [
//       "Collects enquiries from your site, chats and ad forms in one place",
//       "Asks the right questions and scores each lead",
//       "Sends hot leads straight to you with the full context",
//     ],
//     ask: "New enquiry from the ad form: wants 200 units, needs a quote.",
//     reply:
//       "Marked hot. I asked for delivery date and budget, and sent you a summary. Quote draft is waiting for your approval.",
//   },
//   {
//     id: "payments",
//     label: ["Payments"],
//     x: 257,
//     y: 289,
//     title: "Collects the money",
//     summary:
//       "Sends payment requests in the conversation, confirms what has landed, and chases what has not.",
//     points: [
//       "Shares payment links inside the chat",
//       "Confirms payment and sends receipts automatically",
//       "Reminds late payers politely, on the schedule you set",
//     ],
//     ask: "I've paid, please confirm.",
//     reply:
//       "Payment received. Your receipt is attached and your order is now with delivery.",
//   },
//   {
//     id: "analytics",
//     label: ["Analytics"],
//     x: 143,
//     y: 289,
//     title: "Shows what is working",
//     summary:
//       "A plain-language summary every morning, so you do not need to open five dashboards to know how the business is doing.",
//     points: [
//       "Daily snapshot of sales, leads and response times",
//       "Connects each sale to the post or ad that led to it",
//       "Flags drops early, with a suggested fix",
//     ],
//     ask: "How did last week go?",
//     reply:
//       "Sales up 12%. Most came from the restock posts. Replies after 8 pm took 4x longer. I can cover those hours if you want.",
//   },
//   {
//     id: "care",
//     label: ["Customer", "care"],
//     x: 86,
//     y: 190,
//     title: "Answers customers, any hour",
//     summary:
//       "Handles the questions that fill your inbox, and brings in a person for the ones that need one.",
//     points: [
//       "Answers stock, price, delivery and policy questions instantly",
//       "Handles complaints calmly, and escalates with a written summary",
//       "Matches your tone, so customers hear your business, not a robot",
//     ],
//     ask: "My order is late and nobody is replying.",
//     reply:
//       "I'm sorry about the delay. Your order left the depot this morning and arrives tomorrow. I've flagged it to the team and will message you when it's out for delivery.",
//   },
// ];

// const steps = [
//   {
//     title: "Tell it about your business",
//     text: "Add your products, prices, delivery terms, and how you like to talk to customers. BeeBee learns from what you give it, and from your past conversations if you share them.",
//   },
//   {
//     title: "Set its limits",
//     text: "Decide what it can do alone, what needs your approval, and what it must always pass to you.",
//   },
//   {
//     title: "Let it work, then check in",
//     text: "BeeBee runs through the day. Each morning you get a short summary of what it did and what needs you.",
//   },
// ];

// const controls = [
//   {
//     mode: "Ask me first",
//     example: "Publishing a post, sending a quote, changing a price",
//     tone: "bg-[var(--comb)] border-[var(--edge)]",
//   },
//   {
//     mode: "Do it within limits",
//     example: "Answering questions, sending payment links, pausing an ad over budget",
//     tone: "bg-white border-[var(--edge)]",
//   },
//   {
//     mode: "Always hand to a person",
//     example: "Complaints, refunds, anything you mark as sensitive",
//     tone: "bg-[var(--ink)] text-white border-[var(--ink)]",
//   },
// ];

// const faqs = [
//   {
//     q: "Will customers know they are talking to an agent?",
//     a: "You choose. BeeBee can introduce itself as your assistant, or reply in your business's voice. Whenever a customer asks for a person, it hands over.",
//   },
//   {
//     q: "What happens when BeeBee does not know something?",
//     a: "It tells the customer it will check, passes the question to you with the conversation attached, and learns from your answer.",
//   },
//   {
//     q: "Can I see what BeeBee has done?",
//     a: "Yes. Every message, post, ad change and payment request is logged, so you can review it or undo it.",
//   },
//   {
//     q: "Do I need to use every part of it?",
//     a: "No. Start with customer care or leads, and switch on the other parts when you are ready.",
//   },
// ];

// function hexPoints(cx: number, cy: number, r: number) {
//   const k = 0.866;
//   return [
//     [cx, cy - r],
//     [cx + r * k, cy - r / 2],
//     [cx + r * k, cy + r / 2],
//     [cx, cy + r],
//     [cx - r * k, cy + r / 2],
//     [cx - r * k, cy - r / 2],
//   ]
//     .map((p) => p.join(","))
//     .join(" ");
// }

// function LogoMark({ size = 28 }: { size?: number }) {
//   return (
//     <svg width={size} height={size} viewBox="0 0 28 28" aria-hidden="true">
//       <polygon points={hexPoints(14, 14, 13)} fill="var(--honey)" />
//       <rect x="8" y="10.5" width="12" height="2.6" rx="1.3" fill="var(--ink)" />
//       <rect x="8" y="15.2" width="12" height="2.6" rx="1.3" fill="var(--ink)" />
//     </svg>
//   );
// }

// function CapabilityExplorer() {
//   const [activeId, setActiveId] = useState("sales");
//   const active = capabilities.find((c) => c.id === activeId) ?? capabilities[0];

//   return (
//     <div>
//       <svg
//         viewBox="0 0 400 380"
//         className="mx-auto w-full max-w-[460px]"
//         role="group"
//         aria-label="What BeeBee handles. Select a cell to see details."
//       >
//         {capabilities.map((c) => {
//           const selected = c.id === activeId;
//           const twoLines = c.label.length > 1;
//           return (
//             <g
//               key={c.id}
//               role="button"
//               tabIndex={0}
//               aria-pressed={selected}
//               aria-label={c.label.join(" ")}
//               onClick={() => setActiveId(c.id)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" || e.key === " ") {
//                   e.preventDefault();
//                   setActiveId(c.id);
//                 }
//               }}
//               className="group cursor-pointer outline-none"
//             >
//               <polygon
//                 points={hexPoints(c.x, c.y, 62)}
//                 strokeLinejoin="round"
//                 className={
//                   "transition-colors duration-200 motion-reduce:transition-none " +
//                   (selected
//                     ? "fill-[#F4B400] stroke-[#1E1B16] [stroke-width:2.5]"
//                     : "fill-[#FFF1C2] stroke-[#E5BE55] [stroke-width:1.5] group-hover:fill-[#FFE48A] group-focus-visible:stroke-[#1E1B16] group-focus-visible:[stroke-width:3]")
//                 }
//               />
//               <text
//                 x={c.x}
//                 y={twoLines ? c.y - 4 : c.y + 5}
//                 textAnchor="middle"
//                 fontSize="14"
//                 fontWeight="600"
//                 fill="#1E1B16"
//                 style={{ fontFamily: "var(--font-body)", pointerEvents: "none" }}
//               >
//                 {c.label.map((line, i) => (
//                   <tspan key={line} x={c.x} dy={i === 0 ? 0 : 17}>
//                     {line}
//                   </tspan>
//                 ))}
//               </text>
//             </g>
//           );
//         })}
//       </svg>

//       <div
//         className="mt-2 rounded-2xl border border-[var(--edge)] bg-white p-6 shadow-[0_1px_0_var(--edge)]"
//         aria-live="polite"
//       >
//         <h3
//           className="text-xl font-semibold tracking-tight"
//           style={{ fontFamily: "var(--font-display)" }}
//         >
//           {active.title}
//         </h3>
//         <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-[var(--muted)]">
//           {active.summary}
//         </p>

//         <div className="mt-5 flex flex-col gap-2 text-[15px] leading-snug">
//           <div className="max-w-[85%] self-start rounded-2xl rounded-bl-sm bg-[var(--comb)] px-4 py-2.5">
//             {active.ask}
//           </div>
//           <div className="max-w-[85%] self-end rounded-2xl rounded-br-sm bg-[var(--ink)] px-4 py-2.5 text-white">
//             {active.reply}
//           </div>
//         </div>

//         <ul className="mt-5 space-y-2 text-[15px]">
//           {active.points.map((p) => (
//             <li key={p} className="flex gap-3">
//               <svg
//                 width="16"
//                 height="18"
//                 viewBox="0 0 28 28"
//                 className="mt-1 shrink-0"
//                 aria-hidden="true"
//               >
//                 <polygon points={hexPoints(14, 14, 13)} fill="var(--honey)" />
//               </svg>
//               <span>{p}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// function Waitlist() {
//   const [email, setEmail] = useState("");
//   const [done, setDone] = useState(false);

//   function onSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     if (!email.trim()) return;
//     // TODO: send `email` to your backend, Resend, Mailchimp, a Google Sheet, etc.
//     setDone(true);
//   }

//   if (done) {
//     return (
//       <p className="rounded-xl bg-[var(--ink)] px-5 py-4 text-white" role="status">
//         You are on the list. We will email {email} when BeeBee opens up.
//       </p>
//     );
//   }

//   return (
//     <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
//       <label htmlFor="waitlist-email" className="sr-only">
//         Work email
//       </label>
//       <input
//         id="waitlist-email"
//         type="email"
//         required
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="you@yourbusiness.com"
//         className="h-12 flex-1 rounded-xl border border-[var(--ink)]/30 bg-white px-4 text-base outline-none placeholder:text-[var(--muted)] focus-visible:border-[var(--ink)] focus-visible:ring-2 focus-visible:ring-[var(--ink)]"
//       />
//       <button
//         type="submit"
//         className="h-12 rounded-xl bg-[var(--ink)] px-6 font-semibold text-white transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
//       >
//         Join the waitlist
//       </button>
//     </form>
//   );
// }

// export default function Home() {
//   return (
//     <div
//       className={`${display.variable} ${body.variable} min-h-screen text-[var(--ink)]`}
//       style={
//         {
//           "--ink": "#1E1B16",
//           "--muted": "#5E574B",
//           "--honey": "#F4B400",
//           "--comb": "#FFF1C2",
//           "--edge": "#EADBB0",
//           "--paper": "#FFFFFF",
//           fontFamily: "var(--font-body)",
//           backgroundColor: "#FFFFFF",
//         } as React.CSSProperties
//       }
//     >
//       {/* Nav */}
//       <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
//         <a href="#" className="flex items-center gap-2.5">
//           <LogoMark />
//           <span
//             className="text-xl font-bold tracking-tight"
//             style={{ fontFamily: "var(--font-display)" }}
//           >
//             BeeBee
//           </span>
//         </a>
//         <nav className="flex items-center gap-6 text-[15px]">
//           <a href="#how" className="hidden hover:underline sm:inline">
//             How it works
//           </a>
//           <a href="#control" className="hidden hover:underline sm:inline">
//             Control
//           </a>
//           <a href="#faq" className="hidden hover:underline sm:inline">
//             FAQ
//           </a>
//           <a
//             href="#waitlist"
//             className="rounded-lg bg-[var(--honey)] px-4 py-2 font-semibold transition-colors hover:bg-[#FFC82E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
//           >
//             Join the waitlist
//           </a>
//         </nav>
//       </header>

//       {/* Hero */}
//       <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1fr_1.05fr] lg:items-start lg:pt-16">
//         <div className="lg:pt-6">
//           <h1
//             className="text-[2.6rem] font-bold leading-[1.05] tracking-tight sm:text-6xl"
//             style={{ fontFamily: "var(--font-display)" }}
//           >
//             The busy work of your business, handled.
//           </h1>
//           <p className="mt-6 max-w-[34rem] text-lg leading-relaxed text-[var(--muted)]">
//             BeeBee is one agent that manages your content, runs your ads,
//             answers customers, closes sales, finds leads, collects payments and
//             tells you what is working. You run the business. It runs the inbox.
//           </p>
//           <div className="mt-8 flex flex-wrap gap-3">
//             <a
//               href="#waitlist"
//               className="rounded-xl bg-[var(--ink)] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
//             >
//               Join the waitlist
//             </a>
//             <a
//               href="#how"
//               className="rounded-xl border border-[var(--ink)]/30 px-6 py-3.5 font-semibold transition-colors hover:bg-[var(--comb)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
//             >
//               See how it works
//             </a>
//           </div>
//           <p className="mt-6 text-sm text-[var(--muted)]">
//             Select any cell on the right to see what BeeBee does and how it
//             sounds.
//           </p>
//         </div>

//         <CapabilityExplorer />
//       </section>

//       {/* How it works */}
//       <section id="how" className="border-y border-[var(--edge)] bg-[var(--comb)]">
//         <div className="mx-auto max-w-6xl px-6 py-20">
//           <h2
//             className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl"
//             style={{ fontFamily: "var(--font-display)" }}
//           >
//             Set it up once. Check in when you like.
//           </h2>
//           <ol className="mt-12 grid gap-10 md:grid-cols-3">
//             {steps.map((s, i) => (
//               <li key={s.title} className="flex gap-4">
//                 <svg
//                   width="44"
//                   height="44"
//                   viewBox="0 0 28 28"
//                   className="shrink-0"
//                   aria-hidden="true"
//                 >
//                   <polygon points={hexPoints(14, 14, 13)} fill="var(--honey)" />
//                   <text
//                     x="14"
//                     y="19"
//                     textAnchor="middle"
//                     fontSize="14"
//                     fontWeight="700"
//                     fill="#1E1B16"
//                   >
//                     {i + 1}
//                   </text>
//                 </svg>
//                 <div>
//                   <h3
//                     className="text-lg font-semibold"
//                     style={{ fontFamily: "var(--font-display)" }}
//                   >
//                     {s.title}
//                   </h3>
//                   <p className="mt-2 text-[15px] leading-relaxed text-[var(--muted)]">
//                     {s.text}
//                   </p>
//                 </div>
//               </li>
//             ))}
//           </ol>
//         </div>
//       </section>

//       {/* Control */}
//       <section id="control" className="mx-auto max-w-6xl px-6 py-20">
//         <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
//           <div>
//             <h2
//               className="text-3xl font-bold tracking-tight sm:text-4xl"
//               style={{ fontFamily: "var(--font-display)" }}
//             >
//               You decide what BeeBee can do on its own.
//             </h2>
//             <p className="mt-5 max-w-md text-lg leading-relaxed text-[var(--muted)]">
//               Give it room where the risk is low and keep a hand on the rest.
//               Everything it does is logged, so you can review it, and change
//               the rules whenever you want.
//             </p>
//           </div>
//           <div className="flex flex-col gap-3">
//             {controls.map((c) => (
//               <div key={c.mode} className={`rounded-2xl border p-5 ${c.tone}`}>
//                 <p
//                   className="text-lg font-semibold"
//                   style={{ fontFamily: "var(--font-display)" }}
//                 >
//                   {c.mode}
//                 </p>
//                 <p className="mt-1 text-[15px] opacity-80">{c.example}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section id="faq" className="border-t border-[var(--edge)]">
//         <div className="mx-auto max-w-3xl px-6 py-20">
//           <h2
//             className="text-3xl font-bold tracking-tight sm:text-4xl"
//             style={{ fontFamily: "var(--font-display)" }}
//           >
//             Questions
//           </h2>
//           <div className="mt-8 divide-y divide-[var(--edge)] border-y border-[var(--edge)]">
//             {faqs.map((f) => (
//               <details key={f.q} className="group py-5">
//                 <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium focus-visible:outline-2 focus-visible:outline-[var(--ink)]">
//                   {f.q}
//                   <span
//                     className="text-2xl leading-none transition-transform group-open:rotate-45 motion-reduce:transition-none"
//                     aria-hidden="true"
//                   >
//                     +
//                   </span>
//                 </summary>
//                 <p className="mt-3 max-w-prose leading-relaxed text-[var(--muted)]">
//                   {f.a}
//                 </p>
//               </details>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Waitlist */}
//       <section id="waitlist" className="bg-[var(--honey)]">
//         <div className="mx-auto max-w-3xl px-6 py-20 text-center">
//           <h2
//             className="text-3xl font-bold tracking-tight sm:text-5xl"
//             style={{ fontFamily: "var(--font-display)" }}
//           >
//             Put BeeBee to work.
//           </h2>
//           <p className="mx-auto mt-4 max-w-lg text-lg">
//             Join the waitlist and be among the first businesses to try it.
//           </p>
//           <div className="mx-auto mt-8 max-w-xl text-left">
//             <Waitlist />
//           </div>
//         </div>
//       </section>

//       <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-[var(--muted)] sm:flex-row">
//         <div className="flex items-center gap-2">
//           <LogoMark size={20} />
//           <span>BeeBee</span>
//         </div>
//         <p>&copy; {new Date().getFullYear()} BeeBee. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

import { useState } from "react";
import { Nunito_Sans } from "next/font/google";

// One family, two weights: bold for "ARUYA" and headlines, light for "LABS" and taglines.
const sans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "600", "700", "800"],
});

type Capability = {
  id: string;
  tab: string;
  title: string;
  summary: string;
  points: string[];
  ask: string;
  reply: string;
};

const capabilities: Capability[] = [
  {
    id: "channel",
    tab: "Channel posts",
    title: "Keeps your channel active",
    summary:
      "Plans, writes and schedules the posts your Telegram channel needs, in your voice.",
    points: [
      "Drafts a week of posts from your products, offers and news",
      "Schedules them at the times your audience reads",
      "Queues drafts for your approval, or posts within your rules",
    ],
    ask: "Plan this week's channel posts. New stock arrived on Monday.",
    reply:
      "Five posts drafted: restock announcement, two product highlights, one customer photo, one weekend offer. Ready for your review.",
  },
  {
    id: "groups",
    tab: "Groups & community",
    title: "Looks after your community",
    summary:
      "Welcomes new members, answers common questions in the group and keeps spam out.",
    points: [
      "Greets new members and points them to the pinned rules",
      "Answers repeat questions so admins do not have to",
      "Removes spam and flags anything that needs a person",
    ],
    ask: "How do I join the next session?",
    reply:
      "Next session is Saturday at 10 am. Registration is open in the pinned message. Want me to send you the link?",
  },
  {
    id: "chats",
    tab: "Private chats",
    title: "Answers customers, any hour",
    summary:
      "Handles the direct messages that fill your inbox, and brings in a person for the ones that need one.",
    points: [
      "Answers price, stock, delivery and policy questions instantly",
      "Takes orders and confirms the details",
      "Escalates complaints with a written summary",
    ],
    ask: "Do you deliver to Abuja? How much?",
    reply:
      "Yes, we deliver to Abuja in 2 to 3 days. Delivery costs are shown at checkout. Would you like to place an order?",
  },
  {
    id: "leads",
    tab: "Leads",
    title: "Finds and qualifies new leads",
    summary:
      "Captures every enquiry, works out who is serious, and follows up until they answer or say no.",
    points: [
      "Collects enquiries from your channel, groups and chats in one place",
      "Asks the right questions and scores each lead",
      "Sends serious leads straight to you with the full context",
    ],
    ask: "I want to order 200 units. Can I get a quote?",
    reply:
      "Thanks. Before I prepare your quote: what delivery date and budget are you working with?",
  },
  {
    id: "broadcasts",
    tab: "Broadcasts",
    title: "Reaches the right people",
    summary:
      "Sends announcements and reminders to the right subscribers, not everyone at once.",
    points: [
      "Splits your audience by interest or past activity",
      "Sends offers, reminders and updates on a schedule",
      "Stops messaging anyone who opts out",
    ],
    ask: "Tell everyone who asked about the leather range that it is back.",
    reply:
      "42 people asked about the leather range. Message drafted and ready to send. Approve to go out at 6 pm.",
  },
  {
    id: "insights",
    tab: "Insights",
    title: "Shows what is working",
    summary:
      "A plain-language summary every morning, so you know how the business is doing without digging through stats.",
    points: [
      "Daily snapshot of new members, enquiries and response times",
      "Shows which posts bring people in",
      "Flags drops early, with a suggested fix",
    ],
    ask: "How did last week go?",
    reply:
      "Channel grew by 120 members. The restock post brought the most enquiries. Replies after 8 pm took 4x longer. I can cover those hours if you want.",
  },
];

const steps = [
  {
    title: "Tell us about your business",
    text: "Share your products, prices, delivery terms and how you like to talk to customers. We set the bot up around them.",
  },
  {
    title: "Set its limits",
    text: "Decide what the engine can do alone, what needs your approval, and what it must always pass to you.",
  },
  {
    title: "Let it work, then check in",
    text: "The bot runs through the day. Each morning you get a short summary of what it did and what needs you.",
  },
];

const controls = [
  {
    mode: "Ask me first",
    example: "Publishing a post, sending a broadcast, sending a quote",
    tone: "border-[#2a2a2a] bg-[#161616] text-[#e6e6e6]",
  },
  {
    mode: "Do it within limits",
    example: "Answering questions, welcoming members, removing spam",
    tone: "border-[#2a2a2a] bg-[#0d0d0d] text-[#e6e6e6]",
  },
  {
    mode: "Always hand to a person",
    example: "Complaints, refunds, anything you mark as sensitive",
    tone: "border-[#d4d4d4] bg-[#e8e8e8] text-[#0a0a0a]",
  },
];

const faqs = [
  {
    q: "Will customers know they are talking to a bot?",
    a: "You choose. The bot can introduce itself as your assistant, or reply in your business's voice. Whenever a customer asks for a person, it hands over.",
  },
  {
    q: "What happens when the bot does not know something?",
    a: "It tells the customer it will check, passes the question to you with the conversation attached, and learns from your answer.",
  },
  {
    q: "Can I see what the bot has done?",
    a: "Yes. Every message, post and broadcast is logged, so you can review it.",
  },
  {
    q: "Do I need to use every part of it?",
    a: "No. Start with private chats or channel posts, and switch on the other parts when you are ready.",
  },
];

// Black linen: two faint crossing line patterns over near-black.
const linen: React.CSSProperties = {
  backgroundColor: "#050505",
  backgroundImage:
    "repeating-linear-gradient(0deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 3px)," +
    "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0 1px, transparent 1px 3px)," +
    "radial-gradient(ellipse at 70% 0%, rgba(255,255,255,0.07), transparent 60%)",
};

const silver: React.CSSProperties = {
  backgroundImage: "linear-gradient(180deg, #f4f4f4 0%, #9d9d9d 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`tracking-tight ${className}`}>
      <span className="font-extrabold">ARUYA</span>
      <span className="font-light">LABS</span>
    </span>
  );
}

function CapabilityExplorer() {
  const [activeId, setActiveId] = useState("channel");
  const active = capabilities.find((c) => c.id === activeId) ?? capabilities[0];

  return (
    <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
      <div
        role="tablist"
        aria-label="What the Telegram AI Social Engine handles"
        className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible"
      >
        {capabilities.map((c) => {
          const selected = c.id === activeId;
          return (
            <button
              key={c.id}
              role="tab"
              id={`tab-${c.id}`}
              aria-selected={selected}
              aria-controls="capability-panel"
              onClick={() => setActiveId(c.id)}
              className={
                "shrink-0 rounded-lg border px-4 py-3 text-left text-[15px] transition-colors motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white " +
                (selected
                  ? "border-[#e8e8e8] bg-[#e8e8e8] font-bold text-[#0a0a0a]"
                  : "border-[#2a2a2a] text-[#c9c9c9] hover:border-[#6b6b6b] hover:text-white")
              }
            >
              {c.tab}
            </button>
          );
        })}
      </div>

      <div
        id="capability-panel"
        role="tabpanel"
        aria-labelledby={`tab-${active.id}`}
        aria-live="polite"
        className="rounded-xl border border-[#2a2a2a] bg-[#0d0d0d]/80 p-6 sm:p-8"
      >
        <h3 className="text-2xl font-bold tracking-tight text-white">
          {active.title}
        </h3>
        <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-[#a8a8a8]">
          {active.summary}
        </p>

        <div className="mt-6 flex flex-col gap-2 text-[15px] leading-snug">
          <div className="max-w-[85%] self-start rounded-2xl rounded-bl-sm bg-[#242424] px-4 py-2.5 text-[#e6e6e6]">
            {active.ask}
          </div>
          <div className="max-w-[85%] self-end rounded-2xl rounded-br-sm bg-[#e8e8e8] px-4 py-2.5 text-[#0a0a0a]">
            {active.reply}
          </div>
        </div>

        <ul className="mt-6 space-y-2 text-[15px] text-[#d4d4d4]">
          {active.points.map((p) => (
            <li key={p} className="flex gap-3">
              <span
                className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#9d9d9d]"
                aria-hidden="true"
              />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SetupRequest() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: send `email` to your backend, Resend, Mailchimp, a Google Sheet, etc.
    setDone(true);
  }

  if (done) {
    return (
      <p
        className="rounded-xl border border-[#2a2a2a] bg-[#0d0d0d] px-5 py-4 text-white"
        role="status"
      >
        Thanks. We will email {email} to talk about your Telegram setup.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="setup-email" className="sr-only">
        Work email
      </label>
      <input
        id="setup-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@yourbusiness.com"
        className="h-12 flex-1 rounded-lg border border-[#3a3a3a] bg-[#0d0d0d] px-4 text-base text-white outline-none placeholder:text-[#7a7a7a] focus-visible:border-white focus-visible:ring-2 focus-visible:ring-white"
      />
      <button
        type="submit"
        className="h-12 rounded-lg bg-[#e8e8e8] px-6 font-bold text-[#0a0a0a] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Get your bot set up
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <div
      className={`${sans.variable} min-h-screen`}
      style={
        {
          fontFamily: "var(--font-sans)",
          backgroundColor: "#e4ecf2",
          color: "#0a0a0a",
        } as React.CSSProperties
      }
    >
      {/* Nav */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" aria-label="AruyaLabs home">
          <Wordmark className="text-xl" />
        </a>
        <nav className="flex items-center gap-6 text-[15px]">
          <a href="#engine" className="hidden hover:underline sm:inline">
            Social Engine
          </a>
          <a href="#how" className="hidden hover:underline sm:inline">
            How it works
          </a>
          <a href="#faq" className="hidden hover:underline sm:inline">
            FAQ
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-[#0a0a0a] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#2a2a2a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0a0a0a]"
          >
            Get started
          </a>
        </nav>
      </header>

      {/* Hero: the black linen slab from the brand banner */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-6">
        <div
          style={linen}
          className="flex min-h-[26rem] flex-col justify-end rounded-sm px-6 py-10 text-right shadow-[0_14px_28px_-10px_rgba(20,40,60,0.55)] sm:px-12 sm:py-14"
        >
          <Wordmark className="text-2xl text-[#c4c4c4] sm:text-3xl" />
          <h1
            className="mt-5 text-[2.75rem] font-bold leading-[1.05] tracking-tight sm:text-7xl"
            style={silver}
          >
            Designing the future.
          </h1>
          <p className="mt-3 text-xl font-light text-[#b0b0b0] sm:text-3xl">
            helping business grow smoothly.
          </p>
          <p className="ml-auto mt-8 max-w-[34rem] text-base leading-relaxed text-[#a8a8a8] sm:text-lg">
            We build digital solutions that help businesses grow and run
            efficiently. Right now, that means Telegram bots set up around your
            business, starting with the Telegram AI Social Engine.
          </p>
          <div className="mt-8 flex flex-wrap justify-end gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-[#e8e8e8] px-6 py-3.5 font-bold text-[#0a0a0a] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get your bot set up
            </a>
            <a
              href="#engine"
              className="rounded-lg border border-[#5a5a5a] px-6 py-3.5 font-semibold text-[#e6e6e6] transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              See what it does
            </a>
          </div>
        </div>
      </section>

      {/* Telegram AI Social Engine */}
      <section id="engine" className="mx-auto max-w-6xl px-6 pb-20">
        <div
          style={linen}
          className="rounded-sm px-6 py-12 shadow-[0_14px_28px_-10px_rgba(20,40,60,0.55)] sm:px-12 sm:py-16"
        >
          <h2
            className="max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl"
            style={silver}
          >
            Telegram AI Social Engine
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[#a8a8a8]">
            One bot that runs your Telegram presence: your channel, your groups
            and your private chats. Pick a part to see what it does and how it
            sounds.
          </p>
          <div className="mt-10">
            <CapabilityExplorer />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-y border-[#c3d0da] bg-[#d6e2ea]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
            Set it up once. Check in when you like.
          </h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0a0a0a] text-lg font-bold text-white"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#3c4852]">
                    {s.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Control */}
      <section id="control" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              You decide what the bot can do on its own.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-[#3c4852]">
              Give it room where the risk is low and keep a hand on the rest.
              Everything it does is logged, so you can review it, and change
              the rules whenever you want.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {controls.map((c) => (
              <div key={c.mode} className={`rounded-lg border p-5 ${c.tone}`}>
                <p className="text-lg font-bold">{c.mode}</p>
                <p className="mt-1 text-[15px] opacity-80">{c.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-[#c3d0da]">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Questions
          </h2>
          <div className="mt-8 divide-y divide-[#c3d0da] border-y border-[#c3d0da]">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold focus-visible:outline-2 focus-visible:outline-[#0a0a0a]">
                  {f.q}
                  <span
                    className="text-2xl leading-none transition-transform group-open:rotate-45 motion-reduce:transition-none"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-prose leading-relaxed text-[#3c4852]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20">
        <div
          style={linen}
          className="rounded-sm px-6 py-14 text-center shadow-[0_14px_28px_-10px_rgba(20,40,60,0.55)] sm:px-12 sm:py-20"
        >
          <h2
            className="text-3xl font-bold tracking-tight sm:text-5xl"
            style={silver}
          >
            Put a bot to work for your business.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-[#a8a8a8]">
            Leave your email and we will get in touch about setting up your
            Telegram bot.
          </p>
          <div className="mx-auto mt-8 max-w-xl text-left">
            <SetupRequest />
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-[#3c4852] sm:flex-row">
        <Wordmark className="text-base text-[#0a0a0a]" />
        <p>&copy; {new Date().getFullYear()} AruyaLabs. All rights reserved.</p>
      </footer>
    </div>
  );
}
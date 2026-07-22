import type { FAQ } from '@/lib/content/faqs'

/**
 * ITSolute Connect — product marketing copy.
 *
 * Connect is a distinct SaaS product (separate app at connect.itsolute.com)
 * built on the WhatsApp Business Platform. This page is a genuine, specific
 * product page: concrete descriptions, real pricing, honest platform detail.
 */

export const CONNECT_APP_URL = 'https://connect.itsolute.com'

export const connectCopy = {
  hero: {
    eyebrow: 'ITSOLUTE CONNECT · MISSED-CALL RECOVERY',
    headline: 'Every missed call is a customer walking away. Connect gets them back.',
    sub: 'When your business misses a call, ITSolute Connect automatically sends the caller a WhatsApp message from your own number — so a missed call becomes a booking instead of a lost customer. Built for clinics, salons, home-service providers, and small shops across India.',
    getStarted: 'Get started',
    signIn: 'Sign in',
  },

  problem: {
    eyebrow: 'THE PROBLEM',
    headline: 'You cannot answer every call. The ones you miss cost you real money.',
    body: 'A front desk gets busy. A one-person shop steps away. Calls come in after hours. For a local service business, an unanswered call usually means the customer simply dials the next name on the list — and you never even know they tried to reach you.',
    stats: [
      {
        value: 'Up to 1 in 4',
        label: 'calls to small local businesses go unanswered during busy hours.',
      },
      {
        value: 'Most callers',
        label: 'do not leave a voicemail and do not call back a second time.',
      },
      {
        value: 'A single job',
        label: 'recovered per week typically pays for Connect many times over.',
      },
    ],
  },

  how: {
    eyebrow: 'HOW IT WORKS',
    headline: 'A missed call becomes a WhatsApp conversation in seconds.',
    steps: [
      {
        index: '01',
        title: 'The call goes unanswered',
        body: 'Connect watches for calls your business could not pick up — during a rush, after hours, or when the line was already busy.',
      },
      {
        index: '02',
        title: 'An instant WhatsApp goes out',
        body: 'Within seconds, the caller gets a WhatsApp message from your own business number: a friendly note that you missed them, with a way to book, ask a question, or get a callback.',
      },
      {
        index: '03',
        title: 'You reply from one dashboard',
        body: 'The conversation lands in your Connect inbox. You or your staff reply from a simple dashboard on any phone or computer — no personal numbers, no scattered chats.',
      },
    ],
  },

  plans: {
    eyebrow: 'PLANS',
    headline: 'Start with recovery. Grow into a full front desk.',
    sub: 'Simple monthly pricing in Indian Rupees. Plans marked "+ usage" pass through WhatsApp conversation charges billed by Meta at cost — no markup, no surprises.',
    tiers: [
      {
        name: 'Recovery',
        price: '₹499',
        cadence: '/month',
        positioning: 'Never lose a missed call again.',
        description:
          'The essentials of missed-call recovery for a single business number.',
        features: [
          'Automatic WhatsApp reply to every missed call',
          'Messages sent from your own business number',
          'Shared inbox to reply and follow up',
          'Business-hours and after-hours messages',
        ],
        highlight: false,
        comingSoon: false,
      },
      {
        name: 'Recovery Pro',
        price: '₹999',
        cadence: '/month',
        positioning: 'Recovery, tuned for busier teams.',
        description:
          'For businesses handling more calls and more than one staff member on the phones.',
        features: [
          'Everything in Recovery',
          'Custom message templates and follow-up sequences',
          'Multiple staff numbers and call sources',
          'Recovered-call analytics and reporting',
          'Booking-link and quick-reply shortcuts',
        ],
        highlight: true,
        comingSoon: false,
      },
      {
        name: 'Front Desk',
        price: '₹2,499',
        cadence: '/month + usage',
        positioning: 'A real front desk that lives on WhatsApp.',
        description:
          'A full shared team inbox for every customer conversation, not just missed calls.',
        features: [
          'Everything in Recovery Pro',
          'Unified team inbox for all WhatsApp chats',
          'Assign chats, tag, and add internal notes',
          'Saved replies, booking links, and broadcasts',
          'WhatsApp conversation charges billed at cost',
        ],
        highlight: false,
        comingSoon: false,
      },
      {
        name: 'AI Front Desk',
        price: '₹4,999',
        cadence: '/month + usage',
        positioning: 'An assistant that answers first.',
        description:
          'An AI assistant greets the caller, answers common questions, and books appointments — handing off to your team whenever a human is needed.',
        features: [
          'Everything in Front Desk',
          'AI replies instantly, day or night',
          'Answers FAQs and captures booking details',
          'Automatic appointment booking',
          'Seamless handoff to a human on your team',
        ],
        highlight: false,
        comingSoon: true,
      },
    ],
  },

  // Honest platform detail — how Connect uses WhatsApp. This matters to
  // customers and reflects how the product actually operates.
  platform: {
    eyebrow: 'BUILT ON WHATSAPP',
    headline: 'Powered by the WhatsApp Business Platform.',
    points: [
      {
        title: 'Your number, your brand',
        body: 'Messages are sent from your business’s own WhatsApp number through the official WhatsApp Business Platform — customers see you, not a stranger.',
      },
      {
        title: 'Consent-first messaging',
        body: 'Connect replies to people who called you first. We follow WhatsApp’s Business Messaging Policy, and every conversation includes a clear way to opt out.',
      },
      {
        title: 'Templates approved by Meta',
        body: 'Outbound recovery messages use message templates reviewed and approved through the WhatsApp Business Platform. We help you set these up correctly.',
      },
      {
        title: 'Your data stays yours',
        body: 'Conversations and customer contacts belong to your business. Export them or leave any time. See our Privacy Policy for the full detail.',
      },
    ],
  },

  finalCta: {
    headline: 'Turn your missed calls into your next customers.',
    sub: 'Set up in an afternoon. No new hardware. Works with the phone number you already use.',
  },
} as const

export const connectFAQs: FAQ[] = [
  {
    q: 'Do I need a new phone number?',
    a: 'No. Connect works with your existing business number by registering it on the WhatsApp Business Platform. Your customers keep seeing the same number they already know. We handle the setup with you.',
  },
  {
    q: 'How does Connect know I missed a call?',
    a: 'During onboarding we connect Connect to your business phone line or call system. When a call comes in and is not answered — because you were busy, closed, or the line was engaged — Connect logs it as missed and triggers the WhatsApp follow-up automatically.',
  },
  {
    q: 'What does the customer receive?',
    a: 'A WhatsApp message from your business number, sent within seconds of the missed call. It is a short, friendly note letting them know you saw they called, with an easy way to book, ask a question, or request a callback. You control the wording.',
  },
  {
    q: 'Is this allowed under WhatsApp’s rules?',
    a: 'Yes. Connect is built on the official WhatsApp Business Platform and only messages people who contacted your business first. We follow WhatsApp’s Business Messaging Policy, use Meta-approved message templates, and include a clear opt-out in every conversation.',
  },
  {
    q: 'What does "+ usage" mean on the Front Desk plans?',
    a: 'WhatsApp charges a small per-conversation fee, set by Meta, for business-initiated conversations. On Front Desk and AI Front Desk we pass those charges through at cost — you pay exactly what Meta charges, with no markup added by us. The Recovery and Recovery Pro plans include a standard allowance for typical small-business volumes.',
  },
  {
    q: 'What kinds of businesses is Connect for?',
    a: 'Small local service businesses that live and die by their phone: clinics and dental practices, salons and spas, home-service providers like electricians and plumbers, repair shops, tuition centres, and small retail shops. If a missed call means a lost customer, Connect is for you.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most businesses are live the same day. We register your number on the WhatsApp Business Platform, connect your call source, set up your recovery message, and show your team the dashboard. Our Kerala-based team does this with you over a call.',
  },
  {
    q: 'When is the AI Front Desk available?',
    a: 'The AI Front Desk is in active development and rolling out to existing Connect customers first. Start on any current plan today, and you will be able to upgrade to AI Front Desk when it launches.',
  },
]

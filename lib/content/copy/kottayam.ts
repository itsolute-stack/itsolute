import type { FAQ } from '@/lib/content/faqs'

/**
 * Kottayam hub page copy. The definitive "IT services in Kottayam" landing
 * page — frames every ITSolute service for a local buyer and carries the
 * strongest local-intent signals on the site. Kottayam is mentioned ~47×
 * sitewide but had no dedicated page before this.
 */

export const kottayamCopy = {
  hero: {
    eyebrow: 'IT SERVICES · KOTTAYAM',
    headline: 'Your local IT team in Kottayam.',
    sub: 'Hardware, laptop repair, software, office networks, AMC support, and automation — delivered in person, across Kottayam and central Kerala. Our office is on Parthas Lane. Walk in, call, or send us a WhatsApp.',
    primaryCta: 'Book a free consultation',
    whatsappMessage: 'Hi ITSolute, I need IT support in Kottayam.',
  },

  intro: {
    eyebrow: 'ONE PARTNER FOR EVERY IT NEED',
    headline: 'Everything a Kottayam business needs from IT — under one roof.',
    body: 'Most Kottayam businesses juggle a laptop dealer, a repair shop, a Tally guy, and whoever set up the WiFi. When something breaks, you call four people and still wait days for a fix. ITSolute replaces all of that with one local team that supplies, sets up, and supports your entire IT — and picks up the phone when you call.',
  },

  services: {
    eyebrow: 'WHAT WE DO IN KOTTAYAM',
    headline: 'Six services. One number to call.',
    sub: 'Every service below is delivered on-site across Kottayam — with GST invoicing, written quotes, and a Malayalam-speaking team.',
  },

  whyLocal: {
    eyebrow: 'WHY A LOCAL PARTNER',
    headline: 'Remote support can’t walk into your office. We can.',
    points: [
      {
        title: 'We come to you',
        body: 'On-site visits across Kottayam town and the surrounding areas — not everything can be fixed over a phone call, and we don’t pretend otherwise.',
      },
      {
        title: 'Same-day response',
        body: 'When something critical breaks — Tally down during filing, office WiFi dead, a dead laptop before a deadline — we prioritise same-day attention for Kottayam clients.',
      },
      {
        title: 'A real office you can visit',
        body: 'We’re on Parthas Lane in Kottayam. Walk in with a laptop, drop off hardware, or sit down and plan an office IT setup face to face.',
      },
      {
        title: 'Malayalam-speaking team',
        body: 'Explain the problem in the language you think in. No call-centre scripts, no translation gap between you and the person fixing it.',
      },
      {
        title: 'We know local businesses',
        body: 'Clinics, CA offices, schools, shops, real-estate firms — we already run IT for businesses like yours across Kottayam. We know what works here.',
      },
      {
        title: 'Written quotes, GST invoices',
        body: 'Fixed-price quotes before we start and a proper GST invoice after. No hourly nickel-and-diming, no surprise bills.',
      },
    ],
  },

  visit: {
    eyebrow: 'FIND US',
    headline: 'Our office is on Parthas Lane, Kottayam.',
    body: 'Drop in during business hours for a laptop repair, a hardware quote, or to plan an office IT project. Prefer we come to you? Book a free on-site consultation anywhere in Kottayam.',
  },

  faq: {
    eyebrow: 'KOTTAYAM · FAQ',
    headline: 'Questions from Kottayam businesses.',
  },

  finalCta: {
    headline: 'Need IT help in Kottayam? We’re 10 minutes away.',
    sub: 'Walk into our Parthas Lane office, WhatsApp us a photo of the problem, or book a free on-site consultation anywhere in Kottayam and central Kerala.',
    primary: 'Book a free consultation',
    secondary: 'WhatsApp us',
  },
} as const

export const kottayamFAQs: FAQ[] = [
  {
    q: 'Where is ITSolute’s office in Kottayam?',
    a: 'We’re on Parthas Lane, Kottayam – 686001. You can walk in during business hours (Mon–Sat, 9:00–19:00) to drop off a laptop for repair, collect a hardware quote, or plan an office IT project in person.',
  },
  {
    q: 'Do you provide on-site IT support in Kottayam?',
    a: 'Yes. On-site support across Kottayam is our default — for office networking, hardware installs, AMC visits, and anything that can’t be sorted remotely. For critical issues we prioritise same-day attention for Kottayam clients.',
  },
  {
    q: 'Which areas around Kottayam do you cover?',
    a: 'Kottayam town and the surrounding region, and across central Kerala — including Ernakulam, Pathanamthitta, and Alappuzha. We also serve Kochi and Thiruvananthapuram for larger projects. If you’re unsure whether we cover your location, just ask on WhatsApp.',
  },
  {
    q: 'Do you offer AMC contracts for Kottayam businesses?',
    a: 'Yes. Our annual maintenance contracts cover hardware, software, networks, and support under one monthly retainer, with on-site visits included for Kottayam clients. See our AMC page for what’s covered, or ask for a quote.',
  },
  {
    q: 'Can you supply and set up computers for a new Kottayam office?',
    a: 'That’s one of the most common things we do. We supply the laptops and desktops, set up the network and WiFi, license the software (Microsoft 365, Google Workspace, Zoho, Tally), and hand over a documented, working office — with GST invoicing throughout.',
  },
  {
    q: 'Do you issue GST invoices?',
    a: 'Always. Every hardware sale, service, and AMC is billed with a proper GST invoice in your company’s name — important for input credit and clean books.',
  },
]

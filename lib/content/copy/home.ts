/**
 * Page-level prose for the Home page.
 * Edit text here — no JSX changes needed.
 */

export const homeCopy = {
  hero: {
    eyebrow: 'IT SERVICES · KERALA · 10+ YEARS',
    headlineLineOne: 'IT that just works.',
    headlineLineTwo: 'For businesses that mean business.',
    sub: 'Hardware, software, support, and automation — under one roof. Serving SMBs across Kochi, Kottayam, Pathanamthitta, and the rest of Kerala.',
    primaryCta: 'Get a free IT audit',
    secondaryCta: 'Talk on WhatsApp',
    whatsappMessage:
      "Hi ITSolute, I’d like to know more about your services.",
    trustStrip: 'Trusted by clinics · schools · offices · shops · across Kerala',
  },
  problem: {
    eyebrow: 'THE PROBLEM',
    headline:
      'Most Kerala SMBs have four IT vendors. None of them are accountable.',
    sub: 'A laptop guy. A nephew who handles the website. A CA who set up Tally. A random shop for repairs. When something breaks, you call four people and still don’t get a fix.',
    statements: [
      {
        title: '“Our printer stopped working.”',
        body: 'Laptop dealer says it’s not their problem. Repair guy isn’t available till Monday.',
      },
      {
        title: '“Our Tally is acting up.”',
        body: 'CA’s assistant tries something over the phone. Nothing helps.',
      },
      {
        title: '“Our office WiFi is down.”',
        body: 'Internet provider blames the router. Router guy blames the internet.',
      },
    ],
  },
  services: {
    eyebrow: 'WHAT WE DO',
    headline: 'Everything your business needs from IT — under one roof.',
  },
  whyUs: {
    eyebrow: 'WHY ITSOLUTE',
    headline:
      'Other IT companies sell you one thing. We solve the whole problem.',
    points: [
      {
        index: '01',
        title: 'One vendor for all IT.',
        body: 'Stop juggling. Get everything from one accountable partner.',
      },
      {
        index: '02',
        title: 'We run our own businesses on this stack.',
        body: 'Clean Warks, CCTVPROS, Senza Aura. We’re our own case study.',
      },
      {
        index: '03',
        title: 'Kerala-rooted, Malayalam-spoken.',
        body: 'Local context, local language, local trust.',
      },
      {
        index: '04',
        title: 'Written contracts, transparent pricing.',
        body: 'Fixed quotes, clear scope, no surprises.',
      },
    ],
  },
  featuredAmc: {
    eyebrow: 'OUR FLAGSHIP SERVICE',
    headline: 'The IT team your business needs, without hiring one.',
    body: 'For a single monthly retainer, ITSolute becomes your in-house IT department. We handle hardware, software, networks, backups — and we pick up the phone when something breaks.',
    metrics: [
      { value: '< 2hr', label: 'Response time' },
      { value: '24/7', label: 'WhatsApp support' },
      { value: '10+', label: 'Years in Kerala' },
    ],
    cta: 'See AMC plans',
  },
  featuredAutomation: {
    eyebrow: 'PREMIUM CAPABILITY',
    headline: 'Stop doing IT work that software should do for you.',
    body: 'We build automation that runs your business while you sleep. WhatsApp lead flows, automated invoicing, multi-branch dashboards, Zoho One implementations — systems that scale a business without scaling the headcount.',
    note: 'Built on our own businesses first. Then deployed for clients.',
    cta: 'See how we automate',
  },
  caseStudies: {
    eyebrow: 'REAL WORK · REAL OUTCOMES',
    headline: 'We don’t just sell IT. We build it for our own companies.',
  },
  industries: {
    eyebrow: 'WE WORK WITH',
    headline: 'Kerala businesses that can’t afford bad IT.',
  },
  process: {
    eyebrow: 'HOW WE WORK',
    headline: 'Five steps from chaos to handled.',
  },
  testimonials: {
    eyebrow: 'WHAT CLIENTS SAY',
    headline: 'The work speaks. Sometimes the clients do too.',
  },
  faq: {
    eyebrow: 'COMMON QUESTIONS',
    headline: 'Everything you wanted to ask before you call.',
  },
  finalCta: {
    headline: 'Stop firefighting IT issues. Start running your business.',
    sub: 'Free IT audit. No commitment. We’ll review your hardware, software, network, and backup — and tell you what’s working and what isn’t.',
    primary: 'Book a free audit',
    secondary: 'WhatsApp us',
  },
} as const

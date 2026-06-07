/**
 * Page-level prose for the Home page.
 * Edit text here — no JSX changes needed.
 */

export const homeCopy = {
  hero: {
    eyebrow: 'LAPTOPS · SOFTWARE · NETWORKING · KERALA',
    headlineLineOne: 'IT that just works.',
    headlineLineTwo: 'For businesses that mean business.',
    sub: 'Laptops, networks, software, repairs, automation — and the team to keep it all running. Serving Kottayam, Kochi, and businesses across Kerala.',
    primaryCta: 'Get a free IT consultation',
    secondaryCta: 'Talk on WhatsApp',
    whatsappMessage:
      "Hi ITSolute, I'd like to know more about your services.",
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
        title: 'A real workshop in Kottayam, not a sales counter.',
        body: 'Parthas Lane. Walk in, see the bench, meet the technicians. Most IT problems get diagnosed while you wait.',
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
  featuredHardware: {
    eyebrow: 'WHAT MOST CLIENTS START WITH',
    headline: 'Hardware that’s right-sized for Kerala SMBs.',
    body: 'We supply business-grade laptops, desktops, servers, and peripherals — new or refurbished. From a single laptop for your CA to a 50-machine rollout for a school. Authorised resellers, GST invoicing, doorstep delivery across Kerala.',
    metrics: [
      { value: '100+', label: 'Models in stock or sourcable' },
      { value: '48hr', label: 'Typical Kerala delivery' },
      { value: '12mo', label: 'Manufacturer warranty' },
    ],
    cta: 'Browse hardware',
  },
  featuredLaptopCare: {
    eyebrow: 'EVERYDAY SUPPORT',
    headline: 'Your laptop, fixed today. Not “sometime next week.”',
    body: 'Screen replacements, keyboard fixes, battery swaps, SSD upgrades, data recovery — done by technicians, not guesswork. Most repairs ready in 24–72 hours. Free diagnosis for businesses.',
    note: 'Walk-ins welcome at our Parthas Lane workshop',
    cta: 'See repair pricing',
  },
  featuredAutomation: {
    eyebrow: 'PREMIUM CAPABILITY',
    headline: 'Stop doing IT work that software should do for you.',
    body: 'We build automation that runs your business while you sleep. WhatsApp lead flows, automated invoicing, multi-branch dashboards, Zoho One implementations — systems that scale a business without scaling the headcount.',
    note: 'Built by a team that has been deploying these systems across Kerala for years. Ask us for a live walkthrough.',
    cta: 'See how we automate',
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
  amcClosing: {
    eyebrow: 'THE LONG-TERM RELATIONSHIP',
    headline: 'Stop calling four vendors. Get one IT team on retainer.',
    body: 'Most of our hardware, software, and repair clients move to an AMC after the first project. Predictable monthly cost, < 2hr response, onsite + remote support, written SLAs.',
    metrics: [
      { value: '< 2hr', label: 'Response time' },
      { value: '24/7', label: 'WhatsApp support' },
      { value: 'Written', label: 'SLA + scope' },
    ],
    cta: 'See AMC plans',
  },
  faq: {
    eyebrow: 'COMMON QUESTIONS',
    headline: 'Everything you wanted to ask before you call.',
  },
  finalCta: {
    headline:
      'Whether you need a laptop, a network, or a fix — we’re 10 minutes away in Kottayam.',
    sub: 'Walk into our Parthas Lane office. WhatsApp us a photo of the problem. Or book a free onsite consultation anywhere in Kerala.',
    primary: 'Book a free consultation',
    secondary: 'WhatsApp us',
  },
} as const

export const aboutCopy = {
  hero: {
    eyebrow: 'ABOUT',
    headline: 'Built in Kerala. For Kerala businesses.',
    sub: 'ITSolute Systems exists because the average Kerala SMB deserves better than four uncoordinated vendors.',
  },
  story: {
    eyebrow: 'OUR STORY',
    headline: 'We started ITSolute because we kept seeing the same broken pattern.',
    paragraphs: [
      'Every small business we worked with had the same setup: a laptop guy who didn’t do networks, a network guy who didn’t do software, a CA who handled Tally but nothing else, and a nephew who built the website three years ago and hasn’t answered the phone since.',
      'When something broke — and something always broke — the business owner ended up coordinating between four vendors who all blamed each other. Hours lost. Trust eroded. And in the end, the problem still wasn’t fixed.',
      'We started ITSolute Systems to be the opposite of that. One vendor. One number. Written contracts. Transparent pricing. Hardware, software, networks, support, and automation — all under one roof, all accountable.',
      'We’re Kerala-rooted because we believe local businesses deserve local IT partners who speak their language, understand their context, and show up onsite when it matters. We’ve been doing this for more than a decade across the state, and the model works.',
    ],
  },
  mission: 'To be the IT partner Kerala SMBs trust the way they trust their CA: deeply, locally, and for the long haul.',
  team: {
    eyebrow: 'THE TEAM',
    headline: 'A small team of full-stack technical operators.',
    sub: 'Generalists who go deep when they need to. We hire for ownership over specialization, and it shows in how our clients are looked after.',
    note: 'TODO: Replace placeholder cards with real team photos, names, and bios.',
    members: [
      { initials: 'SC', name: 'Founder', role: 'Strategy & customer relationships' },
      { initials: 'IT', name: 'Tech Lead', role: 'Networks, infrastructure, security' },
      { initials: 'AU', name: 'Automation Lead', role: 'Zoho, integrations, custom builds' },
      { initials: 'OP', name: 'Operations', role: 'Onsite support & client success' },
    ],
  },
  otherBusinesses: {
    eyebrow: 'WE EAT OUR OWN COOKING',
    headline: 'We run other operating businesses on the same stack we sell.',
    sub: 'Most IT companies have never run a business themselves. We’ve scaled three, and that experience shapes how we build for clients.',
    items: [
      {
        name: 'Clean Warks',
        body: 'Multi-city service operations across Kerala — the platform that runs it is the same operations stack we deploy for clients.',
        href: '/work/clean-warks',
        external: false,
      },
      {
        name: 'CCTVPROS',
        body: 'Sister brand: surveillance and security systems. AI-powered catalog, lead automation, and end-to-end fulfillment.',
        href: 'https://cctvpros.in',
        external: true,
      },
      {
        name: 'Senza Aura',
        body: 'A salon brand with WhatsApp-first booking and automated retention flows. 4× booking volume in six months.',
        href: '/work/senza-aura',
        external: false,
      },
    ],
  },
  principles: {
    eyebrow: 'WHAT WE BELIEVE',
    headline: 'A few things we’d rather lose business than compromise on.',
    items: [
      {
        title: 'Written, not whispered.',
        body: 'Every scope, every SLA, every price is in writing. If we said it, you can quote it back to us.',
      },
      {
        title: 'Local, not outsourced.',
        body: 'Kerala-based team. Malayalam-speaking. Onsite when it matters. No call center handoffs.',
      },
      {
        title: 'Honest, not salesy.',
        body: 'If you don’t need an AMC, we’ll say so. If a cheaper laptop fits your use case, we’ll recommend it.',
      },
      {
        title: 'Builders, not resellers.',
        body: 'We build with the tools we sell. That’s why our advice is worth taking — we know what works under real load.',
      },
    ],
  },
  finalCta: {
    headline: 'Want to see if we’re the right partner?',
    sub: 'Free IT audit. No commitment. We’ll tell you honestly what we can help with and what we can’t.',
    primary: 'Book a free audit',
    secondary: 'WhatsApp us',
  },
} as const

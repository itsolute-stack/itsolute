export const automationCopy = {
  hero: {
    eyebrow: 'AUTOMATION',
    headline: 'Stop doing IT work that software should do for you.',
    sub: 'WhatsApp flows, lead capture, invoicing, multi-branch dashboards, custom workflows. Built on what already runs our own businesses.',
    primaryCta: 'Discuss your workflow',
    secondaryCta: 'WhatsApp us',
  },
  capabilities: {
    eyebrow: 'WHAT WE BUILD',
    headline: 'The kind of automation that scales businesses without scaling headcount.',
    items: [
      { title: 'WhatsApp Business flows', body: 'Lead capture, confirmations, reminders, support handoff.' },
      { title: 'Lead capture & routing', body: 'From web, WhatsApp, and Meta/Google ads into one CRM pipeline.' },
      { title: 'Invoicing & payments', body: 'Automated invoicing, Razorpay/Stripe collection, reconciliation.' },
      { title: 'Reports & dashboards', body: 'Daily, weekly, monthly — pushed to email or Slack, not chased on demand.' },
      { title: 'CRM implementations', body: 'Zoho CRM, HubSpot, custom — set up to fit your sales process, not the other way.' },
      { title: 'Multi-branch dashboards', body: 'One view of every branch — revenue, jobs, inventory, people.' },
      { title: 'Custom workflows', body: 'Anything that’s repeatable, rule-based, and currently being done by hand.' },
      { title: 'API integrations', body: 'Connecting the tools you already use so they stop being separate islands.' },
    ],
  },
  process: {
    eyebrow: 'HOW WE BUILD',
    headline: 'Discover. Scope. Build. Train. Run.',
    steps: [
      { index: '01', title: 'Discover', body: 'We sit with your team and watch how the work happens today.' },
      { index: '02', title: 'Scope', body: 'Fixed-price proposal with scope, timelines, and the metric we’re moving.' },
      { index: '03', title: 'Build', body: 'Iterative delivery — you see it working in weeks, not months.' },
      { index: '04', title: 'Train', body: 'Your team learns the system. Documentation lives in your drive.' },
      { index: '05', title: 'Run', body: 'Ongoing support and iteration. Automation evolves with your business.' },
    ],
  },
  tiers: {
    eyebrow: 'ENGAGEMENT TIERS',
    headline: 'From a single workflow to a full platform.',
    items: [
      {
        title: 'Starter automation',
        positioning: 'A focused workflow — done in weeks.',
        scope: 'One specific automation: a WhatsApp flow, an invoicing pipeline, a reporting dashboard.',
        highlight: false,
      },
      {
        title: 'Growth platform',
        positioning: 'Connected systems for a growing business.',
        scope: 'CRM, automation, dashboards, integrations — set up to run the business end-to-end.',
        highlight: true,
      },
      {
        title: 'Enterprise build',
        positioning: 'Custom platforms and multi-branch operations.',
        scope: 'Bespoke systems, custom apps, multi-business or multi-branch architectures.',
        highlight: false,
      },
    ],
  },
  caseStudiesIntro: {
    eyebrow: 'PROOF',
    headline: 'We built these for our own companies first.',
    body: 'Clean Warks runs on the same operations stack we deploy for clients. Senza Aura’s WhatsApp booking flow is the same one we install. CCTVPROS’ catalog system is the same approach we bring to retail clients.',
  },
  finalCta: {
    headline: 'Tell us what your team is doing by hand.',
    sub: 'If it’s repeatable, rule-based, and eating hours — there’s probably an automation for it.',
    primary: 'Discuss your workflow',
    secondary: 'WhatsApp us',
  },
} as const

export const automationCopy = {
  hero: {
    eyebrow: 'AUTOMATION',
    headline: 'Stop doing IT work that software should do for you.',
    sub: 'WhatsApp flows, lead capture, invoicing, multi-branch dashboards, custom workflows. Built by a team that has been deploying these systems across Kerala for years.',
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
  scenarios: {
    eyebrow: 'PROOF · ANONYMIZED',
    headline: 'A few automations we have shipped recently.',
    body: 'Names and identifying details removed. The metrics and outcomes are real. We can walk you through each of these in a call if you want to dig in.',
    items: [
      {
        title: 'A multi-branch service business on one dashboard',
        industry: 'Services · 4 cities',
        problem:
          'Each branch was on its own paperwork. Owner had no real-time view of jobs, crew, or revenue.',
        solution:
          'Zoho One implementation with custom dashboards. WhatsApp lead capture into the CRM. Branch-level revenue and crew-utilization reports auto-generated weekly.',
        outcome:
          'New branches now go live in two weeks instead of two months. Owner runs the operation from one screen.',
      },
      {
        title: 'A salon chain that takes most bookings on WhatsApp — automatically',
        industry: 'Wellness · multi-city',
        problem:
          'Bookings were scattered across Instagram DMs, phone calls, and walk-ins. Staff time was burned on coordination.',
        solution:
          'WhatsApp Business API flow: customer chooses service, location, slot. Confirmations and reminders go out automatically. CRM logs every interaction.',
        outcome:
          'Booking volume up 4× in six months. Staff time on coordination dropped by 70 percent.',
      },
      {
        title: 'An e-commerce catalog that updates itself from supplier feeds',
        industry: 'Retail · single brand',
        problem:
          'Sales team was spending six hours a week copy-pasting product specs from supplier emails into the website.',
        solution:
          'Custom AI-powered ingestion pipeline. Supplier feeds drop into a structured queue. Listings get generated, reviewed, and published in minutes.',
        outcome:
          'Catalog updates run ten times faster. Sales team got their time back.',
      },
    ],
  },
  finalCta: {
    headline: 'Tell us what your team is doing by hand.',
    sub: 'If it’s repeatable, rule-based, and eating hours — there’s probably an automation for it.',
    primary: 'Discuss your workflow',
    secondary: 'WhatsApp us',
  },
} as const

export type CaseStudy = {
  slug: string
  index: string
  client: string
  category: string
  tagline: string
  shortOutcome: string
  metric: string
  metricLabel: string
  href: string
  hero: {
    headline: string
    sub: string
  }
  problem: string[]
  solution: string[]
  outcome: string[]
  metrics: { value: string; label: string; note?: string }[]
  stack: string[]
  imageHint: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'clean-warks',
    index: '01',
    client: 'Clean Warks',
    category: 'Multi-city service ops',
    tagline: 'Scaled across Kerala without growing the ops team.',
    shortOutcome:
      'A multi-city cleaning operation running on one dashboard. Branches added in weeks, not months.',
    metric: '4',
    metricLabel: 'cities · 1 dashboard',
    href: '/work/clean-warks',
    hero: {
      headline: 'A service business running on one dashboard.',
      sub: 'Clean Warks scaled from one city to four without adding head office headcount. We built the platform that made it possible.',
    },
    problem: [
      'Bookings tracked in WhatsApp chats and a Google Sheet that nobody trusted.',
      'Each branch ran differently — pricing drift, missed jobs, payment confusion.',
      'Owners spent evenings reconciling cash collections by phone.',
    ],
    solution: [
      'Centralized booking and dispatch on a Zoho-based ops platform.',
      'WhatsApp lead capture into the same pipeline — no copy-paste.',
      'Per-branch dashboards with daily revenue, jobs, and outstanding receivables.',
      'Field staff app for job updates, photos, and signatures.',
    ],
    outcome: [
      'Four cities running on the same system with no head-office expansion.',
      'Booking-to-dispatch time cut from hours to minutes.',
      'Owners see the full P&L by branch, daily.',
    ],
    metrics: [
      { value: '4', label: 'Cities on one platform', note: 'TODO: verify' },
      { value: '< 5 min', label: 'Booking to dispatch', note: 'TODO: verify' },
      { value: '0', label: 'New head-office hires', note: 'TODO: verify' },
    ],
    stack: ['Zoho One', 'WhatsApp Business API', 'Custom field app', 'Razorpay'],
    imageHint: 'TODO: dashboard screenshot or branch-network visual',
  },
  {
    slug: 'cctvpros',
    index: '02',
    client: 'CCTVPROS',
    category: 'AI-powered product catalog',
    tagline: '10× faster catalog updates, 3× more inbound leads.',
    shortOutcome:
      'An e-commerce catalog that updates itself from supplier feeds. Sales team stopped doing data entry.',
    metric: '10×',
    metricLabel: 'faster catalog',
    href: '/work/cctvpros',
    hero: {
      headline: 'A product catalog that updates itself.',
      sub: 'CCTVPROS sells hundreds of surveillance products from dozens of suppliers. We built the system that keeps the catalog current without manual work.',
    },
    problem: [
      'Catalog updates took weeks. By the time a product was listed, the spec sheet was already stale.',
      'Sales team copy-pasted from supplier PDFs into the storefront, badly.',
      'Pricing was inconsistent across categories and prone to errors.',
    ],
    solution: [
      'AI-assisted ingestion of supplier datasheets into structured product records.',
      'Automated price rules with margin guardrails.',
      'Storefront publishes directly from the source-of-truth catalog.',
      'WhatsApp inbound enquiries auto-tagged with the product the lead browsed.',
    ],
    outcome: [
      'Catalog updates that took 2 weeks now take 1–2 days.',
      'Inbound enquiries up 3× year-on-year.',
      'Sales team time freed for actual selling, not data entry.',
    ],
    metrics: [
      { value: '10×', label: 'Faster catalog updates', note: 'TODO: verify' },
      { value: '3×', label: 'Inbound leads', note: 'TODO: verify' },
      { value: '0', label: 'Manual data entry', note: 'TODO: verify' },
    ],
    stack: ['Next.js', 'Anthropic API', 'PostgreSQL', 'WhatsApp Business'],
    imageHint: 'TODO: product catalog screen or workflow diagram',
  },
  {
    slug: 'senza-aura',
    index: '03',
    client: 'Senza Aura',
    category: 'WhatsApp booking automation',
    tagline: 'Booking volume up 4× in 6 months.',
    shortOutcome:
      'A salon brand that takes most of its bookings on WhatsApp — automatically.',
    metric: '4×',
    metricLabel: 'bookings · 6 months',
    href: '/work/senza-aura',
    hero: {
      headline: 'Bookings that happen while the salon sleeps.',
      sub: 'Senza Aura was losing customers to slow replies. We rebuilt the booking flow on WhatsApp — and the calendar started filling itself.',
    },
    problem: [
      'Reception missed WhatsApp messages during peak hours. Customers booked elsewhere.',
      'No reminders meant 15–20% no-show rate.',
      'No data on which services or stylists drove return visits.',
    ],
    solution: [
      'Automated WhatsApp booking flow with stylist + service + time selection.',
      'Confirmation, reminder, and post-visit follow-up — all automated.',
      'Bookings sync to staff calendars; no double-bookings.',
      'Owner dashboard with retention, no-shows, and stylist performance.',
    ],
    outcome: [
      'Booking volume 4× higher within 6 months.',
      'No-show rate cut by more than half.',
      'Owner sees retention by service and stylist, weekly.',
    ],
    metrics: [
      { value: '4×', label: 'Booking volume', note: 'TODO: verify' },
      { value: '–60%', label: 'No-show rate', note: 'TODO: verify' },
      { value: '24/7', label: 'Booking window' },
    ],
    stack: ['WhatsApp Business API', 'Zoho Bookings', 'Custom dashboard'],
    imageHint: 'TODO: WhatsApp chat mockup or booking flow visualization',
  },
]

export function getCaseStudy(slug: string) {
  return caseStudies.find((cs) => cs.slug === slug)
}

export type Plan = {
  tier: 'Starter' | 'Growth' | 'Enterprise'
  positioning: string
  for: string
  features: string[]
  highlight?: boolean
}

/**
 * Pricing intentionally hidden — CTA is 'Get a quote'.
 * Each tier emphasizes scope of coverage, not a fixed monthly number.
 */
export const amcPlans: Plan[] = [
  {
    tier: 'Starter',
    positioning: 'Essentials for small offices.',
    for: 'Up to 10 staff · single location',
    features: [
      'Remote support within 4 business hours',
      '1 scheduled onsite visit per month',
      'Hardware, software, and network coverage',
      'Microsoft 365 / Google Workspace administration',
      'Monthly health report',
    ],
  },
  {
    tier: 'Growth',
    positioning: 'For businesses that depend on IT working.',
    for: '10–25 staff · 1–2 locations',
    features: [
      'Remote support within 2 business hours',
      'Weekly scheduled onsite visit',
      'Everything in Starter',
      'Backup management & disaster recovery drills',
      'Quarterly IT roadmap review',
      'Dedicated account contact',
    ],
    highlight: true,
  },
  {
    tier: 'Enterprise',
    positioning: 'Full coverage for multi-branch operations.',
    for: '25+ staff · multi-location',
    features: [
      'Same-business-day onsite SLA',
      'Onsite engineer presence on request',
      'Everything in Growth',
      'Multi-branch network monitoring',
      'Procurement & lifecycle management',
      'Custom integrations & automation included',
    ],
  },
]

export const amcIncludes = [
  {
    category: 'Hardware support',
    items: [
      'Laptop & desktop diagnostics, repair coordination',
      'Printer, scanner, peripheral support',
      'Replacement procurement at cost',
    ],
  },
  {
    category: 'Software',
    items: [
      'OS reinstalls, patching, license management',
      'Microsoft 365 / Google Workspace administration',
      'Business application support (Tally, Zoho, others)',
    ],
  },
  {
    category: 'Network',
    items: [
      'WiFi monitoring & troubleshooting',
      'Router, switch, firewall management',
      'ISP escalation on your behalf',
    ],
  },
  {
    category: 'Security',
    items: [
      'Endpoint protection management',
      'Backup verification & restore drills',
      'User access reviews',
    ],
  },
  {
    category: 'Reporting',
    items: [
      'Monthly health report',
      'Quarterly IT roadmap',
      'Asset register kept current',
    ],
  },
]

export const amcChecklist = [
  'Someone in your team spends hours every week on IT issues instead of their job.',
  'You’ve called three different vendors for the same problem this year.',
  'You don’t know when your last backup actually ran.',
  'Software licenses expired without anyone noticing.',
  'New staff wait days for laptops and accounts to be set up.',
  'You can’t name a single person who is accountable for IT.',
]

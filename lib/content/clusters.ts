/**
 * Blog topic clusters. Each post belongs to exactly one cluster (frontmatter
 * `cluster` field). Used for filtering on /blog, related-post selection, and
 * cluster-contextual hub CTAs at the bottom of each post.
 */
export type Cluster = {
  slug: string
  name: string
  shortName: string
  description: string
  hubUrl: string
  hubLabel: string
}

export const clusters = {
  'buying-and-sourcing': {
    slug: 'buying-and-sourcing',
    name: 'Buying & sourcing',
    shortName: 'Buying',
    description: 'Laptop buying guides, brand comparisons, refurbished vs new.',
    hubUrl: '/hardware',
    hubLabel: 'Browse hardware',
  },
  'repair-and-troubleshooting': {
    slug: 'repair-and-troubleshooting',
    name: 'Repair & troubleshooting',
    shortName: 'Repair',
    description:
      'Diagnose problems, decide repair vs replace, fix common issues.',
    hubUrl: '/laptop-care',
    hubLabel: 'See repair pricing',
  },
  'office-it-setup': {
    slug: 'office-it-setup',
    name: 'Office IT setup',
    shortName: 'Networking',
    description: 'Office WiFi, structured cabling, network design.',
    hubUrl: '/networking',
    hubLabel: 'Plan your network',
  },
  'software-and-productivity': {
    slug: 'software-and-productivity',
    name: 'Software & productivity',
    shortName: 'Software',
    description: 'Microsoft 365, Google Workspace, Zoho, Tally, antivirus.',
    hubUrl: '/software',
    hubLabel: 'See software services',
  },
  'industry-specific': {
    slug: 'industry-specific',
    name: 'Industry guides',
    shortName: 'Industries',
    description: 'IT setup guides for clinics, schools, offices, retail.',
    hubUrl: '/amc',
    hubLabel: 'Talk about AMC',
  },
} as const satisfies Record<string, Cluster>

export type ClusterSlug = keyof typeof clusters

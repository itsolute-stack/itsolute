/**
 * Blog topic clusters. Each post belongs to exactly one cluster (frontmatter
 * `cluster` field). Used for filtering on /blog, related-post selection, and
 * cluster-contextual hub CTAs at the bottom of each post.
 */
/**
 * Clusters that may stand in for each other when one is too thin to fill a
 * related-posts block on its own.
 *
 * 'automation' is the physical stuff at a building — gates, barriers, door
 * phones, locks, curtain motors. 'it' is everything that runs on a computer or
 * a network, CCTV included, because a camera system is closer to networking
 * than it is to a curtain motor.
 *
 * The split exists so a laptop buying guide can never recommend a curtain
 * motor post. Within a group the overlap is real; across it, it is noise.
 */
export type ClusterGroup = 'automation' | 'it'

export type Cluster = {
  slug: string
  name: string
  shortName: string
  description: string
  hubUrl: string
  hubLabel: string
  group: ClusterGroup
}

export const clusters = {
  'buying-and-sourcing': {
    slug: 'buying-and-sourcing',
    name: 'Buying & sourcing',
    shortName: 'Buying',
    description: 'Laptop buying guides, brand comparisons, refurbished vs new.',
    hubUrl: '/hardware',
    hubLabel: 'Browse hardware',
    group: 'it',
  },
  'repair-and-troubleshooting': {
    slug: 'repair-and-troubleshooting',
    name: 'Repair & troubleshooting',
    shortName: 'Repair',
    description:
      'Diagnose problems, decide repair vs replace, fix common issues.',
    hubUrl: '/laptop-care',
    hubLabel: 'See repair pricing',
    group: 'it',
  },
  'office-it-setup': {
    slug: 'office-it-setup',
    name: 'Office IT setup',
    shortName: 'Networking',
    description: 'Office WiFi, structured cabling, network design.',
    hubUrl: '/networking',
    hubLabel: 'Plan your network',
    group: 'it',
  },
  'software-and-productivity': {
    slug: 'software-and-productivity',
    name: 'Software & productivity',
    shortName: 'Software',
    description: 'Microsoft 365, Google Workspace, Tally, antivirus.',
    hubUrl: '/software',
    hubLabel: 'See software services',
    group: 'it',
  },
  'industry-specific': {
    slug: 'industry-specific',
    name: 'Industry guides',
    shortName: 'Industries',
    description: 'IT setup guides for clinics, schools, offices, retail.',
    hubUrl: '/amc',
    hubLabel: 'Talk about AMC',
    group: 'it',
  },
  'managed-it-and-amc': {
    slug: 'managed-it-and-amc',
    name: 'Managed IT & AMC',
    shortName: 'AMC',
    description:
      'IT support contracts, managed services, and keeping business systems running.',
    hubUrl: '/amc',
    hubLabel: 'See AMC options',
    group: 'it',
  },
  'security-and-surveillance': {
    slug: 'security-and-surveillance',
    name: 'Security & surveillance',
    shortName: 'CCTV',
    description:
      'CCTV cameras, recording, remote viewing, and business security across Kerala.',
    hubUrl: '/cctv',
    hubLabel: 'See CCTV services',
    group: 'it',
  },
  'entrance-automation': {
    slug: 'entrance-automation',
    name: 'Entrance automation',
    shortName: 'Gates',
    description:
      'Automatic gates, boom barriers, access control, and gate safety for Kerala homes and businesses.',
    hubUrl: '/entrance-automation',
    hubLabel: 'See entrance automation',
    group: 'automation',
  },
  'home-automation': {
    slug: 'home-automation',
    name: 'Home automation',
    shortName: 'Home',
    description:
      'Motorised curtains and blinds, app and voice control, and automating the parts of a home you use every day.',
    hubUrl: '/home-automation',
    hubLabel: 'See home automation',
    group: 'automation',
  },
} as const satisfies Record<string, Cluster>

export type ClusterSlug = keyof typeof clusters

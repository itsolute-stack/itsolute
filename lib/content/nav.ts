export type NavLink = { label: string; href: string }

export const primaryNav: NavLink[] = [
  { label: 'Services', href: '/#services' },
  { label: 'AMC', href: '/amc' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Services',
    links: [
      { label: 'AMC Contracts', href: '/amc' },
      { label: 'Hardware', href: '/hardware' },
      { label: 'Software', href: '/software' },
      { label: 'Automation', href: '/automation' },
      { label: 'Networking', href: '/hardware#networking' },
      { label: 'Repair', href: '/hardware#repair' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Clinics & Healthcare', href: '/#industries' },
      { label: 'Schools & Colleges', href: '/#industries' },
      { label: 'CA & Law Firms', href: '/#industries' },
      { label: 'Real Estate', href: '/#industries' },
      { label: 'Retail & Restaurants', href: '/#industries' },
      { label: 'Logistics', href: '/#industries' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Case Studies', href: '/work' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
]

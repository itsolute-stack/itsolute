export type NavLink = { label: string; href: string }

/**
 * Primary nav — order is intentional. Hardware and Laptop Care are explicit
 * items (not buried under a Services dropdown) so they earn SEO surface for
 * "laptop dealer Kottayam" and "laptop repair Kottayam" searches.
 */
export const primaryNav: NavLink[] = [
  { label: 'Hardware', href: '/hardware' },
  { label: 'Laptop Care', href: '/laptop-care' },
  { label: 'Software', href: '/software' },
  { label: 'Networking', href: '/networking' },
  { label: 'Automation', href: '/automation' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Services',
    links: [
      { label: 'Computer Hardware', href: '/hardware' },
      { label: 'Software & Licensing', href: '/software' },
      { label: 'Laptop Care & Repair', href: '/laptop-care' },
      { label: 'Networking & Office WiFi', href: '/networking' },
      { label: 'Automation', href: '/automation' },
      { label: 'AMC Contracts', href: '/amc' },
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
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
]

export type NavLink = { label: string; href: string }

/**
 * Primary nav — order is intentional. Hardware and Laptop Care are explicit
 * items (not buried under a Services dropdown) so they earn SEO surface for
 * "laptop dealer Kottayam" and "laptop repair Kottayam" searches.
 */
/**
 * Desktop top-level links, shown beside the Services dropdown.
 * Hardware and Laptop Care stay top-level (highest-revenue pages) as well as
 * appearing inside the dropdown; the dropdown itself is driven by services.ts
 * so new services appear automatically.
 */
export const primaryNav: NavLink[] = [
  { label: 'Hardware', href: '/hardware' },
  { label: 'Laptop Care', href: '/laptop-care' },
  { label: 'Connect', href: '/connect' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

/**
 * Mobile sheet: the non-service links shown after the grouped Services list.
 * Hardware and Laptop Care are omitted here because they already appear in the
 * Services group above — no duplicates in the mobile menu.
 */
export const secondaryNav: NavLink[] = [
  { label: 'Connect', href: '/connect' },
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
      { label: 'CCTV & Surveillance', href: '/cctv' },
      { label: 'Entrance Automation', href: '/entrance-automation' },
      { label: 'Automation', href: '/automation' },
      { label: 'ITSolute Connect', href: '/connect' },
      { label: 'AMC Contracts', href: '/amc' },
    ],
  },
  {
    /**
     * Labels and slugs mirror `industries` in lib/content/industries.ts, which
     * is what generates these /industries/[slug] pages — keep the two in step.
     * Not imported from there on purpose: nav.ts is also pulled into the client
     * bundle by Navbar, and industries.ts carries Lucide icon references.
     */
    heading: 'Industries',
    links: [
      { label: 'Clinics & Healthcare', href: '/industries/clinics' },
      { label: 'Schools & Colleges', href: '/industries/schools' },
      { label: 'CA & Law Firms', href: '/industries/professional-services' },
      { label: 'Real Estate', href: '/industries/real-estate' },
      { label: 'Retail & Restaurants', href: '/industries/retail' },
      { label: 'Logistics', href: '/industries/logistics' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'IT Services in Kottayam', href: '/kottayam' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
]

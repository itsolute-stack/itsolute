import {
  Laptop,
  AppWindow,
  Wrench,
  Network,
  Workflow,
  Headphones,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  slug: string
  title: string
  tagline: string
  description: string
  icon: LucideIcon
  features: string[]
  href: string
  featured?: boolean
}

/**
 * Order matters — this is the commercial priority order, surfaced in the
 * bento, navbar, footer, and sitemap priority. Hardware leads. AMC is last
 * because it's the relationship upsell, not the cold-visitor pitch.
 */
export const services: Service[] = [
  {
    slug: 'hardware',
    title: 'Computer Hardware',
    tagline: 'Laptops, desktops, and the gear that runs your business.',
    description:
      'New and refurbished business hardware — laptops, desktops, servers, networking, peripherals. Bulk pricing, GST invoicing, Kerala-wide delivery.',
    icon: Laptop,
    features: [
      'Business laptops (new + refurbished)',
      'Bulk supply for offices & schools',
      'Servers, NAS, peripherals',
      'GST invoicing & onsite setup',
    ],
    href: '/hardware',
    featured: true,
  },
  {
    slug: 'software',
    title: 'Software & Licensing',
    tagline: 'Microsoft 365, Google Workspace, Zoho, Tally — set up properly.',
    description:
      'Authorised reseller and implementation partner. Licensing, migration, and configuration — not just a key emailed to you.',
    icon: AppWindow,
    features: [
      'Microsoft 365 & Google Workspace',
      'Zoho One implementations',
      'Tally licensing & support',
      'Antivirus & endpoint protection',
    ],
    href: '/software',
  },
  {
    slug: 'laptop-care',
    title: 'Laptop Care & Repair',
    tagline: 'Screen, keyboard, battery, data recovery — fixed, not guessed.',
    description:
      'Genuine parts, service warranty, free diagnosis for businesses. Most repairs ready in 24–72 hours. Walk in, pickup, or onsite.',
    icon: Wrench,
    features: [
      'Screen, keyboard, battery repair',
      'SSD & RAM upgrades',
      'Data recovery & virus cleanup',
      'OS reinstall & migration',
    ],
    href: '/laptop-care',
  },
  {
    slug: 'networking',
    title: 'Networking & WiFi',
    tagline: 'Office WiFi, switches, firewalls — done properly the first time.',
    description:
      'Office networks that don’t go down. Site survey, design, installation, documentation, ongoing support.',
    icon: Network,
    features: [
      'Site survey & network design',
      'Cabling & WiFi installation',
      'Firewall & VPN setup',
      'Point-to-point links',
    ],
    href: '/hardware#networking',
  },
  {
    slug: 'automation',
    title: 'Automation & Custom Tools',
    tagline: 'Stop doing IT work that software should do for you.',
    description:
      'WhatsApp flows, lead capture, dashboards, custom workflows. Built on the stack that runs our own businesses.',
    icon: Workflow,
    features: [
      'WhatsApp & CRM flows',
      'Multi-branch dashboards',
      'Zoho One builds',
      'API integrations',
    ],
    href: '/automation',
    featured: true,
  },
  {
    slug: 'amc',
    title: 'AMC Contracts',
    tagline: 'The IT team your business needs, without hiring one.',
    description:
      'Monthly retainers covering hardware, software, networks, backups. The natural next step after your first project with us.',
    icon: Headphones,
    features: [
      'Onsite + remote support',
      'Hardware & software covered',
      'Written SLA, no surprises',
      'Monthly health reports',
    ],
    href: '/amc',
  },
]

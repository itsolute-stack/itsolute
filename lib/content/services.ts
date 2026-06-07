import {
  Laptop,
  AppWindow,
  Wrench,
  Wifi,
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
  startingPrice?: string
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
    title: 'Networking & Office WiFi',
    tagline: "WiFi that works in every corner. Networks that don’t quietly fail.",
    description:
      'Office WiFi, structured LAN cabling, firewalls, point-to-point links, and network maintenance for businesses across Kerala.',
    icon: Wifi,
    features: [
      'Office WiFi with no dead zones',
      'Cat6 structured cabling',
      'Business routers and firewalls',
      'Point-to-point inter-branch links',
      'CCTV network integration',
      'Site survey before quoting',
    ],
    href: '/networking',
    startingPrice: '₹15,000',
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

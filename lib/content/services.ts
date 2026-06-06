import {
  Headphones,
  Laptop,
  AppWindow,
  Workflow,
  Network,
  Wrench,
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

export const services: Service[] = [
  {
    slug: 'amc',
    title: 'AMC Contracts',
    tagline: 'The IT team your business needs, without hiring one.',
    description:
      'Monthly retainers that cover your hardware, software, networks, backups, and the phone call when something breaks.',
    icon: Headphones,
    features: [
      'Onsite + remote support',
      'Hardware & software covered',
      'Written SLA, no surprises',
      'Monthly health reports',
    ],
    href: '/amc',
    featured: true,
  },
  {
    slug: 'hardware',
    title: 'Hardware & Laptops',
    tagline: 'New and refurbished — with warranty support and GST invoicing.',
    description:
      'Business laptops, desktops, servers, networking, printers. Bulk pricing for offices and schools.',
    icon: Laptop,
    features: ['New + refurbished laptops', 'Bulk orders & GST billing', 'Onsite setup'],
    href: '/hardware',
  },
  {
    slug: 'software',
    title: 'Software Licensing',
    tagline: 'Microsoft 365, Google Workspace, Zoho One, Tally — set up properly.',
    description:
      'Licensing, migration, and configuration. We move you off legacy email and on-prem servers without losing data.',
    icon: AppWindow,
    features: ['Microsoft 365 & Google Workspace', 'Zoho One implementations', 'Tally support'],
    href: '/software',
  },
  {
    slug: 'automation',
    title: 'Automation & Custom Tools',
    tagline: 'Stop doing IT work that software should do for you.',
    description:
      'WhatsApp flows, lead capture, invoicing, dashboards, custom workflows. Built on what already runs our own businesses.',
    icon: Workflow,
    features: ['WhatsApp & CRM flows', 'Multi-branch dashboards', 'Zoho One builds'],
    href: '/automation',
    featured: true,
  },
  {
    slug: 'networking',
    title: 'Networking',
    tagline: 'WiFi, switches, firewalls — done properly the first time.',
    description:
      'Office networks that don’t go down. We design, install, document, and support.',
    icon: Network,
    features: ['Site survey & design', 'Cabling & installation', 'Firewall & VPN setup'],
    href: '/hardware#networking',
  },
  {
    slug: 'repair',
    title: 'Repair & One-off Services',
    tagline: 'Laptop repair, network fixes, cloud migrations — without a contract.',
    description:
      'Fixed-price jobs for businesses that don’t need a full AMC yet. We document, we warranty, we leave you better off.',
    icon: Wrench,
    features: ['Fixed-price quotes', '7-day workmanship warranty', 'GST invoicing'],
    href: '/contact',
  },
]

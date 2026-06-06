import {
  Stethoscope,
  GraduationCap,
  Scale,
  Building2,
  ShoppingBag,
  Truck,
  type LucideIcon,
} from 'lucide-react'

export type Industry = {
  slug: string
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export const industries: Industry[] = [
  {
    slug: 'clinics',
    title: 'Clinics & Healthcare',
    description: 'Reception PCs, billing software, secure patient records, reliable WiFi.',
    icon: Stethoscope,
    href: '/industries/clinics',
  },
  {
    slug: 'schools',
    title: 'Schools & Colleges',
    description: 'Computer labs, staff laptops, Google Workspace for Education, exam systems.',
    icon: GraduationCap,
    href: '/industries/schools',
  },
  {
    slug: 'professional-services',
    title: 'CA & Law Firms',
    description: 'Secure file storage, Tally and DMS support, encrypted client communications.',
    icon: Scale,
    href: '/industries/professional-services',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    description: 'Multi-branch dashboards, CRM, WhatsApp lead flows, document automation.',
    icon: Building2,
    href: '/industries/real-estate',
  },
  {
    slug: 'retail',
    title: 'Retail & Restaurants',
    description: 'POS, billing, inventory, CCTV integration, branch reporting.',
    icon: ShoppingBag,
    href: '/industries/retail',
  },
  {
    slug: 'logistics',
    title: 'Logistics',
    description: 'Fleet tracking integrations, dispatch tools, branch connectivity, backups.',
    icon: Truck,
    href: '/industries/logistics',
  },
]

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

/**
 * Each description leads with the hardware / software / setup action — AMC
 * is positioned as the outcome ("for uptime"), not the lead.
 */
export const industries: Industry[] = [
  {
    slug: 'clinics',
    title: 'Clinics & Healthcare',
    description: 'Billing PCs, EMR setup, secure WiFi for patient data, AMC for uptime.',
    icon: Stethoscope,
    href: '/industries/clinics',
  },
  {
    slug: 'schools',
    title: 'Schools & Colleges',
    description: 'Lab laptops, staff workstations, Google Workspace for Education, AMC support.',
    icon: GraduationCap,
    href: '/industries/schools',
  },
  {
    slug: 'professional-services',
    title: 'CA & Law Firms',
    description: 'Office laptops, Tally and DMS setup, secure cloud storage, repair on call.',
    icon: Scale,
    href: '/industries/professional-services',
  },
  {
    slug: 'real-estate',
    title: 'Real Estate',
    description: 'Branch hardware, CRM rollout, WhatsApp lead flows, automation that scales.',
    icon: Building2,
    href: '/industries/real-estate',
  },
  {
    slug: 'retail',
    title: 'Retail & Restaurants',
    description: 'POS systems, billing software, CCTV integration, multi-branch reporting.',
    icon: ShoppingBag,
    href: '/industries/retail',
  },
  {
    slug: 'logistics',
    title: 'Logistics',
    description: 'Branch laptops, dispatch tools, fleet integrations, AMC for always-on operations.',
    icon: Truck,
    href: '/industries/logistics',
  },
]

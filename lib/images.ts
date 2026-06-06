/**
 * Unsplash placeholder image URLs.
 *
 * REPLACEMENT GUIDE
 * -----------------
 * Every entry below is a stand-in. Before launch, swap each with a real
 * photograph that matches the `intent`. Drop the new image in /public/images/
 * and update the `src` to a local path.
 *
 * Each PlaceholderImage in the codebase references these by key, so updating
 * once here updates everywhere it appears.
 */

const u = (id: string, params = 'w=1600&q=85&auto=format&fit=crop') =>
  `https://images.unsplash.com/${id}?${params}`

export const images = {
  hero: {
    src: u('photo-1593642632559-0c6d3fc62b89'),
    alt: 'Laptop and workspace in soft light',
    intent: 'Laptop on Kerala office desk, slightly desaturated, electric-blue light leak',
  },
  amcFeature: {
    src: u('photo-1531973576160-7125cd663d86'),
    alt: 'IT technician working at a workstation',
    intent: 'Office IT setup with documentation/checklist on desk, blue color grade',
  },
  hardwareFeature: {
    src: u('photo-1517336714731-489689fd1ca8'),
    alt: 'Open laptop on a workspace desk',
    intent: 'Business laptop on a clean Kerala office desk, warm light',
  },
  laptopCareFeature: {
    src: u('photo-1612442058529-22e34ae29ff7'),
    alt: 'Laptop being repaired with tools on a workbench',
    intent: 'Technician hands repairing a laptop — screwdrivers, opened chassis, organized workbench',
  },
  laptopCareWorkshop: {
    src: u('photo-1517694712202-14dd9538aa97'),
    alt: 'Repair workshop with components and tools',
    intent: 'ITSolute Kottayam workshop interior — repair bench, parts shelf, branded',
  },
  automationFeature: {
    src: u('photo-1551288049-bebda4e38f71'),
    alt: 'Analytics dashboard on a laptop screen',
    intent: 'Zoho-style dashboard or WhatsApp business chat flow mockup',
  },
  hardwareCategory: {
    src: u('photo-1496181133206-80ce9b88a853'),
    alt: 'Open laptop on a desk',
    intent: 'New laptop product shot, business series',
  },
  serverRack: {
    src: u('photo-1558494949-ef010cbdcc31'),
    alt: 'Server rack with status LEDs',
    intent: 'Server rack / data center, well lit',
  },
  networking: {
    src: u('photo-1544197150-b99a580bb7a8'),
    alt: 'Network cables in a patch panel',
    intent: 'Network cabling and switches, clean install',
  },
  softwareScreen: {
    src: u('photo-1551434678-e076c223a692'),
    alt: 'Team reviewing screens in an office',
    intent: 'Team using software at desks, looking at dashboards',
  },
  automationCode: {
    src: u('photo-1517694712202-14dd9538aa97'),
    alt: 'Code on a laptop screen',
    intent: 'Workflow / code editor / integration visualization',
  },
  aboutOffice: {
    src: u('photo-1521737711867-e3b97375f902'),
    alt: 'Team meeting in an office',
    intent: 'Modern Indian office, team meeting, warm and real',
  },
  cleanWarksHero: {
    src: u('photo-1581094271901-8022df4466f9'),
    alt: 'Operations dashboard at a desk',
    intent: 'Multi-branch operations dashboard screenshot or visual',
  },
  cctvprosHero: {
    src: u('photo-1518770660439-4636190af475'),
    alt: 'Electronics circuit board close-up',
    intent: 'Surveillance product catalog mockup or product photography',
  },
  senzaAuraHero: {
    src: u('photo-1556228720-195a672e8a03'),
    alt: 'Salon interior with soft lighting',
    intent: 'WhatsApp chat mockup with booking flow, or salon interior',
  },
  industryClinic: {
    src: u('photo-1576091160550-2173dba999ef'),
    alt: 'Clinic reception area',
    intent: 'Kerala clinic reception or front desk',
  },
  industrySchool: {
    src: u('photo-1503676260728-1c00da094a0b'),
    alt: 'Students learning at desks',
    intent: 'Computer lab or classroom with laptops',
  },
  industryRetail: {
    src: u('photo-1556740758-90de374c12ad'),
    alt: 'Retail checkout counter',
    intent: 'Retail POS counter or restaurant billing',
  },
  contactMap: {
    src: u('photo-1524661135-423995f22d0b', 'w=1200&q=85&auto=format&fit=crop'),
    alt: 'Map illustration',
    intent: 'Map of Kerala with service-area pins (or embed Google Maps directly)',
  },
} as const

export type ImageKey = keyof typeof images

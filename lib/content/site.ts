/**
 * Global site configuration. Read-only at runtime — update here, not in components.
 */

export const SITE = {
  name: 'ITSolute Systems',
  shortName: 'ITSolute',
  tagline: 'IT that just works.',
  description:
    'Hardware, software, support, and automation — under one roof. Serving SMBs across Kerala.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://itsolute.com',
  founded: 2014, // 10+ years operation
  hq: {
    city: 'Kottayam',
    state: 'Kerala',
    country: 'India',
    addressLine: 'Kottayam, Kerala, India',
  },
  contact: {
    phoneDisplay: '+91 70344 55665',
    phoneTel: '+917034455665',
    whatsappNumber: '917034455665',
    email: 'hello@itsolute.com',
  },
  hours: {
    display: 'Mon–Sat · 9:00 – 19:00 IST',
    structured: 'Mo-Sa 09:00-19:00',
  },
  serviceAreas: [
    'Kochi',
    'Kottayam',
    'Pathanamthitta',
    'Alappuzha',
    'Ernakulam',
    'Thiruvananthapuram',
  ],
  sister: {
    name: 'CCTVPROS',
    tagline: 'Surveillance & Security',
    url: 'https://cctvpros.in',
  },
  social: {
    linkedin: 'https://linkedin.com/company/itsolute-systems',
    instagram: 'https://instagram.com/itsolute.systems',
  },
} as const

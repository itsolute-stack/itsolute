/**
 * Global site configuration. Read-only at runtime — update here, not in components.
 *
 * Phone, address, hours, social — all consumers (Footer, ContactPage, schema,
 * WhatsApp helper, etc.) read from these constants. Change here, propagates
 * everywhere.
 */

/** Structured address — used by schema PostalAddress and visible everywhere. */
export const ADDRESS = {
  street: 'Parthas Lane',
  locality: 'Kottayam',
  region: 'Kerala',
  postalCode: '686001',
  country: 'IN',
  countryName: 'India',
  full: 'Parthas Lane, Kottayam, Kerala – 686001, India',
  short: 'Parthas Lane, Kottayam – 686001',
} as const

/** Geo coordinates for LocalBusiness schema (approximate Kottayam center). */
export const GEO = {
  latitude: 9.5916,
  longitude: 76.5222,
} as const

/** Canonical site URL — override with NEXT_PUBLIC_SITE_URL in Vercel. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://itsolute.com'

export const SITE = {
  name: 'ITSolute Systems',
  shortName: 'ITSolute',
  tagline: 'IT that just works.',
  description:
    'Business laptops, software, networking, laptop repair, and automation for Kerala SMBs. Based in Kottayam.',
  url: SITE_URL,
  founded: 2014, // 10+ years operation under the parent team
  hq: {
    street: ADDRESS.street,
    city: ADDRESS.locality,
    state: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    country: ADDRESS.countryName,
    countryCode: ADDRESS.country,
    addressLine: ADDRESS.full,
    shortAddress: ADDRESS.short,
  },
  geo: GEO,
  contact: {
    phoneDisplay: '+91 92076 40404',
    phoneTel: '+919207640404',
    whatsappNumber: '919207640404',
    email: 'hello@itsolute.com',
  },
  hours: {
    display: 'Mon–Sat · 9:00 – 19:00 IST',
    structured: 'Mo-Sa 09:00-19:00',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
  serviceAreas: [
    'Kottayam',
    'Kochi',
    'Ernakulam',
    'Pathanamthitta',
    'Alappuzha',
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

/**
 * SEO keywords — used in root metadata. Hardware/laptop-care first because
 * that's where the volume search comes from for Kerala SMBs.
 */
export const KEYWORDS = [
  // Hardware (primary)
  'business laptops Kottayam',
  'computer hardware Kerala',
  'laptop dealer Kottayam',
  'HP Dell Lenovo dealer Kerala',
  'office computers Kerala',
  'refurbished laptops Kottayam',
  // Laptop care
  'laptop repair Kottayam',
  'laptop screen replacement Kerala',
  'data recovery Kottayam',
  'MacBook repair Kerala',
  'virus removal Kerala',
  // Software
  'Microsoft 365 reseller Kerala',
  'Zoho partner Kerala',
  'Tally licensing Kottayam',
  // Networking
  'office WiFi Kottayam',
  'office WiFi setup Kerala',
  'network installation Kerala',
  'network installation Kottayam',
  'structured cabling Kottayam',
  'structured cabling Kerala',
  'business WiFi Kerala',
  'LAN setup Kottayam',
  'point to point wireless Kerala',
  // Automation
  'business automation Kerala',
  'Zoho implementation Kerala',
  'WhatsApp business automation Kerala',
  // AMC (de-prioritized but kept)
  'IT AMC Kerala',
  'computer AMC Kottayam',
] as const

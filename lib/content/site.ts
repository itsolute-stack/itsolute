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

/**
 * Every office, in one place.
 *
 * NAP (name, address, phone) has to be byte-identical wherever it appears —
 * footer, contact page, location pages, schema — because local search treats a
 * mismatch as two different businesses. So no component writes an address as
 * a literal; they all read from here.
 *
 * Kottayam is the head office and the primary address; Bengaluru is a second
 * office. `visitNote` is not decoration: Kottayam is a workshop people walk
 * into, Bengaluru is appointment-only, and saying otherwise would send someone
 * across a city to a closed door.
 */
export type SiteLocation = {
  id: 'kottayam' | 'bengaluru'
  /** Shown above the address, e.g. "Head office". */
  label: string
  street: string
  locality: string
  region: string
  postalCode: string
  country: string
  countryName: string
  /** One line, matching the Google Business Profile exactly. */
  addressLine: string
  /** Compact form for tight spaces. Still unambiguous. */
  shortAddress: string
  geo: { latitude: number; longitude: number }
  /** Directions link. */
  mapsUrl: string
  /** Keyless search-query embed. */
  mapsEmbedUrl: string
  /** Visitor policy. Never imply walk-ins where there are none. */
  visitNote: string
  /** Accessible title for the embedded map iframe. */
  mapTitle: string
}

export const LOCATIONS: Record<'kottayam' | 'bengaluru', SiteLocation> = {
  kottayam: {
    id: 'kottayam',
    label: 'Head office',
    street: ADDRESS.street,
    locality: ADDRESS.locality,
    region: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    country: ADDRESS.country,
    countryName: ADDRESS.countryName,
    addressLine: ADDRESS.full,
    shortAddress: ADDRESS.short,
    geo: GEO,
    mapsUrl: 'https://g.page/r/CfGF9isTZpMCEBM',
    mapsEmbedUrl:
      'https://maps.google.com/maps?q=ITSolute+Systems+Parthas+Lane+Kottayam+686001&output=embed',
    visitNote: 'Walk-ins welcome',
    mapTitle: 'ITSolute Systems on Google Maps \u2014 Parthas Lane, Kottayam',
  },
  bengaluru: {
    id: 'bengaluru',
    label: 'Bengaluru office',
    street: 'Indiqube Lakeside, Plot No 80/2, Hobli, Green Glen Layout, Bellandur',
    locality: 'Bengaluru',
    region: 'Karnataka',
    country: 'IN',
    countryName: 'India',
    postalCode: '560103',
    addressLine:
      'Indiqube Lakeside, Plot No 80/2, Hobli, Green Glen Layout, Bellandur, Bengaluru, Karnataka 560103',
    shortAddress: 'Green Glen Layout, Bellandur, Bengaluru \u2013 560103',
    /**
     * Geocoded from "Green Glen Layout, Bellandur, Bengaluru 560103" via
     * OpenStreetMap, so it is accurate to the layout rather than the building
     * entrance. Replace with the pin from the verified Google Business
     * Profile when convenient \u2014 schema geo should match what Google already
     * holds for the listing.
     */
    geo: { latitude: 12.9269039, longitude: 77.6701877 },
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Indiqube+Lakeside+Green+Glen+Layout+Bellandur+Bengaluru+560103',
    mapsEmbedUrl:
      'https://maps.google.com/maps?q=Indiqube+Lakeside+Green+Glen+Layout+Bellandur+Bengaluru+560103&output=embed',
    visitNote: 'Visits by appointment',
    mapTitle: 'ITSolute Systems on Google Maps \u2014 Bellandur, Bengaluru',
  },
}

/** Head office first \u2014 the order every list of offices uses. */
export const LOCATION_LIST: SiteLocation[] = [LOCATIONS.kottayam, LOCATIONS.bengaluru]

/**
 * Google Maps short link to the Parthas Lane workshop — used for "Get directions"
 * links sitewide and emitted as `hasMap` in LocalBusiness schema (local SEO signal).
 */
export const GMAPS_URL = 'https://g.page/r/CfGF9isTZpMCEBM'

/**
 * Search-query embed URL. No API key, no billing, no Maps JS API needed.
 * Pin shows ITSolute Systems at Parthas Lane via the query string.
 */
export const GMAPS_EMBED_URL =
  'https://maps.google.com/maps?q=ITSolute+Systems+Parthas+Lane+Kottayam+686001&output=embed'

/**
 * Canonical site URL — the host Vercel actually serves with a 200.
 *
 * That is `www.itsolute.com`: the apex 308-redirects to it, including deep
 * paths and query strings. Everything SEO-visible is built from this one
 * constant — metadataBase, every canonical, the sitemap, robots Host and
 * Sitemap, and all JSON-LD — so the host has to be right here and nowhere
 * else.
 *
 * It was previously the apex, which put the site in a contradiction: www
 * returned 200 while declaring an apex canonical, and the apex redirected
 * straight back to www. Google resolved it by indexing both hosts and mostly
 * preferring www, so link signals were split across two origins.
 *
 * NEXT_PUBLIC_SITE_URL still wins, because preview deployments need their own
 * origin, but an apex value is normalised to www rather than trusted. A stale
 * Vercel variable is exactly how this broke, and silently re-emitting a
 * canonical that contradicts the redirect is not worth preserving as an
 * option. Any other host (a *.vercel.app preview, localhost) passes through
 * untouched.
 */
function canonicalSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.itsolute.com'
  return configured.replace(/^https?:\/\/itsolute\.com/, 'https://www.itsolute.com')
}

export const SITE_URL = canonicalSiteUrl()

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
  /** Both offices. Head office first. */
  locations: LOCATION_LIST,
  contact: {
    phoneDisplay: '+91 85475 33005',
    phoneTel: '+918547533005',
    /** Dashed form for schema.org telephone (Google Knowledge Panel prefers this). */
    phoneSchema: '+91-85475-33005',
    whatsappNumber: '918547533005',
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
} as const

/**
 * Official social channels. Each entry feeds the footer icon row AND the
 * schema.org `sameAs` array (which Google uses to verify entity identity
 * and build the Knowledge Graph entry for the business).
 */
export const SOCIAL = {
  instagram: {
    url: 'https://www.instagram.com/itsolutesystems/',
    handle: '@itsolutesystems',
    label: 'Instagram',
  },
  x: {
    url: 'https://x.com/ITSoluteSystems',
    handle: '@ITSoluteSystems',
    label: 'X',
  },
  facebook: {
    url: 'https://www.facebook.com/itsolutesystems',
    handle: 'itsolutesystems',
    label: 'Facebook',
  },
} as const

/** URLs only — drop into schema.org `sameAs` arrays. */
export const SOCIAL_URLS = Object.values(SOCIAL).map((s) => s.url)

/**
 * SEO keywords — used in root metadata. Hardware/laptop-care first because
 * that's where the volume search comes from for Kerala SMBs.
 */
export const KEYWORDS = [
  // Hardware (primary)
  'business laptops Kottayam',
  'computer hardware Kerala',
  'laptop dealer Kottayam',
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
  'WhatsApp business automation Kerala',
  // CCTV & entrance automation
  'CCTV installation Kottayam',
  'automatic gate Kottayam',
  'boom barrier Kerala',
  'gate automation Kerala',
  // AMC (de-prioritized but kept)
  'IT AMC Kerala',
  'computer AMC Kottayam',
] as const

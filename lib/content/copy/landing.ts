/**
 * Google Ads landing pages (/lp/*).
 *
 * These are paid-traffic pages with one job: turn a click into a form lead, a
 * WhatsApp chat, or a call. They are intentionally separate from the SEO pages
 * under /entrance-automation — do not cross-wire them.
 *
 * COMPLIANCE — every claim on these pages must come from this file, and this
 * file carries only facts we can stand behind:
 *   - no motor brand names, no "authorised/certified/No.1/best"
 *   - no install counts, no years in business
 *   - no testimonials or ratings (none are real yet)
 *   - no same-day promises, no ITSolute-issued warranty (manufacturer only)
 *   - no countdowns or scarcity
 * Prices exclude GST and are starting points confirmed by a written quote.
 */

export const LP_DISTRICTS = [
  'kottayam',
  'ernakulam',
  'pathanamthitta',
  'alappuzha',
] as const

export type LpDistrictSlug = (typeof LP_DISTRICTS)[number]

const DISTRICT_NAMES: Record<LpDistrictSlug, string> = {
  kottayam: 'Kottayam',
  ernakulam: 'Ernakulam',
  pathanamthitta: 'Pathanamthitta',
  alappuzha: 'Alappuzha',
}

/**
 * Resolve the ?d= param to a display name.
 *
 * Whitelist only — the raw param is never rendered, so a crafted ?d= cannot
 * inject text into the H1, the title, or the WhatsApp message. Anything not on
 * the list falls back to "Kerala".
 */
export function resolveDistrict(raw?: string | string[]): {
  slug: LpDistrictSlug | null
  name: string
} {
  const value = Array.isArray(raw) ? raw[0] : raw
  const key = value?.toLowerCase().trim()
  if (key && (LP_DISTRICTS as readonly string[]).includes(key)) {
    const slug = key as LpDistrictSlug
    return { slug, name: DISTRICT_NAMES[slug] }
  }
  return { slug: null, name: 'Kerala' }
}

/** Form step-2 options. "Other" covers everywhere we don't name. */
export const LP_LOCATION_OPTIONS = [
  { value: 'Kottayam', slug: 'kottayam' },
  { value: 'Ernakulam', slug: 'ernakulam' },
  { value: 'Pathanamthitta', slug: 'pathanamthitta' },
  { value: 'Alappuzha', slug: 'alappuzha' },
  { value: 'Other', slug: null },
] as const

export const LP_SHARED = {
  trustStrip: [
    'Free site survey',
    'Fixed written quote',
    'Manufacturer warranty',
    'Local Kottayam team',
  ],
  steps: [
    {
      n: '1',
      title: 'Tell us about your gate',
      body: 'Form or WhatsApp — about 30 seconds.',
    },
    {
      n: '2',
      title: 'Free site survey',
      body: 'We come out, check the site and measure up.',
    },
    {
      n: '3',
      title: 'Fixed written quote',
      body: 'Nothing is ordered until you approve it.',
    },
  ],
  replyNote: 'We reply within 24 hours.',
  local: {
    heading: 'Real office, real people.',
    address: 'Parthas Lane, Kottayam, Kerala – 686001',
    hours: 'Mon–Sat, 9:00–19:00',
    areas: 'Serving Kottayam, Ernakulam, Pathanamthitta and Alappuzha.',
  },
  priceNote:
    'Final price depends on gate size and weight — confirmed in a fixed written quote after a free site survey. Prices exclude GST.',
} as const

export type LpPage = {
  slug: string
  source: 'lp-gate' | 'lp-barrier'
  /** {district} is replaced at render time with the resolved name. */
  title: string
  eyebrow: string
  h1: string
  sub: string
  priceAnchor: string
  priceNote: string
  whatsappMessage: string
  heroImage: { src: string; alt: string }
  pain: { heading: string; items: { title: string; body: string }[] }
  /** Gate page: price cards. Barrier page: audience tiles (single price). */
  choices: {
    heading: string
    note?: string
    items: { label: string; price?: string; bestFor: string; preset: string }[]
  }
  included: { heading: string; items: string[]; addOns: string }
  retrofit?: { heading: string; body: string }
  faqs: { q: string; a: string }[]
  finalCtaHeading: string
  /** Step 1 of the form: what are we quoting? */
  formStepOne: { legend: string; options: string[] }
}

export const lpGateAutomation: LpPage = {
  slug: 'gate-automation',
  source: 'lp-gate',
  title: 'Automatic Gates in {district} — From ₹40,000 | Free Site Survey | ITSolute',
  eyebrow: 'AUTOMATIC GATES · {DISTRICT}',
  h1: 'Automatic Gates for Your Home in {district}',
  sub: 'Open your gate with one tap — from your car, your phone or your sit-out. Sliding, swing and roller gate automation, installed by a Kottayam-based team.',
  priceAnchor: 'From ₹40,000',
  priceNote: '+ GST · safety sensors & battery backup included',
  whatsappMessage:
    "Hi ITSolute, I'd like a quote for an automatic gate in {district}.",
  heroImage: {
    src: '/images/entrance-automation/automatic-gates.jpg',
    alt: 'Automatic sliding gate installed at a Kerala home',
  },
  pain: {
    heading: 'No more getting out of the car to open the gate.',
    items: [
      { title: 'Rain', body: 'Monsoon downpour? Stay dry in the car.' },
      { title: 'Night', body: 'Late arrival? The gate opens before you reach it.' },
      {
        title: 'Family',
        body: 'Easy for elderly parents and safe around children — sensors stop the gate if anything is in its path.',
      },
      {
        title: 'Security',
        body: 'Gate stays closed and locked unless you open it.',
      },
    ],
  },
  choices: {
    heading: 'Clear starting prices. No surprises.',
    note: LP_SHARED.priceNote,
    items: [
      {
        label: 'Sliding gate',
        price: '₹40,000',
        bestFor: 'Most Kerala homes with side space',
        preset: 'Sliding',
      },
      {
        label: 'Roller gate',
        price: '₹48,000',
        bestFor: 'Compact entrances',
        preset: 'Roller',
      },
      {
        label: 'Swing gate — single arm',
        price: '₹55,000',
        bestFor: 'Narrow gates',
        preset: 'Swing',
      },
      {
        label: 'Swing gate — two arm',
        price: '₹75,000',
        bestFor: 'Wide driveways',
        preset: 'Swing',
      },
    ],
  },
  included: {
    heading: 'Included as standard',
    items: [
      'Safety sensors',
      'Battery backup — works during power cuts',
      'Remote control + RFID access',
      'Professional installation & setup',
      'Manufacturer warranty',
    ],
    addOns:
      'Optional: voice control (a WiFi smart-switch module that works with most standard gate motors with a remote-control input) · AMC maintenance plans.',
  },
  retrofit: {
    heading: 'Already have a gate?',
    body: 'We can usually automate it. No need to replace your gate — we check it during the free site survey.',
  },
  faqs: [
    {
      q: 'What happens during a power cut?',
      a: 'Battery backup is fitted as standard, so the gate keeps working. There is also a manual release so the gate can always be moved by hand.',
    },
    {
      q: 'Is it safe for children and pets?',
      a: 'Safety sensors are fitted as standard. They stop and reverse the gate if anything is in its path while it is closing.',
    },
    {
      q: 'Will it work in Kerala rain?',
      a: 'Motors are installed for outdoor use, and we advise on placement and drainage during the site survey so water does not sit where it causes problems.',
    },
    {
      q: 'Can you automate my existing gate?',
      a: 'Usually yes. What matters is that the gate moves freely and the track or hinges are sound — we confirm that at the free site survey before quoting.',
    },
    {
      q: 'How much will my gate cost?',
      a: 'From ₹40,000 plus GST. The exact figure depends on your gate size and weight, and comes to you in a fixed written quote after the free site survey.',
    },
    {
      q: 'Do you maintain it after installation?',
      a: 'Yes — AMC plans are available, covering scheduled checks of the battery, the safety sensors and the moving parts.',
    },
  ],
  finalCtaHeading: 'Get your free site survey in {district}',
  formStepOne: {
    legend: 'What kind of gate?',
    options: ['Sliding', 'Swing', 'Roller', 'Not sure'],
  },
}

export const lpBoomBarrier: LpPage = {
  slug: 'boom-barrier',
  source: 'lp-barrier',
  title: 'Boom Barriers in {district} — From ₹59,000 | Free Site Survey | ITSolute',
  eyebrow: 'BOOM BARRIERS · {DISTRICT}',
  h1: 'Boom Barriers for Apartments, Offices & Parking in {district}',
  sub: 'Control every vehicle that enters. Automatic boom barriers with remote and RFID access, installed by a Kottayam-based team.',
  priceAnchor: 'From ₹59,000',
  priceNote: '+ GST · professional installation included',
  whatsappMessage: "Hi ITSolute, I'd like a quote for a boom barrier in {district}.",
  heroImage: {
    src: '/images/entrance-automation/boom-barriers.jpg',
    alt: 'Automatic boom barrier at a vehicle entrance',
  },
  pain: {
    heading: 'Stop unknown vehicles at the gate.',
    items: [
      {
        title: 'Unauthorised parking',
        body: 'Only residents and staff get in.',
      },
      {
        title: 'Guard workload',
        body: 'Residents tap an RFID tag — no manual opening.',
      },
      {
        title: 'Peak-hour queues',
        body: 'Fast open and close keeps traffic moving.',
      },
      {
        title: 'Control',
        body: 'You decide who gets access, and can change it anytime.',
      },
    ],
  },
  choices: {
    heading: 'Built for sites like yours.',
    items: [
      {
        label: 'Apartments & flats',
        bestFor: 'Resident vehicles in and out all day',
        preset: 'Apartment',
      },
      {
        label: 'Office compounds',
        bestFor: 'Staff and visitor parking',
        preset: 'Office',
      },
      {
        label: 'Commercial parking',
        bestFor: 'High traffic, paid or managed access',
        preset: 'Commercial parking',
      },
      {
        label: 'Hospitals, schools & institutions',
        bestFor: 'Controlled access on a busy campus',
        preset: 'Other',
      },
    ],
  },
  included: {
    heading: 'Included as standard',
    items: [
      'Barrier unit & arm',
      'Remote control + RFID access',
      'Professional installation & setup',
      'Manufacturer warranty',
    ],
    addOns: 'Optional: AMC maintenance plans · combine with an automatic gate.',
  },
  faqs: [
    {
      q: 'What happens during a power cut?',
      a: 'Battery backup keeps the barrier working. There is also a manual release so the arm can be raised by hand, which matters for emergency vehicle access.',
    },
    {
      q: 'Is it safe for vehicles and people?',
      a: 'Safety sensors are fitted as standard, so the arm stops rather than coming down on a vehicle or a person underneath it.',
    },
    {
      q: 'How do residents get access?',
      a: 'RFID tags, issued per vehicle. Each tag can be cancelled individually, so when someone leaves or loses a tag you cancel that one without reissuing to everybody.',
    },
    {
      q: 'Will it work outdoors in Kerala rain?',
      a: 'Barriers are installed for outdoor use, and we advise on siting and drainage during the survey so water does not pool at the base.',
    },
    {
      q: 'How much does a boom barrier cost?',
      a: 'From ₹59,000 plus GST. The exact figure depends on your lane width and how many vehicles pass per day, and comes to you in a fixed written quote after the free site survey.',
    },
    {
      q: 'Do you maintain it after installation?',
      a: 'Yes — AMC plans are available, which matters more on a barrier than a home gate because it cycles far more often.',
    },
  ],
  finalCtaHeading: 'Get your free site survey in {district}',
  formStepOne: {
    legend: 'What kind of site?',
    options: ['Apartment', 'Office', 'Commercial parking', 'Other'],
  },
}

/** Replace {district} / {DISTRICT} placeholders with the resolved name. */
export function withDistrict(template: string, district: string): string {
  return template
    .replaceAll('{district}', district)
    .replaceAll('{DISTRICT}', district.toUpperCase())
}

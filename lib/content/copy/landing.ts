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
 * Prices INCLUDE GST, cover the motor kit only, and installation is quoted
 * separately after the free site survey. RFID is an add-on, never included.
 * See lib/content/entrancePricing.ts.
 */

import {
  GATE_PRODUCTS,
  entranceProduct,
  GATE_ANCHOR,
  BARRIER_ANCHOR,
  ENTRANCE_INCLUDED,
  BARRIER_INCLUDED,
  ENTRANCE_ADDONS,
  BARRIER_ADDONS,
  ENTRANCE_PRICE_NOTE,
  BARRIER_PRICE_NOTE,
  AC_VS_DC,
  POWER_CUT_ANSWER,
  ACCESS_ANSWER,
  INSTALLATION_ANSWER,
  GATE_FROM,
  BARRIER_FROM,
} from '@/lib/content/entrancePricing'

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
  priceNote: ENTRANCE_PRICE_NOTE,
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
    items: {
      label: string
      /** Standard (AC) tier — absent where the product is DC-only. */
      priceAc?: string
      /** Premium (DC) tier. */
      priceDc?: string
      /** Single price, for the barrier tiles which have no tiers. */
      price?: string
      bestFor: string
      preset: string
      /** Extra line under the title — the roller clarifier, battery note, etc. */
      note?: string
      image: { src: string; alt: string }
    }[]
  }
  included: {
    heading: string
    items: string[]
    addOns: string
    images: { src: string; alt: string }[]
  }
  /** AC vs DC comparison — gates only; the barrier is DC-only. */
  acVsDc?: typeof AC_VS_DC
  retrofit?: { heading: string; body: string }
  faqs: { q: string; a: string }[]
  finalCtaHeading: string
  /** Step 1 of the form: what are we quoting? */
  formStepOne: { legend: string; options: string[] }
}

export const lpGateAutomation: LpPage = {
  slug: 'gate-automation',
  source: 'lp-gate',
  title: `Automatic Gates in {district} — From ${GATE_FROM} incl. GST | Free Site Survey | ITSolute`,
  eyebrow: 'AUTOMATIC GATES · {DISTRICT}',
  h1: 'Automatic Gates for Your Home in {district}',
  sub: 'Open your gate with one tap — from your car, your phone or your sit-out. Sliding, swing and roller gate automation, installed by a Kottayam-based team.',
  priceAnchor: GATE_ANCHOR,
  priceNote: '2 remotes & safety sensors included',
  whatsappMessage:
    "Hi ITSolute, I'd like a quote for an automatic gate in {district}.",
  heroImage: {
    src: '/images/lp/gate-hero.jpg',
    alt: 'View from the driver’s seat of a car waiting at a dark slatted automatic gate on a wet driveway',
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
        body: 'Gate stays shut until you open it.',
      },
    ],
  },
  choices: {
    heading: 'Clear starting prices. No surprises.',
    note: LP_SHARED.priceNote,
    items: [
      {
        label: 'Sliding gate',
        priceAc: entranceProduct('sliding').ac!.from,
        priceDc: entranceProduct('sliding').dc!.from,
        note: 'Battery backup available on DC.',
        bestFor: entranceProduct('sliding').bestFor,
        preset: 'Sliding',
        image: {
          src: '/images/lp/gate-sliding.jpg',
          alt: 'Dark horizontal-slat sliding gate closed across a paved driveway in front of a white house',
        },
      },
      {
        label: 'Swing gate — single arm',
        priceDc: entranceProduct('swing-single').dc.from,
        bestFor: entranceProduct('swing-single').bestFor,
        preset: 'Swing',
        image: {
          src: '/images/lp/gate-swing-single.jpg',
          alt: 'Single-leaf dark slatted swing gate with an arm motor mounted on the gate pillar',
        },
      },
      {
        label: 'Swing gate — double arm',
        priceDc: entranceProduct('swing-double').dc.from,
        bestFor: entranceProduct('swing-double').bestFor,
        preset: 'Swing',
        image: {
          src: '/images/lp/gate-swing-double.jpg',
          alt: 'Double-leaf dark slatted swing gate standing open onto a paved forecourt',
        },
      },
      {
        label: 'Roller gate (wheel-drive swing)',
        priceDc: entranceProduct('roller').dc.from,
        note: entranceProduct('roller').note,
        bestFor: entranceProduct('roller').bestFor,
        preset: 'Roller (wheel-drive)',
        image: {
          src: '/images/lp/gate-roller.jpg',
          alt: 'Open double-leaf swing gate with bronze wheel-drive motor units at the bottom of each leaf resting on paving',
        },
      },
    ],
  },
  acVsDc: AC_VS_DC,
  included: {
    heading: 'Included as standard',
    items: ENTRANCE_INCLUDED,
    // Only the sensors photo: the battery cabinet shot used to sit here and
    // implied battery backup was included, which it is not.
    images: [
      {
        src: '/images/blog/automatic-gate-safety-sensors.jpg',
        alt: 'Photocell safety sensor mounted on a brick gate pillar beside a dark metal gate',
      },
      {
        src: '/images/lp/gate-sliding.jpg',
        alt: 'Dark horizontal-slat sliding gate closed across a paved driveway',
      },
    ],
    addOns: ENTRANCE_ADDONS,
  },
  retrofit: {
    heading: 'Already have a gate?',
    body: 'We can usually automate it. No need to replace your gate — we check it during the free site survey.',
  },
  faqs: [
    {
      q: 'What happens during a power cut?',
      a: POWER_CUT_ANSWER,
    },
    {
      q: 'AC or DC motor — which should I choose?',
      a: 'AC is the lower starting price and does the job. It has no battery of its own, but it runs from your home inverter connection through a power cut — we wire that in during installation. DC costs more, runs smoother and quieter, carries its own battery backup on two 12V batteries, and is the only option if you want voice control. If you already have a house inverter, AC is honest value; if you do not, or you want the gate independent of it, DC is worth the difference.',
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
      a: `Sliding gates start from ${GATE_FROM}, swing gates from ₹40,000 and roller gates from ₹46,000 — all including GST, for the motor kit. The exact figure depends on your gate size and weight, and installation is quoted after the free site survey.`,
    },
    {
      q: 'Is installation included?',
      a: INSTALLATION_ANSWER,
    },
    {
      q: 'Do you maintain it after installation?',
      a: 'Yes — AMC plans are available, covering scheduled checks of the safety sensors, the moving parts and, where fitted, the backup batteries.',
    },
  ],
  finalCtaHeading: 'Get your free site survey in {district}',
  formStepOne: {
    legend: 'What kind of gate?',
    options: ['Sliding', 'Swing', 'Roller (wheel-drive)', 'Not sure'],
  },
}

export const lpBoomBarrier: LpPage = {
  slug: 'boom-barrier',
  source: 'lp-barrier',
  title: `Boom Barriers in {district} — From ${BARRIER_FROM} incl. GST | Free Site Survey | ITSolute`,
  eyebrow: 'BOOM BARRIERS · {DISTRICT}',
  h1: 'Boom Barriers for Apartments, Offices & Parking in {district}',
  sub: 'Control every vehicle that enters. Automatic boom barriers with remote control, and RFID tags for residents and staff as an add-on, installed by a Kottayam-based team.',
  priceAnchor: BARRIER_ANCHOR,
  priceNote: 'DC motor · arm up to 5 m · 2 remotes included',
  whatsappMessage: "Hi ITSolute, I'd like a quote for a boom barrier in {district}.",
  heroImage: {
    src: '/images/lp/barrier-hero.jpg',
    alt: 'Car waiting at a raised boom barrier on the approach road to a building entrance',
  },
  pain: {
    heading: 'Stop unknown vehicles at the gate.',
    items: [
      {
        title: 'Unauthorised parking',
        body: 'Only registered tags and remotes get in.',
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
    note: BARRIER_PRICE_NOTE,
    items: [
      {
        label: 'Apartments & flats',
        bestFor: 'Resident vehicles in and out all day',
        preset: 'Apartment',
        image: {
          src: '/images/lp/barrier-apartment.jpg',
          alt: 'Boom barrier at the vehicle entrance of an apartment block with towers behind',
        },
      },
      {
        label: 'Office compounds',
        bestFor: 'Staff and visitor parking',
        preset: 'Office',
        image: {
          src: '/images/lp/barrier-office.jpg',
          alt: 'Boom barrier at an office compound entrance with a glass tower behind',
        },
      },
      {
        label: 'Commercial parking',
        bestFor: 'High traffic, paid or managed access',
        preset: 'Commercial parking',
        image: {
          src: '/images/lp/barrier-parking.jpg',
          alt: 'Boom barrier at the entrance to a covered commercial car park',
        },
      },
      {
        label: 'Hospitals, schools & institutions',
        bestFor: 'Controlled access on a busy campus',
        preset: 'Other',
        image: {
          src: '/images/lp/barrier-institution.jpg',
          alt: 'Boom barrier at a campus entrance with white institutional buildings behind',
        },
      },
    ],
  },
  included: {
    heading: 'Included as standard',
    items: BARRIER_INCLUDED,
    // Barrier photos only — this pair used to be two gate photos, one of them
    // a battery cabinet implying backup was included.
    images: [
      {
        src: '/images/lp/barrier-apartment.jpg',
        alt: 'Boom barrier at the vehicle entrance of an apartment block with towers behind',
      },
      {
        src: '/images/lp/barrier-parking.jpg',
        alt: 'Boom barrier at the entrance to a covered commercial car park',
      },
    ],
    addOns: BARRIER_ADDONS,
  },
  faqs: [
    {
      q: 'What happens during a power cut?',
      a: 'Boom barriers run on a DC motor, so battery backup is available on two 12V batteries — built in on some brands and a ₹5,500 add-on on others. Either way the barrier has a manual release so the arm can be raised by hand, which matters for emergency vehicle access.',
    },
    {
      q: 'Is it safe for vehicles and people?',
      a: 'Safety sensors are fitted as standard, so the arm stops rather than coming down on a vehicle or a person underneath it.',
    },
    {
      q: 'How do residents get access?',
      a: ACCESS_ANSWER,
    },
    {
      q: 'Will it work outdoors in Kerala rain?',
      a: 'Barriers are installed for outdoor use, and we advise on siting and drainage during the survey so water does not pool at the base.',
    },
    {
      q: 'How much does a boom barrier cost?',
      a: `From ${BARRIER_FROM} including GST, for the barrier, a DC motor, an arm up to 5 m, 2 remotes and safety sensors. Installation is quoted after the free site survey.`,
    },
    {
      q: 'Is installation included?',
      a: INSTALLATION_ANSWER,
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

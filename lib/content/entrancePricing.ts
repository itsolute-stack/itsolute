/**
 * Entrance automation — the single source of truth for prices and product facts.
 *
 * Every page, price table, schema block and landing page reads from here so the
 * numbers cannot drift apart again. Blog MDX cannot import constants, so those
 * posts are maintained by hand — if you change anything in this file, grep
 * content/blog for the old figure as well.
 *
 * THE FACTS, all of which are load-bearing:
 *   - Every price INCLUDES GST. Never add "+ GST" or "excluding GST".
 *   - Prices are a starting point for the MOTOR KIT, not an installed price.
 *     Installation is quoted after the free site survey; civil work is the
 *     customer's scope.
 *   - Power cuts. AC motors have no built-in battery, but they keep working in
 *     a power cut when powered from the home inverter connection — we can wire
 *     that during installation. DC motors have battery backup using two 12V
 *     batteries, built in on some brands and a ₹5,500 add-on on others.
 *   - Voice control is DC only. Never imply it works with an AC motor.
 *   - Every motor has a manual release key.
 *   - Access is by remote control (2 included), with RFID readers, tags, cards
 *     and transmitters available AS AN ADD-ON — never described as included or
 *     standard, and never priced on a page. Voice control is DC-only. Keypad
 *     and FASTag are not offered.
 *   - Warranty is the manufacturer's, from 2 years, and varies by brand. Never
 *     state a single fixed period.
 *   - Multiple brands, budget to premium — but no brand names on any page.
 */

export type MotorTier = { from: string; minPrice: number }

export type EntranceProduct = {
  key: 'sliding' | 'swing-single' | 'swing-double' | 'roller' | 'boom-barrier'
  label: string
  /** Extra line under the label, e.g. the roller gate clarifier. */
  note?: string
  /** Standard tier. Absent where the product is DC-only. */
  ac?: MotorTier
  /** Premium tier. Every product is available as DC. */
  dc: MotorTier
  bestFor: string
}

export const ENTRANCE_PRODUCTS: EntranceProduct[] = [
  {
    key: 'sliding',
    label: 'Sliding gate',
    ac: { from: '₹34,000', minPrice: 34000 },
    dc: { from: '₹39,500', minPrice: 39500 },
    bestFor: 'Most Kerala homes with side space',
  },
  {
    key: 'swing-single',
    label: 'Swing gate — single arm',
    dc: { from: '₹40,000', minPrice: 40000 },
    bestFor: 'Narrow gates',
  },
  {
    key: 'swing-double',
    label: 'Swing gate — double arm',
    dc: { from: '₹44,000', minPrice: 44000 },
    bestFor: 'Wide driveways',
  },
  {
    key: 'roller',
    label: 'Roller gate (wheel-drive swing)',
    note: 'Swing gate driven by wheel motors that roll on the ground.',
    dc: { from: '₹46,000', minPrice: 46000 },
    bestFor: 'Where there is no room for a sliding gate to park alongside',
  },
  {
    key: 'boom-barrier',
    label: 'Boom barrier',
    note: 'Arm up to 5 m.',
    dc: { from: '₹60,000', minPrice: 60000 },
    bestFor: 'Apartments, offices, parking and institutions',
  },
]

/* -------------------------------------------------------------------------
 * Regional pricing.
 *
 * Karnataka costs us more to serve than Kerala — the team travels from the
 * Bengaluru office and the logistics behind it differ — so every from-price
 * carries a flat uplift. It is flat on purpose: a percentage would produce
 * figures like ₹43,450 that read as precision we do not have, and the Kerala
 * numbers are already round starting points rather than computed ones.
 *
 * Derived, never retyped. Kerala stays the single set of literals in this
 * file, and Karnataka is those literals plus the uplift, so changing a Kerala
 * price moves the Karnataka price with it and the two cannot drift.
 * ---------------------------------------------------------------------- */

export type PriceRegion = 'kerala' | 'karnataka'

/** Flat per-product uplift on every Karnataka from-price. */
export const BANGALORE_UPLIFT = 5000

/** ₹39,000 — Indian digit grouping, which matches every price already shown. */
function inr(n: number): string {
  return `₹${n.toLocaleString('en-IN')}`
}

function upliftTier(tier: MotorTier, by: number): MotorTier {
  const minPrice = tier.minPrice + by
  return { from: inr(minPrice), minPrice }
}

/**
 * The product list for a region. Kerala returns the literals above untouched;
 * Karnataka returns the same products with every tier lifted.
 */
export function getEntrancePrices(region: PriceRegion): EntranceProduct[] {
  if (region === 'kerala') return ENTRANCE_PRODUCTS
  return ENTRANCE_PRODUCTS.map((p) => ({
    ...p,
    ac: p.ac ? upliftTier(p.ac, BANGALORE_UPLIFT) : undefined,
    dc: upliftTier(p.dc, BANGALORE_UPLIFT),
  }))
}

/** One product, priced for a region. */
export function regionProduct(
  key: EntranceProduct['key'],
  region: PriceRegion,
): EntranceProduct {
  const p = getEntrancePrices(region).find((x) => x.key === key)
  if (!p) throw new Error(`Unknown entrance product: ${key}`)
  return p
}

/** Gates only, priced for a region. The barrier is sold separately. */
export function regionGateProducts(region: PriceRegion): EntranceProduct[] {
  return getEntrancePrices(region).filter((p) => p.key !== 'boom-barrier')
}

/** Headline anchors per region — the cheapest gate and the barrier. */
export function regionGateFrom(region: PriceRegion): MotorTier {
  const sliding = regionProduct('sliding', region)
  return sliding.ac ?? sliding.dc
}

export function regionBarrierFrom(region: PriceRegion): MotorTier {
  return regionProduct('boom-barrier', region).dc
}

/**
 * The tier rows a price table shows, priced for a region.
 *
 * The labels and blurbs live here rather than beside each table so Kerala and
 * Karnataka describe the same motor identically — only the figure differs.
 * Callers attach their own `href`, because a Kerala page points at
 * /entrance-automation/* and a Bangalore page at /bangalore/*.
 */
export type GateTierRow = {
  key: EntranceProduct['key']
  label: string
  from: string
  minPrice: number
  blurb: string
}

const TIER_BLURBS: Record<string, string> = {
  'sliding-ac':
    'Rack-driven motor sized to your gate, for driveways with room alongside to slide. No battery of its own, but it runs from your inverter connection.',
  'sliding-dc':
    'Smoother and quieter than AC, and the version that carries its own battery backup on two 12V batteries, plus voice control.',
  'swing-single':
    'One arm motor for a single-leaf swing gate with room to swing inward.',
  'swing-double':
    'Two arm motors for a double-leaf gate, synchronised to open together.',
  roller:
    'A swing gate driven by wheel motors at the bottom of each leaf that roll along the ground \u2014 for sites with no room for a sliding gate to park alongside.',
  'boom-barrier':
    'Fast arm barrier for parking and vehicle access, opened from a remote.',
}

export function regionGateTierRows(region: PriceRegion): GateTierRow[] {
  const P = (k: EntranceProduct['key']) => regionProduct(k, region)
  const sliding = P('sliding')
  return [
    { key: 'sliding', label: 'Sliding gate \u2014 standard (AC motor)', from: sliding.ac!.from, minPrice: sliding.ac!.minPrice, blurb: TIER_BLURBS['sliding-ac'] },
    { key: 'sliding', label: 'Sliding gate \u2014 premium (DC motor)', from: sliding.dc.from, minPrice: sliding.dc.minPrice, blurb: TIER_BLURBS['sliding-dc'] },
    { key: 'swing-single', label: 'Swing gate \u2014 single arm (DC motor)', from: P('swing-single').dc.from, minPrice: P('swing-single').dc.minPrice, blurb: TIER_BLURBS['swing-single'] },
    { key: 'swing-double', label: 'Swing gate \u2014 double arm (DC motor)', from: P('swing-double').dc.from, minPrice: P('swing-double').dc.minPrice, blurb: TIER_BLURBS['swing-double'] },
    { key: 'roller', label: 'Roller gate \u2014 wheel-drive swing (DC motor)', from: P('roller').dc.from, minPrice: P('roller').dc.minPrice, blurb: TIER_BLURBS.roller },
    { key: 'boom-barrier', label: 'Boom barrier (DC motor, arm up to 5 m)', from: P('boom-barrier').dc.from, minPrice: P('boom-barrier').dc.minPrice, blurb: TIER_BLURBS['boom-barrier'] },
  ]
}

export function entranceProduct(key: EntranceProduct['key']): EntranceProduct {
  const p = ENTRANCE_PRODUCTS.find((x) => x.key === key)
  if (!p) throw new Error(`Unknown entrance product: ${key}`)
  return p
}

/** Gates only — the boom barrier is priced and sold separately. */
export const GATE_PRODUCTS = ENTRANCE_PRODUCTS.filter((p) => p.key !== 'boom-barrier')

/** Headline anchors. Used in heroes, meta titles and descriptions. */
export const GATE_FROM = '₹34,000'
export const GATE_FROM_MIN = 34000
export const BARRIER_FROM = '₹60,000'
export const BARRIER_FROM_MIN = 60000
export const GATE_ANCHOR = `From ${GATE_FROM} incl. GST`
export const BARRIER_ANCHOR = `From ${BARRIER_FROM} incl. GST`

/** Battery backup add-on, for DC motors without one built in. */
export const BATTERY_ADDON = '₹5,500'

/** What the starting price actually buys. */
export const ENTRANCE_INCLUDED = [
  'Motor kit',
  '2 remote controls',
  'Safety sensors (photocell pair)',
  'Rack/track for sliding gates',
  'Welding work',
  'Manufacturer warranty (from 2 years, varies by brand)',
]

export const BARRIER_INCLUDED = [
  'Barrier unit & arm (up to 5 m)',
  'DC motor',
  '2 remote controls',
  'Safety sensors (photocell pair)',
  'Welding work',
  'Manufacturer warranty (from 2 years, varies by brand)',
]

export const ENTRANCE_ADDONS = `RFID access (tags/cards) · Battery backup for DC motors (${BATTERY_ADDON}) · Voice control for DC motors (Alexa / Google Home) · AMC maintenance plans.`

export const BARRIER_ADDONS = `RFID access (tags/cards) · Battery backup (${BATTERY_ADDON}, where not built in) · AMC maintenance plans · combine with an automatic gate.`

/** The note that must sit under every gate price table. */
export const ENTRANCE_PRICE_NOTE =
  'Prices include GST and cover the motor kit, 2 remotes, safety sensors, rack/track and welding. Installation is quoted after your free site survey. Civil work, if needed, is by the customer.'

export const BARRIER_PRICE_NOTE =
  'Price includes GST. Installation is quoted after your free site survey. Civil work, if needed, is by the customer.'

export const WARRANTY_NOTE =
  'Manufacturer warranty, from 2 years — the exact term varies by brand.'

/** AC vs DC, kept to three scannable rows. This is where customers self-select. */
export const AC_VS_DC = {
  heading: 'AC or DC — which do I need?',
  rows: [
    {
      label: 'Price',
      ac: 'Lowest starting price',
      dc: 'Costs more',
    },
    {
      label: 'Power cut',
      ac: 'Runs on your home inverter connection, wired in at installation',
      dc: 'Battery backup — two 12V batteries',
    },
    {
      label: 'Running',
      ac: 'Does the job',
      dc: 'Smoother and quieter, and voice control is possible',
    },
  ],
} as const

/** Power-cut behaviour, written once so every page tells the same story. */
export const POWER_CUT_ANSWER =
  'Either motor can keep working. An AC motor has no battery of its own, but it runs from your home inverter connection — we can wire it in during installation. A DC motor has its own battery backup using two 12V batteries, built in on some brands and a ₹5,500 add-on on others. Every motor also has a manual release key so the gate can be opened by hand.'

/**
 * Access methods. RFID is an ADD-ON — quoted after the survey, never described
 * as included or standard, and never priced on a page.
 */
export const ACCESS_ANSWER =
  'By remote control — two are included with every motor kit, and extra remotes are available. RFID access is available as an add-on: readers, tags or cards issued per person or per vehicle, quoted after your free site survey. On DC motors you can add voice control through Alexa or Google Home. Every motor also has a manual release key.'

/** The one approved way to describe RFID. Never add a price. */
export const RFID_ADDON_NOTE =
  'RFID access available as an add-on — quoted after your free site survey.'

export const INSTALLATION_ANSWER =
  'The starting price covers the motor kit, 2 remotes, safety sensors, rack/track and welding. Installation is quoted after the free site survey, because it depends on your gate and site. Civil work, if any, is the customer’s scope.'

/* -------------------------------------------------------------------------
 * Products we install but do not yet publish a price for.
 *
 * Video door phones, smart door locks and curtain/blind motors vary enough by
 * model that a single "from" figure would mislead more than it helps, so the
 * slots below are intentionally empty. While a slot is empty the product page
 * renders NO_PRICE_NOTE in place of the price table, and emits no Offer
 * schema — an ItemList of zero offers is worse than no ItemList.
 *
 * To publish a price later, add rows here and nothing else needs to change:
 *
 *   export const VIDEO_DOOR_PHONE_PRICES: PriceRow[] = [
 *     { label: '2-wire indoor + outdoor unit', from: '₹X', minPrice: X },
 *   ]
 *
 * Keep every figure GST-inclusive, like the gate and barrier prices above.
 * ---------------------------------------------------------------------- */

/** Structurally identical to EntranceProduct['pricing']['rows'][number]. */
export type PriceRow = { label: string; from: string; minPrice: number }

/** Empty on purpose — see the note above. */
export const VIDEO_DOOR_PHONE_PRICES: PriceRow[] = []

/** Empty on purpose — see the note above. */
export const SMART_LOCK_PRICES: PriceRow[] = []

/** Empty on purpose — see the note above. */
export const CURTAIN_MOTOR_PRICES: PriceRow[] = []

/** Shown instead of a price table while a product's price slot is empty. */
export const NO_PRICE_NOTE =
  'Price depends on the model and your site — quoted after a free site survey.'

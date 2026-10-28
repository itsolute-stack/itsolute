import {
  Fence,
  DoorOpen,
  RadioTower,
  ScanLine,
  ShieldCheck,
  BatteryCharging,
  KeyRound,
  Cctv,
  Gauge,
  Car,
  RectangleHorizontal,
  Siren,
  Mic,
  type LucideIcon,
} from 'lucide-react'
import type { FAQ } from '@/lib/content/faqs'
import {
  entranceProduct,
  GATE_FROM,
  BARRIER_FROM,
  ENTRANCE_PRICE_NOTE,
  BARRIER_PRICE_NOTE,
  POWER_CUT_ANSWER,
  ACCESS_ANSWER,
  INSTALLATION_ANSWER,
  GATE_FROM_MIN,
  BARRIER_FROM_MIN,
  RFID_ADDON_NOTE,
} from '@/lib/content/entrancePricing'
import type { PageVideo } from '@/components/shared/VideoEmbed'

/**
 * Entrance Automation — physical access automation (automatic gates + boom
 * barriers). Deliberately separate from /automation (business-process
 * automation). Hub at /entrance-automation, two product children driven by
 * `entranceProducts` via /entrance-automation/[slug].
 *
 * Content shape mirrors /cctv: hero → what we install → who → why → process →
 * pricing tiers → AMC → FAQ → CTA. Service area is Kerala-wide.
 */

export const entranceHubCopy = {
  hero: {
    eyebrow: 'ENTRANCE AUTOMATION · KERALA',
    headline: 'Gate automation and barriers that open on their own — reliably.',
    sub: 'Automatic gate and boom barrier installation for homes, apartments, offices, and commercial sites across Kerala. Installed by a team that also handles the wiring, access control, and CCTV it connects to — so it actually works together.',
    whatsappMessage: 'Hi ITSolute, I want to automate an entrance (gate / boom barrier).',
  },
  intro: {
    eyebrow: 'ONE ENTRANCE, DONE PROPERLY',
    headline: 'Two products, one job: control who comes through.',
    body: 'Whether it’s a gate at a villa, a shared entrance to an apartment block, or a barrier at a commercial car park, entrance automation is only as good as its installation — the motor, the safety sensors, the access method, and the wiring all have to be right. We install both automatic gates and boom barriers, and because we also handle networks, access control, and CCTV, we can make them work as one system rather than four disconnected boxes.',
  },
  products: {
    eyebrow: 'WHAT WE AUTOMATE',
    headline: 'Pick the entrance you need to control.',
    items: [
      {
        title: 'Automatic Gates',
        href: '/entrance-automation/automatic-gates',
        tagline: 'Sliding and swing gate automation.',
        blurb: 'Motorise a new or existing sliding or swing gate — opened from a remote, with safety sensors fitted as standard. For homes, villas, apartments, and commercial compounds.',
      },
      {
        title: 'Boom Barriers',
        href: '/entrance-automation/boom-barriers',
        tagline: 'Fast barriers for parking and access control.',
        blurb: 'Boom barriers for car parks, apartments, offices, and commercial entrances — DC motor, arm up to 5 m, remote control as standard and RFID tags available as an add-on.',
      },
    ],
  },
  areas: {
    eyebrow: 'AREAS WE SERVE',
    headline: 'Entrance automation across central Kerala.',
    sub: 'We install and service gates and boom barriers district-wide. Pick yours for local pricing, the towns we cover and answers specific to that area.',
  },
  why: {
    eyebrow: 'WHY ITSOLUTE',
    headline: 'A motor is easy to fit. Making it safe and connected is the job.',
    points: [
      {
        title: 'Safety built in, not skipped',
        body: 'Photocell sensors and obstacle detection so a gate or barrier never closes on a person, pet, or vehicle. This is the part cheap installs leave out.',
      },
      {
        title: 'It connects to everything else',
        body: 'We also do networks, access control, and CCTV — so your entrance can tie into cameras, intercom, and access records instead of standing alone.',
      },
      {
        title: 'Genuine motors, real warranty',
        body: 'Motors and barriers from trusted brands, sourced through trusted suppliers, with manufacturer warranty on every unit.',
      },
      {
        title: 'Backup for power cuts',
        body: 'Battery backup so your gate or barrier keeps working through a power failure — essential in Kerala.',
      },
      {
        title: 'Kerala-wide, on-site',
        body: 'Site survey, installation, and support across Kerala — with fixed written quotes before we start and GST invoicing.',
      },
      {
        title: 'AMC to keep it moving',
        body: 'Gates and barriers are mechanical and cycle constantly. Our AMC keeps them serviced so they don’t fail at the worst moment.',
      },
    ],
  },
  faq: {
    eyebrow: 'ENTRANCE AUTOMATION · FAQ',
    headline: 'Common questions before you automate.',
  },
  finalCta: {
    headline: 'Automate your entrance the way that actually lasts.',
    sub: 'Free site survey across Kerala. Fixed written quote before you commit. Safe, connected, and backed by AMC.',
    primary: 'Request a site survey',
    secondary: 'WhatsApp us',
  },
} as const

export const entranceHubFAQs: FAQ[] = [
  {
    q: 'What’s the difference between an automatic gate and a boom barrier?',
    a: 'An automatic gate controls a full entrance — it physically closes off the opening, so it’s used at homes, villas, apartments, and compounds for security. A boom barrier is a fast-moving arm that controls vehicle flow — used at car parks, apartment entries, and commercial sites where you need to let vehicles through quickly but not seal the entrance. Many sites use both: a gate for the perimeter, a barrier for the parking.',
  },
  {
    q: 'Do you install for homes as well as commercial sites?',
    a: 'Yes. Automatic gates are common at homes and villas; boom barriers and gates both suit apartments, offices, factories, hospitals, and commercial car parks. We install for homes and businesses across Kerala.',
  },
  {
    q: 'Do gates and barriers work during a power cut?',
    a: POWER_CUT_ANSWER,
  },
  {
    q: 'Can you connect the entrance to CCTV and access control?',
    a: 'Yes, and it’s one of our main advantages. Because we also install networks and CCTV, we can tie your gate or barrier into cameras and intercoms so the whole entrance works as one system.',
  },
  {
    q: 'Do you offer AMC for gates and barriers?',
    a: 'Yes. Gates and barriers are mechanical systems that cycle constantly and need regular servicing — motor checks, sensor alignment, battery, and remote/access sync. Our AMC keeps them maintained so they don’t fail unexpectedly. See either product page for what the AMC covers.',
  },
]

/** `from` is the display string; `minPrice` is the same figure for Offer schema. */
export type EntrancePriceRow = { label: string; from: string; minPrice: number }

export type EntranceProduct = {
  slug: string
  metaTitle: string
  metaDescription: string
  serviceName: string
  serviceType: string
  priceLow: string
  priceHigh: string
  whatsappMessage: string
  hero: { eyebrow: string; headline: string; sub: string }
  install: {
    eyebrow: string
    headline: string
    items: { icon: LucideIcon; title: string; body: string }[]
  }
  who: { eyebrow: string; headline: string; items: string[] }
  why: { eyebrow: string; headline: string; points: { title: string; body: string }[] }
  process: {
    eyebrow: string
    headline: string
    steps: { index: string; title: string; body: string }[]
  }
  pricing: { eyebrow: string; headline: string; rows: EntrancePriceRow[]; disclaimer: string }
  amc: { eyebrow: string; headline: string; body: string; points: string[] }
  faqs: FAQ[]
  /** Blog guides to surface on this product page, as post slugs, in order. */
  guides: string[]
  /** Optional "automate the gate you already have" section (gates page). */
  retrofit?: { eyebrow: string; headline: string; body: string; points: string[] }
  /** Optional YouTube video. Leave undefined and nothing renders. */
  video?: PageVideo
}

export const entranceProducts: Record<string, EntranceProduct> = {
  'automatic-gates': {
    slug: 'automatic-gates',
    metaTitle:
      `Automatic Gate Installation in Kerala — Sliding, Swing & Roller | From ${GATE_FROM}`,
    metaDescription:
      `Sliding, swing and roller gates from ${GATE_FROM} incl. GST, with sensors and 2 remotes. Free site survey in Kottayam, Ernakulam and Alappuzha.`,
    serviceName: 'Automatic Gate Installation',
    serviceType: 'Automatic Gate Installation',
    priceLow: String(GATE_FROM_MIN),
    priceHigh: '200000',
    whatsappMessage: 'Hi ITSolute, I want to automate my gate (sliding / swing).',
    guides: [
      'automatic-gate-price-kerala',
      'sliding-vs-swing-gate-kerala',
      'automate-existing-gate-retrofit',
      'automatic-gate-safety-sensors',
      'automatic-gate-power-cut-battery-backup',
      'automatic-gate-not-working-troubleshooting',
    ],
    hero: {
      eyebrow: 'AUTOMATIC GATES · KOTTAYAM & KERALA',
      headline: 'Never get out of the car to open the gate again.',
      sub: 'Sliding, swing and roller gate automation for homes, villas, apartments, and commercial compounds across Kerala — opened from a remote, with safety sensors fitted as standard.',
    },
    install: {
      eyebrow: 'WHAT WE INSTALL',
      headline: 'The full automatic-gate setup, fitted and configured.',
      items: [
        { icon: DoorOpen, title: 'Sliding gate motors', body: 'Rack-driven motors sized to your gate’s weight and length, for smooth reliable travel.' },
        { icon: Fence, title: 'Swing gate motors', body: 'Arm or underground motors for single and double swing gates.' },
        { icon: RadioTower, title: 'Remote control', body: 'Two remotes come with every motor kit, and extra remotes are available.' },
        { icon: ScanLine, title: 'RFID access (add-on)', body: `Readers, tags and cards issued per person or per vehicle. ${RFID_ADDON_NOTE}` },
        { icon: Mic, title: 'Voice control (Alexa / Google)', body: 'On DC motors, a WiFi smart-switch module wired into the motor’s remote-control input gives Alexa and Google Home voice control alongside the remote. Not available on AC motors.' },
        { icon: ShieldCheck, title: 'Safety sensors', body: 'A photocell pair is included, so the gate stops rather than closing on a person or vehicle.' },
        { icon: BatteryCharging, title: 'Power cuts', body: 'DC motors carry battery backup on two 12V batteries — built in on some brands, a ₹5,500 add-on on others. AC motors have no battery but run from your home inverter connection, which we can wire in at installation.' },
        { icon: Cctv, title: 'Intercom & CCTV integration', body: 'See and speak to visitors, and tie the gate into your camera system.' },
        { icon: KeyRound, title: 'Retrofit existing gates', body: 'We motorise your existing sliding or swing gate — you don’t need a new one.' },
      ],
    },
    who: {
      eyebrow: 'WHO WE INSTALL FOR',
      headline: 'Anywhere a gate should open without getting out of the car.',
      items: [
        'Homes and villas — driveways and compound gates',
        'Apartments and gated communities — shared entrances',
        'Offices and commercial compounds',
        'Factories and warehouses — vehicle entrances',
        'Schools and institutions — controlled access',
        'Resorts and hotels — guest and service entrances',
      ],
    },
    why: {
      eyebrow: 'WHY ITSOLUTE FOR GATES',
      headline: 'Motorising a gate is easy. Making it safe and reliable is the job.',
      points: [
        { title: 'Safety-first installation', body: 'Photocell sensors and obstacle detection as standard, so the gate stops rather than crushing anything in its path.' },
        { title: 'Motor sized to your gate', body: 'We match the motor to your gate’s weight and length — an undersized motor is the most common cause of early failure.' },
        { title: 'Genuine motors, real warranty', body: 'Motors from trusted brands through trusted suppliers, with manufacturer warranty on every unit.' },
        { title: 'Battery backup for power cuts', body: 'Fitted as standard, because a gate that dies with the power isn’t much use in Kerala.' },
        { title: 'Connected, not standalone', body: 'Tied into intercom and CCTV where you want it — because we install those too.' },
        { title: 'AMC to keep it moving', body: 'Ongoing servicing so sensors, motor, and battery stay in good order.' },
      ],
    },
    process: {
      eyebrow: 'HOW IT WORKS',
      headline: 'Five steps from manual gate to automatic.',
      steps: [
        { index: '01', title: 'Site survey', body: 'We measure the gate, check the weight and travel, and assess power and layout — free across Kerala.' },
        { index: '02', title: 'Recommend & quote', body: 'The right motor and access method for your gate, with a fixed written quote. Approved before we start.' },
        { index: '03', title: 'Install & wire', body: 'Motor, sensors, wiring, and access fitted neatly, with the electrical side done properly.' },
        { index: '04', title: 'Configure & test', body: 'Remotes, safety sensors and the manual release set up and tested, with a walkthrough for you.' },
        { index: '05', title: 'Support & AMC', body: 'Optional AMC to keep the gate serviced and reliable year-round.' },
      ],
    },
    pricing: {
      eyebrow: 'INDICATIVE PRICING',
      headline: 'Gate automation pricing, by gate type.',
      rows: [
        {
          label: 'Sliding gate — standard (AC motor)',
          from: entranceProduct('sliding').ac!.from,
          minPrice: entranceProduct('sliding').ac!.minPrice,
        },
        {
          label: 'Sliding gate — premium (DC motor)',
          from: entranceProduct('sliding').dc.from,
          minPrice: entranceProduct('sliding').dc.minPrice,
        },
        {
          label: 'Swing gate — single arm (DC motor)',
          from: entranceProduct('swing-single').dc.from,
          minPrice: entranceProduct('swing-single').dc.minPrice,
        },
        {
          label: 'Swing gate — double arm (DC motor)',
          from: entranceProduct('swing-double').dc.from,
          minPrice: entranceProduct('swing-double').dc.minPrice,
        },
        {
          label: 'Roller gate — wheel-drive swing (DC motor)',
          from: entranceProduct('roller').dc.from,
          minPrice: entranceProduct('roller').dc.minPrice,
        },
      ],
      disclaimer:
        ENTRANCE_PRICE_NOTE,
    },
    retrofit: {
      eyebrow: 'RETROFIT',
      headline: 'Already have a gate? We can automate it.',
      body: 'Most of what we do is motorising gates that are already there — you very rarely need a new gate to get an automatic one. At the free site survey we check whether yours is a good candidate, and we’ll tell you honestly if it isn’t rather than bolting a motor onto a gate that will fight it.',
      points: [
        'Sliding, swing and roller gates can all usually be retrofitted',
        'We check weight, travel and the condition of hinges, track and rollers first',
        'A gate that drags or sags gets corrected before the motor goes on — otherwise the motor takes the strain',
        'Retrofitting is normally far cheaper than replacing a sound gate',
        'Safety sensors are fitted as standard, same as a new install',
      ],
    },
    amc: {
      eyebrow: 'AMC & MAINTENANCE',
      headline: 'A gate motor is mechanical. Keep it serviced.',
      body: 'An automatic gate cycles thousands of times a year — motors wear, sensors drift, batteries age, and remotes lose sync. Our AMC keeps it all in order so the gate doesn’t fail on the day you’re rushing out. It can be combined with your other ITSolute AMC under one contract.',
      points: [
        'Scheduled motor and mechanism servicing',
        'Safety-sensor alignment and testing',
        'Battery-backup health checks and replacement',
        'Remote pairing and handover',
        'Priority response when the gate fails',
      ],
    },
    faqs: [
      {
        q: 'Can you automate my existing gate, or do I need a new one?',
        a: 'In most cases we can automate your existing sliding or swing gate — you don’t need to replace it. At the site survey we check the gate’s condition, weight, and travel to confirm it’s suitable and pick the right motor. If the gate itself is in poor shape we’ll tell you honestly.',
      },
      {
        q: 'Sliding or swing — which is better?',
        a: 'It depends on your space. Sliding gates suit wider openings and driveways with room alongside for the gate to slide; swing gates suit narrower entrances with space to swing inward. The site survey settles it based on your layout — both automate reliably.',
      },
      {
        q: 'Is it safe around children and pets?',
        a: 'Yes, when installed properly — which is the whole point of doing it right. We fit photocell sensors and obstacle detection as standard, so the gate stops and reverses rather than closing on anything in its path. Cheap installs that skip the sensors are exactly what you don’t want here.',
      },
      {
        q: 'What happens during a power cut?',
        a: 'We fit battery backup as standard, so the gate keeps working for a period on backup power. There’s also a manual release so you can always open the gate by hand if needed. Given how common power cuts are in Kerala, we treat backup as essential, not optional.',
      },
      {
        q: 'How do I open the gate?',
        a: ACCESS_ANSWER,
      },
      {
        q: 'Do you offer AMC for automatic gates?',
        a: 'Yes. Because a gate is mechanical and cycles constantly, regular servicing matters — motor, sensors, battery, and remotes all need periodic checks. Our AMC covers this and can be combined with your other ITSolute AMC under one contract.',
      },
    ],
  },

  'boom-barriers': {
    slug: 'boom-barriers',
    metaTitle: `Boom Barrier Installation in Kerala | From ${BARRIER_FROM} | ITSolute`,
    metaDescription:
      `Boom barriers from ${BARRIER_FROM} incl. GST for apartments, offices and car parks. Arm to 5 m. Free site survey in Kottayam, Ernakulam and Alappuzha.`,
    serviceName: 'Boom Barrier Installation',
    serviceType: 'Boom Barrier Installation',
    priceLow: String(BARRIER_FROM_MIN),
    priceHigh: '150000',
    whatsappMessage: 'Hi ITSolute, I want to install a boom barrier.',
    guides: [
      'boom-barrier-price-kerala',
      'apartment-gate-automation-kerala',
      'rfid-vs-remote-gate-access',
    ],
    hero: {
      eyebrow: 'BOOM BARRIERS · KOTTAYAM & KERALA',
      headline: 'Control vehicle access without a guard at the gate.',
      sub: 'Boom barrier installation for car parks, apartments, offices, and commercial entrances across Kerala — DC motor, arm up to 5 m, opened from a remote, with safety sensors fitted as standard.',
    },
    install: {
      eyebrow: 'WHAT WE INSTALL',
      headline: 'The full boom-barrier setup, fitted and integrated.',
      items: [
        { icon: RectangleHorizontal, title: 'Boom barrier units', body: 'Straight, folding, and curved arms sized to your entrance width and traffic.' },
        { icon: RadioTower, title: 'Remote control', body: 'Two remotes come with the barrier, and extra remotes are available.' },
        { icon: ScanLine, title: 'RFID access (add-on)', body: `Tags or cards for residents and staff, issued and revoked per vehicle. ${RFID_ADDON_NOTE}` },
        { icon: Mic, title: 'Voice control (Alexa / Google)', body: 'A WiFi smart-switch module wired into the barrier motor’s remote-control input gives Alexa and Google Home voice control alongside the remote. Boom barriers run on DC motors, so this is always an option.' },
        { icon: ShieldCheck, title: 'Safety & anti-crash', body: 'Sensors so the arm never drops on a vehicle or person.' },
        { icon: Cctv, title: 'CCTV integration', body: 'Tie the entrance into your camera system — because we install those too.' },
        { icon: BatteryCharging, title: 'Battery backup', body: 'The DC motor takes battery backup on two 12V batteries — built in on some brands, a ₹5,500 add-on on others. A manual release raises the arm by hand either way.' },
        { icon: Siren, title: 'High-duty motors', body: 'Rated for high-traffic entrances that cycle all day.' },
      ],
    },
    who: {
      eyebrow: 'WHO WE INSTALL FOR',
      headline: 'Anywhere vehicles need controlled, fast access.',
      items: [
        'Apartments and gated communities — resident parking',
        'Offices and IT parks — staff and visitor parking',
        'Commercial car parks and malls',
        'Factories and warehouses — vehicle gates',
        'Hospitals and hotels — entry and parking control',
        'Toll points and controlled entries',
      ],
    },
    why: {
      eyebrow: 'WHY ITSOLUTE FOR BARRIERS',
      headline: 'A barrier is only as good as the access system behind it.',
      points: [
        { title: 'Access done right', body: 'Remotes paired and safety sensors aligned so the right vehicles pass quickly and the arm closes safely.' },
        { title: 'Integrated with your systems', body: 'Ties into CCTV, number-plate cameras, and access records — because we install those too.' },
        { title: 'High-duty, genuine units', body: 'Barriers rated for your traffic volume, from trusted brands through trusted suppliers, with manufacturer warranty.' },
        { title: 'Safety and anti-crash', body: 'Loop and safety sensors so the arm never drops on a vehicle or person.' },
        { title: 'Battery backup', body: 'Keeps the entrance controlled through power cuts, standard in every install.' },
        { title: 'AMC for high-cycle reliability', body: 'Barriers cycle constantly — our AMC keeps the motor, arm, and sensors serviced.' },
      ],
    },
    process: {
      eyebrow: 'HOW IT WORKS',
      headline: 'Five steps from open entry to controlled access.',
      steps: [
        { index: '01', title: 'Site survey', body: 'We assess the entrance width, traffic volume, and access needs — free across Kerala.' },
        { index: '02', title: 'Recommend & quote', body: 'The right barrier and arm length for your entrance, with a fixed written quote.' },
        { index: '03', title: 'Install & wire', body: 'Barrier, loops, sensors, and access hardware fitted and wired properly.' },
        { index: '04', title: 'Configure & test', body: 'Access tags, loop detection, safety, and backup set up and tested, with a walkthrough.' },
        { index: '05', title: 'Support & AMC', body: 'Optional AMC to keep a high-cycle barrier reliable year-round.' },
      ],
    },
    pricing: {
      eyebrow: 'INDICATIVE PRICING',
      headline: 'Boom barrier pricing.',
      rows: [
        {
          label: 'Boom barrier (DC motor, arm up to 5 m)',
          from: entranceProduct('boom-barrier').dc.from,
          minPrice: entranceProduct('boom-barrier').dc.minPrice,
        },
      ],
      disclaimer:
        BARRIER_PRICE_NOTE,
    },
    amc: {
      eyebrow: 'AMC & MAINTENANCE',
      headline: 'A barrier cycles all day. Servicing keeps it up.',
      body: 'A boom barrier at a busy entrance can cycle hundreds of times a day — the motor, arm balance, loop detectors, and access hardware all need regular attention. Our AMC keeps it serviced so the barrier isn’t stuck up or down when traffic is queuing. It can be combined with your other ITSolute AMC under one contract.',
      points: [
        'Scheduled motor and arm-balance servicing',
        'Loop-detector and safety-sensor testing',
        'Remote pairing and safety sensor alignment checks',
        'Battery-backup health checks and replacement',
        'Priority response when the barrier fails',
      ],
    },
    faqs: [
      {
        q: 'Can the barrier open automatically for registered vehicles?',
        a: ACCESS_ANSWER,
      },
      {
        q: 'How fast does a boom barrier operate?',
        a: 'Barrier arms typically raise in a few seconds, and high-duty units are built to cycle continuously at busy entrances. We match the barrier’s speed and duty rating to your traffic, so it keeps up at peak times rather than becoming a bottleneck.',
      },
      {
        q: 'Is it safe — can the arm drop on a car?',
        a: 'No, when installed properly. Loop detectors sense a vehicle under the arm and hold it up, and safety sensors prevent the arm dropping on anything in the way. Correct loop and sensor setup is exactly the part we get right that cheap installs skip.',
      },
      {
        q: 'Can you integrate the barrier with our CCTV and access records?',
        a: 'Yes, and it’s a key advantage of using us. Because we also install CCTV, number-plate cameras, and access control, we can tie the barrier into your camera and access-record systems so entry and exit are logged and visible — not just a standalone arm.',
      },
      {
        q: 'What happens in a power cut?',
        a: 'We fit battery backup as standard so the barrier keeps operating through a power failure, and there’s a manual release to raise the arm if needed. For a controlled entrance, staying operational through a power cut matters — so we treat backup as essential.',
      },
      {
        q: 'Do you offer AMC for boom barriers?',
        a: 'Yes, and for a high-traffic barrier it’s strongly recommended. Barriers cycle constantly, so motor, arm balance, loop detectors, and access hardware all need regular servicing. Our AMC covers this and can be combined with your other ITSolute AMC under one contract.',
      },
    ],
  },
}

export function getEntranceProduct(slug: string): EntranceProduct | null {
  return entranceProducts[slug] ?? null
}

export function getAllEntranceSlugs(): string[] {
  return Object.keys(entranceProducts)
}

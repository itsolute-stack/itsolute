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
  type LucideIcon,
} from 'lucide-react'
import type { FAQ } from '@/lib/content/faqs'

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
    headline: 'Gates and barriers that open on their own — reliably.',
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
        blurb: 'Motorise a new or existing sliding or swing gate — with remote, keypad or RFID access, safety sensors, and battery backup. For homes, villas, apartments, and commercial compounds.',
      },
      {
        title: 'Boom Barriers',
        href: '/entrance-automation/boom-barriers',
        tagline: 'Fast barriers for parking and access control.',
        blurb: 'High-duty boom barriers for car parks, apartments, offices, and commercial entrances — with RFID/FASTag, loop detectors, and integration into your access and CCTV systems.',
      },
    ],
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
    a: 'With battery backup, yes — which we fit as standard given how common power cuts are in Kerala. The gate or barrier keeps operating for a period on backup, and can be released manually if needed.',
  },
  {
    q: 'Can you connect the entrance to CCTV and access control?',
    a: 'Yes, and it’s one of our main advantages. Because we also install networks, CCTV, and access control, we can tie your gate or barrier into cameras, intercoms, RFID, and access records so the whole entrance works as one system.',
  },
  {
    q: 'Do you offer AMC for gates and barriers?',
    a: 'Yes. Gates and barriers are mechanical systems that cycle constantly and need regular servicing — motor checks, sensor alignment, battery, and remote/access sync. Our AMC keeps them maintained so they don’t fail unexpectedly. See either product page for what the AMC covers.',
  },
]

export type EntranceTier = {
  title: string
  scope: string
  details: string
  from: string
  highlight: boolean
}

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
  tiers: { eyebrow: string; headline: string; items: EntranceTier[]; disclaimer: string }
  amc: { eyebrow: string; headline: string; body: string; points: string[] }
  faqs: FAQ[]
}

export const entranceProducts: Record<string, EntranceProduct> = {
  'automatic-gates': {
    slug: 'automatic-gates',
    metaTitle: 'Automatic Gate Installation in Kottayam & Kerala | Sliding & Swing | ITSolute',
    metaDescription:
      'Automatic gate installation across Kerala — sliding and swing gate motors with remote, keypad, and RFID access, safety sensors, and battery backup. Free site survey, GST invoicing, AMC.',
    serviceName: 'Automatic Gate Installation',
    serviceType: 'Automatic Gate Installation',
    priceLow: '25000',
    priceHigh: '200000',
    whatsappMessage: 'Hi ITSolute, I want to automate my gate (sliding / swing).',
    hero: {
      eyebrow: 'AUTOMATIC GATES · KOTTAYAM & KERALA',
      headline: 'Never get out of the car to open the gate again.',
      sub: 'Sliding and swing gate automation for homes, villas, apartments, and commercial compounds across Kerala — with remote, keypad, or RFID access, safety sensors, and battery backup for power cuts.',
    },
    install: {
      eyebrow: 'WHAT WE INSTALL',
      headline: 'The full automatic-gate setup, fitted and configured.',
      items: [
        { icon: DoorOpen, title: 'Sliding gate motors', body: 'Rack-driven motors sized to your gate’s weight and length, for smooth reliable travel.' },
        { icon: Fence, title: 'Swing gate motors', body: 'Arm or underground motors for single and double swing gates.' },
        { icon: RadioTower, title: 'Remote control', body: 'Handheld remotes for the whole household, added or removed as needed.' },
        { icon: ScanLine, title: 'Keypad & RFID access', body: 'Code keypads and RFID tags/cards so you control who can open it.' },
        { icon: ShieldCheck, title: 'Safety sensors', body: 'Photocells and obstacle detection so the gate never closes on a person or vehicle.' },
        { icon: BatteryCharging, title: 'Battery backup', body: 'Keeps the gate working through a power cut, with manual release as a fallback.' },
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
        { title: 'Connected, not standalone', body: 'Integrated with intercom, RFID, and CCTV where you want it — because we install those too.' },
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
        { index: '04', title: 'Configure & test', body: 'Remotes, keypad/RFID, safety sensors, and backup set up and tested, with a walkthrough for you.' },
        { index: '05', title: 'Support & AMC', body: 'Optional AMC to keep the gate serviced and reliable year-round.' },
      ],
    },
    tiers: {
      eyebrow: 'INDICATIVE PRICING',
      headline: 'Typical automatic-gate setups.',
      items: [
        {
          title: 'Home sliding gate',
          scope: 'Single sliding gate',
          details: 'Sliding motor sized to your gate, two remotes, safety sensors, and battery backup.',
          from: '₹25,000',
          highlight: false,
        },
        {
          title: 'Swing / villa gate',
          scope: 'Single or double swing gate',
          details: 'Swing motors, remotes, keypad or RFID access, safety sensors, and backup.',
          from: '₹35,000',
          highlight: true,
        },
        {
          title: 'Commercial / heavy-duty',
          scope: 'High-use or large gates',
          details: 'Heavy-duty motor, RFID/access integration, intercom and CCTV tie-in.',
          from: '₹75,000',
          highlight: false,
        },
      ],
      disclaimer:
        'Indicative starting prices, installed. Final quote after a site survey — gate weight and length, motor type, access method, and wiring runs all affect the total.',
    },
    amc: {
      eyebrow: 'AMC & MAINTENANCE',
      headline: 'A gate motor is mechanical. Keep it serviced.',
      body: 'An automatic gate cycles thousands of times a year — motors wear, sensors drift, batteries age, and remotes lose sync. Our AMC keeps it all in order so the gate doesn’t fail on the day you’re rushing out. It can be combined with your other ITSolute AMC under one contract.',
      points: [
        'Scheduled motor and mechanism servicing',
        'Safety-sensor alignment and testing',
        'Battery-backup health checks and replacement',
        'Remote and access (keypad/RFID) sync',
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
        q: 'Can I open the gate from my phone or with an RFID tag?',
        a: 'Yes. Beyond handheld remotes, we can set up keypad codes, RFID tags/cards, and — depending on the system — phone-based control, plus intercom so you can see and speak to visitors before opening. We configure the access method that fits how you actually use the entrance.',
      },
      {
        q: 'Do you offer AMC for automatic gates?',
        a: 'Yes. Because a gate is mechanical and cycles constantly, regular servicing matters — motor, sensors, battery, and remotes all need periodic checks. Our AMC covers this and can be combined with your other ITSolute AMC under one contract.',
      },
    ],
  },

  'boom-barriers': {
    slug: 'boom-barriers',
    metaTitle: 'Boom Barrier Installation in Kottayam & Kerala | RFID & FASTag | ITSolute',
    metaDescription:
      'Boom barrier installation across Kerala — for car parks, apartments, offices, and commercial entrances. RFID/FASTag access, loop detectors, CCTV integration, battery backup. Free survey, AMC.',
    serviceName: 'Boom Barrier Installation',
    serviceType: 'Boom Barrier Installation',
    priceLow: '32000',
    priceHigh: '250000',
    whatsappMessage: 'Hi ITSolute, I want to install a boom barrier.',
    hero: {
      eyebrow: 'BOOM BARRIERS · KOTTAYAM & KERALA',
      headline: 'Control vehicle access without a guard at the gate.',
      sub: 'Boom barrier installation for car parks, apartments, offices, and commercial entrances across Kerala — with RFID/FASTag access, loop detectors, CCTV integration, and battery backup.',
    },
    install: {
      eyebrow: 'WHAT WE INSTALL',
      headline: 'The full boom-barrier setup, fitted and integrated.',
      items: [
        { icon: RectangleHorizontal, title: 'Boom barrier units', body: 'Straight, folding, and curved arms sized to your entrance width and traffic.' },
        { icon: ScanLine, title: 'RFID & FASTag access', body: 'Tags, cards, or FASTag so registered vehicles pass without stopping.' },
        { icon: Car, title: 'Loop detectors', body: 'In-ground sensors that detect vehicles for safe auto-close and free exit.' },
        { icon: RadioTower, title: 'Remote & push-button', body: 'Handheld remotes and guard-booth push-button control.' },
        { icon: ShieldCheck, title: 'Safety & anti-crash', body: 'Sensors so the arm never drops on a vehicle or person.' },
        { icon: Cctv, title: 'Access control & CCTV', body: 'Integrate with number-plate cameras, access records, and your CCTV.' },
        { icon: BatteryCharging, title: 'Battery backup', body: 'Keeps the barrier operating through power cuts.' },
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
        { title: 'Access done right', body: 'RFID, FASTag, and loop detectors set up so the right vehicles pass quickly and the barrier closes safely.' },
        { title: 'Integrated with your systems', body: 'Ties into CCTV, number-plate cameras, and access records — because we install those too.' },
        { title: 'High-duty, genuine units', body: 'Barriers rated for your traffic volume, from trusted brands through trusted suppliers, with warranty.' },
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
        { index: '02', title: 'Recommend & quote', body: 'The right barrier, arm, and access method (RFID/FASTag/loop), with a fixed written quote.' },
        { index: '03', title: 'Install & wire', body: 'Barrier, loops, sensors, and access hardware fitted and wired properly.' },
        { index: '04', title: 'Configure & test', body: 'Access tags, loop detection, safety, and backup set up and tested, with a walkthrough.' },
        { index: '05', title: 'Support & AMC', body: 'Optional AMC to keep a high-cycle barrier reliable year-round.' },
      ],
    },
    tiers: {
      eyebrow: 'INDICATIVE PRICING',
      headline: 'Typical boom-barrier setups.',
      items: [
        {
          title: 'Standard barrier',
          scope: 'Remote / push-button',
          details: 'Boom barrier with arm sized to your entrance, remote and push-button control, and safety sensors.',
          from: '₹32,000',
          highlight: false,
        },
        {
          title: 'RFID / access-integrated',
          scope: 'Automatic vehicle access',
          details: 'Barrier with RFID/FASTag access, loop detectors, and battery backup.',
          from: '₹55,000',
          highlight: true,
        },
        {
          title: 'High-traffic / integrated',
          scope: 'High-duty + CCTV/access',
          details: 'High-duty barrier, number-plate/CCTV integration, and access-record tie-in.',
          from: '₹85,000',
          highlight: false,
        },
      ],
      disclaimer:
        'Indicative starting prices, installed. Final quote after a site survey — entrance width, traffic volume, access method, and integration all affect the total.',
    },
    amc: {
      eyebrow: 'AMC & MAINTENANCE',
      headline: 'A barrier cycles all day. Servicing keeps it up.',
      body: 'A boom barrier at a busy entrance can cycle hundreds of times a day — the motor, arm balance, loop detectors, and access hardware all need regular attention. Our AMC keeps it serviced so the barrier isn’t stuck up or down when traffic is queuing. It can be combined with your other ITSolute AMC under one contract.',
      points: [
        'Scheduled motor and arm-balance servicing',
        'Loop-detector and safety-sensor testing',
        'RFID/FASTag access and reader checks',
        'Battery-backup health checks and replacement',
        'Priority response when the barrier fails',
      ],
    },
    faqs: [
      {
        q: 'Can the barrier open automatically for registered vehicles?',
        a: 'Yes — that’s the most common setup. With RFID tags, cards, or FASTag, registered vehicles are read as they approach and the barrier opens without anyone stopping or a guard pressing a button. Visitors can be handled by remote, push-button, or an intercom at the entry.',
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

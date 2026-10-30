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
  Video,
  Wifi,
  Smartphone,
  Users,
  Fingerprint,
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
  VIDEO_DOOR_PHONE_PRICES,
  SMART_LOCK_PRICES,
} from '@/lib/content/entrancePricing'
import type { PageVideo } from '@/components/shared/VideoEmbed'

/**
 * Entrance Automation — physical access automation: automatic gates, boom
 * barriers, video door phones and smart door locks. Deliberately separate
 * from /automation (business-process automation). Hub at /entrance-automation,
 * product children driven by `entranceProducts` via
 * /entrance-automation/[slug].
 *
 * Gates and barriers publish a starting price from entrancePricing.ts. Door
 * phones and locks do not: their price slots there are intentionally empty,
 * so those pages render the "quoted after a free site survey" note and emit
 * no Offer schema until the slots are filled.
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
      {
        title: 'Video Door Phones',
        href: '/entrance-automation/video-door-phones',
        tagline: 'See who is there before you open.',
        blurb: 'An outdoor camera unit at the entrance and a monitor inside, wired or over Wi-Fi. Answering on your phone and visitor recording are available on selected models, and multi-apartment systems suit flats.',
      },
      {
        title: 'Smart Door Locks',
        href: '/entrance-automation/smart-door-locks',
        tagline: 'Fingerprint, PIN, card or app.',
        blurb: 'Keyless entry fitted to the door you already have, with a mechanical key as backup. Unlock methods vary by model, and temporary codes for guests or domestic help are available on selected models.',
      },
    ],
  },

  /** Ties the four products together — the reason to buy more than one. */
  complete: {
    eyebrow: 'THE COMPLETE ENTRANCE',
    headline: 'Four products, or one entrance that works as a whole.',
    body: 'Most people start with one thing — a gate that is tiring to push, or a key too many people have. The parts are worth more together than separately: the door phone shows you who is outside, the gate or lock lets them in without you walking out, and the cameras keep the record. Because we install all of it, the integration is planned at the survey instead of discovered afterwards.',
    points: [
      {
        title: 'Gate + video door phone',
        body: 'Answer the call from inside and open the gate in the same action, on compatible setups — no walking out to see who rang.',
      },
      {
        title: 'Door phone + smart lock',
        body: 'Release the front door for someone you have just seen and spoken to, instead of leaving a key with a neighbour.',
      },
      {
        title: 'Everything + CCTV',
        body: 'The door phone covers the moment someone calls. Cameras cover the rest of the day, so the entrance is not watched twice and the gaps are not missed.',
      },
      {
        title: 'One team, one cable plan',
        body: 'Gate, door phone, lock and cameras all need power and cable to the same few places. Planned once, it is one set of conduit instead of four visits.',
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
  /**
   * Set only while the hero photo does not exist yet: the hero then renders
   * through PlaceholderImage, which falls back to a styled block instead of a
   * broken image. Delete the field once the photo is in place.
   */
  heroIntent?: string
  /**
   * `?service=` value for this product's contact CTAs, when it has its own
   * option in the contact form. Falls back to the section default.
   */
  contactService?: string
}

export const entranceProducts: Record<string, EntranceProduct> = {
  'automatic-gates': {
    slug: 'automatic-gates',
    metaTitle: `Automatic Gates in Kerala from ${GATE_FROM} | Sliding & Swing`,
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
    // "| ITSolute" dropped: it pushed this to 61 characters, and the brand is
    // the least useful thing in a title that already has the keyword and price.
    metaTitle: `Boom Barriers in Kerala from ${BARRIER_FROM} | Installation`,
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

  'video-door-phones': {
    slug: 'video-door-phones',
    contactService: 'video-door-phones',
    metaTitle: 'Video Door Phone Installation in Kerala | ITSolute',
    metaDescription:
      'See and speak to whoever is at your door before you open it. Wired and Wi-Fi systems for homes, flats and clinics. Free site survey across Kerala.',
    serviceName: 'Video Door Phone Installation',
    serviceType: 'Video Door Phone Installation',
    priceLow: '',
    priceHigh: '',
    whatsappMessage: 'Hi ITSolute, I want to install a video door phone.',
    heroIntent:
      'Indoor video door phone monitor mounted in a Kerala home hallway, showing a visitor at the outdoor unit',
    hero: {
      eyebrow: 'VIDEO DOOR PHONES \u00b7 KERALA',
      headline: 'Video Door Phone Installation in Kerala',
      sub: 'See and talk to whoever is at your door before you open it. An outdoor camera unit at the gate or entrance, a monitor inside, and on selected models the same call on your phone \u2014 installed across Kottayam, Ernakulam, Pathanamthitta and Alappuzha.',
    },
    install: {
      eyebrow: 'WHAT WE INSTALL',
      headline: 'An outdoor unit, a screen inside, and a way to answer.',
      items: [
        {
          icon: Video,
          title: 'Outdoor unit and indoor monitor',
          body: 'A camera, microphone and call button at the entrance, wired to a screen inside the house. Press, look, talk, decide \u2014 the whole point is that you never open the door to find out who it is.',
        },
        {
          icon: Wifi,
          title: 'Wired or Wi-Fi',
          body: 'Wired systems run a cable from the gate to the monitor and are the steadier choice for a new build or a rewire. Wi-Fi and IP systems avoid that cable run, which matters in a finished house. We advise which suits your site at the survey.',
        },
        {
          icon: Smartphone,
          title: 'Answer on your phone \u2014 on selected models',
          body: 'On selected models the call also reaches a mobile app, so the door can be answered from the next room or another city. Visitor snapshots and recording are available on selected models too.',
        },
        {
          icon: Users,
          title: 'Multi-apartment systems',
          body: 'For flats, one outdoor panel at the main entrance calls the right apartment, with a monitor in each. Sized at the survey around the number of flats and the cable routes the building already has.',
        },
      ],
    },
    who: {
      eyebrow: 'WHO IT\u2019S FOR',
      headline: 'Anywhere someone has to decide whether to open the door.',
      items: [
        'Homes and villas where the gate is far enough from the house that walking out to check is a nuisance',
        'Apartments and flats needing one entrance panel and a monitor per flat',
        'Offices where reception is not always staffed',
        'Clinics managing who comes through outside consulting hours',
      ],
    },
    why: {
      eyebrow: 'WHY ITSOLUTE',
      headline: 'The door phone is one part of the entrance, not a box on its own.',
      points: [
        {
          title: 'It can open the gate',
          body: 'On compatible setups the indoor unit or app can trigger your automatic gate or release a smart lock \u2014 so the same press that answers the visitor also lets them in. We confirm what will talk to what before quoting.',
        },
        {
          title: 'It sits beside your CCTV',
          body: 'A door phone shows you the moment someone calls. CCTV shows you everything else. We install both, so the two cover the entrance between them instead of overlapping.',
        },
        {
          title: 'Cabling done once',
          body: 'We also do structured cabling and networking, so the run from the gate to the monitor is planned with the rest of the house rather than surface-clipped afterwards.',
        },
        {
          title: 'Honest about models',
          body: 'App answering, recording and snapshots depend on the model. We tell you which features your chosen unit actually has before you buy it, not after.',
        },
      ],
    },
    process: {
      eyebrow: 'HOW IT GOES',
      headline: 'Survey first, because the cable route decides the system.',
      steps: [
        {
          index: '01',
          title: 'Free site survey',
          body: 'We look at the gate, the door, the distance between them and what cabling exists. That decides wired or Wi-Fi more than any preference does.',
        },
        {
          index: '02',
          title: 'Written quote',
          body: 'A fixed written quote listing the exact units, how many monitors, and which features that model supports. Nothing is ordered before you approve it.',
        },
        {
          index: '03',
          title: 'Installation',
          body: 'Outdoor unit mounted at a sensible height and angle, cable run, monitor fitted inside, and any gate or lock integration wired and tested.',
        },
        {
          index: '04',
          title: 'Handover',
          body: 'We walk you through answering, the app if your model has one, and what to do if the screen goes blank. Warranty paperwork handed over with it.',
        },
      ],
    },
    pricing: {
      eyebrow: 'PRICING',
      headline: 'Quoted after the survey.',
      rows: VIDEO_DOOR_PHONE_PRICES,
      disclaimer:
        'Video door phones vary too much by model \u2014 wired or Wi-Fi, one monitor or several, recording or not \u2014 for a single starting figure to mean anything useful. We quote in writing after the free site survey.',
    },
    amc: {
      eyebrow: 'AFTER INSTALLATION',
      headline: 'Keeping it working past the first year.',
      body: 'A door phone is used every day and lives half outdoors, so the outdoor unit takes weather and the indoor unit takes wear. An AMC keeps both checked rather than waiting for the screen to go dark on a day you need it.',
      points: [
        'Outdoor unit cleaned, sealed and checked for water ingress',
        'Camera angle and night visibility re-checked',
        'Monitor, call button and door release tested end to end',
        'App and network settings re-checked on models that use them',
        'Can be combined with your other ITSolute AMC under one contract',
      ],
    },
    faqs: [
      {
        q: 'Wired or Wi-Fi \u2014 which should I choose?',
        a: 'Wired is the steadier of the two, because the picture and the call do not depend on your Wi-Fi reaching the gate. It suits a new build or a rewire, when the cable can be run without disturbing finished walls. Wi-Fi and IP systems avoid that cable run entirely, which is usually the deciding factor in a house that is already finished. We look at the distance from gate to monitor and your existing Wi-Fi coverage at the survey, and tell you which one your site actually supports.',
      },
      {
        q: 'Can I answer the door from my phone?',
        a: 'On selected models, yes \u2014 the call reaches a mobile app as well as the indoor monitor, so you can see and speak to a visitor from another room or another country. It is not standard on every unit, so it is one of the first things we confirm when you tell us what you want. If answering remotely matters to you, say so at the survey and we will specify a model that does it.',
      },
      {
        q: 'Does a video door phone work in a power cut?',
        a: 'It depends on the setup. The units run on mains power, so on their own they stop when the power does. Where staying up through a cut matters, we wire the system to your home inverter connection during installation, the same way we do for AC gate motors \u2014 tell us at the survey and we will plan for it. Some models also hold a short internal backup, but that varies by model and is not something to rely on.',
      },
      {
        q: 'Can the door phone open my automatic gate?',
        a: 'On compatible setups, yes. The indoor unit, or the app on models that have one, can trigger the gate motor or release a smart lock, so answering the visitor and letting them in are the same action. It depends on both the door phone and the gate controller supporting it, which is why we check the combination before quoting rather than promising it in advance.',
      },
      {
        q: 'We have a flat with many apartments. Does that work?',
        a: 'Yes. One outdoor panel at the main entrance calls the specific flat, and each flat gets its own monitor. The sizing depends on how many flats there are and what cable routes the building already has, so for apartments the survey matters more than usual \u2014 retrofitting a riser in a finished building is a different job from wiring one under construction. We cover apartments across Kottayam, Ernakulam, Pathanamthitta and Alappuzha.',
      },
      {
        q: 'Do you offer AMC for video door phones?',
        a: 'Yes. The outdoor unit sits in the weather and the indoor unit gets used several times a day, so both benefit from being checked on a schedule rather than when something fails. An AMC covers cleaning and sealing the outdoor unit, re-checking the camera angle and night visibility, and testing the call and door release end to end. It can be combined with your other ITSolute AMC under one contract.',
      },
    ],
    guides: [
      'apartment-gate-automation-kerala',
      'rfid-vs-remote-gate-access',
      'automatic-gate-power-cut-battery-backup',
    ],
  },

  'smart-door-locks': {
    slug: 'smart-door-locks',
    contactService: 'smart-door-locks',
    metaTitle: 'Smart Door Lock Installation in Kerala | ITSolute',
    metaDescription:
      'Fingerprint, PIN, card or app \u2014 unlock options vary by model, with a mechanical key backup. Fitted to existing doors. Free site survey across Kerala.',
    serviceName: 'Smart Door Lock Installation',
    serviceType: 'Smart Door Lock Installation',
    priceLow: '',
    priceHigh: '',
    whatsappMessage: 'Hi ITSolute, I want to install a smart door lock.',
    heroIntent:
      'Smart door lock with a fingerprint reader and keypad fitted to a wooden front door in a Kerala home',
    hero: {
      eyebrow: 'SMART DOOR LOCKS \u00b7 KERALA',
      headline: 'Smart Door Lock Installation in Kerala \u2014 Fingerprint, PIN & App',
      sub: 'Stop carrying a key you can lose. Fingerprint, PIN, card or phone depending on the model, with a mechanical key as backup \u2014 fitted to the door you already have, across Kottayam, Ernakulam, Pathanamthitta and Alappuzha.',
    },
    install: {
      eyebrow: 'WHAT WE INSTALL',
      headline: 'Several ways in, and always a way in when the battery dies.',
      items: [
        {
          icon: Fingerprint,
          title: 'Fingerprint and PIN',
          body: 'The two most-used methods on most locks: a registered fingerprint, or a code on the keypad. Which methods your lock has depends on the model, so we confirm the combination before you buy.',
        },
        {
          icon: ScanLine,
          title: 'Card and app \u2014 on selected models',
          body: 'RFID cards or tags suit a household where not everyone wants to register a fingerprint. App unlocking over Bluetooth or Wi-Fi is available on selected models.',
        },
        {
          icon: KeyRound,
          title: 'Mechanical key backup',
          body: 'A physical key override is the point of the whole design. Keep it somewhere other than inside the door it opens, and a flat battery is an inconvenience rather than a locksmith call.',
        },
        {
          icon: BatteryCharging,
          title: 'Battery powered, with warnings',
          body: 'These locks run on batteries and warn you well before they run out, usually by beeping or flashing at every unlock for days. Replacing them is a two-minute job we show you at handover.',
        },
      ],
    },
    who: {
      eyebrow: 'WHO IT\u2019S FOR',
      headline: 'Doors that too many people need to open.',
      items: [
        'Homes where keys get copied, lost, or left with a neighbour',
        'Families where children arrive home before the adults do',
        'Houses that domestic help, a driver or a caretaker needs access to',
        'Small offices and clinics where staff change and keys never come back',
      ],
    },
    why: {
      eyebrow: 'WHY ITSOLUTE',
      headline: 'Fitting it to your actual door is most of the job.',
      points: [
        {
          title: 'The door is checked first',
          body: 'Door material, thickness, and the existing lock cutout decide which locks will physically fit. We measure at the survey rather than discovering a problem with the door half drilled.',
        },
        {
          title: 'Access you can take back',
          body: 'On selected models you can issue a temporary code for a guest or for domestic help and remove it afterwards. No copied key stays in circulation.',
        },
        {
          title: 'It joins the entrance',
          body: 'The lock can work alongside your video door phone and automatic gate on compatible setups, so answering the door and releasing it are one action.',
        },
        {
          title: 'No overselling',
          body: 'App control, temporary codes and Wi-Fi are model-dependent. We tell you what the lock in your quote does before you commit to it.',
        },
      ],
    },
    process: {
      eyebrow: 'HOW IT GOES',
      headline: 'Measure the door, then choose the lock.',
      steps: [
        {
          index: '01',
          title: 'Free site survey',
          body: 'We check the door material, its thickness, the frame and the existing cutout, and ask who needs to get in and how.',
        },
        {
          index: '02',
          title: 'Written quote',
          body: 'A fixed written quote naming the model and listing exactly which unlock methods it supports. Nothing ordered before you approve it.',
        },
        {
          index: '03',
          title: 'Fitting',
          body: 'Lock fitted to the door, alignment checked so it closes cleanly, fingerprints and codes registered, and any gate or door phone integration tested.',
        },
        {
          index: '04',
          title: 'Handover',
          body: 'We show you how to add and remove users, change the battery, and use the mechanical key \u2014 then hand over the warranty paperwork and the spare keys.',
        },
      ],
    },
    pricing: {
      eyebrow: 'PRICING',
      headline: 'Quoted after the survey.',
      rows: SMART_LOCK_PRICES,
      disclaimer:
        'Smart locks range from a simple fingerprint-and-PIN unit to a full app-connected lock, and the door itself affects what will fit. A single starting figure would mislead, so we quote in writing after the free site survey.',
    },
    amc: {
      eyebrow: 'AFTER INSTALLATION',
      headline: 'A lock that is used a hundred times a week.',
      body: 'Smart locks fail in slow, predictable ways \u2014 alignment drifts as a door swells, a fingerprint reader gets dirty, batteries go flat at the worst moment. An AMC catches those before they lock someone out.',
      points: [
        'Alignment and strike plate re-checked as doors move with humidity',
        'Fingerprint reader and keypad cleaned and tested',
        'Battery condition checked and users re-verified',
        'Stale users and old temporary codes cleared out',
        'Can be combined with your other ITSolute AMC under one contract',
      ],
    },
    faqs: [
      {
        q: 'What happens if the battery dies?',
        a: 'You get plenty of warning first. These locks start signalling a low battery days before it matters, usually by beeping or flashing each time the door is opened, so running one flat takes sustained ignoring. If it does happen, the mechanical key override opens the door \u2014 which is exactly why we tell you to keep that key somewhere other than inside the house. Some models also take an emergency power source at the keypad to get you in long enough to change the batteries, but that varies by model.',
      },
      {
        q: 'Will a smart lock fit my door?',
        a: 'Usually, but the door decides. We check the material, the thickness, the frame and the existing lock cutout at the survey, because those determine which models can physically be fitted. Wooden and metal doors are both common and both workable. Where a door is unusually thin, unusually thick, or already cut for an awkward lock, we tell you before quoting rather than after starting \u2014 it is the single most common reason a particular model is ruled out.',
      },
      {
        q: 'Is a smart lock actually safe?',
        a: 'The lock still throws a physical bolt into the frame \u2014 that part is no different from a conventional lock, and it is what actually resists force. What changes is how you authorise it. Fingerprints and codes cannot be copied the way a key can, and a code can be changed in seconds if you think someone knows it. We fit the lock so it aligns and closes properly, because a smart lock on a door that does not shut cleanly is weaker than a simple one on a door that does.',
      },
      {
        q: 'Can I give someone temporary access?',
        a: 'On selected models, yes. You can issue a code for a guest, domestic help or a delivery and remove it afterwards, and on app-connected models set one that expires on its own. This is usually the reason people move away from keys in the first place: a key you lend is a key you have to trust someone to return, while a code you issue is one you can withdraw. Tell us at the survey if this matters and we will specify a model that supports it.',
      },
      {
        q: 'Do I need an app, or Wi-Fi?',
        a: 'No. Fingerprint and keypad models work entirely on their own with no phone, no app and no internet, and for many households that is the right choice \u2014 fewer things to go wrong. An app adds remote unlocking, access logs and codes you can issue from elsewhere, and needs Bluetooth or Wi-Fi depending on the model. It is worth having only if you will use it, so we ask what you actually want before recommending one.',
      },
      {
        q: 'How long does installation take?',
        a: 'Fitting the lock itself is usually a single visit once the model is agreed. Most of the work is alignment \u2014 making sure the bolt meets the frame cleanly so the lock is not straining every time the door closes. We then register fingerprints and codes for everyone in the household, test any gate or door phone integration, and show you how to add and remove users yourself before we leave.',
      },
    ],
    guides: [
      'rfid-vs-remote-gate-access',
      'apartment-gate-automation-kerala',
      'automatic-gate-power-cut-battery-backup',
    ],
  },
}

export function getEntranceProduct(slug: string): EntranceProduct | null {
  return entranceProducts[slug] ?? null
}

export function getAllEntranceSlugs(): string[] {
  return Object.keys(entranceProducts)
}

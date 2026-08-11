import {
  Cctv,
  Camera,
  HardDrive,
  MonitorSmartphone,
  Moon,
  Network as NetworkIcon,
  KeyRound,
  BellRing,
  type LucideIcon,
} from 'lucide-react'

export const cctvCopy = {
  hero: {
    eyebrow: 'CCTV & SURVEILLANCE · KOTTAYAM · KERALA',
    headline: 'CCTV that actually records when you need the footage.',
    sub: 'Half the cameras people rely on turn out to be offline the day something happens. We install CCTV that works — for homes, shops, and businesses — with the right cameras, reliable recording, and mobile viewing you can trust, across Kottayam and Kerala.',
    primaryCta: 'Request a site survey',
    secondaryCta: 'Talk on WhatsApp',
    whatsappMessage: 'Hi ITSolute, I need CCTV for my premises.',
  },
  install: {
    eyebrow: 'WHAT WE INSTALL',
    headline: 'The right cameras for what you actually need to see.',
    items: [
      {
        icon: Cctv,
        title: 'IP cameras',
        body: 'High-resolution network cameras — 4MP and up, sharp enough to read a face or a number plate.',
      },
      {
        icon: Camera,
        title: 'HD analog cameras',
        body: 'Cost-effective 2MP–5MP HD cameras for shops and small offices on a budget.',
      },
      {
        icon: HardDrive,
        title: 'NVR & DVR recording',
        body: 'Reliable recorders sized for the retention you need — days or weeks of footage.',
      },
      {
        icon: MonitorSmartphone,
        title: 'Mobile & remote viewing',
        body: 'Watch live and recorded footage from your phone or laptop, wherever you are.',
      },
      {
        icon: Moon,
        title: 'Night-vision cameras',
        body: 'Clear footage after dark — colour night vision and infrared for low-light areas.',
      },
      {
        icon: NetworkIcon,
        title: 'PoE camera networks',
        body: 'Cameras powered over the network cable on a dedicated, isolated VLAN.',
      },
      {
        icon: KeyRound,
        title: 'Access control & door entry',
        body: 'Biometric and card door access, tied into your camera system where you want it.',
      },
      {
        icon: BellRing,
        title: 'Alarm & alert integration',
        body: 'Motion alerts and intrusion notifications straight to your phone.',
      },
    ] as { icon: LucideIcon; title: string; body: string }[],
  },
  who: {
    eyebrow: 'WHO WE INSTALL FOR',
    headline: 'If footage matters when something goes wrong, this is for you.',
    items: [
      'Homes and villas — gates, entrances, compounds, parking',
      'Shops and restaurants — counters, entrances, stockrooms, kitchens',
      'Clinics and hospitals — reception, pharmacy, corridors, parking',
      'Schools and colleges — gates, corridors, labs, hostels',
      'Offices — entrances, cabins, server rooms, common areas',
      'Warehouses and logistics — loading bays, yards, perimeter',
      'Apartments and residential associations — gates, lifts, parking, common areas',
    ],
  },
  why: {
    eyebrow: 'WHY ITSOLUTE FOR CCTV',
    headline: 'Cameras are easy to sell. Recording that works is the hard part.',
    points: [
      {
        title: 'Installed by an IT team',
        body: 'CCTV runs on a network. We put cameras on their own isolated setup so they record reliably without slowing your home or office network.',
      },
      {
        title: 'Genuine cameras, warranty preserved',
        body: 'Hikvision, CP Plus, Dahua and similar — from trusted suppliers, with manufacturer warranty on every unit.',
      },
      {
        title: 'Remote viewing set up properly',
        body: 'Mobile and laptop viewing configured, tested, and explained — not left half-working after the installer leaves.',
      },
      {
        title: 'Site survey before we quote',
        body: 'We walk the premises, map blind spots and camera positions, and quote a fixed price in writing. No guesses over the phone.',
      },
      {
        title: 'Combined with networking, 30–40% cheaper',
        body: 'Getting CCTV and your office network installed by one team in one visit costs far less than hiring two separate vendors.',
      },
      {
        title: 'AMC so it keeps working',
        body: 'We check cameras, recording, and storage under AMC — so the footage is there the day you actually need it.',
      },
    ],
  },
  process: {
    eyebrow: 'HOW IT WORKS',
    headline: 'Five steps from blind spots to full coverage.',
    steps: [
      {
        index: '01',
        title: 'Site survey',
        body: 'We walk the premises, identify blind spots, and map camera positions — free, no obligation.',
      },
      {
        index: '02',
        title: 'Plan & quote',
        body: 'Camera layout, recorder and storage sizing, fixed written quote. Approved before we start.',
      },
      {
        index: '03',
        title: 'Install & cabling',
        body: 'Neat cabling and mounting, done after-hours where possible to avoid disrupting your business.',
      },
      {
        index: '04',
        title: 'Configure & test',
        body: 'Recording, retention, and mobile viewing set up and tested — plus a walkthrough for your team.',
      },
      {
        index: '05',
        title: 'Ongoing support',
        body: 'Optional AMC to keep cameras, recording, and storage healthy and footage available.',
      },
    ],
  },
  tiers: {
    eyebrow: 'TYPICAL SETUPS',
    headline: 'Three CCTV setups we install all the time.',
    items: [
      {
        title: 'Home / small premises',
        scope: '4 cameras, 1 recorder',
        details: 'HD cameras covering the gate, entrance, and key areas, with mobile viewing.',
        from: '₹14,000',
        highlight: false,
      },
      {
        title: 'Business / office',
        scope: '8 cameras, network recorder',
        details: 'IP cameras, PoE switch, isolated VLAN, and remote viewing across the premises.',
        from: '₹32,000',
        highlight: true,
      },
      {
        title: 'Large facility',
        scope: '16+ cameras, IP system',
        details: 'Multi-recorder IP system with extended storage for schools, warehouses, campuses.',
        from: '₹90,000',
        highlight: false,
      },
    ],
    disclaimer:
      'Indicative starting prices, installed. Final quote after a site survey — camera count, resolution, cabling runs, and storage retention all affect the total.',
  },
  finalCta: {
    headline: 'Know what happened — every time. Let’s cover your blind spots.',
    sub: 'Free site survey, no obligation. Fixed written quote before you commit. Cameras, recording, and mobile viewing set up and tested properly.',
    primary: 'Request a site survey',
    secondary: 'WhatsApp us',
  },
} as const

export const cctvFAQs = [
  {
    q: 'How many CCTV cameras do I need?',
    a: 'It depends on your layout and the blind spots that matter — a home or small shop is usually well covered by 4 cameras (gate, entrance, key areas), while an office or warehouse needs 8–16+. That’s exactly what the free site survey settles: we walk the premises and map the minimum cameras that leave no important gap.',
  },
  {
    q: 'IP or HD analog cameras — which should I choose?',
    a: 'HD analog cameras are cheaper and perfectly good for general coverage in a shop or small office. IP cameras cost more but give sharper footage — enough to read faces and number plates — and run on your network with features like smart motion alerts. We’ll recommend a mix based on where detail actually matters versus where general coverage is enough.',
  },
  {
    q: 'Can I watch the cameras on my phone?',
    a: 'Yes. We configure live and recorded viewing on your phone and laptop, test it before we leave, and show you how to use it. Remote viewing set up properly — not left half-working — is one of the main things we get right that cheaper installers skip.',
  },
  {
    q: 'How many days of footage will be stored?',
    a: 'That’s down to the recorder, hard-drive size, number of cameras, and resolution. Most businesses want 15–30 days of retention; we size the storage to hit the retention you need, and we can go higher for premises that require it. We spec this as part of the quote.',
  },
  {
    q: 'Do the cameras work at night?',
    a: 'Yes. We use infrared and colour-night-vision cameras rated for the light levels at each position, so entrances, yards, and parking areas stay clear after dark. Night performance is part of what the site survey checks.',
  },
  {
    q: 'Can you add cameras to my existing CCTV system?',
    a: 'Often, yes — if your current recorder and cabling can take it. We’ll check whether your existing system can be extended or whether it’s reached its limit, and tell you honestly which is more cost-effective before you spend anything.',
  },
  {
    q: 'Do you offer CCTV AMC / maintenance?',
    a: 'Yes. Cameras and recorders fail quietly — you only find out when you need footage that was never recorded. Our AMC checks camera health, recording, and storage on a schedule, so the footage is actually there when it matters. It can be combined with your IT AMC under one contract.',
  },
  {
    q: 'Do you install CCTV outside Kottayam?',
    a: 'Yes. We’re based in Kottayam and install across central Kerala — Ernakulam, Pathanamthitta, Alappuzha — and further for larger projects. For large-scale, dedicated surveillance deployments we also work alongside our sister brand CCTVPROS.',
  },
]

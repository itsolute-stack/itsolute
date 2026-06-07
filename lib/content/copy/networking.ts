import {
  Wifi,
  Cable,
  ShieldCheck,
  Radio,
  Network as NetworkIcon,
  Repeat,
  Lock,
  Camera,
  type LucideIcon,
} from 'lucide-react'

export const networkingCopy = {
  hero: {
    eyebrow: 'OFFICE WIFI · LAN · POINT-TO-POINT · KERALA',
    headline:
      "WiFi that works in every corner. Networks that don’t quietly fail.",
    sub: 'From a 4-desk clinic to a 50-machine school computer lab — we design, install, and support office networks across Kerala. Structured cabling, business WiFi, firewalls, point-to-point links between branches.',
    primaryCta: 'Request a site survey',
    secondaryCta: 'Talk on WhatsApp',
    whatsappMessage:
      'Hi ITSolute, I need help with my office network / WiFi.',
  },
  install: {
    eyebrow: 'WHAT WE INSTALL',
    headline: 'A network designed for how your business actually works.',
    items: [
      {
        icon: Wifi,
        title: 'Office WiFi setup',
        body: 'Multiple access points, no dead zones, guest network isolation.',
      },
      {
        icon: Cable,
        title: 'Structured LAN cabling',
        body: 'Cat6/Cat6a, patch panels, proper labelling, neat ducting.',
      },
      {
        icon: ShieldCheck,
        title: 'Business routers & firewalls',
        body: 'TP-Link, MikroTik, Ubiquiti, Cisco — picked for your actual load.',
      },
      {
        icon: Radio,
        title: 'Point-to-point links',
        body: 'Connect two buildings or branches wirelessly, line-of-sight.',
      },
      {
        icon: NetworkIcon,
        title: 'Network switches',
        body: 'Managed and unmanaged, PoE for cameras and IP phones.',
      },
      {
        icon: Repeat,
        title: 'Internet load balancing',
        body: 'Two ISPs, automatic failover. You don’t go offline when one ISP drops.',
      },
      {
        icon: Lock,
        title: 'VPN setup',
        body: 'Secure remote access for staff — work from home, work from anywhere.',
      },
      {
        icon: Camera,
        title: 'CCTV network integration',
        body: 'Combined network + camera install with our sister brand CCTVPROS.',
      },
    ] as { icon: LucideIcon; title: string; body: string }[],
  },
  who: {
    eyebrow: 'WHO NEEDS THIS',
    headline: 'If your WiFi has dead zones, you need this conversation.',
    items: [
      'Schools and colleges — computer labs, staff offices, hostels',
      'Clinics and hospitals — PACS imaging, billing, reception, secure patient data',
      'Offices moving into a new space — get cabling right the first time',
      'Multi-branch businesses needing inter-branch connectivity',
      'Retail chains running POS and inventory across stores',
      'Anyone whose WiFi drops or is “slow in the back room”',
    ],
  },
  why: {
    eyebrow: 'WHY ITSOLUTE FOR NETWORKING',
    headline: 'No guesswork. Diagrammed plans. Documented handover.',
    points: [
      {
        title: 'Site survey before quoting',
        body: 'We visit, measure signal coverage, count points, identify problem areas. No quotes from a phone call.',
      },
      {
        title: 'Network plan delivered before installation',
        body: 'Diagram, equipment list, fixed quote in writing. You approve the plan before a cable is run.',
      },
      {
        title: 'Genuine equipment, warranty preserved',
        body: 'TP-Link, MikroTik, Ubiquiti, Cisco — authorised channels, manufacturer warranty on every box.',
      },
      {
        title: 'Documentation on handover',
        body: 'Labelled patch panels, switch port assignments, AP location maps. The next IT person can pick up cleanly.',
      },
      {
        title: 'Save 30–40% on combined CCTV + networking',
        body: 'Networking + CCTV installed together (via our sister brand CCTVPROS) is significantly cheaper than two vendors.',
      },
      {
        title: 'Optional AMC after install',
        body: 'We monitor, maintain, and respond — so the network we built keeps working without you thinking about it.',
      },
    ],
  },
  process: {
    eyebrow: 'HOW IT WORKS',
    headline: 'Five steps from “WiFi is broken” to “handled.”',
    steps: [
      {
        index: '01',
        title: 'Site survey',
        body: 'We visit, measure signal coverage, count points, identify problem areas — free for businesses.',
      },
      {
        index: '02',
        title: 'Network plan',
        body: 'Diagram + equipment list + fixed quote. Reviewed and approved before anything is installed.',
      },
      {
        index: '03',
        title: 'Cabling & install',
        body: 'Done after-hours where possible to avoid disrupting business operations.',
      },
      {
        index: '04',
        title: 'Testing & handover',
        body: 'Speed tests at every access point, documentation pack, and a 30-minute training for your team.',
      },
      {
        index: '05',
        title: 'Ongoing support',
        body: 'Optional AMC for monitoring, maintenance, and fixes. We stay with what we built.',
      },
    ],
  },
  tiers: {
    eyebrow: 'TYPICAL SCOPE EXAMPLES',
    headline: 'Three project sizes we see all the time.',
    items: [
      {
        title: 'Small office',
        scope: '4–10 desks, 1 floor',
        details: '1 access point, 6–10 LAN points, basic business router.',
        from: '₹15,000',
        highlight: false,
      },
      {
        title: 'Mid-size office',
        scope: '10–30 desks, 2 floors',
        details: '2–3 access points, structured cabling, managed switch, firewall.',
        from: '₹45,000',
        highlight: true,
      },
      {
        title: 'Large facility',
        scope: 'School, multi-floor office, hospital',
        details:
          'Multi-AP mesh, multiple switches, server room cabling, failover internet.',
        from: '₹1,20,000',
        highlight: false,
      },
    ],
    disclaimer:
      'Final quote after site survey. Prices exclude internet line charges and any premium-spec equipment requested.',
  },
  finalCta: {
    headline: "Bad WiFi is a business problem. We’ll fix it.",
    sub: 'Free site survey for businesses. Diagrammed plan and fixed quote before you commit. Done after-hours so your team is never down.',
    primary: 'Request a site survey',
    secondary: 'WhatsApp us',
  },
} as const

export const networkingFAQs = [
  {
    q: 'Do you provide the internet connection too?',
    a: 'No — we don’t resell internet from ISPs. But we manage the relationship with your ISP for you, install routers and firewalls, set up load balancing across two connections if you want failover, and handle the escalation when your ISP is the problem.',
  },
  {
    q: "What's the difference between home WiFi and office WiFi?",
    a: 'Home routers are built for one family, light usage, one room of coverage. Office WiFi uses multiple coordinated access points, separates guest from internal traffic, handles 20–200 devices simultaneously, and gives you visibility into who’s using bandwidth. A “fast home router” doesn’t scale to an office — even a small one.',
  },
  {
    q: 'Can you fix the WiFi we already have, or does it need replacing?',
    a: 'Often both options are on the table. We start with a free site survey, identify whether the issue is hardware placement, capacity, interference, or misconfiguration. Sometimes adding one more access point fixes everything. Sometimes the whole setup needs replacing. We tell you honestly which one.',
  },
  {
    q: 'Do you do point-to-point links between two buildings?',
    a: 'Yes. We install line-of-sight wireless bridges that can carry full LAN speed between two locations up to several kilometres apart — much cheaper than running fibre, much faster than VPN over public internet. Common for branches, multi-building campuses, and warehouse-plus-office setups.',
  },
  {
    q: 'Can you connect our CCTV cameras to the same network?',
    a: 'Yes — and it’s the right way to do it. We integrate IP cameras through our sister brand CCTVPROS using PoE switches, network video recorders, and proper VLAN isolation so CCTV traffic doesn’t slow down your business network. Combined installs are 30–40% cheaper than hiring two separate vendors.',
  },
  {
    q: 'Do you offer AMC for ongoing network maintenance?',
    a: 'Yes. AMC clients get proactive monitoring of routers, switches, and access points, remote response to issues, and quarterly site visits to keep the network healthy. We’re the team you call when the WiFi drops — not the team you find scrambling.',
  },
]

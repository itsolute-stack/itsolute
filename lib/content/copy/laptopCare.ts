import {
  Monitor,
  Keyboard,
  BatteryCharging,
  Gauge,
  Thermometer,
  Droplets,
  HardDrive,
  ShieldAlert,
  RefreshCw,
  Plug,
  type LucideIcon,
} from 'lucide-react'

export const laptopCareCopy = {
  hero: {
    eyebrow: 'LAPTOP CARE · KOTTAYAM & ACROSS KERALA',
    headline: "Laptop trouble? We’ve seen it. Fixed it. Cleaned up after it.",
    sub: 'Screen replacements, keyboard repair, battery swaps, SSD upgrades, data recovery, virus cleanup, OS reinstalls — for businesses and individuals across Kerala. Walk in, pickup, or onsite.',
    primaryCta: 'Request a quote on WhatsApp',
    secondaryCta: 'Drop off at our Kottayam workshop',
    whatsappMessage:
      'Hi ITSolute, my laptop has an issue — [describe the problem].',
  },
  whatWeFix: {
    eyebrow: 'WHAT WE FIX',
    headline: 'The full list of laptop problems we handle every week.',
    items: [
      { icon: Monitor, title: 'Cracked or dead screens', body: 'OEM-grade replacements for all common business laptop models.' },
      { icon: Keyboard, title: 'Broken keyboards & keys', body: 'Individual key, full keyboard, or trackpad replacements.' },
      { icon: BatteryCharging, title: 'Dying batteries', body: 'Diagnose, source, and swap — typically same-day for popular models.' },
      { icon: Gauge, title: 'Slow performance', body: 'RAM and SSD upgrades that bring older laptops back to life.' },
      { icon: Thermometer, title: 'Overheating & fan issues', body: 'Thermal paste, fan replacement, cleaning and dust removal.' },
      { icon: Droplets, title: 'Liquid damage recovery', body: 'Cleaning, drying, board-level inspection — best chances at fast intervention.' },
      { icon: HardDrive, title: 'Data recovery', body: 'Recover data from dead drives, dropped laptops, formatted disks.' },
      { icon: ShieldAlert, title: 'Virus & malware cleanup', body: 'Ransomware, adware, browser hijacks — full cleanup and lockdown.' },
      { icon: RefreshCw, title: 'OS reinstall & migration', body: 'Windows/macOS reinstalls. Move from old laptop to new without losing data.' },
      { icon: Plug, title: 'Charging port & board repair', body: 'Charging port replacements, motherboard component-level repair.' },
    ] as { icon: LucideIcon; title: string; body: string }[],
  },
  why: {
    eyebrow: 'WHY ITSOLUTE FOR REPAIR',
    headline: 'Repairs done by technicians, not guesswork.',
    points: [
      {
        title: 'Genuine parts only',
        body: 'Sourced through authorised channels. We tell you when a part is OEM vs. compatible.',
      },
      {
        title: 'Service warranty on every repair',
        body: 'Typically 3–6 months on the part and the work. In writing, with the bill.',
      },
      {
        title: 'Free diagnosis for businesses',
        body: 'Bring in any laptop your team uses — we diagnose at no cost, no commitment.',
      },
      {
        title: 'Pickup and drop across Kerala',
        body: 'Kottayam · Kochi · Pathanamthitta · Alappuzha. Most pickups same-day.',
      },
      {
        title: 'Data privacy taken seriously',
        body: 'Signed handover, no third-party data exposure, drives sealed when out of our hands.',
      },
      {
        title: 'Onsite repair for AMC clients',
        body: 'If you’re on an AMC, we come to you. No drop-off, no downtime queue.',
      },
    ],
  },
  brands: {
    eyebrow: 'BRANDS WE SERVICE',
    headline: 'Every business laptop brand sold in India.',
    list: [
      'HP',
      'Dell',
      'Lenovo',
      'Asus',
      'Acer',
      'MSI',
      'Apple (MacBook)',
      'Microsoft Surface',
      'Samsung',
      'LG',
    ],
  },
  process: {
    eyebrow: 'HOW IT WORKS',
    headline: 'Five steps from broken to back in your hands.',
    steps: [
      {
        index: '01',
        title: 'Diagnose',
        body: 'Free for businesses. ₹250 for walk-ins (waived if you proceed with the repair).',
      },
      {
        index: '02',
        title: 'Quote',
        body: 'Fixed price quoted upfront, in writing. No surprise bills.',
      },
      {
        index: '03',
        title: 'Repair',
        body: 'Most repairs completed in 24–72 hours. Faster on urgent business hardware.',
      },
      {
        index: '04',
        title: 'Quality check',
        body: 'Multi-point test before handover. We don’t hand back something we wouldn’t trust ourselves.',
      },
      {
        index: '05',
        title: 'Handover + warranty',
        body: 'Signed receipt, warranty card, and a copy of the diagnostic. Call us if anything recurs.',
      },
    ],
  },
  pricing: {
    eyebrow: 'INDICATIVE PRICING',
    headline: 'Starting prices for common repairs.',
    sub: 'Prices vary by model. Final quote always after diagnosis.',
    items: [
      { service: 'Screen replacement (13–15")', from: '₹2,800' },
      { service: 'Keyboard replacement', from: '₹1,500' },
      { service: 'Battery replacement', from: '₹2,200' },
      { service: 'RAM upgrade (8 GB)', from: '₹2,500' },
      { service: 'SSD upgrade (256 GB)', from: '₹3,200' },
      { service: 'Virus removal & OS optimisation', from: '₹800' },
      { service: 'Data recovery', from: '₹1,500' },
    ],
    disclaimer:
      'These are starting prices. Final quote depends on the model, the part availability, and what we find at diagnosis.',
  },
  finalCta: {
    headline: "Bring it in. We’ll see what we can do.",
    sub: 'Walk into our Parthas Lane workshop in Kottayam. WhatsApp us a photo of the problem. Or book a pickup anywhere in central Kerala.',
    primary: 'WhatsApp a photo',
    secondary: 'Get directions',
  },
} as const

export const laptopCareFAQs = [
  {
    q: 'How long does a typical laptop repair take?',
    a: 'Most repairs are completed within 24–72 hours of approval. Screen replacements and battery swaps are usually same-day if the part is in stock. Complex board-level repair or data recovery can take longer — we tell you exactly how long at the quote stage.',
  },
  {
    q: 'Do you repair MacBooks?',
    a: 'Yes — we handle MacBook screen, keyboard, battery, SSD and logic-board repairs. We use OEM-grade parts where possible and source through authorised channels. For component-level work we’re honest about what’s economical to fix vs. replace.',
  },
  {
    q: 'What if my data is on a dead hard drive?',
    a: 'Bring it in. We do logical and basic physical-level data recovery, with a typical success rate above 80% on drives that haven’t been opened by anyone else. We do not charge for recovery attempts that fail. For clean-room class recoveries we partner with specialised labs and quote you transparently.',
  },
  {
    q: 'Do you offer warranty on repairs?',
    a: 'Every repair carries a written 3–6 month warranty on the part and the work, depending on the component. The warranty card comes with your bill, and we honour it on walk-in or pickup, no questions asked.',
  },
  {
    q: 'Do you do onsite repair for offices?',
    a: 'Yes — for AMC clients we come to your office for most repairs. For non-AMC business clients we offer onsite service across Kottayam, Kochi, and central Kerala for an additional visit charge that we tell you upfront.',
  },
  {
    q: 'Can you upgrade my old laptop instead of replacing it?',
    a: 'Often, yes — an SSD swap and a RAM upgrade can extend a 5-year-old laptop’s usable life by 2–3 years. We’ll tell you honestly whether upgrading makes sense or whether the money is better spent on a new machine.',
  },
  {
    q: 'Where is your workshop?',
    a: 'Parthas Lane, Kottayam – 686001. Walk-ins welcome Monday to Saturday, 9 AM to 7 PM. We also offer pickup and drop service across Kottayam, Kochi, Pathanamthitta and Alappuzha.',
  },
]

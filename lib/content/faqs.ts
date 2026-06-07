export type FAQ = { q: string; a: string }

/**
 * Home FAQ order — leads with hardware / repair / licensing questions
 * (where cold visitors land), then moves into AMC questions further down.
 */
export const homeFAQs: FAQ[] = [
  {
    q: 'Do you supply only new laptops, or refurbished too?',
    a: 'Both. New laptops come with full manufacturer warranty and GST invoicing. Refurbished laptops are tested, reset, and shipped with a 6-month ITSolute warranty — great for stretching budgets without compromising on reliability. We tell you honestly which option fits your use case.',
  },
  {
    q: 'What kind of laptop repair do you handle?',
    a: 'Everything common in a business environment — screen replacements, keyboard and battery swaps, SSD/RAM upgrades, data recovery, virus and malware cleanup, OS reinstalls, charging port and motherboard work. We service HP, Dell, Lenovo, Asus, Acer, MSI, Apple, Microsoft Surface, Samsung and LG. Most repairs are ready in 24–72 hours.',
  },
  {
    q: 'Are you an authorised Microsoft, Zoho, or Google Workspace partner?',
    a: 'Yes — we work as authorised resellers and implementation partners for Microsoft 365, Google Workspace, and Zoho One. That means you get proper licensing, vendor-backed support escalation, and configuration guidance — not just a key emailed to you.',
  },
  {
    q: 'Do you serve all of Kerala, or only specific districts?',
    a: 'We serve businesses across Kerala — primary onsite coverage is in Kottayam, Kochi, Ernakulam, Pathanamthitta, Alappuzha, and Thiruvananthapuram. Remote support reaches anywhere in the state. Walk-ins are welcome at our Parthas Lane workshop in Kottayam.',
  },
  {
    q: 'Can I get a one-time setup without committing to an AMC?',
    a: 'Yes. We do fixed-price project work — office setups, network installations, software migrations, repairs — without requiring an AMC. Many clients start with a one-off project and move to AMC once they see how we work.',
  },
  {
    q: 'Do you install office WiFi and structured cabling?',
    a: 'Yes. We design, install, and support office networks across Kerala — from small clinics to multi-floor offices and schools. Site survey is free for businesses. We supply and install structured Cat6 cabling, business-grade access points, switches, firewalls, and point-to-point links between branches.',
  },
  {
    q: 'How quickly do you respond when something breaks?',
    a: 'For AMC clients, most issues get a response within 2 hours during business hours, and a resolution path the same business day. For one-off and walk-in customers, response time depends on workload but we’re fast on WhatsApp — message us and we’ll triage immediately.',
  },
  {
    q: 'What does an AMC contract typically cover?',
    a: 'A standard AMC covers your hardware (laptops, desktops, printers, networking gear), the software running on them (operating systems, Microsoft 365 or Google Workspace, business apps), your office network and WiFi, and backups. You also get a guaranteed response time for support requests. Exact scope is written into the contract — no verbal promises.',
  },
  {
    q: 'Can you migrate us from our current IT vendor?',
    a: 'Absolutely. We handle vendor transitions all the time. We audit the existing setup, document what we find, talk to the outgoing vendor where useful, and take over cleanly — without losing data, accounts, or licenses. Most transitions complete in 2–4 weeks.',
  },
  {
    q: 'Where is your office located?',
    a: 'Parthas Lane, Kottayam – 686001. Walk-ins welcome Mon–Sat, 9 AM – 7 PM. Pickup and drop service available across Kottayam, Kochi, Pathanamthitta, and Alappuzha.',
  },
]

export const amcFAQs: FAQ[] = [
  {
    q: 'What’s the minimum contract length?',
    a: 'Standard AMC contracts run for 12 months, with the option to extend or upgrade tiers. Quarterly contracts are available for seasonal businesses or pilot engagements — ask us.',
  },
  {
    q: 'How many onsite visits are included?',
    a: 'It depends on the tier. Smaller AMCs include scheduled monthly visits; larger ones include weekly visits or onsite presence on demand. Emergency onsite visits beyond the included count are billed at a pre-agreed rate, never as a surprise.',
  },
  {
    q: 'What happens if a covered laptop needs hardware replacement?',
    a: 'AMC covers diagnosis, vendor coordination, and reinstallation — but parts and replacement units are billed at cost, with no markup. We tell you whether to repair or replace based on the actual economics, not what makes us more money.',
  },
  {
    q: 'Can you cover devices we already own from other vendors?',
    a: 'Yes. We audit existing hardware and software during onboarding, document what’s in scope, and flag anything that’s end-of-life or risky. You don’t have to throw out what’s already working.',
  },
  {
    q: 'Do you cover internet and ISP issues?',
    a: 'We don’t resell internet, but we manage the relationship — meaning when the internet is down, we talk to your ISP on your behalf, not you. Faster, less frustrating, and we know the right questions to ask.',
  },
  {
    q: 'Can we change the AMC tier mid-contract?',
    a: 'Yes. If you outgrow your tier (more locations, more staff, more systems), we upgrade without restarting the contract. We’d rather you on the right tier than locked into the wrong one.',
  },
]

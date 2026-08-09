import type { FAQ } from '@/lib/content/faqs'

/**
 * Per-industry landing page content, keyed by the slug defined in
 * lib/content/industries.ts. The homepage industries grid already links to
 * /industries/{slug}, so every slug here needs an entry.
 *
 * Each entry is deliberately specific to the industry — real pain points, the
 * ITSolute services that solve them (linked), any supporting blog post, and an
 * industry FAQ. `relatedPosts` slugs must exist in content/blog/.
 */

export type IndustryHelp = { title: string; href: string; body: string }
export type IndustryPain = { title: string; body: string }
export type IndustryRelatedPost = { slug: string; title: string }

export type IndustryContent = {
  slug: string
  metaTitle: string
  metaDescription: string
  hero: { eyebrow: string; headline: string; sub: string }
  intro: string
  pains: IndustryPain[]
  help: IndustryHelp[]
  relatedPosts: IndustryRelatedPost[]
  faqs: FAQ[]
  serviceName: string
  whatsappMessage: string
}

export const industryContent: Record<string, IndustryContent> = {
  clinics: {
    slug: 'clinics',
    metaTitle: 'IT Support for Clinics & Hospitals in Kerala | ITSolute',
    metaDescription:
      'IT for Kerala clinics — billing PCs, EMR setup, secure WiFi for patient data, backups, and AMC for uptime. On-site support from Kottayam across Kerala.',
    hero: {
      eyebrow: 'INDUSTRIES · CLINICS & HEALTHCARE',
      headline: 'IT for clinics that can’t afford downtime.',
      sub: 'Reception grinds to a halt when billing goes down, EMR freezes, or the WiFi drops mid-consultation. We set up clinic IT that stays up — and protects patient data by default.',
    },
    intro:
      'A clinic runs on its systems from the first patient to the last. Billing, records, appointments, pharmacy — all of it depends on hardware that works and a network that doesn’t quietly fail. We build and support clinic IT for practices across Kerala, with patient-data privacy designed in, not bolted on.',
    pains: [
      {
        title: 'Downtime during OPD hours',
        body: 'When billing or EMR freezes with a full waiting room, every minute costs you. We build in backups, uptime monitoring, and same-day response so a glitch doesn’t become a lost morning.',
      },
      {
        title: 'Patient data on the same WiFi as everyone',
        body: 'Guest phones should never touch the systems holding patient records. We separate patient-data systems onto their own VLAN so billing and records stay isolated and secure.',
      },
      {
        title: 'No real backup until it’s too late',
        body: 'Most clinics discover their backup gap the day a drive fails. We set up automated, encrypted daily backups so records survive hardware failure, theft, or ransomware.',
      },
    ],
    help: [
      { title: 'Billing & reception hardware', href: '/hardware', body: 'Reliable PCs and printers sized for continuous front-desk use, with GST invoicing.' },
      { title: 'EMR & Microsoft 365 setup', href: '/software', body: 'EMR configuration, secure email, and cloud storage set up for a medical practice.' },
      { title: 'Secure clinic WiFi & network', href: '/networking', body: 'Separate VLANs for patient data and guest WiFi, with coverage in every consulting room.' },
      { title: 'AMC for uptime', href: '/amc', body: 'One retainer covering hardware, software, network, and backups — with priority response.' },
      { title: 'Laptop & PC repair on call', href: '/laptop-care', body: 'Fast repair and standby options so a dead machine never stalls the front desk.' },
    ],
    relatedPosts: [
      { slug: 'clinic-it-setup-checklist', title: 'IT setup for a new clinic in Kerala: the only checklist you need' },
    ],
    faqs: [
      {
        q: 'How do you protect patient data in a clinic?',
        a: 'Three things by default: a separate VLAN so patient-data systems are isolated from guest WiFi, automated daily backup to encrypted cloud storage, and a signed handover with any vendor (us included) that touches the system. We set all three up as standard for clinic clients.',
      },
      {
        q: 'How much does clinic IT setup cost in Kerala?',
        a: 'For a typical outpatient clinic with 5–7 PCs, network, and basic software, expect roughly ₹2.5–4.5 lakhs upfront plus ₹3,000–12,000/month for AMC. Multi-doctor and imaging-heavy clinics scale from there. We quote fixed prices before starting.',
      },
      {
        q: 'Do you provide same-day support if our billing system goes down?',
        a: 'Yes. Uptime matters most for clinics, so AMC clients get priority, same-day attention for critical failures — and we build in backups and standby hardware so a single failure doesn’t stop the day.',
      },
      {
        q: 'Can you work with our existing EMR software?',
        a: 'In most cases, yes. We work around the EMR you’ve chosen — handling the hardware, network, backups, and security it runs on. If you’re starting fresh, we’ll help you pick one that fits your practice.',
      },
    ],
    serviceName: 'IT Services for Clinics & Healthcare',
    whatsappMessage: 'Hi ITSolute, I need IT support for my clinic.',
  },

  'professional-services': {
    slug: 'professional-services',
    metaTitle: 'IT Setup for CA & Law Firms in Kerala | Tally, DSC, Backups | ITSolute',
    metaDescription:
      'IT for Kerala CA and law offices — Tally setup, DSC token management, secure client-document storage, backups, and repair on call. On-site support from Kottayam.',
    hero: {
      eyebrow: 'INDUSTRIES · CA & LAW FIRMS',
      headline: 'IT for CA and law offices, built around deadlines.',
      sub: 'Tally can’t crash during GST filing. Client documents can’t leak. Backups can’t be an afterthought. We set up professional-office IT that holds up when the deadline is tomorrow.',
    },
    intro:
      'CA and law practices run on trust and timing — client confidentiality on one side, unforgiving filing deadlines on the other. We set up and support IT for professional offices across Kerala: Tally and document systems that stay up, client data that stays private, and backups that actually run.',
    pains: [
      {
        title: 'Tally down during filing season',
        body: 'The day Tally corrupts or the machine dies mid-filing, you need it back now — not next week. We spec the right hardware, set up automated Tally backups, and keep you on priority support.',
      },
      {
        title: 'Client documents that must not leak',
        body: 'Tax returns, contracts, case files — a single mishandled document is a real problem. We set up encrypted storage with role-based access and secure transfer, so sensitive files stay controlled.',
      },
      {
        title: 'DSC tokens and portal chaos',
        body: 'Multiple DSC tokens, GST and MCA portals, and everyone needing them at once. We organise token workflows and set up the machines so filing runs smoothly, not frantically.',
      },
    ],
    help: [
      { title: 'Tally-ready workstations', href: '/hardware', body: 'PCs specced for Tally Prime plus browsers, GST portals, and PDF tools running together.' },
      { title: 'Tally, M365 & document systems', href: '/software', body: 'Tally licensing, Microsoft 365, and secure document management set up properly.' },
      { title: 'Secure storage & backup', href: '/networking', body: 'Encrypted, role-based client-document storage with automated off-site backup.' },
      { title: 'Automation for repetitive work', href: '/automation', body: 'Document workflows, reminders, and reporting that cut the manual admin load.' },
      { title: 'AMC & repair on call', href: '/amc', body: 'Priority support through filing season, plus fast repair when a machine fails.' },
    ],
    relatedPosts: [
      { slug: 'ca-office-computer-setup', title: 'CA office computer setup: the only guide you need (2026)' },
      { slug: 'tally-backup-setup-guide', title: 'Tally backup setup: a complete guide for Indian businesses' },
    ],
    faqs: [
      {
        q: 'What computer specs are best for a CA office running Tally?',
        a: 'i5 processor, 16 GB RAM, 512 GB SSD, Windows 11 Pro. Tally itself is light, but it runs alongside browsers, GST portals, Excel, and PDF tools — the 16 GB RAM is what keeps daily work smooth. We supply and set these up with GST invoicing.',
      },
      {
        q: 'Can you set up automated Tally backups?',
        a: 'Yes. Tally Prime’s backup is manual by default; we configure scheduled, automated backups following the 3-2-1 rule — local, off-site, and encrypted cloud — so a corruption or drive failure never means rebuilding from invoices.',
      },
      {
        q: 'How do you keep client documents secure?',
        a: 'Encrypted cloud storage with role-based access so staff only see what they should, secure file-sharing links instead of emailed attachments, and a signed handover with us covering anything we touch. Confidentiality is designed in.',
      },
      {
        q: 'Do small CA or law practices really need an AMC?',
        a: 'For practices over 3–4 staff, strongly yes. Filing deadlines aren’t forgiving — the day something breaks during GST season you’ll want IT support on speed dial. A ₹3,000–5,000/month AMC is cheap next to one missed deadline.',
      },
    ],
    serviceName: 'IT Services for CA & Law Firms',
    whatsappMessage: 'Hi ITSolute, I need IT support for my CA/law office.',
  },

  schools: {
    slug: 'schools',
    metaTitle: 'IT Support for Schools & Colleges in Kerala | Labs, WiFi, AMC | ITSolute',
    metaDescription:
      'IT for Kerala schools and colleges — computer labs, staff workstations, Google Workspace for Education, campus WiFi with content filtering, and AMC. Bulk pricing.',
    hero: {
      eyebrow: 'INDUSTRIES · SCHOOLS & COLLEGES',
      headline: 'IT for schools, from the lab to the staff room.',
      sub: 'Computer labs that actually work in every period, staff systems that hold up, and campus WiFi that’s safe for students. We equip and support schools and colleges across Kerala.',
    },
    intro:
      'A school’s IT has to serve two very different worlds — labs full of students and offices full of staff — on a fixed budget. We supply, set up, and maintain the hardware, software, and networks that keep both running, with bulk pricing and AMC support built for education.',
    pains: [
      {
        title: 'Labs that fail mid-period',
        body: 'A lab that’s half-broken wastes a whole class. We standardise lab machines, keep spares configured, and cover them under AMC so every period has working systems.',
      },
      {
        title: 'Student WiFi that isn’t safe',
        body: 'Open campus WiFi is a liability. We set up filtered, segmented networks that keep students on safe content and keep student devices off staff and admin systems.',
      },
      {
        title: 'Tight budgets, big rollouts',
        body: 'Kitting out a lab or refreshing staff systems is a large spend. We offer bulk pricing, a mix of new and quality refurbished hardware, and GST invoicing to stretch the budget honestly.',
      },
    ],
    help: [
      { title: 'Lab & staff hardware in bulk', href: '/hardware', body: 'New and refurbished laptops and desktops at bulk pricing, delivered and set up.' },
      { title: 'Google Workspace for Education', href: '/software', body: 'Email, classroom, and cloud tools set up for staff and students.' },
      { title: 'Campus WiFi with filtering', href: '/networking', body: 'Segmented, content-filtered networks with coverage across blocks and floors.' },
      { title: 'AMC for every term', href: '/amc', body: 'One contract keeping labs, staff systems, and network running all year.' },
      { title: 'Fast repair for lab machines', href: '/laptop-care', body: 'Quick turnaround so a broken lab PC is back before the next class needs it.' },
    ],
    relatedPosts: [],
    faqs: [
      {
        q: 'Do you offer bulk pricing for school computer labs?',
        a: 'Yes. Labs and staff rollouts get bulk pricing, and we’ll advise honestly on where new versus quality refurbished hardware makes sense to stretch the budget. Every order comes with GST invoicing and on-site setup.',
      },
      {
        q: 'Can you set up safe, filtered WiFi for students?',
        a: 'Yes. We build segmented campus networks with content filtering, keeping students on appropriate content and keeping student devices off the staff and administration systems entirely.',
      },
      {
        q: 'Do you cover schools outside Kottayam?',
        a: 'We serve schools and colleges across central Kerala and beyond — Kottayam, Ernakulam, Pathanamthitta, Alappuzha, and further for larger projects. Ask us about your location.',
      },
      {
        q: 'Can you maintain our existing lab, not just supply new machines?',
        a: 'Absolutely. Many schools bring us in to take over an existing lab and staff setup under AMC — standardising the machines, fixing the network, and keeping everything running term after term.',
      },
    ],
    serviceName: 'IT Services for Schools & Colleges',
    whatsappMessage: 'Hi ITSolute, I need IT support for our school/college.',
  },

  'real-estate': {
    slug: 'real-estate',
    metaTitle: 'IT for Real Estate Offices in Kerala | CRM, Leads, Branches | ITSolute',
    metaDescription:
      'IT for Kerala real estate firms — branch hardware, CRM rollout, WhatsApp lead capture and automation, multi-branch networks, and AMC. On-site support from Kottayam.',
    hero: {
      eyebrow: 'INDUSTRIES · REAL ESTATE',
      headline: 'IT for real estate that turns leads into deals.',
      sub: 'Leads scattered across phones and notebooks are lost leads. We set up the hardware, CRM, and WhatsApp automation that capture every enquiry and keep every branch on the same page.',
    },
    intro:
      'Real estate runs on leads and follow-up, often across multiple branches and agents on the move. We set up and support the systems that hold it together — branch hardware, a CRM that fits how you sell, and automation that captures leads the moment they arrive.',
    pains: [
      {
        title: 'Leads lost between agents',
        body: 'An enquiry that lands in one agent’s phone and nowhere else is a lost sale. We roll out a CRM and WhatsApp lead capture so every lead is logged, assigned, and followed up.',
      },
      {
        title: 'Branches that don’t share information',
        body: 'Separate branches on separate systems mean no single view of listings or pipeline. We connect branches with shared systems and reporting so the whole business is visible at once.',
      },
      {
        title: 'Manual follow-up that doesn’t scale',
        body: 'Chasing every enquiry by hand caps how much you can grow. We build WhatsApp flows and automation that confirm, remind, and route leads without adding headcount.',
      },
    ],
    help: [
      { title: 'Branch hardware & setup', href: '/hardware', body: 'Laptops, desktops, and printers for every branch, supplied and configured.' },
      { title: 'CRM rollout', href: '/software', body: 'A CRM set up to match your sales process — not the other way around.' },
      { title: 'WhatsApp lead flows & automation', href: '/automation', body: 'Capture, confirm, and route leads automatically from web, ads, and WhatsApp.' },
      { title: 'Multi-branch networks', href: '/networking', body: 'Reliable connectivity and secure links between your branch offices.' },
      { title: 'AMC across every branch', href: '/amc', body: 'One partner keeping hardware, software, and networks running at all locations.' },
    ],
    relatedPosts: [],
    faqs: [
      {
        q: 'Can you set up WhatsApp lead capture for our agents?',
        a: 'Yes — capturing and routing leads from WhatsApp, web forms, and ads into one CRM pipeline is one of the most common things we build for real estate firms. Every enquiry gets logged and assigned instead of sitting in one phone.',
      },
      {
        q: 'Which CRM do you recommend for a real estate office?',
        a: 'It depends on how you sell and how many branches you run. We implement Zoho CRM and others, set up to fit your process. We’ll recommend based on your team size, pipeline, and budget rather than pushing one product.',
      },
      {
        q: 'Can you connect multiple branch offices?',
        a: 'Yes. We set up secure connectivity and shared systems across branches so listings, leads, and reporting are visible in one place — with AMC covering every location.',
      },
      {
        q: 'Do you support offices across Kerala?',
        a: 'We’re based in Kottayam and support real estate offices across central Kerala and beyond, with on-site setup and remote support. Multi-branch firms in Kochi and Thiruvananthapuram included.',
      },
    ],
    serviceName: 'IT Services for Real Estate',
    whatsappMessage: 'Hi ITSolute, I need IT support for my real estate office.',
  },

  retail: {
    slug: 'retail',
    metaTitle: 'IT for Retail Shops & Restaurants in Kerala | POS, Billing, CCTV | ITSolute',
    metaDescription:
      'IT for Kerala retail and restaurants — POS and billing systems, CCTV, reliable networks, multi-branch reporting, and AMC. On-site support from Kottayam across Kerala.',
    hero: {
      eyebrow: 'INDUSTRIES · RETAIL & RESTAURANTS',
      headline: 'IT for shops and restaurants that can’t stop at peak hour.',
      sub: 'A frozen billing counter at the dinner rush or Saturday peak costs you customers on the spot. We set up POS, billing, CCTV, and networks built to stay up when it matters most.',
    },
    intro:
      'Retail and restaurants live and die by the counter. Billing has to be fast, the network can’t drop, cameras have to record, and the owner needs to see every branch. We set up and support the systems that keep shops and restaurants running through the busiest hours.',
    pains: [
      {
        title: 'The counter goes down at peak hour',
        body: 'A billing failure during the rush is lost sales and frustrated customers. We build POS and billing on reliable hardware with backups, so the counter keeps moving.',
      },
      {
        title: 'CCTV that isn’t really recording',
        body: 'Half the cameras that matter turn out to be offline when you need the footage. We set up and integrate CCTV that actually records — on its own network, not interfering with billing.',
      },
      {
        title: 'No clear view across branches',
        body: 'Running several outlets blind to real numbers makes every decision a guess. We set up multi-branch reporting so sales, stock, and performance are visible in one place.',
      },
    ],
    help: [
      { title: 'POS & billing hardware', href: '/hardware', body: 'Counter PCs, printers, and peripherals built for continuous, fast billing.' },
      { title: 'Billing & inventory software', href: '/software', body: 'Billing, inventory, and accounting software licensed and set up to fit your shop.' },
      { title: 'Reliable in-store networks', href: '/networking', body: 'Stable networks and WiFi built for continuous billing and card payments.' },
      { title: 'CCTV & surveillance', href: '/cctv', body: 'Cameras over the counter, floor, and stockroom — recording reliably on their own network.' },
      { title: 'Multi-branch reporting', href: '/automation', body: 'Automated sales and stock reporting across every outlet, pushed to you daily.' },
      { title: 'AMC for always-on counters', href: '/amc', body: 'Priority support so a peak-hour failure is handled fast, not tomorrow.' },
    ],
    relatedPosts: [],
    faqs: [
      {
        q: 'Do you set up POS and billing systems?',
        a: 'Yes — counter hardware, billing and inventory software, receipt printers, and the network they run on, all set up together and covered under AMC. We build for speed and uptime at peak hours.',
      },
      {
        q: 'Can you handle CCTV for our shop or restaurant?',
        a: 'Yes. We set up and integrate CCTV on its own dedicated network so it records reliably without interfering with billing or WiFi. For dedicated large-scale surveillance projects we also work alongside our sister brand CCTVPROS.',
      },
      {
        q: 'Can I see sales across all my branches in one place?',
        a: 'Yes. We set up multi-branch reporting that pulls sales and stock from every outlet into a single view, delivered automatically — so you’re not chasing numbers from each shop.',
      },
      {
        q: 'What happens if the billing counter fails during business hours?',
        a: 'AMC clients get priority, same-day response for counter failures, and we build in backups and standby options so a single failure doesn’t stop trading. Uptime is the whole point for retail.',
      },
    ],
    serviceName: 'IT Services for Retail & Restaurants',
    whatsappMessage: 'Hi ITSolute, I need IT support for my shop/restaurant.',
  },

  logistics: {
    slug: 'logistics',
    metaTitle: 'IT for Logistics & Transport Companies in Kerala | ITSolute',
    metaDescription:
      'IT for Kerala logistics firms — branch laptops, dispatch tools, reliable branch connectivity, integrations, and AMC for always-on operations. On-site support from Kottayam.',
    hero: {
      eyebrow: 'INDUSTRIES · LOGISTICS',
      headline: 'IT for logistics that never sleeps.',
      sub: 'Dispatch doesn’t wait for IT. When a branch loses connectivity or a system goes down, shipments stall. We build logistics IT for always-on operations across Kerala.',
    },
    intro:
      'Logistics runs around the clock and across locations — branches, warehouses, and dispatch all depending on systems that stay connected. We set up and support the hardware, networks, and integrations that keep operations moving, with AMC built for always-on uptime.',
    pains: [
      {
        title: 'A branch loses connectivity and dispatch stalls',
        body: 'When a location drops off the network, work stops there. We build reliable branch connectivity with backups so a single outage doesn’t halt dispatch.',
      },
      {
        title: 'Disconnected tools slowing operations',
        body: 'Dispatch, tracking, and accounting living in separate silos means double entry and delays. We integrate the tools you already use so information flows without manual re-keying.',
      },
      {
        title: 'Downtime that ripples down the chain',
        body: 'A failure at one point delays everything after it. We keep hardware and networks maintained under AMC with priority response, so problems get handled before they cascade.',
      },
    ],
    help: [
      { title: 'Branch & warehouse hardware', href: '/hardware', body: 'Laptops, desktops, and printers for every branch and warehouse, supplied and set up.' },
      { title: 'Dispatch & accounting software', href: '/software', body: 'Licensing and setup for the tools your operations run on.' },
      { title: 'Reliable branch connectivity', href: '/networking', body: 'Stable networks and secure links between branches, warehouses, and head office.' },
      { title: 'Integrations & automation', href: '/automation', body: 'Connect dispatch, tracking, and accounting so data flows without manual work.' },
      { title: 'AMC for always-on operations', href: '/amc', body: 'One retainer keeping every location running, with priority response.' },
    ],
    relatedPosts: [],
    faqs: [
      {
        q: 'Can you connect our branches and warehouses?',
        a: 'Yes. Reliable connectivity between branches, warehouses, and head office — with backups so a single outage doesn’t stall dispatch — is core to what we do for logistics firms. We design and support the whole network.',
      },
      {
        q: 'Can you integrate our dispatch and accounting tools?',
        a: 'In most cases, yes. We connect the systems you already use — dispatch, tracking, accounting — so information flows automatically instead of being re-entered by hand, reducing delays and errors.',
      },
      {
        q: 'Do you provide support outside business hours for operations that run late?',
        a: 'AMC contracts can be scoped to your operating hours, with priority response for critical failures. We build the coverage around how your operation actually runs, not a nine-to-five default.',
      },
      {
        q: 'Do you support multi-location logistics firms across Kerala?',
        a: 'Yes. We’re based in Kottayam and support multi-branch logistics operations across Kerala, combining on-site setup at each location with remote support and one AMC covering them all.',
      },
    ],
    serviceName: 'IT Services for Logistics',
    whatsappMessage: 'Hi ITSolute, I need IT support for my logistics business.',
  },
}

export function getIndustryContent(slug: string): IndustryContent | null {
  return industryContent[slug] ?? null
}

export function getAllIndustrySlugs(): string[] {
  return Object.keys(industryContent)
}

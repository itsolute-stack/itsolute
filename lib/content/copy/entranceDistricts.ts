import type { FAQ } from '@/lib/content/faqs'
import type { PageVideo } from '@/components/shared/VideoEmbed'

/**
 * District landing pages for entrance automation (automatic gates + boom
 * barriers), at /entrance-automation/[district].
 *
 * Shared blocks (products, what's included, process, AMC) live at the top so
 * every district stays consistent on facts and pricing. Everything below that
 * — hero, angle, towns, FAQs — is written per district and must stay genuinely
 * different: these are not one page with the town name swapped.
 */

export const GATES_HREF = '/entrance-automation/automatic-gates'
export const BARRIERS_HREF = '/entrance-automation/boom-barriers'

export type GateTypeRow = {
  label: string
  from: string
  href: string
  blurb: string
}

/** The five products, with "from" prices excluding GST. */
export const entranceGateTypes: GateTypeRow[] = [
  {
    label: 'Sliding gate automation',
    from: '₹40,000',
    href: GATES_HREF,
    blurb: 'Rack-driven motor sized to your gate, for driveways with room alongside to slide.',
  },
  {
    label: 'Roller gate automation',
    from: '₹48,000',
    href: GATES_HREF,
    blurb: 'For rolling shutters and roller gates on shops, garages and compounds.',
  },
  {
    label: 'Swing gate — single-arm',
    from: '₹55,000',
    href: GATES_HREF,
    blurb: 'One arm motor for a single-leaf swing gate with room to swing inward.',
  },
  {
    label: 'Swing gate — two-arm',
    from: '₹75,000',
    href: GATES_HREF,
    blurb: 'Two arm motors for a double-leaf gate, synchronised to open together.',
  },
  {
    label: 'Boom barrier',
    from: '₹59,000',
    href: BARRIERS_HREF,
    blurb: 'Fast arm barrier for parking and vehicle access, with RFID or remote entry.',
  },
]

/** Matches the tax-note convention used on the product pricing tables. */
export const ENTRANCE_PRICE_NOTE =
  'All prices exclude GST. Indicative starting prices, installed — the final quote follows a free site survey, since gate size and weight, motor type, access method, and wiring runs all affect the total.'

export const entranceIncluded = {
  eyebrow: 'WHAT’S INCLUDED',
  headline: 'The parts that decide whether it still works in year three.',
  items: [
    {
      title: 'Safety sensors',
      body: 'Photocells and obstacle detection as standard, so the gate stops rather than closing on a person, pet or vehicle.',
    },
    {
      title: 'Battery backup',
      body: 'Fitted as standard, so the gate keeps working through a power cut — with a manual release as the fallback.',
    },
    {
      title: 'Remote & RFID access',
      body: 'Handheld remotes plus RFID tags or cards, so you control who can open the entrance.',
    },
    {
      title: 'Voice control',
      body: 'A WiFi smart-switch module wired into the motor’s existing remote-control input, giving Alexa and Google Home voice control alongside the app, RFID and remote. Works with most standard gate motors with a remote-control input.',
    },
  ],
}

export const entranceProcess = {
  eyebrow: 'HOW IT WORKS',
  headline: 'Five steps from manual entrance to automatic.',
  steps: [
    {
      index: '01',
      title: 'Site survey',
      body: 'We measure the gate, check weight and travel, and assess power and layout — free, no obligation.',
    },
    {
      index: '02',
      title: 'Recommend & quote',
      body: 'The right motor and access method for your entrance, with a fixed written quote. Approved before we start.',
    },
    {
      index: '03',
      title: 'Install & wire',
      body: 'Motor, sensors, wiring and access hardware fitted neatly, with the electrical side done properly.',
    },
    {
      index: '04',
      title: 'Configure & test',
      body: 'Remotes, RFID, safety sensors and backup set up and tested, with a walkthrough for you.',
    },
    {
      index: '05',
      title: 'Support & AMC',
      body: 'Optional AMC to keep the motor, sensors and battery serviced year-round.',
    },
  ],
}

export const entranceAmcBlock = {
  eyebrow: 'AMC & MAINTENANCE',
  headline: 'Gates are mechanical. Servicing is what keeps them reliable.',
  body: 'An automatic gate or barrier cycles thousands of times a year — motors wear, sensors drift, batteries age and remotes lose sync. Our AMC keeps it all in order so the entrance doesn’t fail on the day you need it, and it can be combined with your other ITSolute AMC under one contract.',
  points: [
    'Scheduled motor and mechanism servicing',
    'Safety-sensor alignment and testing',
    'Battery-backup health checks and replacement',
    'Remote and RFID access sync',
    'Priority response when the entrance fails',
  ],
}

export type EntranceDistrict = {
  slug: string
  district: string
  metaTitle: string
  metaDescription: string
  whatsappMessage: string
  hero: { eyebrow: string; headline: string; sub: string }
  angle: { eyebrow: string; headline: string; paragraphs: string[] }
  towns: string[]
  faqs: FAQ[]
  /**
   * Blog guides to surface on this district page, as post slugs. Picked per
   * district to reinforce that district's own angle — coastal maintenance for
   * Alappuzha, shared-entrance access for Ernakulam — so the block doesn't
   * become one shared list repeated four times.
   */
  guides: string[]
  /** Optional YouTube video. Leave undefined and nothing renders. */
  video?: PageVideo
}

export const entranceDistricts: Record<string, EntranceDistrict> = {
  kottayam: {
    slug: 'kottayam',
    district: 'Kottayam',
    metaTitle: 'Automatic Gate & Boom Barrier Installation in Kottayam | ITSolute',
    metaDescription:
      'Automatic gate and boom barrier installation across Kottayam — sliding, swing and roller gates from ₹40,000, boom barriers from ₹59,000. Free site survey in Ettumanoor, Pala and Changanassery.',
    whatsappMessage: 'Hi ITSolute, I want a gate or boom barrier automated in Kottayam.',
    guides: [
      'automatic-gate-price-kerala',
      'automate-existing-gate-retrofit',
      'automatic-gate-maintenance-amc-kerala',
    ],
    hero: {
      eyebrow: 'ENTRANCE AUTOMATION · KOTTAYAM',
      headline: 'Automatic Gate & Boom Barrier Installation in Kottayam',
      sub: 'Our workshop is on Parthas Lane in Kottayam, so this is the district we reach quickest — for site surveys, installation and service visits alike. Automatic gates for homes and villas, boom barriers for schools, hospitals and office compounds.',
    },
    angle: {
      eyebrow: 'WHY KOTTAYAM IS DIFFERENT FOR US',
      headline: 'This is the one district where we’re already down the road.',
      paragraphs: [
        'Everywhere else in Kerala, a site survey means scheduling travel. In Kottayam it doesn’t — our workshop is on Parthas Lane, so we can usually walk a site, measure the gate and come back with a written quote without the delay that distance adds. The same applies after installation: when a sensor needs realigning or a battery needs swapping, the visit is short.',
        'That proximity matters most for the places that can’t wait. Kottayam has a dense mix of schools, churches, hospitals and office compounds alongside its homes, and those entrances are in use all day. A boom barrier stuck up at a hospital gate or a school gate that won’t close is a problem measured in hours, not days — which is exactly the kind of call we can answer quickly here.',
        'For homes and villas across Ettumanoor, Pala and Changanassery, it means the normal things are simple: a survey when it suits you, a fixed quote before anything is ordered, and a known workshop to call afterwards rather than a number that stops answering.',
      ],
    },
    towns: [
      'Ettumanoor',
      'Pala',
      'Changanassery',
      'Kanjirappally',
      'Vaikom',
      'Kumarakom',
      'Pampady',
      'Erattupetta',
      'Mundakayam',
    ],
    faqs: [
      {
        q: 'How quickly can you do a site survey in Kottayam?',
        a: 'Kottayam is where we’re based, so surveys here are the easiest to schedule — usually within a day or two of you asking, and often sooner for a straightforward residential gate. The survey itself takes about 20–30 minutes: we measure the gate, check its weight and travel, look at where power is available, and then send a fixed written quote. There’s no charge and no obligation.',
      },
      {
        q: 'Do you service gates in Pala, Changanassery and the smaller towns?',
        a: 'Yes. We install and service across the district — Ettumanoor, Pala, Changanassery, Kanjirappally, Vaikom, Kumarakom, Pampady, Erattupetta and Mundakayam included. Being based in Kottayam town keeps those trips short, which matters as much for the service visit three years later as it does for the install.',
      },
      {
        q: 'Can you automate the gate I already have?',
        a: 'Usually, yes. Most existing sliding, swing and roller gates can be motorised without replacing them — that’s the majority of what we do. At the survey we check the gate’s condition, weight and how freely it travels, because a gate that already drags or sags needs that fixed first or the motor will wear early. If the gate itself isn’t worth automating, we’ll tell you honestly rather than fit a motor to it.',
      },
      {
        q: 'Do you install boom barriers for schools and hospitals?',
        a: 'Yes, and they’re a common install in Kottayam given how many institutions are here. For a school or hospital the priorities are different from a home: the barrier has to handle constant daily use, open fast enough not to queue traffic at the gate, and fail safe. We size the barrier to the entrance width and the traffic it actually sees, and set up RFID or remote access for staff and regular vehicles.',
      },
      {
        q: 'How often does an AMC visit happen in Kottayam?',
        a: 'Scheduled servicing is typically a few times a year depending on how heavily the entrance is used — a busy institutional barrier needs checking more often than a home gate. Because we’re local, AMC visits here don’t involve travel scheduling, and priority response when something actually fails is far more practical than it is at distance. The exact visit frequency is written into the contract.',
      },
    ],
  },

  ernakulam: {
    slug: 'ernakulam',
    district: 'Ernakulam',
    metaTitle: 'Automatic Gate & Boom Barrier Installation in Ernakulam | ITSolute',
    metaDescription:
      'Boom barrier and automatic gate installation across Ernakulam — barriers from ₹59,000, gates from ₹40,000. RFID access for residents and staff. Free site survey in Kakkanad, Edappally and Aluva.',
    whatsappMessage: 'Hi ITSolute, I want a boom barrier or gate automated in Ernakulam.',
    guides: [
      'apartment-gate-automation-kerala',
      'rfid-vs-remote-gate-access',
      'boom-barrier-price-kerala',
    ],
    hero: {
      eyebrow: 'ENTRANCE AUTOMATION · ERNAKULAM',
      headline: 'Automatic Gate & Boom Barrier Installation in Ernakulam',
      sub: 'Apartment blocks, office compounds and commercial parking across Ernakulam — boom barriers with RFID tags for residents and staff, sized for entrances that cycle hundreds of times a day, plus sliding gates for warehouses and commercial yards.',
    },
    angle: {
      eyebrow: 'BUILT FOR HIGH-TRAFFIC ENTRANCES',
      headline: 'An entrance used 300 times a day is a different problem.',
      paragraphs: [
        'Most of what we install in Ernakulam isn’t a single home gate — it’s a shared entrance. Apartment blocks in Kakkanad and Edappally, office compounds around Vyttila and Kalamassery, commercial parking that fills and empties twice a day. These entrances don’t open five times a day; they open hundreds of times, which changes what you should buy.',
        'Duty cycle is the thing people under-spec. A barrier rated for light residential use will physically work at an apartment gate and then wear out early, because the motor was never designed for that number of cycles. We size the barrier and motor to the traffic the entrance actually sees, not to the lowest quote — and for a shared entrance that difference usually pays for itself well before the warranty ends.',
        'The access method matters just as much. With a hundred residents or staff, handing out remotes stops working quickly. RFID tags issued per flat or per employee let you add and remove access without recalling hardware, and keep a record of who came through. For apartment associations that also means one person can manage the tag list rather than fielding calls about lost remotes.',
      ],
    },
    towns: [
      'Kakkanad',
      'Edappally',
      'Aluva',
      'Kalamassery',
      'Thrippunithura',
      'Vyttila',
      'Perumbavoor',
      'Muvattupuzha',
      'Angamaly',
    ],
    faqs: [
      {
        q: 'Can you install a boom barrier for an apartment association?',
        a: 'Yes — apartment and gated-community entrances are among the most common barriers we fit in Ernakulam. The practical questions are the entrance width, how many vehicles pass through on a busy evening, whether you want residents to pass without stopping, and how visitors are handled. We survey the gate, size the barrier to that traffic, and give the association a fixed written quote it can take to a committee meeting.',
      },
      {
        q: 'How does RFID work for residents and staff?',
        a: 'Each vehicle gets a tag or card registered to that flat or employee. As a registered vehicle approaches, the reader recognises it and the barrier opens without anyone stopping or a guard pressing a button. Access is managed as a list, so a tag can be deactivated when someone moves out or leaves, without having to collect hardware back. Visitors are handled separately by remote, push-button or an intercom at the gate.',
      },
      {
        q: 'How many cycles a day can a boom barrier handle?',
        a: 'That depends entirely on the duty rating of the unit you install, which is why it’s the first thing we check. A barrier specified for a low-traffic residential driveway and one specified for a busy apartment or office entrance look similar but are built differently inside. We match the unit to your actual peak — typically morning and evening for apartments, and steadier through the day for offices — so it isn’t running at its limit every day.',
      },
      {
        q: 'Do you serve Kakkanad, Aluva and the rest of the district?',
        a: 'Yes. We install across Ernakulam including Kakkanad, Edappally, Aluva, Kalamassery, Thrippunithura, Vyttila, Perumbavoor, Muvattupuzha and Angamaly. Site surveys are free, and for larger commercial or multi-entrance sites we’ll walk the whole layout before quoting rather than pricing one gate in isolation.',
      },
      {
        q: 'Can you automate large sliding gates for warehouses and commercial yards?',
        a: 'Yes. Commercial sliding gates are heavier and longer than residential ones, so the motor has to be sized to the weight and the travel, and the track and rollers need to be in good condition before automating. For yards with vehicle traffic we normally pair the gate with loop detection and safety sensors so it never closes on a moving vehicle. We quote after seeing the gate, since weight is the variable that drives the cost.',
      },
    ],
  },

  pathanamthitta: {
    slug: 'pathanamthitta',
    district: 'Pathanamthitta',
    metaTitle: 'Automatic Gate & Boom Barrier Installation in Pathanamthitta | ITSolute',
    metaDescription:
      'Automatic gate installation across Pathanamthitta — sliding, swing and roller gates from ₹40,000, boom barriers from ₹59,000. App access and battery backup. Free survey in Thiruvalla, Adoor and Ranni.',
    whatsappMessage: 'Hi ITSolute, I want a gate automated in Pathanamthitta.',
    guides: [
      'automatic-gate-nri-homes-kerala',
      'automatic-gate-power-cut-battery-backup',
      'rfid-vs-remote-gate-access',
    ],
    hero: {
      eyebrow: 'ENTRANCE AUTOMATION · PATHANAMTHITTA',
      headline: 'Automatic Gate & Boom Barrier Installation in Pathanamthitta',
      sub: 'Gates for homes that are often empty. Open the entrance for family, a caretaker or a delivery from wherever you are, with battery backup so a power cut never locks anyone out — across Thiruvalla, Adoor, Ranni and the rest of the district.',
    },
    angle: {
      eyebrow: 'FOR HOMES OWNED FROM ABROAD',
      headline: 'The gate has to work when nobody’s standing at it.',
      paragraphs: [
        'A large share of the houses we automate in Pathanamthitta are owned by families living abroad. The house might be occupied by parents, looked after by a caretaker, or empty for months at a stretch — and in every one of those cases the person who needs to let someone in isn’t the person standing at the gate.',
        'That changes what the gate has to do. Phone-based access means you can open the entrance for a relative, a caretaker or a delivery without anyone carrying a remote, and without leaving a key with someone. RFID tags handle the people who come regularly — a caretaker, a driver — so access can be given and taken back without a handover.',
        'Reliability matters more here too, because there’s often nobody around to work around a fault. Battery backup is fitted as standard so a power cut doesn’t strand anyone outside, and there’s always a manual release. An AMC is worth more on a house that sits unattended than on one you’re in every day: scheduled servicing means someone checks the motor, sensors and battery on a schedule rather than the fault being discovered by whoever next turns up at the gate.',
      ],
    },
    towns: [
      'Thiruvalla',
      'Adoor',
      'Ranni',
      'Konni',
      'Pandalam',
      'Kozhencherry',
      'Mallappally',
    ],
    faqs: [
      {
        q: 'Can I open the gate from abroad?',
        a: 'Yes — with phone-based control, opening the gate isn’t tied to being near it. You can let in a relative, a caretaker or a delivery from wherever you are, as long as both you and the gate have an internet connection. We set this up and test it with you during the handover rather than leaving you an app to figure out, and we’ll be straight about what it depends on: if the house loses internet, phone control is the part that stops working, which is why remotes and RFID stay in place as the local fallback.',
      },
      {
        q: 'What happens if the power fails while the house is empty?',
        a: 'Battery backup is fitted as standard, so the gate keeps operating for a period after a cut rather than freezing in place. There’s also a manual release so anyone on site can open the gate by hand without tools. For a house that’s often unattended this matters more than it does elsewhere — the failure mode you want is "still works", not "someone is locked out and nobody is home to sort it".',
      },
      {
        q: 'Who maintains the gate when I’m not in the country?',
        a: 'That’s what an AMC is for on a house like this. Scheduled servicing means the motor, safety sensors and backup battery get checked on a timetable rather than when something breaks, and we deal with the caretaker or family member on site for access. You get told what was done. Without a contract, a fault on an empty house tends to go unnoticed until someone needs the gate and it doesn’t move.',
      },
      {
        q: 'Do you serve Thiruvalla, Adoor and the smaller towns?',
        a: 'Yes — we install across Pathanamthitta including Thiruvalla, Adoor, Ranni, Konni, Pandalam, Kozhencherry and Mallappally. Site surveys are free. If you’re arranging this from abroad, we can do the survey with whoever is at the house and send the written quote and photos to you directly, so you can approve it without being here.',
      },
      {
        q: 'Can you retrofit an automatic gate onto an older house?',
        a: 'Usually, yes — and it’s common here, since many of these houses have solid older gates worth keeping. We check the gate’s weight, how freely it travels and the condition of the hinges or track, because an older gate that drags needs that corrected before a motor goes on it, or the motor takes the strain. Where the gate is sound, retrofitting is far cheaper than replacing it, and we’ll say so if it isn’t.',
      },
    ],
  },

  alappuzha: {
    slug: 'alappuzha',
    district: 'Alappuzha',
    metaTitle: 'Automatic Gate & Boom Barrier Installation in Alappuzha | ITSolute',
    metaDescription:
      'Automatic gate and boom barrier installation across Alappuzha — gates from ₹40,000, barriers from ₹59,000. Weather-sealed motors for coastal humidity. Free survey in Cherthala and Kayamkulam.',
    whatsappMessage: 'Hi ITSolute, I want a gate automated in Alappuzha.',
    guides: [
      'automatic-gate-maintenance-amc-kerala',
      'automatic-gate-not-working-troubleshooting',
      'sliding-vs-swing-gate-kerala',
    ],
    hero: {
      eyebrow: 'ENTRANCE AUTOMATION · ALAPPUZHA',
      headline: 'Automatic Gate & Boom Barrier Installation in Alappuzha',
      sub: 'Coastal air and heavy monsoon are hard on gate hardware. We fit weather-sealed motors, corrosion-resistant fittings and drainage-aware sliding tracks across Alappuzha — for homes, resorts and homestays from Cherthala to Kuttanad.',
    },
    angle: {
      eyebrow: 'BUILT FOR COAST AND MONSOON',
      headline: 'Salt air and standing water are what actually kill gate motors here.',
      paragraphs: [
        'Alappuzha is the district where installation quality shows up fastest. Salt-laden air corrodes fittings and fasteners, and a monsoon that puts water across driveways finds every gap in a badly mounted motor. A gate that was fine for two years inland can be seized here in one season if the hardware and the mounting weren’t chosen for it.',
        'So we specify differently. Weather-sealed motor enclosures and corrosion-resistant fittings and fasteners are the baseline rather than an upgrade, and control boxes go in positions that stay dry rather than wherever is convenient to wire. For sliding gates the track is the detail people miss: a track that sits in standing water collects grit, and the rollers grind rather than roll. Laying it with drainage in mind is cheap during installation and expensive to fix afterwards.',
        'Resorts and homestays along the backwaters have the extra problem of guests. The entrance is used by people who’ve never seen it before, often at night and often in rain, so safety sensors and clear operation matter more than a clever access method. Servicing matters more here too — in this climate, maintenance intervals that would be fine elsewhere are simply too long.',
      ],
    },
    towns: [
      'Cherthala',
      'Kayamkulam',
      'Mavelikara',
      'Haripad',
      'Chengannur',
      'Kuttanad',
    ],
    faqs: [
      {
        q: 'Will a gate motor survive the monsoon and salty air here?',
        a: 'It will if it’s specified and mounted for the conditions, and it often won’t if it isn’t — that’s the honest answer. For coastal Alappuzha we use weather-sealed motor enclosures and corrosion-resistant fittings and fasteners as standard, and we position control boxes where they stay dry rather than wherever the wiring is easiest. Most premature failures we’re called to in this district trace back to mounting and hardware choices, not the motor itself.',
      },
      {
        q: 'My sliding gate track floods in the monsoon. Can it still be automated?',
        a: 'Usually yes, but the track has to be dealt with as part of the job rather than ignored. A track sitting in standing water collects grit and the rollers grind instead of rolling, which puts load straight onto the motor. At the survey we look at how water moves across the driveway and lay or re-lay the track with drainage in mind. If the existing track is already badly worn, we’ll tell you — automating onto a bad track just transfers the problem to the motor.',
      },
      {
        q: 'Do you install gates for resorts and homestays?',
        a: 'Yes, and they need thinking about differently from a private home. The entrance gets used by guests who don’t know it, frequently after dark and in rain, so safety sensors and obvious, predictable operation matter more than a sophisticated access setup. We usually keep guest-side operation simple and give staff remote or RFID access, and we’ll plan the install around your check-in times so the entrance isn’t out of action when guests are arriving.',
      },
      {
        q: 'Do you serve Cherthala, Kayamkulam and the rest of Alappuzha?',
        a: 'Yes — including Cherthala, Kayamkulam, Mavelikara, Haripad, Chengannur and the Kuttanad area. Site surveys are free. For properties right on the backwaters or close to the coast we’ll flag at the survey where the exposure is worst, since that affects which fittings we use and how often it should be serviced.',
      },
      {
        q: 'How often should a gate be serviced in a humid coastal area?',
        a: 'More often than inland. Humidity and salt accelerate corrosion on fittings and fasteners, and monsoon grit works into tracks and hinges, so servicing intervals that are fine in Kottayam are too long here. Our AMC for coastal properties is set up around that — scheduled cleaning and lubrication, checking fittings for corrosion, and testing the safety sensors and backup battery before rather than after the monsoon.',
      },
    ],
  },
}

export function getEntranceDistrict(slug: string): EntranceDistrict | null {
  return entranceDistricts[slug] ?? null
}

export function getAllEntranceDistrictSlugs(): string[] {
  return Object.keys(entranceDistricts)
}

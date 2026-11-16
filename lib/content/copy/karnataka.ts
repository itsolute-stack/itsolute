import type { FAQ } from '@/lib/content/faqs'
import { regionGateFrom, regionBarrierFrom } from '@/lib/content/entrancePricing'

/**
 * Karnataka hub and city pages.
 *
 * The honesty constraint shapes all of it: there is one office, in Bengaluru.
 * Everywhere else in the state is served from there, with surveys scheduled on
 * request and travel quoted after the survey. No page here may imply a local
 * presence, carry a local address, or emit a LocalBusiness node — only
 * /bangalore does that, because only Bengaluru has an office behind it.
 *
 * Karnataka prices throughout.
 */

const GATE_FROM = regionGateFrom('karnataka').from
const BARRIER_FROM = regionBarrierFrom('karnataka').from

/** Said the same way on every Karnataka page outside Bengaluru. */
export const OUTSIDE_BENGALURU_NOTE =
  'Served from our Bengaluru office — site survey on request. Travel and installation are quoted after the survey.'

export const karnatakaHub = {
  hero: {
    eyebrow: 'ENTRANCE AUTOMATION · KARNATAKA',
    headline: 'Gate Automation & Entrance Automation Across Karnataka',
    sub: `Automatic gates from ${GATE_FROM} and boom barriers from ${BARRIER_FROM}, incl. GST — for homes, apartments, factories and commercial sites across Karnataka, run from our Bengaluru office.`,
    whatsappMessage: 'Hi ITSolute, I want gate automation in Karnataka.',
  },
  intro: {
    eyebrow: 'HOW WE COVER THE STATE',
    headline: 'One office, and we are straight about where it is.',
    paragraphs: [
      'Our Karnataka work is run from the Bengaluru office at Bellandur. Inside the city that means a survey is easy to arrange and installation is routine. Outside it, we schedule site surveys on request and quote travel and installation after the survey rather than before — because the honest cost of reaching Belagavi is not the honest cost of reaching Bellandur, and pretending otherwise would show up in the final invoice.',
      'What we will not do is imply a local branch where there is not one. You will not find a Mysuru address or a Mangaluru phone number on this site, because there is no Mysuru office and no Mangaluru office. There is a Bengaluru office and a team that travels, and knowing that up front is more useful than discovering it when something needs servicing.',
    ],
  },
  products: {
    eyebrow: 'WHAT WE INSTALL',
    headline: 'The whole entrance, statewide.',
    items: [
      {
        title: 'Automatic gates',
        href: '/bangalore/gate-automation',
        from: GATE_FROM,
        blurb: 'Sliding, swing and wheel-drive roller gates for homes, villas and compounds, with safety sensors and 2 remotes in every kit.',
      },
      {
        title: 'Boom barriers',
        href: '/bangalore/boom-barriers',
        from: BARRIER_FROM,
        blurb: 'For gated communities, factory yards, office parking and any entrance where a gate would be too slow for the traffic through it.',
      },
      {
        title: 'Video door phones',
        href: '/bangalore/video-door-phones',
        from: null,
        blurb: 'Multi-flat panels for apartment blocks and villa systems where the gate is a walk from the door.',
      },
      {
        title: 'Smart door locks',
        href: '/bangalore/smart-door-locks',
        from: null,
        blurb: 'Fingerprint, PIN and card entry, fitted to the door you already have, with a mechanical key as backup.',
      },
    ],
  },
  cities: {
    eyebrow: 'CITIES WE COVER',
    headline: 'Beyond Bengaluru.',
    sub: 'Each of these is served from the Bengaluru office, with a site survey scheduled on request.',
  },
  faqs: [
    {
      q: 'Do you cover my town?',
      a: 'Across Karnataka, in principle yes, and the limit is practical rather than geographic. We run everything from the Bengaluru office, so the question is whether the travel makes sense for the size of the job — a single residential gate a long way out can cost more in travel than the motor is worth, and we would rather say so than quote it and disappoint you. Tell us where you are and what the entrance is, and you will get a straight answer before anyone schedules anything.',
    },
    {
      q: 'How does a site survey work outside Bengaluru?',
      a: 'It is scheduled on request rather than booked the same week, because the team is travelling from Bengaluru. We will normally group it with other work in that direction where we can, which keeps the cost down for you. Inside Bengaluru the survey is free; outside it, travel is quoted after we know where you are and what is involved. Nothing is ordered before you have the written quote.',
    },
    {
      q: 'What happens during a power cut?',
      a: 'The gate keeps working, but how depends on the motor. A DC motor carries its own battery backup on two 12V batteries, built in on some brands and an add-on on others. An AC motor has no battery of its own but runs from your inverter connection, which we can wire in during installation. Every motor, on every tier, has a manual release key so the gate can be opened by hand — which matters more in parts of the state where supply is less reliable than in the city.',
    },
    {
      q: 'Can I get an AMC outside Bengaluru?',
      a: 'Usually, and it is worth discussing at the survey rather than afterwards, because the answer depends on where you are. Scheduled servicing means the team travelling to you on a planned interval, which is straightforward in and around Bengaluru and needs more thought further out. Where a full AMC is not practical we will say so plainly and discuss what is — sometimes a longer interval, sometimes a call-out arrangement instead. We would rather decline a contract than sign one we cannot honour.',
    },
    {
      q: 'How long does installation take?',
      a: 'A straightforward residential gate is usually a single day on site once the equipment has arrived. Outside Bengaluru the scheduling takes longer than the work does, since the team and the equipment travel together and we aim to complete in one visit rather than two. Civil work — a plinth, a cable trench, a track where none exists — adds to that, and it is identified at the survey so the timeline you are given is the real one.',
    },
    {
      q: 'How does payment work?',
      a: 'Against a fixed written quote, with GST invoicing. The quote separates the equipment from the installation and names any travel, so you can see what each part costs rather than being handed one figure. Nothing is ordered until you approve it, and the price in the quote is the price — we do not re-quote after an association has taken a month to approve it.',
    },
  ] as FAQ[],
}

export type KarnatakaCity = {
  slug: string
  cityName: string
  metaTitle: string
  metaDescription: string
  whatsappMessage: string
  hero: { eyebrow: string; headline: string; sub: string }
  intro: { headline: string; paragraphs: string[] }
  conditions: { headline: string; items: { title: string; body: string }[] }
  services: { href: string; label: string; why: string }[]
  faqs: FAQ[]
}

export const karnatakaCities: Record<string, KarnatakaCity> = {
  mysuru: {
    slug: 'mysuru',
    cityName: 'Mysuru',
    metaTitle: 'Gate Automation in Mysuru — Gates & Boom Barriers',
    metaDescription: `Automatic gates from ${GATE_FROM} incl. GST for Mysuru independent houses and new layouts, including heavy existing gates. Survey on request.`,
    whatsappMessage: 'Hi ITSolute, I want gate automation in Mysuru.',
    hero: {
      eyebrow: 'MYSURU · KARNATAKA',
      headline: 'Gate Automation in Mysuru',
      sub: `Automatic gates from ${GATE_FROM} incl. GST for independent houses and new layouts — including the heavy older gates Mysuru has more of than most cities. Served from our Bengaluru office.`,
    },
    intro: {
      headline: 'A city with gates worth keeping.',
      paragraphs: [
        'Mysuru has a housing stock the rest of Karnataka does not: substantial independent houses, many of them decades old, with gates built when gates were made from heavy section and hung on masonry pillars. Those gates are frequently better made than anything that would replace them, and the sensible job is almost always to automate what is there rather than to start again.',
        'Alongside that there are the newer layouts on the edges of the city, which are a different and simpler proposition — level approaches, compound walls that run past the opening, and sliding gates as the obvious answer. Most of our Mysuru enquiries are one or the other, and the two need quite different conversations.',
      ],
    },
    conditions: {
      headline: 'What matters on a Mysuru gate',
      items: [
        {
          title: 'Weight, measured rather than guessed',
          body: 'An older ornamental gate can weigh far more than its width suggests. Sizing a motor from the opening alone is the most reliable way to have it fail in year two.',
        },
        {
          title: 'Pillars built for hanging',
          body: 'A masonry pillar that has held a gate for forty years is not automatically ready for the force an arm motor transfers into it. We assess it rather than assume.',
        },
        {
          title: 'Decorative work and clearances',
          body: 'Ornate gates often have features that affect where a motor and its arm can mount. That gets worked out at the survey, not improvised on the day.',
        },
        {
          title: 'New layouts are the easy case',
          body: 'On the newer edges of the city a level approach and a run of compound wall make a sliding gate straightforward, and the survey is short.',
        },
      ],
    },
    services: [
      { href: '/bangalore/swing-gate-automation', label: 'Swing gate automation', why: 'Most older Mysuru gates are hinged, and many are double.' },
      { href: '/bangalore/sliding-gate-automation', label: 'Sliding gate automation', why: 'The straightforward answer on the newer layouts.' },
      { href: '/bangalore/gate-automation', label: 'Automatic gates', why: 'For deciding between keeping the gate and replacing it.' },
    ],
    faqs: [
      {
        q: 'Can you automate a heavy old gate without replacing it?',
        a: 'Usually, and in Mysuru that is the normal job rather than the exception. What decides it is condition rather than age: the frame has to be stiff enough not to flex when driven from one point, the hinges or track have to be sound, and the pillars have to take the load. We assess all three at the survey. Where something needs attention we quote the preparation and the automation separately, so you can see what each costs.',
      },
      {
        q: 'My gate is ornamental. Will a motor spoil the look of it?',
        a: 'An arm motor mounts at the pillar and the leaf, so what is visible is the arm itself rather than anything attached across the face of the gate. On a sliding gate the motor sits on a plinth beside the opening with a rack along the bottom rail. Neither is invisible, but neither requires altering the decorative work. Where a feature genuinely interferes with where the arm must mount, we say so at the survey rather than cutting into the gate.',
      },
      {
        q: 'Do you come to Mysuru for a single house gate?',
        a: 'Often yes, though it depends on the job. We run everything from Bengaluru, so travel is a real cost that gets quoted rather than absorbed, and for a single residential gate we will tell you what that adds before you commit. Where we have other work in the direction we group it, which is the main reason the survey is scheduled on request rather than offered the same week.',
      },
      {
        q: 'Is servicing available in Mysuru?',
        a: 'Yes, though the interval is worth agreeing honestly at the survey, since a scheduled visit means the team travelling from Bengaluru. For a gate that cycles a few times a day, a longer interval is usually sensible and we will say so rather than selling a schedule designed for a city entrance. For anything we cannot realistically keep to, we would rather decline the contract than sign it.',
      },
      {
        q: 'What do the prices cover?',
        a: `Starting prices are for the motor kit including GST — ${GATE_FROM} for a sliding gate with a standard AC motor, rising by gate type and tier. The kit covers the motor, 2 remotes, a safety sensor pair, the rack or track for a sliding gate, and welding. Installation is quoted after the survey because it depends on the gate and the site, and for Mysuru the quote names travel separately so nothing is buried.`,
      },
    ],
  },

  mangaluru: {
    slug: 'mangaluru',
    cityName: 'Mangaluru',
    metaTitle: 'Gate Automation in Mangaluru — Gates & Barriers',
    metaDescription: `Automatic gates from ${GATE_FROM} incl. GST for Mangaluru, specified for coastal salt air and monsoon. Survey on request from our Bengaluru office.`,
    whatsappMessage: 'Hi ITSolute, I want gate automation in Mangaluru.',
    hero: {
      eyebrow: 'MANGALURU · KARNATAKA',
      headline: 'Gate Automation in Mangaluru',
      sub: `Automatic gates from ${GATE_FROM} incl. GST, specified for the coast — salt air, heavy monsoon and the corrosion both bring. Served from our Bengaluru office.`,
    },
    intro: {
      headline: 'The coast is harder on a motor than the city is.',
      paragraphs: [
        'Mangaluru asks a different question of an automatic gate than anywhere inland. Salt-laden air corrodes anything with exposed metal and anything with contacts in it, and a monsoon that arrives in earnest tests every seal on the installation. A gate motor specified for Bengaluru and installed here without thought will work for a season and then begin a slow decline that looks like bad luck and is actually the wrong specification.',
        'None of that makes automation a poor idea here — a gate you open from the car in horizontal rain is worth more on this coast than almost anywhere. It means the protection, the mounting height and the servicing interval all have to be decided for the conditions rather than inherited from an inland job.',
      ],
    },
    conditions: {
      headline: 'What the coast does to an installation',
      items: [
        {
          title: 'Salt air reaches everything',
          body: 'Corrosion is the long-term failure here, and it starts at whatever is least protected. Housing, fixings and cable entries all need to be considered rather than only the motor.',
        },
        {
          title: 'Monsoon finds every seal',
          body: 'Water ingress at a cable entry or a housing joint is the commonest monsoon fault. Mounting height and the direction of driving rain both matter at installation.',
        },
        {
          title: 'Shorter service intervals',
          body: 'A coastal installation needs looking at more often than an inland one. That is a genuine cost of being here and we would rather state it than let it surprise you.',
        },
        {
          title: 'Battery backup earns its place',
          body: 'Supply during a heavy monsoon is less dependable, and a gate you cannot open in that weather is the worst time to find out. Backup is worth deciding at installation.',
        },
      ],
    },
    services: [
      { href: '/bangalore/sliding-gate-automation', label: 'Sliding gate automation', why: 'The common choice, with coastal protection specified.' },
      { href: '/bangalore/gate-automation', label: 'Automatic gates', why: 'For working out which type suits the site.' },
      { href: '/bangalore/gate-repair-amc', label: 'Service & AMC', why: 'Coastal installations need a schedule more than inland ones.' },
    ],
    faqs: [
      {
        q: 'Will salt air ruin the motor?',
        a: 'It will shorten the life of a poorly protected installation, which is why the specification matters more here than inland. Corrosion starts at whatever is least protected — often a cable entry or a fixing rather than the motor itself — so the housing, the mounting and where cables enter all get decided for the conditions. A well-specified coastal installation lasts; one specified as though it were in Bengaluru does not, and that difference is set at installation rather than afterwards.',
      },
      {
        q: 'What happens to the gate during the monsoon?',
        a: 'It should carry on working, and the things that stop it are water ingress and power. Ingress is an installation question: seal quality, mounting height and the direction the driving rain comes from. Power is a specification question, and on this coast we would treat battery backup on a DC motor, or the inverter connection on an AC one, as worth having rather than optional. Every motor also has a manual release key, which in a bad storm is the one that matters.',
      },
      {
        q: 'How often should a coastal gate be serviced?',
        a: 'More often than an inland one, and we would rather say that than sell you an interval that looks cheaper and leaves you with a corroded installation. What a visit covers is largely the same — mechanism, sensors, battery, mountings — but the inspection for corrosion is the part that earns the extra frequency here. We agree the interval at the survey based on how exposed your gate actually is, since a gate behind a house is in a different position from one facing the sea.',
      },
      {
        q: 'Do you actually travel to Mangaluru?',
        a: 'Yes, with the survey scheduled on request rather than the same week, since the team and the equipment travel from Bengaluru together. Travel is quoted after the survey and named separately in the quote rather than folded into the installation figure. For a single small job a long way out we will tell you honestly whether the travel makes it worth doing, before you commit to anything.',
      },
      {
        q: 'Is a boom barrier a good idea on the coast?',
        a: `Yes, and the same reasoning applies — barriers start from ${BARRIER_FROM} including GST, and the specification needs to account for the conditions. A barrier has more exposed mechanism than a gate motor and cycles far more often at a shared entrance, so protection and servicing matter correspondingly more. For an apartment complex here that is an argument for a scheduled AMC from the outset rather than after the first failure.`,
      },
    ],
  },

  'hubballi-dharwad': {
    slug: 'hubballi-dharwad',
    cityName: 'Hubballi-Dharwad',
    metaTitle: 'Gate Automation in Hubballi-Dharwad',
    metaDescription: `Boom barriers from ${BARRIER_FROM} and heavy sliding gates for Hubballi-Dharwad industrial and commercial sites. Survey on request.`,
    whatsappMessage: 'Hi ITSolute, I want gate automation in Hubballi-Dharwad.',
    hero: {
      eyebrow: 'HUBBALLI-DHARWAD · KARNATAKA',
      headline: 'Gate Automation in Hubballi-Dharwad',
      sub: `Boom barriers from ${BARRIER_FROM} and heavy sliding gates for industrial and commercial entrances across the twin cities. Served from our Bengaluru office.`,
    },
    intro: {
      headline: 'Mostly commercial, which changes the specification.',
      paragraphs: [
        'The work we are asked for around Hubballi and Dharwad is weighted towards industry and commerce rather than homes: yard gates at manufacturing units, barriers at commercial parking, entrances that separate vehicles from people. Those are specified by duty cycle rather than by span, and the mistake that costs money is treating a gate used two hundred times a day like one used ten.',
        'Commercial buyers also ask better questions than residential ones, which makes the conversation easier. What does it cost to run, what is the service interval, what happens when it fails at shift change. Those have real answers and we would rather give them at the survey than have the expectations discovered later.',
      ],
    },
    conditions: {
      headline: 'What matters on an industrial entrance',
      items: [
        {
          title: 'Duty cycle over span',
          body: 'How often it moves wears it out, not how wide it is. We ask for vehicle counts and shift patterns rather than sizing from the opening alone.',
        },
        {
          title: 'Heavy gates, properly weighed',
          body: 'Industrial gates are built for security, which means weight a residential motor will not carry. Sizing from the measured gate is not optional here.',
        },
        {
          title: 'Downtime has a cost',
          body: 'A failed entrance at a working site stops vehicles and sometimes people. That is the argument for scheduled servicing rather than call-outs.',
        },
        {
          title: 'Vehicles and pedestrians together',
          body: 'Where a yard has no separate pedestrian route, sensor placement matters more and we will say if the layout itself needs addressing.',
        },
      ],
    },
    services: [
      { href: '/bangalore/boom-barriers', label: 'Boom barriers', why: 'Commercial parking and yard access, where a gate is too slow.' },
      { href: '/bangalore/sliding-gate-automation', label: 'Sliding gate automation', why: 'Heavy yard and compound gates.' },
      { href: '/bangalore/gate-repair-amc', label: 'Service & AMC', why: 'Where downtime costs more than the service does.' },
    ],
    faqs: [
      {
        q: 'Can you automate a heavy factory yard gate?',
        a: 'Yes, and the sizing is most of the job. Industrial gates are built for security rather than lightness, so a gate the same width as a residential one can weigh considerably more and a motor chosen on width alone will labour from the first month. We measure the gate and assess how it is built rather than estimating, and where the gate itself needs stiffening before a motor is worth fitting, we say so in the quote.',
      },
      {
        q: 'How do you size a barrier for a commercial site?',
        a: `By traffic, not by lane width. We ask how many vehicles pass on a typical day and when they pass, because a barrier doing most of its cycles in two shift-change windows is under a different load from one spread evenly. Lane width sets the arm length; the duty cycle sets the motor. Barriers start from ${BARRIER_FROM} including GST, with installation quoted after the survey.`,
      },
      {
        q: 'What happens if it fails during a shift change?',
        a: 'There is a manual release so the arm or gate can be opened by hand and left open, which keeps the site moving while the fault is dealt with — and we make sure the people on the gate know how to use it, since the person who needs it is rarely the person who signed the contract. Beyond that, the failures that strand a shift change are usually the predictable ones, which is exactly what a scheduled service interval exists to catch.',
      },
      {
        q: 'Do you offer AMC for sites this far from Bengaluru?',
        a: 'Usually, with the interval agreed honestly at the survey. Scheduled servicing means the team travelling, and for a commercial site where downtime has a real cost that is normally worth arranging properly rather than relying on call-outs. Where a full schedule is not practical at the distance, we will say so and discuss what is, rather than signing a contract we would struggle to keep.',
      },
      {
        q: 'Can you work around our operating hours?',
        a: 'Where the site needs it, yes, and it is worth raising at the survey rather than on the day. Installing at a working entrance means closing it for a period, and at a manufacturing site that is usually better done outside production hours. It affects scheduling and sometimes cost, so we would rather build it into the quote than treat it as a variation later.',
      },
    ],
  },

  belagavi: {
    slug: 'belagavi',
    cityName: 'Belagavi',
    metaTitle: 'Gate Automation in Belagavi — Gates & Barriers',
    metaDescription: `Automatic gates from ${GATE_FROM} incl. GST for Belagavi factories, warehouses and homes, including large gates. Survey on request.`,
    whatsappMessage: 'Hi ITSolute, I want gate automation in Belagavi.',
    hero: {
      eyebrow: 'BELAGAVI · KARNATAKA',
      headline: 'Gate Automation in Belagavi',
      sub: `Automatic gates from ${GATE_FROM} incl. GST for factories, warehouses and homes — including the wide gates industrial plots tend to have. Served from our Bengaluru office.`,
    },
    intro: {
      headline: 'Wide gates, and plenty of them.',
      paragraphs: [
        'Belagavi mixes a substantial industrial base with established residential areas, and what the two have in common is width. Factory and warehouse entrances are built for lorries, and the older houses sit on plots laid out when land was less scarce. A wider gate is not harder to automate than a narrow one, but it is less forgiving: the leverage is greater, the weight is greater, and a motor chosen optimistically will show it sooner.',
        'The residential side here is closer to Mysuru than to Bengaluru — established houses with gates worth keeping, where a retrofit beats a replacement. The industrial side is closer to Hubballi-Dharwad, specified by duty cycle. Most of what we are asked for in Belagavi falls into one of those two, and they need different answers.',
      ],
    },
    conditions: {
      headline: 'What matters on a Belagavi entrance',
      items: [
        {
          title: 'Width multiplies everything',
          body: 'A wide leaf puts more leverage on its hinges and more demand on the motor. Sizing from the measured gate rather than the opening is what makes the difference last.',
        },
        {
          title: 'Lorry access on industrial plots',
          body: 'A gate sized for goods vehicles has different clearance and timing needs from one sized for cars, including how long it stays open.',
        },
        {
          title: 'Older residential gates',
          body: 'As in Mysuru, many are better built than their replacements would be. Condition rather than age decides whether a retrofit is straightforward.',
        },
        {
          title: 'Longer runs on larger plots',
          body: 'Where the gate is well away from the building, the power run becomes a real part of the quote rather than an afterthought.',
        },
      ],
    },
    services: [
      { href: '/bangalore/sliding-gate-automation', label: 'Sliding gate automation', why: 'Wide factory and warehouse entrances.' },
      { href: '/bangalore/boom-barriers', label: 'Boom barriers', why: 'Where vehicle flow matters more than a full gate.' },
      { href: '/bangalore/swing-gate-automation', label: 'Swing gate automation', why: 'Older residential gates built on hinges.' },
    ],
    faqs: [
      {
        q: 'How wide a gate can you automate?',
        a: 'Wider than most people expect, provided the motor is sized for the actual weight and the gate itself is built to take being driven. Width matters less on its own than what it does to leverage and weight together — a wide light gate is easier than a narrow heavy one. On a very wide opening the sensible answer is sometimes two leaves rather than one, which is kinder to the hinges and the motor both. We work that out at the survey.',
      },
      {
        q: 'We need lorry access. Does that change anything?',
        a: 'It changes clearance and timing more than it changes the motor. A gate sized for goods vehicles needs a wider clear opening, and how long it holds open before closing matters when a lorry is manoeuvring rather than a car driving through. Safety sensor placement also needs thought, because a vehicle that long can still be in the opening when a car would have cleared it. All of that is set at commissioning rather than left at defaults.',
      },
      {
        q: 'Can our old house gate be automated?',
        a: 'Usually, and in established parts of Belagavi that is the common job. Age is not the issue — condition is. The frame has to be stiff enough not to flex when driven from one point, hinges or track have to be sound, and pillars have to take the load an arm motor transfers into them. Where something needs attention first, we quote the preparation separately from the automation so you can see what each costs and decide.',
      },
      {
        q: 'Is travel to Belagavi a problem?',
        a: 'It is a cost rather than a problem, and we quote it rather than absorb it. The team and the equipment travel from Bengaluru, so surveys are scheduled on request and we group work in a direction where we can. For a larger industrial job that travel is a small part of the total; for a single residential gate it is proportionally more, and we will tell you that before you commit rather than after.',
      },
      {
        q: 'What is included in the starting price?',
        a: `The motor kit, including GST: the motor sized to your gate, 2 remotes, a safety sensor pair, the rack or track for a sliding gate, and welding. Gates start from ${GATE_FROM} and barriers from ${BARRIER_FROM}. Installation is quoted after the survey because it depends on the gate and the site, and travel is named separately rather than buried in the installation figure.`,
      },
    ],
  },
}

export function getKarnatakaCity(slug: string): KarnatakaCity | null {
  return karnatakaCities[slug] ?? null
}

export function getAllKarnatakaCitySlugs(): string[] {
  return Object.keys(karnatakaCities)
}

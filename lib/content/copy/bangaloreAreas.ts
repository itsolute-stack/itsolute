import type { FAQ } from '@/lib/content/faqs'

/**
 * Bengaluru area pages at /bangalore/<area>.
 *
 * Each area gets its own argument, not a template with the name swapped. The
 * housing stock genuinely differs across the city: Whitefield is apartments
 * and villa communities, JP Nagar is older independent houses with gates
 * built before anyone thought about automating them, and the north is plots
 * on slopes. Those differences change which product is the right answer, and
 * that is what each page is about.
 *
 * `pricePost` points at a Karnataka blog post. The link only renders once the
 * post exists, so these pages were safe to ship before the posts were written.
 */
export type BangaloreArea = {
  slug: string
  /** Display name, used in breadcrumbs and schema. */
  areaName: string
  metaTitle: string
  metaDescription: string
  whatsappMessage: string
  hero: { eyebrow: string; headline: string; sub: string }
  intro: { headline: string; paragraphs: string[] }
  conditions: { headline: string; items: { title: string; body: string }[] }
  /** The 2–3 service pages that actually matter here, with the reason why. */
  services: { href: string; label: string; why: string }[]
  /** Blog slug; rendered only if the post is published. */
  pricePost: string
  faqs: FAQ[]
}

export const bangaloreAreas: Record<string, BangaloreArea> = {
  whitefield: {
    slug: 'whitefield',
    areaName: 'Whitefield',
    metaTitle: 'Gate Automation in Whitefield, Bangalore',
    metaDescription:
      'Gate automation, boom barriers and video door phones for Whitefield apartments and villa communities. Free site survey, prices incl. GST.',
    whatsappMessage: 'Hi ITSolute, I want gate automation in Whitefield.',
    hero: {
      eyebrow: 'WHITEFIELD · BENGALURU',
      headline: 'Gate Automation in Whitefield',
      sub: 'Apartment complexes, villa communities and the shared entrances both depend on — boom barriers, automatic gates and multi-flat video door phones, surveyed free before anything is quoted.',
    },
    intro: {
      headline: 'Almost everything here is a shared entrance.',
      paragraphs: [
        'Whitefield is dense with apartment complexes and villa communities, and that changes the job. A private gate serves one family and cycles a handful of times a day. A complex entrance serves hundreds of people, runs from before dawn until late, and has a guard, a visitor process and a committee behind it. The equipment has to be specified for that load, and the quote has to survive a meeting.',
        'The commonest brief we get here is not a single product. It is an entrance: a barrier for residents’ vehicles, a gate for the pedestrian side, cameras watching both, and a door phone system so visitors reach the right flat without the guard phoning anyone. Because we install all of it, that gets planned as one job rather than four contractors arriving in sequence.',
      ],
    },
    conditions: {
      headline: 'What we run into in Whitefield',
      items: [
        {
          title: 'Traffic volume decides the barrier',
          body: 'A barrier at a large complex can cycle a thousand times a day. Specified like a small office barrier it will fail inside a year, so we ask for actual vehicle counts rather than flat counts.',
        },
        {
          title: 'Approvals take longer than installation',
          body: 'Association sign-off usually sets the timeline, not us. We give the quote itemised so a committee can read it, and we hold the price through the approval rather than re-quoting afterwards.',
        },
        {
          title: 'Finished buildings, awkward cabling',
          body: 'Multi-flat door phone systems are straightforward under construction and a different problem in a completed block. What risers and conduit already exist decides whether it is practical at all.',
        },
        {
          title: 'Two gates, not one',
          body: 'Most complexes here have a vehicle entrance and a separate pedestrian gate, and they want different things. We survey both rather than pricing the one you mentioned.',
        },
      ],
    },
    services: [
      { href: '/bangalore/boom-barriers', label: 'Boom barriers', why: 'The vehicle entrance at almost every complex here.' },
      { href: '/bangalore/video-door-phones', label: 'Video door phones', why: 'One lobby panel, a monitor in each flat.' },
      { href: '/bangalore/gate-automation', label: 'Automatic gates', why: 'For the pedestrian and secondary gates.' },
    ],
    pricePost: 'boom-barrier-apartment-bangalore',
    faqs: [
      {
        q: 'Who signs off a barrier for an apartment complex?',
        a: 'Usually the association committee, sometimes at an AGM, and that is the part of the timeline we do not control. What we can do is make the decision easy: the quote comes itemised, fixed and in writing, specifying arm length, motor duty, access method and installation separately so the committee can see what each piece costs. We will take technical questions from the association directly rather than making you relay them.',
      },
      {
        q: 'How do residents and visitors get through differently?',
        a: 'Residents normally get RFID tags or cards issued per vehicle, which can be deactivated when a flat changes hands — the reason most complexes here prefer them to remotes. Visitors go through the guard, and that is where a door phone earns its place: the panel calls the flat directly instead of the guard telephoning each time. The two paths are worth designing together, which is why we survey the whole entrance.',
      },
      {
        q: 'Can you put a door phone system into a finished block?',
        a: 'Often, but the building decides rather than the equipment. One panel at the main entrance calling each flat needs cabling that reaches every one of them, and in a completed building that depends entirely on what risers and conduit already exist. Where they do, it is straightforward. Where they do not, the honest options are Wi-Fi based systems or accepting partial coverage, and we will say which applies after the survey.',
      },
      {
        q: 'Our barrier was installed by someone else and keeps failing. Can you take it over?',
        a: 'Possibly. Existing installations are assessed at the site visit before we take them on, because some were fitted in a way we can maintain and some were not. A barrier failing repeatedly at a busy complex is usually either undersized for its traffic or overdue a service it has never had, and those are different problems with different answers. We will tell you which yours is, and whether we can take it on, before any contract is discussed.',
      },
    ],
  },

  'sarjapur-road': {
    slug: 'sarjapur-road',
    areaName: 'Sarjapur Road',
    metaTitle: 'Gate Automation on Sarjapur Road, Bangalore',
    metaDescription:
      'Automatic sliding gates for Sarjapur Road villa layouts and plotted developments, with battery backup. Free site survey, prices incl. GST.',
    whatsappMessage: 'Hi ITSolute, I want gate automation on Sarjapur Road.',
    hero: {
      eyebrow: 'SARJAPUR ROAD · BENGALURU',
      headline: 'Gate Automation on Sarjapur Road',
      sub: 'Villa layouts and plotted developments — sliding gates on new builds, sized to the gate and wired for the power cuts that come with a growing corridor.',
    },
    intro: {
      headline: 'New builds, which means the easy version of this job.',
      paragraphs: [
        'The Sarjapur Road corridor is plots and villa layouts, much of it recent. That matters more than it sounds, because a gate being automated while the house is still being finished is a different job from one retrofitted years later. The cable run can be planned with the electricals, the plinth cast with the compound wall, and nothing has to be chased into a finished surface.',
        'Nearly all of it is sliding. Plotted layouts here are laid out with compound walls that run past the gate, which is exactly the side space a sliding gate needs to park into, and the approaches are generally level. If you are building and have not yet fixed the gate design, the cheapest moment to involve us is before the gate is fabricated, not after.',
      ],
    },
    conditions: {
      headline: 'What we run into on Sarjapur Road',
      items: [
        {
          title: 'Power is the real constraint',
          body: 'A fast-growing corridor means supply that is not always steady. Battery backup on a DC motor, or the inverter connection on an AC one, is worth deciding at installation rather than after the first long cut.',
        },
        {
          title: 'The gate is often not built yet',
          body: 'When the gate is still being fabricated we can say what frame stiffness and track the motor will want, which costs nothing then and is awkward to add later.',
        },
        {
          title: 'Layout rules on appearance',
          body: 'Some developments have rules about what can be visible at the entrance. Worth checking before the motor position is fixed, because moving it afterwards means re-casting the plinth.',
        },
        {
          title: 'Dust during construction',
          body: 'A track laid while the layout is still being built collects construction grit. We fit, but the first service matters more here than elsewhere.',
        },
      ],
    },
    services: [
      { href: '/bangalore/sliding-gate-automation', label: 'Sliding gate automation', why: 'What nearly every plot here takes.' },
      { href: '/bangalore/gate-automation', label: 'Automatic gates', why: 'If you are still deciding the gate type.' },
      { href: '/bangalore/video-door-phones', label: 'Video door phones', why: 'For villas where the gate is a walk from the door.' },
    ],
    pricePost: 'gate-automation-villa-bangalore',
    faqs: [
      {
        q: 'My villa is still under construction. When should you come?',
        a: 'Before the gate is fabricated, if you can. At that stage we can tell the fabricator what frame stiffness, track and clearances the motor will want, and your electrician can run power to the gate position as part of the first-fix rather than as a later addition. It costs nothing to plan and removes the two most common retrofit expenses. We are happy to survey a site that is still a shell.',
      },
      {
        q: 'Do I need battery backup here?',
        a: 'It is worth deciding deliberately rather than by default. A DC motor carries battery backup on two 12V batteries, built in on some brands and an add-on on others. An AC motor has none of its own but runs from your inverter connection, which we wire during installation if you ask. On a corridor where supply is still catching up with the building, being able to open the gate during a cut is not a luxury. Every motor also has a manual release key regardless.',
      },
      {
        q: 'Will a sliding gate suit a plotted development?',
        a: 'Almost always, and that is why it is the default here. Plotted layouts are laid out with compound walls running past the gate opening, which gives the gate somewhere to park, and the approaches are generally level. The exceptions are plots where a tree, a car bay or a boundary interrupts that run, and those are the ones where a swing or wheel-drive gate becomes the answer instead.',
      },
      {
        q: 'Can you match the gate design the layout requires?',
        a: 'We automate the gate; we do not design or fabricate it, so the appearance stays whatever your layout permits. What we do need is a frame stiff enough not to flex when driven from one end and a motor position that works with the plinth. Some developments restrict what can be visible at the entrance, which affects where the motor sits, so it is worth checking that rule before the position is fixed rather than after it is cast.',
      },
    ],
  },

  'electronic-city': {
    slug: 'electronic-city',
    areaName: 'Electronic City',
    metaTitle: 'Gate Automation in Electronic City, Bangalore',
    metaDescription:
      'Boom barriers for parking and heavy sliding gates for Electronic City offices, small factories and apartments. Free site survey, prices incl. GST.',
    whatsappMessage: 'Hi ITSolute, I want gate automation in Electronic City.',
    hero: {
      eyebrow: 'ELECTRONIC CITY · BENGALURU',
      headline: 'Gate Automation in Electronic City',
      sub: 'Offices, small industrial units and apartments — boom barriers for parking, and sliding gates built for gates that are heavier than a house gate ever is.',
    },
    intro: {
      headline: 'Commercial gates fail differently.',
      paragraphs: [
        'Electronic City mixes offices, small manufacturing and residential, and the commercial side of that has requirements a home does not. A yard gate at a small factory is heavier, wider and used by vehicles rather than people. A parking barrier at an office runs through two rush hours a day, every working day. Duty cycle, not span, is what wears both out.',
        'The other difference is who we are talking to. A facilities manager wants to know what it costs to run, what the service interval is, and what happens at 7pm when it fails and two hundred people are leaving. Those are better questions than most homeowners ask, and we would rather answer them at the survey than discover the expectations later.',
      ],
    },
    conditions: {
      headline: 'What we run into in Electronic City',
      items: [
        {
          title: 'Gates heavier than they look',
          body: 'Industrial gates are built for security rather than weight, and a motor sized from the width alone will be undersized. We weigh the problem properly before quoting.',
        },
        {
          title: 'Two rush hours a day',
          body: 'A parking barrier at an office does most of its cycles in two short windows. That concentrated load is harder on it than the daily total suggests.',
        },
        {
          title: 'Downtime has a cost here',
          body: 'A failed barrier at a home is an inconvenience. At an office exit it is a queue onto a main road, which is why a scheduled AMC is a different proposition for a commercial site.',
        },
        {
          title: 'Vehicles and people share the gate',
          body: 'Where a yard has no separate pedestrian route, safety sensor placement matters more and we will say if the layout needs changing rather than just fitting photocells.',
        },
      ],
    },
    services: [
      { href: '/bangalore/boom-barriers', label: 'Boom barriers', why: 'Office and factory parking, where a gate would be too slow.' },
      { href: '/bangalore/sliding-gate-automation', label: 'Sliding gate automation', why: 'Heavy yard and compound gates.' },
      { href: '/bangalore/gate-repair-amc', label: 'Service & AMC', why: 'Scheduled servicing, where downtime costs real money.' },
    ],
    pricePost: 'industrial-gate-automation-karnataka',
    faqs: [
      {
        q: 'Can you automate a heavy industrial gate?',
        a: 'Yes, and the sizing is the whole job. Industrial gates are built for security rather than lightness, so a gate the same width as a residential one can weigh considerably more, and a motor chosen from the width alone will struggle from the first month. We measure the gate and assess its construction rather than estimating, and we will tell you if the gate itself needs stiffening before it is worth putting a motor on.',
      },
      {
        q: 'What happens if the barrier fails during the evening rush?',
        a: 'There is a manual release so the arm can be raised by hand and left up, which keeps traffic moving while the fault is dealt with — we make sure the security team knows how to use it, because the person who needs it at 7pm is rarely the person who signed the contract. Beyond that, a scheduled AMC exists precisely because the failures that strand a queue are usually the predictable ones.',
      },
      {
        q: 'Do you work around office hours?',
        a: 'Where the site needs it, yes, and it is worth raising at the survey rather than on the day. Installing a barrier at a working entrance means closing it for a period, and for most offices that is better done outside working hours. It affects how the job is scheduled and sometimes what it costs, so we would rather build it into the quote than treat it as a variation later.',
      },
      {
        q: 'Is an AMC worth it for a commercial entrance?',
        a: 'More so than for a home, and for a straightforward reason: the cost of a failure is different. A gate stuck at a house is an annoyance for one family. A barrier stuck at an office exit backs vehicles onto the road and involves everyone leaving. The parts that fail at a commercial entrance — arm balance, loop detectors, motor under sustained load — are the predictable ones, which is exactly what scheduled servicing catches.',
      },
    ],
  },

  'hsr-bellandur': {
    slug: 'hsr-bellandur',
    areaName: 'HSR Layout & Bellandur',
    metaTitle: 'Gate Automation in HSR Layout & Bellandur',
    metaDescription:
      'Gate automation for HSR Layout and Bellandur independent houses on compact plots, plus smart door locks. Free site survey, prices incl. GST.',
    whatsappMessage: 'Hi ITSolute, I want gate automation in HSR Layout / Bellandur.',
    hero: {
      eyebrow: 'HSR LAYOUT & BELLANDUR · BENGALURU',
      headline: 'Gate Automation in HSR Layout & Bellandur',
      sub: 'Independent houses on compact plots, where the driveway is short enough that the choice between swing and sliding is decided by centimetres — and our own office is round the corner.',
    },
    intro: {
      headline: 'The plots here are tighter than the gates assume.',
      paragraphs: [
        'HSR and Bellandur are largely independent houses on sites that were laid out generously once and are now built on fully. The gate is often as wide as the plot allows, the driveway is short, and there is a car parked in it. That combination is what makes the swing-or-slide question real here rather than academic: a swing leaf needs its whole arc clear, and on a short driveway the arc reaches the car.',
        'This is also where our Bengaluru office is, at Bellandur, which in practice means we get to these surveys quickly. The office itself is appointment-only — it is a working office, not a counter — but the proximity shows up in how fast we can come and measure a driveway.',
      ],
    },
    conditions: {
      headline: 'What we run into in HSR and Bellandur',
      items: [
        {
          title: 'Short driveways rule out swing',
          body: 'The leaf has to swing through the driveway, and a parked car is usually inside that arc. We measure the arc with the car where it actually sits, not with an empty driveway.',
        },
        {
          title: 'Side space is often partly blocked',
          body: 'A sliding gate needs roughly the opening width again alongside. Here that run is frequently interrupted by a compound feature or a neighbour’s wall, which decides the answer.',
        },
        {
          title: 'Street parking tightens the approach',
          body: 'A gate that opens outward onto a street with cars parked along it is a problem regardless of the motor, and is one reason sliding wins here more often than not.',
        },
        {
          title: 'Doors matter as much as gates',
          body: 'Compact houses with several occupants are where key management goes wrong, which is why smart locks come up in half these conversations.',
        },
      ],
    },
    services: [
      { href: '/bangalore/sliding-gate-automation', label: 'Sliding gate automation', why: 'Usually the answer where the driveway is short.' },
      { href: '/bangalore/swing-gate-automation', label: 'Swing gate automation', why: 'Where the arc is genuinely clear.' },
      { href: '/bangalore/smart-door-locks', label: 'Smart door locks', why: 'For houses with more keys in circulation than people.' },
    ],
    pricePost: 'automatic-gate-price-bangalore',
    faqs: [
      {
        q: 'My driveway is short. Swing or sliding?',
        a: 'Sliding, in most cases here, and the test is simple enough to do yourself. Park where you normally park, then open the gate by hand through its full arc. If the leaf comes anywhere near the car, a motor will not change that — it will just do it automatically. Sliding needs no clearance inside the driveway at all, only a run alongside the opening to park into. Where neither works, a wheel-drive roller gate is the remaining option.',
      },
      {
        q: 'What if there is no side space either?',
        a: 'Then it is a wheel-drive roller gate, which is a swing gate with motorised wheels at the base of each leaf that roll along the ground. It still needs the arc clear, so it does not solve a blocked driveway, but it handles approaches that are uneven or sloped where an arm motor would bind. If the arc is blocked and there is no side run, the honest answer is that the gate itself needs rethinking before automation is worth discussing.',
      },
      {
        q: 'You are based in Bellandur. Does that make it quicker?',
        a: 'For surveys, yes — we are not scheduling a drive across the city, so fitting in a visit here is easier than almost anywhere else we cover. The office is at Bellandur and visits there are by appointment, since it is a working office rather than somewhere to walk into. Installation timelines depend on the equipment arriving rather than on the distance, so proximity helps with the first step more than the last.',
      },
      {
        q: 'Can you do the gate and the front door together?',
        a: 'Yes, and in houses like these it often makes sense. The gate solves getting the car in; the front door solves the four keys in circulation among people who come and go. On compatible setups a video door phone can trigger both, so answering the gate and releasing the door become one action. We survey them together and quote them separately, so you can do one now and the other later if you prefer.',
      },
    ],
  },

  'north-bangalore': {
    slug: 'north-bangalore',
    areaName: 'North Bangalore',
    metaTitle: 'Gate Automation in North Bangalore — Yelahanka',
    metaDescription:
      'Gate automation for North Bangalore villa projects on Hennur, Yelahanka and Devanahalli roads. Large gates and roller gates on slopes. Free survey.',
    whatsappMessage: 'Hi ITSolute, I want gate automation in North Bangalore.',
    hero: {
      eyebrow: 'NORTH BANGALORE · YELAHANKA',
      headline: 'Gate Automation in North Bangalore',
      sub: 'Villa projects along the Hennur, Yelahanka and Devanahalli roads — larger gates than the city average, and the sloped plots where a wheel-drive gate stops being an exotic option.',
    },
    intro: {
      headline: 'Bigger gates, and ground that is rarely flat.',
      paragraphs: [
        'The villa projects along the northern corridors are built on larger plots than the older city, and the gates match: wider openings, heavier leaves, and entrances designed to look substantial. A heavier gate is not harder to automate, but it is unforgiving of a motor chosen on width alone, and it is where undersizing shows up fastest.',
        'The other thing the north has is slope. Plots toward Devanahalli and along parts of Hennur sit on ground that rises or falls across the entrance, and that is the single condition that changes which motor works. An arm motor assumes the leaf travels a level arc; where the ground climbs through that arc, the arm binds. It is the reason we fit more wheel-drive roller gates here than anywhere else in the city.',
      ],
    },
    conditions: {
      headline: 'What we run into in North Bangalore',
      items: [
        {
          title: 'Slope across the arc',
          body: 'We measure the fall across the gate’s travel rather than eyeballing it. Mild slope is routine; real gradient decides the motor type before anything else does.',
        },
        {
          title: 'Wide, heavy leaves',
          body: 'Entrance gates built to look substantial weigh substantially. Sizing from the measured gate rather than the opening width is the difference between a motor that lasts and one that labours.',
        },
        {
          title: 'Longer cable runs',
          body: 'Larger plots mean the gate is further from the house and the supply. Where power comes from is a real question here, not a formality.',
        },
        {
          title: 'Projects with entrance rules',
          body: 'Villa projects often specify what the entrance may look like, which constrains where a motor and its housing can sit. Worth confirming before the position is fixed.',
        },
      ],
    },
    services: [
      { href: '/bangalore/roller-gate-automation', label: 'Roller gate automation', why: 'The answer on sloped and uneven approaches.' },
      { href: '/bangalore/gate-automation', label: 'Automatic gates', why: 'For working out which type your plot takes.' },
      { href: '/bangalore/swing-gate-automation', label: 'Swing gate automation', why: 'Where the approach is level and the arc is clear.' },
    ],
    pricePost: 'gate-automation-villa-bangalore',
    faqs: [
      {
        q: 'My driveway slopes up to the gate. What works?',
        a: 'Usually a wheel-drive roller gate, which is a swing gate carried by motorised wheels at the base of each leaf rather than pushed by an arm from the pillar. The wheel follows the ground; an arm has to fight any change in level through the arc and binds. We measure the actual fall across the gate’s travel at the survey rather than judging by eye, because the gradient decides this and guessing it wrong is expensive.',
      },
      {
        q: 'Is a wider gate much more expensive to automate?',
        a: 'The motor tier is set by weight and width together, so a wider gate often means a larger motor, but the bigger variable is usually the installation rather than the kit. Longer cable runs, a bigger plinth and more substantial mounting all add to the installed cost. That is why the starting prices cover the motor kit and installation is quoted after the survey — on a large north Bengaluru entrance the second number genuinely varies.',
      },
      {
        q: 'The gate is a long way from the house. Does that matter?',
        a: 'For power and for the remote, yes. The motor needs a supply at the gate, and on a large plot that run has to be planned rather than improvised — we work out where it comes from at the survey. Remote range is rarely an issue for the gate itself, but if you want to open it from inside the house rather than from the car, that distance is worth mentioning so we can specify accordingly.',
      },
      {
        q: 'Can the gate work during a power cut this far out?',
        a: 'Yes, and it is worth planning properly on the outskirts. A DC motor carries battery backup on two 12V batteries, built in on some brands and an add-on on others. An AC motor runs from your inverter connection, which we wire during installation if asked. Every motor has a manual release key as well, so the gate can always be opened by hand — which matters more on a large plot where walking back to the house for an alternative is not quick.',
      },
    ],
  },

  'south-bangalore': {
    slug: 'south-bangalore',
    areaName: 'South Bangalore',
    metaTitle: 'Gate Automation in South Bangalore — JP Nagar',
    metaDescription:
      'Automating existing gates in JP Nagar, Jayanagar and south Bengaluru. Retrofits and double swing openers for older houses. Free site survey.',
    whatsappMessage: 'Hi ITSolute, I want to automate my gate in South Bangalore.',
    hero: {
      eyebrow: 'SOUTH BANGALORE · JP NAGAR',
      headline: 'Gate Automation in South Bangalore',
      sub: 'JP Nagar, Jayanagar and the older south — where the gate is usually decades old, worth keeping, and the job is automating what you already have rather than replacing it.',
    },
    intro: {
      headline: 'The gate is older than the idea of automating it.',
      paragraphs: [
        'South Bengaluru is independent houses built long before anyone specified a gate with a motor in mind. The gates are frequently better made than new ones — heavier sections, proper welds, hung on substantial pillars — and the right answer is almost always to keep them. Retrofitting is cheaper than replacing and usually gives a better gate at the end of it.',
        'What a retrofit turns on is condition rather than age. Hinges that have dropped, a track that has settled, a pillar that has shifted: these are what decide whether automation is straightforward, and none of them are visible in a photograph. It is why the survey on an older gate is a longer conversation than on a new one, and why we will sometimes say a gate needs work before a motor is worth fitting.',
      ],
    },
    conditions: {
      headline: 'What we run into in South Bangalore',
      items: [
        {
          title: 'Hinges that have dropped',
          body: 'Decades of weight tells. An arm motor fights a sagging leaf on every cycle, so the hinges get assessed before the motor is specified — sometimes they need attention first.',
        },
        {
          title: 'Double-leaf gates, commonly',
          body: 'Older houses here often have double gates, which means two synchronised arm motors rather than one. More to commission, and worth doing properly so the leaves meet cleanly.',
        },
        {
          title: 'Pillars built for hanging, not pushing',
          body: 'A pillar sound enough to hold a gate is not automatically sound enough to take the force an arm motor transfers into it. We check, and say if it is not.',
        },
        {
          title: 'Tracks that have settled',
          body: 'On older sliding gates the ground has moved since the track was laid. A gate that drags at one point will drag worse under power, and that gets quoted openly rather than absorbed.',
        },
      ],
    },
    services: [
      { href: '/bangalore/swing-gate-automation', label: 'Swing gate automation', why: 'Most older gates here are hinged, many of them double.' },
      { href: '/bangalore/gate-automation', label: 'Automatic gates', why: 'For deciding whether to retrofit or rebuild.' },
      { href: '/bangalore/gate-repair-amc', label: 'Service & AMC', why: 'Older mechanisms benefit most from a schedule.' },
    ],
    pricePost: 'automate-existing-gate-bangalore',
    faqs: [
      {
        q: 'Can my old gate be automated, or do I need a new one?',
        a: 'Usually it can, and usually it should be — older gates here are often better built than their replacements would be. What matters is condition rather than age: the frame has to be stiff enough not to flex when driven from one point, the hinges or track have to be sound, and the pillars have to take the load. Where something needs attention we quote the repair and the automation separately, so you can see what you are paying for rather than being handed one number.',
      },
      {
        q: 'What does a retrofit cost compared with a new gate?',
        a: 'Keeping the gate is normally the cheaper route by a clear margin, because you are buying a motor kit and installation rather than a motor kit, a fabricated gate and its installation. The variable is whatever preparation the existing gate needs — hinge work, a stiffening member, a track section. That is assessed at the survey and quoted openly, and it is the number that decides whether a retrofit still makes sense.',
      },
      {
        q: 'Both leaves of my gate open. Does that need two motors?',
        a: 'Yes — a double-leaf gate takes one arm motor per leaf, synchronised so the two move together. The synchronisation is the part worth doing carefully: two motors that are not matched look wrong, meet badly at the centre and wear unevenly. Setting that up is part of the installation rather than an extra, and it is the main reason a double gate takes longer to commission than a single one.',
      },
      {
        q: 'The gate scrapes the ground when I open it. Is that a problem?',
        a: 'It is the problem, and it needs sorting before a motor goes on. Scraping means a dropped hinge, a settled track or ground that has risen, and in every case the gate is already fighting something. A motor applies more force than you do, so it will keep going where you would stop — which turns a scrape into wear on the motor and the gate both. We identify the cause at the survey and quote the fix separately.',
      },
    ],
  },
}

export function getBangaloreArea(slug: string): BangaloreArea | null {
  return bangaloreAreas[slug] ?? null
}

export function getAllBangaloreAreaSlugs(): string[] {
  return Object.keys(bangaloreAreas)
}

import {
  Fence,
  DoorOpen,
  RadioTower,
  ScanLine,
  ShieldCheck,
  BatteryCharging,
  KeyRound,
  Gauge,
  Car,
  RectangleHorizontal,
  Siren,
  Video,
  Wifi,
  Smartphone,
  Users,
  Fingerprint,
  Settings,
} from 'lucide-react'
import type { EntranceProduct } from '@/lib/content/copy/entranceAutomation'
import {
  regionGateTierRows,
  regionProduct,
  regionGateFrom,
  regionBarrierFrom,
  BATTERY_ADDON,
  INSTALLATION_ANSWER,
} from '@/lib/content/entrancePricing'

/**
 * Bengaluru service pages, served at /bangalore/<slug>.
 *
 * Every price here is the Karnataka set. Nothing in this file may quote a
 * Kerala figure — the Bengaluru team would not honour it.
 *
 * These are not the Kerala pages with the city swapped. Bengaluru sells
 * differently: the buyer is often an apartment association rather than a
 * homeowner, the sites are gated layouts and tech parks rather than village
 * roads, and the recurring objections are approval processes and sloped
 * basement ramps rather than monsoon and salt air. The copy reflects that.
 */

const TIERS = regionGateTierRows('karnataka')
const tier = (label: string) => TIERS.filter((t) => t.label.startsWith(label))

export const KA_GATE_FROM = regionGateFrom('karnataka').from
export const KA_BARRIER_FROM = regionBarrierFrom('karnataka').from
const SLIDING = regionProduct('sliding', 'karnataka')
const SWING_SINGLE = regionProduct('swing-single', 'karnataka')
const SWING_DOUBLE = regionProduct('swing-double', 'karnataka')
const ROLLER = regionProduct('roller', 'karnataka')
const BARRIER = regionProduct('boom-barrier', 'karnataka')

/** What a gate starting price buys, worded once and shown on every gate page. */
export const GATE_INCLUDED = [
  'The motor kit, sized to your gate',
  '2 remote controls',
  'Safety sensors (photocell pair)',
  'Rack or track for a sliding gate',
  'Welding and mounting work',
]

const PRICE_DISCLAIMER = `Starting prices for the motor kit, including GST. ${INSTALLATION_ANSWER}`

export const bangaloreServices: Record<string, EntranceProduct> = {
  'gate-automation': {
    slug: 'gate-automation',
    contactService: 'entrance-automation',
    metaTitle: `Automatic Gates in Bangalore from ${KA_GATE_FROM}`,
    metaDescription: `Automatic gate systems for Bengaluru homes, villas and apartments from ${KA_GATE_FROM} incl. GST. Sliding, swing and roller. Free site survey.`,
    serviceName: 'Automatic Gate Installation in Bangalore',
    serviceType: 'Automatic Gate Installation',
    priceLow: String(SLIDING.ac!.minPrice),
    priceHigh: '250000',
    whatsappMessage: 'Hi ITSolute, I want an automatic gate quote in Bangalore.',
    heroIntent:
      'Automatic sliding gate opening at the entrance of a Bengaluru villa, remote control visible',
    heroAlt:
      'Automatic gate opening at the entrance of a villa in Bengaluru',
    hero: {
      eyebrow: 'GATE AUTOMATION · BENGALURU',
      headline: 'Automatic Gate & Gate Automation Systems in Bangalore',
      sub: `Automated gates from ${KA_GATE_FROM} incl. GST — electric gate systems for homes, villas, apartments and offices across Bengaluru, opened from a remote and installed after a free site survey.`,
    },
    install: {
      eyebrow: 'WHAT WE INSTALL',
      headline: 'Four kinds of automatic gate system, one decision.',
      items: [
        {
          icon: Fence,
          title: 'Automatic sliding gates',
          body: 'A rack-driven motor slides the gate along its track. The usual choice in Bengaluru wherever there is wall to park the gate against, which most plotted layouts have.',
        },
        {
          icon: DoorOpen,
          title: 'Automatic swing gates',
          body: 'Arm motors swing the leaves inward — one arm for a single leaf, two for a double. Common on older independent houses where the gate was never built to slide.',
        },
        {
          icon: Gauge,
          title: 'Roller (wheel-drive) gates',
          body: 'A swing gate driven by wheel motors that roll along the ground. For sites with no room alongside to slide and a driveway too sloped for arm motors.',
        },
        {
          icon: RadioTower,
          title: 'Remote gates as standard',
          body: 'Two remotes come with every motor kit. RFID readers, tags and cards are available as an add-on, quoted after the survey. On DC motors you can add voice control.',
        },
      ],
    },
    who: {
      eyebrow: 'WHO IT’S FOR',
      headline: 'Entrances that too many people use, or too few want to push.',
      items: [
        'Villas in gated layouts off Sarjapur Road, Whitefield and the Hennur corridor',
        'Independent houses in HSR, Bellandur, JP Nagar and Jayanagar',
        'Apartment blocks where the main gate runs all day',
        'Office and small industrial entrances needing controlled vehicle access',
      ],
    },
    why: {
      eyebrow: 'WHY ITSOLUTE',
      headline: 'We survey the gate before we price the motor.',
      points: [
        {
          title: 'Sized to the gate you own',
          body: 'Motor capacity is set by the weight and width of the actual gate, not by the frontage of the plot. An undersized motor on a heavy steel gate is the most common reason an automation job fails in its second year.',
        },
        {
          title: 'Safety sensors are not an upgrade',
          body: 'A photocell pair is in every starting price. A quote without them is not a cheaper version of the same system, it is a different and less safe one — worth asking any other quote you are holding.',
        },
        {
          title: 'Power cuts planned at installation',
          body: `DC motors take battery backup on two 12V batteries, built in on some brands and a ${BATTERY_ADDON} add-on on others. AC motors have none of their own but run from your inverter connection, which we wire during installation.`,
        },
        {
          title: 'Fixed written quote',
          body: 'The survey is free and the quote is written and fixed before anything is ordered. Civil work, where any is needed, is your scope and we say so up front rather than at the end.',
        },
      ],
    },
    process: {
      eyebrow: 'HOW IT GOES',
      headline: 'Survey, quote, install, hand over.',
      steps: [
        {
          index: '01',
          title: 'Free site survey',
          body: 'We measure the gate, judge its weight, check how freely it runs by hand, and find where power can come from. In an apartment that also means asking who needs to open it.',
        },
        {
          index: '02',
          title: 'Fixed written quote',
          body: 'Naming the motor type and tier, what the kit includes, and the installation cost on top. Associations get it in a form they can take to a committee.',
        },
        {
          index: '03',
          title: 'Installation',
          body: 'Motor mounted, rack or arms fitted, safety sensors aligned, remotes paired, and limits set so the gate stops exactly where it should.',
        },
        {
          index: '04',
          title: 'Handover',
          body: 'We show you the manual release key, the remotes, and what to do if the gate stops. Warranty paperwork is handed over with it — from 2 years, varying by brand.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BENGALURU PRICING',
      headline: 'Starting prices for Bengaluru.',
      rows: TIERS.filter((t) => t.key !== 'boom-barrier'),
      disclaimer: PRICE_DISCLAIMER,
    },
    amc: {
      eyebrow: 'AFTER INSTALLATION',
      headline: 'A gate in Bengaluru works harder than most.',
      body: 'City dust gets into tracks and hinges, and a gate on a busy layout cycles far more often than one at a village house. An AMC keeps the parts that wear under a schedule instead of a surprise.',
      points: [
        'Track, rack and rollers cleaned and checked for drag',
        'Safety sensor alignment re-tested',
        'Battery condition checked on DC motors',
        'Remotes re-paired and limits re-set',
        'Can be combined with your other ITSolute AMC under one contract',
      ],
    },
    faqs: [
      {
        q: 'How much does an automatic gate cost in Bangalore?',
        a: `Sliding gates start at ${SLIDING.ac!.from} with a standard AC motor and ${SLIDING.dc.from} with a premium DC motor. Single-arm swing gates start at ${SWING_SINGLE.dc.from}, double-arm at ${SWING_DOUBLE.dc.from}, and roller gates at ${ROLLER.dc.from}. Every figure includes GST and covers the motor kit, 2 remotes and safety sensors. Installation is quoted after the free site survey, because it depends on your gate and site.`,
      },
      {
        q: 'Which gate type suits a Bengaluru plot?',
        a: 'Sliding, usually — most plotted layouts here have a compound wall to park the gate against, and a sliding gate needs no clearance inside the driveway. Swing suits older houses whose gates were built on hinges and sit on a level approach. Where there is neither side space nor a level approach, which happens on the sloped plots north and east of the city, a wheel-drive roller gate is the one that works.',
      },
      {
        q: 'Can you work with our apartment association?',
        a: 'Yes, and most of our Bengaluru work is that. We give the quote in writing with the specification itemised so it can go to a committee or an AGM without you having to translate it, and we are willing to answer questions from the association directly. Timelines usually turn on the approval process rather than on us.',
      },
      {
        q: 'Is a voice-controlled gate possible?',
        a: 'On DC motors, yes — Alexa or Google Home on compatible setups. It is not available on AC motors at all, so if voice control matters it decides the motor tier before anything else does. Remote control is standard on every motor we fit, and two remotes come in the kit.',
      },
      {
        q: 'How long does installation take?',
        a: 'A straightforward residential gate is usually a single day on site once the motor has arrived, with the survey and the order ahead of it. What extends it is civil work — a plinth to cast, a cable route to dig, a track to lay where none exists. Those are identified at the survey so the timeline you are given is the real one.',
      },
      {
        q: 'What happens in a power cut?',
        a: `A DC motor carries its own battery backup on two 12V batteries, built in on some brands and a ${BATTERY_ADDON} add-on on others. An AC motor has no battery of its own but runs from your inverter connection, which we can wire in during installation. Every motor, whichever tier, has a manual release key so the gate opens by hand.`,
      },
    ],
    guides: [],
  },

  'sliding-gate-automation': {
    slug: 'sliding-gate-automation',
    contactService: 'entrance-automation',
    metaTitle: `Sliding Gate Automation Bangalore from ${SLIDING.ac!.from}`,
    metaDescription: `Automatic sliding gate motor installation in Bengaluru from ${SLIDING.ac!.from} incl. GST. Rack-driven, safety sensors, 2 remotes. Free site survey.`,
    serviceName: 'Sliding Gate Automation in Bangalore',
    serviceType: 'Sliding Gate Automation',
    priceLow: String(SLIDING.ac!.minPrice),
    priceHigh: '200000',
    whatsappMessage: 'Hi ITSolute, I want a sliding gate motor quote in Bangalore.',
    heroIntent:
      'Rack-driven sliding gate motor mounted on a plinth beside a sliding gate at a Bengaluru home',
    heroAlt: 'Sliding gate motor mounted beside the track of a gate in Bengaluru',
    hero: {
      eyebrow: 'SLIDING GATES · BENGALURU',
      headline: 'Automatic Sliding Gate Motor Installation in Bangalore',
      sub: `Motorised sliding gates from ${SLIDING.ac!.from} incl. GST. A rack-driven motor sized to your gate, two remotes and safety sensors in the kit — for home sliding gates across Bengaluru.`,
    },
    install: {
      eyebrow: 'WHAT WE INSTALL',
      headline: 'The motor, the rack, and the track it all depends on.',
      items: [
        {
          icon: Fence,
          title: 'Rack-driven motor',
          body: 'A toothed rack is fixed along the gate and the motor drives it. Capacity is chosen from the gate’s weight and width, which we measure rather than estimate.',
        },
        {
          icon: Settings,
          title: 'Track and rollers',
          body: 'An automatic sliding gate is only as good as what it rolls on. A track that catches when pushed by hand will fight the motor daily, so we check it first and say if it needs work.',
        },
        {
          icon: RadioTower,
          title: 'Remote control sliding gate',
          body: 'Two remotes as standard. RFID tags and cards are an add-on quoted after the survey, and DC motors can add voice control through Alexa or Google Home.',
        },
        {
          icon: ShieldCheck,
          title: 'Safety sensors',
          body: 'A photocell pair across the opening stops the gate rather than letting it close on a person, a pet or a car. In the starting price, not an upgrade.',
        },
      ],
    },
    who: {
      eyebrow: 'WHO IT’S FOR',
      headline: 'Plots with wall to spare alongside the opening.',
      items: [
        'Plotted-development villas where the compound wall runs past the gate',
        'Apartment side and service entrances that open all day',
        'Independent houses with a level approach and no room to swing inward',
        'Small commercial yards where vehicles need a wide clear opening',
      ],
    },
    why: {
      eyebrow: 'WHY ITSOLUTE',
      headline: 'Most sliding gate failures are track failures.',
      points: [
        {
          title: 'The hand test comes first',
          body: 'If the gate drags at one point when pushed by hand, a motor will drag there too, with more force and less patience. We find that at the survey and quote the track work rather than discovering it later.',
        },
        {
          title: 'Motor sized to real weight',
          body: 'Two gates of the same width can differ substantially in weight once the infill is accounted for. Sizing to the measured gate is the difference between a motor that lasts and one that labours.',
        },
        {
          title: 'AC or DC, explained plainly',
          body: `AC is the standard tier from ${SLIDING.ac!.from}. DC from ${SLIDING.dc.from} is smoother and quieter, carries battery backup, and is the only tier that supports voice control. We tell you which your site actually needs.`,
        },
        {
          title: 'Cable planned, not improvised',
          body: 'The motor needs power at the gate. Because we also do networking and cabling, that run gets planned with the rest rather than clipped along a wall afterwards.',
        },
      ],
    },
    process: {
      eyebrow: 'HOW IT GOES',
      headline: 'Track first, motor second.',
      steps: [
        {
          index: '01',
          title: 'Survey and hand test',
          body: 'We push the gate end to end, check the track and rollers along the run, measure weight and width, and look at where power is.',
        },
        {
          index: '02',
          title: 'Quote, including any track work',
          body: 'A fixed written quote for the motor tier plus installation, and separately any track or roller work the gate needs first. Nothing hidden until the day.',
        },
        {
          index: '03',
          title: 'Plinth, rack and motor',
          body: 'Motor set on a plinth beside the gate, rack welded along the leaf, photocells aligned across the opening, limits set at both ends.',
        },
        {
          index: '04',
          title: 'Handover',
          body: 'Remotes paired and handed over with the manual release key, plus a walk-through of what to do if the gate stops mid-travel.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BENGALURU PRICING',
      headline: 'Sliding gate motor price in Bengaluru.',
      rows: tier('Sliding gate'),
      disclaimer: PRICE_DISCLAIMER,
    },
    amc: {
      eyebrow: 'AFTER INSTALLATION',
      headline: 'Dust is the enemy of a track.',
      body: 'Bengaluru dust settles into a sliding gate track faster than most people expect, and a gritty track makes the motor work harder every single cycle. Cleaning it on a schedule costs less than replacing a motor early.',
      points: [
        'Track swept and checked for grit, rust and alignment',
        'Rack and pinion engagement checked along the run',
        'Rollers inspected and replaced where worn',
        'Photocells realigned and tested',
        'Battery condition checked on DC motors',
      ],
    },
    faqs: [
      {
        q: 'What does a sliding gate motor cost in Bangalore?',
        a: `${SLIDING.ac!.from} including GST for the standard AC motor kit, and ${SLIDING.dc.from} for the premium DC. Both cover the motor, 2 remotes, a safety sensor pair, the rack and the welding. Installation is quoted separately after the free site survey because it depends on the gate and the site. If the existing track needs work, that is quoted openly rather than folded in.`,
      },
      {
        q: 'My gate sticks halfway. Can it still be automated?',
        a: 'Not until the sticking is fixed, and that is the honest answer rather than a sales one. A motor applies more force than a person does, so a gate that catches will keep catching and the motor will wear out early doing it. Usually it is a bent track section, a worn roller or debris packed into the channel, and all three are fixable. We quote the repair and the automation separately so you can see what you are paying for.',
      },
      {
        q: 'How much side space does a sliding gate need?',
        a: 'Roughly the width of the opening again, running alongside it, for the gate to park into. On most Bengaluru plotted layouts the compound wall provides exactly that, which is why sliding is the common choice here. Where that run is blocked by a car park, a tree or a boundary, a swing or wheel-drive roller gate is the realistic option instead.',
      },
      {
        q: 'Is an automatic sliding gate noisy?',
        a: 'A correctly sized motor on a clean track is quiet enough that the gate rolling is louder than the motor. Noise almost always means something else: a motor straining against a gate heavier than it was sized for, or grit in the track. Both are avoidable at the survey, and both are what an AMC visit checks.',
      },
      {
        q: 'Can I keep my existing gate?',
        a: 'In most cases yes, which is the cheaper route. What matters is that the frame is stiff enough not to flex when driven from one end, the track is straight, and the rollers turn freely. Older gates often need a stiffening member welded in, which is minor work. We tell you at the survey whether your gate is a candidate or whether you would be putting a good motor on a gate that will not last.',
      },
      {
        q: 'What is the difference between AC and DC for a sliding gate?',
        a: `AC is the standard tier from ${SLIDING.ac!.from}: it does the job and runs from your inverter connection during a power cut, though it has no battery of its own. DC from ${SLIDING.dc.from} starts and stops more smoothly, runs quieter, carries battery backup on two 12V batteries, and is the only tier where voice control is possible. For a gate used a few times a day either is fine; for a gate cycling constantly, DC is the one that ages better.`,
      },
    ],
    guides: [],
  },

  'swing-gate-automation': {
    slug: 'swing-gate-automation',
    contactService: 'entrance-automation',
    metaTitle: `Swing Gate Automation Bangalore from ${SWING_SINGLE.dc.from}`,
    metaDescription: `Automatic swing gate openers in Bengaluru from ${SWING_SINGLE.dc.from} incl. GST. Single and double arm motors, safety sensors, 2 remotes. Free survey.`,
    serviceName: 'Swing Gate Automation in Bangalore',
    serviceType: 'Swing Gate Automation',
    priceLow: String(SWING_SINGLE.dc.minPrice),
    priceHigh: '200000',
    whatsappMessage: 'Hi ITSolute, I want a swing gate opener quote in Bangalore.',
    heroIntent:
      'Arm motor fitted to the hinge post of a double swing gate at a Bengaluru house, gate opening inward',
    heroAlt: 'Arm motor opening a double swing gate at a house in Bengaluru',
    hero: {
      eyebrow: 'SWING GATES · BENGALURU',
      headline: 'Automatic Swing Gate Openers in Bangalore — Single & Double',
      sub: `Swing gate motors from ${SWING_SINGLE.dc.from} incl. GST for a single leaf and ${SWING_DOUBLE.dc.from} for a double. Arm-type openers fitted to the gate you already have, with safety sensors as standard.`,
    },
    install: {
      eyebrow: 'WHAT WE INSTALL',
      headline: 'Arm motors, one per leaf.',
      items: [
        {
          icon: DoorOpen,
          title: 'Single swing gate opener',
          body: `One arm motor on a single-leaf gate, from ${SWING_SINGLE.dc.from}. The arm mounts to the pillar and the leaf, and swings it inward on its existing hinges.`,
        },
        {
          icon: RectangleHorizontal,
          title: 'Double swing gate opener',
          body: `Two arm motors on a double-leaf gate, from ${SWING_DOUBLE.dc.from}, synchronised so both leaves start and finish together rather than one trailing.`,
        },
        {
          icon: ShieldCheck,
          title: 'Safety sensors',
          body: 'A photocell pair across the opening. A swing gate sweeps through the driveway as it opens, so there is more space for something to be in the way than with a sliding gate.',
        },
        {
          icon: BatteryCharging,
          title: 'DC motors throughout',
          body: `Swing openers are DC, so battery backup on two 12V batteries is available — built in on some brands, a ${BATTERY_ADDON} add-on on others — and voice control is possible.`,
        },
      ],
    },
    who: {
      eyebrow: 'WHO IT’S FOR',
      headline: 'Gates built on hinges, with room to swing.',
      items: [
        'Older independent houses in JP Nagar, Jayanagar and Basavanagudi',
        'Houses whose compound wall leaves no run for a sliding gate to park into',
        'Double-leaf gates wide enough that one leaf alone would be unwieldy',
        'Properties where the existing gate is sound and worth keeping',
      ],
    },
    why: {
      eyebrow: 'WHY ITSOLUTE',
      headline: 'Hinges and pillars decide this job.',
      points: [
        {
          title: 'The hinges are checked first',
          body: 'An arm motor pushes the leaf from one point, so worn or dropped hinges show up immediately under power. We check them at the survey and say if they need attention before automation.',
        },
        {
          title: 'The pillar has to take the load',
          body: 'The arm mounts to the gate pillar and transfers real force into it. A pillar that is sound for a hand-pushed gate is not automatically sound for a powered one, and we will tell you if it is not.',
        },
        {
          title: 'Leaves synchronised properly',
          body: 'On a double gate, two motors that are not synchronised look wrong and wear unevenly. Setting them to open and close together is part of the install, not an extra.',
        },
        {
          title: 'Two motors, one movement',
          body: 'On a double gate the pair has to be commissioned together, not fitted and left. Limits, speed and the closing sequence are set so the leaves meet cleanly instead of one slamming ahead of the other.',
        },
      ],
    },
    process: {
      eyebrow: 'HOW IT GOES',
      headline: 'Check the swing before fitting the arm.',
      steps: [
        {
          index: '01',
          title: 'Survey the swing',
          body: 'We open the gate by hand through its full arc, check the hinges and pillars, measure each leaf, and confirm the driveway stays clear through the sweep.',
        },
        {
          index: '02',
          title: 'Quote',
          body: 'Single or double, the motor tier, installation, and any hinge or pillar work the gate needs first — itemised, fixed and in writing.',
        },
        {
          index: '03',
          title: 'Fit and synchronise',
          body: 'Arms mounted to pillar and leaf, photocells aligned, travel limits set, and on a double gate the two leaves synchronised to move as one.',
        },
        {
          index: '04',
          title: 'Handover',
          body: 'Remotes paired, manual release demonstrated on each motor, and the battery backup arrangement explained if fitted.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BENGALURU PRICING',
      headline: 'Swing gate opener prices in Bengaluru.',
      rows: tier('Swing gate'),
      disclaimer: PRICE_DISCLAIMER,
    },
    amc: {
      eyebrow: 'AFTER INSTALLATION',
      headline: 'Arms and hinges, checked together.',
      body: 'A swing opener and the gate’s own hinges wear as a pair. A hinge that drops a few millimetres changes the arc the arm has to drive, and the motor absorbs that difference until something gives.',
      points: [
        'Hinge condition and leaf alignment checked',
        'Arm mountings at pillar and leaf re-tightened',
        'Synchronisation of both leaves re-set on double gates',
        'Photocells realigned and tested',
        'Battery condition and manual release checked',
      ],
    },
    faqs: [
      {
        q: 'Single or double — which opener do I need?',
        a: `That is decided by the gate, not by preference: a single-leaf gate takes one arm motor from ${SWING_SINGLE.dc.from}, a double-leaf gate takes two from ${SWING_DOUBLE.dc.from}. The question worth asking is whether a wide single leaf is wise at all. Beyond a certain width a single leaf puts significant leverage on one hinge set, and splitting it into two leaves is kinder to the gate and the motor both.`,
      },
      {
        q: 'My driveway slopes. Will a swing gate work?',
        a: 'It depends how much and in which direction. An arm motor assumes the leaf travels through a reasonably level arc, and a driveway that rises through that arc makes the leaf fight the gradient on every cycle \u2014 the motor absorbs the difference until it stops being able to. A mild fall away from the gate is usually fine. Where the rise is real, the honest answer is a wheel-drive roller gate rather than a bigger arm motor, and we will say so at the survey instead of selling you the motor you asked for.',
      },
      {
        q: 'How much clearance does a swing gate need inside?',
        a: 'The full arc of each leaf has to stay clear, which in practice means nothing parked, planted or stored within the sweep. This is the most common reason a swing gate is the wrong answer on a compact Bengaluru plot — the driveway is short enough that an opening leaf would reach the car. We check the arc at the survey with the gate open, and if it does not work we say so and discuss sliding or wheel-drive instead.',
      },
      {
        q: 'My gate pillars are old. Is that a problem?',
        a: 'It can be, and it is worth knowing before rather than after. An arm motor transfers force into the pillar every time the gate moves, which is a different load from a gate that is simply hung on it. Sound masonry is usually fine. A pillar that is cracked, leaning or loose at the base needs attention first, and we will tell you that at the survey rather than fitting a motor onto it.',
      },
      {
        q: 'Can a swing gate have voice control?',
        a: 'Yes. Swing openers are DC motors, and DC is the tier where voice control through Alexa or Google Home is possible on compatible setups. Remote control is standard regardless, with two remotes in the kit, and RFID access can be added as an add-on quoted after the survey.',
      },
      {
        q: 'Will the motor work if the gate is heavy?',
        a: 'Arm motors are sized by leaf weight and width together, and heavy leaves are routine provided the motor is matched to them and the hinges are in good order. What causes trouble is a heavy leaf on tired hinges, because the motor then fights both the weight and the sag. That combination is exactly what the survey is for.',
      },
    ],
    guides: [],
  },

  'roller-gate-automation': {
    slug: 'roller-gate-automation',
    contactService: 'entrance-automation',
    metaTitle: `Roller Gate Automation Bangalore from ${ROLLER.dc.from}`,
    metaDescription: `Wheel-drive roller gate motors in Bengaluru from ${ROLLER.dc.from} incl. GST — for sloped driveways and plots with no room to slide. Free site survey.`,
    serviceName: 'Roller Gate Automation in Bangalore',
    serviceType: 'Roller Gate Automation',
    priceLow: String(ROLLER.dc.minPrice),
    priceHigh: '200000',
    whatsappMessage: 'Hi ITSolute, I want a roller gate motor quote in Bangalore.',
    heroIntent:
      'Wheel-drive motor at the bottom of a swing gate leaf rolling along a sloped driveway in Bengaluru',
    heroAlt:
      'Wheel-drive roller gate motor at the base of a gate leaf on a sloped Bengaluru driveway',
    hero: {
      eyebrow: 'ROLLER GATES · BENGALURU',
      headline: 'Wheel-Drive Roller Gate Motors in Bangalore',
      sub: `Automatic rolling gates from ${ROLLER.dc.from} incl. GST — a swing gate driven by wheel motors that roll along the ground, for sites with no side space and driveways too sloped for arm motors.`,
    },
    install: {
      eyebrow: 'WHAT A ROLLER GATE IS',
      headline: 'Wheel-driven gates, not rolling shutters.',
      items: [
        {
          icon: Gauge,
          title: 'First, the thing people mean',
          body: 'A roller gate here means a swing gate with a motorised wheel at the bottom of each leaf, rolling along the ground to open it. It is not a rolling shutter, and we do not install shutters.',
        },
        {
          icon: DoorOpen,
          title: 'How it differs from an arm motor',
          body: 'An arm motor pushes the leaf from the pillar. A wheel motor carries the leaf from below. On a sloped or uneven approach the wheel copes where an arm would bind.',
        },
        {
          icon: ShieldCheck,
          title: 'Safety sensors',
          body: 'A photocell pair across the opening, in the starting price. The leaf still sweeps through the driveway, so the same clearance rules apply as for any swing gate.',
        },
        {
          icon: BatteryCharging,
          title: 'DC with battery backup',
          body: `Wheel-drive motors are DC, so battery backup on two 12V batteries is available — built in on some brands, a ${BATTERY_ADDON} add-on on others — along with voice control on compatible setups.`,
        },
      ],
    },
    who: {
      eyebrow: 'WHO IT’S FOR',
      headline: 'The sites where the other two will not work.',
      items: [
        'Plots with no run alongside the opening for a sliding gate to park into',
        'Driveways that rise or fall through the gate’s arc, common north and east of the city',
        'Uneven or settled approaches where an arm motor would bind mid-travel',
        'Wide, heavy leaves that benefit from being carried rather than pushed',
      ],
    },
    why: {
      eyebrow: 'WHY ITSOLUTE',
      headline: 'We recommend this when it is the right answer, not by default.',
      points: [
        {
          title: 'It is the third choice for a reason',
          body: 'Sliding is usually cheapest and simplest, arm-type next. Wheel-drive exists for the sites where neither fits, and we will tell you if yours is not one of them rather than selling up.',
        },
        {
          title: 'The running surface matters',
          body: 'The wheel rolls on your driveway, so the surface under the arc has to be sound and reasonably even. We check it at the survey, because a wheel on a broken surface is a motor working against the ground.',
        },
        {
          title: 'Slope measured, not eyeballed',
          body: 'Wheel-drive copes with slope, but there is a limit. We measure the fall across the arc instead of judging it by eye, and say honestly if the gradient is beyond what the motor should handle.',
        },
        {
          title: 'No shutter confusion',
          body: 'If what you actually want is a rolling shutter, we will say so at the enquiry rather than at the survey. We do not install shutters, and sending you to the right trade early is cheaper for you.',
        },
      ],
    },
    process: {
      eyebrow: 'HOW IT GOES',
      headline: 'The ground gets surveyed as much as the gate.',
      steps: [
        {
          index: '01',
          title: 'Survey the arc and the surface',
          body: 'We walk the gate through its full opening, measure the fall across that arc, and inspect the driveway surface the wheel will run on.',
        },
        {
          index: '02',
          title: 'Quote',
          body: 'Motor tier, installation, and any surface work needed under the arc — written, fixed and itemised before anything is ordered.',
        },
        {
          index: '03',
          title: 'Fit the wheel drives',
          body: 'Wheel motor mounted at the base of each leaf, photocells aligned across the opening, travel limits set, and the leaves synchronised on a double gate.',
        },
        {
          index: '04',
          title: 'Handover',
          body: 'Remotes paired, manual release shown, and a walk-through of what the gate will do if something obstructs the wheel.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BENGALURU PRICING',
      headline: 'Roller gate motor prices in Bengaluru.',
      rows: tier('Roller gate'),
      disclaimer: PRICE_DISCLAIMER,
    },
    amc: {
      eyebrow: 'AFTER INSTALLATION',
      headline: 'The wheel meets the ground, so the ground matters.',
      body: 'A wheel-drive motor depends on its contact with the driveway. Grit, a settled patch or a cracked surface under the arc all change how the wheel grips, and the motor compensates until it cannot.',
      points: [
        'Wheel condition and grip checked along the running arc',
        'Driveway surface under the arc inspected for settling and cracking',
        'Mountings at the base of each leaf re-tightened',
        'Photocells realigned and limits re-set',
        'Battery condition and manual release checked',
      ],
    },
    faqs: [
      {
        q: 'Is a roller gate the same as a rolling shutter?',
        a: 'No, and the words cause genuine confusion so it is worth being blunt. A rolling shutter is a slatted curtain that rolls up into a box above the opening, usually on a shopfront. A roller gate, in the sense we use it, is an ordinary swing gate with a motorised wheel at the bottom of each leaf that rolls along the ground. We install the second and not the first.',
      },
      {
        q: 'Why choose wheel-drive over an arm motor?',
        a: 'Because of the ground. An arm motor assumes the leaf swings through a reasonably level arc; where the driveway rises or falls through that arc, the arm has to fight the change and binds. A wheel motor carries the leaf from below and follows the surface instead. On the sloped plots common north and east of Bengaluru, that difference decides whether the gate works in its third year.',
      },
      {
        q: 'How steep is too steep?',
        a: 'There is a limit, and it depends on the motor and the weight of the leaf, which is why we measure the fall across the arc at the survey rather than judging it by eye. Mild to moderate slope is routine. Where the gradient is genuinely severe we will say the gate should be re-hung or the approach re-levelled first, because no motor fixes a gate fighting gravity on every cycle.',
      },
      {
        q: 'What surface does the wheel need?',
        a: 'Something sound and reasonably even across the arc the gate travels. Concrete and good paving are both fine. Loose gravel, a badly settled patch or a cracked section are not, because the wheel loses grip or drops into it, and the motor then works against the ground rather than the gate. If the surface needs attention we quote that separately so you can see what it costs.',
      },
      {
        q: 'Can a roller gate have battery backup?',
        a: `Yes. Wheel-drive motors are DC, so they take battery backup on two 12V batteries — built in on some brands and a ${BATTERY_ADDON} add-on on others. Being DC also means voice control is possible on compatible setups. As with every motor we fit, there is a manual release key so the gate can be opened by hand regardless.`,
      },
      {
        q: 'Can you convert my existing swing gate to wheel-drive?',
        a: 'Usually yes, and that is the common case rather than the exception — wheel-drive is often chosen precisely because an existing swing gate cannot be arm-automated on its site. The gate needs leaves stiff enough to carry the drive at the base and a sound surface beneath. We assess both at the survey and quote the conversion against what is actually there.',
      },
    ],
    guides: [],
  },

  'boom-barriers': {
    slug: 'boom-barriers',
    contactService: 'entrance-automation',
    metaTitle: `Boom Barriers in Bangalore from ${BARRIER.dc.from}`,
    metaDescription: `Automatic boom barriers for Bengaluru apartments, offices and parking from ${BARRIER.dc.from} incl. GST. Arm up to 5 m. Free site survey.`,
    serviceName: 'Boom Barrier Installation in Bangalore',
    serviceType: 'Boom Barrier Installation',
    priceLow: String(BARRIER.dc.minPrice),
    priceHigh: '250000',
    whatsappMessage: 'Hi ITSolute, I want a boom barrier quote in Bangalore.',
    heroIntent:
      'Boom barrier arm raised at the vehicle entrance of a Bengaluru apartment complex with a guard cabin beside it',
    heroAlt: 'Boom barrier at the vehicle entrance of an apartment complex in Bengaluru',
    hero: {
      eyebrow: 'BOOM BARRIERS · BENGALURU',
      headline: 'Automatic Boom Barriers for Apartments, Offices & Parking',
      sub: `Barrier gates from ${BARRIER.dc.from} incl. GST, with an arm up to 5 m — for gated communities, tech park entrances and basement car parks across Bengaluru.`,
    },
    install: {
      eyebrow: 'WHAT WE INSTALL',
      headline: 'Built for the entrance that never stops.',
      items: [
        {
          icon: Car,
          title: 'DC barrier, arm up to 5 m',
          body: 'The arm length is set by the lane width, not the frontage. A barrier is chosen for cycles per day as much as for span, because that is what wears it.',
        },
        {
          icon: RadioTower,
          title: 'Remote as standard, RFID as an add-on',
          body: 'Two remotes come with the kit. For a community issuing access per resident or per vehicle, RFID readers, tags and cards are an add-on quoted after the survey.',
        },
        {
          icon: ShieldCheck,
          title: 'Safety sensors',
          body: 'A photocell pair so the arm does not come down on a vehicle that is still under it. On a busy entrance this is the component that earns its place fastest.',
        },
        {
          icon: BatteryCharging,
          title: 'Battery backup',
          body: `Barriers are DC, so battery backup on two 12V batteries is available — built in on some brands, a ${BATTERY_ADDON} add-on on others. There is a manual release to raise the arm by hand.`,
        },
      ],
    },
    who: {
      eyebrow: 'WHO IT’S FOR',
      headline: 'Entrances where a gate would be too slow.',
      items: [
        'Gated communities and apartment complexes with a guarded entrance',
        'Tech park and office campus vehicle gates',
        'Basement and podium car parks with a single lane in and out',
        'Factory and warehouse yards separating vehicle and pedestrian traffic',
      ],
    },
    why: {
      eyebrow: 'WHY ITSOLUTE',
      headline: 'Sized for traffic, quoted for a committee.',
      points: [
        {
          title: 'Cycles decide the specification',
          body: 'A barrier at a 300-flat complex may cycle a thousand times a day. Specifying it like a barrier at a small office is the reason some fail inside a year, so we ask about traffic before we quote.',
        },
        {
          title: 'The guard has to be able to use it',
          body: 'Whatever the access method, the person on the gate at 2am has to operate it without a manual. We set it up with that in mind and walk the security team through it at handover.',
        },
        {
          title: 'Written for approval',
          body: 'Associations need a quote that survives a committee meeting. Ours is itemised and fixed, and we are happy to take questions from the association directly rather than through you.',
        },
        {
          title: 'It can join the rest of the entrance',
          body: 'Because we also fit CCTV, networking and access control, the barrier can be planned with the camera that watches it and the cabling that feeds both.',
        },
      ],
    },
    process: {
      eyebrow: 'HOW IT GOES',
      headline: 'Count the traffic, then specify.',
      steps: [
        {
          index: '01',
          title: 'Survey the lane',
          body: 'We measure the lane width, look at where the barrier can be founded, ask how many vehicles pass on a typical day, and see how the guard currently works.',
        },
        {
          index: '02',
          title: 'Quote for the committee',
          body: 'Arm length, motor duty, access method and installation, itemised in writing so it can go to an association or a facilities team without translation.',
        },
        {
          index: '03',
          title: 'Installation',
          body: 'Barrier founded and mounted, arm balanced, photocells aligned across the lane, access hardware commissioned, and the whole thing cycled under load before we leave.',
        },
        {
          index: '04',
          title: 'Handover and training',
          body: 'The security team is shown normal operation, the manual release, and what to do if the arm stops mid-travel. Warranty paperwork handed over, from 2 years and varying by brand.',
        },
      ],
    },
    pricing: {
      eyebrow: 'BENGALURU PRICING',
      headline: 'Boom barrier price in Bengaluru.',
      rows: tier('Boom barrier'),
      disclaimer: PRICE_DISCLAIMER,
    },
    amc: {
      eyebrow: 'AFTER INSTALLATION',
      headline: 'The hardest-working thing at the entrance.',
      body: 'Nothing else we install cycles as often as a barrier at a busy community. Motor, arm balance, loop detectors and access hardware all wear on a schedule you can plan for or be surprised by, and for a shared entrance the surprise version blocks everyone.',
      points: [
        'Motor and gearbox checked under load',
        'Arm balance and spring tension re-set',
        'Loop detectors and photocells tested across the lane',
        'Access hardware and issued tags audited',
        'Battery condition and manual release checked',
      ],
    },
    faqs: [
      {
        q: 'What does a boom barrier cost in Bangalore?',
        a: `From ${BARRIER.dc.from} including GST for a DC barrier with an arm up to 5 m, covering the barrier, 2 remotes and a safety sensor pair. Installation is quoted after the free site survey because the foundation and cable run vary by site. RFID access, which most communities end up wanting, is an add-on quoted separately after the survey.`,
      },
      {
        q: 'How do residents open it — remotes or cards?',
        a: 'Both work and most communities end up with a mix. Remotes suit a smaller complex where every resident vehicle is known. RFID tags or cards, issued per vehicle, suit a larger one where the list changes as flats turn over, because a tag can be deactivated when someone leaves while a remote cannot. We go through the trade-off at the survey with the actual resident count rather than in the abstract.',
      },
      {
        q: 'What does the guard do when the power goes?',
        a: `The barrier keeps working if battery backup is fitted, which for a shared entrance we treat as essential rather than optional — two 12V batteries, built in on some brands and a ${BATTERY_ADDON} add-on on others. Beyond that there is a manual release so the arm can be raised by hand and left up until power returns. We show the security team both at handover, because the person who needs it at 2am is rarely the person who signed the contract.`,
      },
      {
        q: 'Our association needs to approve this first. How does that work?',
        a: 'That is the normal path and we are set up for it. The quote comes itemised and fixed in writing, specifying arm length, motor duty, access method and installation separately, so a committee can see what each part costs. We will answer technical questions from the association directly, and we do not treat an approval timeline as a reason to re-price. Nothing is ordered until you confirm.',
      },
      {
        q: 'Will it work in a basement car park?',
        a: 'Usually, and the constraints are different from a surface entrance. Headroom has to clear the raised arm, the foundation has to work with an existing slab rather than fresh ground, and ventilation and drainage affect where the housing can sit. All three get checked at the survey. Basement lanes also tend to be narrower, which often means a shorter arm than people expect.',
      },
      {
        q: 'How often does a barrier need servicing?',
        a: 'More often than a gate, because it cycles far more. A barrier at a large complex can move a thousand times a day, and arm balance, spring tension and loop detectors all drift under that load. We recommend a scheduled AMC for any shared entrance rather than waiting for a failure, since a barrier stuck down blocks every resident at once and a barrier stuck up defeats the point of having one.',
      },
    ],
    guides: [],
  },

  'gate-repair-amc': {
    slug: 'gate-repair-amc',
    contactService: 'entrance-automation',
    metaTitle: 'Gate Automation Service & AMC in Bangalore',
    metaDescription:
      'Automatic gate service, repair and AMC in Bengaluru. Gate not closing, remote replacement, sensor faults. Existing installations assessed on site.',
    serviceName: 'Automatic Gate Service and Repair in Bangalore',
    serviceType: 'Automatic Gate Repair and Maintenance',
    priceLow: '',
    priceHigh: '',
    whatsappMessage: 'Hi ITSolute, my automatic gate in Bangalore needs service.',
    heroIntent:
      'Technician servicing the motor of an automatic sliding gate at a Bengaluru property, cover removed',
    heroAlt: 'Technician servicing an automatic gate motor in Bengaluru',
    hero: {
      eyebrow: 'SERVICE & AMC · BENGALURU',
      headline: 'Automatic Gate Service, Repair & AMC in Bangalore',
      sub: 'Gate not closing, sensors tripping, a remote that stopped working — auto gate service across Bengaluru. Existing installations are assessed at the site visit before we take them on.',
    },
    install: {
      eyebrow: 'WHAT WE SEE MOST',
      headline: 'Four faults account for most call-outs.',
      items: [
        {
          icon: Siren,
          title: 'Gate not closing',
          body: 'Most often a safety sensor seeing something that is not there — a misaligned photocell, a dirty lens, or a plant that has grown into the beam. The gate is doing its job; the sensor is wrong.',
        },
        {
          icon: RadioTower,
          title: 'Remote replacement',
          body: 'Remotes get lost, broken or simply run out of battery. Replacing and re-pairing is routine, and it is also the moment to audit who still holds a working one.',
        },
        {
          icon: Settings,
          title: 'Dragging, grinding or stalling',
          body: 'Usually mechanical rather than electrical: grit in a sliding track, a worn roller, a dropped hinge on a swing gate. The motor is the symptom, not the cause.',
        },
        {
          icon: BatteryCharging,
          title: 'Dead in a power cut',
          body: 'A DC motor whose backup batteries have reached the end of their life, or an AC motor that was never wired to the inverter connection in the first place.',
        },
      ],
    },
    who: {
      eyebrow: 'WHO IT’S FOR',
      headline: 'Gates we installed, and gates we did not.',
      items: [
        'Owners whose gate was installed by someone else and now needs attention',
        'Apartment associations whose barrier or gate has outlived its original installer',
        'Properties changing hands where nobody knows what was fitted',
        'Anyone wanting a scheduled AMC rather than waiting for the next failure',
      ],
    },
    why: {
      eyebrow: 'HOW WE WORK ON THIS',
      headline: 'Assessed first, taken on second.',
      points: [
        {
          title: 'We assess before we commit',
          body: 'Existing installations are assessed at the site visit before we take them on. Some are straightforward to adopt; some were installed in a way we would not be able to stand behind. We tell you which yours is before any AMC is discussed.',
        },
        {
          title: 'No blanket brand claims',
          body: 'We do not claim to service every make. What we can service depends on the specific equipment and what parts are obtainable for it, and that is a question answered at the site visit rather than on a web page.',
        },
        {
          title: 'Diagnosis before parts',
          body: 'A gate that will not close is usually a sensor, not a motor. We find the actual fault before quoting anything, because replacing a working motor is an expensive way to clean a photocell.',
        },
        {
          title: 'AMC is offered, not assumed',
          body: 'An AMC is something we offer once we have seen the installation and judged it maintainable. It is not automatic, and we would rather decline than sign a contract for equipment we cannot keep running.',
        },
      ],
    },
    process: {
      eyebrow: 'HOW IT GOES',
      headline: 'A site visit, then an honest answer.',
      steps: [
        {
          index: '01',
          title: 'Tell us what it is doing',
          body: 'A short video of the gate attempting to operate tells us more than a description does, and often narrows the fault before anyone travels.',
        },
        {
          index: '02',
          title: 'Site visit and assessment',
          body: 'We diagnose the fault and assess the installation as a whole — what was fitted, how, and whether it is something we can maintain.',
        },
        {
          index: '03',
          title: 'What we can and cannot do',
          body: 'A written answer: the repair and its cost, and separately whether we are able to take the installation on under AMC. If the answer is no, you get the reason.',
        },
        {
          index: '04',
          title: 'Repair, then a schedule if you want one',
          body: 'The fault fixed first. An AMC, where we have agreed one is workable, is set up separately and can be combined with your other ITSolute contracts.',
        },
      ],
    },
    pricing: {
      eyebrow: 'PRICING',
      headline: 'Quoted after the site visit.',
      rows: [],
      disclaimer:
        'Repairs are not priced in advance. The fault has to be diagnosed before anyone can say honestly what fixing it costs, and quoting a figure before seeing the gate would be a guess. We give you the cost in writing after the site visit, and you decide then.',
    },
    amc: {
      eyebrow: 'AMC',
      headline: 'A schedule, where the installation supports one.',
      body: 'An AMC moves a gate from being fixed when it breaks to being checked before it does. We offer one once we have seen the installation and judged it maintainable — that assessment happens at the site visit, and the answer is sometimes no.',
      points: [
        'Scheduled visits rather than call-outs after a failure',
        'Track, rack, hinges and mountings checked for wear',
        'Safety sensors realigned and tested',
        'Battery condition checked and remotes audited',
        'Can be combined with your other ITSolute AMC under one contract',
      ],
    },
    faqs: [
      {
        q: 'Will you service a gate someone else installed?',
        a: 'Often, but not automatically. Existing installations are assessed at the site visit before we take them on: we look at what was fitted, how it was wired and mounted, and whether parts for it are obtainable. Plenty of other people’s work is perfectly sound and we are glad to adopt it. Some installations were done in a way we would not be able to stand behind, and in that case we say so rather than taking your money and inheriting the problem.',
      },
      {
        q: 'My gate has stopped closing. What is wrong?',
        a: 'Most often the safety sensors. A photocell pair that has drifted out of alignment, collected dust on the lens, or has a plant growing through the beam will read an obstruction that is not there, and a correctly behaving gate then refuses to close. It is usually a quick fix. Less often it is a limit setting that has shifted or something mechanical binding near the closed position, which the site visit distinguishes.',
      },
      {
        q: 'Can you supply a replacement remote?',
        a: 'Usually yes, depending on the equipment. Whether a replacement can be paired comes down to the specific motor and controller fitted, which is one of the things we check at the site visit. While we are there it is worth auditing who still holds working remotes, particularly in a shared building where handsets accumulate with people who have moved out.',
      },
      {
        q: 'Do you charge for the site visit?',
        a: 'The visit for an existing installation is a diagnostic call rather than a free sales survey, and we tell you the charge when you book rather than on arrival. That differs from a new installation, where the site survey is free. Once we have diagnosed the fault you get the repair cost in writing and decide from there, with no obligation to proceed.',
      },
      {
        q: 'How quickly can you come out?',
        a: 'It depends on where you are in the city and the day’s load, and we will give you a realistic time when you call rather than an optimistic one. A gate stuck closed at a shared entrance is treated as more urgent than one that is simply slow, because the first blocks everybody. Sending a short video when you first message genuinely helps, since it sometimes lets us bring the likely part on the first visit.',
      },
      {
        q: 'What does an AMC cover, and can anyone get one?',
        a: 'It covers scheduled servicing: track and mechanism wear, sensor alignment, battery condition, remote audit and the mountings. Not anyone — we offer an AMC once we have assessed the installation and judged that we can keep it running. If we cannot get parts for the equipment, or it was installed in a way that makes reliable maintenance impossible, we will decline and explain why instead of signing a contract we cannot honour.',
      },
    ],
    guides: [],
  },

  'video-door-phones': {
    slug: 'video-door-phones',
    contactService: 'video-door-phones',
    metaTitle: 'Video Door Phones in Bangalore — Flats & Villas',
    metaDescription:
      'Video door phone installation in Bengaluru for flats and villas. Multi-apartment panels, app answering on selected models. Free site survey.',
    serviceName: 'Video Door Phone Installation in Bangalore',
    serviceType: 'Video Door Phone Installation',
    priceLow: '',
    priceHigh: '',
    whatsappMessage: 'Hi ITSolute, I want a video door phone in Bangalore.',
    heroIntent:
      'Indoor video door phone monitor in a Bengaluru apartment hallway showing a visitor at the lobby panel',
    heroAlt: 'Video door phone monitor in a Bengaluru flat showing a visitor at the entrance panel',
    hero: {
      eyebrow: 'VIDEO DOOR PHONES · BENGALURU',
      headline: 'Video Door Phone Installation in Bangalore',
      sub: 'See and speak to whoever is at the door before opening it — for flats where one panel serves many homes, and for villas where the gate is a walk from the house.',
    },
    install: {
      eyebrow: 'WHAT WE INSTALL',
      headline: 'Two quite different jobs, under one name.',
      items: [
        {
          icon: Users,
          title: 'Multi-flat apartment systems',
          body: 'One panel at the lobby or main entrance calls the specific flat, with a monitor in each. Sizing depends on the flat count and what risers the building already has.',
        },
        {
          icon: Video,
          title: 'Villa systems',
          body: 'An outdoor unit at the gate and a monitor inside the house. The distance from gate to living room is the thing that decides wired or Wi-Fi here.',
        },
        {
          icon: Smartphone,
          title: 'Answer on your phone — on selected models',
          body: 'On selected models the call also reaches a mobile app, so the door can be answered from another room or another city. Visitor snapshots and recording are also model-dependent.',
        },
        {
          icon: Wifi,
          title: 'Wired or Wi-Fi',
          body: 'Wired is steadier and suits a building under construction or renovation. Wi-Fi avoids the cable run, which usually decides it in a finished flat.',
        },
      ],
    },
    who: {
      eyebrow: 'WHO IT’S FOR',
      headline: 'Doors that strangers reach before you do.',
      items: [
        'Flats in apartment blocks, where the lobby panel is shared and the monitor is yours',
        'Villas in gated layouts where the gate is well away from the front door',
        'Rented flats where a tenant wants to see the door without altering the building',
        'Homes where deliveries arrive while nobody is expecting them',
      ],
    },
    why: {
      eyebrow: 'WHY ITSOLUTE',
      headline: 'The building decides more than the model does.',
      points: [
        {
          title: 'We check the risers first',
          body: 'In a finished apartment block, whether a multi-flat system is practical comes down to what cable routes already exist. That gets established at the survey, before anyone talks about models.',
        },
        {
          title: 'Wi-Fi measured at the gate',
          body: 'A villa gate thirty metres from the router through a concrete wall is a weak Wi-Fi location. We measure it rather than assume, because a door phone that drops calls is worse than none.',
        },
        {
          title: 'It can open the gate',
          body: 'On compatible setups the indoor unit can trigger your automatic gate or release a smart lock, so answering the visitor and letting them in are one action. We confirm the combination before quoting.',
        },
        {
          title: 'Straight about what the model does',
          body: 'App answering, recording and snapshots vary by model and cannot be added later. We say which your chosen unit supports before you buy it.',
        },
      ],
    },
    process: {
      eyebrow: 'HOW IT GOES',
      headline: 'Survey the route, then choose the unit.',
      steps: [
        {
          index: '01',
          title: 'Free site survey',
          body: 'We look at the distance from panel to monitor, what cabling exists, and in a block, how many flats and what the association allows.',
        },
        {
          index: '02',
          title: 'Written quote',
          body: 'The exact units, how many monitors, and plainly which features that model supports. Nothing ordered until you approve it.',
        },
        {
          index: '03',
          title: 'Installation',
          body: 'Outdoor panel mounted at a sensible height and angle, cable run or network joined, monitors fitted, and any gate or lock integration tested.',
        },
        {
          index: '04',
          title: 'Handover',
          body: 'We walk you through answering, the app where the model has one, and what to do if the screen goes dark.',
        },
      ],
    },
    pricing: {
      eyebrow: 'PRICING',
      headline: 'Quoted after the survey.',
      rows: [],
      disclaimer:
        'Door phones vary too much by model and by building — wired or Wi-Fi, one monitor or forty, recording or not — for a single starting figure to be useful. We quote in writing after the free site survey.',
    },
    amc: {
      eyebrow: 'AFTER INSTALLATION',
      headline: 'The outdoor unit lives outdoors.',
      body: 'A lobby panel is touched dozens of times a day and a villa gate unit sits in sun and rain year round. Both benefit from being checked on a schedule rather than when the screen goes dark.',
      points: [
        'Outdoor panel cleaned, sealed and checked for water ingress',
        'Camera angle and night visibility re-checked',
        'Call, door release and gate trigger tested end to end',
        'App and network settings re-checked on models that use them',
        'Monitor condition checked in each flat on a shared system',
      ],
    },
    faqs: [
      {
        q: 'Can this work in an apartment with many flats?',
        a: 'Yes, and it is a different job from a house. One panel at the main entrance calls the specific flat and each flat gets its own monitor. What makes it harder in a finished Bengaluru block is not the electronics but the building: the panel has to be sized for the flat count and the cabling has to reach every one of them, which depends entirely on the risers and conduit already there. Under construction it is straightforward; retrofitted it needs the survey before anyone quotes.',
      },
      {
        q: 'I rent my flat. Can I still have one?',
        a: 'Often yes, depending on what your agreement allows and how much fixing is involved. Wi-Fi models avoid running new cable, which is usually the sticking point with a landlord, and some arrangements can be removed when you leave. What we would not do is make permanent alterations to a building you do not own without the owner’s agreement. Tell us the situation at the survey and we will say what is realistic.',
      },
      {
        q: 'Can it open the gate from inside the house?',
        a: 'On compatible setups, yes — the indoor unit, or the app on models that have one, can trigger an automatic gate or release a smart lock. For a villa where the gate is a walk from the front door that is usually the feature that justifies the whole system. It depends on both the door phone and the gate controller supporting it, so we confirm the specific combination before quoting rather than promising it in advance.',
      },
      {
        q: 'Does it keep working during a power cut?',
        a: 'Not on its own — the units run on mains power. Where that matters we wire the system to your inverter connection during installation, which is the same approach we take with AC gate motors and is far easier to plan at install than to retrofit. Some models hold a short internal backup, but how long varies by model and is not something to build around.',
      },
      {
        q: 'Who maintains the system in a shared building?',
        a: 'Usually the association, under one AMC covering the lobby panel and the monitors in all the flats, which is simpler than each owner arranging their own. The panel takes constant handling and weather, and a monitor failing in one flat is a different call-out from the panel failing for everybody. We set the contract up to reflect that difference rather than treating every unit the same.',
      },
      {
        q: 'Can I see who called while I was out?',
        a: 'On selected models, yes — visitor snapshots or recording give you a log of calls you missed. It is genuinely useful if deliveries arrive during the day, and it is one of the features that cannot be added to a unit that does not support it. If it matters to you, say so before the model is chosen rather than after it is on the wall.',
      },
    ],
    guides: [],
  },

  'smart-door-locks': {
    slug: 'smart-door-locks',
    contactService: 'smart-door-locks',
    metaTitle: 'Smart Door Locks in Bangalore — Fingerprint & PIN',
    metaDescription:
      'Smart door lock installation in Bengaluru for owners and rented flats. Fingerprint, PIN and card, with temporary codes on selected models. Free survey.',
    serviceName: 'Smart Door Lock Installation in Bangalore',
    serviceType: 'Smart Door Lock Installation',
    priceLow: '',
    priceHigh: '',
    whatsappMessage: 'Hi ITSolute, I want a smart door lock in Bangalore.',
    heroIntent:
      'Smart door lock with fingerprint reader and keypad on the front door of a Bengaluru apartment',
    heroAlt: 'Smart door lock with a fingerprint reader on a flat door in Bengaluru',
    hero: {
      eyebrow: 'SMART DOOR LOCKS · BENGALURU',
      headline: 'Smart Door Lock Installation in Bangalore',
      sub: 'Fingerprint, PIN or card depending on the model, with a mechanical key as backup — fitted to the door you already have, for owned and rented flats across Bengaluru.',
    },
    install: {
      eyebrow: 'WHAT WE INSTALL',
      headline: 'Several ways in, and always a way in.',
      items: [
        {
          icon: Fingerprint,
          title: 'Fingerprint and PIN',
          body: 'The two that get used daily. Which methods a lock has depends entirely on the model, so the combination is confirmed before you buy rather than after.',
        },
        {
          icon: ScanLine,
          title: 'Card and app — on selected models',
          body: 'RFID cards suit a household where not everyone wants to register a fingerprint. App unlocking over Bluetooth or Wi-Fi is available on selected models.',
        },
        {
          icon: KeyRound,
          title: 'Mechanical key backup',
          body: 'The override, and the reason a flat battery is an inconvenience rather than a locksmith call. Keep it somewhere other than inside the flat it opens.',
        },
        {
          icon: BatteryCharging,
          title: 'Battery powered, with warnings',
          body: 'These locks warn for days before the batteries run out, usually by beeping at every unlock. Changing them is a two-minute job we show you at handover.',
        },
      ],
    },
    who: {
      eyebrow: 'WHO IT’S FOR',
      headline: 'Doors with too many keys in circulation.',
      items: [
        'Owners tired of the spare key living with a neighbour',
        'Rented flats where keys have been copied by tenants nobody can now name',
        'Households where domestic help, a cook or a driver needs access on a schedule',
        'Families where someone always arrives home before the person with the key',
      ],
    },
    why: {
      eyebrow: 'WHY ITSOLUTE',
      headline: 'The door decides which locks are even possible.',
      points: [
        {
          title: 'Measured, not guessed',
          body: 'Door material, thickness, frame and the existing cutout determine which models fit. We measure at the survey, because discovering a thickness problem with a door half drilled is the bad version of this job.',
        },
        {
          title: 'Rented flats handled honestly',
          body: 'What can be fitted to a flat you do not own is a different question from what can be fitted to one you do. We will tell you which models are reversible and what needs the owner’s agreement.',
        },
        {
          title: 'Access you can take back',
          body: 'On selected models you can issue a temporary code to a guest or to domestic help and remove it afterwards. For most households this is the actual reason to stop using keys.',
        },
        {
          title: 'Alignment is the install',
          body: 'A smart lock on a door that does not close squarely strains every time it throws. Setting the alignment properly is most of the work and most of what makes it last.',
        },
      ],
    },
    process: {
      eyebrow: 'HOW IT GOES',
      headline: 'Measure the door, then pick the lock.',
      steps: [
        {
          index: '01',
          title: 'Free site survey',
          body: 'Door material, thickness, frame and existing cutout measured, and a conversation about who needs to get in and how.',
        },
        {
          index: '02',
          title: 'Written quote',
          body: 'The model named, with exactly which unlock methods it supports listed. For a rented flat, what is reversible is spelled out.',
        },
        {
          index: '03',
          title: 'Fitting and alignment',
          body: 'Lock fitted, alignment set so the bolt meets the frame cleanly, fingerprints and codes registered, and any door phone or gate integration tested.',
        },
        {
          index: '04',
          title: 'Handover',
          body: 'We show you how to add and remove users, change the batteries and use the mechanical key, then hand over the spare keys and warranty paperwork.',
        },
      ],
    },
    pricing: {
      eyebrow: 'PRICING',
      headline: 'Quoted after the survey.',
      rows: [],
      disclaimer:
        'Smart locks run from a simple fingerprint-and-PIN unit to a full app-connected lock, and the door itself affects what will fit. A single starting figure would mislead, so we quote in writing after the free site survey.',
    },
    amc: {
      eyebrow: 'AFTER INSTALLATION',
      headline: 'A lock used a hundred times a week.',
      body: 'Smart locks fail slowly and predictably — alignment drifts, a reader gets dirty, batteries go flat at the worst moment. Catching those on a schedule is cheaper than a lockout.',
      points: [
        'Alignment and strike plate re-checked as the door moves',
        'Fingerprint reader and keypad cleaned and tested',
        'Battery condition checked and users re-verified',
        'Stale users and old temporary codes cleared out',
        'Can be combined with your other ITSolute AMC under one contract',
      ],
    },
    faqs: [
      {
        q: 'Can I fit a smart lock in a rented flat?',
        a: 'Often, but it depends on your agreement and on how much the door has to be altered. Some models fit with minimal modification and can be removed and the original lock refitted when you leave, which is usually what makes it acceptable to an owner. Others require cutting the door, which is not something we would do to a property you do not own without the owner agreeing in writing. Tell us the situation at the survey and we will say which models are realistic.',
      },
      {
        q: 'Will it fit my flat door?',
        a: 'Usually, but the door decides rather than the lock. Material, thickness, the frame and the existing cutout determine which models can physically be fitted, and apartment doors in Bengaluru vary more than people expect between projects. Where a door is unusually thin or thick, or already cut for an awkward lock, that rules particular models out. It is measured at the survey rather than discovered during installation.',
      },
      {
        q: 'Can I give the cook or the cleaner their own access?',
        a: 'On selected models, yes, and it is usually the whole reason people switch. You can issue a code or register a fingerprint for domestic help and remove it when the arrangement ends, and on app-connected models you can set a code that expires on its own. The difference from a key is that a code you issue is one you can withdraw, whereas a lent key depends on it being returned.',
      },
      {
        q: 'What happens if the batteries die while I am out?',
        a: 'You will have had days of warning first — these locks beep or flash at every unlock well before the batteries are finished, so running one flat takes sustained ignoring. If it does happen, the mechanical key override opens the door, which is exactly why that key should live somewhere other than inside the flat. Some models also take an emergency power source at the keypad, though that varies by model.',
      },
      {
        q: 'Is a smart lock as secure as a normal one?',
        a: 'The bolt is the same idea — a physical bolt thrown into the frame, which is what actually resists force. What changes is authorisation: a fingerprint or a code cannot be copied the way a key can, and a code you suspect someone knows is changed in seconds rather than needing a locksmith. The weak point, when there is one, is fitting. A smart lock on a door that does not close squarely is weaker than a simple lock on a door that does.',
      },
      {
        q: 'Can it work with a video door phone?',
        a: 'On compatible setups, yes — the door phone’s indoor unit can release the lock, so you see the visitor, speak to them and let them in without walking to the door. In a flat that combination is more useful than either on its own. Whether a particular lock and a particular door phone will talk to each other depends on both, so we check the specific pairing before quoting it.',
      },
    ],
    guides: [],
  },
}

export function getBangaloreService(slug: string): EntranceProduct | null {
  return bangaloreServices[slug] ?? null
}

export function getAllBangaloreServiceSlugs(): string[] {
  return Object.keys(bangaloreServices)
}

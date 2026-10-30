import type { FAQ } from '@/lib/content/faqs'
import { GATE_FROM, BARRIER_FROM } from '@/lib/content/entrancePricing'

/**
 * /bangalore — the Bengaluru location page.
 *
 * Entrance automation leads, because that is what the office is there to sell
 * and what people search for. The other service lines get a paragraph, not a
 * section, so the page keeps one job.
 *
 * Everything about the office itself (address, hours, visit policy, map) comes
 * from LOCATIONS.bengaluru in lib/content/site.ts. Nothing here restates it,
 * because a second copy of an address is a second thing to get wrong.
 *
 * This office is appointment-only. No copy here may imply otherwise.
 */

export const BENGALURU_AREAS = [
  'Bellandur',
  'Sarjapur Road',
  'Whitefield',
  'HSR Layout',
  'Electronic City',
  'Marathahalli',
  'Koramangala',
] as const

export const bangaloreCopy = {
  hero: {
    eyebrow: 'ENTRANCE AUTOMATION \u00b7 BENGALURU',
    headline: 'Gate Automation & Entrance Automation in Bengaluru',
    sub: 'Automatic gates from ' + GATE_FROM + ' and boom barriers from ' + BARRIER_FROM + ', incl. GST \u2014 for villas, apartments, gated communities and offices across Bengaluru. Free site survey before anything is quoted.',
    whatsappMessage: 'Hi ITSolute, I want to automate an entrance in Bengaluru.',
  },
  intro: {
    eyebrow: 'WHY WE OPENED HERE',
    headline: 'Shared entrances, and a lot of them.',
    paragraphs: [
      'Bengaluru\u2019s entrance problems are mostly problems of scale. An apartment block has one gate and two hundred people who need through it. A gated community has a barrier, a guard, and a queue behind both at 9am. A villa on Sarjapur Road has a gate nobody wants to get out of the car for when it is raining. These are the same products we install across Kerala, sized and configured differently because the traffic through them is different.',
      'We opened a Bengaluru office so a site survey does not mean waiting for someone to drive up from Kottayam. The office at Bellandur is where surveys and installations across the city are run from, and visits there are by appointment \u2014 it is a working office, not a walk-in counter. The workshop and head office stay in Kottayam.',
    ],
  },
  products: {
    eyebrow: 'WHAT WE INSTALL',
    headline: 'The whole entrance, not just the gate.',
    items: [
      {
        title: 'Automatic gates',
        href: '/entrance-automation/automatic-gates',
        from: GATE_FROM,
        blurb: 'Sliding and swing gate automation for villas and apartment entrances, with safety sensors fitted as standard \u2014 which matters more where children and delivery riders share a driveway.',
      },
      {
        title: 'Boom barriers',
        href: '/entrance-automation/boom-barriers',
        from: BARRIER_FROM,
        blurb: 'For gated communities, tech-park offices and basement car parks \u2014 the entrances where a gate would be too slow for the number of vehicles passing through.',
      },
      {
        title: 'Video door phones',
        href: '/entrance-automation/video-door-phones',
        from: null,
        blurb: 'See and speak to a visitor before opening. Multi-apartment systems call the right flat from one panel at the main entrance.',
      },
      {
        title: 'Smart door locks',
        href: '/entrance-automation/smart-door-locks',
        from: null,
        blurb: 'Keyless entry for flats and villas, with codes you can issue to domestic help or a delivery and withdraw afterwards on selected models.',
      },
    ],
  },
  areas: {
    eyebrow: 'WHERE WE WORK',
    headline: 'Across Bengaluru.',
    body: 'We cover the whole city. These are the areas we are most often in, and the ones nearest the Bellandur office:',
  },
  other: {
    eyebrow: 'ALSO AVAILABLE',
    headline: 'The rest of what we do, from the same office.',
    body: 'Entrance automation is the focus in Bengaluru, but the other ITSolute service lines are available here too \u2014 CCTV, networking and office WiFi, business laptops and hardware, software licensing, and AMC contracts. If you are setting up or moving an office, it is usually one conversation rather than four suppliers.',
  },
  faqs: [
    {
      q: 'Do you work with apartments and gated communities?',
      a: 'Yes, and they are most of what we do in Bengaluru. A shared entrance is a different job from a private one: the barrier or gate cycles far more often, several people need to open it, and the association usually needs a written proposal before anything is approved. We survey the entrance, size the equipment for the actual traffic through it rather than the frontage, and give you a fixed written quote you can take to the committee. Access for residents is usually remotes or RFID tags issued per vehicle, which we quote after the survey.',
    },
    {
      q: 'Can you automate the gate at an independent villa?',
      a: 'Yes. Villa gates are usually sliding or swing, and both are straightforward provided the gate itself is sound and runs freely by hand. The things that decide the job are the width, the weight, whether there is room alongside to slide, and where power can come from. Automatic gates start at ' + GATE_FROM + ' including GST for the motor kit, 2 remotes and safety sensors; installation is quoted after the free site survey because it depends on your gate and site.',
    },
    {
      q: 'What happens during a power cut?',
      a: 'The gate keeps working, but how depends on the motor. A DC motor carries its own battery backup on two 12V batteries. An AC motor has no battery of its own, but it runs from your inverter connection, which we can wire in during installation. Every motor also has a manual release key, so the gate can always be opened by hand. For an apartment or a gated community this is worth settling at the survey rather than discovering during an outage with cars queuing.',
    },
    {
      q: 'How do I book a site survey in Bengaluru?',
      a: 'Call or WhatsApp us on the number on this page and tell us roughly where you are and what the entrance is \u2014 a photo of the gate helps more than a description. We will fix a time to come and look. The survey is free and comes with a fixed written quote; nothing is ordered before you approve it. Our Bengaluru office is at Bellandur, and visits there are by appointment, so please arrange a time with us rather than coming across unannounced.',
    },
    {
      q: 'Do you offer AMC in Bengaluru?',
      a: 'Yes, and for a shared entrance it is worth having rather than optional. A barrier at a gated community cycles hundreds of times a day, and the parts that wear \u2014 the motor, the arm balance, the loop detectors, the access hardware \u2014 wear on a schedule you can plan around or a schedule that surprises you. An AMC covers scheduled servicing of all of it, and can be combined with your other ITSolute AMC under one contract.',
    },
    {
      q: 'Which areas of Bengaluru do you cover?',
      a: 'The whole city. We are most often around Bellandur, Sarjapur Road, Whitefield, HSR Layout, Electronic City, Marathahalli and Koramangala, which are the areas closest to the office, but distance within Bengaluru is not a reason we would turn down a job \u2014 tell us where you are and we will come and survey it.',
    },
  ] as FAQ[],
}

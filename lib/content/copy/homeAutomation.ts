import { Blinds, RadioTower, Smartphone, Sun } from 'lucide-react'
import type { FAQ } from '@/lib/content/faqs'
import type { EntranceProduct } from '@/lib/content/copy/entranceAutomation'
import { CURTAIN_MOTOR_PRICES } from '@/lib/content/entrancePricing'

/**
 * Home Automation — the parts of a home people actually touch every day.
 *
 * Deliberately narrow. The hub links out to things we already do well (gates,
 * door phones, locks, CCTV) and adds one product of its own, curtain and
 * blind motors. There is no lighting/switch/scene catalogue here on purpose:
 * we do not publish a package we cannot stand behind, so full home automation
 * is one honest paragraph pointing at the site survey.
 *
 * Products reuse the entrance product page shape via components/products/
 * ProductPage, and their price slot in entrancePricing.ts is empty, so the
 * page shows "quoted after a free site survey" and emits no Offer schema.
 */

export const homeAutomationHub = {
  hero: {
    eyebrow: 'HOME AUTOMATION \u00b7 KERALA',
    headline: 'Home Automation in Kerala',
    sub: 'We automate the parts of a home you use every day, starting at the entrance \u2014 the gate, the door, and the curtains. Installed and serviced across Kottayam, Ernakulam, Pathanamthitta and Alappuzha.',
    whatsappMessage: 'Hi ITSolute, I want to ask about home automation.',
  },
  intro: {
    eyebrow: 'WHERE TO START',
    headline: 'Start with what annoys you daily.',
    body: 'Home automation goes wrong when it starts with a catalogue instead of a problem. The things worth automating first are the ones you do without thinking and resent every time \u2014 getting out of the car to push a gate, walking to the door to find out who rang, drawing the same curtains at the same hour. Each of those is a self-contained job that works on its own, and they add up if you want them to.',
  },
  products: {
    eyebrow: 'WHAT WE AUTOMATE',
    headline: 'Five things, each useful on its own.',
    items: [
      {
        title: 'Automatic gates',
        href: '/entrance-automation/automatic-gates',
        blurb: 'Sliding and swing gate automation with safety sensors as standard, opened from a remote and on DC motors by voice.',
      },
      {
        title: 'Video door phones',
        href: '/entrance-automation/video-door-phones',
        blurb: 'See and speak to whoever is at the entrance before you open it. Answering on your phone is available on selected models.',
      },
      {
        title: 'Smart door locks',
        href: '/entrance-automation/smart-door-locks',
        blurb: 'Fingerprint, PIN, card or app depending on the model, with a mechanical key backup, fitted to the door you already have.',
      },
      {
        title: 'Curtain & blind motors',
        href: '/home-automation/curtain-blind-motors',
        blurb: 'Track motors for curtains and tubular motors for roller blinds, with remote control as standard.',
      },
      {
        title: 'CCTV',
        href: '/cctv',
        blurb: 'Cameras, recording and remote viewing for the rest of the property, planned alongside the entrance rather than bolted on after.',
      },
    ],
  },
  voice: {
    eyebrow: 'VOICE AND APP CONTROL',
    headline: 'Useful when it works, irritating when it half works.',
    body: 'Alexa and Google Home can control compatible devices, and on the products we install that usually means DC gate motors, selected door phones and locks, and selected curtain motors. Which of your devices will respond to a voice command depends on the models chosen, so we confirm it at the survey rather than afterwards. App control is the more dependable of the two and is what most people end up using daily.',
    points: [
      {
        icon: Smartphone,
        title: 'App control',
        body: 'Available on selected models across gates, door phones, locks and curtain motors. Usually the one people keep using.',
      },
      {
        icon: RadioTower,
        title: 'Voice assistants',
        body: 'Alexa or Google Home on compatible devices. We tell you which of your chosen products support it before you buy them.',
      },
    ],
  },
  full: {
    eyebrow: 'GOING FURTHER',
    headline: 'Planning full home automation?',
    body: 'If you are thinking about lights, switches and scenes across a whole house, tell us about the home and we will advise what is possible during the free site survey. That advice depends on the building, the wiring and how far along the construction is, which is why there is no package listed here \u2014 a number quoted before anyone has seen the house would be a guess.',
  },
  faqs: [
    {
      q: 'Can I start small and add more later?',
      a: 'Yes, and it is usually the sensible way round. Each of these works on its own: a gate motor is useful whether or not you ever add a door phone, and a curtain motor does not need anything else to earn its place. Starting with one lets you find out what you actually use before committing to more. Where it helps, we plan the cabling at the first installation so a later addition does not mean reopening a wall.',
    },
    {
      q: 'Does home automation need new wiring?',
      a: 'It depends on the product and the house. Many of these fit existing homes: smart locks replace the lock on a door you already have, Wi-Fi door phones avoid a cable run to the gate, and a number of curtain motors run from a nearby point. Others genuinely want a cable \u2014 a wired door phone or a gate motor needs power at the gate. At the survey we tell you which of the things you want need wiring and which do not, before anything is ordered.',
    },
    {
      q: 'Will it work with Alexa or Google Home?',
      a: 'On compatible devices, yes. Among the products we install that typically means DC gate motors, selected door phone and lock models, and selected curtain motors \u2014 it is not a blanket feature, and a product that does not support it will not gain support later. If voice control matters to you, say so early and we will specify models that do it rather than finding out afterwards.',
    },
    {
      q: 'What happens in a power cut?',
      a: 'It varies by product, and it is worth asking before you buy rather than after. Gate motors can run from your home inverter connection or their own battery backup depending on the motor, and all of them have a manual release. Smart locks are battery powered, so a mains failure does not affect them, and they keep a mechanical key override. Curtain motors generally stop, and whether you can still draw the curtain by hand depends on the model. We go through this product by product at the survey.',
    },
    {
      q: 'Do you offer AMC for home automation?',
      a: 'Yes, and it can cover everything we have installed under one contract rather than a separate arrangement per product. That matters more than it sounds: a gate, a door phone, a lock and a set of curtain motors have little in common except that they all stop working eventually, and chasing four different people about it is the part people dislike. It can also be combined with your other ITSolute AMC.',
    },
  ] as FAQ[],
}

export const homeAutomationProducts: Record<string, EntranceProduct> = {
  'curtain-blind-motors': {
    slug: 'curtain-blind-motors',
    contactService: 'curtain-blind-motors',
    metaTitle: 'Motorised Curtains & Blinds in Kerala | ITSolute',
    metaDescription:
      'Track motors for curtains and tubular motors for roller blinds, remote as standard. Fitted to existing windows where possible. Free site survey in Kerala.',
    serviceName: 'Motorised Curtain and Blind Installation',
    serviceType: 'Motorised Curtain and Blind Installation',
    priceLow: '',
    priceHigh: '',
    whatsappMessage: 'Hi ITSolute, I want to motorise my curtains or blinds.',
    heroIntent:
      'Motorised curtains drawing across a wide living room window in a Kerala home, remote control in the foreground',
    hero: {
      eyebrow: 'CURTAIN & BLIND MOTORS \u00b7 KERALA',
      headline: 'Motorised Curtain & Blind Installation in Kerala',
      sub: 'Curtains and blinds that open on a remote, a schedule, or a word \u2014 for the tall windows and wide runs that are a nuisance to reach. Installed across Kottayam, Ernakulam, Pathanamthitta and Alappuzha.',
    },
    install: {
      eyebrow: 'WHAT WE INSTALL',
      headline: 'Two kinds of motor, depending on what hangs at the window.',
      items: [
        {
          icon: Blinds,
          title: 'Track motors for curtains',
          body: 'A motor drives the curtain along its track, so a wide or heavy pair opens evenly from one end to the other. Suits long runs and tall windows where reaching the cord is the problem in the first place.',
        },
        {
          icon: Sun,
          title: 'Tubular motors for roller blinds',
          body: 'The motor sits inside the roller tube, so there is nothing visible to add to the window. The usual choice for roller and similar blinds.',
        },
        {
          icon: RadioTower,
          title: 'Remote control as standard',
          body: 'Every motor we fit comes with remote control. One remote can usually handle several motors, so a room of windows moves together rather than one at a time.',
        },
        {
          icon: Smartphone,
          title: 'App, voice and schedules \u2014 on selected models',
          body: 'On selected models you can add app control, Alexa or Google Home, and schedules that open in the morning and close at dusk. Not every motor supports these, so we confirm the model before you buy.',
        },
      ],
    },
    who: {
      eyebrow: 'WHO IT\u2019S FOR',
      headline: 'Windows that are awkward, numerous, or both.',
      items: [
        'Living rooms with tall or wide windows that are a stretch to reach',
        'Bedrooms where opening the curtains without getting up is the whole point',
        'Offices and meeting rooms where glare has to be managed during a presentation',
        'Hotels and resorts wanting rooms that feel considered rather than manual',
      ],
    },
    why: {
      eyebrow: 'WHY ITSOLUTE',
      headline: 'The track and the window decide this, not the brochure.',
      points: [
        {
          title: 'We check before we promise',
          body: 'Whether your existing curtains can be motorised depends on the track, its condition and the weight it carries. We look at it during the survey and tell you plainly if the track has to be replaced.',
        },
        {
          title: 'Sized to the weight',
          body: 'A motor that is underpowered for a heavy lined curtain will struggle, get noisy, and fail early. We size to what actually hangs at your window, not to a nominal figure.',
        },
        {
          title: 'Planned with the power',
          body: 'Motors need power at the window. Where that means a point near the track, we plan it with the rest of the electrical work rather than running a visible cable afterwards.',
        },
        {
          title: 'Straight about features',
          body: 'App control, voice and scheduling are model-dependent. We tell you which of them the motor in your quote supports before you commit to it.',
        },
      ],
    },
    process: {
      eyebrow: 'HOW IT GOES',
      headline: 'Measure, check the track, then quote.',
      steps: [
        {
          index: '01',
          title: 'Free site survey',
          body: 'We measure the windows, check the track or blind, judge the weight of what hangs there, and find out where power can come from.',
        },
        {
          index: '02',
          title: 'Written quote',
          body: 'A fixed written quote naming the motor for each window, saying whether your existing track can be kept, and listing which features that model supports.',
        },
        {
          index: '03',
          title: 'Installation',
          body: 'Motors fitted, curtains or blinds rehung, travel limits set so they stop exactly where they should, and remotes paired to the rooms they belong to.',
        },
        {
          index: '04',
          title: 'Handover',
          body: 'We show you the remote, any app or schedule your model supports, and how to operate it if the motor ever stops \u2014 then hand over the warranty paperwork.',
        },
      ],
    },
    pricing: {
      eyebrow: 'PRICING',
      headline: 'Quoted after the survey.',
      rows: CURTAIN_MOTOR_PRICES,
      disclaimer:
        'The cost turns on the width of the window, the weight of the curtain, how many motors a room needs and whether the existing track can be kept. One starting figure would mislead on most of those, so we quote in writing after the free site survey.',
    },
    amc: {
      eyebrow: 'AFTER INSTALLATION',
      headline: 'Motors that run twice a day, every day.',
      body: 'A curtain motor does the same movement thousands of times. The things that go wrong are gradual \u2014 a track that needs cleaning, limits that drift a few centimetres, a remote nobody has changed the battery in \u2014 and all of them are cheaper to catch than to repair.',
      points: [
        'Track cleaned and checked for drag along its length',
        'Travel limits re-set so curtains still stop where they should',
        'Motor mountings and brackets re-tightened',
        'Remotes, schedules and app pairing re-checked on models that have them',
        'Can be combined with your other ITSolute AMC under one contract',
      ],
    },
    faqs: [
      {
        q: 'Can you motorise the curtains I already have?',
        a: 'Often, yes \u2014 the curtains themselves are rarely the problem. What decides it is the track: its type, its condition, and whether it can take the weight of what hangs on it smoothly. A good track in sound condition can usually be motorised. A track that already sticks when you pull it by hand will stick worse under a motor, so in that case we recommend replacing it and say so in the quote rather than fitting a motor onto something that will fight it.',
      },
      {
        q: 'Does it need new wiring?',
        a: 'The motor needs power at the window, so in most cases there is a point to provide near the track. In a house under construction or renovation that is trivial to plan. In a finished room it means either a nearby existing point or a short run, which we work out at the survey so you know before committing. Some motors are rechargeable and avoid a permanent point entirely, at the cost of charging them periodically \u2014 we will tell you if that suits your window.',
      },
      {
        q: 'Are they noisy?',
        a: 'Quieter than most people expect, but not silent. A correctly sized motor on a clean track makes a low hum for the few seconds it runs. Noise is almost always a symptom rather than a feature: a motor working too hard for the weight it carries, or a track that needs cleaning. That is why we size to what actually hangs at your window and check the track first \u2014 the quiet installation and the long-lasting one are the same installation.',
      },
      {
        q: 'What happens in a power cut?',
        a: 'The motor stops. Whether you can still draw the curtain by hand depends on the model: some disengage and move manually with a firm pull, others hold position and will not. It is worth settling before you buy rather than discovering it during an outage, so tell us if manual operation matters and we will specify accordingly. Where a room really cannot be left without it, the motors can be put on your inverter connection like other automation in the house.',
      },
      {
        q: 'Will it handle heavy curtains?',
        a: 'Yes, provided the motor is sized for them. Heavy lined curtains across a wide run are exactly the case where motorisation is most worth having, because they are the hardest to pull by hand. They are also the case where an underpowered motor fails soonest. We judge the weight at the survey rather than estimating from the window size, since two curtains of the same width can differ substantially once lining is involved.',
      },
      {
        q: 'Can I control them with Alexa or Google Home?',
        a: 'On selected models, yes, alongside app control and schedules that open in the morning and close at dusk. It is not standard across every motor, and a motor without it cannot gain it later, so it is one of the first things to settle if it matters to you. Remote control is included on everything we fit, and for many households that turns out to be what gets used daily.',
      },
    ],
    guides: [],
  },
}

export function getHomeAutomationProduct(slug: string): EntranceProduct | null {
  return homeAutomationProducts[slug] ?? null
}

export function getAllHomeAutomationSlugs(): string[] {
  return Object.keys(homeAutomationProducts)
}

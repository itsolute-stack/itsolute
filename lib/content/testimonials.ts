export type Testimonial = {
  quote: string
  name: string
  title: string
  company: string
  todo?: string
}

/**
 * The homepage testimonial section is OFF. The quotes below are realistic
 * placeholders, not real clients, and publishing them would be inventing
 * social proof — so the section is not rendered rather than shown with
 * invented quotes.
 *
 * TO RE-ENABLE: replace every entry below with a verified quote from a real,
 * named client (and delete its `todo`), then flip this flag to true. It is
 * read by app/(marketing)/page.tsx, which renders <TestimonialGrid /> only
 * when it is on. The component and this data file are otherwise untouched.
 */
export const SHOW_TESTIMONIALS = false

/**
 * NOTE: These are realistic placeholder testimonials.
 * Replace with verified quotes from real clients before launch.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      'We used to call three different people when something broke. Now we just text ITSolute. The printer, the WiFi, the billing software — it’s all one phone number.',
    name: 'Clinic Administrator',
    title: 'Operations',
    company: 'Multi-branch clinic, Kottayam',
    todo: 'TODO: Replace with real testimonial + named client',
  },
  {
    quote:
      'They set up our entire office IT — laptops, network, Microsoft 365 — in a week. Painless. We expected the usual vendor circus and got the opposite.',
    name: 'Founder',
    title: 'Managing Director',
    company: 'Real estate firm, Kochi',
    todo: 'TODO: Replace with real testimonial + named client',
  },
  {
    quote:
      'Their AMC has saved us so many hours we didn’t realise we were losing. Things just work now, and when they don’t, someone picks up.',
    name: 'Principal',
    title: 'Head of School',
    company: 'School group, Pathanamthitta',
    todo: 'TODO: Replace with real testimonial + named client',
  },
  {
    quote:
      'The custom dashboard paid for itself in three months. We finally have one place to look at the business.',
    name: 'Director',
    title: 'Operations Head',
    company: 'Logistics company, Ernakulam',
    todo: 'TODO: Replace with real testimonial + named client',
  },
]

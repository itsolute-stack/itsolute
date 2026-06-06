export type Testimonial = {
  quote: string
  name: string
  title: string
  company: string
  todo?: string
}

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
      'The Zoho One implementation paid for itself in three months. We finally have one place to look at the business.',
    name: 'Director',
    title: 'Operations Head',
    company: 'Logistics company, Ernakulam',
    todo: 'TODO: Replace with real testimonial + named client',
  },
]

import { Cpu, Wrench, Wifi, type LucideIcon } from 'lucide-react'

export type Scenario = {
  number: string
  icon: LucideIcon
  title: string
  body: string
  metric: string
  metricLabel: string
}

/**
 * Anonymized, walk-in-flavoured scenarios that prove capability without
 * naming clients. Three deliberate angles: hardware bulk supply, walk-in
 * laptop repair, and network installation — same three commercial lines
 * the home bento leads with.
 */
export const scenarios: Scenario[] = [
  {
    number: '01',
    icon: Cpu,
    title: 'Office of 12 needs new computers by Monday',
    body: 'A school in Pala called Friday afternoon. We configured refurbished i5 desktops with SSDs, Windows, and Office. Delivered, set up, and on-network by Sunday evening.',
    metric: '12 machines',
    metricLabel: 'One weekend turnaround',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'Cracked MacBook screen, day before a submission',
    body: 'Walk-in at Parthas Lane. Diagnosed cracked LCD assembly. Sourced a genuine replacement same day, fitted with a 90-day service warranty. Back on his desk by 6 PM.',
    metric: 'Same day',
    metricLabel: 'With a written warranty',
  },
  {
    number: '03',
    icon: Wifi,
    title: 'Three-floor clinic with WiFi dead zones',
    body: 'A Kottayam clinic could not get reliable WiFi in the basement lab. Site survey, mesh access points with a separate VLAN for patient data, structured cabling for the lab PCs.',
    metric: '3 floors',
    metricLabel: '18 LAN points · 2-day install',
  },
]

export const SCENARIOS_SECTION = {
  eyebrow: 'EVERY WEEK · IN OUR WORKSHOP',
  headline: 'A few situations we handle every week.',
  sub: 'Walk into Parthas Lane with a problem like one of these, and you walk out with a fix. No paperwork loops. No “we will get back to you.”',
  cta: {
    primary: { label: 'Visit our workshop', href: '/contact' },
    secondary: {
      label: 'WhatsApp a photo',
      message:
        'Hi ITSolute, I have an IT problem — sending a photo.',
    },
  },
  footnote:
    'Have something messier? Walk in, or send a photo on WhatsApp. We will tell you what is possible.',
} as const

import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { PageHero } from '@/components/shared/PageHero'
import { FinalCTA } from '@/components/home/FinalCTA'
import { ProjectsGrid } from '@/components/entrance/ProjectsGrid'
import { SITE_URL } from '@/lib/content/site'

const WHATSAPP_MESSAGE =
  "Hi ITSolute, could you send me photos of automatic gate / boom barrier installations you've completed?"

/**
 * /entrance-automation/projects — the project gallery.
 *
 * NOINDEX ON PURPOSE. There is no real project data yet (lib/content/projects.ts
 * holds an empty array), so there is nothing worth indexing and a thin, empty
 * page would only dilute the entrance-automation cluster. The route is also
 * excluded from app/sitemap.ts and is not linked from anywhere on the site.
 *
 * Once 3+ genuine projects exist, flip `robots` to `{ index: true, follow: true }`
 * and follow the rest of the checklist at the top of lib/content/projects.ts.
 */
export const metadata: Metadata = {
  title: {
    absolute: 'Entrance Automation Projects — Automatic Gates & Boom Barriers | ITSolute',
  },
  description:
    'Automatic gate and boom barrier installations completed by ITSolute across Kottayam, Ernakulam, Pathanamthitta and Alappuzha.',
  alternates: { canonical: `${SITE_URL}/entrance-automation/projects` },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
}

export default function EntranceProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR WORK · ENTRANCE AUTOMATION"
        headline="Gates and barriers we've installed."
        sub="Completed automatic gate and boom barrier installations across Kottayam, Ernakulam, Pathanamthitta and Alappuzha — the site, what it needed, and what we fitted."
        primaryCta={{
          label: 'Request a site survey',
          href: '/contact?service=entrance-automation',
        }}
        secondaryCta={{ label: 'WhatsApp us', message: WHATSAPP_MESSAGE }}
      />

      <Section theme="light">
        <Container>
          <ProjectsGrid whatsappMessage={WHATSAPP_MESSAGE} />
        </Container>
      </Section>

      <FinalCTA
        headline="Want the same at your gate?"
        sub="Free site survey anywhere in Kottayam, Ernakulam, Pathanamthitta or Alappuzha, and a fixed written quote before anything is ordered."
        primary="Book a free site survey"
        secondary="WhatsApp us"
        whatsappMessage={WHATSAPP_MESSAGE}
      />
    </>
  )
}

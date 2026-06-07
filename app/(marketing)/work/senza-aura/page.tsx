import { notFound } from 'next/navigation'
import { CaseStudyDetail } from '@/components/case-studies/CaseStudyDetail'
import { getCaseStudy } from '@/lib/content/caseStudies'
import { SITE_URL } from '@/lib/content/site'

export const metadata = {
  title: 'Senza Aura — WhatsApp booking automation',
  description:
    'Booking volume up 4× in six months. How Senza Aura rebuilt its booking flow on WhatsApp and started filling the calendar automatically.',
  alternates: { canonical: `${SITE_URL}/work/senza-aura` },
}

export default function SenzaAuraPage() {
  const cs = getCaseStudy('senza-aura')
  if (!cs) notFound()
  return <CaseStudyDetail caseStudy={cs} />
}

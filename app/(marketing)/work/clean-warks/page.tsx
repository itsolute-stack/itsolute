import { notFound } from 'next/navigation'
import { CaseStudyDetail } from '@/components/case-studies/CaseStudyDetail'
import { getCaseStudy } from '@/lib/content/caseStudies'
import { SITE_URL } from '@/lib/content/site'

export const metadata = {
  title: 'Clean Warks — Multi-city service ops platform',
  description:
    'Clean Warks scaled across Kerala without growing the ops team. The platform that made it possible — built by ITSolute.',
  alternates: { canonical: `${SITE_URL}/work/clean-warks` },
}

export default function CleanWarksPage() {
  const cs = getCaseStudy('clean-warks')
  if (!cs) notFound()
  return <CaseStudyDetail caseStudy={cs} />
}

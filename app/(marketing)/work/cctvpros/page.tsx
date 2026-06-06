import { notFound } from 'next/navigation'
import { CaseStudyDetail } from '@/components/case-studies/CaseStudyDetail'
import { getCaseStudy } from '@/lib/content/caseStudies'

export const metadata = {
  title: 'CCTVPROS — AI-powered product catalog',
  description:
    '10× faster catalog updates and 3× more inbound leads. How CCTVPROS replaced manual data entry with an AI-assisted product platform.',
}

export default function CCTVPROSPage() {
  const cs = getCaseStudy('cctvpros')
  if (!cs) notFound()
  return <CaseStudyDetail caseStudy={cs} />
}

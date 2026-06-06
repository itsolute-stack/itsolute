export type ProcessStep = {
  index: string
  title: string
  description: string
}

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Audit',
    description: 'We review your current IT setup — free, no obligation.',
  },
  {
    index: '02',
    title: 'Quote',
    description: 'Fixed-price proposal with scope, timelines, and SLAs in writing.',
  },
  {
    index: '03',
    title: 'Setup',
    description: 'We implement, configure, and document everything end to end.',
  },
  {
    index: '04',
    title: 'Train',
    description: 'Your team learns the new systems — and what to call us for.',
  },
  {
    index: '05',
    title: 'Support',
    description: 'Ongoing AMC. We pick up the phone. You get back to your business.',
  },
]

import type { Metadata } from 'next'
import {
  EntranceDistrictPage,
  buildDistrictMetadata,
} from '@/components/entrance/EntranceDistrictPage'

export const metadata: Metadata = buildDistrictMetadata('alappuzha')

export default function Page() {
  return <EntranceDistrictPage slug="alappuzha" />
}

import type { Metadata } from 'next'
import {
  EntranceDistrictPage,
  buildDistrictMetadata,
} from '@/components/entrance/EntranceDistrictPage'

export const metadata: Metadata = buildDistrictMetadata('pathanamthitta')

export default function Page() {
  return <EntranceDistrictPage slug="pathanamthitta" />
}

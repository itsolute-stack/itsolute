import type { Metadata } from 'next'
import {
  EntranceDistrictPage,
  buildDistrictMetadata,
} from '@/components/entrance/EntranceDistrictPage'

export const metadata: Metadata = buildDistrictMetadata('kottayam')

export default function Page() {
  return <EntranceDistrictPage slug="kottayam" />
}

import { Star, ExternalLink } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { ReviewsSection } from '@/components/lp/Reviews'
import { getPlaceReviews } from '@/lib/reviews/googlePlaces'
import { GBP_BLR_URL, LOCATIONS } from '@/lib/content/site'

/**
 * Reviews on Bengaluru and Karnataka pages.
 *
 * Reads the Bangalore listing, never the Kottayam one — showing Kottayam
 * reviews under a Bengaluru heading would be a straightforward
 * misrepresentation, and the place ID is chosen server-side so it cannot be
 * got wrong by a caller.
 *
 * A new profile has few reviews, and a rating computed from one or two of them
 * says nothing. Below three we render no cards and no rating at all, only an
 * invitation to review — which is honest and is also the thing most likely to
 * fix the underlying problem.
 */
const MIN_REVIEWS = 3

export async function BangaloreReviews() {
  const place = await getPlaceReviews('karnataka')
  const hasEnough = place !== null && place.reviews.length >= MIN_REVIEWS

  if (hasEnough) {
    return <ReviewsSection place={place} featured={[]} />
  }

  // Link to the profile when we have it, otherwise to the listing search.
  const href = GBP_BLR_URL || LOCATIONS.bengaluru.mapsUrl

  return (
    <Section theme="cream" size="md">
      <Container>
        <div className="max-w-2xl">
          <SectionHeader eyebrow="REVIEWS" headline="Worked with us in Bengaluru?" />
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            Our Bengaluru office is new, so there is not yet enough feedback on the
            Business Profile to be worth showing here. If we have installed or
            serviced something for you, a review helps the next person decide.
          </p>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-location="gbp_link"
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-5 py-3 text-base font-medium text-[color:var(--color-ink)] transition-colors hover:border-[color:var(--color-electric)]"
          >
            <Star aria-hidden className="h-4 w-4 text-[color:var(--color-electric)]" />
            Review us on Google
            <ExternalLink aria-hidden className="h-4 w-4 text-slate-400" />
          </a>
        </div>
      </Container>
    </Section>
  )
}

/**
 * "Find us on Google" — the profile link on its own, for pages that want the
 * link without the reviews block. Tagged so GA4 can count profile clicks.
 */
export function FindUsOnGoogle({ className }: { className?: string }) {
  const href = GBP_BLR_URL || LOCATIONS.bengaluru.mapsUrl
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-location="gbp_link"
      className={
        className ??
        'inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-electric)] hover:underline'
      }
    >
      Find us on Google
      <ExternalLink aria-hidden className="h-4 w-4" />
    </a>
  )
}

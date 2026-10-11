import { Star } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import type { GoogleReview, PlaceReviews } from '@/lib/reviews/googlePlaces'
import type { FeaturedReview } from '@/lib/content/featuredReviews'

/**
 * Google reviews on the landing pages.
 *
 * Server-rendered with no client JavaScript at all — the "Read more" toggle is
 * a native <details>, so the section adds nothing to hydration and cannot move
 * LCP. Review text is rendered verbatim; the truncation is purely visual.
 *
 * No Review or AggregateRating schema is emitted, by instruction.
 */

const MAX_CARDS = 6
/** Characters shown before the "Read more" toggle appears. */
const TRUNCATE_AT = 220

/** One shape for both featured and live reviews. */
type Card = {
  id: string
  author: string
  authorUri?: string
  rating: number
  date: string
  text: string
  reviewUri?: string
}

function fromFeatured(r: FeaturedReview): Card {
  return {
    id: r.id,
    author: r.author,
    authorUri: r.authorUri,
    rating: r.rating,
    date: r.date,
    text: r.text,
    reviewUri: r.reviewUri,
  }
}

function fromLive(r: GoogleReview): Card {
  return {
    id: r.id,
    author: r.authorName,
    authorUri: r.authorUri,
    rating: r.rating,
    date: r.relativeTime,
    text: r.text,
    reviewUri: r.reviewUri,
  }
}

function Stars({ rating }: { rating: number }) {
  const rounded = Math.round(rating)
  return (
    <span
      className="inline-flex items-center gap-0.5"
      aria-label={`${rating} out of 5`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          aria-hidden
          className={
            i <= rounded
              ? 'h-4 w-4 fill-[#fbbc04] text-[#fbbc04]'
              : 'h-4 w-4 text-slate-300'
          }
        />
      ))}
    </span>
  )
}

/**
 * Hero badge: "★ 4.9 · 37 Google reviews", linking to our listing.
 * Renders nothing when the Places call failed.
 */
export function GoogleRatingBadge({ place }: { place: PlaceReviews | null }) {
  if (!place || !place.googleMapsUri) return null
  return (
    <a
      href={place.googleMapsUri}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/[0.04] px-3 py-2 text-sm text-slate-200 transition-colors hover:border-white/30"
    >
      <Star aria-hidden className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]" />
      <span className="font-medium text-white">{place.rating.toFixed(1)}</span>
      <span aria-hidden className="text-slate-500">
        ·
      </span>
      <span>{`${place.userRatingCount} Google review${place.userRatingCount === 1 ? '' : 's'}`}</span>
    </a>
  )
}

function ReviewCard({ card }: { card: Card }) {
  const isLong = card.text.length > TRUNCATE_AT
  // Cut on a word boundary so the preview doesn't end mid-word.
  const head = isLong
    ? card.text.slice(0, card.text.lastIndexOf(' ', TRUNCATE_AT))
    : card.text

  return (
    <li className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          {card.authorUri ? (
            <a
              href={card.authorUri}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[color:var(--color-ink)] underline-offset-4 hover:underline"
            >
              {card.author}
            </a>
          ) : (
            <p className="text-sm font-medium text-[color:var(--color-ink)]">
              {card.author}
            </p>
          )}
          <div className="mt-1 flex items-center gap-2">
            <Stars rating={card.rating} />
            {card.date ? (
              <span className="text-xs text-slate-500">{card.date}</span>
            ) : null}
          </div>
        </div>
      </div>

      {/* Verbatim text. <details> gives the toggle with zero JavaScript. */}
      <div className="mt-3 text-sm leading-relaxed text-slate-600">
        {isLong ? (
          <details className="group">
            <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">
                {head}…{' '}
                <span className="font-medium text-[color:var(--color-electric)]">
                  Read more
                </span>
              </span>
            </summary>
            <p className="whitespace-pre-line">{card.text}</p>
          </details>
        ) : (
          <p className="whitespace-pre-line">{card.text}</p>
        )}
      </div>

      {card.reviewUri ? (
        <a
          href={card.reviewUri}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto pt-4 text-xs font-medium text-[color:var(--color-electric)] underline underline-offset-4"
        >
          View on Google
        </a>
      ) : null}
    </li>
  )
}

export function ReviewsSection({
  place,
  featured,
}: {
  place: PlaceReviews | null
  featured: FeaturedReview[]
}) {
  // No live data means the call failed or isn't configured — hide the whole
  // section rather than showing featured reviews with no Google context.
  if (!place) return null

  const featuredCards = featured.map(fromFeatured)
  const featuredIds = new Set(featuredCards.map((c) => c.id))
  const liveCards = place.reviews
    .filter((r) => !featuredIds.has(r.id))
    .map(fromLive)

  const cards = [...featuredCards, ...liveCards].slice(0, MAX_CARDS)
  if (cards.length === 0) return null

  return (
    <section className="bg-slate-50 py-12 md:py-16">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-medium tracking-tight text-[color:var(--color-ink)] md:text-3xl">
            What our customers say
          </h2>
          <a
            href={place.googleMapsUri}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[color:var(--color-ink)]"
          >
            <Star aria-hidden className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]" />
            <span className="font-medium text-[color:var(--color-ink)]">
              {place.rating.toFixed(1)}
            </span>
            <span>{`from ${place.userRatingCount} review${place.userRatingCount === 1 ? '' : 's'} on Google`}</span>
          </a>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {cards.map((c) => (
            <ReviewCard key={c.id} card={c} />
          ))}
        </ul>

        {/* Required attribution. */}
        <p className="mt-6 text-xs text-slate-500">
          Reviews from{' '}
          <a
            href={place.googleMapsUri}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            Google
          </a>
          . Shown as written by the reviewer.
        </p>
      </Container>
    </section>
  )
}

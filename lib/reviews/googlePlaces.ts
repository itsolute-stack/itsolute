/**
 * Google reviews for the landing pages, via Places API (New) Place Details.
 *
 * SERVER ONLY. The API key is read from GOOGLE_PLACES_API_KEY — deliberately
 * without a NEXT_PUBLIC_ prefix, which is what keeps Next from inlining it
 * into any client bundle. Never rename it to NEXT_PUBLIC_*, never pass the key
 * through props, and never call this from a 'use client' module.
 *
 * Google Maps Platform terms, as implemented here:
 *   - reviews are attributed to Google and link to our listing
 *   - author names, author links and review links are passed through exactly
 *     as Google returns them
 *   - review text is never edited, trimmed in meaning, or rewritten; the card
 *     truncates visually with a "Read more" toggle that reveals the full text
 *   - nothing is persisted. The only copy is Next's fetch cache, which expires
 *     on the revalidate window below.
 *
 * On any failure this returns null and the caller hides the badge and the
 * reviews section entirely. We never fall back to stale or placeholder reviews.
 */

/** Three hours — "at most every few hours", and well inside Google's caching terms. */
const REVALIDATE_SECONDS = 60 * 60 * 3

const ENDPOINT = 'https://places.googleapis.com/v1/places'
const FIELD_MASK = 'rating,userRatingCount,reviews,googleMapsUri'

export type GoogleReview = {
  /** Google's own review resource name — stable, used for dedupe and as a key. */
  id: string
  authorName: string
  authorUri?: string
  authorPhotoUri?: string
  rating: number
  relativeTime: string
  /** Exactly as Google returns it. Never edited. */
  text: string
  reviewUri?: string
}

export type PlaceReviews = {
  rating: number
  userRatingCount: number
  /** Our Google listing — what the badge and attribution link to. */
  googleMapsUri: string
  reviews: GoogleReview[]
}

type RawReview = {
  name?: string
  rating?: number
  relativePublishTimeDescription?: string
  text?: { text?: string }
  originalText?: { text?: string }
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string }
  googleMapsUri?: string
}

function normalise(raw: RawReview): GoogleReview | null {
  // Prefer originalText: `text` may be Google's translation, and the terms —
  // and plain honesty — require showing what the reviewer actually wrote.
  const text = raw.originalText?.text ?? raw.text?.text
  const authorName = raw.authorAttribution?.displayName
  if (!text || !authorName || !raw.name) return null
  return {
    id: raw.name,
    authorName,
    authorUri: raw.authorAttribution?.uri,
    authorPhotoUri: raw.authorAttribution?.photoUri,
    rating: typeof raw.rating === 'number' ? raw.rating : 0,
    relativeTime: raw.relativePublishTimeDescription ?? '',
    text,
    reviewUri: raw.googleMapsUri,
  }
}

export async function getPlaceReviews(): Promise<PlaceReviews | null> {
  if (typeof window !== 'undefined') {
    // Belt and braces: this module must never execute in the browser.
    throw new Error('getPlaceReviews is server-only')
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID
  if (!apiKey || !placeId) {
    // Not configured (e.g. local dev) — hide the section rather than fake it.
    return null
  }

  try {
    const res = await fetch(`${ENDPOINT}/${encodeURIComponent(placeId)}`, {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': FIELD_MASK,
      },
      next: { revalidate: REVALIDATE_SECONDS },
    })

    if (!res.ok) {
      console.error(`[reviews] Places API returned ${res.status}`)
      return null
    }

    const data = (await res.json()) as {
      rating?: number
      userRatingCount?: number
      googleMapsUri?: string
      reviews?: RawReview[]
    }

    if (typeof data.rating !== 'number' || typeof data.userRatingCount !== 'number') {
      console.error('[reviews] Places API response missing rating fields')
      return null
    }

    return {
      rating: data.rating,
      userRatingCount: data.userRatingCount,
      googleMapsUri: data.googleMapsUri ?? '',
      reviews: (data.reviews ?? [])
        .map(normalise)
        .filter((r): r is GoogleReview => r !== null),
    }
  } catch (err) {
    console.error('[reviews] Places API fetch failed:', err)
    return null
  }
}

/**
 * Hand-picked Google reviews to lead with on each landing page.
 *
 * These are shown BEFORE the live reviews pulled from the Places API, so a
 * review that speaks directly to gates or barriers isn't buried behind
 * whichever five Google happens to return. Live reviews already featured here
 * are de-duplicated by `id`, so nothing appears twice.
 *
 * RULES — these are real people's words, and Google's terms and basic honesty
 * both apply:
 *   - `text` must be the review EXACTLY as written. Never edit, tidy, shorten
 *     or paraphrase it. The card truncates visually and reveals the rest; the
 *     stored text stays whole.
 *   - `author` must be the name as it appears on Google.
 *   - `id` must be the Places review resource name ("places/<id>/reviews/<id>")
 *     so dedupe against the live feed works. Copy it from the API response.
 *   - `reviewUri` is the review's own Google link.
 *   - Only add a review that actually exists on our listing.
 *
 * Both arrays are intentionally empty. The section renders live reviews alone
 * until someone fills these in.
 */

export type FeaturedReview = {
  /** Places review resource name — used to dedupe against the live feed. */
  id: string
  /** Reviewer name exactly as shown on Google. */
  author: string
  authorUri?: string
  rating: number
  /** Relative date as Google shows it, e.g. "2 months ago". */
  date: string
  /** The review, verbatim. */
  text: string
  /** Link to this review on Google. */
  reviewUri: string
}

export const featuredReviews: {
  gate: FeaturedReview[]
  barrier: FeaturedReview[]
} = {
  gate: [],
  barrier: [],
}

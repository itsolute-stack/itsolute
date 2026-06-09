import { ExternalLink } from 'lucide-react'
import { GMAPS_URL, GMAPS_EMBED_URL, ADDRESS, SITE } from '@/lib/content/site'

/**
 * Embedded Google Maps + directions link. Uses the search-query embed pattern
 * (no API key, no billing). The "Get directions" link uses the canonical
 * goo.gl short link which deep-links into the Maps app on iOS/Android.
 */
export function LocationMap() {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-lg border border-slate-200">
        <iframe
          src={GMAPS_EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ITSolute Systems on Google Maps — Parthas Lane, Kottayam"
        />
      </div>
      <a
        href={GMAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-electric)] hover:underline"
      >
        Get directions on Google Maps
        <ExternalLink className="h-4 w-4" aria-hidden />
      </a>
      <p className="text-sm text-slate-500 leading-relaxed">
        {ADDRESS.full}
        <br />
        {SITE.hours.display}
      </p>
    </div>
  )
}

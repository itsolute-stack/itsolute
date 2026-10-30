import { ExternalLink } from 'lucide-react'
import { LOCATIONS, SITE, type SiteLocation } from '@/lib/content/site'

/**
 * Embedded Google Map + directions link for one office.
 *
 * Uses the search-query embed pattern (no API key, no billing). Everything
 * shown — address, visit policy, map title — comes from the location record in
 * lib/content/site.ts, so the address here can never drift from the address in
 * the footer or the schema.
 *
 * Defaults to the head office, which is what the contact page showed before
 * there was a second one.
 */
export function LocationMap({
  location = LOCATIONS.kottayam,
}: {
  location?: SiteLocation
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-lg border border-slate-200">
        <iframe
          src={location.mapsEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={location.mapTitle}
        />
      </div>
      <a
        href={location.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-electric)] hover:underline"
      >
        Get directions on Google Maps
        <ExternalLink className="h-4 w-4" aria-hidden />
      </a>
      <p className="text-sm text-slate-500 leading-relaxed">
        {location.addressLine}
        <br />
        {SITE.hours.display}
        <br />
        {location.visitNote}
      </p>
    </div>
  )
}

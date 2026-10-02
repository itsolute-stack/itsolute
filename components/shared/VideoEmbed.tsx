import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'

export type PageVideo = {
  /** YouTube video ID only, e.g. "dQw4w9WgXcQ" — not the full URL. */
  youtubeId: string
  title: string
  description: string
  /** ISO date, required by VideoObject schema. */
  uploadDate: string
  /** Defaults to the YouTube thumbnail for this ID. */
  thumbnailUrl?: string
  eyebrow?: string
  headline?: string
}

/**
 * Optional video section for entrance-automation pages. Renders a lazy-loaded,
 * cookie-light YouTube embed in a 16:9 frame. Pages pass `video` only when one
 * exists — nothing renders otherwise. VideoObject schema is emitted by the page
 * alongside this (see videoObjectSchema).
 */
export function VideoEmbed({ video }: { video: PageVideo }) {
  return (
    <Section theme="light">
      <Container>
        <SectionHeader
          eyebrow={video.eyebrow ?? 'WATCH'}
          headline={video.headline ?? video.title}
        />
        <div className="mt-10 max-w-3xl">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
              title={video.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed">
            {video.description}
          </p>
        </div>
      </Container>
    </Section>
  )
}

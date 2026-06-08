import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { PlaceholderImage } from '@/components/shared/PlaceholderImage'
import type { Post } from '@/lib/blog'
import { cn } from '@/lib/utils'

export function PostCard({ post }: { post: Post }) {
  const { frontmatter, cluster, readingTimeMinutes } = post
  const dateText = new Date(frontmatter.date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <Link
      href={`/blog/${frontmatter.slug}`}
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-all',
        'hover:-translate-y-0.5 hover:border-[color:var(--color-electric)]',
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        {frontmatter.image ? (
          <Image
            src={frontmatter.image}
            alt={frontmatter.imageAlt ?? frontmatter.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <PlaceholderImage
            alt={frontmatter.title}
            intent={`Hero image for: ${frontmatter.title}`}
            width={1200}
            height={750}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="self-start rounded-sm border border-slate-200 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-600">
          {cluster.shortName}
        </span>

        <h3 className="text-xl md:text-2xl font-medium tracking-tight text-[color:var(--color-ink)] leading-snug">
          {frontmatter.title}
        </h3>

        <p className="text-sm md:text-base text-slate-600 leading-relaxed line-clamp-3">
          {frontmatter.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-6 text-xs text-slate-500">
          <span className="inline-flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5" aria-hidden />
            <time dateTime={frontmatter.date}>{dateText}</time>
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            {readingTimeMinutes} min read
          </span>
          <ArrowRight
            className="h-4 w-4 text-[color:var(--color-electric)] transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </div>
      </div>
    </Link>
  )
}

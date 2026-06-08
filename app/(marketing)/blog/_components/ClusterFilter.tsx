import Link from 'next/link'
import { clusters } from '@/lib/content/clusters'
import { cn } from '@/lib/utils'

/**
 * Server-rendered pill row. Each pill is a Link that sets `?cluster=…`.
 * "All" clears the filter. Active pill gets the electric fill.
 */
export function ClusterFilter({ active }: { active?: string }) {
  const pills = [
    { label: 'All', slug: undefined as string | undefined },
    ...Object.values(clusters).map((c) => ({
      label: c.shortName,
      slug: c.slug,
    })),
  ]

  return (
    <nav aria-label="Filter by topic" className="flex flex-wrap gap-2">
      {pills.map((p) => {
        const isActive = active === p.slug || (!active && !p.slug)
        const href = p.slug ? `/blog?cluster=${p.slug}` : '/blog'
        return (
          <Link
            key={p.label}
            href={href}
            scroll={false}
            className={cn(
              'inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium transition-colors',
              isActive
                ? 'border-[color:var(--color-electric)] bg-[color:var(--color-electric)] text-white'
                : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300',
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            {p.label}
          </Link>
        )
      })}
    </nav>
  )
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { getAllPosts } from '@/lib/blog'
import { clusters, type ClusterSlug } from '@/lib/content/clusters'

/**
 * "Guides" block for a service page — the return half of the blog cluster's
 * internal linking. Posts already link out to their service page; this links
 * the service page back to the posts, so the cluster is bidirectional at the
 * page level as well as between posts.
 *
 * Server component: it reads posts from the filesystem via getAllPosts.
 *
 * Pass `slugs` to choose the posts and their order — used on the district
 * pages, where the picks reinforce each district's own angle rather than
 * repeating one shared list. Omit it and the newest posts in `cluster` are
 * used. Slugs that don't resolve are skipped, and the block renders nothing
 * at all when no posts match, so it can be dropped into a page before the
 * posts exist.
 */
type Props = {
  cluster: ClusterSlug
  slugs?: string[]
  limit?: number
  eyebrow?: string
  headline?: string
  sub?: string
  theme?: 'light' | 'cream' | 'dark'
}

export function RelatedGuides({
  cluster,
  slugs,
  limit = 3,
  eyebrow = 'GUIDES',
  headline,
  sub,
  theme = 'cream',
}: Props) {
  const all = getAllPosts()

  const picked = slugs?.length
    ? slugs
        .map((s) => all.find((p) => p.frontmatter.slug === s))
        .filter((p): p is NonNullable<typeof p> => p !== undefined)
    : all.filter((p) => p.frontmatter.cluster === cluster)

  const posts = picked.slice(0, limit)
  if (posts.length === 0) return null

  const isDark = theme === 'dark'

  return (
    <Section theme={theme} size="md">
      <Container>
        <SectionHeader
          eyebrow={eyebrow}
          headline={headline ?? `Read before you buy: ${clusters[cluster].name.toLowerCase()}`}
          sub={sub}
          theme={isDark ? 'dark' : 'light'}
        />
        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-5">
          {posts.map((p) => (
            <li key={p.frontmatter.slug}>
              <Link
                href={`/blog/${p.frontmatter.slug}`}
                className={
                  isDark
                    ? 'group flex h-full flex-col gap-3 rounded-lg border border-white/10 bg-white/[0.02] p-6 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-electric)]'
                    : 'group flex h-full flex-col gap-3 rounded-lg border border-slate-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[color:var(--color-electric)]'
                }
              >
                <h3
                  className={
                    isDark
                      ? 'text-lg font-medium tracking-tight text-white'
                      : 'text-lg font-medium tracking-tight text-[color:var(--color-ink)]'
                  }
                >
                  {p.frontmatter.title}
                </h3>
                <p
                  className={
                    isDark
                      ? 'text-sm leading-relaxed text-slate-300'
                      : 'text-sm leading-relaxed text-slate-600'
                  }
                >
                  {p.frontmatter.excerpt}
                </p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-[color:var(--color-electric)]">
                  Read the guide
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

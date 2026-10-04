import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { clusters, type Cluster, type ClusterSlug } from '@/lib/content/clusters'

const POSTS_DIR = path.join(process.cwd(), 'content', 'blog')

export type PostFAQ = { q: string; a: string }

export type PostFrontmatter = {
  title: string
  slug: string
  excerpt: string
  date: string
  updated?: string
  cluster: ClusterSlug
  image?: string
  imageAlt?: string
  faqs?: PostFAQ[]
  keywords?: string[]
  /**
   * Optional hand-picked related posts, as slugs, most relevant first. When
   * present these take precedence over the cluster auto-select — see
   * getRelatedPosts. Omit it and the automatic behaviour is unchanged, which is
   * why existing posts need no edit.
   */
  relatedPosts?: string[]
  draft?: boolean
}

export type Post = {
  frontmatter: PostFrontmatter
  content: string
  readingTimeMinutes: number
  cluster: Cluster
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const { data, content } = matter(fs.readFileSync(filePath, 'utf8'))
  const fm = data as PostFrontmatter
  if (fm.draft) return null
  const cluster = clusters[fm.cluster]
  if (!cluster) return null
  return {
    frontmatter: { ...fm, slug },
    content,
    readingTimeMinutes: Math.max(1, Math.ceil(readingTime(content).minutes)),
    cluster,
  }
}

export function getAllPosts(): Post[] {
  return getAllPostSlugs()
    .map(getPostBySlug)
    .filter((p): p is Post => p !== null)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime(),
    )
}

/**
 * Related posts for the foot of a post page.
 *
 * Order of preference:
 *   1. `relatedPosts` from frontmatter — hand-picked slugs, in the given order.
 *   2. Other posts in the same cluster, newest first.
 *   3. Posts from other clusters, newest first.
 *
 * Hand-picked entries always lead. If fewer than `count` are listed, the rest
 * is topped up from (2) and (3) so the row still fills, rather than leaving a
 * short row — listing one post promotes it, it doesn't suppress the others.
 * Slugs that don't resolve are skipped (and warned about in development).
 */
export function getRelatedPosts(currentSlug: string, count = 3): Post[] {
  const current = getPostBySlug(currentSlug)
  if (!current) return []
  const all = getAllPosts()

  const picked: Post[] = []
  const seen = new Set<string>([currentSlug])

  for (const slug of current.frontmatter.relatedPosts ?? []) {
    if (seen.has(slug)) continue
    const post = all.find((p) => p.frontmatter.slug === slug)
    if (!post) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(
          `[blog] ${currentSlug}: relatedPosts references "${slug}", which is not a published post.`,
        )
      }
      continue
    }
    picked.push(post)
    seen.add(slug)
  }

  if (picked.length >= count) return picked.slice(0, count)

  const sameCluster = all.filter(
    (p) =>
      !seen.has(p.frontmatter.slug) &&
      p.frontmatter.cluster === current.frontmatter.cluster,
  )
  const others = all.filter(
    (p) =>
      !seen.has(p.frontmatter.slug) &&
      p.frontmatter.cluster !== current.frontmatter.cluster,
  )

  return [...picked, ...sameCluster, ...others].slice(0, count)
}

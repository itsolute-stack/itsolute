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

export function getRelatedPosts(currentSlug: string, count = 3): Post[] {
  const current = getPostBySlug(currentSlug)
  if (!current) return []
  const all = getAllPosts()
  const sameCluster = all.filter(
    (p) =>
      p.frontmatter.slug !== currentSlug &&
      p.frontmatter.cluster === current.frontmatter.cluster,
  )
  const others = all.filter(
    (p) =>
      p.frontmatter.slug !== currentSlug &&
      p.frontmatter.cluster !== current.frontmatter.cluster,
  )
  return [...sameCluster, ...others].slice(0, count)
}

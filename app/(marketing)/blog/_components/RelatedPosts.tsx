import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Eyebrow } from '@/components/shared/Eyebrow'
import { PostCard } from './PostCard'
import type { Post } from '@/lib/blog'

export function RelatedPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null
  return (
    <Section theme="cream">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Keep reading</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-medium tracking-[-0.03em] leading-tight text-[color:var(--color-ink)]">
            More from the ITSolute blog.
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.frontmatter.slug} post={p} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

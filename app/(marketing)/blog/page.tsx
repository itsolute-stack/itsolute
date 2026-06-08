import type { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { PageHero } from '@/components/shared/PageHero'
import { getAllPosts } from '@/lib/blog'
import { SITE_URL } from '@/lib/content/site'
import { PostCard } from './_components/PostCard'
import { ClusterFilter } from './_components/ClusterFilter'

export const metadata: Metadata = {
  title: { absolute: 'IT guides for Kerala businesses | ITSolute Systems' },
  description:
    'Practical IT advice for Kerala SMBs — laptop buying guides, repair walkthroughs, office network design, software comparisons.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'IT guides for Kerala businesses',
    description:
      'Practical IT advice for Kerala SMBs — laptops, repair, networking, software.',
    url: `${SITE_URL}/blog`,
  },
}

type SearchParams = Promise<{ cluster?: string }>

export default async function BlogIndex({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  const { cluster } = await searchParams
  const all = getAllPosts()
  const filtered = cluster
    ? all.filter((p) => p.frontmatter.cluster === cluster)
    : all

  return (
    <>
      <PageHero
        eyebrow="THE ITSOLUTE BLOG"
        headline="Practical IT advice for Kerala businesses."
        sub="Buying guides, repair walkthroughs, networking explainers, and software comparisons — written by the team that fixes and builds this stuff every day."
      />

      <Section theme="light">
        <Container>
          <ClusterFilter active={cluster} />

          {filtered.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {filtered.map((p) => (
                <PostCard key={p.frontmatter.slug} post={p} />
              ))}
            </div>
          ) : (
            <div className="mt-16 rounded-lg border border-dashed border-slate-300 bg-slate-50 py-16 px-6 text-center">
              <p className="text-base text-slate-600">
                {cluster
                  ? 'No posts in this category yet.'
                  : 'New posts publish weekly. Check back soon.'}
              </p>
              {cluster ? (
                <p className="mt-2 text-sm text-slate-500">
                  Try a different filter or browse all posts.
                </p>
              ) : null}
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}

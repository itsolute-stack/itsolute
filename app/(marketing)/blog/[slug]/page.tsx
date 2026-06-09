import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Eyebrow } from '@/components/shared/Eyebrow'

import { PostFAQ } from '../_components/PostFAQ'
import { PostCTA } from '../_components/PostCTA'
import { RelatedPosts } from '../_components/RelatedPosts'
import { ShareLinks } from '../_components/ShareLinks'

import {
  getAllPostSlugs,
  getPostBySlug,
  getRelatedPosts,
} from '@/lib/blog'
import { SITE_URL, SOCIAL_URLS } from '@/lib/content/site'
import { breadcrumbSchema } from '@/lib/schema'

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  const { title, excerpt, image, date, updated, keywords } = post.frontmatter
  return {
    title: { absolute: `${title} | ITSolute Systems` },
    description: excerpt,
    keywords,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      type: 'article',
      title,
      description: excerpt,
      url: `${SITE_URL}/blog/${slug}`,
      images: image ? [{ url: image }] : undefined,
      publishedTime: date,
      modifiedTime: updated || date,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: excerpt,
      images: image ? [image] : undefined,
    },
  }
}

// next-mdx-remote/rsc's `options` is loosely typed; we pass remark + rehype
// plugins in the standard unified tuple form. The cast to `unknown` then
// `Parameters<typeof MDXRemote>[0]['options']` avoids importing `unified`
// directly (it's only a transitive dep). One inline cast keeps the rest of
// the file fully typed.
const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    ],
  },
} as Parameters<typeof MDXRemote>[0]['options']

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const { frontmatter, content, readingTimeMinutes, cluster } = post
  const related = getRelatedPosts(slug, 3)
  const dateText = new Date(frontmatter.date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    image: frontmatter.image,
    datePublished: frontmatter.date,
    dateModified: frontmatter.updated || frontmatter.date,
    author: {
      '@type': 'Organization',
      name: 'ITSolute Systems',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'ITSolute Systems',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.svg` },
      sameAs: SOCIAL_URLS,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
  }

  const faqSchema = frontmatter.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: frontmatter.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  return (
    <article>
      <Script
        id={`article-schema-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema ? (
        <Script
          id={`faq-schema-${slug}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}
      <Script
        id={`breadcrumb-schema-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: SITE_URL },
              { name: 'Blog', url: `${SITE_URL}/blog` },
              { name: frontmatter.title, url: `${SITE_URL}/blog/${slug}` },
            ]),
          ),
        }}
      />

      {/* Hero header */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-white">
        <Container className="max-w-3xl">
          <Eyebrow>
            <Link
              href={`/blog?cluster=${cluster.slug}`}
              className="hover:text-[color:var(--color-electric)] transition-colors"
            >
              {cluster.name}
            </Link>
            {' · '}
            {readingTimeMinutes} min read
            {' · '}
            <time dateTime={frontmatter.date}>{dateText}</time>
          </Eyebrow>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl tracking-[-0.04em] font-medium leading-[1.05] text-[color:var(--color-ink)]">
            {frontmatter.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed">
            {frontmatter.excerpt}
          </p>
          {frontmatter.image ? (
            <div className="mt-10 overflow-hidden rounded-lg border border-slate-200">
              <Image
                src={frontmatter.image}
                alt={frontmatter.imageAlt ?? frontmatter.title}
                width={1600}
                height={900}
                className="h-auto w-full"
                priority
              />
            </div>
          ) : null}
        </Container>
      </section>

      {/* Body */}
      <Section theme="light" size="md" className="pt-0">
        <Container className="max-w-3xl">
          <div
            className="
              prose prose-slate prose-lg max-w-none
              prose-headings:font-medium prose-headings:tracking-tight
              prose-headings:text-[color:var(--color-ink)]
              prose-a:text-[color:var(--color-electric)] prose-a:no-underline
              hover:prose-a:underline
              prose-strong:text-[color:var(--color-ink)]
              prose-code:text-[color:var(--color-ink)]
              prose-code:bg-slate-100 prose-code:px-1.5 prose-code:py-0.5
              prose-code:rounded prose-code:font-mono prose-code:text-sm
              prose-code:before:content-none prose-code:after:content-none
              prose-pre:bg-[color:var(--color-ink)] prose-pre:text-slate-100
              prose-img:rounded-lg prose-img:border prose-img:border-slate-200
              prose-hr:border-slate-200
              prose-blockquote:border-l-[color:var(--color-electric)]
              prose-blockquote:text-slate-700 prose-blockquote:not-italic
            "
          >
            <MDXRemote source={content} options={mdxOptions} />
          </div>

          {frontmatter.faqs ? <PostFAQ faqs={frontmatter.faqs} /> : null}
          <PostCTA cluster={cluster} />
          <ShareLinks slug={slug} title={frontmatter.title} />
        </Container>
      </Section>

      <RelatedPosts posts={related} />
    </article>
  )
}

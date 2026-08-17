import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/content/site'
import { getAllPostSlugs } from '@/lib/blog'
import { getAllIndustrySlugs } from '@/lib/content/copy/industries'
import { getAllEntranceSlugs } from '@/lib/content/copy/entranceAutomation'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const base = SITE_URL

  /**
   * Priority order reflects commercial priority:
   * 1.0 Home
   * 0.9 Hardware, Laptop Care, Software, Automation (revenue lines)
   * 0.8 AMC, Networking, Contact, Blog index
   * 0.7 Blog posts
   * 0.6 About
   */
  const staticRoutes: {
    path: string
    priority: number
    changeFreq: 'monthly' | 'weekly'
  }[] = [
    { path: '/', priority: 1.0, changeFreq: 'weekly' },
    { path: '/hardware', priority: 0.9, changeFreq: 'monthly' },
    { path: '/laptop-care', priority: 0.9, changeFreq: 'monthly' },
    { path: '/software', priority: 0.9, changeFreq: 'monthly' },
    { path: '/networking', priority: 0.8, changeFreq: 'monthly' },
    { path: '/cctv', priority: 0.9, changeFreq: 'monthly' },
    { path: '/entrance-automation', priority: 0.9, changeFreq: 'monthly' },
    { path: '/automation', priority: 0.9, changeFreq: 'monthly' },
    { path: '/connect', priority: 0.9, changeFreq: 'monthly' },
    { path: '/amc', priority: 0.8, changeFreq: 'monthly' },
    { path: '/kottayam', priority: 0.9, changeFreq: 'monthly' },
    { path: '/blog', priority: 0.8, changeFreq: 'weekly' },
    { path: '/contact', priority: 0.8, changeFreq: 'monthly' },
    { path: '/about', priority: 0.6, changeFreq: 'monthly' },
    { path: '/privacy', priority: 0.3, changeFreq: 'monthly' },
    { path: '/terms', priority: 0.3, changeFreq: 'monthly' },
  ]

  const blogPosts = getAllPostSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const industryPages = getAllIndustrySlugs().map((slug) => ({
    url: `${base}/industries/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const entrancePages = getAllEntranceSlugs().map((slug) => ({
    url: `${base}/entrance-automation/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [
    ...staticRoutes.map((r) => ({
      url: `${base}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFreq,
      priority: r.priority,
    })),
    ...entrancePages,
    ...industryPages,
    ...blogPosts,
  ]
}

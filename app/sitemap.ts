import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/content/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const base = SITE_URL

  /**
   * Priority order reflects commercial priority:
   * 1.0 Home
   * 0.9 Hardware, Laptop Care, Software, Automation (revenue lines)
   * 0.8 AMC, Networking, Contact
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
    { path: '/automation', priority: 0.9, changeFreq: 'monthly' },
    { path: '/amc', priority: 0.8, changeFreq: 'monthly' },
    { path: '/contact', priority: 0.8, changeFreq: 'monthly' },
    { path: '/about', priority: 0.6, changeFreq: 'monthly' },
  ]

  return staticRoutes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }))
}

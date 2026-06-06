import { SITE } from '@/lib/content/site'

/* ============================================================================
 * JSON-LD generators. Each returns a plain object — JSON.stringify in <Script>.
 * ========================================================================= */

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.svg`,
    foundingDate: String(SITE.founded),
    email: SITE.contact.email,
    telephone: SITE.contact.phoneTel,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.hq.city,
      addressRegion: SITE.hq.state,
      addressCountry: SITE.hq.country,
    },
    sameAs: [SITE.social.linkedin, SITE.social.instagram, SITE.sister.url],
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.contact.phoneTel,
    email: SITE.contact.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE.hq.city,
      addressRegion: SITE.hq.state,
      addressCountry: SITE.hq.country,
    },
    areaServed: SITE.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    openingHours: SITE.hours.structured,
    priceRange: '₹₹',
  }
}

export function serviceSchema(opts: {
  name: string
  description: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    provider: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    areaServed: SITE.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    url: `${SITE.url}/${opts.slug}`,
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }
}

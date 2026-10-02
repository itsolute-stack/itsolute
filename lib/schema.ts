import { SITE, SITE_URL, SOCIAL_URLS, GMAPS_URL } from '@/lib/content/site'

/* ============================================================================
 * JSON-LD generators. Each returns a plain object — JSON.stringify in <Script>.
 * ========================================================================= */

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    foundingDate: String(SITE.founded),
    email: SITE.contact.email,
    telephone: SITE.contact.phoneSchema,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.hq.street,
      addressLocality: SITE.hq.city,
      addressRegion: SITE.hq.state,
      postalCode: SITE.hq.postalCode,
      addressCountry: SITE.hq.countryCode,
    },
    sameAs: [...SOCIAL_URLS, SITE.sister.url],
  }
}

/** Stable @id for the LocalBusiness — other schema blocks reference this. */
export const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': LOCAL_BUSINESS_ID,
    name: SITE.name,
    image: `${SITE_URL}/opengraph-image`,
    description: SITE.description,
    url: SITE_URL,
    telephone: SITE.contact.phoneSchema,
    email: SITE.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.hq.street,
      addressLocality: SITE.hq.city,
      addressRegion: SITE.hq.state,
      postalCode: SITE.hq.postalCode,
      addressCountry: SITE.hq.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: SITE.hours.days,
        opens: SITE.hours.opens,
        closes: SITE.hours.closes,
      },
    ],
    areaServed: SITE.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    hasMap: GMAPS_URL,
    sameAs: [...SOCIAL_URLS, SITE.sister.url],
    priceRange: '₹₹',
  }
}

export function serviceSchema(opts: {
  name: string
  description: string
  slug: string
  serviceType?: string
  priceRange?: { low: string; high: string; currency?: string }
  /**
   * Override the default sitewide `areaServed` (every service area as a City).
   * District pages pass an AdministrativeArea for the district plus City
   * entries for the towns they actually cover.
   */
  areaServed?: { '@type': string; name: string }[]
}) {
  const base = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType ?? opts.name,
    provider: { '@id': LOCAL_BUSINESS_ID },
    areaServed:
      opts.areaServed ??
      SITE.serviceAreas.map((area) => ({
        '@type': 'City',
        name: area,
      })),
    url: `${SITE_URL}/${opts.slug}`,
  }
  if (opts.priceRange) {
    return {
      ...base,
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: opts.priceRange.currency ?? 'INR',
        lowPrice: opts.priceRange.low,
        highPrice: opts.priceRange.high,
      },
    }
  }
  return base
}

/**
 * Product/Offer markup for pages that list several priced variants (the gate
 * types, the boom barrier). Prices are "from" figures excluding GST, so each
 * Offer carries a priceSpecification with `minPrice` and
 * `valueAddedTaxIncluded: false` rather than a flat `price`.
 *
 * Deliberately no aggregateRating/review — we don't publish self-issued ratings.
 */
export function productOffersSchema(opts: {
  pageSlug: string
  listName: string
  items: { name: string; description: string; minPrice: number }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: opts.listName,
    itemListElement: opts.items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: item.name,
        description: item.description,
        url: `${SITE_URL}/${opts.pageSlug}`,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          seller: { '@id': LOCAL_BUSINESS_ID },
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            priceCurrency: 'INR',
            minPrice: item.minPrice,
            valueAddedTaxIncluded: false,
          },
        },
      },
    })),
  }
}

export function videoObjectSchema(v: {
  youtubeId: string
  title: string
  description: string
  uploadDate: string
  thumbnailUrl?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: v.title,
    description: v.description,
    uploadDate: v.uploadDate,
    thumbnailUrl:
      v.thumbnailUrl ?? `https://i.ytimg.com/vi/${v.youtubeId}/maxresdefault.jpg`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${v.youtubeId}`,
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

/**
 * Blog listing schema for /blog. CollectionPage wrapping an ItemList of the
 * published posts (position-ordered) so search engines understand the index
 * page as a collection and can surface individual posts from it.
 */
export function blogListingSchema(
  posts: { title: string; slug: string; date: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'IT guides for Kerala businesses',
    description:
      'Practical IT advice for Kerala SMBs — laptop buying guides, repair walkthroughs, office network design, software comparisons.',
    url: `${SITE_URL}/blog`,
    isPartOf: { '@id': LOCAL_BUSINESS_ID },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: posts.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/blog/${p.slug}`,
        name: p.title,
      })),
    },
  }
}

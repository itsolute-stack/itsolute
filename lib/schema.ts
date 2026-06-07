import { SITE, SITE_URL } from '@/lib/content/site'

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
    telephone: SITE.contact.phoneTel,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.hq.street,
      addressLocality: SITE.hq.city,
      addressRegion: SITE.hq.state,
      postalCode: SITE.hq.postalCode,
      addressCountry: SITE.hq.countryCode,
    },
    sameAs: [SITE.social.linkedin, SITE.social.instagram, SITE.sister.url],
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
    image: `${SITE_URL}/og-image.png`,
    description: SITE.description,
    url: SITE_URL,
    telephone: SITE.contact.phoneTel,
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
    priceRange: '₹₹',
  }
}

export function serviceSchema(opts: {
  name: string
  description: string
  slug: string
  serviceType?: string
  priceRange?: { low: string; high: string; currency?: string }
}) {
  const base = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    serviceType: opts.serviceType ?? opts.name,
    provider: { '@id': LOCAL_BUSINESS_ID },
    areaServed: SITE.serviceAreas.map((area) => ({
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

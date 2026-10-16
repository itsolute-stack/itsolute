import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { organizationSchema } from '@/lib/schema'
import { EngagementTracking } from '@/components/analytics/EngagementTracking'
import { SITE, SITE_URL, KEYWORDS } from '@/lib/content/site'
import './globals.css'

/**
 * `display: 'optional'` rather than 'swap'.
 *
 * With 'swap' the browser paints text in the fallback and re-renders when the
 * webfont arrives, and that re-render is a layout shift. It was measurable on
 * the landing pages (CLS 0.018) once the reviews section gave it a block of
 * long-form text to move; Lighthouse named the woff2 as the cause, not any
 * element we render. 'optional' uses the webfont only if it is ready almost
 * immediately and otherwise keeps the fallback for that page view, so there is
 * no swap and no shift.
 *
 * adjustFontFallback stays on (the default), so the fallback is metric-matched
 * to Geist and the layout is identical either way — only the typeface differs,
 * and only for a visitor whose first load is slow enough to miss the window.
 *
 * Measured on the landing pages: CLS 0.018 -> 0, LCP ~3.6s -> ~2.9s.
 *
 * Scoping this to /lp/* was tried first and does not work: globals.css applies
 * `font-family: var(--font-sans)` on `body`, so the family is computed there
 * and inherited, and redefining the variables (or font-family) further down
 * does not change which @font-face the text already resolved to.
 */
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'optional',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'optional',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Computer Hardware, Laptops & IT Services in Kottayam | ITSolute Systems',
    template: '%s | ITSolute Systems',
  },
  description:
    'Business laptops, software, networking, laptop repair, and automation for Kerala SMBs. Based in Kottayam — serving offices, clinics, schools across Kerala. Free quote.',
  keywords: [...KEYWORDS],
  authors: [{ name: 'ITSolute Systems' }],
  creator: 'ITSolute Systems',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'ITSolute Systems',
    title:
      'Computer Hardware, Laptops & IT Services in Kottayam | ITSolute Systems',
    description:
      'Business laptops, software, networking, laptop repair, and automation for Kerala SMBs. Based in Kottayam.',
    // images is auto-populated from app/opengraph-image.tsx
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITSolute Systems',
    description:
      'Computer hardware, laptop repair, software, networking, and automation for Kerala SMBs.',
    // images is auto-populated from app/twitter-image.tsx
    site: '@ITSoluteSystems',
    creator: '@ITSoluteSystems',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Next 16 auto-detects app/icon.svg, app/apple-icon.tsx, app/opengraph-image.tsx,
  // and app/twitter-image.tsx as the favicon, apple icon, OG image, and Twitter
  // card respectively. No explicit `icons` map needed.
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-[color:var(--color-ink)]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-[color:var(--color-electric)] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}

        {/*
          Google tag (gtag.js) — one script, two destinations.

          Google Ads AW-18221570748 drives conversions and is unchanged. GA4 is
          configured on the SAME gtag.js rather than loading a second copy, so
          analytics costs no extra request. Order matters only in that both
          configs must come after the init.

          Production only, so local-dev testing never pollutes either property.
        */}
        {process.env.NODE_ENV === 'production' ? (
          <>
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=AW-18221570748"
              strategy="afterInteractive"
            />
            <Script id="google-ads-gtag" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-18221570748');${
                  process.env.NEXT_PUBLIC_GA4_ID
                    ? `\n                gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}');`
                    : ''
                }`}
            </Script>
          </>
        ) : null}

        {/*
          Microsoft Clarity — session recordings and heatmaps.

          lazyOnload so it loads after everything that matters and cannot touch
          LCP. Form fields are masked at the markup level with
          data-clarity-mask on each form, not just via the Clarity dashboard,
          so a dashboard change can't silently start recording names and phone
          numbers.
        */}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_CLARITY_ID ? (
          <Script id="ms-clarity" strategy="lazyOnload">
            {`(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");`}
          </Script>
        ) : null}

        {/* GA4 engagement events — delegated clicks and scroll depth. */}
        <EngagementTracking />

        <Script
          id="org-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </body>
    </html>
  )
}

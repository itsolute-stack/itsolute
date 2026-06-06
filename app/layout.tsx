import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { organizationSchema } from '@/lib/schema'
import { SITE } from '@/lib/content/site'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'ITSolute Systems · IT services, AMC, and automation for Kerala SMBs',
    template: '%s · ITSolute Systems',
  },
  description:
    'Hardware, software, support, and automation — under one roof. Serving SMBs across Kochi, Kottayam, Pathanamthitta, and the rest of Kerala.',
  keywords: [
    'IT services Kerala',
    'AMC services Kochi',
    'AMC services Kottayam',
    'laptop dealer Kerala',
    'Zoho partner Kerala',
    'Microsoft 365 reseller Kerala',
    'office IT setup Kerala',
    'computer maintenance Kerala',
    'IT support clinics Kerala',
  ],
  authors: [{ name: 'ITSolute Systems' }],
  creator: 'ITSolute Systems',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE.url,
    siteName: 'ITSolute Systems',
    title: 'ITSolute Systems · IT services for Kerala businesses',
    description:
      'Hardware, software, support, and automation — under one roof. One vendor. One number.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ITSolute Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITSolute Systems',
    description: 'IT services, AMC, and automation for Kerala SMBs.',
    images: ['/og-image.png'],
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
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: SITE.url,
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

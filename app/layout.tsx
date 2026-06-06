import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { organizationSchema } from '@/lib/schema'
import { SITE, SITE_URL, KEYWORDS } from '@/lib/content/site'
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
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ITSolute Systems — IT services for Kerala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ITSolute Systems',
    description:
      'Computer hardware, laptop repair, software, networking, and automation for Kerala SMBs.',
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

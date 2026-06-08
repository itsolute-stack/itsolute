'use client'

import { useState } from 'react'
import { Check, Copy, MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/whatsapp'
import { SITE_URL } from '@/lib/content/site'
import { cn } from '@/lib/utils'

/** Inline X (Twitter) glyph — Lucide doesn't ship one. */
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function ShareLinks({
  slug,
  title,
}: {
  slug: string
  title: string
}) {
  const [copied, setCopied] = useState(false)
  const url = `${SITE_URL}/blog/${slug}`
  const xShareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(
    title,
  )}&url=${encodeURIComponent(url)}`
  const waMessage = `${title} — ${url}`

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable — no-op
    }
  }

  return (
    <div className="not-prose mt-12 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-8">
      <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
        Share
      </span>
      <a
        href={whatsappLink(waMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on WhatsApp"
        className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition-colors hover:border-slate-300"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        WhatsApp
      </a>
      <a
        href={xShareUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition-colors hover:border-slate-300"
      >
        <XIcon className="h-3.5 w-3.5" />
        X
      </a>
      <button
        type="button"
        onClick={copyLink}
        aria-label={copied ? 'Link copied to clipboard' : 'Copy link to clipboard'}
        className={cn(
          'inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm transition-colors',
          copied
            ? 'border-[color:var(--color-electric)] bg-[color:var(--color-electric)] text-white'
            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300',
        )}
      >
        {copied ? (
          <Check className="h-4 w-4" aria-hidden />
        ) : (
          <Copy className="h-4 w-4" aria-hidden />
        )}
        {copied ? 'Copied' : 'Copy link'}
      </button>
    </div>
  )
}

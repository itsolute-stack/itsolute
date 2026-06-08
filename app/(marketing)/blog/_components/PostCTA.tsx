import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { whatsappLink } from '@/lib/whatsapp'
import type { Cluster } from '@/lib/content/clusters'

/**
 * Cluster-contextual conversion block, rendered at the end of every post.
 * Links to the relevant service hub + WhatsApp prefill.
 */
export function PostCTA({ cluster }: { cluster: Cluster }) {
  const message = `Hi ITSolute, I read your post about ${cluster.shortName} and had a question.`
  return (
    <aside className="not-prose mt-16 rounded-lg border border-slate-200 bg-[color:var(--color-surface-cream)] p-8 md:p-10">
      <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
        Need this done for your business?
      </p>
      <h2 className="mt-3 text-2xl md:text-3xl font-medium tracking-tight text-[color:var(--color-ink)] leading-snug">
        We do {cluster.shortName.toLowerCase()} every day. Talk to us.
      </h2>
      <p className="mt-3 max-w-2xl text-base text-slate-600 leading-relaxed">
        {cluster.description}
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Button asChild size="md" variant="primary">
          <Link href={cluster.hubUrl}>
            {cluster.hubLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild size="md" variant="secondary">
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp us
          </a>
        </Button>
      </div>
    </aside>
  )
}

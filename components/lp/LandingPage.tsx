import Image from 'next/image'
import Link from 'next/link'
import { Check, MapPin, Clock, ShieldCheck, FileText, Wrench } from 'lucide-react'
import { Logo } from '@/components/shared/Logo'
import { Container } from '@/components/layout/Container'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { QuoteForm } from '@/components/lp/QuoteForm'
import {
  WhatsAppAction,
  CallAction,
  FormScrollButton,
  StickyActionBar,
  LpAttribution,
} from '@/components/lp/LpActions'
import { LP_SHARED, withDistrict, type LpPage } from '@/lib/content/copy/landing'
import { SITE, GMAPS_URL } from '@/lib/content/site'

/**
 * Shared renderer for the Google Ads landing pages.
 *
 * Server component by design — only the form, the tracked buttons and the
 * sticky bar are client, which keeps the above-the-fold content in the HTML
 * and the JS payload small. The hero image is `priority`; everything below is
 * lazy by default.
 *
 * No nav, no footer link lists, no links to the rest of the site. The only
 * exits are the conversion actions, Google Maps, and the Privacy/Terms links
 * Google Ads requires.
 */

const TRUST_ICONS = [FileText, ShieldCheck, Wrench, MapPin]

export function LandingPage({ page, district }: { page: LpPage; district: string }) {
  const d = (s: string) => withDistrict(s, district)
  const waMessage = d(page.whatsappMessage)

  const form = (
    <QuoteForm
      source={page.source}
      stepOne={page.formStepOne}
      districtName={district}
      whatsappMessage={waMessage}
    />
  )

  return (
    <>
      <LpAttribution />

      {/* Top bar — logo is NOT a link, per the brief */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <Container className="flex h-14 items-center justify-between gap-3">
          <Logo theme="light" size="sm" linked={false} />
          <div className="flex items-center gap-2">
            <CallAction
              label="Call"
              className="border border-slate-300 text-[color:var(--color-ink)]"
            />
            <WhatsAppAction message={waMessage} label="WhatsApp" />
          </div>
        </Container>
      </header>

      <main id="main">
        {/* Hero — on mobile the H1, price, CTA and trust strip sit above the fold */}
        <section className="bg-[color:var(--color-ink)] py-8 md:py-14">
          <Container>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-[color:var(--color-accent)]">
                  {d(page.eyebrow)}
                </p>
                <h1 className="mt-3 text-3xl font-medium leading-tight tracking-tight text-white md:text-5xl">
                  {d(page.h1)}
                </h1>
                <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
                  {page.sub}
                </p>

                <div className="mt-6 inline-flex flex-col rounded-lg border border-white/15 bg-white/[0.04] px-5 py-4">
                  <span className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    {page.priceAnchor}
                  </span>
                  <span className="mt-1 text-xs text-slate-400">{page.priceNote}</span>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <FormScrollButton
                    label="Get My Free Site Survey"
                    className="bg-[color:var(--color-electric)] text-white"
                  />
                  <WhatsAppAction message={waMessage} label="Chat on WhatsApp" />
                </div>

                <ul className="mt-7 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {LP_SHARED.trustStrip.map((t, i) => {
                    const Icon = TRUST_ICONS[i] ?? Check
                    return (
                      <li key={t} className="flex items-center gap-2 text-sm text-slate-300">
                        <Icon
                          aria-hidden
                          className="h-4 w-4 shrink-0 text-[color:var(--color-accent)]"
                        />
                        {t}
                      </li>
                    )
                  })}
                </ul>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-white/10">
                  <Image
                    src={page.heroImage.src}
                    alt={page.heroImage.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                {/* Desktop: the form sits beside the hero, visible immediately */}
                <div className="mt-5 hidden lg:block">{form}</div>
              </div>
            </div>
          </Container>
        </section>

        {/* Mobile: form directly under the hero */}
        <section className="bg-slate-50 py-8 lg:hidden">
          <Container>{form}</Container>
        </section>

        {/* Pain → outcome */}
        <section className="py-12 md:py-16">
          <Container>
            <h2 className="max-w-2xl text-2xl font-medium tracking-tight text-[color:var(--color-ink)] md:text-3xl">
              {page.pain.heading}
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {page.pain.items.map((p) => (
                <li key={p.title} className="rounded-lg border border-slate-200 p-5">
                  <p className="font-mono text-xs uppercase tracking-widest text-[color:var(--color-accent)]">
                    {p.title}
                  </p>
                  <p className="mt-2 text-base leading-relaxed text-slate-600">{p.body}</p>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Price cards (gates) / audience tiles (barriers) */}
        <section className="bg-slate-50 py-12 md:py-16">
          <Container>
            <h2 className="text-2xl font-medium tracking-tight text-[color:var(--color-ink)] md:text-3xl">
              {page.choices.heading}
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {page.choices.items.map((c) => (
                <div
                  key={c.label}
                  className="flex flex-col rounded-lg border border-slate-200 bg-white p-5"
                >
                  <h3 className="text-base font-medium tracking-tight text-[color:var(--color-ink)]">
                    {c.label}
                  </h3>
                  {c.price ? (
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-[color:var(--color-ink)]">
                      {c.price}
                    </p>
                  ) : null}
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.bestFor}</p>
                  <FormScrollButton
                    label="Get quote for this"
                    preset={c.preset}
                    className="mt-auto w-full border border-slate-300 pt-3 text-[color:var(--color-ink)] hover:border-slate-400"
                  />
                </div>
              ))}
            </div>
            {page.choices.note ? (
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-500">
                {page.choices.note}
              </p>
            ) : null}
          </Container>
        </section>

        {/* Included */}
        <section className="py-12 md:py-16">
          <Container>
            <h2 className="text-2xl font-medium tracking-tight text-[color:var(--color-ink)] md:text-3xl">
              {page.included.heading}
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {page.included.items.map((i) => (
                <li key={i} className="flex items-start gap-3 text-base text-slate-700">
                  <Check
                    aria-hidden
                    className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-electric)]"
                  />
                  {i}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              {page.included.addOns}
            </p>
          </Container>
        </section>

        {/* Retrofit (gates only) */}
        {page.retrofit ? (
          <section className="bg-slate-50 py-10">
            <Container>
              <div className="rounded-lg border border-slate-200 bg-white p-6 md:p-8">
                <h2 className="text-xl font-medium tracking-tight text-[color:var(--color-ink)] md:text-2xl">
                  {page.retrofit.heading}
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600">
                  {page.retrofit.body}
                </p>
              </div>
            </Container>
          </section>
        ) : null}

        {/* How it works */}
        <section className="py-12 md:py-16">
          <Container>
            <h2 className="text-2xl font-medium tracking-tight text-[color:var(--color-ink)] md:text-3xl">
              How it works
            </h2>
            <ol className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              {LP_SHARED.steps.map((s) => (
                <li key={s.n} className="rounded-lg border border-slate-200 p-5">
                  <span className="font-mono text-xs text-[color:var(--color-accent)]">
                    0{s.n}
                  </span>
                  <h3 className="mt-2 text-base font-medium tracking-tight text-[color:var(--color-ink)]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm font-medium text-[color:var(--color-ink)]">
              {LP_SHARED.replyNote}
            </p>
          </Container>
        </section>

        {/* FAQ */}
        <section className="bg-slate-50 py-12 md:py-16">
          <Container>
            <h2 className="text-2xl font-medium tracking-tight text-[color:var(--color-ink)] md:text-3xl">
              Questions people ask us
            </h2>
            <Accordion type="single" collapsible className="mt-8 max-w-3xl">
              {page.faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`faq-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </section>

        {/* Local trust */}
        <section className="py-12 md:py-16">
          <Container>
            <h2 className="text-2xl font-medium tracking-tight text-[color:var(--color-ink)] md:text-3xl">
              {LP_SHARED.local.heading}
            </h2>
            <div className="mt-6 flex flex-col gap-3 text-base text-slate-600">
              <p className="flex items-start gap-3">
                <MapPin
                  aria-hidden
                  className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-accent)]"
                />
                {LP_SHARED.local.address}
              </p>
              <p className="flex items-start gap-3">
                <Clock
                  aria-hidden
                  className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--color-accent)]"
                />
                {LP_SHARED.local.hours}
              </p>
              <p>{LP_SHARED.local.areas}</p>
              <a
                href={GMAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[color:var(--color-electric)] underline underline-offset-4"
              >
                Open in Google Maps
              </a>
            </div>
          </Container>
        </section>

        {/* Final CTA — second copy of the form */}
        <section className="bg-[color:var(--color-ink)] py-12 md:py-16">
          <Container>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-6">
                <h2 className="text-2xl font-medium tracking-tight text-white md:text-4xl">
                  {d(page.finalCtaHeading)}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-300">
                  Free site survey, a fixed written quote before anything is ordered,
                  and {SITE.contact.phoneDisplay} if you&rsquo;d rather just talk.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <WhatsAppAction message={waMessage} label="Chat on WhatsApp" />
                  <CallAction
                    label={`Call ${SITE.contact.phoneDisplay}`}
                    className="border border-white/20 text-white"
                  />
                </div>
              </div>
              <div className="lg:col-span-6">{form}</div>
            </div>
          </Container>
        </section>
      </main>

      {/* Minimal legal footer — Google Ads requires a reachable privacy policy */}
      <footer className="border-t border-slate-200 bg-white py-6 pb-24 md:pb-6">
        <Container className="flex flex-col items-center gap-2 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {SITE.name}. {LP_SHARED.local.address}
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/privacy" className="text-slate-500 underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-500 underline underline-offset-4">
              Terms
            </Link>
          </div>
        </Container>
      </footer>

      <StickyActionBar whatsappMessage={waMessage} />
    </>
  )
}

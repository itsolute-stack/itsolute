import Script from 'next/script'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { PageHero } from '@/components/shared/PageHero'
import { Button } from '@/components/ui/button'
import { FinalCTA } from '@/components/home/FinalCTA'
import { hardwareCopy } from '@/lib/content/copy/hardware'
import { serviceSchema } from '@/lib/schema'

export const metadata = {
  title: {
    absolute:
      'Business Laptops & Computer Hardware in Kottayam, Kerala | ITSolute',
  },
  description:
    'Buy business laptops, desktops, servers, and IT hardware in Kottayam. Bulk pricing for offices and schools. Authorised HP, Dell, Lenovo reseller. GST invoice. Kerala-wide delivery.',
}

export default function HardwarePage() {
  return (
    <>
      <PageHero
        eyebrow={hardwareCopy.hero.eyebrow}
        headline={hardwareCopy.hero.headline}
        sub={hardwareCopy.hero.sub}
        primaryCta={{ label: hardwareCopy.hero.primaryCta, href: '/contact?service=hardware' }}
        secondaryCta={{
          label: hardwareCopy.hero.secondaryCta,
          message: 'Hi ITSolute, I need a hardware quote.',
        }}
      />

      {/* Categories */}
      <Section theme="light">
        <Container>
          <SectionHeader
            eyebrow={hardwareCopy.categories.eyebrow}
            headline={hardwareCopy.categories.headline}
          />

          <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {hardwareCopy.categories.items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-6 md:p-8 transition-all hover:border-slate-300 hover:-translate-y-0.5"
              >
                <h3 className="text-xl md:text-2xl font-medium tracking-tight text-[color:var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Why buy through ITSolute */}
      <Section theme="dark" id="networking">
        <Container>
          <SectionHeader
            eyebrow={hardwareCopy.why.eyebrow}
            headline={hardwareCopy.why.headline}
            theme="dark"
          />

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {hardwareCopy.why.points.map((p) => (
              <div key={p.title} className="flex flex-col gap-3">
                <Check
                  className="h-7 w-7 text-[color:var(--color-cyan)]"
                  strokeWidth={2}
                />
                <h3 className="text-lg md:text-xl font-medium tracking-tight text-white">
                  {p.title}
                </h3>
                <p className="text-base text-slate-300 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bulk orders */}
      <Section theme="cream">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow={hardwareCopy.bulk.eyebrow}
                headline={hardwareCopy.bulk.headline}
                sub={hardwareCopy.bulk.body}
              />
            </div>
            <div className="lg:col-span-5 flex flex-col gap-4">
              <Button asChild size="lg" variant="primary">
                <Link href="/contact?service=hardware">Request a bulk quote</Link>
              </Button>
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                Most bulk quotes returned within 24 hours
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA
        headline={hardwareCopy.finalCta.headline}
        sub={hardwareCopy.finalCta.sub}
        primary={hardwareCopy.finalCta.primary}
        secondary={hardwareCopy.finalCta.secondary}
        whatsappMessage="Hi ITSolute, I need a hardware quote."
      />

      <Script
        id="hardware-service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: 'Business Laptops & Computer Hardware',
              description:
                'Business hardware supply, setup, and support across Kerala. Laptops, desktops, servers, networking, and peripherals.',
              slug: 'hardware',
              serviceType: 'Computer Hardware Supply',
              priceRange: { low: '15000', high: '500000' },
            }),
          ),
        }}
      />
    </>
  )
}

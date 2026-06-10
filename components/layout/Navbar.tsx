'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Container } from './Container'
import { Logo } from '@/components/shared/Logo'
import { Button } from '@/components/ui/button'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { primaryNav } from '@/lib/content/nav'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[color:var(--color-ink)]/80 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Logo theme="dark" size="md" />

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton variant="primary" size="sm" label="WhatsApp us" />
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="md:hidden rounded-md p-2 text-white hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="flex h-full flex-col">
              <div className="mt-12 flex flex-col gap-1">
                {primaryNav.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="border-b border-white/10 py-5 text-2xl font-medium tracking-tight text-white"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <WhatsAppButton variant="primary" size="lg" />
                <Button asChild variant="outlineDark" size="lg">
                  <Link href="/contact">Get a free audit</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  )
}

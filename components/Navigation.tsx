'use client'

import { useState, useEffect } from 'react'

interface NavigationProps {
  coupleNames?: string
}

const links = [
  { href: '#story', label: 'Our Story' },
  { href: '#wedding-day', label: 'Wedding Day' },
  { href: '#venue', label: 'Venue' },
  { href: '#dress-code', label: 'Dress Code' },
  { href: '#honeymoon', label: 'Honeymoon' },
  { href: '#rsvp', label: 'RSVP' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navigation({ coupleNames }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const initials = coupleNames ? 'A & A' : 'A & A'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-ivory/90 backdrop-blur-md border-b border-softgray py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#top"
          className={`font-serif text-lg tracking-widest ${
            scrolled ? 'text-navy' : 'text-ivory'
          }`}
        >
          {initials}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs uppercase tracking-widest transition-colors hover:text-champagne ${
                scrolled ? 'text-navy' : 'text-ivory'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-xs uppercase tracking-widest ${
            scrolled ? 'text-navy' : 'text-ivory'
          }`}
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-ivory border-t border-softgray mt-3 animate-fadeIn">
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest text-navy hover:text-champagne"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
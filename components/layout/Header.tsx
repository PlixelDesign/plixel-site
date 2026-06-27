'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/trabalhos', label: 'Trabalhos' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-deep/95 backdrop-blur-sm border-b border-blue-neon/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Image
            src="/assets/plixel-logo-white.png"
            alt="Plixel"
            width={120}
            height={40}
            className="h-8 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-poppins text-sm tracking-widest uppercase transition-colors duration-200 ${
                pathname.startsWith(l.href)
                  ? 'text-yellow-neon'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contato" className="btn-primary text-xs py-2 px-5">
            Falar com a Plixel
          </Link>
        </nav>

        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy-deep border-t border-blue-neon/10 px-6 sm:px-8 py-6 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`font-poppins text-sm tracking-widest uppercase ${
                pathname.startsWith(l.href) ? 'text-yellow-neon' : 'text-white/70'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contato" onClick={() => setOpen(false)} className="btn-primary text-center text-xs py-2">
            Falar com a Plixel
          </Link>
        </div>
      )}
    </header>
  )
}

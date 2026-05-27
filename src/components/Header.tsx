'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Logo } from './Logo';

const NAV = [
  { href: '/#features', label: 'Features' },
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/faq', label: 'FAQ' },
  { href: '/support', label: 'Support' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-950/70 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between">
        <Logo size={32} />

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-100/75 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/download" className="btn-primary text-sm">
            Get the app
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2 text-white"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="md:hidden border-t border-white/5 bg-ink-950/95 backdrop-blur-xl" aria-label="Mobile">
          <div className="container-x py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-ink-100/85 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/download" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
              Get the app
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

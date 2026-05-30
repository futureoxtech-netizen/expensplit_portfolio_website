import Link from 'next/link';
import { Logo } from './Logo';
import { SITE } from '@/lib/site';

const COLS = [
  {
    title: 'Product',
    links: [
      { href: '/#features', label: 'Features' },
      { href: '/#how-it-works', label: 'How it works' },
      { href: '/download', label: 'Download' },
      { href: '/faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: SITE.parent, label: 'Futureox Tech', external: true },
      { href: '/contact', label: 'Contact' },
      { href: '/support', label: 'Support' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms & Conditions' },
      { href: '/cookies', label: 'Cookie Policy' },
      { href: '/delete-account', label: 'Delete account & data' },
    ],
  },
] as const;

//test commit sd
export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-ink-950/60">
      <div className="container-x py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 max-w-sm">
            <Logo size={36} />
            <p className="mt-4 text-sm text-ink-100/70">
              {SITE.tagline} Track, split, and settle expenses with friends, family, roommates and trips —
              beautifully and in real time.
            </p>
            <p className="mt-4 text-xs text-ink-400">
              © {new Date().getFullYear()} {SITE.company}. All rights reserved.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-400">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    {'external' in l && l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-ink-100/80 hover:text-white"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className="text-sm text-ink-100/80 hover:text-white">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center">
          <p className="text-xs text-ink-400">
            A product of <a href={SITE.parent} className="text-ink-100/80 hover:text-white">Futureox Tech</a>.
          </p>
          <p className="text-xs text-ink-400">
            Made with care · <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { PhoneMockup } from './PhoneMockup';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x relative pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div className="animate-fade-up">
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
              Split expenses <br className="hidden sm:block" />
              the <span className="gradient-text">smart way.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink-100/80">
              Expensplit makes it effortless to track shared expenses, settle debts and manage
              personal finance with friends, family, roommates and trips — beautifully designed,
              lightning-fast, and always in sync.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/download" className="btn-primary">
                Get the app — it&apos;s free
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/#how-it-works" className="btn-ghost">See how it works</Link>
            </div>
            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-100/70">
              <li className="flex items-center gap-2"><Check /> No ads</li>
              <li className="flex items-center gap-2"><Check /> Free to use</li>
              <li className="flex items-center gap-2"><Check /> Private &amp; secure</li>
              <li className="flex items-center gap-2"><Check /> Works offline</li>
            </ul>
          </div>

          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="absolute inset-0 -z-10 bg-hero-radial blur-3xl" aria-hidden="true" />
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-mint-500/15 text-mint-400">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5 9-11" /></svg>
    </span>
  );
}

import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Download Expensplit',
  description:
    'Download Expensplit for Android on Google Play, or use it on the web. Free, no ads, real-time sync.',
  alternates: { canonical: '/download' },
};

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Download"
        title="Get Expensplit on your device"
        description="Free to download and use. No ads. Real-time sync across all your devices."
      />
      <section className="container-x pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Google Play */}
          <a
            href={SITE.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass group p-8 transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-gradient text-white">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.6 2.3a1.5 1.5 0 0 0-.6 1.2v17a1.5 1.5 0 0 0 .6 1.2L13 12 3.6 2.3zm10.8 10.8L4.9 22.5l11.9-6.6-2.4-2.8zM4.9 1.5l9.5 9.7 2.4-2.8L4.9 1.5zm15.7 9-3.4-1.9-2.7 3 2.7 3 3.4-1.9c1.2-.7 1.2-2.5 0-3.2z"/></svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-400">Get it on</p>
                <p className="text-2xl font-extrabold text-white">Google Play</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-ink-100/75">
              Best on Android phones &amp; tablets. Requires Android 8.0+.
            </p>
            <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-300 group-hover:text-brand-200">
              Open Google Play
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </p>
          </a>

          {/* Web */}
          <a href="https://app.expensplit.futureoxtech.com" className="glass group p-8 transition-transform hover:-translate-y-1">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-mint-500/15 text-mint-400">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-ink-400">Use on the</p>
                <p className="text-2xl font-extrabold text-white">Web</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-ink-100/75">
              Works in any modern browser. Install it as a PWA for a desktop-app feel.
            </p>
            <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-mint-400 group-hover:text-mint-500">
              Open web app
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </p>
          </a>
        </div>

        <p className="mt-10 text-center text-sm text-ink-400">
          iOS is coming soon. <a href="/contact" className="text-brand-300 hover:text-brand-200">Tell us you want it →</a>
        </p>
      </section>
    </>
  );
}

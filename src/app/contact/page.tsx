import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact us',
  description:
    'Get in touch with the Expensplit team for support, partnerships, press, or general enquiries.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Say hi"
        title="Contact us"
        description="We'd love to hear from you. Pick the channel that fits, and we'll get back to you within one business day."
      />

      <section className="container-x pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: 'General',  email: SITE.contactEmail, desc: 'Questions, feedback, or just to say hi.' },
            { title: 'Support',  email: SITE.email,        desc: 'Issues with the app or your account.' },
            { title: 'Privacy',  email: SITE.privacyEmail, desc: 'Data requests, deletion, and privacy enquiries.' },
          ].map((c) => (
            <div key={c.title} className="glass p-6">
              <p className="text-xs uppercase tracking-wider text-ink-400">{c.title}</p>
              <a href={`mailto:${c.email}`} className="mt-2 block text-xl font-bold text-white hover:gradient-text">
                {c.email}
              </a>
              <p className="mt-2 text-sm text-ink-100/75">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 glass p-6">
          <h2 className="text-xl font-bold">Send us a message</h2>
          <p className="mt-1 text-sm text-ink-100/75">
            Use the form below — it opens your email client with the basics pre-filled.
          </p>
          <form
            action={`mailto:${SITE.contactEmail}`}
            method="post"
            encType="text/plain"
            className="mt-6 grid gap-4 md:grid-cols-2"
          >
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-400">Name</span>
              <input name="name" required className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder-ink-400 focus:border-brand-400 focus:outline-none" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-400">Email</span>
              <input type="email" name="email" required className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder-ink-400 focus:border-brand-400 focus:outline-none" placeholder="you@example.com" />
            </label>
            <label className="block md:col-span-2">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-400">Message</span>
              <textarea name="message" rows={6} required className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder-ink-400 focus:border-brand-400 focus:outline-none" placeholder="How can we help?" />
            </label>
            <div className="md:col-span-2">
              <button type="submit" className="btn-primary">Send message</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Support',
  description:
    'Need help with Expensplit? Browse common topics or contact our support team.',
  alternates: { canonical: '/support' },
};

const TOPICS = [
  { title: 'Getting started',    body: 'Create an account, join a group, and add your first expense in under a minute.', href: '/faq' },
  { title: 'Splits & balances',  body: 'How equal, exact, percent and shares splits work, plus tax/tip and recurring expenses.', href: '/faq' },
  { title: 'Settlements',        body: 'Recording a payment, undoing a settlement, and how debt simplification works.', href: '/faq' },
  { title: 'Account & security', body: 'Change password, sign in on a new device, enable biometric lock, recover access.', href: '/faq' },
  { title: 'Privacy & data',     body: 'What data we store, who can see it, and how to export or delete your data.', href: '/privacy-policy' },
  { title: 'Delete my account',  body: 'Permanently delete your Expensplit account and personal data.', href: '/delete-account' },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Help center"
        title="How can we help?"
        description="Browse the most common topics. If you can’t find what you need, email our team — we typically reply within one business day."
      />

      <section className="container-x pb-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((t) => (
            <Link key={t.title} href={t.href} className="glass group block p-6 transition-transform hover:-translate-y-1">
              <h3 className="text-lg font-bold">{t.title}</h3>
              <p className="mt-2 text-sm text-ink-100/75">{t.body}</p>
              <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-300 group-hover:text-brand-200">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-10 glass p-6 text-center">
          <h2 className="text-2xl font-bold">Still stuck?</h2>
          <p className="mt-1 text-ink-100/75">
            Email <a className="text-brand-300 hover:text-brand-200" href={`mailto:${SITE.email}`}>{SITE.email}</a> and a human will help.
          </p>
        </div>
      </section>
    </>
  );
}

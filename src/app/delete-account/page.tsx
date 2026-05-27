import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Delete your account & data',
  description:
    'Request deletion of your Expensplit account and all associated personal data. This complies with Google Play account-deletion requirements.',
  alternates: { canonical: '/delete-account' },
};

export default function DeleteAccountPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Delete your account & data"
        description="You can permanently delete your Expensplit account and all associated personal data at any time. This page explains exactly what gets deleted and how to request it."
      />

      <section className="container-x pb-24">
        <article className="prose-legal mx-auto max-w-3xl">
          <h2>1. Delete from inside the app (fastest)</h2>
          <ol className="list-decimal pl-6 space-y-1.5">
            <li>Open the Expensplit app.</li>
            <li>Go to <strong>Profile → Settings → Delete account</strong>.</li>
            <li>Confirm with your password. That&apos;s it.</li>
          </ol>

          <h2>2. Delete via web form</h2>
          <p>
            If you no longer have the app installed, request deletion by emailing us — we will verify
            and process within 7 business days.
          </p>
          <form
            action={`mailto:${SITE.privacyEmail}?subject=Delete%20my%20Expensplit%20account`}
            method="post"
            encType="text/plain"
            className="mt-4 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:grid-cols-2"
          >
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-400">Account email *</span>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder-ink-400 focus:border-brand-400 focus:outline-none"
                placeholder="you@example.com"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-400">Account display name</span>
              <input
                name="name"
                className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder-ink-400 focus:border-brand-400 focus:outline-none"
                placeholder="Your name"
              />
            </label>
            <label className="block md:col-span-2">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-ink-400">Reason (optional)</span>
              <textarea
                name="reason"
                rows={4}
                className="w-full rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white placeholder-ink-400 focus:border-brand-400 focus:outline-none"
                placeholder="Optional — helps us improve."
              />
            </label>
            <div className="md:col-span-2">
              <label className="flex items-start gap-3 text-sm text-ink-100/85">
                <input type="checkbox" required className="mt-1" />
                <span>
                  I understand this action is permanent and will delete my account, personal expenses,
                  settlement history, and notifications. Data I created inside groups shared with
                  other people may be retained with my name replaced by &ldquo;Deleted user&rdquo;.
                </span>
              </label>
            </div>
            <div className="md:col-span-2">
              <button type="submit" className="btn-primary">Request deletion</button>
            </div>
          </form>

          <h2>3. What we delete</h2>
          <ul>
            <li>Your account credentials (email, password hash, profile photo).</li>
            <li>Your personal profile, language and theme preferences.</li>
            <li>Your personal expense tracker entries.</li>
            <li>Notifications, sessions, and authentication tokens.</li>
            <li>Support tickets you opened (after retention required by law).</li>
          </ul>

          <h2>4. What may be retained</h2>
          <ul>
            <li>
              <strong>Shared group data:</strong> expenses and settlements you created inside a
              group shared with others are retained so the remaining members&apos; balances stay
              correct. Your name is replaced with &ldquo;Deleted user&rdquo; and your profile photo
              is removed.
            </li>
            <li>
              <strong>Anonymised, aggregated stats</strong> that cannot be linked back to you.
            </li>
            <li>
              <strong>Data required by law</strong> (e.g., tax, fraud, accounting) — restricted from
              active use until the retention period expires.
            </li>
          </ul>

          <h2>5. Timeline</h2>
          <ul>
            <li>In-app deletion: <strong>immediate</strong>.</li>
            <li>Email request: verified and processed within <strong>7 business days</strong>.</li>
            <li>Backups containing your data are purged within <strong>90 days</strong>.</li>
          </ul>

          <h2>6. Questions</h2>
          <p>
            See our full <Link href="/privacy-policy">Privacy Policy</Link> or email{' '}
            <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>.
          </p>
        </article>
      </section>
    </>
  );
}

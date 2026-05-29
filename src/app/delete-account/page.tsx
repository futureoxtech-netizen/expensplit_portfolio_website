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

          <h2>2. Request deletion by email</h2>
          <p>
            If you no longer have the app installed, email{' '}
            <a href={`mailto:${SITE.privacyEmail}?subject=Delete%20my%20Expensplit%20account`}>
              {SITE.privacyEmail}
            </a>{' '}
            from your account email address with the subject &ldquo;Delete my Expensplit account&rdquo;.
            We will verify and process your request within 7 business days.
          </p>

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

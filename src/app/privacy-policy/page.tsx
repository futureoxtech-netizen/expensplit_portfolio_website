import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Expensplit Privacy Policy. Learn what personal information we collect, how we use it, how we protect it, your rights and choices, and our compliance with GDPR, CCPA, COPPA and Google Play requirements.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Effective date: ${SITE.privacyEffectiveDate}. This Privacy Policy explains how ${SITE.legalName} ("Expensplit", "we", "us", "our") collects, uses, shares and protects information when you use the Expensplit mobile application, website and related services (collectively, the "Service").`}
      />

      <section className="container-x pb-24">
        <article className="prose-legal mx-auto max-w-3xl">
          <p>
            Your privacy is fundamental to how we build Expensplit. We designed the Service to collect
            the minimum amount of personal information necessary to make expense splitting work, and
            we never sell your personal information.
          </p>
          <p>
            This Privacy Policy applies to all users of Expensplit worldwide and is intended to comply
            with the EU General Data Protection Regulation (GDPR), the UK Data Protection Act 2018,
            the California Consumer Privacy Act (CCPA/CPRA), the Children&apos;s Online Privacy
            Protection Act (COPPA), and the{' '}
            <a href="https://support.google.com/googleplay/android-developer/answer/10787469" target="_blank" rel="noopener noreferrer">
              Google Play Developer Program Policies
            </a>{' '}
            and Data Safety requirements.
          </p>

          <h2>1. Information we collect</h2>
          <p>We collect information in three categories:</p>

          <h3>1.1 Information you give us</h3>
          <ul>
            <li>
              <strong>Account information:</strong> name, email address, password (stored as a salted
              hash, never in plain text), and optional profile photo.
            </li>
            <li>
              <strong>Expense &amp; group content:</strong> the groups you create or join, the
              expenses and settlements you record, descriptions, categories, amounts, currencies,
              dates, notes, and (optionally) attached receipt images.
            </li>
            <li>
              <strong>Contact data:</strong> if you invite others by email, we use that email solely
              to send the invite. We do not import your phone&apos;s contact list.
            </li>
            <li>
              <strong>Support communications:</strong> if you contact us, we receive your email
              address and any information you choose to send.
            </li>
          </ul>

          <h3>1.2 Information collected automatically</h3>
          <ul>
            <li>
              <strong>Device &amp; technical data:</strong> device model, operating system version,
              app version, language, time zone, and a non-resettable installation ID we generate
              ourselves (we do not use Google Advertising ID).
            </li>
            <li>
              <strong>Log &amp; diagnostic data:</strong> IP address (stored only transiently for
              rate-limiting and security), request timestamps, HTTP status codes, and crash reports.
            </li>
            <li>
              <strong>Authentication tokens:</strong> JWT access and refresh tokens stored securely
              on your device (Android Keystore on mobile, browser secure storage on web) so you stay
              signed in.
            </li>
          </ul>

          <h3>1.3 Information from third parties</h3>
          <p>
            We do not buy personal information from data brokers. If you sign in using a third-party
            provider in future (e.g., Google Sign-In), that provider will share basic profile
            information (name, email) per the consents you grant.
          </p>

          <h2>2. How we use your information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>provide, operate, maintain and improve the Service;</li>
            <li>create and secure your account and authenticate you;</li>
            <li>show you groups, expenses, balances, settlements and analytics;</li>
            <li>send transactional emails (invites, password reset, account changes);</li>
            <li>respond to your support requests and feedback;</li>
            <li>detect, prevent and address fraud, abuse, security and technical issues;</li>
            <li>comply with legal obligations and enforce our Terms &amp; Conditions.</li>
          </ul>
          <p>
            <strong>We do not use your data for advertising or behavioural profiling.</strong> The
            app shows no third-party ads and uses no ad-tech SDKs.
          </p>

          <h2>3. Legal bases for processing (GDPR)</h2>
          <ul>
            <li>
              <strong>Performance of a contract</strong> (Art. 6(1)(b)) — to deliver the Service you
              signed up for.
            </li>
            <li>
              <strong>Legitimate interests</strong> (Art. 6(1)(f)) — to keep the Service secure,
              prevent abuse, and improve features. We balance this against your rights and freedoms.
            </li>
            <li>
              <strong>Consent</strong> (Art. 6(1)(a)) — for any optional features that explicitly
              request consent (e.g., crash reporting on iOS, push notifications).
            </li>
            <li>
              <strong>Legal obligation</strong> (Art. 6(1)(c)) — when required by law.
            </li>
          </ul>

          <h2>4. How we share information</h2>
          <p>
            We share personal information only in the limited circumstances below, and never sell it.
          </p>
          <ul>
            <li>
              <strong>With other group members:</strong> when you add an expense or settlement, the
              other members of that group can see your name, profile photo, the amount, description,
              category and date. This is the inherent purpose of a shared expense.
            </li>
            <li>
              <strong>Service providers (sub-processors):</strong> cloud hosting (e.g., AWS / DigitalOcean),
              transactional email (e.g., Postmark / SendGrid), and crash reporting. They process data
              only on our instructions, under data-processing agreements.
            </li>
            <li>
              <strong>Legal &amp; safety:</strong> if required by law, regulation, legal process,
              governmental request, or to protect rights, property or safety.
            </li>
            <li>
              <strong>Business transfers:</strong> if Expensplit is involved in a merger, acquisition
              or asset sale, your information may transfer subject to this Privacy Policy.
            </li>
          </ul>

          <h2>5. Data retention</h2>
          <p>
            We retain account and expense data for as long as your account is active. If you delete
            your account, we delete or anonymise your personal information within <strong>30 days</strong>,
            except where we are required to retain it for legal or accounting purposes (in which case
            it is restricted from active use). Backups are purged on a rolling cycle that does not
            exceed 90 days.
          </p>

          <h2>6. Data security</h2>
          <ul>
            <li>All network traffic between the app and our servers uses TLS 1.2+.</li>
            <li>Passwords are hashed using bcrypt with per-user salts.</li>
            <li>Authentication uses short-lived JWT access tokens with refresh-token rotation.</li>
            <li>Database access is restricted to authorised personnel and audited.</li>
            <li>We follow the principle of least privilege internally.</li>
          </ul>
          <p>
            No method of transmission or storage is 100% secure. While we use commercially reasonable
            measures to protect your data, we cannot guarantee absolute security.
          </p>

          <h2>7. International data transfers</h2>
          <p>
            Expensplit operates globally. Your information may be processed in countries other than
            your own. When we transfer personal data out of the EEA/UK, we rely on Standard
            Contractual Clauses (SCCs) and equivalent safeguards approved by the European Commission
            and the UK ICO.
          </p>

          <h2>8. Your rights &amp; choices</h2>
          <p>Subject to local law, you have the right to:</p>
          <ul>
            <li>access the personal data we hold about you;</li>
            <li>rectify inaccurate or incomplete data;</li>
            <li>erase your data (the &ldquo;right to be forgotten&rdquo;);</li>
            <li>restrict or object to processing;</li>
            <li>port your data to another service in a machine-readable format;</li>
            <li>withdraw consent at any time (where processing is based on consent);</li>
            <li>lodge a complaint with your local data protection authority.</li>
          </ul>
          <p>
            <strong>California residents</strong> have additional rights under the CCPA/CPRA,
            including the right to know what categories of personal information we collect and
            disclose, the right to deletion, the right to correct, the right to opt out of &ldquo;sales&rdquo;
            and &ldquo;sharing&rdquo; (we do neither), and the right not to be discriminated against for
            exercising these rights.
          </p>
          <p>
            To exercise any of these rights, email{' '}
            <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a> or use the in-app
            settings. We respond within 30 days.
          </p>

          <h2>9. Account &amp; data deletion</h2>
          <p>
            You can permanently delete your Expensplit account and associated personal data at any
            time:
          </p>
          <ul>
            <li>
              In the app: <em>Profile → Settings → Delete account</em>.
            </li>
            <li>
              From a browser: visit{' '}
              <Link href="/delete-account">{SITE.url}/delete-account</Link> and submit the form.
            </li>
            <li>
              By email: write to <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>{' '}
              from the email address linked to your account.
            </li>
          </ul>
          <p>
            Deletion removes your account credentials, profile, personal expenses, settlement
            history, notifications and support tickets. Expenses you authored within groups you
            shared with others may be retained in those groups (with your name replaced by
            &ldquo;Deleted user&rdquo;) so other members&apos; records remain balanced. Backups are
            purged on a rolling cycle within 90 days.
          </p>

          <h2>10. Children&apos;s privacy</h2>
          <p>
            Expensplit is not directed to children under <strong>13</strong> (or under <strong>16</strong>{' '}
            in the EEA / UK where applicable). We do not knowingly collect personal information from
            children. If you believe a child has provided us with personal information, please
            contact us at <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a> and we
            will promptly delete it.
          </p>

          <h2>11. Permissions we request on Android</h2>
          <p>
            The Expensplit Android app requests the following permissions. Each is requested only
            when needed for the feature you use, and you may decline or revoke at any time in your
            device settings.
          </p>
          <ul>
            <li>
              <strong>Internet</strong> — required to sync your data with our servers.
            </li>
            <li>
              <strong>Camera (optional)</strong> — to scan a QR code to join a group, or to capture a
              receipt photo to attach to an expense. Images are stored only with the expense and only
              shared with members of that group.
            </li>
            <li>
              <strong>Photos / Storage (optional)</strong> — to pick a profile picture or attach a
              receipt from your gallery.
            </li>
            <li>
              <strong>Notifications (optional)</strong> — to alert you when someone adds an expense,
              settles up, or invites you to a group.
            </li>
            <li>
              <strong>Biometric (optional, future)</strong> — for app-lock convenience. Biometric
              data never leaves your device.
            </li>
          </ul>

          <h2>12. Google Play Data Safety summary</h2>
          <p>
            For transparency, the table below summarises what we declare in Google Play Data Safety.
          </p>
          <ul>
            <li>
              <strong>Data collected:</strong> Name, Email, User IDs, App interactions, Crash logs,
              Diagnostics, Photos (optional, only if you attach), Financial info (expense amounts
              and currency — not payment card or bank account data).
            </li>
            <li>
              <strong>Purpose:</strong> App functionality, Account management, Analytics (own
              service only), Fraud prevention &amp; security, Personalisation of your own data view.
            </li>
            <li>
              <strong>Sharing:</strong> No data sold to third parties. Limited sharing with
              sub-processors strictly to operate the Service.
            </li>
            <li>
              <strong>Security practices:</strong> Data encrypted in transit, data encrypted at rest,
              you can request deletion, we follow Play Families Policy if applicable.
            </li>
          </ul>

          <h2>13. Third-party services</h2>
          <p>
            We use the following service providers. Each is bound by a data-processing agreement and
            handles data only on our instructions:
          </p>
          <ul>
            <li>Cloud hosting &amp; database — for storing your account and expense data.</li>
            <li>Transactional email — for invites, password resets, and account notifications.</li>
            <li>Push notifications — for real-time alerts (Firebase Cloud Messaging on Android).</li>
            <li>Crash reporting — to detect and fix crashes (anonymised stack traces only).</li>
          </ul>
          <p>
            Our website (this site) does not use third-party advertising trackers. We may use
            privacy-respecting, cookieless analytics for aggregate site metrics.
          </p>

          <h2>14. Cookies &amp; similar technologies</h2>
          <p>
            Our website uses only strictly necessary cookies for security and preferences. For
            details, see our <Link href="/cookies">Cookie Policy</Link>.
          </p>

          <h2>15. Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. If we make material changes, we will
            notify you in the app and/or by email at least 14 days before the changes take effect.
            The &ldquo;Effective date&rdquo; at the top of this page indicates when the latest
            version became effective. Continued use of the Service after the effective date
            constitutes acceptance.
          </p>

          <h2>16. Contact us</h2>
          <p>
            For any questions, requests, or complaints about this Privacy Policy or our handling of
            your personal information, please contact:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a>
            </li>
            <li>
              <strong>Postal:</strong> {SITE.address}
            </li>
            <li>
              <strong>Data Controller:</strong> {SITE.legalName}
            </li>
          </ul>
          <p>
            If you are in the EEA/UK and we have not addressed your concern to your satisfaction, you
            may lodge a complaint with your local Data Protection Authority.
          </p>
        </article>
      </section>
    </>
  );
}

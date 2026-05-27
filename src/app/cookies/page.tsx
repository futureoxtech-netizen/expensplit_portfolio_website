import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'How Expensplit uses cookies and similar technologies on our website. Strictly necessary only — no advertising or tracking cookies.',
  alternates: { canonical: '/cookies' },
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        description={`Effective date: ${SITE.privacyEffectiveDate}. This Cookie Policy explains what cookies are, which ones we use on the Expensplit website, and how you can control them.`}
      />
      <section className="container-x pb-24">
        <article className="prose-legal mx-auto max-w-3xl">
          <h2>1. What are cookies?</h2>
          <p>
            Cookies are small text files placed on your device by websites you visit. They are
            widely used to make websites work, or work more efficiently, and to provide information
            to site owners.
          </p>

          <h2>2. Cookies we use</h2>
          <p>
            The Expensplit website uses only <strong>strictly necessary</strong> cookies and
            similar local storage. We do not use third-party advertising cookies, tracking pixels,
            or behavioural profiling.
          </p>
          <ul>
            <li>
              <strong>Session &amp; preference:</strong> remembers your colour-scheme preference and
              keeps your session secure.
            </li>
            <li>
              <strong>Security:</strong> protects against CSRF and abuse.
            </li>
          </ul>

          <h2>3. Analytics</h2>
          <p>
            We may use privacy-friendly, cookieless analytics that count aggregate page views
            without identifying individual visitors. We do not use Google Analytics or other
            cross-site tracking analytics on this website.
          </p>

          <h2>4. Managing cookies</h2>
          <p>
            You can control cookies through your browser settings. Note that disabling strictly
            necessary cookies may impact site functionality.
          </p>

          <h2>5. Changes</h2>
          <p>
            We may update this Cookie Policy from time to time. The &ldquo;Effective date&rdquo;
            above shows when it was last updated.
          </p>

          <h2>6. Contact</h2>
          <p>
            Questions? Email <a href={`mailto:${SITE.privacyEmail}`}>{SITE.privacyEmail}</a> or
            see the full <Link href="/privacy-policy">Privacy Policy</Link>.
          </p>
        </article>
      </section>
    </>
  );
}

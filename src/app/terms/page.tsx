import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'The Expensplit Terms & Conditions govern your use of our app and website. Read about your rights, our obligations, account rules, acceptable use, disclaimers, and dispute resolution.',
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description={`Effective date: ${SITE.termsEffectiveDate}. These Terms & Conditions ("Terms") form a binding agreement between you and ${SITE.legalName} ("Expensplit", "we", "us", "our") and govern your access to and use of the Expensplit mobile application, website, and related services (the "Service").`}
      />

      <section className="container-x pb-24">
        <article className="prose-legal mx-auto max-w-3xl">
          <p>
            By creating an account, downloading the app, or otherwise using the Service, you agree
            to be bound by these Terms and our <Link href="/privacy-policy">Privacy Policy</Link>.
            If you do not agree, do not use the Service.
          </p>

          <h2>1. Eligibility</h2>
          <p>
            You must be at least <strong>13 years old</strong> (or <strong>16</strong> in the EEA / UK
            where applicable) to use Expensplit. By using the Service, you represent and warrant that
            you meet this age requirement and that you have the legal capacity to enter into a
            binding contract. If you are using the Service on behalf of an organisation, you
            represent that you are authorised to bind that organisation to these Terms.
          </p>

          <h2>2. Your account</h2>
          <ul>
            <li>You are responsible for the accuracy of the information you provide.</li>
            <li>You are responsible for keeping your password and devices secure.</li>
            <li>You are responsible for all activity that occurs under your account.</li>
            <li>You must notify us immediately of any unauthorised access at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.</li>
            <li>You may not transfer your account or share it with another person.</li>
          </ul>

          <h2>3. The Service</h2>
          <p>
            Expensplit is a software tool that helps you and the people you choose to invite track
            shared expenses, calculate balances, simplify debts, and record settlements between
            yourselves. <strong>Expensplit does not process, hold, transmit, custody, transfer, or
            move money.</strong> All payments between users happen outside the Service via your own
            chosen method (bank transfer, mobile wallet, cash, etc.).
          </p>
          <p>
            Expensplit is not a bank, a money services business, a payment processor, a remittance
            provider, a broker, a financial advisor, or a tax preparer. Nothing in the Service
            constitutes financial, legal, tax, or accounting advice.
          </p>

          <h2>4. Licence to use the Service</h2>
          <p>
            Subject to your compliance with these Terms, we grant you a limited, non-exclusive,
            non-transferable, non-sublicensable, revocable licence to install and use the Expensplit
            app on devices you own or control, and to use the website, solely for your personal,
            non-commercial use (or for the internal business use of the organisation that authorised
            you).
          </p>

          <h2>5. Acceptable use</h2>
          <p>You agree not to, and not to permit anyone else to:</p>
          <ul>
            <li>use the Service in violation of any applicable law or regulation;</li>
            <li>upload or transmit any content that is unlawful, harassing, defamatory, obscene, infringing or otherwise objectionable;</li>
            <li>use the Service to track, record, or share information about a person without their consent;</li>
            <li>impersonate any person or misrepresent your affiliation with any person;</li>
            <li>access, tamper with, or use non-public areas of the Service or our systems;</li>
            <li>reverse engineer, decompile, disassemble, or otherwise attempt to derive source code, except to the extent expressly permitted by law;</li>
            <li>probe, scan or test the vulnerability of the Service or breach security or authentication measures;</li>
            <li>interfere with, disrupt or place an unreasonable load on the Service or its infrastructure;</li>
            <li>use any robot, spider, scraper or other automated means to access the Service or extract data;</li>
            <li>resell, rent, lease, sublicense or otherwise commercially exploit the Service;</li>
            <li>use the Service to send spam, phishing, or other unsolicited messages.</li>
          </ul>

          <h2>6. Your content</h2>
          <p>
            You retain all rights in the content you submit to the Service, including expense
            descriptions, group names, receipts and notes (&ldquo;Your Content&rdquo;). By submitting
            Your Content, you grant Expensplit a worldwide, non-exclusive, royalty-free licence to
            host, store, process, transmit, display, and back up Your Content solely to operate and
            improve the Service and to share it with the other members of the groups you choose to
            participate in.
          </p>
          <p>You represent and warrant that:</p>
          <ul>
            <li>you own or have all necessary rights to Your Content;</li>
            <li>Your Content does not violate these Terms, any law, or any third-party right;</li>
            <li>your use of the Service complies with our <Link href="/privacy-policy">Privacy Policy</Link>.</li>
          </ul>

          <h2>7. Groups &amp; sharing</h2>
          <p>
            When you create a group or join a group, you understand that the other members of that
            group will see your name, profile picture, the expenses and settlements you record in
            that group, and the resulting balances. You are responsible for who you invite and for
            what you share.
          </p>

          <h2>8. Subscriptions, fees &amp; in-app purchases</h2>
          <p>
            The core Expensplit Service is currently provided free of charge. We may introduce paid
            features, subscriptions, or in-app purchases in the future. If we do, we will clearly
            disclose pricing and terms before you are charged. Payments for in-app purchases on
            Android are processed by Google Play and governed by Google&apos;s terms. Refunds (if
            any) are subject to the applicable store&apos;s policy and any specific refund terms we
            publish.
          </p>

          <h2>9. Beta features</h2>
          <p>
            From time to time we may offer beta, preview, or experimental features. They are
            provided &ldquo;as is&rdquo;, may be changed or discontinued at any time, and may have
            additional terms.
          </p>

          <h2>10. Intellectual property</h2>
          <p>
            The Service, including all software, text, graphics, logos, designs, trademarks and
            arrangements thereof, is owned by Expensplit and its licensors and is protected by
            intellectual property laws. Except for the limited licence granted in Section 4, these
            Terms do not transfer any right, title or interest in the Service to you. The names
            &ldquo;Expensplit&rdquo;, &ldquo;Futureox Tech&rdquo; and our logos are our trademarks.
            You may not use them without our prior written consent.
          </p>

          <h2>11. Feedback</h2>
          <p>
            If you send us feedback or suggestions, you grant us a perpetual, irrevocable,
            royalty-free, worldwide licence to use them for any purpose without any obligation to
            you.
          </p>

          <h2>12. Third-party services &amp; links</h2>
          <p>
            The Service may interoperate with or link to third-party services (e.g., Google Play,
            Firebase Cloud Messaging, your device&apos;s OS). We are not responsible for those
            services, and your use of them is governed by their respective terms and privacy
            policies.
          </p>

          <h2>13. Termination</h2>
          <p>
            You may stop using the Service or delete your account at any time from in-app
            settings or via our <Link href="/delete-account">Delete account</Link> page. We may
            suspend or terminate your access if we reasonably believe you have violated these Terms,
            if required by law, or to protect the Service or other users. Upon termination, the
            licence in Section 4 ends and Sections that by their nature should survive (including 6,
            10, 14, 15, 16, 17, 18, 19) will survive.
          </p>

          <h2>14. Disclaimers</h2>
          <p className="uppercase">
            The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
            warranties of any kind, whether express, implied, statutory or otherwise, including
            implied warranties of merchantability, fitness for a particular purpose, title and
            non-infringement. We do not warrant that the Service will be uninterrupted, error-free,
            secure, or free of viruses or other harmful components, or that any calculations
            (including balances or debt simplification) are free of errors.
          </p>
          <p>
            You are solely responsible for verifying calculations and for any payments or financial
            decisions you make. Expensplit is a record-keeping tool only.
          </p>

          <h2>15. Limitation of liability</h2>
          <p className="uppercase">
            To the maximum extent permitted by law, in no event will Expensplit, its affiliates,
            officers, employees or agents be liable for any indirect, incidental, special,
            consequential, exemplary or punitive damages, including loss of profits, data, goodwill
            or other intangible losses, arising from or relating to your use of, or inability to use,
            the Service.
          </p>
          <p className="uppercase">
            To the maximum extent permitted by law, our aggregate liability for any claims arising
            from or relating to the Service will not exceed the greater of (a) the amount you paid
            us for the Service in the 12 months preceding the claim, or (b) USD 50.
          </p>
          <p>
            Some jurisdictions do not allow the exclusion or limitation of certain damages or
            warranties. In such jurisdictions, the foregoing limitations apply to the maximum extent
            permitted by law.
          </p>

          <h2>16. Indemnification</h2>
          <p>
            You agree to indemnify, defend and hold harmless Expensplit and its affiliates from and
            against any claims, liabilities, damages, losses and expenses (including reasonable legal
            fees) arising out of or relating to: (a) your access to or use of the Service; (b) Your
            Content; (c) your violation of these Terms; or (d) your violation of any third-party
            right.
          </p>

          <h2>17. Changes to the Service or Terms</h2>
          <p>
            We may modify, suspend, or discontinue the Service (or any part of it) at any time. We
            may also update these Terms from time to time. If we make material changes, we will
            notify you in the app and/or by email at least 14 days before they take effect.
            Continued use of the Service after the effective date of changes constitutes acceptance.
          </p>

          <h2>18. Governing law &amp; dispute resolution</h2>
          <p>
            These Terms are governed by the laws of the Islamic Republic of Pakistan, without regard
            to conflict-of-laws principles. The courts of Karachi, Pakistan will have exclusive
            jurisdiction over any disputes, except that you may have mandatory rights under the
            consumer-protection laws of your country of residence, which are not affected by this
            clause.
          </p>
          <p>
            Before filing a claim, you agree to try to resolve the dispute informally by contacting
            us at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. We will try to resolve the
            dispute by contacting you within 30 days.
          </p>

          <h2>19. Miscellaneous</h2>
          <ul>
            <li>
              <strong>Entire agreement:</strong> these Terms and the Privacy Policy are the entire
              agreement between you and us regarding the Service.
            </li>
            <li>
              <strong>Severability:</strong> if any provision is held unenforceable, the remaining
              provisions will remain in full force.
            </li>
            <li>
              <strong>No waiver:</strong> our failure to enforce a provision is not a waiver of our
              right to do so later.
            </li>
            <li>
              <strong>Assignment:</strong> you may not assign these Terms without our written
              consent; we may assign them in connection with a merger, acquisition or sale.
            </li>
            <li>
              <strong>Force majeure:</strong> we are not liable for failure or delay due to causes
              beyond our reasonable control.
            </li>
          </ul>

          <h2>20. Contact</h2>
          <p>
            Questions about these Terms? Contact us at{' '}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or{' '}
            <Link href="/contact">via our contact page</Link>.
          </p>
        </article>
      </section>
    </>
  );
}

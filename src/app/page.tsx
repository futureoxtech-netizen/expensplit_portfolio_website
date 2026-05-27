import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { StatsBar } from '@/components/StatsBar';
import { FeatureGrid } from '@/components/FeatureGrid';
import { HowItWorks } from '@/components/HowItWorks';
import { UseCases } from '@/components/UseCases';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';

export const metadata: Metadata = {
  title: 'Expensplit — Split expenses with friends, family & roommates',
  description:
    'Expensplit is a free, beautiful expense splitter and personal finance app. Track shared expenses, settle debts, and manage groups for trips, roommates and families — with real-time sync.',
  alternates: { canonical: '/' },
};

const FAQ_ITEMS = [
  {
    q: 'Is Expensplit free to use?',
    a: 'Yes. Expensplit is free to download and use. There are no ads and no hidden fees. We may introduce optional premium features in the future, but the core experience will always remain free.',
  },
  {
    q: 'Which split modes does Expensplit support?',
    a: 'You can split expenses equally, by exact amount, by percentage, or by shares. You can also add tax and tip on top of any split.',
  },
  {
    q: 'Does Expensplit work offline?',
    a: 'Yes. You can view groups, add expenses and browse history offline. Changes sync automatically when you’re back online.',
  },
  {
    q: 'How are payments and settlements handled?',
    a: 'Expensplit records settlements between members so balances zero out. We do not process payments — use your preferred payment method (bank transfer, JazzCash, EasyPaisa, Venmo, PayPal, etc.) and mark the settlement in the app.',
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. We use industry-standard encryption in transit (TLS) and at rest, JWT authentication with refresh-token rotation, and we never sell your data. Read our Privacy Policy for full details.',
  },
  {
    q: 'Can I delete my account and data?',
    a: 'Yes — you can request account deletion at any time from the app Settings, or via our Delete account page. All your personal data is permanently removed within 30 days.',
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeatureGrid />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <FAQ items={FAQ_ITEMS} />
      <CTA />
    </>
  );
}

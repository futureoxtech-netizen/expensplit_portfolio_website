import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { FAQ } from '@/components/FAQ';

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions',
  description:
    'Answers to common questions about Expensplit — pricing, security, split modes, offline support, account deletion and more.',
  alternates: { canonical: '/faq' },
};

const ITEMS = [
  { q: 'Is Expensplit free?', a: 'Yes. The core Expensplit experience is free with no ads. Optional premium features may be added in future and will be clearly priced before purchase.' },
  { q: 'Do I need an account?', a: 'Yes — an account lets your groups and expenses sync across devices and stay safe if you lose your phone.' },
  { q: 'Which platforms are supported?', a: 'Android (Google Play) and the web. iOS is on our roadmap.' },
  { q: 'Which split modes are supported?', a: 'Equal, exact amount, percentage, and shares — with optional tax and tip on top.' },
  { q: 'Can I use Expensplit offline?', a: 'Yes. The app stores recent data locally so you can read and add expenses offline. Everything syncs when you reconnect.' },
  { q: 'Does Expensplit handle payments?', a: 'No. Expensplit is a record-keeping tool. You settle outside the app using your preferred method (bank, mobile wallet, cash) and mark the settlement in the app.' },
  { q: 'How do I invite friends to a group?', a: 'You can invite by email or share a 6-digit code or QR code that friends scan inside the app.' },
  { q: 'How does Expensplit calculate who owes whom?', a: 'We compute each member’s net balance from all expenses and settlements, then use a greedy debt-simplification algorithm to minimise the number of payments required to settle.' },
  { q: 'Is my data private?', a: 'Yes. We never sell your data, the app has no third-party ads or trackers, and we encrypt data in transit and at rest. See our Privacy Policy.' },
  { q: 'Can I export my data?', a: 'Yes. You can export expense reports as CSV or PDF from the Reports screen.' },
  { q: 'Can I delete my account?', a: 'Yes — anytime from in-app Settings, our Delete account page, or by emailing privacy@futureoxtech.com. Personal data is removed within 30 days.' },
  { q: 'What currencies are supported?', a: 'Each expense stores its currency. Multi-currency FX conversion is on the roadmap.' },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Help"
        title="Frequently asked questions"
        description="Quick answers to the things people ask us most. Can’t find what you need? Contact our support team."
      />
      <FAQ items={ITEMS} />
    </>
  );
}

import type { ReactNode } from 'react';

type Feature = { title: string; description: string; icon: ReactNode; tone?: 'brand' | 'mint' };

const FEATURES: Feature[] = [
  {
    title: 'Four smart split modes',
    description:
      'Split equally, by exact amount, by percentage, or by shares. Add tax & tip on top. The math is always right.',
    icon: <IconSplit />,
    tone: 'brand',
  },
  {
    title: 'Groups for everything',
    description:
      'Trips, roommates, families, lunch crews. Create unlimited groups, invite by email or by QR code.',
    icon: <IconUsers />,
    tone: 'mint',
  },
  {
    title: 'Settle up with one tap',
    description:
      'Greedy debt simplification finds the fewest payments needed. Record settlements and watch balances zero out.',
    icon: <IconHandshake />,
    tone: 'brand',
  },
  {
    title: 'Real-time sync',
    description:
      'Add an expense on your phone — your friends see it instantly. Powered by Socket.io across all devices.',
    icon: <IconBolt />,
    tone: 'mint',
  },
  {
    title: 'Monthly analytics',
    description:
      'See where your money goes with category breakdowns and beautiful charts. Personal &amp; group spending insights.',
    icon: <IconChart />,
    tone: 'brand',
  },
  {
    title: 'Personal finance tracker',
    description:
      'Track personal expenses alongside shared ones. Budget categories, recurring expenses, and exportable reports.',
    icon: <IconWallet />,
    tone: 'mint',
  },
  {
    title: 'QR group invites',
    description:
      'Generate a QR code or 6-digit invite code so friends can join your group in seconds — no contact upload needed.',
    icon: <IconQr />,
    tone: 'brand',
  },
  {
    title: 'Activity feed',
    description:
      'A timeline of every expense, settlement and group event — per group or across everything you participate in.',
    icon: <IconFeed />,
    tone: 'mint',
  },
  {
    title: 'Private &amp; secure',
    description:
      'JWT auth with refresh-token rotation, encrypted token storage, and no ad-tech tracking. Your data stays yours.',
    icon: <IconShield />,
    tone: 'brand',
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="chip mx-auto mb-4">Features</p>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Everything you need to <span className="gradient-text">share expenses</span> without the awkward
          </h2>
          <p className="mt-4 text-ink-100/75">
            Designed for real life — trips, flatmates, partners, families and friends.
            Expensplit removes the friction so you can focus on what matters.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <article key={f.title} className="glass group p-6 transition-transform hover:-translate-y-1">
              <div
                className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                  f.tone === 'mint' ? 'bg-mint-500/15 text-mint-400' : 'bg-brand-500/15 text-brand-300'
                }`}
                aria-hidden="true"
              >
                {f.icon}
              </div>
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p
                className="mt-2 text-sm leading-relaxed text-ink-100/75"
                dangerouslySetInnerHTML={{ __html: f.description }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Icons --- */
const I = (p: React.SVGProps<SVGSVGElement>) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p} />
);

function IconSplit()    { return <I><path d="M6 3v6a6 6 0 0 0 12 0V3" /><path d="M12 21v-6" /></I>; }
function IconUsers()    { return <I><path d="M16 11a4 4 0 1 0-8 0" /><circle cx="12" cy="7" r="3" /><path d="M2 21a8 8 0 0 1 16 0" /><path d="M22 21a6 6 0 0 0-9-5.2" /></I>; }
function IconHandshake(){ return <I><path d="M5 11l5-5 4 4 5-5" /><path d="M3 13l5 5 3-3 5 5 5-5" /></I>; }
function IconBolt()     { return <I><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" /></I>; }
function IconChart()    { return <I><path d="M3 3v18h18" /><rect x="7" y="12" width="3" height="6" /><rect x="12" y="8"  width="3" height="10" /><rect x="17" y="4"  width="3" height="14" /></I>; }
function IconWallet()   { return <I><path d="M3 7h15a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7z" /><path d="M16 14h2" /><path d="M3 7V6a2 2 0 0 1 2-2h11" /></I>; }
function IconQr()       { return <I><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><path d="M14 14h3v3M21 14v3M14 21h3M21 18v3" /></I>; }
function IconFeed()     { return <I><path d="M4 4h16v4H4z" /><path d="M4 12h16v4H4z" /><path d="M4 20h10" /></I>; }
function IconShield()   { return <I><path d="M12 2l9 4v6c0 5-3.8 9.4-9 10-5.2-.6-9-5-9-10V6l9-4z" /><path d="M9 12l2 2 4-4" /></I>; }

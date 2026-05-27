const STEPS = [
  {
    n: '01',
    title: 'Create a group',
    body: 'Make a group for your trip, flat, family or any plan. Invite friends by email or share a QR code.',
  },
  {
    n: '02',
    title: 'Add expenses',
    body: 'Log shared expenses with one of four split modes — equal, exact, percentage, or shares. Tax &amp; tip supported.',
  },
  {
    n: '03',
    title: 'See live balances',
    body: 'Expensplit shows who owes whom in real time, and simplifies debts so settling takes the fewest payments.',
  },
  {
    n: '04',
    title: 'Settle &amp; relax',
    body: 'Record a payment when you settle up — outside the app or via your favourite payment method. Done.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="chip mx-auto mb-4">How it works</p>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            From split to <span className="gradient-text">settled</span> in four steps
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <li key={s.n} className="glass relative p-6">
              <span className="text-4xl font-extrabold font-display gradient-text">{s.n}</span>
              <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
              <p
                className="mt-1.5 text-sm text-ink-100/75"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

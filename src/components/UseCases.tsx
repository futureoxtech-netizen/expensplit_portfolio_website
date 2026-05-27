const CASES = [
  { title: 'Trips & travel',     emoji: '✈️', body: 'Track every meal, taxi and hostel. Settle at the airport — not weeks later.' },
  { title: 'Roommates',          emoji: '🏠', body: 'Rent, utilities, groceries. Recurring expenses keep themselves up to date.' },
  { title: 'Couples',            emoji: '💞', body: 'Shared categories for date nights, bills and savings goals. Privacy by design.' },
  { title: 'Friend hangouts',    emoji: '🍣', body: 'Dinner, drinks, ride-shares. Don’t be that person doing math at the table.' },
  { title: 'Office lunches',     emoji: '🥗', body: 'Rotate who pays. Expensplit tracks balances so it’s always fair.' },
  { title: 'Events & gifts',     emoji: '🎁', body: 'Birthdays, weddings, secret santa. Pool money and settle in a tap.' },
];

export function UseCases() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="chip mx-auto mb-4">For everyone</p>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            One app for every <span className="gradient-text">shared spend</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c) => (
            <div key={c.title} className="glass p-6">
              <span aria-hidden="true" className="text-3xl">{c.emoji}</span>
              <h3 className="mt-3 text-lg font-bold">{c.title}</h3>
              <p className="mt-1 text-sm text-ink-100/75">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

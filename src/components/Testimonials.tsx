const ITEMS = [
  {
    quote:
      'Finally an expense splitter that doesn’t feel like a spreadsheet. The QR group invites alone are worth it.',
    name: 'Hira A.',
    role: 'Trip organiser',
  },
  {
    quote:
      'We use it for the flat — rent, groceries, bills. The debt simplification is genuinely magic at end of month.',
    name: 'Bilal R.',
    role: 'Apartment 4B',
  },
  {
    quote:
      'I tracked my freelance expenses alongside our family budget. Beautiful charts, easy export. 10/10.',
    name: 'Sara K.',
    role: 'Freelance designer',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="chip mx-auto mb-4">Loved by users</p>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            People are <span className="gradient-text">settling up</span>, finally
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {ITEMS.map((t) => (
            <figure key={t.name} className="glass p-6">
              <div className="mb-3 flex gap-1 text-mint-400" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 7 7 .6-5.3 4.7L18 22l-6-3.7L6 22l1.3-7.7L2 9.6 9 9z"/></svg>
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-ink-100/85">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs text-ink-400">
                <span className="text-white font-semibold">{t.name}</span> · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

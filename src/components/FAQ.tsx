type Item = { q: string; a: string };

export function FAQ({ items, withSchema = true }: { items: Item[]; withSchema?: boolean }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };

  return (
    <section id="faq" className="py-20 md:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <p className="chip mx-auto mb-4">FAQ</p>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
          {items.map((it, i) => (
            <details key={i} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-base font-semibold text-white">{it.q}</span>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-white transition-transform group-open:rotate-45">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14"/></svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-100/80">{it.a}</p>
            </details>
          ))}
        </div>
      </div>

      {withSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </section>
  );
}

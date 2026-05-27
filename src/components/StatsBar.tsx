const STATS = [
  { value: '4',     label: 'Smart split modes' },
  { value: '∞',    label: 'Groups &amp; members' },
  { value: '< 1s', label: 'Real-time sync' },
  { value: '0 ads', label: 'Always' },
];

export function StatsBar() {
  return (
    <section aria-label="Highlights" className="border-y border-white/10 bg-white/[0.02]">
      <div className="container-x grid grid-cols-2 gap-4 py-8 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-3xl font-extrabold gradient-text">{s.value}</p>
            <p
              className="mt-1 text-xs uppercase tracking-wider text-ink-400"
              dangerouslySetInnerHTML={{ __html: s.label }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

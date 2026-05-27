export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="relative aspect-[9/19] rounded-[3rem] border border-white/10 bg-gradient-to-b from-ink-800 to-ink-950 p-3 shadow-2xl shadow-brand-500/20 animate-float">
        <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-black" />
        <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-ink-900">
          {/* App screen */}
          <div className="h-full w-full bg-gradient-to-b from-brand-700/30 via-ink-900 to-ink-950 p-5 pt-12">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-ink-400">Welcome back</p>
                <p className="font-display text-lg font-bold text-white">Hi, Alex 👋</p>
              </div>
              <div className="h-9 w-9 rounded-full bg-brand-gradient" />
            </div>

            {/* Balance card */}
            <div className="mt-4 rounded-2xl bg-brand-gradient p-4 text-white shadow-glow">
              <p className="text-xs opacity-80">Your total balance</p>
              <p className="mt-1 text-2xl font-extrabold">+ $142.50</p>
              <div className="mt-3 flex gap-2 text-[11px]">
                <span className="rounded-full bg-white/20 px-2 py-0.5">You&apos;re owed $210</span>
                <span className="rounded-full bg-white/20 px-2 py-0.5">You owe $67.50</span>
              </div>
            </div>

            {/* Groups */}
            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">Groups</p>
                <span className="text-[10px] text-brand-300">View all</span>
              </div>

              {[
                { name: 'Goa Trip 2026',    sub: '4 members · last activity 2h', amt: '+$54.20', tone: 'mint' },
                { name: 'Apartment 4B',     sub: '3 members · Rent · groceries', amt: '−$12.00', tone: 'red'  },
                { name: 'Friday Dinners',   sub: '6 members · 12 expenses',     amt: '+$100.30', tone: 'mint' },
              ].map((g) => (
                <div key={g.name} className="mb-2 flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.03] p-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-brand-gradient" />
                    <div>
                      <p className="text-sm font-semibold text-white">{g.name}</p>
                      <p className="text-[10px] text-ink-400">{g.sub}</p>
                    </div>
                  </div>
                  <p className={`text-sm font-bold ${g.tone === 'mint' ? 'text-mint-400' : 'text-red-400'}`}>
                    {g.amt}
                  </p>
                </div>
              ))}
            </div>

            {/* FAB */}
            <div className="absolute bottom-5 right-5 h-12 w-12 rounded-full bg-brand-gradient shadow-glow grid place-items-center text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Floating tags */}
      <div className="absolute -left-6 top-16 hidden rounded-xl border border-white/10 bg-ink-900/80 px-3 py-2 text-xs text-white shadow-card backdrop-blur md:block">
        <span className="text-mint-400 font-semibold">✓</span> Settled instantly
      </div>
      <div className="absolute -right-6 bottom-24 hidden rounded-xl border border-white/10 bg-ink-900/80 px-3 py-2 text-xs text-white shadow-card backdrop-blur md:block">
        <span className="text-brand-300 font-semibold">★</span> 4.8 average rating
      </div>
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="relative aspect-[9/19] rounded-[3rem] border border-white/10 bg-gradient-to-b from-ink-800 to-ink-950 p-3 shadow-2xl shadow-brand-500/20 animate-float">
        <div className="absolute left-1/2 top-3 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-black" />
        <div className="relative h-full w-full overflow-hidden rounded-[2.4rem] bg-ink-900">
          <img
            src="/man.jpeg"
            alt="Expensplit app — home screen showing groups and recent expenses"
            className="h-full w-full object-cover"
          />
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

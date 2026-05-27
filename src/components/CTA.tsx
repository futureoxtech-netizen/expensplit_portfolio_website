import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-brand-gradient p-10 text-center shadow-glow md:p-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-black/20 blur-3xl" />
          <h2 className="relative text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Ready to split smarter?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-white/90">
            Join thousands using Expensplit to track, split and settle expenses with the people they love.
            It&apos;s free, fast, and refreshingly simple.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/download" className="btn bg-white text-ink-900 hover:bg-ink-100">
              Download Expensplit
            </Link>
            <Link href="/contact" className="btn border border-white/40 bg-white/10 text-white hover:bg-white/20">
              Contact sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

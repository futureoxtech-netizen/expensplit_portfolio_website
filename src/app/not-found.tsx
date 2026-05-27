import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-x py-32 text-center">
      <p className="chip mx-auto mb-6">404</p>
      <h1 className="text-5xl font-extrabold">
        We can&apos;t <span className="gradient-text">split</span> this page.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-ink-100/75">
        The page you&apos;re looking for has moved or never existed.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn-primary">Back to home</Link>
        <Link href="/support" className="btn-ghost">Visit support</Link>
      </div>
    </section>
  );
}

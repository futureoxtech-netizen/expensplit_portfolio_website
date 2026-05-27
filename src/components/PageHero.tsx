export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x relative pt-16 pb-10 md:pt-24 md:pb-14">
        {eyebrow && <p className="chip mb-4">{eyebrow}</p>}
        <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-ink-100/80">{description}</p>
        )}
      </div>
    </section>
  );
}

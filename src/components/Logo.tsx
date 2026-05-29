import Link from 'next/link';

type Props = {
  /** width/height in px for the badge */
  size?: number;
  /** show wordmark next to badge */
  withWordmark?: boolean;
  className?: string;
  href?: string | null;
};

export function Logo({ size = 36, withWordmark = true, className = '', href = '/' }: Props) {
  const content = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="/expensplit_witthour_backround.png"
        alt=""
        width={size}
        height={size}
        className="drop-shadow-[0_4px_18px_rgba(108,92,231,0.35)]"
        aria-hidden="true"
      />
      {withWordmark && (
        <span className="font-display text-xl font-extrabold tracking-tight">
          <span className="text-white">Expen</span>
          <span className="gradient-text">split</span>
        </span>
      )}
    </span>
  );

  if (href === null) return content;
  return (
    <Link href={href} aria-label="Expensplit home" className="inline-flex items-center">
      {content}
    </Link>
  );
}

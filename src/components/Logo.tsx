import Link from 'next/link';

type Props = {
  /** width in px for the badge */
  size?: number;
  /** show wordmark next to badge */
  withWordmark?: boolean;
  className?: string;
  href?: string | null;
};

export function Logo({ size = 36, withWordmark = true, className = '', href = '/' }: Props) {
  const content = (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 512 512"
        aria-hidden="true"
        className="drop-shadow-[0_4px_18px_rgba(108,92,231,0.35)]"
      >
        <defs>
          <linearGradient id="lg-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6C5CE7" />
            <stop offset="55%" stopColor="#44C4FF" />
            <stop offset="100%" stopColor="#00B894" />
          </linearGradient>
        </defs>
        <rect x="32" y="32" width="448" height="448" rx="112" fill="url(#lg-bg)" />
        <g transform="translate(256 256)">
          <path d="M -118 -90 L -22 0 L -118 90 L -150 90 L -54 0 L -150 -90 Z" fill="#fff" />
          <path d="M  118 -90 L  22 0 L  118 90 L  150 90 L  54 0 L 150 -90 Z" fill="#EAFFF7" />
          <rect x="-7" y="-130" width="14" height="260" rx="7" fill="#fff" />
          <path d="M -28 -86 Q 0 -110 28 -86" stroke="#fff" strokeWidth={14} strokeLinecap="round" fill="none" />
          <path d="M -28  86 Q 0  110 28  86" stroke="#fff" strokeWidth={14} strokeLinecap="round" fill="none" />
        </g>
      </svg>
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

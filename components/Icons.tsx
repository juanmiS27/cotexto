type IconProps = { className?: string };

const base = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function TranslateIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 8h13m0 0-3-3m3 3-3 3" />
      <path d="M20 16H7m0 0 3-3m-3 3 3 3" />
    </svg>
  );
}

export function LayoutIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="4" width="16" height="16" rx="1.5" />
      <path d="M10 4v16M10 10h10" />
    </svg>
  );
}

export function ProofIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M13 4v16M17 4v16M19 4H9.5a4.5 4.5 0 0 0 0 9H13" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg {...base} width={18} height={18} className={className}>
      <path d="M5 12h14m0 0-5-5m5 5-5 5" />
    </svg>
  );
}

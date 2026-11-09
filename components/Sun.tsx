const RAYS = "M82 50H93M72.6 72.6L80.4 80.4M50 82V93M27.4 72.6L19.6 80.4M18 50H7M27.4 27.4L19.6 19.6M50 18V7M72.6 27.4L80.4 19.6";

export function Sun({ size, stroke = 7, className }: { size?: number; stroke?: number; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={className} aria-hidden="true" focusable="false">
      <circle cx="50" cy="50" r="26" fill="#F5C214" />
      <path d={RAYS} stroke="#F5C214" strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  );
}

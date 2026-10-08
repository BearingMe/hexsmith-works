import { cn } from "@/lib/utils";

type HexMarkProps = {
  className?: string;
  title?: string;
};

export function HexMark({ className, title = "Hexsmith mark" }: HexMarkProps) {
  return (
    <svg
      aria-label={title}
      className={cn("hex-mark", className)}
      fill="none"
      role="img"
      viewBox="0 0 40 40"
    >
      <path d="M20 2.5 35.2 11.25v17.5L20 37.5 4.8 28.75v-17.5L20 2.5Z" />
      <path d="M20 9.5 29.1 14.75v10.5L20 30.5l-9.1-5.25v-10.5L20 9.5Z" />
      <path d="M20 15v10M15 17.5l10 5" />
      <circle cx="20" cy="20" r="2.25" />
    </svg>
  );
}

import { FLOWER_EMOJIS } from "@/data/flowers";

/** Two flowers tucked inside the top corners of a card border */
const insideCornerPositions = [
  "left-3 top-3",
  "right-3 top-3",
] as const;

type FlowerDecorProps = {
  index?: number;
  className?: string;
};

export function FlowerDecor({ index = 0, className = "" }: FlowerDecorProps) {
  return (
    <>
      {insideCornerPositions.map((position, corner) => (
        <span
          key={position}
          className={`pointer-events-none absolute ${position} text-sm opacity-70 sm:text-base ${className}`}
          aria-hidden="true"
        >
          {FLOWER_EMOJIS[(index + corner * 4) % FLOWER_EMOJIS.length]}
        </span>
      ))}
    </>
  );
}

/** @deprecated use FlowerDecor */
export function FlowerCorners(props: FlowerDecorProps) {
  return <FlowerDecor {...props} />;
}

/** Shared frosted-glass card — lets the floral background show through */
export const contentCardClass =
  "relative w-full overflow-hidden rounded-[18px] border border-[var(--line)] bg-[var(--paper)] p-6 shadow-[0_8px_28px_-10px_rgba(142,18,71,0.15)] backdrop-blur-md sm:p-8";

/** Frosted pill / chip used for email button, social icons, etc. */
export const frostedSurfaceClass =
  "border border-[var(--line)] bg-[var(--paper-strong)] backdrop-blur-md";

/** More opaque card for long-form article text readability */
export const articleCardClass =
  "relative w-full overflow-hidden rounded-[18px] border border-[var(--line)] bg-[rgba(255,253,248,0.88)] p-6 shadow-[0_8px_28px_-10px_rgba(142,18,71,0.15)] backdrop-blur-md sm:p-8";

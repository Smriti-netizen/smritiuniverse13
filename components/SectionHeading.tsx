import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
};

export function SectionHeading({
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <h2 className="mb-10 text-[clamp(1.8rem,3.4vw,2.6rem)] font-semibold text-[var(--ink)]">
        {children}
      </h2>
    </Reveal>
  );
}

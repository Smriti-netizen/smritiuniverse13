import type { ReactNode } from "react";
import { PageContainer } from "@/components/PageContainer";

type SectionSplitProps = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function SectionSplit({
  id,
  title,
  children,
  className = "",
}: SectionSplitProps) {
  return (
    <section id={id} className={`scroll-mt-28 py-12 sm:py-16 ${className}`}>
      <PageContainer>
        <div className="mx-auto grid w-full max-w-[1080px] grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(160px,28%)_minmax(0,1fr)] lg:gap-x-14 lg:gap-y-0">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-center text-[clamp(1.85rem,3.2vw,2.5rem)] font-bold leading-tight text-[var(--ink)] lg:text-left">
              {title}
            </h2>
          </div>

          <div className="w-full min-w-0">{children}</div>
        </div>
      </PageContainer>
    </section>
  );
}

"use client";

import Image from "next/image";
import { contentCardClass, FlowerDecor } from "@/components/FlowerCorners";
import { SectionSplit } from "@/components/SectionSplit";
import { Reveal } from "@/components/Reveal";
import { education } from "@/data/experience";

export function Education() {
  return (
    <SectionSplit id="education" title="Education">
      <Reveal delay={0.08}>
        <article className={contentCardClass}>
          <FlowerDecor index={2} />

          <div className="relative z-[1] flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-5">
              <Image
                src="/univ-logo.png"
                alt="J.C. Bose University of Science and Technology, YMCA logo"
                width={72}
                height={72}
                className="h-[72px] w-[72px] shrink-0 rounded-full bg-white object-contain p-1 shadow-sm"
              />
              <div>
                <h3 className="text-[1.15rem] font-semibold leading-snug text-[var(--ink)] sm:text-[1.25rem]">
                  {education.degree}
                </h3>
                <p className="font-inter mt-1.5 text-[0.9rem] text-[var(--ink-soft)]">
                  {education.school}
                </p>
              </div>
            </div>
            <p className="font-inter shrink-0 text-[0.85rem] tracking-wide text-[var(--magenta-deep)]">
              {education.period}
            </p>
          </div>
        </article>
      </Reveal>
    </SectionSplit>
  );
}

"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { contentCardClass, FlowerDecor } from "@/components/FlowerCorners";
import { SectionSplit } from "@/components/SectionSplit";
import { experience, type ExperienceEntry } from "@/data/experience";

function ExperienceCard({
  role,
  index,
}: {
  role: ExperienceEntry;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.2, 0.7, 0.3, 1] }}
      className={contentCardClass}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <FlowerDecor index={index + 1} />
      </motion.div>

      <div className="relative z-[1] mb-1.5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-[1.15rem] font-semibold text-[var(--ink)] sm:text-[1.25rem]">
          {role.title}
        </h3>
        <span className="font-medium text-[var(--magenta-deep)]">
          — {role.company}
        </span>
        <span className="font-inter ml-auto text-[0.8rem] tracking-wide text-[var(--ink-soft)]">
          {role.period}
        </span>
      </div>
      <ul className="font-inter relative z-[1] text-[0.9rem] leading-[1.75] text-[var(--ink-soft)]">
        {role.bullets.map((bullet) => (
          <li key={bullet.text} className="relative mb-2 pl-[18px]">
            <span
              className="absolute left-0 top-0 text-[1.3rem] leading-none text-[var(--coral)]"
              aria-hidden="true"
            >
              ›
            </span>
            {bullet.text}
            {bullet.href ? (
              <a
                href={bullet.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View LinkedIn post about Order Details revamp"
                className="ml-1.5 inline-flex align-middle text-[var(--ink-soft)] transition hover:text-[var(--magenta-deep)]"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function Experience() {
  return (
    <SectionSplit id="experience" title="Experience">
      <div className="flex flex-col gap-6">
        {experience.map((role, index) => (
          <ExperienceCard
            key={`${role.company}-${role.period}`}
            role={role}
            index={index}
          />
        ))}
      </div>
    </SectionSplit>
  );
}

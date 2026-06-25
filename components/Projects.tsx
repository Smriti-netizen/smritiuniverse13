"use client";

import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useRef } from "react";
import { contentCardClass, FlowerDecor } from "@/components/FlowerCorners";
import { SectionSplit } from "@/components/SectionSplit";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

const PROJECT_CARD_WIDTH = 340;

export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollTrack(direction: "left" | "right") {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction === "left" ? -(PROJECT_CARD_WIDTH + 24) : PROJECT_CARD_WIDTH + 24,
      behavior: "smooth",
    });
  }

  return (
    <SectionSplit id="projects" title="Projects" className="pb-14 pt-6 sm:pt-10">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => scrollTrack("left")}
          aria-label="Scroll projects left"
          className="hidden shrink-0 rounded-md border border-[var(--line)] bg-[rgba(251,220,232,0.9)] p-2 text-[var(--ink)] transition hover:border-[var(--magenta)] sm:block"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div
          ref={trackRef}
          className="flex min-w-0 flex-1 gap-6 overflow-x-auto overflow-y-hidden pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.05}>
              <article
                className={`${contentCardClass} flex h-[380px] shrink-0 flex-col transition hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(142,18,71,0.18)]`}
                style={{ width: PROJECT_CARD_WIDTH }}
              >
                <FlowerDecor index={index + 4} />

                <h3 className="relative z-[1] mb-2 text-[1.15rem] font-semibold leading-snug text-[var(--ink)]">
                  {project.title}
                </h3>
                <p className="font-inter relative z-[1] mb-4 line-clamp-5 flex-1 text-[0.9rem] leading-[1.65] text-[var(--ink-soft)]">
                  {project.description}
                </p>
                <div className="relative z-[1] mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-inter rounded-[20px] bg-[rgba(194,24,91,0.08)] px-3 py-1 text-[0.7rem] text-[var(--magenta-deep)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter relative z-[1] mt-auto inline-flex items-center gap-1.5 text-[0.85rem] text-[var(--ink)] transition hover:text-[var(--magenta-deep)]"
                >
                  View project
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollTrack("right")}
          aria-label="Scroll projects right"
          className="hidden shrink-0 rounded-md border border-[var(--line)] bg-[rgba(251,220,232,0.9)] p-2 text-[var(--ink)] transition hover:border-[var(--magenta)] sm:block"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-4 sm:hidden">
        <button
          type="button"
          onClick={() => scrollTrack("left")}
          aria-label="Scroll projects left"
          className="rounded-md border border-[var(--line)] bg-[rgba(251,220,232,0.9)] p-2"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollTrack("right")}
          aria-label="Scroll projects right"
          className="rounded-md border border-[var(--line)] bg-[rgba(251,220,232,0.9)] p-2"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </SectionSplit>
  );
}

"use client";

import { useState } from "react";
import { contentCardClass, FlowerDecor, frostedSurfaceClass } from "@/components/FlowerCorners";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/SocialIcons";
import { PageContainer } from "@/components/PageContainer";
import { ProfileAvatar } from "@/components/ProfileAvatar";
import { Reveal } from "@/components/Reveal";
import { aboutParagraphs } from "@/data/about";
import { social } from "@/data/social";
import { PROFILE_WHITE_FLOWERS, WHITE_FLOWER_MARK } from "@/data/flowers";

export function Hero() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(social.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard may be unavailable
    }
  }

  return (
    <section id="home" className="scroll-mt-24 py-20 pt-32 sm:pt-36">
      <PageContainer>
        <div className="mx-auto grid w-full max-w-[1080px] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal className="order-2 lg:order-1">
            <h1 className="mb-5 text-center text-[clamp(2.4rem,5.5vw,4.2rem)] font-semibold leading-[1.05] text-[var(--ink)] lg:text-left">
              Hi, I&apos;m{" "}
              <em className="font-semibold not-italic text-[var(--magenta-deep)] drop-shadow-[0_1px_2px_rgba(255,253,248,0.8)]">
                Smriti Srivastava
              </em>
              !
            </h1>

            <button
              type="button"
              onClick={copyEmail}
              className={`font-inter mb-7 inline-flex items-center gap-2.5 rounded-[30px] ${frostedSurfaceClass} px-[18px] py-2.5 text-[0.85rem] text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[var(--magenta)]`}
            >
              <span aria-hidden="true">✉️</span>
              {copied ? (
                <span className="text-[var(--sage)]">Copied to clipboard ✓</span>
              ) : (
                <span>{social.email}</span>
              )}
            </button>

            <div
              id="about"
              className={`${contentCardClass} scroll-mt-28`}
            >
              <FlowerDecor index={0} />
              {aboutParagraphs.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`relative z-[1] font-inter text-[1.02rem] leading-[1.75] text-[var(--ink-soft)] ${
                    index > 0 ? "mt-3.5" : ""
                  }`}
                >
                  {index === 1 ? (
                    <>
                      I am a software engineer that experiments and learns about
                      technology, as I believe in the{" "}
                      <strong className="font-semibold text-[var(--ink)]">
                        immense potential of technology.
                      </strong>
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>

            <div className="mt-7 flex gap-4">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={`flex h-11 w-11 items-center justify-center rounded-full ${frostedSurfaceClass} text-[var(--ink-soft)] transition hover:-translate-y-0.5 hover:border-[var(--magenta)] hover:bg-[var(--magenta)] hover:text-[var(--cream)]`}
              >
                <GitHubIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`flex h-11 w-11 items-center justify-center rounded-full ${frostedSurfaceClass} text-[var(--ink-soft)] transition hover:-translate-y-0.5 hover:border-[var(--magenta)] hover:bg-[var(--magenta)] hover:text-[var(--cream)]`}
              >
                <LinkedInIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={social.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className={`flex h-11 w-11 items-center justify-center rounded-full ${frostedSurfaceClass} text-[var(--ink-soft)] transition hover:-translate-y-0.5 hover:border-[var(--magenta)] hover:bg-[var(--magenta)] hover:text-[var(--cream)]`}
              >
                <XIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </Reveal>

          <Reveal
            className="order-1 justify-self-center lg:order-2 lg:justify-self-end"
            delay={0.1}
          >
            <div className="relative">
              <div
                className="absolute -left-[18px] -top-[18px] -z-10 h-[90px] w-[90px] rounded-[14px] border-2 border-[var(--magenta-frame)]"
                aria-hidden="true"
              />
              <div className="relative h-[280px] w-[240px] overflow-hidden rounded-[14px] border-[6px] border-[var(--magenta-frame)] bg-gradient-to-br from-[var(--lavender)] to-[var(--coral)] shadow-[0_30px_60px_-20px_rgba(142,18,71,0.35)] sm:h-[380px] sm:w-[320px]">
                <ProfileAvatar />
              </div>
              <span
                className="animate-gentle-sway absolute -left-3 -top-3 text-[1.75rem] text-white drop-shadow-[0_1px_2px_rgba(58,37,48,0.35)] sm:-left-4 sm:-top-4 sm:text-[2rem]"
                aria-hidden="true"
              >
                {WHITE_FLOWER_MARK}
              </span>
              <span
                className="animate-gentle-sway absolute -bottom-4 -right-2 text-[2.4rem]"
                aria-hidden="true"
              >
                {PROFILE_WHITE_FLOWERS[1]}
              </span>
            </div>
          </Reveal>
        </div>
      </PageContainer>
    </section>
  );
}

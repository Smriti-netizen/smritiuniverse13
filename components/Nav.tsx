"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { markSkipSplash } from "@/lib/splash";

const links = [
  { href: "/#about", label: "About", id: "about", isRoute: false },
  { href: "/#experience", label: "Experience", id: "experience", isRoute: false },
  { href: "/#education", label: "Education", id: "education", isRoute: false },
  { href: "/#projects", label: "Projects", id: "projects", isRoute: false },
  { href: "/myspace", label: "My Space", id: "myspace", isRoute: true },
] as const;

export function Nav() {
  const pathname = usePathname();
  const onMySpace = pathname.startsWith("/myspace");
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    if (onMySpace) return;

    const sectionIds = links
      .filter((link) => !link.isRoute)
      .map((link) => link.id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [onMySpace, pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <nav
        className="pointer-events-auto mx-auto w-fit max-w-full rounded-full border border-[rgba(194,24,91,0.22)] bg-[rgba(251,220,232,0.82)] px-4 py-2.5 shadow-[0_8px_30px_-12px_rgba(194,24,91,0.18)] backdrop-blur-[14px] sm:px-7 sm:py-3"
        aria-label="Main navigation"
      >
        <ul className="font-inter flex flex-wrap items-center justify-center gap-4 text-[0.68rem] uppercase tracking-[0.12em] text-[var(--ink-soft)] sm:gap-7 sm:text-[0.78rem]">
          {links.map(({ href, label, id, isRoute }) => {
            const isActive = isRoute
              ? onMySpace
              : !onMySpace && activeSection === id;

            return (
              <li key={href}>
                {isRoute ? (
                  <Link
                    href={href}
                    className={`group relative rounded-full px-2 py-0.5 transition-colors ${
                      isActive
                        ? "bg-[rgba(194,24,91,0.14)] font-medium text-[var(--magenta-deep)]"
                        : "text-[var(--ink-soft)] hover:text-[var(--magenta-deep)]"
                    }`}
                  >
                    <span className="group-hover:text-[var(--magenta-deep)]">
                      My{" "}
                    </span>
                    <span className="group-hover:text-[var(--magenta-deep)]">
                      Space
                    </span>
                  </Link>
                ) : (
                  <a
                    href={href}
                    onClick={() => {
                      if (onMySpace) markSkipSplash();
                    }}
                    className={`relative rounded-full px-2 py-0.5 transition-colors ${
                      isActive
                        ? "bg-[rgba(194,24,91,0.14)] font-medium text-[var(--magenta-deep)]"
                        : "text-[var(--ink-soft)] hover:text-[var(--magenta-deep)]"
                    }`}
                  >
                    {label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

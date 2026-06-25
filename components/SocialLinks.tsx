import { frostedSurfaceClass } from "@/components/FlowerCorners";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/SocialIcons";
import { social } from "@/data/social";

const socialLinks = [
  { href: social.github, label: "GitHub", Icon: GitHubIcon },
  { href: social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: social.x, label: "X", Icon: XIcon },
] as const;

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className = "" }: SocialLinksProps) {
  return (
    <div className={`relative z-30 flex gap-4 ${className}`}>
      {socialLinks.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full ${frostedSurfaceClass} text-[var(--ink-soft)] transition hover:-translate-y-0.5 hover:border-[var(--magenta)] hover:bg-[var(--magenta)] hover:text-[var(--cream)]`}
        >
          <Icon className="pointer-events-none h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  );
}

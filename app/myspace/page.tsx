import Link from "next/link";
import { contentCardClass, FlowerDecor } from "@/components/FlowerCorners";
import { getMediumPosts } from "@/lib/getMediumPosts";
import { formatDate } from "@/lib/format";
import { Reveal } from "@/components/Reveal";

export const revalidate = 86400;

export const metadata = {
  title: "My Space — Smriti Srivastava",
  description: "Articles and writing by Smriti Srivastava.",
};

export default async function MySpacePage() {
  const posts = await getMediumPosts();

  return (
    <main className="px-[6vw] pb-16 pt-28 sm:px-[8vw]">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h1 className="text-center text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-tight">
            <span className="text-[var(--ink)]">My </span>
            <span className="text-[var(--magenta-deep)]">Space</span>
          </h1>
        </Reveal>

        {posts.length === 0 ? (
          <p className="font-inter mt-10 rounded-[18px] border border-[var(--line)] bg-[var(--paper)] p-6 text-[var(--ink-soft)] shadow-sm backdrop-blur-md">
            Articles will appear here after the next build.
          </p>
        ) : (
          <div className="mt-10 space-y-6">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.05}>
                <Link
                  href={`/myspace/${post.slug}`}
                  className={`${contentCardClass} group block transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_-14px_rgba(142,18,71,0.2)]`}
                >
                  <FlowerDecor index={index + 6} />

                  <h2 className="relative z-[1] text-xl font-semibold text-[var(--ink)] transition group-hover:text-[var(--magenta-deep)]">
                    {post.title}
                  </h2>
                  <p className="font-inter relative z-[1] mt-1 text-[0.8rem] text-[var(--magenta-deep)]">
                    {formatDate(post.pubDate)}
                  </p>
                  <p className="font-inter relative z-[1] mt-3 text-[0.92rem] leading-relaxed text-[var(--ink-soft)]">
                    {post.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

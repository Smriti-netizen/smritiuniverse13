import Link from "next/link";
import { notFound } from "next/navigation";
import { articleCardClass, FlowerDecor } from "@/components/FlowerCorners";
import {
  getMediumPostBySlug,
  getMediumPosts,
} from "@/lib/getMediumPosts";
import { formatDate } from "@/lib/format";

export const revalidate = 86400;

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getMediumPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = await getMediumPostBySlug(slug);

  if (!post) {
    return { title: "Article not found" };
  }

  return {
    title: `${post.title} — My Space`,
    description: post.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = await getMediumPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="px-[6vw] pb-16 pt-28 sm:px-[8vw]">
      <div className="mx-auto max-w-3xl">
        <nav className="font-inter mb-8 flex items-center justify-center gap-2 text-[0.82rem] uppercase tracking-[0.16em] text-[var(--ink-soft)]">
          <Link
            href="/myspace"
            className="transition-colors hover:text-[var(--magenta-deep)]"
          >
            <span className="text-[var(--ink)]">My </span>
            <span className="text-[var(--magenta-deep)]">Space</span>
          </Link>
          <span className="opacity-40">/</span>
          <span className="line-clamp-1">{post.title}</span>
        </nav>

        <article className={`${articleCardClass} shadow-[0_12px_40px_-20px_rgba(58,37,48,0.15)]`}>
          <FlowerDecor index={9} />

          <header className="relative z-[1] mb-8">
            <h1 className="text-[clamp(1.8rem,4vw,2.6rem)] font-semibold leading-tight text-[var(--ink)]">
              {post.title}
            </h1>
            <p className="font-inter mt-3 text-[0.85rem] text-[var(--ink-soft)]">
              {formatDate(post.pubDate)}
            </p>
          </header>

          <div
            className="article-content relative z-[1] font-inter text-[var(--ink)]"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>
      </div>
    </main>
  );
}

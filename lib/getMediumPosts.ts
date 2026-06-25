import Parser from "rss-parser";
import sanitizeHtml from "sanitize-html";
import { slugify } from "@/lib/slug";

export type MediumPost = {
  title: string;
  slug: string;
  pubDate: string;
  excerpt: string;
  contentHtml: string;
  link: string;
};

const FEED_URL = "https://medium.com/feed/@smritiaspires";

const sanitizeOptions: sanitizeHtml.IOptions = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat([
    "img",
    "h1",
    "h2",
    "h3",
    "h4",
    "figure",
    "figcaption",
  ]),
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    img: ["src", "alt", "title", "width", "height", "loading"],
    a: ["href", "name", "target", "rel"],
  },
  allowedSchemes: ["http", "https", "mailto"],
  transformTags: {
    a: sanitizeHtml.simpleTransform("a", {
      rel: "noopener noreferrer",
      target: "_blank",
    }),
  },
};

function stripMediumChrome(html: string): string {
  return html
    .replace(/<figure class="graf graf--figure">[\s\S]*?<\/figure>/gi, "")
    .replace(
      /<p class="graf graf--p">[\s\S]*?Originally published at[\s\S]*?<\/p>/gi,
      "",
    )
    .replace(
      /<p class="graf graf--p">[\s\S]*?Follow[\s\S]*?Medium[\s\S]*?<\/p>/gi,
      "",
    )
    .replace(/<div class="section-divider"><\/div>/gi, "")
    .trim();
}

function getExcerpt(html: string, maxLength = 160): string {
  const text = html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

function assignUniqueSlugs(
  posts: Omit<MediumPost, "slug">[],
): MediumPost[] {
  const used = new Map<string, number>();

  return posts.map((post) => {
    const base = slugify(post.title) || "article";
    const count = used.get(base) ?? 0;
    used.set(base, count + 1);
    const slug = count === 0 ? base : `${base}-${count + 1}`;

    return { ...post, slug };
  });
}

export async function getMediumPosts(): Promise<MediumPost[]> {
  const parser = new Parser({
    customFields: {
      item: [["content:encoded", "contentEncoded"]],
    },
  });

  try {
    const feed = await parser.parseURL(FEED_URL);

    const posts = (feed.items ?? [])
      .filter((item) => item.title && item.contentEncoded)
      .map((item) => {
        const rawHtml = (item.contentEncoded as string) ?? "";
        const cleaned = stripMediumChrome(rawHtml);
        const safeHtml = sanitizeHtml(cleaned, sanitizeOptions);

        return {
          title: item.title ?? "Untitled",
          pubDate: item.pubDate ?? item.isoDate ?? "",
          excerpt: getExcerpt(safeHtml),
          contentHtml: safeHtml,
          link: item.link ?? "",
        };
      });

    return assignUniqueSlugs(posts);
  } catch (error) {
    console.error("Failed to fetch Medium RSS feed:", error);
    return [];
  }
}

export async function getMediumPostBySlug(
  slug: string,
): Promise<MediumPost | undefined> {
  const posts = await getMediumPosts();
  return posts.find((post) => post.slug === slug);
}

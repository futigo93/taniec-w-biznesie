import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";
import { siteConfig } from "@/config/site";

export type ArticleAudience = "owner" | "instructor" | "dancer";
export type ArticleTopic = "case-study" | "strategia" | "komunikacja" | "zespol" | "rozwoj";

export type ArticleAuthor = {
  name: string;
  href?: string;
};

export type ArticleAudio = {
  src: string;
  description?: string;
};

/**
 * Structured metadata every `.mdx` article carries as YAML frontmatter
 * (`---\n...\n---` at the top of the file, compiled to `export const
 * frontmatter` by remark-mdx-frontmatter — see next.config.ts). This is the
 * single source of truth: it drives the article page's own SEO metadata,
 * the homepage teaser, the /artykuly listing, and the sitemap. It's also
 * the shape Keystatic's collection schema (keystatic.config.ts) writes to.
 */
export type ArticleMeta = {
  title: string;
  description: string;
  category: string; // doubles as ArticleHero eyebrow + listing chip
  audience: ArticleAudience;
  topic?: ArticleTopic;
  readTime?: string; // optional override; auto-computed from word count when omitted
  cover: string;
  date: string; // ISO "YYYY-MM-DD"
  author?: ArticleAuthor;
  featured?: boolean;
  audio?: ArticleAudio;
};

export type ArticleListItem = ArticleMeta & { slug: string; external?: string };

const REQUIRED_META_FIELDS = ["title", "description", "category", "audience", "cover", "date"] as const;

const CONTENT_DIR = path.join(process.cwd(), "src/content/artykuly");
const WORDS_PER_MINUTE = 200;

/**
 * The one entry that has no local page: a link out to a partner's blog.
 * Kept here (not as an .mdx file) because it has no body to render and must
 * be excluded from generateStaticParams/sitemap — everyday phone-publishing
 * only ever means dropping a new .mdx file into src/content/artykuly/.
 */
const EXTERNAL_ARTICLES: ArticleListItem[] = [
  {
    slug: "przewodnik-po-widokach-grafiku",
    title: "Przewodnik po widokach grafiku: dopasuj prezentację zajęć do swojej szkoły tańca",
    description:
      "Jak wykorzystać różne widoki grafiku w baileo.pl, aby kursanci łatwiej czytali ofertę i szybciej rezerwowali miejsca.",
    category: "Narzędzia",
    audience: "owner",
    topic: "komunikacja",
    external: "https://baileo.pl/blog/przewodnik-po-widokach-grafiku",
    cover: "/przewodnik-po-widokach-grafiku-cover.png",
    date: "2025-01-01",
    readTime: "15 min",
  },
];

function validateMeta(slug: string, meta: Partial<ArticleMeta> | undefined): asserts meta is ArticleMeta {
  if (!meta) {
    throw new Error(`Article "${slug}" is missing YAML frontmatter (--- ... ---) in its .mdx file.`);
  }
  const missing = REQUIRED_META_FIELDS.filter((key) => !meta[key]);
  if (missing.length > 0) {
    throw new Error(`Article "${slug}" frontmatter is missing required field(s): ${missing.join(", ")}.`);
  }
}

function readRawSource(slug: string): string {
  return fs.readFileSync(path.join(CONTENT_DIR, `${slug}.mdx`), "utf8");
}

export function computeReadTime(slug: string, meta: ArticleMeta): string {
  if (meta.readTime) return meta.readTime;
  const wordCount = readRawSource(slug).trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
  return `${minutes} min`;
}

/**
 * Table-of-contents source: every `<ArticleSection label="...">` in the raw
 * .mdx body, in order. Empty for regular (non-case-study-style) articles —
 * TableOfContents renders nothing in that case. A plain regex over the raw
 * source is enough here; we only need the label text, not a real AST.
 */
export function getSectionLabels(slug: string): string[] {
  const raw = readRawSource(slug);
  const matches = raw.matchAll(/<ArticleSection\s+label=["']([^"']+)["']/g);
  return Array.from(matches, (match) => match[1]);
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getArticleModule(slug: string) {
  const mod = (await import(`@/content/artykuly/${slug}.mdx`)) as {
    default: ComponentType;
    frontmatter?: Partial<ArticleMeta>;
  };
  validateMeta(slug, mod.frontmatter);
  return { Content: mod.default, meta: mod.frontmatter };
}

export async function getArticleMeta(slug: string): Promise<ArticleMeta> {
  const { meta } = await getArticleModule(slug);
  return { ...meta, readTime: computeReadTime(slug, meta) };
}

export async function getAllArticles(): Promise<ArticleListItem[]> {
  const local = await Promise.all(
    getArticleSlugs().map(async (slug) => ({ slug, ...(await getArticleMeta(slug)) })),
  );
  const all = [...local, ...EXTERNAL_ARTICLES];
  return all.sort((a, b) => {
    if (Boolean(a.featured) !== Boolean(b.featured)) return a.featured ? -1 : 1;
    return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
  });
}

export function formatArticleDate(iso: string): string {
  return new Intl.DateTimeFormat("pl-PL", { dateStyle: "long" }).format(new Date(iso));
}

export function resolveAuthor(meta: ArticleMeta): ArticleAuthor {
  // Keystatic writes `author` as a plain (always-present) object with
  // possibly-empty fields rather than omitting the key entirely, so an
  // empty `name` means "not set", not "author is named ''".
  return meta.author?.name ? meta.author : { name: siteConfig.author };
}

export function resolveAudio(meta: ArticleMeta): ArticleAudio | undefined {
  // Same reasoning as resolveAuthor: an empty `src` means "no audio".
  return meta.audio?.src ? meta.audio : undefined;
}

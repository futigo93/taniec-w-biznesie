import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleHero } from "@/components/articles/article-hero";
import { ArticleAudioPlayer } from "@/components/audio/article-audio-player";
import { siteConfig } from "@/config/site";
import {
  computeReadTime,
  formatArticleDate,
  getArticleMeta,
  getArticleModule,
  getArticleSlugs,
  resolveAudio,
  resolveAuthor,
} from "@/lib/articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const meta = await getArticleMeta(slug);
  const url = `${siteConfig.url}/artykuly/${slug}`;
  const coverUrl = meta.cover.startsWith("http") ? meta.cover : `${siteConfig.url}${meta.cover}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/artykuly/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      url,
      publishedTime: meta.date,
      images: [{ url: coverUrl, width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [coverUrl],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  if (!getArticleSlugs().includes(slug)) notFound();

  const { Content, meta } = await getArticleModule(slug);
  const author = resolveAuthor(meta);
  const audio = resolveAudio(meta);
  const readTime = computeReadTime(slug, meta);

  return (
    <div className="page-wash py-12">
      <article className="mx-auto max-w-3xl space-y-6 px-4 md:px-0">
        <ArticleHero
          eyebrow={meta.category}
          title={meta.title}
          description={meta.description}
          path={`/artykuly/${slug}`}
          imageSrc={meta.cover}
          imageAlt={meta.title}
          authorName={author.name}
          authorHref={author.href}
          date={formatArticleDate(meta.date)}
          readTime={readTime}
        />

        {audio ? <ArticleAudioPlayer src={audio.src} description={audio.description} /> : null}

        <div data-margin-note-scope>
          <Content />
        </div>

        <Link href="/artykuly" className="text-sm font-semibold text-primary">
          ↩ Wróć do listy artykułów
        </Link>
      </article>
    </div>
  );
}

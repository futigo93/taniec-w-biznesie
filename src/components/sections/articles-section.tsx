import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { articlePreviews } from "@/content/home";

export function ArticlesSection() {
  const featuredArticle = articlePreviews.find((article) => article.featured);
  const supportingArticles = articlePreviews.filter((article) => !article.featured).slice(0, 3);

  return (
    <section
      id="artykuly"
      className="surface-section space-y-8 p-6 md:p-10"
    >
      <SectionHeading
        eyebrow="Wybrane treści"
        title="Teksty o tym, co naprawdę zaczyna ważyć w szkole, kiedy sama pasja już nie wystarcza"
        description="Znajdziesz tu materiały o decyzjach, procesach, komunikacji i codziennym prowadzeniu szkoły. Na stronie artykułów czeka też szersza biblioteka tekstów dla instruktorów i ludzi tańca."
      />
      {featuredArticle ? (
        <FeaturedArticleCard />
      ) : null}
      <div className="grid gap-4 md:grid-cols-3">
        {supportingArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          href="/artykuly"
          className="cta-link"
        >
          Zobacz pełną bibliotekę treści
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function FeaturedArticleCard() {
  const article = articlePreviews.find((entry) => entry.featured);

  if (!article) return null;

  const href = article.external ?? `/artykuly/${article.slug}`;
  const isExternal = Boolean(article.external);

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="surface-focus accent-hover-lift grid gap-6 rounded-[2rem] p-6 text-heading md:grid-cols-[minmax(0,1.1fr)_320px]"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-primary/80">
          <span>{article.category}</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="heading-display-soft text-heading max-w-3xl text-3xl leading-tight md:text-4xl">{article.title}</h3>
        <p className="text-body max-w-2xl text-base leading-8">{article.description}</p>
        <p className="text-body text-sm leading-7">
          To historia o tym, jak uporządkowanie danych i procesów może zdjąć ze szkoły sporą część ręcznej pracy i dać
          dużo większy spokój operacyjny bez wywracania wszystkiego do góry nogami.
        </p>
        <div className="cta-link">
          Czytaj case study
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
      <div className="surface-card-inset relative min-h-64 overflow-hidden rounded-[1.6rem]">
        {article.cover ? (
          <Image
            src={article.cover}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 320px"
          />
        ) : null}
      </div>
    </Link>
  );
}

function ArticleCard({ article }: { article: (typeof articlePreviews)[number] }) {
  const href = article.external ?? `/artykuly/${article.slug}`;
  const isExternal = Boolean(article.external);

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="surface-card accent-hover-lift group rounded-[1.75rem] p-5"
    >
      <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-primary/80">
        <span>{article.category}</span>
        <span>{article.readTime}</span>
      </div>
      <h3 className="heading-display-soft text-heading mt-4 text-3xl leading-tight">{article.title}</h3>
      <p className="text-body mt-3 text-sm leading-7">{article.description}</p>
      <p className="cta-link mt-5">
        {isExternal ? "Czytaj u partnera" : "Czytaj tekst"}
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </p>
    </Link>
  );
}

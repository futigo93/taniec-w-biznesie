"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { articlePreviews, type ArticlePreview } from "@/content/home";
import { Button } from "@/components/ui/button";

const filters = [
  { id: "owner", label: "Dla właściciela" },
  { id: "instructor", label: "Dla instruktora" },
  { id: "dancer", label: "Dla tancerza" },
  { id: "all", label: "Wszystkie teksty" },
] as const;

type FilterId = (typeof filters)[number]["id"];

export function ArticlesLibraryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("owner");

  const featuredArticles = useMemo(
    () => articlePreviews.filter((article) => article.featured || article.audience === "owner").slice(0, 4),
    [],
  );

  const filteredArticles = useMemo(() => {
    if (activeFilter === "all") return articlePreviews;
    return articlePreviews.filter((article) => article.audience === activeFilter);
  }, [activeFilter]);

  const [leadArticle, ...libraryArticles] = filteredArticles;

  return (
    <div className="page-wash py-8 md:py-12">
      <div className="mx-auto max-w-6xl space-y-8 px-4 md:space-y-10 md:px-6">
        <SectionHeading
          eyebrow="Biblioteka treści"
          title="Teksty o decyzjach, procesach i tym, co naprawdę zaczyna ważyć w szkole tańca"
          description={
            <>
              Na górze znajdziesz materiały, od których najczęściej warto zacząć jako właściciel lub manager. Niżej możesz
              wejść szerzej w teksty dla instruktorów i ludzi tańca. Jeśli brakuje ważnego tematu, napisz na{" "}
              <a href="mailto:kontakt@taniecwbiznesie.pl" className="link-accent">
                kontakt@taniecwbiznesie.pl
              </a>
              .
            </>
          }
        />

        <section className="surface-section space-y-5 p-5 md:space-y-6 md:p-10">
          <SectionHeading
            eyebrow="Na początek"
            title="Jeśli prowadzisz szkołę, od tych materiałów najłatwiej zacząć"
            description="To teksty, które pomagają zobaczyć szkołę szerzej niż przez grafik, nabór i bieżące wyjątki."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} compact={false} />
            ))}
          </div>
        </section>

        <section className="surface-section space-y-5 p-5 md:space-y-6 md:p-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Przeglądaj dalej"
              title="Wybierz ścieżkę, od której chcesz czytać dalej"
              description="Możesz zacząć od tekstów dla właścicieli albo wejść szerzej w materiały dla instruktorów i ludzi tańca."
            />
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  type="button"
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  className="rounded-full px-4"
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

          {leadArticle ? (
            <ArticleCard article={leadArticle} featured />
          ) : (
            <div className="surface-card-inset rounded-[1.75rem] p-6 text-sm text-body">
              W tej kategorii nie ma jeszcze tekstów do pokazania.
            </div>
          )}

          {libraryArticles.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {libraryArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} compact />
              ))}
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
}

function ArticleCard({
  article,
  featured = false,
  compact = true,
}: {
  article: ArticlePreview;
  featured?: boolean;
  compact?: boolean;
}) {
  const href = article.external ?? `/artykuly/${article.slug}`;
  const isExternal = Boolean(article.external);

  if (featured) {
    return (
      <Link
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="surface-focus accent-hover-lift grid gap-5 rounded-[2rem] p-5 text-heading md:p-6 lg:grid-cols-[minmax(0,1fr)_300px]"
      >
        <div className="space-y-4">
          <MetaLine article={article} dark />
          <h2 className="heading-display-soft text-heading max-w-3xl text-[1.62rem] leading-tight md:text-4xl">{article.title}</h2>
          <p className="text-body max-w-2xl text-[0.98rem] leading-7 md:text-base md:leading-8">{article.description}</p>
          <p className="cta-link">
            {isExternal ? "Czytaj u partnera" : "Czytaj tekst"}
            <ArrowUpRight className="h-4 w-4" />
          </p>
        </div>
        {article.cover ? (
          <div className="surface-card-inset relative min-h-64 overflow-hidden rounded-[1.6rem]">
            <Image
              src={article.cover}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 300px"
            />
          </div>
        ) : null}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="surface-card accent-hover-lift group flex h-full flex-col gap-3 rounded-[1.75rem] p-4 md:gap-4 md:p-5"
    >
      {article.cover && !compact ? (
        <div className="relative h-52 overflow-hidden rounded-[1.4rem]">
          <Image src={article.cover} alt={article.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      ) : null}
      <div className="space-y-3">
        <MetaLine article={article} />
        <h3 className="heading-display-soft text-heading text-[1.45rem] leading-tight md:text-2xl">{article.title}</h3>
        <p className="text-body text-sm leading-6 md:leading-7">{article.description}</p>
      </div>
      <p className="cta-link mt-auto">
        {isExternal ? "Czytaj u partnera" : "Czytaj tekst"}
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </p>
    </Link>
  );
}

function MetaLine({ article, dark = false }: { article: ArticlePreview; dark?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] ${
        dark ? "text-primary/80" : "text-primary/80"
      }`}
    >
      <span>{article.category}</span>
      <span>{article.readTime}</span>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { articlePreviews, type ArticlePreview } from "@/content/home";
import { Button } from "@/components/ui/button";

const MAX_ARTICLES = 3;

export function ArticlesSection() {
  const articles = useMemo(() => articlePreviews.slice(0, MAX_ARTICLES), []);
  const [current, setCurrent] = useState(0);

  const handlePrev = () => setCurrent((prev) => (prev - 1 + articles.length) % articles.length);
  const handleNext = () => setCurrent((prev) => (prev + 1) % articles.length);

  const description = (
    <>
      Pogłęb swoją wiedzę z różnych dziedzin – ale wszystko w kręgu zainteresowań właścicieli szkół tańca. Masz temat,
      który powinien się tu znaleźć? A może chcesz podzielić się <b>swoją</b> wiedzą albo doświadczeniem? Daj znać:{" "}
      <a href="mailto:kontakt@taniecwbiznesie.pl" className="underline">
        kontakt@taniecwbiznesie.pl
      </a>
      .
    </>
  );

  return (
    <section className="space-y-8 rounded-3xl border border-border/60 bg-card/60 p-6 text-white shadow-lg md:p-10">
      <SectionHeading eyebrow="Artykuły eksperckie" title="Pogłęb swoją wiedzę" description={description} />
      <div className="relative">
        <div className="flex items-center gap-4 overflow-hidden">
          {articles.map((article, index) => (
            <ArticleCard key={article.slug} article={article} active={index === current} />
          ))}
        </div>
        {articles.length > 1 && (
          <div className="mt-4 flex items-center justify-between md:justify-end md:gap-3">
            <Button variant="outline" onClick={handlePrev} className="size-10 rounded-full p-0 text-lg">
              ‹
            </Button>
            <Button variant="outline" onClick={handleNext} className="size-10 rounded-full p-0 text-lg">
              ›
            </Button>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <Button variant="ghost" asChild>
          <Link href="/artykuly">Zobacz więcej artykułów</Link>
        </Button>
      </div>
    </section>
  );
}

function ArticleCard({ article, active }: { article: ArticlePreview; active: boolean }) {
  return (
    <article
      className={`flex h-full min-w-[100%] flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-md transition-all md:min-w-[calc(50%-1rem)] ${
        active ? "opacity-100" : "opacity-60 md:opacity-100"
      }`}
    >
      {article.cover && (
        <div className="relative h-48 w-full overflow-hidden rounded-xl">
          <Image
            src={article.cover}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-primary/80">
        <span>{article.category}</span>
        <span>{article.readTime}</span>
      </div>
      <h3 className="text-xl font-semibold leading-tight">{article.title}</h3>
      <p className="text-sm text-muted-foreground/90 flex-1">{article.description}</p>
      <div>
        <Link
          href={article.external ?? `/artykuly/${article.slug}`}
          className="text-sm font-semibold text-primary transition hover:text-primary/80"
          target={article.external ? "_blank" : undefined}
          rel={article.external ? "noreferrer" : undefined}
        >
          {article.external ? "Czytaj u partnera" : "Czytaj na blogu"}
        </Link>
      </div>
    </article>
  );
}

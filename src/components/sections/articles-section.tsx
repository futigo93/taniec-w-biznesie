"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useRef } from "react";
import { SectionHeading } from "@/components/section-heading";
import { articlePreviews, type ArticlePreview } from "@/content/home";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MAX_ARTICLES = 4;

export function ArticlesSection() {
  const articles = useMemo(() => articlePreviews.slice(0, MAX_ARTICLES), []);
  const sliderRef = useRef<HTMLDivElement | null>(null);

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

  const handlePrev = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: -sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({
      left: sliderRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="space-y-8 rounded-3xl border border-border/60 bg-card/60 p-6 text-white shadow-lg md:p-10">
      <SectionHeading eyebrow="Artykuły eksperckie" title="Pogłęb swoją wiedzę" description={description} />
      <div className="space-y-6">
        <div className="relative overflow-hidden rounded-2xl">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {articles.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                className="w-full shrink-0 basis-1/2 lg:basis-1/3"
              />
            ))}
          </div>
        </div>
        {articles.length > 1 && (
          <div className="flex items-center justify-between">
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

function ArticleCard({ article, className }: { article: ArticlePreview; className?: string }) {
  const href = article.external ?? `/artykuly/${article.slug}`;
  const isExternal = Boolean(article.external);

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className={cn("group block focus-visible:outline focus-visible:outline-primary/60", className)}
    >
      <article className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-md transition hover:bg-white/10">
        {article.cover && (
          <div className="relative h-48 w-full overflow-hidden rounded-xl">
            <Image
              src={article.cover}
              alt={article.title}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-primary/80">
          <span>{article.category}</span>
          <span>{article.readTime}</span>
        </div>
        <h3 className="text-xl font-semibold leading-tight">{article.title}</h3>
        <p className="flex-1 text-sm text-muted-foreground/90">{article.description}</p>
        <p className="text-sm font-semibold text-primary">{isExternal ? "Czytaj u partnera" : "Czytaj na blogu"}</p>
      </article>
    </Link>
  );
}

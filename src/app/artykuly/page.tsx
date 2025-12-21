import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { articlePreviews } from "@/content/home";

export const metadata: Metadata = {
  title: "Artykuły eksperckie",
  description:
    "Pogłęb swoją wiedzę z różnych dziedzin – wciąż w kręgu tematów właścicieli szkół tańca. Tu znajdziesz aktualne artykuły i odniesienia do partnerów.",
};

export default function ArticlesPage() {
  return (
    <div className="bg-gradient-to-b from-background to-muted/50 py-12">
      <div className="mx-auto max-w-5xl space-y-10 px-4 md:px-6">
        <SectionHeading
          eyebrow="Artykuły eksperckie"
          title="Pogłęb swoją wiedzę"
          description={
            <>
              Pogłęb swoją wiedzę z różnych dziedzin – ale wszystko w kręgu zainteresowań właścicieli szkół tańca. Masz
              temat, który powinien się tu znaleźć? A może chcesz podzielić się swoją wiedzą albo doświadczeniem? Daj
              znać:{" "}
              <a href="mailto:kontakt@taniecwbiznesie.pl" className="underline">
                kontakt@taniecwbiznesie.pl
              </a>
              .
            </>
          }
        />

        <div className="space-y-6">
          {articlePreviews.map((article) => (
            <article
              key={article.slug}
              id={article.slug}
              className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm md:flex-row"
            >
              {article.cover && (
                <div className="relative h-48 flex-shrink-0 overflow-hidden rounded-2xl md:h-auto md:w-64">
                  <Image
                    src={article.cover}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 256px"
                  />
                </div>
              )}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-primary/80">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h2 className="text-2xl font-semibold leading-tight">{article.title}</h2>
                <p className="text-sm text-muted-foreground">{article.description}</p>
                <div>
                  <Link
                    href={article.external ?? `/artykuly/${article.slug}`}
                    className="text-sm font-semibold text-primary transition hover:text-primary/80"
                    target={article.external ? "_blank" : undefined}
                    rel={article.external ? "noreferrer" : undefined}
                  >
                    {article.external ? "Czytaj u partnera" : "Czytaj na stronie"}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

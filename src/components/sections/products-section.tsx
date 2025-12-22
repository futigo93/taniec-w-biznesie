"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { productSpotlight } from "@/content/home";
import { BetaModalTrigger } from "@/components/beta-modal-trigger";

export function ProductsSection() {
  return (
    <section className="space-y-8 rounded-3xl border border-border/70 bg-muted/30 p-6 shadow-sm md:p-10">
      <SectionHeading
        eyebrow="Produkty i narzędzia"
        title="Wsparcie systemowe – od zarządzania grafikiem po wynagrodzenia instruktorów"
        description="Poza treściami tworzę narzędzia i usługi, które pomagają ogarnąć operacje szkoły tańca. Wybierz to, czego potrzebujesz dziś."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {productSpotlight.map((product) => (
          <article
            key={product.title}
            className="flex h-full flex-col gap-3 rounded-2xl border border-border/70 bg-background p-5"
          >
            <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              <span>{product.label}</span>
              {product.isNew && <Badge variant="secondary">Nowość</Badge>}
            </div>
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <p className="flex-1 text-sm text-muted-foreground">{product.description}</p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {product.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            {product.ctaModal ? (
              <BetaModalTrigger buttonLabel={product.cta} variant="outline" />
            ) : (
              <Link
                href={product.url ?? siteConfig.socials.baileo}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
                target={product.external ? "_blank" : undefined}
                rel={product.external ? "noreferrer" : undefined}
              >
                {product.cta}
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

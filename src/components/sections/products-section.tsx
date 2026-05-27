"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { supportPaths } from "@/content/home";
import { ConsultingModalTrigger } from "@/components/consulting-modal-trigger";

export function ProductsSection() {
  return (
    <section className="surface-section space-y-8 p-6 md:p-10">
      <SectionHeading
        eyebrow="Dalsze wsparcie"
        title="Kiedy sama wiedza nie wystarcza, są też kierunki głębszego uporządkowania szkoły"
        description="Jeśli chcesz pójść dalej niż sama lektura, możesz wejść w porządkowanie ścieżki szkoły od oferty i grafiku do zapisu albo w bezpośrednią pracę nad decyzjami właścicielskimi."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {supportPaths.map((path) => (
          <article
            key={path.title}
            className="surface-card-soft flex h-full flex-col p-5"
          >
            <div className="eyebrow-accent">{path.label}</div>
            <h3 className="text-heading mt-4 font-serif text-3xl leading-tight">{path.title}</h3>
            <p className="text-body mt-4 flex-1 text-sm leading-7">{path.description}</p>
            <ul className="text-body-strong mt-5 space-y-3 text-sm leading-6">
              {path.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              {path.ctaModal ? (
                <ConsultingModalTrigger buttonLabel={path.cta} variant="outline" />
              ) : (
                <Link
                  href={path.url ?? "/uslugi"}
                  target={path.external ? "_blank" : undefined}
                  rel={path.external ? "noreferrer" : undefined}
                  className="cta-link"
                >
                  {path.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

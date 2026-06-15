"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { JourneyMarker } from "@/components/journey-marker";
import { supportPaths } from "@/content/home";

export function ProductsSection() {
  return (
    <section className="surface-section relative space-y-6 p-5 md:space-y-8 md:p-10">
      <JourneyMarker step="3" label="Dalsze wsparcie" />
      <SectionHeading
        title="Kiedy sama wiedza nie wystarcza, są też kierunki głębszego uporządkowania szkoły"
        description="Jeśli sama lektura to za mało, możesz wejść głębiej w zapisy, decyzje właścicielskie albo obecność swojej marki w internecie."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {supportPaths.map((path) => (
          <article
            key={path.title}
            className="surface-focus accent-hover-lift flex h-full flex-col p-4 md:p-5"
          >
            <div className="eyebrow-accent">{path.label}</div>
            <h3 className="heading-display-soft text-heading mt-3 text-[1.72rem] leading-tight md:mt-4 md:text-3xl">{path.title}</h3>
            <p className="text-body mt-3 flex-1 text-sm leading-6 md:mt-4 md:leading-7">{path.description}</p>
            <ul className="text-body-strong mt-4 space-y-2.5 text-sm leading-6 md:mt-5 md:space-y-3">
              {path.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="pt-1">
        <Link href="/uslugi" className="cta-link">
          Czytaj więcej o wsparciu
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

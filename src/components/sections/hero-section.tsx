"use client";

import { ArrowRight, BookOpenText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnchorLink } from "@/components/ui/anchor-link";
import { trackEvent } from "@/lib/analytics";

const heroSignals = [
  "dla właścicieli i managerów szkół tańca",
  "mniej chaosu w decyzjach i komunikacji",
];

export function HeroSection() {
  const handlePrimaryClick = () => {
    trackEvent("ebook_full_interest", { source: "hero_primary" });
  };

  return (
    <section
      id="start"
      className="surface-focus relative overflow-hidden rounded-[2.5rem] shadow-[0_32px_120px_rgba(24,28,38,0.12)]"
    >
      <div className="hero-glow absolute inset-y-0 right-0 hidden w-[38%] lg:block" />
      <div className="relative grid gap-5 px-5 py-7 md:gap-10 md:px-10 md:py-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)] lg:items-end">
        <div className="space-y-5">
          <div className="space-y-3">
            <p className="eyebrow-accent tracking-[0.38em]">Taniec w Biznesie</p>
            <h1 className="heading-display text-heading max-w-4xl text-[1.7rem] leading-[1.04] md:text-6xl">
              Pomagam właścicielom szkół tańca porządkować decyzje i rozwój bez dokładania chaosu.
            </h1>
            <p className="text-body max-w-2xl text-base leading-7 md:text-xl md:leading-8">
              Jeśli szkoła rośnie, a Ty coraz częściej gasisz wyjątki i ręcznie tłumaczysz ofertę, znajdziesz tu treści, które pomagają to poukładać.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg" className="h-12 w-full rounded-full px-6 text-base sm:w-auto" onClick={handlePrimaryClick}>
              <AnchorLink anchor="zapis">
                Odbierz pełny ebook
                <ArrowRight className="h-4 w-4" />
              </AnchorLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="hidden h-12 rounded-full px-6 text-base sm:inline-flex">
              <AnchorLink anchor="artykuly">Zobacz wybrane treści</AnchorLink>
            </Button>
            <AnchorLink anchor="artykuly" className="cta-link sm:hidden">
              Zobacz wybrane treści
            </AnchorLink>
          </div>
        </div>
        <aside className="accent-hover-lift rounded-[2rem] border border-[color:var(--surface-focus-border)] bg-[var(--surface-card)] p-5 text-heading md:p-6">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-primary/80">
            <BookOpenText className="h-4 w-4" />
            Dla kogo jest to miejsce
          </div>
          <h2 className="heading-display-soft text-heading mt-4 text-[1.65rem] leading-tight md:text-3xl">
            Szkoła potrzebuje dziś nie tylko pasji, ale też lepszych decyzji.
          </h2>
          <p className="text-body mt-4 text-sm leading-6">
            To miejsce jest dla osób, które czują, że prowadzenie szkoły coraz bardziej zależy od jakości decyzji, komunikacji i codziennego porządkowania chaosu.
          </p>
          <ul className="text-body-strong mt-5 space-y-2.5 text-sm leading-6">
            {heroSignals.map((signal) => (
              <li key={signal} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{signal}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

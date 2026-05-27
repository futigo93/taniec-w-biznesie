"use client";

import { ArrowRight, BookOpenText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnchorLink } from "@/components/ui/anchor-link";
import { trackEvent } from "@/lib/analytics";

const heroSignals = [
  "dla właścicieli i managerów szkół tańca",
  "mniej chaosu w decyzjach, komunikacji i procesach",
  "konkretne treści, które pomagają działać spokojniej i mądrzej",
];

export function HeroSection() {
  const handlePrimaryClick = () => {
    trackEvent("ebook_full_interest", { source: "hero_primary" });
  };

  return (
    <section
      id="start"
      className="relative overflow-hidden rounded-[2.5rem] border border-[#dcc6b3] bg-[radial-gradient(circle_at_top_left,_rgba(243,211,183,0.7),_transparent_35%),linear-gradient(135deg,#fffdf9_0%,#f6eee4_55%,#efe4d7_100%)] shadow-[0_32px_120px_rgba(68,44,28,0.12)]"
    >
      <div className="absolute inset-y-0 right-0 hidden w-[38%] bg-[radial-gradient(circle_at_center,_rgba(90,56,35,0.18),_transparent_70%)] lg:block" />
      <div className="relative grid gap-10 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)] lg:items-end">
        <div className="space-y-7">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.38em] text-primary/85">Taniec w Biznesie</p>
            <h1 className="max-w-4xl font-serif text-4xl leading-[1.02] text-[#2a1f19] md:text-6xl">
              Pomagam właścicielom szkół tańca porządkować decyzje, procesy i rozwój szkoły bez dokładania kolejnego chaosu.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#5b493f] md:text-xl">
              Jeśli szkoła rośnie, a Ty coraz częściej łapiesz się na gaszeniu wyjątków, ręcznym tłumaczeniu oferty i
              improwizowaniu operacji, to tu znajdziesz język, treści i konkretne kierunki, które pomagają to poukładać.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-6 text-base" onClick={handlePrimaryClick}>
              <AnchorLink anchor="zapis">
                Odbierz pełny ebook
                <ArrowRight className="h-4 w-4" />
              </AnchorLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-full px-6 text-base">
              <AnchorLink anchor="artykuly">Zobacz wybrane treści</AnchorLink>
            </Button>
          </div>
        </div>
        <aside className="surface-card rounded-[2rem] p-6 text-heading">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-primary/80">
            <BookOpenText className="h-4 w-4" />
            Dla kogo jest to miejsce
          </div>
          <h2 className="text-heading mt-4 font-serif text-3xl leading-tight">Najpierw uporządkuj sposób myślenia o szkole. Potem wybieraj kolejne ruchy.</h2>
          <p className="text-body mt-4 text-sm leading-7">
            To miejsce powstało dla osób, które czują, że prowadzenie szkoły coraz mniej polega na samej pasji do tańca, a
            coraz bardziej na jakości decyzji, komunikacji i codziennego porządkowania chaosu.
          </p>
          <ul className="text-body-strong mt-6 space-y-3 text-sm leading-6">
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

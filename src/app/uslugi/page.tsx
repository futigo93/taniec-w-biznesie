import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { ConsultingModalTrigger } from "@/components/consulting-modal-trigger";

export const metadata: Metadata = {
  title: "Wsparcie",
  description:
    "Baileo i consulting jako dwa kierunki dalszego porządkowania szkoły tańca: od ścieżki wejścia i zapisów po decyzje właścicielskie.",
};

const baileoHighlights = [
  "Jedno sensowne miejsce zamiast rozjazdu między postem, grafikiem i wiadomościami.",
  "Mniej ręcznego tłumaczenia poziomów, wyjątków, startów grup i zmian.",
  "Prostsza droga od zainteresowania do zapisu bez dokładania kolejnego chaosu po stronie szkoły.",
];

const consultingHighlights = [
  "Pomoc w poukładaniu priorytetów, zanim dołożysz kolejne narzędzie albo proces.",
  "Rozmowa o ofercie, komunikacji, zespole i tym, gdzie szkoła dziś najbardziej się rozjeżdża.",
  "Podejście osadzone w realiach szkół tańca, nie ogólny consulting dla każdego biznesu.",
];

export default function ServicesPage() {
  return (
    <div className="page-wash py-8 md:py-12">
      <div className="mx-auto max-w-6xl space-y-8 px-4 md:space-y-10 md:px-6">
        <SectionHeading
          eyebrow="Dalsze wsparcie"
          title="Jeśli sama wiedza to za mało, możesz wejść głębiej w porządkowanie szkoły"
          description="To są dwa kierunki dalszej pracy: uporządkowanie ścieżki od oferty do zapisu albo bezpośrednia praca nad decyzjami, procesami i komunikacją."
        />

        <section className="surface-focus grid gap-5 p-5 text-heading md:p-10 lg:grid-cols-[minmax(0,1.05fr)_340px] lg:items-center">
          <div className="space-y-5">
            <p className="eyebrow-accent">Baileo</p>
            <h2 className="heading-display text-heading text-[1.68rem] leading-tight md:text-5xl">
              Porządkowanie drogi od sociali, grafiku i pytań do właściwego zapisu
            </h2>
            <p className="text-body max-w-2xl text-[0.98rem] leading-7 md:text-base md:leading-8">
              Baileo rozwijam z myślą o szkołach, które mają już ruch i ofertę, ale nadal ręcznie domykają wejście nowych
              osób i łatają komunikację między kanałami.
            </p>
            <ul className="text-body-strong space-y-2.5 text-sm leading-6 md:space-y-3 md:leading-7">
              {baileoHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="rounded-full">
              <Link href={siteConfig.socials.baileo} target="_blank" rel="noreferrer">
                Zobacz kierunek Baileo
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="surface-card-inset relative min-h-72 overflow-hidden rounded-[1.8rem]">
            <Image
              src="/baileo-system-overview.webp"
              alt="Podgląd Baileo"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 340px"
            />
          </div>
        </section>

        <section className="surface-section p-5 md:p-10">
          <div className="space-y-5">
            <p className="eyebrow-accent">Consulting i mentoring</p>
            <h2 className="heading-display text-heading text-[1.62rem] leading-tight md:text-5xl">
              Wsparcie dla właściciela, który chce poukładać decyzje zanim szkoła zacznie ciągnąć go w każdą stronę naraz
            </h2>
            <p className="text-body max-w-2xl text-[0.98rem] leading-7 md:text-base md:leading-8">
              To miejsce na rozmowę o tym, gdzie dziś naprawdę boli: w ofercie, komunikacji, zespole, rytmie pracy albo
              codziennym zarządzaniu wyjątkami. Nie chodzi o gotowy pakiet usług, tylko o sensowne uporządkowanie tego, co
              najbardziej waży w konkretnej szkole.
            </p>
            <ul className="text-body-strong space-y-2.5 text-sm leading-6 md:space-y-3 md:leading-7">
              {consultingHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <ConsultingModalTrigger buttonLabel="Umów rozmowę wstępną" variant="outline" />
              <Button asChild variant="ghost" className="rounded-full">
                <Link href="/artykuly">Najpierw poczytaj teksty</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

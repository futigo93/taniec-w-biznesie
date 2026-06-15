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
    "Baileo, consulting i strony internetowe jako kierunki dalszego porządkowania szkoły tańca: od ścieżki wejścia i zapisów po decyzje właścicielskie i obecność w internecie.",
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

const websitesHighlights = [
  "Pomagam ułożyć prezentację oferty, cennika i ścieżki użytkownika od wejścia na stronę do zapisu.",
  "Tworzę strony dla szkół tańca, osób, instruktorów i marek z branży tanecznej, z myśleniem o widoczności i wyszukiwalności.",
  "Strona ma odpowiadać Twojej energii, ale też prowadzić użytkownika do oczekiwanego działania zamiast tylko dobrze wyglądać.",
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
          <div className="surface-card-inset relative flex min-h-72 items-center justify-center overflow-hidden rounded-[1.8rem] p-4">
            <Image
              src="/baileo-system-overview.webp"
              alt="Podgląd Baileo"
              fill
              className="object-contain"
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

        <section className="surface-section p-5 md:p-10">
          <div className="space-y-5">
            <p className="eyebrow-accent">Strony internetowe</p>
            <h2 className="heading-display text-heading text-[1.62rem] leading-tight md:text-5xl">
              Strony dla szkół, instruktorów i marek tanecznych, które mają nie tylko pasować do charakteru, ale też
              prowadzić do działania
            </h2>
            <p className="text-body max-w-3xl text-[0.98rem] leading-7 md:text-base md:leading-8">
              Tworzę strony dla osób, szkół i firm z branży tanecznej. Chodzi nie tylko o estetykę i energię marki, ale
              też o czytelność, sensowną ścieżkę użytkownika, widoczność w internecie i łatwe wyszukiwanie.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="surface-card-soft p-4 md:p-5">
                <h3 className="text-heading text-lg font-semibold">Szkoły tańca</h3>
                <p className="text-body mt-2 text-sm leading-6 md:text-[0.95rem] md:leading-7">
                  Rozumiem złożoność życia szkoły, więc pomagam ułożyć prezentację oferty i cennika oraz całą drogę
                  użytkownika od trafienia na stronę do zapisu.
                </p>
              </div>
              <div className="surface-card-soft p-4 md:p-5">
                <h3 className="text-heading text-lg font-semibold">Instruktorzy i influencerzy</h3>
                <p className="text-body mt-2 text-sm leading-6 md:text-[0.95rem] md:leading-7">
                  Marka instruktora nie musi być ściśle związana z marką szkoły. Własna przestrzeń w internecie pomaga
                  budować rozpoznawalną i cenioną markę osobistą wokół nazwiska i tańca.
                </p>
              </div>
              <div className="surface-card-soft p-4 md:p-5">
                <h3 className="text-heading text-lg font-semibold">Osoby i firmy z branży</h3>
                <p className="text-body mt-2 text-sm leading-6 md:text-[0.95rem] md:leading-7">
                  Strona powinna być spójna z Twoim charakterem działania, ale jednocześnie czytelna, wiarygodna i
                  gotowa na ruch z wyszukiwarki, rekomendacji i social mediów.
                </p>
              </div>
            </div>
            <ul className="text-body-strong space-y-2.5 text-sm leading-6 md:space-y-3 md:leading-7">
              {websitesHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <ConsultingModalTrigger
                buttonLabel="Napisz w sprawie strony"
                variant="outline"
                inquiryType="websites"
                modalTitle="Napisz w sprawie strony internetowej"
                modalDescription="Zostaw podstawowe informacje o sobie, swojej szkole albo marce. Odezwę się i wrócę z propozycją dalszego kroku."
                messagePlaceholder="Napisz, dla kogo ma powstać strona, co ma dziś najlepiej robić i na jakim etapie jesteś."
                submitLabel="Wyślij wiadomość"
                successMessage="Dziękuję! Odezwę się w sprawie strony."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

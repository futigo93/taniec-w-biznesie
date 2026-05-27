"use client";

import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnchorLink } from "@/components/ui/anchor-link";
import { trackEvent } from "@/lib/analytics";

const demoHref = "/Czego_nie_wiesz_o_prowadzeniu_szkoły_tanca_demo-Jakub_Nowak.pdf";

const ebookReasons = [
  {
    title: "Nazwanie realnych kosztów chaosu",
    description:
      "Nie tylko co działa źle, ale dlaczego błędy właścicielskie tak długo potrafią wyglądać jak zwykły brak czasu.",
  },
  {
    title: "Perspektywa szkoły jako systemu",
    description:
      "Oferta, decyzje, ludzie i codzienne napięcia nie żyją osobno. Ebook pomaga spojrzeć na szkołę szerzej niż przez grafik i zajęcia.",
  },
  {
    title: "Pierwszy sensowny krok, nie kolejny newsletter o wszystkim",
    description:
      "Po zapisie dostajesz pełną wersję materiału i kilka wartościowych wiadomości miesięcznie, które rozwijają ten kierunek.",
  },
];

export function EbookSection() {
  const handlePrimaryClick = () => {
    trackEvent("ebook_full_interest", { source: "ebook_section_primary" });
  };

  const handleDemoClick = () => {
    trackEvent("ebook_demo_download", { variant: "homepage_refresh", source: "ebook_section_secondary" });
  };

  return (
    <section
      id="ebook"
      className="surface-focus scroll-mt-32 p-6 md:p-10"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] lg:items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="eyebrow-accent">Na start</p>
            <h2 className="heading-display text-heading max-w-3xl text-4xl leading-tight md:text-5xl">
              Ebook, który pomaga zobaczyć szkołę szerzej niż przez grafik, nabór i bieżące pożary.
            </h2>
            <p className="text-body max-w-2xl text-base leading-8 md:text-lg">
              „Czego nie wiesz o prowadzeniu szkoły tańca” to materiał dla osób, które czują, że szkoła coraz bardziej
              zależy od jakości decyzji, komunikacji i procesów, a nie tylko od energii na sali. Pełną wersję dostajesz po
              zapisie na listę.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {ebookReasons.map((reason) => (
              <article
                key={reason.title}
                className="surface-card accent-hover-lift p-4"
              >
                <h3 className="heading-display-soft text-heading text-2xl leading-tight">{reason.title}</h3>
                <p className="text-body mt-3 text-sm leading-7">{reason.description}</p>
              </article>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-full px-6 text-base" onClick={handlePrimaryClick}>
              <AnchorLink anchor="zapis">
                Odbierz pełny ebook
                <ArrowRight className="h-4 w-4" />
              </AnchorLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-full px-6 text-base">
              <a href={demoHref} download onClick={handleDemoClick}>
                Pobierz darmowy rozdział
                <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="surface-focus accent-hover-lift relative w-full max-w-sm rounded-[2rem] p-5 text-heading">
            <div className="surface-orb absolute -right-6 top-8 hidden h-24 w-24 rounded-full blur-3xl md:block" />
            <p className="surface-chip">W środku</p>
            <p className="text-body mt-3 text-sm leading-7">
              Jak przejść z trybu instruktora do trybu właściciela, jak widzieć ukryte koszty chaosu i jak nie budować
              szkoły wyłącznie na improwizacji oraz pamięci kilku osób.
            </p>
            <div className="surface-card-inset mt-5 overflow-hidden p-3">
              <Image
                src="/ebook_cover.webp"
                alt="Okładka ebooka Czego nie wiesz o prowadzeniu szkoły tańca"
                width={400}
                height={560}
                className="w-full rounded-[1.1rem] object-cover"
              />
            </div>
            <p className="mt-4 text-center text-xs uppercase tracking-[0.24em] text-primary/75">Pełna wersja po zapisie</p>
          </div>
        </div>
      </div>
    </section>
  );
}

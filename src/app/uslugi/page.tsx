import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { BetaModalTrigger } from "@/components/beta-modal-trigger";

export const metadata: Metadata = {
  title: "Usługi dodatkowe",
  description:
    "Narzędzia i współprace wspierające właścicieli szkół tańca: baileo.pl, payroll dla instruktorów oraz consulting.",
};

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-b from-background to-muted/50 py-12">
      <div className="mx-auto max-w-5xl space-y-12 px-4 md:px-6">
        <SectionHeading
          eyebrow="Usługi dodatkowe"
          title="Wsparcie poza ebookiem"
          description="Obok treści tworzę narzędzia i usługi, które pomagają ogarnąć operacje szkoły tańca. Wybierz to, czego potrzebujesz dziś."
          align="left"
        />

        <section id="baileo" className="scroll-mt-32 space-y-4 rounded-3xl border border-border/70 bg-card p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">System obsługi studia</p>
          <h2 className="text-2xl font-semibold">baileo.pl</h2>
          <p className="text-sm text-muted-foreground">
            Razem z zespołem przygotowuję system do zarządzania grafikiem, zapisami, karnetami i komunikacją z klientami –
            łącznie z zakupami i zapisami online.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Moduł grafiku + widżet na Twoją stronę (już działa w pierwszych szkołach).</li>
            <li>Wkrótce dostępne zapisy online i moduł płatności.</li>
          </ul>
          <Button asChild>
            <Link href={siteConfig.socials.baileo} target="_blank" rel="noreferrer">
              Sprawdź teraz
            </Link>
          </Button>
        </section>

        <section id="payroll" className="scroll-mt-32 space-y-4 rounded-3xl border border-border/70 bg-card p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Narzędzia</p>
          <h2 className="text-2xl font-semibold">Payroll w szkole tańca 2026</h2>
          <p className="text-sm text-muted-foreground">
            Automatyczne liczenie skomplikowanych stawek wynagrodzeń dla instruktorów – jesteśmy w fazie beta, zapisz się, a
            sprawdzimy to na Twoich danych.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Stawki motywacyjne, mnożniki, dodatki ręczne.</li>
            <li>Panel instruktora do podglądu wynagrodzenia i powiadomienia mailowe.</li>
            <li>Eksport raportów do księgowości.</li>
          </ul>
          <BetaModalTrigger buttonLabel="Zapisz się na konsultację i testy" variant="outline" />
        </section>

        <section id="consulting" className="scroll-mt-32 space-y-4 rounded-3xl border border-border/70 bg-card p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Usługi</p>
          <h2 className="text-2xl font-semibold">Consulting i warsztaty</h2>
          <p className="text-sm text-muted-foreground">
            Pracuję z właścicielami szkół nad strategią, procesami i zespołem. Wybierasz model: audyt, warsztat albo mentoring
            1:1. Każdy projekt zaczynamy od bezpłatnej konsultacji o celach – żadnych gotowych recept.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Audyt operacji i rekomendacje priorytetów.</li>
            <li>Warsztaty dla właściciela / zespołu.</li>
            <li>Mentoring dla właściciela lub menedżera szkoły.</li>
          </ul>
          <Button asChild>
            <a href="mailto:kontakt@taniecwbiznesie.pl">Napisz, aby umówić rozmowę</a>
          </Button>
        </section>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Usługi dodatkowe",
  description:
    "Pakiet narzędzi i współprac wspierających właścicieli szkół tańca: baileo.pl, payroll dla instruktorów oraz konsulting.",
};

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-b from-background to-muted/50 py-12">
      <div className="mx-auto max-w-5xl space-y-12 px-4 md:px-6">
        <SectionHeading
          eyebrow="Usługi dodatkowe"
          title="Wsparcie poza ebookiem"
          description="Obok treści tworzę narzędzia i współprace, które pomagają ogarnąć operacje szkoły tańca. Wybierz to, czego potrzebujesz dziś."
          align="left"
        />

        <section id="baileo" className="scroll-mt-32 space-y-4 rounded-3xl border border-border/70 bg-card p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Produkt #1</p>
          <h2 className="text-2xl font-semibold">baileo.pl – system do obsługi szkół tańca</h2>
          <p className="text-sm text-muted-foreground">
            Zapisz kursantów, prowadź listy oczekujących, automatyzuj płatności i integracje z grafikiem. Tworzymy baileo
            specjalnie z myślą o realiach szkół tańca, więc każdy moduł sprawdzam w praktyce z właścicielami.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Panel kursanta, płatności online, cykliczne rozliczenia.</li>
            <li>Zarządzanie grafikiem i listami rezerwowych.</li>
            <li>Integracja z komunikacją (mail/SMS) i raportami frekwencji.</li>
          </ul>
          <Button asChild>
            <Link href={siteConfig.socials.baileo} target="_blank" rel="noreferrer">
              Odwiedź baileo.pl
            </Link>
          </Button>
        </section>

        <section id="payroll" className="scroll-mt-32 space-y-4 rounded-3xl border border-border/70 bg-card p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Produkt #2</p>
          <h2 className="text-2xl font-semibold">Payroll dla szkół tańca (beta 2026)</h2>
          <p className="text-sm text-muted-foreground">
            Przygotowuję moduł wynagrodzeń dla instruktorów – rozlicza stawki motywacyjne, bonusy za frekwencję i
            automatycznie generuje raporty dla księgowości. Integruje się z baileo.pl, aby pobierać realne dane o zajęciach.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Definicja modeli premiowych (frekwencja, retencja, projekty specjalne).</li>
            <li>Eksport raportów i podsumowań do Excela/księgowości.</li>
            <li>Bezpieczne udostępnianie wyników instruktorom.</li>
          </ul>
          <Button asChild variant="outline">
            <Link href="/#zapis">Dołącz do listy beta</Link>
          </Button>
        </section>

        <section id="consulting" className="scroll-mt-32 space-y-4 rounded-3xl border border-border/70 bg-card p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Usługa #3</p>
          <h2 className="text-2xl font-semibold">Consulting i warsztaty</h2>
          <p className="text-sm text-muted-foreground">
            Pracuję z właścicielami szkół nad strategią, procesami i zespołem. Wybierasz model: audyt, warsztat właścicielski
            albo mentoring 1:1. Każdy projekt zaczynamy od rozmowy o danych i celach – żadnych gotowych recept.
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            <li>Audyt operacji i rekomendacje priorytetów.</li>
            <li>Warsztaty dla zarządu / zespołu liderów.</li>
            <li>Mentoring dla właściciela lub menedżera szkoły.</li>
          </ul>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/feedback">Opowiedz o potrzebach</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/consulting">Zobacz szczegóły oferty</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

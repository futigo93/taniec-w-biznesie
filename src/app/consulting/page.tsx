import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { AnchorLink } from "@/components/ui/anchor-link";

export const metadata: Metadata = {
  title: "Consulting i warsztaty",
  description:
    "Indywidualne konsultacje dla szkół tańca. Wkrótce więcej informacji – zapisz się, aby otrzymać ofertę jako pierwsza osoba.",
};

const formats = [
  {
    title: "Audyt szkoły tańca",
    description: "Przegląd procesów operacyjnych, finansowych i komunikacyjnych. Raport działania + priorytety.",
  },
  {
    title: "Warsztat właścicielski",
    description: "1-dniowe spotkanie z zespołem decyzyjnym. Mapujemy cele, konflikty i rozpisujemy OKR-y.",
  },
  {
    title: "Mentoring 1:1",
    description: "Cykl 6 spotkań dla właściciela / menedżera szkoły. Pracujemy na danych i realnych decyzjach.",
  },
];

export default function ConsultingPage() {
  return (
    <div className="bg-muted/40 py-12">
      <div className="mx-auto max-w-5xl space-y-10 px-4 md:px-6">
        <SectionHeading
          eyebrow="Consulting"
          title="Przygotowujemy ofertę warsztatów"
          description="Pierwsze terminy pojawią się po Nowym Roku. Wypełnij formularz zapisu, żeby otrzymać agendę."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {formats.map((format) => (
            <div key={format.title} className="rounded-2xl border border-border/70 bg-card p-5">
              <h3 className="text-lg font-semibold">{format.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{format.description}</p>
            </div>
          ))}
        </div>
        <Button asChild>
          <AnchorLink anchor="zapis">Chcę informacje o warsztatach</AnchorLink>
        </Button>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { AnchorLink } from "@/components/ui/anchor-link";

export const metadata: Metadata = {
  title: "Społeczność Taniec w Biznesie",
  description:
    "Zamknięta grupa instruktorów i właścicieli szkół tańca. Zapisy na listę założycielską są otwarte.",
};

const membership = [
  {
    title: "Sesje strategiczne",
    description: "Spotkania Q&A co cztery tygodnie, transkrypcje i zestawy follow-upów.",
  },
  {
    title: "Biblioteka zasobów",
    description: "Notion z szablonami: onboarding instruktorów, komunikacja do kursantów, proces windykacji.",
  },
  {
    title: "Laboratorium baileo.pl",
    description: "Dostęp beta do nowych modułów systemu oraz możliwość wpływania na roadmapę.",
  },
];

const timeline = [
  { label: "Grudzień 2025", detail: "Zbieranie listy założycielskiej i tematów" },
  { label: "Styczeń 2026", detail: "Pierwsze warsztaty zamknięte (online)" },
  { label: "Marzec 2026", detail: "Start grup mastermindowych" },
  { label: "Q2 2026", detail: "Warsztaty stacjonarne + konsulting 1:1" },
];

export default function CommunityPage() {
  return (
    <div className="bg-gradient-to-b from-background to-muted/60 py-12">
      <div className="mx-auto max-w-5xl space-y-12 px-4 md:px-6">
        <SectionHeading
          eyebrow="Społeczność"
          title="Budujemy środowisko instruktorów, którzy chcą rozmawiać o decyzjach"
          description="Nie ma tu krzyku marketingowego. Jest przestrzeń ekspercka, w której możesz pokazać liczby, dylematy i wspólnie szukać rozwiązań."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {membership.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border/70 bg-card p-5">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-border/70 bg-card p-6">
          <h2 className="text-lg font-semibold">Harmonogram</h2>
          <ol className="mt-4 space-y-4">
            {timeline.map((entry) => (
              <li key={entry.label} className="rounded-2xl border border-dashed border-border/60 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">{entry.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{entry.detail}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="rounded-3xl border border-dashed border-border/80 p-6 text-sm text-muted-foreground">
          <p>
            Liczba miejsc dla założycieli: 30 osób. W tej grupie dopracujemy format i zasady współpracy. Wkład: feedback +
            studium przypadku z Twojej szkoły.
          </p>
          <Button asChild className="mt-4">
            <AnchorLink anchor="zapis">Dołącz do listy</AnchorLink>
          </Button>
        </div>
      </div>
    </div>
  );
}

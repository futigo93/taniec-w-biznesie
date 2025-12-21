import Link from "next/link";
import { BookOpenCheck, Download } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ebookThemes } from "@/content/home";
import { Button } from "@/components/ui/button";

export function EbookSection() {
  return (
    <section
      id="ebook"
      className="scroll-mt-32 space-y-10 rounded-3xl border border-border/70 bg-card/70 p-6 shadow-sm md:p-10"
    >
      <SectionHeading
        eyebrow="Priorytet #1"
        title="Ebook „Taniec w Biznesie” – najpierw rozdział startowy, potem pełne wydanie"
        description="Darmowy rozdział rozsyłam od razu. Całość – tylko w społeczności / klubie, wraz z aktualizacjami i dodatkowymi notatkami właścicielskimi."
      />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6 rounded-2xl border border-border/70 bg-background/70 p-6">
          <div className="flex items-center gap-3 text-primary">
            <BookOpenCheck className="h-5 w-5" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em]">
              Co dokładnie dostajesz?
            </p>
          </div>
          <ul className="space-y-4">
            {ebookThemes.map((theme) => (
              <li key={theme.title} className="space-y-1">
                <div className="flex items-center gap-2 font-semibold">
                  <theme.icon className="h-4 w-4 text-primary" />
                  {theme.title}
                </div>
                <p className="text-sm text-muted-foreground">
                  {theme.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6 rounded-2xl border border-dashed border-border/70 p-6">
          <p className="font-serif text-2xl leading-snug">
            „Widzę, jak decyzja o dodatkowym kursie w czwartki wpływa na grafik, finanse i relacje w zespole.
            Już nie gaszę pożaru, tylko steruję systemem.”
          </p>
          <div className="space-y-3 text-sm text-muted-foreground">
            <p>
              Tak chcę, żebyś mówił_a po lekturze. Rozdział startowy objaśnia zmianę roli. Pełne wydanie (tylko w klubie)
              to mapy decyzji, cykl życia klienta, finanse i moduł o rozmowach z instruktorami.
            </p>
            <p>
              Format: PDF + audio notatki. Każda aktualizacja trafia mailowo i w społeczności – niezależnie od tego, czy
              zostaniesz w wersji free, czy wejdziesz do płatnego programu warsztatowego.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/#zapis">
                <Download className="mr-2 h-4 w-4" />
                Pobierz darmowy rozdział teraz
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/feedback">Podziel się wrażeniami</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

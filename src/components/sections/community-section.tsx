import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { communityPromises } from "@/content/home";
import { Button } from "@/components/ui/button";

export function CommunitySection() {
  return (
    <section
      id="spolecznosc"
      className="scroll-mt-32 space-y-8 rounded-3xl border border-border/70 bg-card p-6 shadow-sm md:p-10"
    >
      <SectionHeading
        eyebrow="Priorytet #3"
        title="Społeczność i klub – darmowy dostęp do pełnego ebooka, a potem warsztaty"
        description="Pierwsza wartość: pełen ebook (PDF). Druga: dodatkowe notatki i rozmowy, których nie ma publicznie. Wersja płatna startuje, gdy zamkniemy listę 30 osób gotowych na warsztaty i mastermindy."
      />
      <ul className="grid gap-4 text-sm text-muted-foreground md:grid-cols-2">
        {communityPromises.map((promise) => (
          <li key={promise} className="rounded-2xl border border-dashed border-border/60 bg-muted/30 p-4">
            {promise}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/#zapis">Dołącz do klubu (free)</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/spolecznosc">Zobacz roadmapę społeczności</Link>
        </Button>
      </div>
    </section>
  );
}

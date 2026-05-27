import { homeValuePoints } from "@/content/home";
import { SectionHeading } from "@/components/section-heading";

export function ValuePropositionSection() {
  return (
    <section className="space-y-8 rounded-[2rem] border border-border/70 bg-white/80 p-6 shadow-[0_24px_80px_rgba(49,34,24,0.08)] md:p-10">
      <SectionHeading
        eyebrow="Dla kogo jest to miejsce"
        title="To miejsce dla właściciela szkoły tańca, który chce prowadzić ją mądrzej, a nie tylko szybciej"
        description="Taniec w Biznesie porządkuje codzienne napięcia wokół oferty, zespołu, komunikacji i rozwoju szkoły. Najmocniej skorzysta z niego osoba, która odpowiada za decyzje i chce widzieć swoją szkołę szerzej niż tylko przez bieżące zajęcia."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {homeValuePoints.map((point) => (
          <article
            key={point.title}
            className="rounded-[1.75rem] border border-border/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(250,243,235,0.88))] p-5 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">Co zyskasz</p>
            <h3 className="mt-4 font-serif text-2xl leading-tight text-foreground">{point.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted-foreground">{point.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

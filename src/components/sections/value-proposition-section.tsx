import { homeValuePoints } from "@/content/home";
import { SectionHeading } from "@/components/section-heading";

export function ValuePropositionSection() {
  return (
    <section className="surface-section space-y-8 rounded-[2rem] p-6 md:p-10">
      <SectionHeading
        eyebrow="Dla kogo jest to miejsce"
        title="To miejsce dla właściciela szkoły tańca, który chce prowadzić ją mądrzej, a nie tylko szybciej"
        description="Taniec w Biznesie porządkuje codzienne napięcia wokół oferty, zespołu, komunikacji i rozwoju szkoły. Najmocniej skorzysta z niego osoba, która odpowiada za decyzje i chce widzieć swoją szkołę szerzej niż tylko przez bieżące zajęcia."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {homeValuePoints.map((point) => (
          <article
            key={point.title}
            className="surface-card accent-hover-lift p-5 shadow-sm"
          >
            <p className="eyebrow-accent tracking-[0.2em]">Co zyskasz</p>
            <h3 className="heading-display-soft text-heading mt-4 text-2xl leading-tight">{point.title}</h3>
            <p className="text-body mt-3 text-sm leading-7">{point.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

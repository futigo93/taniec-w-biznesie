import { homeValuePoints } from "@/content/home";
import { SectionHeading } from "@/components/section-heading";

export function ValuePropositionSection() {
  return (
    <section className="surface-section space-y-6 rounded-[2rem] p-5 md:space-y-8 md:p-10">
      <SectionHeading
        eyebrow="Co zyskasz"
        title="Na wejściu dostajesz trzy rzeczy, które od razu porządkują myślenie o szkole"
        description="To nie jest kolejny newsletter o wszystkim. Chodzi o decyzje, komunikację i codzienną pracę właściciela szkoły."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {homeValuePoints.map((point) => (
          <article
            key={point.title}
            className="surface-card accent-hover-lift p-4 md:p-5 shadow-sm"
          >
            <p className="eyebrow-accent tracking-[0.2em]">Co zyskasz</p>
            <h3 className="heading-display-soft text-heading mt-3 text-[1.85rem] leading-tight md:mt-4 md:text-2xl">{point.title}</h3>
            <p className="text-body mt-3 text-sm leading-6 md:leading-7">{point.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

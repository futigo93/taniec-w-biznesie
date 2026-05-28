import { NewsletterForm } from "@/components/forms/newsletter-form";
import { SectionHeading } from "@/components/section-heading";
import { JourneyMarker } from "@/components/journey-marker";

export function CallToActionSection() {
  return (
    <section
      id="zapis"
      className="surface-signal relative scroll-mt-32 rounded-[2.5rem] p-5 text-heading md:p-10"
    >
      <JourneyMarker label="Dołącz do listy" />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <SectionHeading
          title="Zostaw mail i odbierz pełną wersję ebooka oraz kilka sensownych wiadomości dla właściciela szkoły tańca"
          description="To spokojny kanał wiedzy o decyzjach, procesach i rozwoju szkoły. Kilka wiadomości w miesiącu, bez spamu i bez sztucznego lejka."
          titleClassName="heading-display text-[2.35rem] leading-tight md:text-5xl"
          descriptionClassName="text-body"
          className="[&_p]:leading-7 md:[&_p]:leading-8 [&_p]:text-body"
        />
        <div className="surface-card-inset rounded-[2rem] p-1 shadow-sm backdrop-blur-sm">
          <NewsletterForm />
        </div>
      </div>
      <p className="mt-4 text-[0.68rem] uppercase tracking-[0.22em] text-white/72 md:mt-5 md:text-xs md:tracking-[0.24em]">
        Po zapisie dostaniesz pełną wersję ebooka. Jeśli wolisz, wcześniej możesz pobrać też darmowy rozdział.
      </p>
    </section>
  );
}

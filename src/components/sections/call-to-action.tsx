import { NewsletterForm } from "@/components/forms/newsletter-form";
import { SectionHeading } from "@/components/section-heading";

export function CallToActionSection() {
  return (
    <section
      id="zapis"
      className="surface-feature scroll-mt-32 rounded-[2.5rem] p-6 text-heading md:p-10"
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <SectionHeading
          eyebrow="Dołącz do listy"
          title="Zostaw mail i odbierz pełną wersję ebooka oraz kilka sensownych wiadomości dla właściciela szkoły tańca"
          description="To nie jest społeczność dla samej społeczności. To spokojny kanał wiedzy o decyzjach, procesach, komunikacji i rozwoju szkoły. Kilka wiadomości w miesiącu, bez spamu i bez sztucznego lejka."
          descriptionClassName="text-body"
          className="[&_h2]:font-serif [&_h2]:text-4xl [&_h2]:leading-tight [&_h2]:text-heading [&_h2]:md:text-5xl [&_p]:leading-8 [&_p]:text-body"
        />
        <div className="surface-card-inset rounded-[2rem] p-1 shadow-sm backdrop-blur-sm">
          <NewsletterForm />
        </div>
      </div>
      <p className="mt-5 text-xs uppercase tracking-[0.24em] text-primary/75">
        Po zapisie dostaniesz pełną wersję ebooka. Jeśli wolisz, wcześniej możesz pobrać też darmowy rozdział.
      </p>
    </section>
  );
}

import { NewsletterForm } from "@/components/forms/newsletter-form";
import { SectionHeading } from "@/components/section-heading";

export function CallToActionSection() {
  return (
    <section
      id="zapis"
      className="scroll-mt-32 space-y-6 rounded-3xl border border-border/70 bg-[radial-gradient(circle_at_top,_#462f1f,_#2b1e16,_#130d0a)] p-6 text-white shadow-lg md:p-10"
    >
      <SectionHeading
        eyebrow="Społeczność + Ebook"
        title="Dołącz do nas, w pierwszej kolejności dostaniesz pełną wersję Ebooka"
        description="Dołączenie nic nie kosztuje. Po zapisaniu się dostaniesz na maila pełną wersję ebooka, a następnie limitowane treści, informacje o wydarzeniach, promocjach i zaproszenia do ekskluzywnych grup warsztatowych. Społeczność jest jeszcze w trakcie tworzenia – dzięki Twojemu zaangażowaniu pójdzie nam szybciej."
      />
      <NewsletterForm />
      <p className="text-xs text-muted-foreground/90">
        Wysyłam kilka wiadomości w miesiącu. Zero spamu, zero automatycznych lejków. Możesz zrezygnować w każdej chwili –
        link rezygnacji znajduje się w każdej wiadomości.
      </p>
    </section>
  );
}

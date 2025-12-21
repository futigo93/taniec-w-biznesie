import { NewsletterForm } from "@/components/forms/newsletter-form";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";

export function CallToActionSection() {
  return (
    <section
      id="zapis"
      className="scroll-mt-32 space-y-6 rounded-3xl border border-border/70 bg-gradient-to-b from-background via-white to-amber-50 p-6 shadow-sm md:p-10"
    >
      <SectionHeading
        eyebrow="Newsletter + ebook"
        title="Najpierw darmowy rozdział, potem pełen ebook i aktualizacje klubowe"
        description={`Po wpisaniu e-maila dostajesz rozdział otwierający ebooka. Następnie zaproszę Cię do klubu (free) z pełnym wydaniem i dodatkowymi notatkami. Wszystkie wiadomości wysyłam osobiście (${siteConfig.author}).`}
      />
      <NewsletterForm />
      <p className="text-xs text-muted-foreground">
        Wysyłam 1–2 wiadomości w miesiącu. Zero spamu, zero automatycznych lejków. Link rezygnacji jest w każdej wiadomości.
      </p>
    </section>
  );
}

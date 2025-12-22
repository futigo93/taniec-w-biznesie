import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Lista podmiotów przetwarzających",
  description:
    "Podmioty wspierające przetwarzanie danych w serwisie taniecwbiznesie.pl – lista aktualizowana na bieżąco.",
};

const processors = [
  {
    name: "MailerLite",
    description: "Obsługa newslettera i komunikacji mailowej.",
    url: "https://www.mailerlite.com/pl/legal/privacy-policy",
  },
  {
    name: "Google",
    description: "Infrastruktura analityczna i usługi (np. Google Workspace).",
    url: "https://policies.google.com/privacy?hl=pl",
  },
  {
    name: "Meta",
    description: "Kanały społecznościowe i narzędzia marketingowe (np. Meta Pixel).",
    url: "https://www.facebook.com/privacy/policy/?locale=pl_PL",
  },
  {
    name: "Vercel",
    description: "Hosting i infrastruktura serwisu taniecwbiznesie.pl.",
    url: "https://vercel.com/legal/privacy-policy",
  },
];

export default function ProcessorsPage() {
  return (
    <div className="bg-background py-12">
      <div className="mx-auto max-w-4xl space-y-8 px-4 md:px-0">
        <SectionHeading
          eyebrow="Dokument"
          title="Lista podmiotów przetwarzających"
          description="Poniżej znajdziesz aktualną listę podmiotów, którym powierzono przetwarzanie danych w ramach serwisu. Lista będzie uaktualniana w miarę zmian w stacku technologicznym."
        />
        <div className="space-y-4 rounded-3xl border border-border/70 bg-card p-6 shadow-sm">
          {processors.map((processor) => (
            <div key={processor.name}>
              <h2 className="text-lg font-semibold">{processor.name}</h2>
              <p className="text-sm text-muted-foreground">{processor.description}</p>
              <a href={processor.url} target="_blank" rel="noreferrer" className="text-sm text-primary underline">
                Polityka prywatności
              </a>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Jeśli w przyszłości dołączą kolejne narzędzia (np. systemy analityczne lub marketingowe), lista zostanie
          rozszerzona. Obecnie dodatkowym procesorem – poza wymienionymi wyżej – jest Vercel jako dostawca hostingu.
        </p>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { Clock, User } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const SURVEY_1_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeju8WiuyPz2a3NKaH7K1d2S2kiCMQVqKa_rtnk82vFUhyQYQ/viewform?usp=header";

export const metadata: Metadata = {
  title: "Ankiety",
  description:
    "Badania rynku tanecznego",
};

export default function SurveysPage() {
  return (
    <div className="bg-background py-12">
      <div className="mx-auto max-w-4xl space-y-10 px-4 md:px-6">
        <SectionHeading
          eyebrow="Ankiety"
          title="Badania rynku tanecznego"
          className="[&_h2]:sr-only"
        />

        <div className="grid gap-8 rounded-3xl border border-border/70 bg-card p-6 shadow-sm md:grid-cols-[1.1fr,1fr] md:items-center">

          <div className="space-y-5">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
                Jak korzystamy ze stron szkół tańca?
              </h2>
              <p className="text-sm text-muted-foreground">
                Badanie dotyczy doświadczeń związanych ze stronami internetowymi
                szkół tańca - tego, jakich informacji szukamy, czy łatwo je
                znajdujemy i jak wpływa to na decyzję o zapisie.
              </p>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-primary" />
                <span>
                  Dla osób tańczących, które korzystały ze strony szkoły tańca w
                  ciągu ostatnich 12 miesięcy.
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Czas wypełnienia: około 5 minut.</span>
              </div>
            </div>
            <Button asChild size="lg">
              <a href={SURVEY_1_URL} target="_blank" rel="noreferrer">
                Otwórz ankietę w Google Forms
              </a>
            </Button>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          To wszystkie ankiety na ten moment. Wróć za jakiś czas.
        </p>
      </div>
    </div>
  );
}

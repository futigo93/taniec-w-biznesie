import type { Metadata } from "next";
import { FeedbackForm } from "@/components/forms/feedback-form";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Feedback do ebooka",
  description:
    "Podziel się refleksją po lekturze „Taniec w biznesie”. Twoje słowa pomogą ulepszyć kolejne wydania.",
};

const prompts = [
  "Który fragment otworzył Ci oczy na relacje w szkole?",
  "Jakie decyzje ułatwiły Ci się po lekturze?",
  "Czy mogę zacytować Cię publicznie (np. na stronie lub social media)?",
];

export default function FeedbackPage() {
  return (
    <div className="bg-background py-12">
      <div className="mx-auto max-w-4xl space-y-10 px-4 md:px-6">
        <SectionHeading
          eyebrow="Feedback"
          title="Twoje zdanie trafia do kolejnych wydań ebooka"
          description="Dziękuję, że poświęcasz czas na odpowiedź. Każdą wiadomość czytam osobiście i odpisuję w ciągu kilku dni."
        />
        <div className="rounded-3xl border border-border/70 bg-muted/40 p-6">
          <h2 className="text-lg font-semibold">Propozycje pytań</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {prompts.map((prompt) => (
              <li key={prompt}>{prompt}</li>
            ))}
          </ul>
        </div>
        <FeedbackForm className="rounded-3xl border border-border/70 bg-card p-6" />
        <p className="text-sm text-muted-foreground">
          Wolisz pogadać na żywo? Zarezerwuj 30 minut konsultacji online albo napisz na{" "}
          <a className="underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          .
        </p>
        <Button asChild variant="outline">
          <Link href="/consulting">Umów rozmowę</Link>
        </Button>
      </div>
    </div>
  );
}

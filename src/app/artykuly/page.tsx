import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { articlePreviews } from "@/content/home";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Artykuły i teksty",
  description:
    "Eseje, case studies i rozmowy o prowadzeniu szkół tańca. Zobacz, nad czym pracuję i zgłoś własny temat.",
};

const plannedSeries = [
  "Ścieżka klienta od pierwszego kontaktu po absolwentów",
  "Operacje szkoły: grafik, zastępstwa, komunikacja kryzysowa",
  "Finanse i decyzje inwestycyjne",
  "Case studies baileo.pl oraz zaprzyjaźnionych szkół",
];

export default function ArticlesPage() {
  return (
    <div className="bg-background py-12">
      <div className="mx-auto max-w-5xl space-y-12 px-4 md:px-6">
        <SectionHeading
          eyebrow="Artykuły"
          title="Teksty dla właścicieli szkół tańca"
          description="Aktualnie redaguję pierwszą serię artykułów. Możesz sprawdzić plan i zapisać się, aby dostać je jako pierwsza osoba."
        />
        <div className="rounded-3xl border border-border/70 bg-muted/30 p-6">
          <h2 className="text-xl font-semibold">Planowane serie</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {plannedSeries.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {articlePreviews.map((article) => (
            <article
              key={article.slug}
              id={article.slug}
              className="rounded-2xl border border-border/70 bg-card p-5"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-primary">
                {article.category}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{article.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{article.description}</p>
              <p className="mt-4 text-xs text-muted-foreground">
                Status: w redakcji • {article.readTime}
              </p>
            </article>
          ))}
        </div>
        <div className="rounded-3xl border border-dashed border-border/80 p-6 text-sm text-muted-foreground">
          <p>
            Masz temat, który pali Cię w szkole? Wyślij go na{" "}
            <a className="underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>{" "}
            albo w formularzu feedbacku. Najciekawsze propozycje wejdą do publikacji + warsztatu online.
          </p>
          <Button asChild className="mt-4">
            <Link href="/feedback">Zaproponuj temat</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

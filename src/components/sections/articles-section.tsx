import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { articlePreviews } from "@/content/home";

export function ArticlesSection() {
  return (
    <section className="space-y-10 rounded-3xl border border-border/70 bg-background p-6 shadow-sm md:p-10">
      <SectionHeading
        eyebrow="Priorytet #2"
        title="Artykuły eksperckie – rozwinięcia ebooka"
        description="Każdy tekst wychodzi z notatek do ebooka. To w nich pogłębiam case studies i zapraszam ekspertów od prawa, finansów czy systemów."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {articlePreviews.map((article) => (
          <article
            key={article.slug}
            className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-5"
          >
            <Badge variant="outline" className="w-fit">
              {article.category}
            </Badge>
            <h3 className="mt-4 text-lg font-semibold">{article.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">
              {article.description}
            </p>
            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
              <span>{article.readTime} czytania</span>
              <Link href={`/artykuly#${article.slug}`} className="font-medium text-primary">
                Status: w przygotowaniu
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="rounded-2xl border border-dashed border-border/80 p-4 text-sm text-muted-foreground">
        Masz temat, który powinien się tu znaleźć? Zgłoś go przez formularz feedbacku
        albo napisz maila – artykuły są drugim filarem całego projektu.
      </div>
    </section>
  );
}

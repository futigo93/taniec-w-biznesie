import Link from "next/link";
import { ArrowUpRight, Workflow } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { productSpotlight } from "@/content/home";

export function ProductsSection() {
  return (
    <section className="space-y-8 rounded-3xl border border-border/70 bg-muted/30 p-6 shadow-sm md:p-10">
      <SectionHeading
        eyebrow="Produkty i narzędzia"
        title="Wsparcie systemowe – od zapisów po wynagrodzenia instruktorów"
        description="Poza ebookiem pracuję nad narzędziami, których sam potrzebowałem, prowadząc szkoły tańca. Możesz dołączyć do testów jako pierwsza osoba."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {productSpotlight.map((product) => (
          <article
            key={product.title}
            className="flex h-full flex-col gap-3 rounded-2xl border border-border/70 bg-background p-5"
          >
            <div className="flex items-center justify-between text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              <span>{product.label}</span>
              {product.isNew && <Badge variant="secondary">Nowość</Badge>}
            </div>
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <p className="flex-1 text-sm text-muted-foreground">{product.description}</p>
            <div className="space-y-1 text-sm text-muted-foreground">
              {product.highlights.map((point) => (
                <p key={point}>• {point}</p>
              ))}
            </div>
            <Link
              href={product.url ?? siteConfig.socials.baileo}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
              target={product.external ? "_blank" : undefined}
              rel={product.external ? "noreferrer" : undefined}
            >
              {product.cta}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
      <div className="flex items-center gap-3 rounded-2xl border border-dashed border-border/60 bg-background/70 p-4 text-sm text-muted-foreground">
        <Workflow className="h-4 w-4 text-primary" />
        Kolejny produkt w przygotowaniu: zestaw payroll + motywacyjne stawki instruktorów, który integruje się z baileo.pl i uprości rozliczenia zespołu.
      </div>
    </section>
  );
}

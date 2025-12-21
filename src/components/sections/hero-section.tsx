import Link from "next/link";
import { ArrowDown, BookOpenCheck, SignalHigh } from "lucide-react";
import { NewsletterForm } from "@/components/forms/newsletter-form";
import { heroHighlights } from "@/content/home";

export function HeroSection() {
  return (
    <section
      id="start"
      className="relative isolate overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-amber-50 via-white to-white px-4 py-12 shadow-sm sm:px-8 md:py-16"
    >
      <div className="mx-auto max-w-4xl space-y-8">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-primary/70">
          1. Ebook · 2. Artykuły · 3. Społeczność + narzędzia
        </p>
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-balance md:text-5xl">
            Zacznij od darmowego rozdziału. Cały ebook i aktualizacje dostaniesz w klubie
            Taniec w Biznesie.
          </h1>
          <p className="text-lg text-muted-foreground">
            Nazywam się Jakub Nowak. Łączę lata sali tanecznej z zarządzaniem szkołami i
            rozwijaniem baileo.pl. Najpierw daję Ci lekturę, potem pogłębiam ją w artykułach
            i zamkniętej społeczności.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="#ebook"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm font-medium"
          >
            <BookOpenCheck className="h-4 w-4 text-primary" />
            Pobierz rozdział
          </Link>
          <Link
            href="/artykuly"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm font-medium"
          >
            <SignalHigh className="h-4 w-4 text-primary" />
            Zobacz artykuły
          </Link>
        </div>
        <NewsletterForm className="border-none bg-white shadow-lg" />
        <div className="grid gap-6 border-t border-border/60 pt-6 sm:grid-cols-3">
          {heroHighlights.map((item) => (
            <div key={item.title} className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <item.icon className="h-4 w-4" />
                {item.title}
              </div>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <ArrowDown className="h-4 w-4" />
          Przewijając niżej zobaczysz szczegóły ebooka → artykułów → społeczności.
        </div>
      </div>
    </section>
  );
}

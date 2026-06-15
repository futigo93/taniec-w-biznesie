import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { ConsultingModalTrigger } from "@/components/consulting-modal-trigger";

export const metadata: Metadata = {
  title: "Twoja strona internetowa",
  description:
    "Tworzenie stron internetowych dla szkół tańca, instruktorów, influencerów i marek z branży tanecznej. Czytelna ścieżka użytkownika, widoczność w internecie i strony, które prowadzą do działania.",
  alternates: {
    canonical: "/twoja-strona",
  },
  openGraph: {
    title: "Twoja strona internetowa",
    description:
      "Strony dla szkół tańca, instruktorów i marek tanecznych: czytelne, widoczne w internecie i zaprojektowane tak, żeby prowadzić do działania.",
    type: "website",
    url: "https://taniecwbiznesie.pl/twoja-strona",
    images: [
      {
        url: "/realizacje/baileo-realizacja.webp",
        width: 1254,
        height: 1254,
        alt: "Realizacja strony internetowej dla Baileo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Twoja strona internetowa",
    description:
      "Strony dla szkół tańca, instruktorów i marek tanecznych: czytelne, widoczne w internecie i zaprojektowane tak, żeby prowadzić do działania.",
    images: ["/realizacje/baileo-realizacja.webp"],
  },
};

const audiences = [
  {
    title: "Szkoły tańca",
    description:
      "Pomagam ułożyć ofertę, cennik i ścieżkę użytkownika od wejścia na stronę do zapisu. Rozumiem, że szkoła żyje wyjątkami, sezonowością i wieloma grupami docelowymi naraz.",
  },
  {
    title: "Instruktorzy i influencerzy",
    description:
      "Twoje nazwisko i taniec mogą budować osobną, rozpoznawalną markę. Własna strona daje przestrzeń, której nie zastąpi profil szkoły ani sam Instagram.",
  },
  {
    title: "Firmy i marki z branży",
    description:
      "Strona ma pasować do energii marki, ale też prowadzić użytkownika do działania, dobrze tłumaczyć ofertę i być sensownie widoczna w internecie.",
  },
];

const websiteHighlights = [
  "Strona ma odpowiadać Twojemu charakterowi i stylowi działania, ale też realnie pomagać użytkownikowi podjąć kolejny krok.",
  "Projektuję strony czytelne, prowadzące do oczekiwanych działań, widoczne w internecie i łatwo wyszukiwalne.",
  "Pomagam uporządkować nie tylko sam layout, ale też prezentację oferty, cennika, podstron i głównych CTA.",
];

const processSteps = [
  "Rozmawiamy o tym, dla kogo jest strona i co ma dziś najlepiej robić.",
  "Układam architekturę treści, ścieżkę użytkownika i sposób pokazania oferty.",
  "Projektuję i wdrażam stronę z myśleniem o czytelności, formularzach i widoczności.",
];

const projects = [
  {
    title: "Baileo.pl",
    href: "https://baileo.pl",
    imageSrc: "/realizacje/baileo-realizacja.webp",
    imageAlt: "Podgląd realizacji strony Baileo",
    description:
      "Profesjonalna strona firmowa z wieloma podstronami, formularzami kontaktowymi i osadzonymi widżetami.",
  },
  {
    title: "Taniec w Biznesie",
    href: "https://taniecwbiznesie.pl",
    imageSrc: "/realizacje/taniec-w-biznesie-realizacja.webp",
    imageAlt: "Podgląd realizacji strony Taniec w Biznesie",
    description:
      "Strona ekspercka i marka osobista z czytelną ścieżką prowadzącą użytkownika na stronie głównej, artykułami blogowymi i wieloma podstronami.",
  },
];

export default function YourWebsitePage() {
  return (
    <div className="page-wash py-8 md:py-12">
      <div className="mx-auto max-w-6xl space-y-8 px-4 md:space-y-10 md:px-6">
        <section className="surface-focus grid gap-6 p-5 md:p-8 lg:grid-cols-[minmax(0,1.1fr)_360px] lg:items-center">
          <div className="space-y-5">
            <p className="eyebrow-accent">Twoja strona internetowa</p>
            <h1 className="heading-display text-heading text-[1.9rem] leading-tight md:text-5xl">
              Strona dla szkoły, instruktora albo marki tanecznej, która ma nie tylko dobrze wyglądać, ale prowadzić do
              działania
            </h1>
            <p className="text-body max-w-3xl text-[1rem] leading-7 md:text-lg md:leading-8">
              Tworzę strony dla osób, szkół i firm z branży tanecznej. Oferuję strony odpowiadające Twojej energii i
              charakterowi działań, ale też czytelne, prowadzące użytkownika do oczekiwanych kroków, widoczne w internecie
              i łatwo wyszukiwalne.
            </p>
            <div className="flex flex-wrap gap-3">
              <ConsultingModalTrigger
                buttonLabel="Napisz w sprawie strony"
                inquiryType="websites"
                modalTitle="Napisz w sprawie strony internetowej"
                modalDescription="Zostaw podstawowe informacje o sobie, swojej szkole albo marce. Odezwę się i wrócę z propozycją dalszego kroku."
                messagePlaceholder="Napisz, dla kogo ma powstać strona, co ma dziś najlepiej robić i na jakim etapie jesteś."
                submitLabel="Wyślij wiadomość"
                successMessage="Dziękuję! Odezwę się w sprawie strony."
              />
              <Button asChild variant="ghost" className="rounded-full">
                <Link href="#realizacje">Zobacz realizacje</Link>
              </Button>
            </div>
          </div>
          <div className="surface-card-inset relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[1.8rem] p-4">
            <Image
              src="/realizacje/baileo-realizacja.webp"
              alt="Przykładowa realizacja strony internetowej"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 360px"
              priority
            />
          </div>
        </section>

        <section className="surface-section p-5 md:p-10">
          <SectionHeading
            eyebrow="Dla kogo"
            title="Projektuję strony pod realne potrzeby branży tanecznej"
            description="Każda z tych ścieżek potrzebuje trochę innej prezentacji oferty, innego rytmu treści i innej logiki decyzji użytkownika."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {audiences.map((audience) => (
              <div key={audience.title} className="surface-card-soft p-4 md:p-5">
                <h2 className="text-heading text-lg font-semibold">{audience.title}</h2>
                <p className="text-body mt-2 text-sm leading-6 md:text-[0.95rem] md:leading-7">{audience.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="surface-section p-5 md:p-10">
          <SectionHeading
            eyebrow="Co ma działać"
            title="Strona ma pasować do Ciebie i jednocześnie ułatwiać decyzję użytkownika"
            description="Nie chodzi tylko o estetykę. Dobra strona porządkuje ofertę, usuwa zbędne tarcie i pomaga człowiekowi dojść do kontaktu, zapisu albo kolejnego kroku."
          />
          <ul className="text-body-strong mt-6 space-y-3 text-sm leading-6 md:text-base md:leading-7">
            {websiteHighlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="realizacje" className="surface-section p-5 md:p-10">
          <SectionHeading
            eyebrow="Realizacje"
            title="Przykłady stron, które już pracują"
            description="Każda z nich ma trochę inną rolę, ale wspólny mianownik jest ten sam: czytelna treść, dobra ścieżka użytkownika i sensowna architektura."
          />
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="surface-card p-4 md:p-5">
                <div className="surface-card-inset relative aspect-square overflow-hidden rounded-[1.5rem] p-4">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-heading text-xl font-semibold">{project.title}</h2>
                    <Button asChild variant="ghost" className="rounded-full">
                      <Link href={project.href} target="_blank" rel="noreferrer">
                        Zobacz
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <p className="text-body text-sm leading-6 md:text-[0.97rem] md:leading-7">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="surface-section p-5 md:p-10">
          <SectionHeading
            eyebrow="Jak pracuję"
            title="Najpierw porządek i sens, potem wdrożenie"
            description="Dobra strona w tej branży nie zaczyna się od szablonu. Najpierw trzeba nazwać problem, ułożyć prezentację oferty i ścieżkę użytkownika."
          />
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <li key={step} className="surface-card-soft p-4 md:p-5">
                <p className="eyebrow-accent">{index + 1}</p>
                <p className="text-body mt-2 text-sm leading-6 md:text-[0.95rem] md:leading-7">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="surface-signal p-5 md:p-10">
          <div className="max-w-3xl space-y-5">
            <p className="eyebrow-accent">Kontakt</p>
            <h2 className="heading-display text-[1.7rem] leading-tight text-white md:text-5xl">
              Jeśli chcesz sprawdzić, czy taka strona ma sens dla Twojej szkoły albo marki, napisz
            </h2>
            <p className="text-sm leading-7 text-white/82 md:text-base md:leading-8">
              Wystarczy kilka zdań o tym, dla kogo ma powstać strona, co ma dziś najlepiej robić i czy jesteś na etapie
              nowej strony, czy przebudowy obecnej.
            </p>
            <ConsultingModalTrigger
              buttonLabel="Napisz w sprawie strony"
              inquiryType="websites"
              modalTitle="Napisz w sprawie strony internetowej"
              modalDescription="Zostaw podstawowe informacje o sobie, swojej szkole albo marce. Odezwę się i wrócę z propozycją dalszego kroku."
              messagePlaceholder="Napisz, dla kogo ma powstać strona, co ma dziś najlepiej robić i na jakim etapie jesteś."
              submitLabel="Wyślij wiadomość"
              successMessage="Dziękuję! Odezwę się w sprawie strony."
            />
          </div>
        </section>
      </div>
    </div>
  );
}

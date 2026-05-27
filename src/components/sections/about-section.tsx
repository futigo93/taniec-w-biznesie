import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section className="surface-section grid gap-8 p-6 md:p-10 lg:grid-cols-[minmax(0,1.1fr)_320px] lg:items-center">
      <div className="space-y-5">
        <SectionHeading
          eyebrow="O autorze"
          title="Łączę doświadczenie z parkietu, prowadzenia szkoły i budowania systemów, które porządkują pracę od środka"
          description="Nie piszę o szkołach tańca z dystansu. Patrzę na nie jednocześnie z perspektywy instruktora, byłego właściciela i managera oraz osoby, która zawodowo pracuje na procesach, danych i logice decyzji."
        />
        <p className="text-body text-sm leading-8 md:text-base">
          Dzięki temu Taniec w Biznesie nie jest tylko zbiorem inspiracji. To miejsce, w którym można nazwać rzeczy, które
          w szkołach często dzieją się po cichu: rozjazd między rolą instruktora i właściciela, chaos komunikacyjny, brak
          języka do decyzji czy zbyt duże poleganie na pamięci i improwizacji.
        </p>
        <p className="text-body text-sm leading-8 md:text-base">
          Obok treści rozwijam też kierunki wdrożeniowe, które pomagają porządkować wejście nowych osób, zapisy, dane i
          operacje szkoły. Chcę, żeby to miejsce było dla właściciela realnym zapleczem do myślenia, porządkowania i
          podejmowania lepszych decyzji.
        </p>
        <Link href="mailto:kontakt@taniecwbiznesie.pl" className="cta-link">
          kontakt@taniecwbiznesie.pl
        </Link>
      </div>
      <div className="flex justify-center lg:justify-end">
        <div className="surface-card accent-hover-lift relative h-80 w-full max-w-[320px] overflow-hidden rounded-[2rem] shadow-xl">
          <Image
            src="/jakub_nowak.webp"
            alt="Jakub Nowak"
            fill
            className="object-cover"
            sizes="320px"
          />
        </div>
      </div>
    </section>
  );
}

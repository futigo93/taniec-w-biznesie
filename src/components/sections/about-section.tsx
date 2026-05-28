import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { JourneyMarker } from "@/components/journey-marker";

export function AboutSection() {
  return (
    <section className="relative grid gap-5 px-1 py-2 md:gap-6 md:px-2 md:py-4 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-center">
      <JourneyMarker label="O autorze" />
      <div className="space-y-4">
        <SectionHeading
          title="Perspektywa z parkietu, prowadzenia szkoły i pracy nad procesami"
          description="Nie piszę o szkołach tańca z dystansu. Patrzę na nie z perspektywy instruktora, byłego właściciela i osoby pracującej zawodowo na procesach, danych i decyzjach."
        />
        <p className="text-body text-sm leading-7 md:text-base md:leading-8">
          Dzięki temu można tu nazwać rzeczy, które w szkołach dzieją się po cichu: rozjazd między rolą instruktora i
          właściciela, chaos komunikacyjny i zbyt duże poleganie na pamięci oraz improwizacji.
        </p>
        <Link href="mailto:kontakt@taniecwbiznesie.pl" className="cta-link">
          kontakt@taniecwbiznesie.pl
        </Link>
      </div>
      <div className="flex justify-center lg:justify-end">
        <div className="surface-card-soft relative h-72 w-full max-w-[280px] overflow-hidden rounded-[1.8rem] shadow-sm">
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

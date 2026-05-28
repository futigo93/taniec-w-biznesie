import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "O mnie",
  description:
    "Jakub Nowak o prowadzeniu szkół tańca, decyzjach właścicielskich i porządkowaniu tego, co zwykle dzieje się po cichu.",
};

export default function AboutPage() {
  return (
    <div className="page-wash py-8 md:py-12">
      <div className="mx-auto grid max-w-5xl gap-6 px-4 md:gap-8 md:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="space-y-5 text-heading">
          <SectionHeading
            eyebrow="O autorze"
            title="Patrzę na szkołę tańca jednocześnie z perspektywy sali, właściciela i człowieka od procesów"
            description="Łączę doświadczenie instruktora, właściciela szkoły i analityka, który porządkuje pracę od środka."
            descriptionClassName="text-body"
          />
          <p className="text-body text-sm leading-8 md:text-base">
            Dzięki temu widzę szkołę wtedy, gdy z jednej strony żyje energią sali, a z drugiej coraz mocniej zaczyna
            zależeć od decyzji, komunikacji i tego, jak radzi sobie z wyjątkami. Właśnie o tym jest Taniec w Biznesie.
          </p>
          <p className="text-body text-sm leading-8 md:text-base">
            Nie interesuje mnie prowadzenie szkoły opowiadane wyłącznie przez motywację albo katalog narzędzi. Bardziej
            interesuje mnie to, gdzie szkoła się rozjeżdża, co naprawdę kosztuje właściciela i jak zacząć to porządkować
            bez dokładania kolejnej warstwy chaosu.
          </p>
          <p className="text-body text-sm leading-8 md:text-base">
            Z tego miejsca wyrastają ebook, artykuły, case studies i dalsze kierunki wsparcia. Jeśli chcesz porozmawiać
            o swojej szkole albo podzielić się tym, co dziś najbardziej waży, napisz.
          </p>
          <Link href="mailto:kontakt@taniecwbiznesie.pl" className="cta-link">
            kontakt@taniecwbiznesie.pl
          </Link>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="surface-card relative h-96 w-full max-w-[320px] overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/jakub_nowak.webp"
              alt="Jakub Nowak"
              fill
              className="object-cover"
              sizes="320px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

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
    <div className="bg-[linear-gradient(180deg,#faf5ee_0%,#f7efe6_35%,#fbf8f4_100%)] py-12">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 md:px-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
        <div className="space-y-6 text-[#2b1f18]">
          <SectionHeading
            eyebrow="O autorze"
            title="Patrzę na szkołę tańca jednocześnie z perspektywy sali, właściciela i człowieka od procesów"
            description="Przez lata działałem w tańcu jako instruktor, prowadziłem własną szkołę i pracowałem managersko w dużej organizacji. Równolegle zawodowo zajmuję się analizą biznesową i budowaniem rozwiązań, które porządkują pracę od środka."
            descriptionClassName="text-[#5f4c42]"
          />
          <p className="text-sm leading-8 text-[#5f4c42] md:text-base">
            Dzięki temu wiem, jak wygląda szkoła wtedy, gdy z jednej strony żyje energią sali, a z drugiej coraz mocniej
            zaczyna zależeć od decyzji, komunikacji, rytmu pracy i tego, jak radzi sobie z wyjątkami. Właśnie o tym jest
            Taniec w Biznesie.
          </p>
          <p className="text-sm leading-8 text-[#5f4c42] md:text-base">
            Nie interesuje mnie opowiadanie o prowadzeniu szkoły wyłącznie przez pryzmat motywacji albo przez katalog
            narzędzi. Bardziej interesuje mnie to, co dzieje się po cichu: gdzie szkoła się rozjeżdża, co najbardziej kosztuje
            właściciela i jak zacząć to porządkować bez dokładania kolejnej warstwy chaosu.
          </p>
          <p className="text-sm leading-8 text-[#5f4c42] md:text-base">
            Z tego miejsca wyrastają ebook, artykuły, case studies i dalsze kierunki wsparcia. Jeśli chcesz porozmawiać o
            swojej szkole albo po prostu podzielić się tym, co u Ciebie dziś najbardziej waży, napisz.
          </p>
          <Link href="mailto:kontakt@taniecwbiznesie.pl" className="cta-link">
            kontakt@taniecwbiznesie.pl
          </Link>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative h-96 w-full max-w-[320px] overflow-hidden rounded-[2rem] border border-[#dcc6b3] bg-white shadow-xl">
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

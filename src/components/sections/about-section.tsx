import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section className="rounded-3xl border border-border/60 bg-[#f3eadf] p-6 text-[#2b1a12] shadow-sm md:flex md:items-center md:gap-10 md:p-10">
      <div className="space-y-4 md:flex-1">
        <SectionHeading
          eyebrow="O mnie"
          title="Łączę doświadczenie instruktora i menedżera z analityką biznesową"
          description="Od lat działam w świecie tańca – jako instruktor, właściciel szkoły i manager – a równolegle zawodowo zajmuję się analizą biznesową i budowaniem systemów. Prowadzę startup (system do zarządzania szkołą tańca), dzięki czemu na ten rynek patrzę zarówno z perspektywy sali, jak i danych, procesów i decyzji właścicielskich."
        />
        <p className="text-sm leading-relaxed text-[#4b342a]">
          Studiowałem Zarządzanie w SGH i psychologię zarządzania na studiach podyplomowych. Zrozumiałem, że wiele problemów
          właścicieli szkół wynika z braku narzędzi i języka do myślenia o szkole jako systemie. Ten projekt porządkuje te
          doświadczenia i nazywa rzeczy, o których w branży rzadko mówi się wprost.
        </p>
        <p className="text-sm leading-relaxed text-[#4b342a]">
          Obecnie tworzę rozwiązania, które mają realnie wspierać właścicieli w codziennym prowadzeniu szkół – od strony
          organizacyjnej i decyzyjnej. To część większej drogi: budowania przestrzeni, w której taniec rozwija się w sposób
          zdrowy i długoterminowy, bez wypalania.
        </p>
        <Link href="mailto:kontakt@taniecwbiznesie.pl" className="text-sm font-semibold text-primary">
          kontakt@taniecwbiznesie.pl
        </Link>
      </div>
      <div className="mt-6 flex justify-center md:mt-0 md:flex-1">
        <div className="relative h-80 w-80 overflow-hidden rounded-3xl border border-border/40 bg-white shadow-lg">
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
    </section>
  );
}

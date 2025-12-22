import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "O mnie",
  description:
    "Poznaj Jakuba Nowaka – instruktora, właściciela szkół i analityka, który stoi za projektem Taniec w Biznesie.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#f6efe4] py-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 md:flex-row md:items-start md:px-6">
        <div className="flex-1 space-y-6 text-[#2b1a12]">
          <SectionHeading
            eyebrow="O mnie"
            title="Jakub Nowak"
            description="Od lat działam w świecie tańca – jako instruktor, właściciel szkoły, manager – a równolegle tworzę systemy i analizuję biznesy. Dzięki temu patrzę na szkołę tańca jednocześnie z perspektywy sali, danych i decyzji właścicielskich."
            descriptionClassName="text-[#4b342a]"
          />
          <p className="text-sm text-[#4b342a]">
            Prowadziłem własną szkołę w mniejszym mieście i byłem menedżerem w dużej szkole w metropolii. Wiem, co oznacza
            grafik ułożony o 2 w nocy i jak wygląda rozmowa z inwestorem, który pyta o rentowność. Równolegle pracuję nad
            baileo.pl – systemem do zarządzania szkołą tańca – dlatego problem operacyjny od razu przekładam na język
            procesów i narzędzi.
          </p>
          <p className="text-sm text-[#4b342a]">
            Studiowałem Zarządzanie w SGH oraz Psychologię zarządzania dla managerów. Ta mieszanka doświadczeń pokazała mi, jak
            bardzo w naszej branży brakuje języka do mówienia o systemach, zależnościach i konsekwencjach decyzji. Ten projekt
            jest próbą uporządkowania tych obserwacji – najpierw w formie ebooka, potem społeczności i narzędzi.
          </p>
          <p className="text-sm text-[#4b342a]">
            Obecnie pracuję nad rozwiązaniami, które mają realnie wspierać właścicieli szkół: od wdrożenia grafiku i payrollu
            po warsztaty strategiczne. Jeśli chcesz porozmawiać o swojej szkole, napisz – nawet jeśli na razie masz tylko
            szkic pomysłu.
          </p>
          <Link href="mailto:kontakt@taniecwbiznesie.pl" className="text-sm font-semibold text-primary">
            kontakt@taniecwbiznesie.pl
          </Link>
        </div>
        <div className="flex justify-center md:flex-1">
          <div className="relative h-96 w-80 overflow-hidden rounded-3xl border border-border/60 bg-white shadow-lg">
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

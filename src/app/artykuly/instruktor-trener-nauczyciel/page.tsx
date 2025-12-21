import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Instruktor, trener, nauczyciel. Szkoła, studio, akademia, klub.",
  description:
    "Dlaczego nazewnictwo w szkołach tańca nigdy nie jest neutralne i jakie obietnice składa klientom.",
};

export default function NomenklaturaArticle() {
  return (
    <div className="bg-background py-12">
      <article className="mx-auto max-w-3xl space-y-6 px-4 md:px-0">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-[#1f1b18] via-[#15100d] to-[#231a14] p-6 text-white shadow-xl">
          <SectionHeading
            eyebrow="Strategia"
            title="Instruktor, trener, nauczyciel. Szkoła, studio, akademia, klub."
            description="W branży tańca rzadko kwestionujemy nazewnictwo, dopóki coś nie zacznie „zgrzytać”. To nie tylko słowa – to kontekst i obietnica, którą szkoła składa klientom."
          />
          <div className="mt-4 flex items-center gap-4 text-sm text-white/80">
            <span>Jakub Nowak</span>
            <span>•</span>
            <span>21 grudnia 2025</span>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
            <Image
              src="/nomenklatura_cover.webp"
              alt="Instruktor, trener, nauczyciel – okładka"
              width={800}
              height={420}
              className="w-full rounded-xl object-cover"
              priority
            />
          </div>
        </div>
        <SectionSubheading title="Dlaczego nazewnictwo w tańcu nigdy nie jest neutralne." />
        <p className="text-base text-muted-foreground">
          W branży tańca rzadko kwestionujemy nazewnictwo, dopóki coś nie zacznie „zgrzytać”. Nie dlatego, że uważamy je za
          nieważne, ale dlatego, że wielu z nas wchodzi w rolę właściciela płynnie – z innej formy tańca, z innego modelu
          pracy – nie zatrzymując się na tym, że zmienił się nie tylko kontekst, ale też język, którym opisujemy to, co robimy.
        </p>
        <p className="text-base text-muted-foreground">
          Ktoś, kto latami funkcjonował w modelu sportowym albo klasycznym, otwiera szkołę rekreacyjną. Ktoś, kto prowadził
          treningi techniczne, zaczyna pracować z osobami przychodzącymi „dla przyjemności”. Język zostaje ten sam,
          rzeczywistość już nie. A klienci słyszą w tych słowach bardzo konkretne obietnice.
        </p>
        <SectionSubheading title="Instruktor – obietnica lekkości i użyteczności" />
        <p className="text-base text-muted-foreground">
          Instruktor (szczególnie w kontekście tańca użytkowego lub socialowego) jest przez klientów odbierany jako osoba,
          która uczy praktycznie, „pod życie”, bez nadmiernego komplikowania. Nie chodzi tu o brak jakości, tylko o sposób jej
          komunikowania. Obietnica instruktora brzmi: „będziesz tańczyć szybko i komfortowo”.
        </p>
        <p className="text-base text-muted-foreground">
          To pociąga za sobą konsekwencje: szeroki rynek, duży napływ nowych osób, wysoka rotacja i ogromna waga atmosfery
          oraz relacji. Biznesowo oznacza to łatwiejszą skalę, ale trudniejszą retencję długoterminową. Sukces szkoły opiera
          się tu bardziej na klimacie i energii zespołu niż na sztywnym programie.
        </p>

        <SectionSubheading title="Trener – obietnica procesu i wyniku" />
        <p className="text-base text-muted-foreground">
          Trener funkcjonuje w zupełnie innym rejestrze. Tu nie sprzedajesz „fajnych zajęć”, tylko proces. Obietnica: „poprawię
          Twój taniec, zrobimy wynik”. Zmienia to charakter relacji – rynek staje się węższy, oczekiwania klientów są wyższe,
          zaufanie i konsekwencja kluczowe, frekwencja bywa stabilniejsza, ale grup jest mniej.
        </p>
        <p className="text-base text-muted-foreground">
          Biznesowo to model o mniejszej skali, za to większej głębi pracy. Więcej zajęć indywidualnych lub małych grup, mniej
          przypadkowych klientów.
        </p>

        <SectionSubheading title="Nauczyciel – obietnica struktury i fundamentów" />
        <p className="text-base text-muted-foreground">
          Nauczyciel, szczególnie w modelu klasycznym, składa jeszcze inną obietnicę: „nauczę Cię zasad i fundamentów”. Taniec
          ma strukturę, a nauczyciel tę strukturę wprowadza i pilnuje. Oznacza to wyraźniejszą hierarchię ról, większy nacisk
          na program niż na improwizację oraz – przy dzieciach – dużą rolę rodziców.
        </p>
        <p className="text-base text-muted-foreground">
          Biznesowo jest to model mniej elastyczny, ale bardziej odporny na sezonowość i oparty na długoterminowych
          relacjach.
        </p>

        <SectionSubheading title="Szkoła, studio, akademia, klub – co klient słyszy?" />
        <p className="text-base text-muted-foreground">
          Podobnie działa nazwa miejsca. „Szkoła tańca” brzmi edukacyjnie i uporządkowanie. „Studio tańca” przyciąga osoby
          szukające klimatu i różnorodności. „Akademia” buduje wrażenie zaplecza i szerokich kompetencji, a „klub tańca” –
          sportu i wyniku. Każde słowo ustawia oczekiwania zanim klient zobaczy grafik.
        </p>

        <SectionSubheading title="Lekcje, zajęcia, klasy – gdzie zaczyna się chaos" />
        <p className="text-base text-muted-foreground">
          Słowo „klasy” w tańcu ma co najmniej dwa znaczenia – kurs/proces oraz pojedyncze zajęcia. Problem pojawia się wtedy,
          gdy szkoła nie rozróżnia, w jakim sensie używa słowa w komunikacji. Wtedy obietnica staje się niejasna: czy
          sprzedajemy proces, czy pojedyncze doświadczenie.
        </p>

        <SectionSubheading title="Na koniec" />
        <p className="text-base text-muted-foreground">
          Nie narzucam Ci, jakich nazw powinna używać Twoja szkoła, akademia, studio czy klub. To Ty musisz ocenić kontekst i –
          co najważniejsze – konsekwentnie zastosować obietnicę, którą składasz klientowi. Nazwa nie jest etykietą. Jest
          obietnicą, która prowadzi klienta od pierwszego kontaktu, przez decyzję o zapisie, aż po pozostanie z Tobą na dłużej.
        </p>

        <Link href="/artykuly" className="text-sm font-semibold text-primary">
          ← Wróć do listy artykułów
        </Link>
      </article>
    </div>
  );
}

function SectionSubheading({ title }: { title: string }) {
  return <h3 className="text-xl font-semibold text-white">{title}</h3>;
}

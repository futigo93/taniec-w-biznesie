import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { FacebookWidgets } from "@/components/social/facebook-widgets";
import { InlineArticlePromo } from "@/components/ads/inline-article-promo";

const articleTitle = "Po co tancerzowi cele?";
const articleDescription =
  "I nagle taniec zaczyna być częścią naszego życia. Jeździmy na warsztaty, zostajemy dłużej po zajęciach, wracamy do domu zmęczeni, ale szczęśliwi. Tańczymy coraz więcej. I przez długi czas to wystarcza. Wszystko jest nowe i ekscytujące, każdy taniec uczy nas czegoś nowego. Już sam fakt bycia na parkiecie daje radość. Aż w pewnym momencie coś się zmienia. Nie od razu, raczej po cichu.";

const authorLink = "https://tanecznikpodcast.my.canva.site/workbook-trwala-pewnosc-siebie-na-parkiecie";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  alternates: {
    canonical: "/artykuly/po-co-tancerzowi-cele",
  },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    type: "article",
    url: "https://taniecwbiznesie.pl/artykuly/po-co-tancerzowi-cele",
    images: [
      {
        url: "/artykuly/okladki/po_co_tancerzowi_cele.webp",
        width: 1200,
        height: 630,
        alt: articleTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: articleTitle,
    description: articleDescription,
    images: ["/artykuly/okladki/po_co_tancerzowi_cele.webp"],
  },
};

export default function PoCoTancerzowiCeleArticle() {
  return (
    <div className="bg-background py-12">
      <article className="mx-auto max-w-3xl space-y-6 px-4 md:px-0">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-[#1f1b18] via-[#15100d] to-[#231a14] p-6 text-white shadow-xl">
          <SectionHeading eyebrow="Dla tancerzy" title={articleTitle} description={articleDescription} />
          <div className="mt-4 flex items-center gap-4 text-sm text-white/80">
            <Link
              href={authorLink}
              target="_blank"
              rel="noreferrer"
              className="underline decoration-white/40 underline-offset-4 hover:decoration-white/80"
            >
              Magda Kochmańska - Tanecznik
            </Link>
            <span>•</span>
            <span>30 marca 2026</span>
            <span>•</span>
            <span>5 min</span>
          </div>
          <FacebookWidgets path="/artykuly/po-co-tancerzowi-cele" className="mt-5" />
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
            <Image
              src="/artykuly/okladki/po_co_tancerzowi_cele.webp"
              alt={articleTitle}
              width={800}
              height={420}
              className="w-full rounded-xl object-cover"
              priority
            />
          </div>
        </div>

        <p className="text-base text-muted-foreground">
          Na początku wszystko jest proste. Idziemy na zajęcia, trochę zestresowani, trochę podekscytowani. Poznajemy
          ludzi, uczymy się pierwszych kroków, zaczynamy łapać rytm.
        </p>
        <p className="text-base text-muted-foreground">
          Potem pojawiają się pierwsze imprezy. Pierwsze zaproszenia do tańca. Pierwsze momenty, w których czujemy:
          to naprawdę działa.
        </p>
        <p className="text-base text-muted-foreground">
          I nagle taniec zaczyna być częścią naszego życia. Jeździmy na warsztaty, zostajemy dłużej po zajęciach,
          wracamy do domu zmęczeni, ale szczęśliwi. Tańczymy coraz więcej.
        </p>
        <p className="text-base text-muted-foreground">
          I przez długi czas to wystarcza. Wszystko jest nowe i ekscytujące, każdy taniec uczy nas czegoś nowego. Już
          sam fakt bycia na parkiecie daje radość.
        </p>
        <p className="text-base text-muted-foreground">
          Aż w pewnym momencie coś się zmienia. Nie od razu, raczej po cichu. Między jedną a drugą imprezą pojawia się
          myśl: tańczę już tyle czasu, ale czy ja właściwie idę do przodu?
        </p>
        <p className="text-base text-muted-foreground">
          Zaczynamy zauważać, że wiele tańców wygląda podobnie, figury się powtarzają, a pewne rzeczy nadal są trudne,
          mimo że wydawało się, że już dawno powinny przestać. Nie chodzi o to, że taniec przestaje cieszyć. Chodzi o
          to, że pojawia się niedosyt. Ciche: chcę z tego więcej.
        </p>
        <p className="text-base text-muted-foreground">
          I to jest bardzo ważny moment. To nie znak, że coś jest z nami nie tak. To znak, że samo bycie na zajęciach
          i imprezach przestaje wystarczać, żeby dalej się rozwijać. Od tego momentu rozwój nie dzieje się już sam z
          siebie. Potrzebuje kierunku, decyzji, uważności. Potrzebuje celu.
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-foreground">Po co nam cele w tańcu socialowym?</h2>
        <p className="text-base text-muted-foreground">
          Cele nie są po to, żeby odbierać taniecowi luz i spontaniczność. Są po to, żeby nadać kierunek.
        </p>
        <p className="text-base text-muted-foreground">
          Bez celu można robić bardzo dużo rzeczy, ale niekoniecznie tych, które realnie coś zmieniają. Cel działa jak
          filtr. Pomaga zdecydować, na czym się skupić, a co odpuścić.
        </p>
        <p className="text-base text-muted-foreground">
          Cele zmniejszają też chaos i porównywanie się. Kiedy nie masz swojego kierunku, łatwo zacząć patrzeć na
          innych i myśleć, że powinnaś tańczyć jak ona albo robić tyle figur co on. Cel przywraca fokus: to jest moja
          droga.
        </p>
        <p className="text-base text-muted-foreground">
          Dają też motywację w trudniejszych momentach. Stagnacja, zmęczenie, spadek pewności siebie nie znikają, ale
          łatwiej przez nie przejść, jeśli wiesz, po co to robisz.
        </p>
        <p className="text-base text-muted-foreground">
          No i pomagają zauważać progres. Nie wszystkie zmiany są duże i spektakularne. Kiedy mamy rozpisane cele,
          łatwiej zobaczyć małe kroki, które normalnie by nam umknęły.
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-foreground">Jakie cele może mieć tancerz socialowy?</h2>
        <p className="text-base text-muted-foreground">
          I tu ważna rzecz: cel nie musi oznaczać po prostu „tańczyć lepiej”. To zbyt ogólne. Lepsze pytanie brzmi:
          w czym konkretnie chcę się rozwinąć?
        </p>
        <p className="text-base text-muted-foreground">Cele mogą być bardzo różne:</p>
        <ul className="list-disc space-y-1 pl-5 text-base text-muted-foreground">
          <li>techniczne: lepsze prowadzenie lub podążanie, większa płynność ruchu, muzykalność, koordynacja,</li>
          <li>mentalne: mniej stresu na parkiecie, więcej odwagi do proszenia do tańca, większa obecność tu i teraz,</li>
          <li>socialowe: poznanie nowych osób, tańczenie z różnymi partnerami, większa otwartość na innych,</li>
          <li>doświadczeniowe: pierwszy festiwal, zatańczenie z osobami na wyższym poziomie, przetańczenie całej imprezy,</li>
          <li>
            tożsamościowe: chcę być osobą, która dobrze czuje muzykę, partnerką lub partnerem, z którym dobrze się
            tańczy, kimś, kto czuje się swobodnie na parkiecie.
          </li>
        </ul>

        <h2 className="pt-4 text-2xl font-semibold text-foreground">Jak podejść do planowania celów?</h2>
        <p className="text-base text-muted-foreground">
          Najczęstszy błąd jest prosty: stawiamy cel, ale nie zmieniamy nic w działaniu. Dlatego oprócz pytania „co
          chcę osiągnąć?” potrzebujesz też pytania „co będę robić inaczej?”.
        </p>
        <p className="text-base text-muted-foreground">
          Zamiast myśleć „chcę lepiej tańczyć”, lepiej powiedzieć: chcę czuć większą płynność w podstawowych krokach.
          To już da się przełożyć na praktykę.
        </p>
        <p className="text-base text-muted-foreground">Na przykład:</p>
        <ul className="list-disc space-y-1 pl-5 text-base text-muted-foreground">
          <li>zostaję 10 minut po zajęciach na praktykę,</li>
          <li>nagrywam się raz w tygodniu,</li>
          <li>na każdej imprezie tańczę z trzema nowymi osobami.</li>
        </ul>
        <p className="text-base text-muted-foreground">
          Małe kroki są tu kluczowe. Cel typu „będę pewna siebie” jest zbyt duży i zbyt mglisty. Ale „zaproszę dziś
          dwie osoby do tańca” albo „podczas każdego tańca zrobię trzy ósemki solo” to już coś realnego.
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-foreground">Bez czego cel ma małe szanse powodzenia?</h2>
        <p className="text-base text-muted-foreground">
          Większość osób nie zawodzi dlatego, że są za mało ambitne. Zawodzi raczej dlatego, że nie ma systemu.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-base text-muted-foreground">
          <li>Bez regularności: jednorazowy zryw rzadko coś zmienia. To powtarzalność buduje efekt.</li>
          <li>
            Bez feedbacku: jeśli nie wiesz, co robisz dobrze i źle, łatwo utknąć. Warto prosić o informację zwrotną
            instruktora, partnera albo korzystać z nagrań wideo.
          </li>
          <li>
            Bez akceptacji procesu: rozwój w tańcu nie jest liniowy. Będą momenty chaosu, cofnięcia i wrażenia, że
            tańczysz gorzej niż miesiąc temu. To normalne.
          </li>
          <li>Bez elastyczności: cel nie jest umową na całe życie. Może zmieniać się razem z Tobą.</li>
          <li>
            Bez odpowiedzi na pytanie „dlaczego?”: jeśli nie wiesz, po co Ci ten cel, odpuścisz przy pierwszym oporze.
          </li>
        </ul>

        <h2 className="pt-4 text-2xl font-semibold text-foreground">Najważniejsze na koniec</h2>
        <p className="text-base text-muted-foreground">
          Cel w tańcu socialowym nie ma sprawić, że taniec stanie się zadaniem do wykonania. Ma zrobić coś odwrotnego:
          pomóc Ci czerpać z niego więcej.
        </p>
        <p className="text-base text-muted-foreground">
          Bo kiedy wiesz, dokąd zmierzasz, łatwiej cieszyć się drogą. Rozwój w tańcu nie dzieje się przypadkiem, ale
          też nie musi być sztywny ani zadaniowy. Może być świadomy i nadal pełen radości.
        </p>

        <InlineArticlePromo
          label="Polecane"
          ctaLabel="Sprawdź"
          items={[
            {
              title: "Workbook - Trwała pewność siebie na parkiecie",
              description: "Nie czekaj na odwagę - zbuduj ją krok po kroku!",
              href: authorLink,
              image: "/artykuly/inline/twala-pewnosc-siebie.webp",
            },
          ]}
        />

        <Link href="/artykuly" className="text-sm font-semibold text-primary">
          ↩ Wróć do listy artykułów
        </Link>
      </article>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { FacebookWidgets } from "@/components/social/facebook-widgets";
import { InlineArticlePromo } from "@/components/ads/inline-article-promo";

const articleTitle = "Tam, gdzie nam zależy. O pracy z głową w tańcu socialowym";
const articleDescription =
  "Taniec socialowy to nie zawody. Ale presja, porównania i wewnętrzny krytyk działają tu tak samo jak w sporcie. Magda Kochmańska z Tanecznika wyjaśnia czym naprawdę jest trening mentalny w tańcu – i dlaczego technika nie wystarczy, jeśli głowa nie rozwija się razem z nią.";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  alternates: {
    canonical: "/artykuly/tam-gdzie-nam-zalezy",
  },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    type: "article",
    url: "https://taniecwbiznesie.pl/artykuly/tam-gdzie-nam-zalezy",
    images: [
      {
        url: "/Tam-gdzie-nam-zalezy.webp",
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
    images: ["/Tam-gdzie-nam-zalezy.webp"],
  },
};

export default function TamGdzieNamZalezyArticle() {
  return (
    <div className="bg-background py-12">
      <article className="mx-auto max-w-3xl space-y-6 px-4 md:px-0">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-[#1f1b18] via-[#15100d] to-[#231a14] p-6 text-white shadow-xl">
          <SectionHeading
            eyebrow="Dla tancerzy"
            title={articleTitle}
            description={articleDescription}
          />
          <div className="mt-4 flex items-center gap-4 text-sm text-white/80">
            <Link
              href="https://tanecznikpodcast.my.canva.site/workbook-trwala-pewnosc-siebie-na-parkiecie"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-white/40 underline-offset-4 hover:decoration-white/80"
            >
              Magda Kochmańska - Tanecznik
            </Link>
            <span>•</span>
            <span>23 lutego 2026</span>
            <span>•</span>
            <span>5 min</span>
          </div>
          <FacebookWidgets path="/artykuly/tam-gdzie-nam-zalezy" className="mt-5" />
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
            <Image
              src="/Tam-gdzie-nam-zalezy.webp"
              alt={articleTitle}
              width={800}
              height={420}
              className="w-full rounded-xl object-cover"
              priority
            />
          </div>
        </div>

        <p className="text-base text-muted-foreground">
          Kiedy zaczęłam zajmować się psychologią sportu, taniec socialowy wydawał mi się kompletnie do tego nie
          pasować. „To nie o nas” - mówiłam sobie. „To o zawodnikach, rywalizacji, presji wyniku, medalach”.
        </p>
        <p className="text-base text-muted-foreground">
          Przecież my tańczymy dla przyjemności. Dla samego bycia na parkiecie, dla radości z ruchu i muzyki.
          Wspieramy się, a nie rywalizujemy, nie walczymy o podium, nie liczymy punktów.
        </p>
        <p className="text-base text-muted-foreground">
          A jednak, im więcej poznawałam psychologię sportu, tym wyraźniej rozumiałam, że presja i porównania nie są
          zarezerwowane dla zawodów. Są wszędzie tam, gdzie nam zależy, gdzie chcemy się wykazać, rozwijać i czuć, że
          robimy coś naprawdę dobrze.
        </p>
        <p className="text-base text-muted-foreground">
          Bo choć nie ma sędziów - inne osoby nas obserwują. Choć nie ma punktów, łatwo wpaść w pułapkę porównań. Nie
          ma medali, a jednak odczuwamy presję nieustannego rozwoju. I przede wszystkim jest nasza własna głowa, która
          właśnie wtedy, gdy ma wydarzyć się coś ważnego, zaczyna mówić:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-base text-muted-foreground">
          <li>„Powinnaś już umieć więcej”.</li>
          <li>„Widać, że się denerwujesz”.</li>
          <li>„Ona chyba czuje, że nie ogarniasz”.</li>
          <li>„Nie nadajesz się”.</li>
        </ul>

        <h2 className="pt-4 text-2xl font-semibold text-foreground">Trening mentalny to nie tylko „pewność siebie”</h2>
        <p className="text-base text-muted-foreground">
          Wyobraź sobie taki wieczór. Jesteś na imprezie, DJ gra Twoje ulubione kawałki, na sali jest pełno ludzi.
          Widzisz kilka osób, z którymi bardzo chcesz zatańczyć. Serce bije szybciej, ale w środku zaczyna się
          rozmowa: „Jaki poziom na parkiecie”, „Dlaczego ja się tak spinam?”, „Na pewno mi odmówi”, „Jak się pomylę,
          wszyscy to zobaczą”.
        </p>
        <p className="text-base text-muted-foreground">
          I nagle okazuje się, że zamiast tańczyć - stoisz w tym samym miejscu i masz coraz mniejszą ochotę wyjść na
          parkiet.
        </p>
        <p className="text-base text-muted-foreground">
          Właśnie w takich momentach zaczęłam rozumieć, czym naprawdę jest trening mentalny. To nie są afirmacje przed
          lustrem i nie chodzi o hasło „muszę być pewna siebie”. To umiejętność poradzenia sobie z tym, co dzieje się
          w środku, kiedy bardzo nam zależy.
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-foreground">Po co mi cel, skoro tańczę dla przyjemności?</h2>
        <p className="text-base text-muted-foreground">
          Wiele osób myśli, że skoro nie startujemy w zawodach, to nie potrzebujemy pracy z celami. A przecież cel nie
          musi oznaczać czegoś wielkiego. Celem może być swobodniejszy taniec, odwaga do wyjścia na środek parkietu,
          mniej unikania trudniejszych partnerów czy większy spokój przy nagrywce.
        </p>
        <p className="text-base text-muted-foreground">
          Bez świadomości celu łatwo wpaść w poczucie, że „ciągle za mało”. Warsztat za warsztatem, event za eventem,
          a w głowie myśl: „nadal nie jestem tam, gdzie powinnam być”.
        </p>
        <p className="text-base text-muted-foreground">Trening mentalny pomaga się zatrzymać i zapytać:</p>
        <ul className="list-disc space-y-1 pl-5 text-base text-muted-foreground">
          <li>dokąd właściwie idę?</li>
          <li>dlaczego tańczę?</li>
          <li>kim chcę się w tym stawać?</li>
        </ul>

        <InlineArticlePromo
          label="Polecane"
          ctaLabel="Sprawdź"
          items={[
            {
              title: "Pobierz ebook: Taniec w biznesie",
              description: "Darmowy przewodnik i aktualizacje dla właścicieli szkół tańca.",
              href: "https://taniecwbiznesie.pl/#ebook",
              image: "/ebook_cover.webp",
            },
            {
              title: "Seria artykułów o instruktorach tańca",
              description: "Zajrzyj w świat ukryty pod powierzchnią.",
              href: "/artykuly/instruktor-tanca-tego-nie-zrozumiesz",
              image: "/instruktor-tanca-tego-nie-zrozumiesz-insta.webp",
            },
          ]}
        />

        <h2 className="pt-4 text-2xl font-semibold text-foreground">Postęp nie jest linią prostą</h2>
        <p className="text-base text-muted-foreground">
          W tańcu socialowym wytrwałość jest cicha. Nikt jej nie nagradza medalem czy dyplomem. Czasem przez miesiące
          wydaje się, że stoisz w miejscu i wszyscy idą szybciej. A prawda jest taka, że rozwój rzadko wygląda jak
          idealna rosnąca linia.
        </p>
        <p className="text-base text-muted-foreground">
          Trening mentalny nauczył mnie zauważać małe zmiany: jedno spokojniejsze wejście w taniec, jedno „nie
          uciekłam”, jedno „wróciłam do muzyki zamiast do porównań”. To właśnie z tych drobnych momentów buduje się
          poczucie skuteczności.
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-foreground">Największy mit</h2>
        <p className="text-base text-muted-foreground">
          Przez długi czas wierzyłam, że kiedy będę tańczyć lepiej, przestanę się stresować. Dziś wiem, że to tak nie
          działa. Im wyższy poziom, tym większa widoczność i większe oczekiwania, a więc często też większa presja.
        </p>
        <p className="text-base text-muted-foreground">
          Jeśli głowa nie rozwija się razem z umiejętnościami, presja nie znika - tylko zmienia formę. Zamiast „czy ja
          się nadaję?” pojawia się „czy utrzymam poziom?”.
        </p>
        <p className="text-base text-muted-foreground">
          Trening mentalny nie usuwa stresu. Uczy, jak z nim tańczyć. Nie usuwa wątpliwości, ale pomaga nie traktować
          ich jak prawdy absolutnej.
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-foreground">To nie jest o wygrywaniu</h2>
        <p className="text-base text-muted-foreground">
          W tańcu socialowym trening mentalny nie służy zdobywaniu medali. Służy jakości doświadczenia. Chodzi o to,
          żeby nie sabotować swojej przyjemności przez porównania, rozwijać się z wytrwałością, a nie przymusem, i
          skupiać się na tym, na co mamy wpływ.
        </p>
        <p className="text-base text-muted-foreground">
          Bo odwaga w tańcu nie polega na braku stresu. Polega na tym, że mimo stresu robisz krok.
        </p>
        <p className="text-base text-muted-foreground">
          Jeśli czujesz, że chcesz popracować nad trwałą pewnością siebie na parkiecie, pracą z celami i radzeniem
          sobie z presją, zajrzyj do Workbooka „Trwała pewność siebie na parkiecie”.
        </p>
        <p className="text-base text-muted-foreground">
          <Link
            href="https://tanecznikpodcast.my.canva.site/workbook-trwala-pewnosc-siebie-na-parkiecie"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-primary underline decoration-primary/60 underline-offset-4"
          >
            Promocyjna cena tylko do końca lutego - zobacz workbook
          </Link>
          .
        </p>

        <InlineArticlePromo
          label="Polecane"
          ctaLabel="Sprawdź"
          items={[
            {
              title: "Workbook - Trwała pewność siebie na parkiecie",
              description: "Nie czekaj na odwagę - zbuduj ją krok po kroku!",
              href: "https://tanecznikpodcast.my.canva.site/workbook-trwala-pewnosc-siebie-na-parkiecie",
              image: "/twala-pewnosc-siebie.webp",
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

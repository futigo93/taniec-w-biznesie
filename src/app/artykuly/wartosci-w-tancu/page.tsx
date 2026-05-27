import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { FacebookWidgets } from "@/components/social/facebook-widgets";
import { InlineArticlePromo } from "@/components/ads/inline-article-promo";

const articleTitle = "Wartości w tańcu";
const articleDescription =
  "W tańcu bardzo łatwo nam wejść w tryb „więcej”: więcej godzin na sali, więcej figur, więcej warsztatów. Z zewnątrz wszystko wygląda jak rozwój, ale w środku często pojawia się napięcie, frustracja albo poczucie, że coś nie do końca ma sens. Bo samo działanie to jeszcze nie kierunek.";

export const metadata: Metadata = {
  title: articleTitle,
  description: articleDescription,
  alternates: {
    canonical: "/artykuly/wartosci-w-tancu",
  },
  openGraph: {
    title: articleTitle,
    description: articleDescription,
    type: "article",
    url: "https://taniecwbiznesie.pl/artykuly/wartosci-w-tancu",
    images: [
      {
        url: "/artykuly/okladki/Wartosci-w-tancu.webp",
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
    images: ["/artykuly/okladki/Wartosci-w-tancu.webp"],
  },
};

export default function WartosciWTancuArticle() {
  return (
    <div className="bg-background py-12">
      <article className="mx-auto max-w-3xl space-y-6 px-4 md:px-0">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-br from-[#1f1b18] via-[#15100d] to-[#231a14] p-6 text-white shadow-xl">
          <SectionHeading eyebrow="Dla tancerzy" title={articleTitle} description={articleDescription} />
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
            <span>30 kwietnia 2026</span>
            <span>•</span>
            <span>5 min</span>
          </div>
          <FacebookWidgets path="/artykuly/wartosci-w-tancu" className="mt-5" />
          <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
            <Image
              src="/artykuly/okladki/Wartosci-w-tancu.webp"
              alt={articleTitle}
              width={800}
              height={420}
              className="w-full rounded-xl object-cover"
              priority
            />
          </div>
        </div>

        <p className="text-base leading-8 text-foreground/85">
          W tańcu bardzo łatwo nam wejść w tryb „więcej”: więcej godzin na sali, więcej figur, więcej warsztatów. Z
          zewnątrz wszystko wygląda jak rozwój, ale w środku często pojawia się napięcie, frustracja albo poczucie, że
          coś nie do końca ma sens. Bo samo działanie to jeszcze nie kierunek.
        </p>
        <p className="text-base leading-8 text-foreground/85">
          <strong className="font-semibold text-foreground">I właśnie tutaj pojawiają się wartości.</strong>
        </p>
        <p className="text-base leading-8 text-foreground/85">
          Wartości w tańcu to nie są konkretne cele. Nie da się ich „odhaczyć”. To raczej{" "}
          <strong className="font-semibold text-foreground">kierunek</strong>, w którym chcesz iść - sposób, w jaki chcesz
          tańczyć, rozwijać się i być na parkiecie.
        </p>
        <p className="text-base leading-8 text-foreground/85">Jeśli myślisz sobie:</p>
        <ul className="list-disc space-y-1 pl-5 text-base leading-8 text-foreground/85">
          <li>„Chcę wyrażać emocje.”</li>
          <li>„Chcę czuć swobodę w ciele.”</li>
          <li>„Chcę budować prawdziwe połączenie z partnerem lub partnerką.”</li>
          <li>„Chcę mieć odwagę próbować, nawet jeśli nie wychodzi.”</li>
        </ul>
        <p className="text-base leading-8 text-foreground/85">
          To są <strong className="font-semibold text-foreground">jakości</strong>, które nadają sens temu, co robisz - nawet
          wtedy, gdy nie wszystko wychodzi.
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-foreground">Bez wartości łatwo zgubić kierunek</h2>
        <p className="text-base leading-8 text-foreground/85">
          Bez tego łatwo zacząć gubić się w porównaniach, w gonieniu za poziomem albo w robieniu rzeczy „bo tak
          trzeba”. Możesz trenować coraz więcej, a jednocześnie mieć wrażenie, że stoisz w miejscu. Nie dlatego, że
          robisz za mało, tylko dlatego, że nie wiesz, <strong className="font-semibold text-foreground">dokąd właściwie
          zmierzasz</strong>.
        </p>
        <p className="text-base leading-8 text-foreground/85">
          Kiedy jednak ustalisz już, co jest dla Ciebie ważne, taniec zaczyna się układać{" "}
          <strong className="font-semibold text-foreground">w spójną całość</strong>. Nagle decyzje stają się prostsze, a
          rozwój bardziej świadomy. Bo zamiast pytać „Co jeszcze powinnam zrobić?”, zaczynasz pytać:
          <strong className="font-semibold text-foreground"> „Co przybliża mnie do tego, jak chcę tańczyć?”</strong>
        </p>
        <p className="text-base leading-8 text-foreground/85">
          To właśnie na tej podstawie zaczynają mieć sens cele.
        </p>
        <p className="text-base leading-8 text-foreground/85">
          Cele same w sobie nie są problemem. Pojawia się on dopiero wtedy, kiedy są one oderwane od tego, co dla
          Ciebie naprawdę ważne. Wtedy łatwo przejąć je od innych - chcieć być na jakimś poziomie, umieć konkretne
          rzeczy, wyglądać w określony sposób - ale bez głębszego <strong className="font-semibold text-foreground">„dlaczego?”
          i „po co?”</strong> szybko tracą sens albo zaczynają ciążyć.
        </p>
        <p className="text-base leading-8 text-foreground/85">
          Kiedy wychodzisz od wartości, cele przestają być przypadkowe. Stają się naturalnym{" "}
          <strong className="font-semibold text-foreground">przedłużeniem kierunku</strong>, który wybierasz.
        </p>

        <h2 className="pt-4 text-2xl font-semibold text-foreground">Cele zaczynają służyć Tobie</h2>
        <p className="text-base leading-8 text-foreground/85">
          Jeśli ważna jest dla Ciebie swoboda, możesz świadomie stawiać się w sytuacjach, które ją budują - nawet jeśli
          na początku są niewygodne.
        </p>
        <p className="text-base leading-8 text-foreground/85">
          Jeśli cenisz połączenie z partnerem, zaczynasz skupiać się nie tylko na krokach, ale na tym, co dzieje się
          między Wami w tańcu, na obecności „tu i teraz”, pracy z myślami.
        </p>
        <p className="text-base leading-8 text-foreground/85">
          Jeśli Twoją wartością jest odwaga, to próbujesz rzeczy, które trochę Cię stresują - nie dlatego, że
          „trzeba”, ale dlatego, że to część drogi, którą chcesz iść.
        </p>
        <p className="text-base leading-8 text-foreground/85">
          I wtedy dzieje się coś ważnego: <strong className="font-semibold text-foreground">zmienia się sposób patrzenia na
          postęp</strong>.
        </p>
        <p className="text-base leading-8 text-foreground/85">
          Nagle nie chodzi tylko o to, czy coś wyszło perfekcyjnie. Liczy się to, czy był_ś bliżej tego, co dla Ciebie
          istotne. Próba, nawet nieudana, przestaje być porażką, jeśli była zgodna z Twoim kierunkiem. Jeden świadomy
          taniec może mieć większą wartość niż dziesięć „dobrych”, ale odtworzonych automatycznie.
        </p>
        <p className="text-base leading-8 text-foreground/85">
          To daje zupełnie <strong className="font-semibold text-foreground">inne poczucie rozwoju</strong> - bardziej stabilne,
          mniej zależne od chwilowej formy, opinii innych czy porównań.
        </p>

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
              image: "/artykuly/inline/instruktor-tanca-tego-nie-zrozumiesz-insta.webp",
            },
          ]}
        />

        <h2 className="pt-4 text-2xl font-semibold text-foreground">Wartości porządkują codzienne wybory</h2>
        <p className="text-base leading-8 text-foreground/85">
          Wartości działają też jak <strong className="font-semibold text-foreground">filtr</strong> w codziennych wyborach.
          Pomagają zdecydować, na czym się skupić na treningu, kiedy odpuścić, a kiedy się zmobilizować, czego się
          uczyć, a co nie jest teraz dla Ciebie istotne. Dzięki nim taniec przestaje być zbiorem przypadkowych
          działań, a zaczyna być świadomą drogą.
        </p>
        <p className="text-base leading-8 text-foreground/85">
          Możesz tańczyć coraz więcej i dalej czuć niedosyt. Ale kiedy wiesz, co jest dla Ciebie ważne i budujesz na
          tym swoje cele, zaczynasz nie tylko się rozwijać - zaczynasz naprawdę czuć, że jesteś na dobrej drodze, bo
          <strong className="font-semibold text-foreground"> swojej drodze</strong>.
        </p>
        <p className="text-base leading-8 text-foreground/85">
          Jeśli chcesz wspólnie wyjść od wartości, żeby zaplanować świadomie swój rozwój na parkiecie, Magda zaprasza
          do grupowego mentoringu, który startuje 14 maja o 19:00:
        </p>
        <p className="text-base leading-8 text-foreground/85">
          <Link
            href="https://tanecznikpodcast.my.canva.site/mentaldancelab"
            target="_blank"
            rel="noreferrer"
            className="link-accent font-semibold"
          >
            tanecznikpodcast.my.canva.site/mentaldancelab
          </Link>
        </p>

        <InlineArticlePromo
          label="Polecane"
          ctaLabel="Sprawdź"
          items={[
            {
              title: "Workbook - Trwała pewność siebie na parkiecie",
              description: "Nie czekaj na odwagę - zbuduj ją krok po kroku!",
              href: "https://tanecznikpodcast.my.canva.site/workbook-trwala-pewnosc-siebie-na-parkiecie",
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

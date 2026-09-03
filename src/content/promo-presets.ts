export type PromoItem = {
  title: string;
  description: string;
  href: string;
  image: string;
  weight?: number;
};

/**
 * Named, reusable sets of InlineArticlePromo items. Lets an MDX article write
 * `<Promo preset="ebook" />` instead of retyping image paths/hrefs/descriptions
 * inline every time — the exact blocks below are the ones that used to be
 * copy-pasted verbatim across most articles. Fully custom inline items are
 * still supported via `<Promo items={[...]} />` for one-off cross-links
 * (e.g. "next article in this series").
 */
export const promoPresets = {
  ebook: [
    {
      title: "Pobierz ebook: Taniec w biznesie",
      description: "Darmowy przewodnik i aktualizacje dla właścicieli szkół tańca.",
      href: "https://taniecwbiznesie.pl/#ebook",
      image: "/ebook_cover.webp",
    },
  ],
  "instruktor-series": [
    {
      title: "Seria artykułów o instruktorach tańca",
      description: "Zajrzyj w świat ukryty pod powierzchnią.",
      href: "/artykuly/instruktor-tanca-tego-nie-zrozumiesz",
      image: "/artykuly/inline/instruktor-tanca-tego-nie-zrozumiesz-insta.webp",
    },
  ],
  workbook: [
    {
      title: "Workbook - Trwała pewność siebie na parkiecie",
      description: "Nie czekaj na odwagę - zbuduj ją krok po kroku!",
      href: "https://tanecznikpodcast.my.canva.site/workbook-trwala-pewnosc-siebie-na-parkiecie",
      image: "/artykuly/inline/twala-pewnosc-siebie.webp",
    },
  ],
  "baileo-suite": [
    {
      title: "Pobierz ebook: Taniec w biznesie",
      description: "Darmowy przewodnik i aktualizacje dla właścicieli szkół tańca.",
      href: "https://taniecwbiznesie.pl/#ebook",
      image: "/ebook_cover.webp",
    },
    {
      title: "Badanie rynku szkół tańca",
      description: "Pomóż zebrać dane i poznaj wnioski z ankiety.",
      href: "https://taniecwbiznesie.pl/ankiety",
      image: "/strony-szkol-tanca.webp",
    },
    {
      title: "Chaos w grafiku zajęć?",
      description: "Sprawdź, jak przygotować czytelny grafik i zwiększyć zapisy.",
      href: "https://baileo.pl/blog/przewodnik-po-widokach-grafiku",
      image: "/przewodnik-po-widokach-grafiku-cover.png",
    },
    {
      title: "Baileo dla szkół tańca",
      description: "System do obsługi zapisów, grafiku i komunikacji z kursantami.",
      href: "https://baileo.pl/",
      image: "/logo_icon_baileo_square.png",
    },
    {
      title: "Dalsze wsparcie dla szkół tańca",
      description: "Zobacz zestaw rozwiązań i wsparcie rozwoju szkoły.",
      href: "/uslugi",
      image: "/baileo-system-overview.webp",
    },
  ],
} satisfies Record<string, PromoItem[]>;

export type PromoPresetName = keyof typeof promoPresets;

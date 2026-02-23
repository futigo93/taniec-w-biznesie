import type { LucideIcon } from "lucide-react";
import { FileText, ListChecks, PenSquare } from "lucide-react";

type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const ebookThemes: IconItem[] = [
  {
    title: "Rozdział dla każdego",
    description:
      "Jak przejść z trybu instruktora w rolę właściciela i uporządkować odpowiedzialność.",
    icon: FileText,
  },
  {
    title: "Pełen ebook w klubie",
    description: "Mapy decyzji, cykl życia kursanta, korepetycje z finansów szkoły.",
    icon: ListChecks,
  },
  {
    title: "Aktualizacje społeczności",
    description: "Nowe wersje trafiają najpierw do członków – razem dopisujemy case studies.",
    icon: PenSquare,
  },
];

export type ArticlePreview = {
  title: string;
  description: string;
  category: string;
  readTime: string;
  slug: string;
  external?: string;
  cover?: string;
};

type ProductSpotlight = {
  label: string;
  title: string;
  description: string;
  highlights: string[];
  cta: string;
  url?: string;
  external?: boolean;
  isNew?: boolean;
  ctaModal?: boolean;
};

export const articlePreviews: ArticlePreview[] = [
  {
    title: "Tam, gdzie nam zależy. O pracy z głową w tańcu socialowym",
    description:
      "Taniec socialowy to nie zawody. Ale presja, porównania i wewnętrzny krytyk działają tu tak samo jak w sporcie. Magda Kochmańska z Tanecznika wyjaśnia czym naprawdę jest trening mentalny w tańcu – i dlaczego technika nie wystarczy, jeśli głowa nie rozwija się razem z nią.",
    category: "Dla tancerzy",
    readTime: "5 min",
    slug: "tam-gdzie-nam-zalezy",
    cover: "/Tam-gdzie-nam-zalezy.webp",
  },

  {
    title: "Wizerunek instruktora tańca - na co to komu?",
    description:
      "W świecie tańca social media stały się czymś w rodzaju wspólnego rynku. Wszyscy tam są. Szkoły, instruktorzy, kursanci, organizatorzy. Jeśli Cię tam nie ma, to w pewnym sensie nie istniejesz. Ale obecność w tym miejscu nie jest jeszcze żadnym osiągnięciem. Jest punktem wyjścia.",
    category: "Blog",
    readTime: "9 min",
    slug: "wizerunek-instruktora-tanca-na-co-to-komu",
    cover: "/Wizerunek-instruktora-tanca-na-co-to-komu.webp",
  },

  {
    title: "Instruktor tańca - twardy zad świeżaka",
    description:
      "Nasz rynek rzadko oferuje pozycję „junior instruktora”. Rzadko daje mentora, który będzie czuwał nad procesem, brał na siebie część odpowiedzialności i pozwalał bezpiecznie popełniać błędy. W większości przypadków trzeba nauczyć się tego zawodu samemu - obserwując, próbując i poprawiając się w biegu.",
    category: "Blog",
    readTime: "10 min",
    slug: "instruktor-tanca-twardy-zad-swiezaka",
    cover: "/instruktor-tanca-twardy-zad.webp",
  },

  {
    title: "Instruktor tańca - to człowiek z misją (zazwyczaj)",
    description:
      "Dojrzały idol rozumie, że bycie wzorem jest odpowiedzialnością. Bo wpływ można wykorzystywać w różny sposób. Można normalizować zdrowy ruch, akceptację ciała, szacunek do granic, partnerskie relacje. Można też wzmacniać napięcia, budować fałszywe wyobrażenia, utrwalać stereotypy.",
    category: "Blog",
    readTime: "10 min",
    slug: "instruktor-tanca-czlowiek-z-misja",
    cover: "/instruktor-tanca-czlowiek-z-misja-fb.webp",
  },
  {
    title: "Instruktor tańca - tego nie zrozumiesz (póki nie doświadczysz)",
    description:
      "Instruktor nie „prowadzi zajęć”. Instruktor projektuje doświadczenie. To, co kursant odbiera jako atmosferę, tempo, sens albo jego brak, jest wynikiem niezliczonych, drobnych decyzji.",
    category: "Blog",
    readTime: "7 min",
    slug: "instruktor-tanca-tego-nie-zrozumiesz",
    cover: "/instruktor-tanca-tego-nie-zrozumiesz-fb.webp",
  },

  {
    title: "Tancerz ≠ instruktor ≠ właściciel",
    description:
      "Widziałem wielu świetnych tancerzy, którzy uczyli - ale nie byli instruktorami. Były zajęcia, była sala, byli ludzie. Ale ciężar zajęć znajdował się tuż przy lustrze, a nie na środku parkietu.",
    category: "Blog",
    readTime: "5 min",
    slug: "tancerz-instruktor-wlasciciel",
    cover: "/tancerz-instruktor-wlasciciel.png",
  },
  {
    title: "Instruktor, trener, nauczyciel. Szkoła, studio, akademia, klub.",
    description:
      "W branży tańca rzadko kwestionujemy nazewnictwo, dopóki coś nie zacznie „zgrzytać”. To nie tylko słowa – to kontekst i obietnica, którą szkoła składa klientom.",
    category: "Strategia",
    readTime: "5 min",
    slug: "instruktor-trener-nauczyciel",
    cover: "/nomenklatura_cover.webp",
  },
  {
    title: "Przewodnik po widokach grafiku: dopasuj prezentację zajęć do swojej szkoły tańca",
    description:
      "Jak wykorzystać różne widoki grafiku w baileo.pl, aby kursanci łatwiej czytali ofertę i szybciej rezerwowali miejsca.",
    category: "Narzędzia",
    readTime: "15 min",
    slug: "przewodnik-po-widokach-grafiku",
    external: "https://baileo.pl/blog/przewodnik-po-widokach-grafiku",
    cover: "/przewodnik-po-widokach-grafiku-cover.png",
  },
];

export const communityPromises = [
  "Pełen ebook „Taniec w biznesie” (PDF + aktualizacje) tylko dla zapisanych.",
  "Newsletter klubowy z dodatkowymi notatkami i case studies, których nie publikuję publicznie.",
  "Społeczność (free) = listy dyskusyjne. Wersja płatna (Q2) = warsztaty, mastermindy, biblioteka procesów.",
];

export const productSpotlight: ProductSpotlight[] = [
  {
    label: "System obsługi studia",
    title: "baileo.pl",
    description:
      "Razem z zespołem przygotowuję system do zarządzania grafikiem, zapisami, karnetami i komunikacją z klientami – z zakupami i zapisami online.",
    highlights: [
      "Moduł zarządzania grafikiem + widżet na Twoją stronę (już działa w pierwszych szkołach).",
      "Wkrótce gotowe będą zapisy online.",
    ],
    cta: "Sprawdź teraz",
    url: "https://baileo.pl",
    external: true,
    isNew: false,
  },
  {
    label: "Narzędzia",
    title: "Payroll w szkole tańca 2026",
    description:
      "Automatyczne liczenie skomplikowanych stawek i bonusów dla instruktorów – jesteśmy w fazie beta testów.",
    highlights: [
      "Stawki motywacyjne, mnożniki, dodatki ręczne.",
      "Panel instruktora do podglądu wynagrodzenia i powiadomienia mailowe.",
    ],
    cta: "Zapisz się na konsultację i testy",
    url: "#beta-modal",
    external: false,
    isNew: true,
    ctaModal: true,
  },
];

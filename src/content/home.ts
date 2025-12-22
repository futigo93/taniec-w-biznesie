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
    title: "Instruktor, trener, nauczyciel. Szkoła, studio, akademia, klub.",
    description:
      "W branży tańca rzadko kwestionujemy nazewnictwo, dopóki coś nie zacznie „zgrzytać”. To nie tylko słowa – to kontekst i obietnica, którą szkoła składa klientom.",
    category: "Strategia",
    readTime: "9 min",
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

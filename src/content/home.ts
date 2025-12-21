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

export const productSpotlight = [
  {
    label: "System operacyjny",
    title: "baileo.pl",
    description:
      "CRM i zapisy dla szkół tańca – rozwijany przeze mnie i zespół, dedykowany realiom kursów.",
    highlights: [
      "zapisy i listy oczekujących pod grafik szkoły",
      "integracje z płatnościami, cykliczne rozliczenia",
    ],
    cta: "Sprawdź baileo.pl",
    url: "https://baileo.pl",
    external: true,
    isNew: false,
  },
  {
    label: "Payroll dla instruktorów",
    title: "Nowe narzędzie 2026",
    description:
      "Automatyczne liczenie stawek motywacyjnych i bonusów dla instruktorów w zależności od frekwencji.",
    highlights: [
      "konfigurowalne modele premiowe",
      "eksport do księgowości + integracja z baileo.pl",
    ],
    cta: "Zapisz się na beta-listę",
    url: "/#zapis",
    external: false,
    isNew: true,
  },
];

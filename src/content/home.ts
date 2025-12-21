import type { LucideIcon } from "lucide-react";
import {
  BookCheck,
  FileText,
  ListChecks,
  PenSquare,
  Share2,
  Target,
} from "lucide-react";

type IconItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const heroHighlights: IconItem[] = [
  {
    title: "Pobierz rozdział od razu",
    description: "Pierwszy rozdział dostajesz natychmiast po wpisaniu e-maila.",
    icon: BookCheck,
  },
  {
    title: "Pełen ebook w klubie",
    description: "Dołącz do listy / grupy i odblokuj całość razem z aktualizacjami.",
    icon: Share2,
  },
  {
    title: "Wiedza z praktyki",
    description: "Kilka szkół + rozwój baileo.pl i payrollu dla instruktorów.",
    icon: Target,
  },
];

export const ebookThemes: IconItem[] = [
  {
    title: "Rozdział dla każdego",
    description: "Jak przejść z trybu instruktora w rolę właściciela i uporządkować odpowiedzialność.",
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

export const articlePreviews = [
  {
    title: "Planowanie grafiku, które nie łamie ludzi",
    description: "Case study z małej szkoły, w której grafik przestał być łamigłówką o 1:00 w nocy.",
    category: "Organizacja",
    readTime: "12 min",
    slug: "planowanie-grafiku",
  },
  {
    title: "Cykl życia kursanta w liczbach",
    description: "Dlaczego churn w szkołach tańca zaczyna się w 3 miesiącu i jak się do tego przygotować.",
    category: "Finanse",
    readTime: "10 min",
    slug: "cykl-zycia-kursanta",
  },
  {
    title: "Jak rozmawiać z instruktorami o pieniądzach",
    description: "Kontrakt, feedback i plan wynagrodzeń, który nie psuje relacji.",
    category: "Liderstwo",
    readTime: "8 min",
    slug: "rozmowy-o-pieniadzach",
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
    description: "CRM i zapisy dla szkół tańca – rozwijany przeze mnie i zespół, dedykowany realiom kursów.",
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
    description: "Automatyczne liczenie stawek motywacyjnych i bonusów dla instruktorów w zależności od frekwencji.",
    highlights: ["konfigurowalne modele premiowe", "eksport do księgowości + integracja z baileo.pl"],
    cta: "Zapisz się na beta-listę",
    url: "/#zapis",
    external: false,
    isNew: true,
  },
];

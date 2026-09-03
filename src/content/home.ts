type ValuePoint = {
  title: string;
  description: string;
};

type SupportPath = {
  label: string;
  title: string;
  description: string;
  highlights: string[];
};

export const homeValuePoints: ValuePoint[] = [
  {
    title: "Lepsze decyzje właścicielskie",
    description:
      "Treści pomagają poukładać ofertę, zespół i komunikację, zanim chaos zacznie kosztować czas i energię.",
  },
  {
    title: "Mniej ręcznej improwizacji",
    description:
      "Zamiast kolejnych obejść i pamiętania wszystkiego w głowie, dostajesz ramy do spokojniejszego prowadzenia szkoły.",
  },
  {
    title: "Rozwój bez udawania, że wszystko jest proste",
    description:
      "Tu nie ma katalogu trików. Są realne napięcia właściciela szkoły i sposoby, żeby zacząć nimi zarządzać mądrzej.",
  },
];

export const supportPaths: SupportPath[] = [
  {
    label: "Porządkowanie wejścia i zapisów",
    title: "Baileo",
    description:
      "Kierunek dla szkół, które chcą uprościć drogę od oferty i grafiku do zapisu.",
    highlights: [
      "Mniej rozjazdu między postem, grafikiem i wiadomościami.",
      "Mniej ręcznego tłumaczenia wyjątków i startów grup.",
    ],
  },
  {
    label: "Wsparcie właściciela",
    title: "Consulting i mentoring",
    description:
      "Praca nad decyzjami, procesami i komunikacją wtedy, gdy sama wiedza to za mało.",
    highlights: [
      "Porządkowanie priorytetów przed dokładaniem kolejnych narzędzi.",
      "Wsparcie w ofercie, zespole i codziennym prowadzeniu szkoły.",
    ],
  },
  {
    label: "Obecność w internecie",
    title: "Tworzenie stron",
    description:
      "Strony dla szkół, instruktorów i marek tanecznych, które mają prowadzić użytkownika do działania.",
    highlights: [
      "Czytelna prezentacja oferty, cennika i ścieżki zapisu.",
      "Strona spójna z energią marki i dobrze wyszukiwalna.",
    ],
  },
];

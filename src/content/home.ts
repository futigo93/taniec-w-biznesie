type ValuePoint = {
  title: string;
  description: string;
};

export type ArticlePreview = {
  title: string;
  description: string;
  category: string;
  readTime: string;
  slug: string;
  audience: "owner" | "instructor" | "dancer";
  topic?: "case-study" | "strategia" | "komunikacja" | "zespol" | "rozwoj";
  external?: string;
  cover?: string;
  featured?: boolean;
};

type SupportPath = {
  label: string;
  title: string;
  description: string;
  highlights: string[];
  cta: string;
  url?: string;
  external?: boolean;
  ctaModal?: boolean;
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

export const articlePreviews: ArticlePreview[] = [
  {
    title: "Jak szkoła tańca przeszła z ręcznie sklejanych raportów do dojrzalszego systemu danych",
    description:
      "Case study o tym, jak duża szkoła uporządkowała dane, raporty i payroll bez zatrzymywania codziennej pracy zespołu.",
    category: "Case study",
    readTime: "17 min",
    slug: "jak-szkola-tanca-przeszla-z-recznie-sklejanych-raportow-do-dojrzalszego-systemu-danych",
    audience: "owner",
    topic: "case-study",
    cover: "/artykuly/okladki/case-study-salsa-libre.webp",
    featured: true,
  },
  {
    title: "Tancerz ≠ instruktor ≠ właściciel",
    description:
      "Trzy role, trzy różne odpowiedzialności i trzy różne pułapki. Dobry tancerz nie staje się automatycznie dobrym instruktorem ani właścicielem.",
    category: "Właściciel",
    readTime: "5 min",
    slug: "tancerz-instruktor-wlasciciel",
    audience: "owner",
    topic: "strategia",
  },
  {
    title: "Instruktor, trener, nauczyciel. Szkoła, studio, akademia, klub.",
    description:
      "Nazwy nie są neutralne. Każde słowo ustawia klientowi obietnicę i wpływa na to, jak szkoła jest odbierana jeszcze przed pierwszym zapisem.",
    category: "Strategia",
    readTime: "5 min",
    slug: "instruktor-trener-nauczyciel",
    audience: "owner",
    topic: "strategia",
    cover: "/artykuly/okladki/nomenklatura_cover.webp",
  },
  {
    title: "15 lat doświadczenia instruktora w 200 zdaniach",
    description:
      "O zarządzaniu oczekiwaniami, procesem nauki i tym, dlaczego dobra szkoła musi umieć tłumaczyć ludziom, w co naprawdę wchodzą.",
    category: "Zespół i proces",
    readTime: "12 min",
    slug: "15-lat-doswiadczenia-instruktora-w-200-zdaniach",
    audience: "owner",
    topic: "zespol",
    cover: "/artykuly/okladki/15-lat-doswiadczenia.webp",
  },
  {
    title: "Wizerunek instruktora tańca - na co to komu?",
    description:
      "O tym, jak komunikacja i obecność instruktora pracują na zaufanie, pozycję szkoły i jakość pierwszego kontaktu z nową osobą.",
    category: "Komunikacja",
    readTime: "9 min",
    slug: "wizerunek-instruktora-tanca-na-co-to-komu",
    audience: "owner",
    topic: "komunikacja",
    cover: "/artykuly/okladki/Wizerunek-instruktora-tanca-na-co-to-komu.webp",
  },
  {
    title: "Wartości w tańcu",
    description:
      "O napięciu między ruchem, rozwojem i kierunkiem. Tekst dla osób, które chcą spojrzeć na taniec głębiej niż przez pryzmat kolejnych figur i warsztatów.",
    category: "Dla tancerzy",
    readTime: "5 min",
    slug: "wartosci-w-tancu",
    audience: "dancer",
    topic: "rozwoj",
    cover: "/artykuly/okladki/Wartosci-w-tancu.webp",
  },
  {
    title: "Instruktor tańca - z wielką mocą wiąże się wielka odpowiedzialność",
    description:
      "O wpływie instruktora na pierwsze doświadczenie kursanta i na to, co ludzie później myślą o całym świecie tańca.",
    category: "Dla instruktorów",
    readTime: "8 min",
    slug: "instruktor-tanca-z-wielka-moca-wiaze-sie-wielka-odpowiedzialnosc",
    audience: "instructor",
    topic: "zespol",
    cover: "/artykuly/okladki/instruktor_tanca_-_z_wielka_moca.webp",
  },
  {
    title: "Po co tancerzowi cele?",
    description:
      "O momencie, w którym samo bycie na parkiecie przestaje wystarczać i pojawia się potrzeba bardziej świadomego kierunku.",
    category: "Dla tancerzy",
    readTime: "5 min",
    slug: "po-co-tancerzowi-cele",
    audience: "dancer",
    topic: "rozwoj",
    cover: "/artykuly/okladki/po_co_tancerzowi_cele.webp",
  },
  {
    title: "Tam, gdzie nam zależy. O pracy z głową w tańcu socialowym",
    description:
      "O treningu mentalnym, presji i tym, dlaczego technika bez pracy z głową często nie wystarcza.",
    category: "Dla tancerzy",
    readTime: "5 min",
    slug: "tam-gdzie-nam-zalezy",
    audience: "dancer",
    topic: "rozwoj",
    cover: "/artykuly/okladki/Tam-gdzie-nam-zalezy.webp",
  },
  {
    title: "Instruktor tańca - twardy zad świeżaka",
    description:
      "O wejściu w rolę instruktora bez mentora, bez bezpiecznego modelu juniora i z koniecznością uczenia się zawodu w biegu.",
    category: "Dla instruktorów",
    readTime: "10 min",
    slug: "instruktor-tanca-twardy-zad-swiezaka",
    audience: "instructor",
    topic: "zespol",
    cover: "/artykuly/okladki/instruktor-tanca-twardy-zad.webp",
  },
  {
    title: "Instruktor tańca - to człowiek z misją (zazwyczaj)",
    description:
      "O odpowiedzialności za wpływ, wzorce i napięcia, które instruktor potrafi wzmacniać albo rozbrajać.",
    category: "Dla instruktorów",
    readTime: "10 min",
    slug: "instruktor-tanca-czlowiek-z-misja",
    audience: "instructor",
    topic: "komunikacja",
    cover: "/artykuly/okladki/instruktor-tanca-czlowiek-z-misja-fb.webp",
  },
  {
    title: "Instruktor tańca - tego nie zrozumiesz (póki nie doświadczysz)",
    description:
      "O tym, że instruktor nie tylko prowadzi zajęcia, ale projektuje doświadczenie, atmosferę i sens całego spotkania z tańcem.",
    category: "Dla instruktorów",
    readTime: "7 min",
    slug: "instruktor-tanca-tego-nie-zrozumiesz",
    audience: "instructor",
    topic: "zespol",
    cover: "/artykuly/okladki/instruktor-tanca-tego-nie-zrozumiesz-fb.webp",
  },
  {
    title: "Przewodnik po widokach grafiku: dopasuj prezentację zajęć do swojej szkoły tańca",
    description:
      "Jak wykorzystać różne widoki grafiku w baileo.pl, aby kursanci łatwiej czytali ofertę i szybciej rezerwowali miejsca.",
    category: "Narzędzia",
    readTime: "15 min",
    slug: "przewodnik-po-widokach-grafiku",
    audience: "owner",
    topic: "komunikacja",
    external: "https://baileo.pl/blog/przewodnik-po-widokach-grafiku",
    cover: "/przewodnik-po-widokach-grafiku-cover.png",
  },
];

export const supportPaths: SupportPath[] = [
  {
    label: "Porządkowanie wejścia i zapisów",
    title: "Baileo",
    description:
      "Jeśli poza treściami potrzebujesz też lepiej poukładanej drogi od oferty i grafiku do zapisu, pokazuję kierunek dla tego fragmentu szkoły.",
    highlights: [
      "Jedno sensowne miejsce zamiast rozjazdu między postem, grafikiem i wiadomościami.",
      "Mniej ręcznego tłumaczenia wyjątków, poziomów i startów grup.",
      "Model wdrożenia jako osobny hub albo warstwa na stronie szkoły.",
    ],
    cta: "Zobacz kierunek Baileo",
    url: "https://baileo.pl",
    external: true,
  },
  {
    label: "Wsparcie właściciela",
    title: "Consulting i mentoring",
    description:
      "Pracuję z właścicielami szkół nad decyzjami, procesami i komunikacją wtedy, gdy sama wiedza to za mało i trzeba przełożyć ją na realia konkretnej szkoły.",
    highlights: [
      "Rozmowa o priorytetach, zanim zaczniesz dokładać kolejne narzędzia i procesy.",
      "Wsparcie w ofercie, zespole, komunikacji i codziennym ogarnianiu szkoły.",
      "Podejście branżowe, nie generyczny consulting dla małego biznesu.",
    ],
    cta: "Umów rozmowę wstępną",
    ctaModal: true,
  },
];

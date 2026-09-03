# Model treści artykułów (MDX) i publikacja z telefonu

Ten dokument opisuje wdrożony schemat po migracji z [docs/cms-content-model-audit-2026-09-02.md](cms-content-model-audit-2026-09-02.md). To jest kontrakt, którego powinien trzymać się każdy nowy artykuł — ręcznie pisany albo generowany przez przyszły skill (np. Google Doc → MDX).

## Gdzie żyje artykuł

Jeden plik: `src/content/artykuly/<slug>.mdx`. Nazwa pliku (bez `.mdx`) = slug w URL (`/artykuly/<slug>`). **To jedyny krok potrzebny do publikacji** — strona artykułu, listing `/artykuly`, sekcja na homepage i `sitemap.xml` czytają ten sam katalog automatycznie (`src/lib/articles.ts`, `getAllArticles()`/`getArticleSlugs()` robią `fs.readdirSync` na tym katalogu). Nie trzeba nigdzie osobno rejestrować nowego slugu.

Publikacja z telefonu: appka GitHub (albo mobilna przeglądarka → github.com) → dodanie nowego pliku w `src/content/artykuly/` (i ewentualnie okładki w `public/artykuly/okladki/`) → commit na `main` → Vercel buduje automatycznie z istniejącej integracji git.

## Kształt pliku

```mdx
export const meta = {
  title: "Tytuł artykułu",
  description: "Opis 1-3 zdania - używany w SEO, na liście i jako podpis pod nagłówkiem.",
  category: "Dla tancerzy",       // wyświetlany chip na liście ORAZ eyebrow nad tytułem
  audience: "dancer",             // "owner" | "instructor" | "dancer"
  cover: "/artykuly/okladki/nazwa-pliku.webp",
  date: "2026-06-01",             // ISO, format YYYY-MM-DD

  // pola opcjonalne:
  topic: "rozwoj",                // "case-study" | "strategia" | "komunikacja" | "zespol" | "rozwoj"
  readTime: "6 min",              // pomiń, żeby wyliczyło się automatycznie z długości tekstu
  author: { name: "...", href: "https://..." }, // domyślnie: Jakub Nowak
  featured: true,                 // wyróżniony artykuł na górze homepage/listingu (tylko jeden naraz ma sens)
  audio: {
    src: "https://.../plik.mp3",  // pełny URL (np. Vercel Blob Storage), nie plik w repo
    description: "Opcjonalny opis pod odtwarzaczem",
  },
};

## Nagłówek sekcji

Zwykły Markdown: akapity, **pogrubienia**, listy, [linki](https://...), obrazki `![alt](/artykuly/inline/plik.webp)`.
```

**Pola wymagane:** `title`, `description`, `category`, `audience`, `cover`, `date`. Jeśli któregoś zabraknie albo plik ma błędną składnię MDX/JSX, **build na Vercelu wysadza się głośno** (błąd wskazuje slug i brakujące pole, albo dokładną linię błędu MDX) i produkcja zostaje na poprzedniej, działającej wersji. To celowe — nigdy cicho zepsuta strona.

`category` pełni podwójną rolę: to zarówno chip na liście `/artykuly`, jak i eyebrow nad tytułem na samej stronie artykułu — jedno pole, jedno miejsce do ustawienia.

## Dostępne komponenty w treści

Zarejestrowane globalnie w [src/mdx-components.tsx](../src/mdx-components.tsx) — używa się ich jak zwykłych tagów wprost w pliku `.mdx`, bez importu.

- **`<MarginNote title="..." note="...">termin</MarginNote>`** — notatka na marginesie (desktop) / modal (mobile). Zasady użycia: [docs/marginnote-guidelines.md](marginnote-guidelines.md).
- **`<Callout>...</Callout>`** — krótka, wyróżniona myśl (box z ikoną).
- **`<Callout title="Nagłówek">- punkt 1\n- punkt 2</Callout>`** — wariant z nagłówkiem i listą "co zapamiętać" (markdown-owa lista wewnątrz renderuje się jako osobne boksy).
- **`<Promo preset="ebook" />`** — gotowy blok promo z rejestru [src/content/promo-presets.ts](../src/content/promo-presets.ts) (`ebook`, `instruktor-series`, `workbook`, `baileo-suite`). Dodanie nowego presetu = nowy wpis w tym pliku.
- **`<Promo items={[{ title, description, href, image }]} />`** — w pełni customowy blok promo (np. link do "następnego artykułu z serii"), gdy gotowy preset nie pasuje.
- **`<ArticleSection label="1. Otwarcie">...</ArticleSection>`** — opcjonalny numerowany układ sekcji w stylu case-study (chip kroku + własny scope dla `MarginNote`). Używać tylko, gdy artykuł ma sens jako numerowana historia — zwykłe artykuły używają zwykłych `##` nagłówków.
- **`<MatrixCard title="..." description="..." />`** — pojedyncza karta w siatce porównawczej/macierzy (do własnego układu grid w JSX, jeśli artykuł tego wymaga — patrz `instruktor-tanca-tego-nie-zrozumiesz.mdx` jako wzór).

Zwykłe `##`/`###` nagłówki, akapity, listy, `**pogrubienia**`, `> cytaty` i `![obrazki](url)` są stylowane automatycznie i jednolicie dla wszystkich artykułów — nie trzeba (i nie należy) dodawać własnych klas Tailwind w treści.

## Audio

Plik audio hostowany zewnętrznie (np. Vercel Blob Storage), nie w repo. `meta.audio.src` wystarczy — odtwarzacz (`ArticleAudioPlayer`) wstawia się automatycznie zaraz pod nagłówkiem, bez potrzeby ręcznego osadzania w treści.

## Artykuły zewnętrzne (linki do partnerów)

Jeśli "artykuł" to w rzeczywistości link do zewnętrznego bloga (np. baileo.pl) bez własnej strony — to nie jest plik `.mdx`, tylko wpis w `EXTERNAL_ARTICLES` w [src/lib/articles.ts](../src/lib/articles.ts). To rzadki przypadek, nie część codziennego flow publikacji z telefonu.

## Migracja historyczna

12 artykułów sprzed wdrożenia zostało przeniesionych 1:1 (a miejscami odrobinę uporządkowanych — ujednolicone nagłówki sekcji, zamiana ręcznie klejonych boxów na `Callout`, realne daty ISO zamiast tekstu) z osobnych `page.tsx` do tego formatu. Stare foldery `src/app/artykuly/<slug>/` zostały usunięte na rzecz jednej trasy `src/app/artykuly/[slug]/page.tsx`.

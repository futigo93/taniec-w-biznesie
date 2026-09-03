# Model treści artykułów (MDX) i publikacja z telefonu

Ten dokument opisuje wdrożony schemat po migracji z [docs/cms-content-model-audit-2026-09-02.md](cms-content-model-audit-2026-09-02.md). To jest kontrakt, którego powinien trzymać się każdy nowy artykuł — ręcznie pisany albo generowany przez przyszły skill (np. Google Doc → MDX).

## Gdzie żyje artykuł

Jeden plik: `src/content/artykuly/<slug>.mdx`. Nazwa pliku (bez `.mdx`) = slug w URL (`/artykuly/<slug>`). **To jedyny krok potrzebny do publikacji** — strona artykułu, listing `/artykuly`, sekcja na homepage i `sitemap.xml` czytają ten sam katalog automatycznie (`src/lib/articles.ts`, `getAllArticles()`/`getArticleSlugs()` robią `fs.readdirSync` na tym katalogu). Nie trzeba nigdzie osobno rejestrować nowego slugu.

Publikacja z telefonu — dwie równoległe ścieżki, ten sam plik na końcu:

1. **Appka GitHub** (albo mobilna przeglądarka → github.com): dodanie nowego pliku w `src/content/artykuly/` (i ewentualnie okładki w `public/artykuly/okladki/`) → commit na `main` → Vercel buduje automatycznie. Zawsze działa, zero setupu, wymaga ręcznego pisania YAML/MDX.
2. **Panel `/keystatic`** (patrz sekcja niżej): formularz zamiast pliku — wypełniasz pola, wstawiasz `MarginNote`/`Callout`/`Promo` przyciskiem w edytorze, zapisujesz → Keystatic sam robi dokładnie taki sam commit na `main`.

## Kształt pliku

Metadane to **YAML frontmatter** (`---`), nie eksport JS — dzięki temu ten sam plik da się edytować zarówno ręcznie, jak i przez formularz Keystatic (`/keystatic`, patrz niżej). Kompilacja robi to `remark-frontmatter` + `remark-mdx-frontmatter` skonfigurowane w `next.config.ts`, które wystawiają dane jako `export const frontmatter` czytany przez `src/lib/articles.ts`.

```mdx
---
title: "Tytuł artykułu"
description: "Opis 1-3 zdania - używany w SEO, na liście i jako podpis pod nagłówkiem."
category: "Dla tancerzy"        # wyświetlany chip na liście ORAZ eyebrow nad tytułem
audience: "dancer"              # "owner" | "instructor" | "dancer"
cover: "/artykuly/okladki/nazwa-pliku.webp"
date: "2026-06-01"               # ISO, format YYYY-MM-DD

# pola opcjonalne:
topic: "rozwoj"                  # "case-study" | "strategia" | "komunikacja" | "zespol" | "rozwoj"
readTime: "6 min"                # pomiń, żeby wyliczyło się automatycznie z długości tekstu
author:                          # domyślnie: Jakub Nowak
  name: "..."
  href: "https://..."
featured: true                   # wyróżniony artykuł na górze homepage/listingu (tylko jeden naraz ma sens)
audio:
  src: "https://.../plik.mp3"    # pełny URL (np. Vercel Blob Storage), nie plik w repo
  description: "Opcjonalny opis pod odtwarzaczem"
---

## Nagłówek sekcji

Zwykły Markdown: akapity, **pogrubienia**, listy, [linki](https://...), obrazki `![alt](/artykuly/inline/plik.webp)`.
```

**Pola wymagane:** `title`, `description`, `category`, `audience`, `cover`, `date`. Jeśli któregoś zabraknie albo plik ma błędną składnię MDX/JSX, **build na Vercelu wysadza się głośno** (błąd wskazuje slug i brakujące pole, albo dokładną linię błędu MDX) i produkcja zostaje na poprzedniej, działającej wersji. To celowe — nigdy cicho zepsuta strona.

`category` pełni podwójną rolę: to zarówno chip na liście `/artykuly`, jak i eyebrow nad tytułem na samej stronie artykułu — jedno pole, jedno miejsce do ustawienia.

## Dostępne komponenty w treści

Zarejestrowane globalnie w [src/mdx-components.tsx](../src/mdx-components.tsx) — używa się ich jak zwykłych tagów wprost w pliku `.mdx`, bez importu.

- **`<MarginNote title="..." note="...">termin</MarginNote>`** — notatka na marginesie (desktop) / modal (mobile). Zasady użycia: [docs/marginnote-guidelines.md](marginnote-guidelines.md). *Wstawiana przyciskiem w edytorze `/keystatic`.*
- **`<Callout>...</Callout>`** — krótka, wyróżniona myśl (box z ikoną). *Wstawiana przyciskiem w edytorze `/keystatic`.*
- **`<Callout title="Nagłówek">- punkt 1\n- punkt 2</Callout>`** — wariant z nagłówkiem i listą "co zapamiętać" (markdown-owa lista wewnątrz renderuje się jako osobne boksy).
- **`<Promo preset="ebook" />`** — gotowy blok promo z rejestru [src/content/promo-presets.ts](../src/content/promo-presets.ts) (`ebook`, `instruktor-series`, `workbook`, `baileo-suite`). Dodanie nowego presetu = nowy wpis w tym pliku. *Wstawiany przyciskiem w edytorze `/keystatic`.*
- **`<Promo items={[{ title, description, href, image }]} />`** — w pełni customowy blok promo (np. link do "następnego artykułu z serii"), gdy gotowy preset nie pasuje. *Tylko ręcznie w pliku — nie ma toolbar-owego odpowiednika w Keystatic (na razie).*
- **`<ArticleSection label="1. Otwarcie">...</ArticleSection>`** — opcjonalny numerowany układ sekcji w stylu case-study (chip kroku + własny scope dla `MarginNote`). Używać tylko, gdy artykuł ma sens jako numerowana historia — zwykłe artykuły używają zwykłych `##` nagłówków. *Tylko ręcznie w pliku — nie edytować taki artykuł przez `/keystatic`.*
- **`<MatrixCard title="..." description="..." />`** — pojedyncza karta w siatce porównawczej/macierzy (do własnego układu grid w JSX, jeśli artykuł tego wymaga — patrz `instruktor-tanca-tego-nie-zrozumiesz.mdx` jako wzór). *Tylko ręcznie w pliku — nie edytować taki artykuł przez `/keystatic`.*

Zwykłe `##`/`###` nagłówki, akapity, listy, `**pogrubienia**`, `> cytaty` i `![obrazki](url)` są stylowane automatycznie i jednolicie dla wszystkich artykułów — nie trzeba (i nie należy) dodawać własnych klas Tailwind w treści.

## Audio

Plik audio hostowany zewnętrznie (np. Vercel Blob Storage), nie w repo. `audio.src` we frontmatterze wystarczy — odtwarzacz (`ArticleAudioPlayer`) wstawia się automatycznie zaraz pod nagłówkiem, bez potrzeby ręcznego osadzania w treści.

## Panel `/keystatic`

Lekki formularz nad tymi samymi plikami (Keystatic, `keystatic.config.ts` w roocie repo). Pola metadanych 1:1 z frontmatterem opisanym wyżej (select dla `audience`/`topic`, przełącznik dla opcjonalnego `author`/`audio`, upload okładki wprost do `public/artykuly/okladki/`), edytor treści wstawia `MarginNote`/`Callout`/`Promo` przyciskiem zamiast ręcznego tagowania.

**Stan obecny: tryb lokalny (`storage: { kind: "local" }`).** Działa tylko na `npm run dev` na Twoim komputerze i zapisuje bezpośrednio na dysku (bez commitowania do gita) — to etap do testowania schematu formularza, zanim przejdziemy na tryb GitHub.

**Żeby działało z telefonu / na żywej stronie, zostały 2 kroki, które musisz zrobić Ty (ręcznie, w przeglądarce):**

1. W `keystatic.config.ts` zmienić `storage` na:
   ```ts
   const storage = {
     kind: "github",
     repo: "futigo93/taniec-w-biznesie",
   } as const;
   ```
2. `npm run dev`, wejść na `http://localhost:3000/keystatic`, zalogować się w przeglądarce na konto `futigo93` (właściciel repo) i przejść kreator "Connect to GitHub" — Keystatic sam zakłada dedykowaną GitHub App i zapisuje do lokalnego `.env` (nie trafia do gita): `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`, `NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG`.
3. Skopiować te same 4 wartości do zmiennych środowiskowych projektu na Vercelu — inaczej `/keystatic` na produkcji się nie zaloguje.
4. Jeśli GitHub zgłosi błąd redirect URI dla adresu produkcyjnego: wejść na `https://github.com/settings/apps/<slug-aplikacji>` i dopisać tam callback URL produkcyjny.

Zapis w formularzu commituje **od razu na `main`** (bez etapu review/PR) — tak samo jak dziś edycja pliku przez appkę GitHub.

**Znane ograniczenia:**
- `instruktor-tanca-tego-nie-zrozumiesz.mdx` (macierz umiejętności, ręczny JSX) nie ma zarejestrowanego komponentu w Keystatic — nie otwierać go w tym edytorze, dopóki nie ma pewności, że nieznany JSX nie zniknie przy zapisie. Do jego edycji nadal używać appki GitHub / edytora kodu.
- `/keystatic` renderuje się bez nagłówka/stopki strony (`src/components/layout/site-chrome.tsx` wyłącza je dla tej ścieżki) — to pełnoekranowa aplikacja admina, nie podstrona serwisu.
- Custom `<Promo items={[...]}>` (np. "następny artykuł z serii") nie ma na razie odpowiednika w toolbarze — takie wstawki nadal wymagają edycji pliku ręcznie.

## Artykuły zewnętrzne (linki do partnerów)

Jeśli "artykuł" to w rzeczywistości link do zewnętrznego bloga (np. baileo.pl) bez własnej strony — to nie jest plik `.mdx`, tylko wpis w `EXTERNAL_ARTICLES` w [src/lib/articles.ts](../src/lib/articles.ts). To rzadki przypadek, nie część codziennego flow publikacji z telefonu.

## Migracja historyczna

12 artykułów sprzed wdrożenia zostało przeniesionych 1:1 (a miejscami odrobinę uporządkowanych — ujednolicone nagłówki sekcji, zamiana ręcznie klejonych boxów na `Callout`, realne daty ISO zamiast tekstu) z osobnych `page.tsx` do tego formatu. Stare foldery `src/app/artykuly/<slug>/` zostały usunięte na rzecz jednej trasy `src/app/artykuly/[slug]/page.tsx`.

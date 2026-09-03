# Audyt modelu treści artykułów i opcje lekkiego CMS-a

Data: 2026-09-02
Cel: przygotować grunt pod wdrożenie lekkiego, darmowego CMS-a git-based (edycja → push do GitHub → Vercel buduje automatycznie), zaczynając od publikacji artykułów. Ten dokument to audyt stanu obecnego + porównanie opcji. Migracja i implementacja to kolejny krok, po wyborze kierunku.

## 1. Jak wygląda dziś model treści

Każdy artykuł to osobny plik React/TSX pod `src/app/artykuly/<slug>/page.tsx` (12 artykułów + `page.tsx` listingu). To nie jest content w sensie CMS-owym — to kod strony z treścią zapisaną inline w JSX, ręcznie stylowaną przy każdym akapicie (`className="text-base leading-8 text-foreground/85"` powtórzone dziesiątki razy w każdym pliku).

### 1.1 Trzy niezależne źródła prawdy na artykuł

Żeby dodać/zmienić artykuł, dziś trzeba ręcznie zsynchronizować:

1. **`export const metadata` w `page.tsx`** — SEO: `title`, `description`, `alternates.canonical`, `openGraph` (w tym obrazek 1200x630), `twitter`.
2. **`articlePreviews` w [src/content/home.ts](../src/content/home.ts)** — osobny wpis: `title`, `description`, `category`, `readTime`, `slug`, `audience` (`owner|instructor|dancer`), `topic`, `cover`, opcjonalnie `featured`/`external`. Ten sam obiekt napędza i sekcję na homepage, i listing `/artykuly` (z filtrowaniem po `audience`).
3. **`articleRoutes` w [src/app/sitemap.ts](../src/app/sitemap.ts)** — ręcznie wpisana lista ścieżek dla sitemapy.

Tytuł i opis są więc duplikowane (i już dziś potrafią się rozjechać — np. `description` w metadanych vs. w `articlePreviews` bywają innym tekstem). To pierwsza rzecz, którą unifikacja modelu treści powinna wyeliminować: **jedno źródło prawdy per artykuł**, z którego generują się i strona, i listing, i sitemapa.

### 1.2 Nagłówek artykułu — `ArticleHero`

Wspólny, ustandaryzowany komponent ([article-hero.tsx](../src/components/articles/article-hero.tsx)). Pola: `eyebrow` (kategoria), `title`, `description`, `path`, `imageSrc`/`imageAlt` (okładka), `authorName`, opcjonalny `authorHref` (link do zewnętrznego autora-gościa, np. Magda Kochmańska → jej Canva site), `date` (wolny tekst, np. `"30 kwietnia 2026"` — nie prawdziwy `Date`), opcjonalny `readTime`. To jest dobrze wydzielony i gotowy pod frontmatter 1:1.

### 1.3 Elementy w treści artykułu — stan bardzo nierówny

| Element | Status | Gdzie |
|---|---|---|
| Akapity, `<strong>`, listy `<ul><li>` | Ad hoc w każdym pliku, ręcznie powtarzane klasy Tailwind | wszystkie |
| Nagłówki sekcji | **Niespójne**: raw `<h2>` w części artykułów, lokalnie zdefiniowany `SectionSubheading` (renderujący `<h3>`!) kopiowany do 5 różnych plików w innej wersji | 5 z 12 plików |
| `MarginNote` (notatki na marginesie/glosariusz) | Wspólny, zaawansowany komponent ([margin-note.tsx](../src/components/articles/margin-note.tsx)) — desktop: dymek na marginesie z linią SVG, mobile: modal. Ma nawet własne wytyczne redakcyjne ([marginnote-guidelines.md](marginnote-guidelines.md)) | tylko case study |
| `InlineArticlePromo` | Wspólny komponent — losowany ważony blok cross-promo (ebook / inny artykuł / produkt zewnętrzny) wstawiany w środek tekstu | większość artykułów |
| „Callout" z ikoną (Lightbulb) | **Brak komponentu** — w każdym miejscu ręcznie sklejony `<div>` z obwódką, gradientem i ikoną z `lucide-react`, kopiowany i lekko modyfikowany za każdym razem | 2 artykuły, kilka wystąpień |
| `ArticleAudioPlayer` | Wspólny komponent (`"use client"`, pełny player: play/pauza, seek, prędkość, głośność). Plik audio hostowany zewnętrznie na Vercel Blob Storage (`*.public.blob.vercel-storage.com`), nie w repo | 1 artykuł |
| `ArticleSection` + `JourneyMarker` | Lokalnie zdefiniowany wrapper sekcji z numerowanym krokiem (`"1. Otwarcie"`, `"2. Stan wyjścia"`...) + sticky wskaźnik postępu | tylko case study |
| `MatrixCard` | Lokalna mini-siatka porównawcza, zdefiniowana raz i użyta raz | 1 artykuł |
| Dodatkowe `<Image>` w treści (poza okładką) | Ad hoc | 1 artykuł |
| `FacebookWidgets` | Wspólny, wpięty automatycznie w `ArticleHero` (udostępnianie/komentarze FB) | wszystkie, przez hero |

**Wniosek:** realnie ustandaryzowane i gotowe pod CMS są tylko: hero, `MarginNote`, `InlineArticlePromo`, `ArticleAudioPlayer`. Reszta (nagłówki sekcji, callouty, numerowane sekcje case-study, karty porównawcze) to bespoke JSX bez jednego kształtu — to jest do zunifikowania **przed** albo **w trakcie** wprowadzania CMS-a, bo CMS potrzebuje skończonego zestawu "bloków treści", a nie nieskończonej dowolności JSX.

### 1.4 Audio — jak to działa dziś

Brak plików audio w repo (`public/`) — plik mp3 leży na Vercel Blob Storage i jest linkowany po pełnym URL w `src`. To dobry wzorzec do utrzymania przy CMS-ie (assets poza gitem, żeby nie pompować repo binarkami) — trzeba tylko zdecydować, gdzie CMS będzie wgrywał nowe pliki audio (Vercel Blob ma proste REST API i darmowy tier).

## 2. Co to oznacza dla wdrożenia CMS-a

Żeby wprowadzić lekki CMS git-based, potrzebny jest **jeden ujednolicony content model**, mniej więcej:

```
---
title: ...
description: ...
slug: ...
category: "Dla właściciela" | "Strategia" | ...
audience: owner | instructor | dancer
topic: case-study | strategia | komunikacja | zespol | rozwoj
readTime: "5 min"
date: 2026-04-30
cover: /artykuly/okladki/...
author: { name, href? }
audio: { src, description? }   # opcjonalne
featured: boolean
external: url                  # dla artykułów-linków (np. przewodnik na baileo.pl)
---

Treść w Markdown/MDX, z ograniczonym zestawem "shortcode'ów":
- <MarginNote title="..." note="...">termin</MarginNote>
- <Callout icon="lightbulb">...</Callout>
- <Promo items={[...]} />
- <Section label="2. Stan wyjścia">...</Section>  (tylko dla case-study, z numeracją)
```

Ten frontmatter zastępuje jednym zapisem wszystkie 3 dzisiejsze źródła prawdy (metadata SEO, `articlePreviews`, sitemap) — strona, listing i sitemapa powinny go czytać z jednego miejsca.

Elementy do jednorazowego uporządkowania przed migracją:
- ujednolicić nagłówki sekcji (jeden komponent, jeden poziom — `h2`),
- zamienić ręcznie klejone callouty na jeden komponent `Callout`,
- zdecydować, czy `ArticleSection`/`JourneyMarker` (numerowane kroki) to unikalna cecha case-study, czy ma być dostępna dla każdego artykułu jako opcjonalny tryb.

Migracja 12 istniejących artykułów do takiego modelu jest wykonalna 1:1 (a miejscami czystsza niż oryginał, bo usunie duplikaty i ujednolici nagłówki) — każdy plik trzeba przejść ręcznie/pół-automatycznie, bo treść i formatowanie (pogrubienia, cudzysłowy, linki) trzeba przenieść z JSX do Markdown/MDX.

## 3. Opcje lekkich, darmowych CMS-ów (git-based, Next.js + Vercel + GitHub)

Zakładam scenariusz z pytania: CMS ma **pisać pliki treści do repo (Markdown/MDX + frontmatter) i pushować do GitHub**, co triggeruje istniejący auto-deploy Vercela — bez własnej bazy danych, bez miesięcznego rachunku.

| Opcja | Jak działa | Koszt | UI edycji | Dopasowanie do MDX/customowych komponentów (MarginNote, Callout, Promo) | Nakład wdrożenia |
|---|---|---|---|---|---|
| **Keystatic** | Wbudowuje się jako trasa w samą appkę Next.js (App Router), czyta/pisze pliki (Markdown/MDX lub JSON) bezpośrednio do repo przez GitHub API. Tryb „local" (bez logowania, do pracy solo) albo „GitHub mode" (OAuth App, dla wielu edytorów). | Darmowy, open source, brak zewnętrznego hostingu | Solidny, prosty edytor treści + pola strukturalne (select, checkbox, tablice) | Bardzo dobre — pola `content` z MDX pozwalają rejestrować własne komponenty jako wstawki w edytorze | Niski–średni. Najmniej „ruchomych części" z całej listy |
| **TinaCMS** | Podobnie git-based, ale z naciskiem na **wizualną edycję na żywo** (edytujesz na renderowanej stronie). Rdzeń open source; TinaCloud (opcjonalna, darmowy tier) daje auth i media library bez własnego backendu auth. | Darmowy self-hosted / darmowy tier Cloud dla małej skali | Najlepszy UX edycji spośród wymienionych (WYSIWYG na realnym layoutcie) | Dobre wsparcie „rich-text shortcodes" dla customowych komponentów, ale konfiguracja mapowania bywa cięższa niż w Keystatic | Średni |
| **Decap CMS** (dawniej Netlify CMS) / **Sveltia CMS** (nowocześniejszy fork) | Osobny panel `/admin`, edycja Markdown+frontmatter, commit przez GitHub API. Wymaga małego serwisu OAuth (można postawić jako 1 funkcję na Vercelu) | Darmowy | Klasyczny formularz + edytor Markdown (mniej „live preview" niż Tina) | Średnie — customowe komponenty trzeba ręcznie podłączać jako „widgety", mniej naturalne dla MDX niż Keystatic/Tina | Średni (dodatkowy serwis OAuth) |
| **Brak CMS — same pliki MDX + frontmatter** | Artykuł = plik `.mdx` w repo, edytowany lokalnie/w edytorze GitHuba, commit = publikacja | Darmowy, zero nowych zależności | Brak UI — edycja w edytorze tekstu/PR | Pełna kontrola, bo to Ty piszesz JSX/MDX bez ograniczeń narzucanych przez CMS | Najniższy — to właściwie tylko krok „ujednolicenie modelu", bez dokładania narzędzia |

### Rekomendacja robocza

**Decyzja (2026-09-02): jedynym publikującym pozostaje właściciel repo** — to zawęża wybór:

- **Keystatic w trybie lokalnym** — rekomendacja domyślna. Żyje wewnątrz istniejącej apki Next.js/Vercel, zero dodatkowego hostingu/serwisu OAuth, działa od razu bez logowania (bo edytuje tylko Ty, lokalnie, i commitujesz sam). Panel `/keystatic` daje wygodny formularz + pola strukturalne (select dla `audience`/`topic`, tablice dla `Promo.items`) zamiast pisania frontmatter ręcznie, a i tak zapisuje zwykłe pliki MDX do repo — więc w każdej chwili można te pliki edytować też ręcznie w edytorze kodu.
- **Same pliki MDX bez żadnego CMS-owego UI** — realna alternatywa, jeśli w praktyce i tak wygodniej Ci pisać artykuł w edytorze kodu/Markdown niż wypełniać formularz. Wtedy cała robota to tylko ujednolicenie modelu z sekcji 2 (frontmatter + komponenty), bez dokładania narzędzia. Można zacząć od tego wariantu i dołożyć Keystatic później „za darmo" — bo to tylko UI nad tymi samymi plikami MDX, nie zmienia formatu treści.

TinaCMS i Decap/Sveltia odpadają — ich przewaga (UX dla wielu/nietechnicznych edytorów, live-preview) nie ma tu znaczenia, a niosą większy koszt utrzymania (Tina: konfiguracja mapowania rich-text; Decap/Sveltia: osobny serwis OAuth).

## 4. Następne kroki (do decyzji)

1. Wybór narzędzia (patrz sekcja 3).
2. Zaprojektowanie finalnego schematu frontmatter + zestawu komponentów MDX (`MarginNote`, `Callout`, `Promo`, `AudioEmbed`, opcjonalnie `Section`/kroki).
3. Ujednolicenie istniejących artykułów do tego schematu (migracja 1:1, przy okazji sprzątająca duplikaty nagłówków/calloutów).
4. Przepięcie `articlePreviews`, `sitemap.ts` i metadanych SEO tak, by czytały z jednego źródła (plików treści), zamiast osobnych list.

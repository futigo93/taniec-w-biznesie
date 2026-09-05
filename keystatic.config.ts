import { config, fields, collection } from "@keystatic/core";
import { wrapper, inline, block } from "@keystatic/core/content-components";

// Local storage while wiring this up (`npm run dev` -> /keystatic works with
// zero setup). Switch to GitHub storage mode once the GitHub App is
// connected — see docs/artykuly-mdx-content-model.md.
const storage = {
  kind: "github",
  repo: "futigo93/taniec-w-biznesie",
} as const;

export default config({
  storage,
  collections: {
    artykuly: collection({
      label: "Artykuły",
      path: "src/content/artykuly/*",
      format: { contentField: "content" },
      slugField: "title",
      schema: {
        title: fields.slug({
          name: { label: "Tytuł artykułu", validation: { isRequired: true } },
        }),
        description: fields.text({
          label: "Opis (SEO + karta na liście)",
          multiline: true,
          validation: { isRequired: true },
        }),
        category: fields.text({
          label: "Kategoria (chip na liście + eyebrow nad tytułem)",
          validation: { isRequired: true },
        }),
        audience: fields.select({
          label: "Dla kogo",
          options: [
            { label: "Właściciel / managerka", value: "owner" },
            { label: "Instruktor / instruktorka", value: "instructor" },
            { label: "Tancerz / tancerka", value: "dancer" },
          ],
          defaultValue: "owner",
        }),
        topic: fields.select({
          label: "Temat (opcjonalnie)",
          options: [
            { label: "— brak —", value: "" },
            { label: "Case study", value: "case-study" },
            { label: "Strategia", value: "strategia" },
            { label: "Komunikacja", value: "komunikacja" },
            { label: "Zespół", value: "zespol" },
            { label: "Rozwój", value: "rozwoj" },
          ],
          defaultValue: "",
        }),
        cover: fields.image({
          label: "Okładka",
          directory: "public/artykuly/okladki",
          publicPath: "/artykuly/okladki/",
          validation: { isRequired: true },
        }),
        date: fields.date({
          label: "Data publikacji",
          defaultValue: { kind: "today" },
          validation: { isRequired: true },
        }),
        readTime: fields.text({
          label: "Czas czytania (puste = wyliczy się automatycznie)",
        }),
        featured: fields.checkbox({
          label: "Wyróżniony (góra listy i homepage)",
          defaultValue: false,
        }),
        // Plain objects, not fields.conditional — conditional fields serialize
        // as Keystatic's own {discriminant, value} wrapper, which doesn't match
        // the plain nested YAML our existing files already use. Fields inside
        // are left optional: blank name/src = "not set" (see src/lib/articles.ts).
        author: fields.object({
          name: fields.text({ label: "Imię i nazwisko (puste = domyślny: Jakub Nowak)" }),
          href: fields.url({ label: "Link (opcjonalnie)" }),
        }),
        audio: fields.object({
          src: fields.url({ label: "URL pliku audio, mp3 (puste = brak audio)" }),
          description: fields.text({ label: "Opis pod odtwarzaczem (opcjonalnie)" }),
        }),
        content: fields.mdx({
          label: "Treść",
          components: {
            // Rozpoznawane, "toolbar-owe" komponenty (patrz docs/artykuly-mdx-content-model.md).
            // Macierz umiejętności (ręczny grid JSX w jednym artykule) to jedyny
            // celowo niezarejestrowany przypadek — zbyt jednostkowy, żeby się opłacało
            // go modelować; ten artykuł nadal edytuje się bezpośrednio jako plik.
            // `inline()` components in Keystatic are self-closing and cannot
            // have real JSX children (no `fields.child` support there — that
            // only works inside `block`/`wrapper`), so the anchor text is a
            // plain `term` prop; MarginNote itself accepts either `term` or
            // real children (see src/components/articles/margin-note.tsx).
            MarginNote: inline({
              label: "Notatka na marginesie",
              schema: {
                term: fields.text({
                  label: "Termin objęty notatką",
                  validation: { isRequired: true },
                }),
                title: fields.text({
                  label: "Tytuł notatki",
                  validation: { isRequired: true },
                }),
                note: fields.text({
                  label: "Treść notatki",
                  multiline: true,
                  validation: { isRequired: true },
                }),
              },
            }),
            Callout: wrapper({
              label: "Wyróżniona myśl (Callout)",
              schema: {
                title: fields.text({
                  label: "Nagłówek (zostaw puste dla prostego wariantu)",
                }),
              },
            }),
            ArticleSection: wrapper({
              label: "Numerowana sekcja (case study)",
              description: "Tylko do artykułów w stylu case-study z numerowanymi krokami — buduje też spis treści.",
              schema: {
                label: fields.text({
                  label: "Etykieta sekcji (np. „2. Stan wyjścia: co naprawdę zaczęło boleć”)",
                  validation: { isRequired: true },
                }),
              },
            }),
            Promo: block({
              label: "Blok promo",
              schema: {
                preset: fields.select({
                  label: "Gotowy zestaw (zostaw '— custom —' i wypełnij pozycje niżej dla własnego zestawu)",
                  options: [
                    { label: "— custom (patrz pozycje niżej) —", value: "" },
                    { label: "Ebook", value: "ebook" },
                    { label: "Seria o instruktorach", value: "instruktor-series" },
                    { label: "Workbook", value: "workbook" },
                    { label: "Zestaw Baileo", value: "baileo-suite" },
                  ],
                  defaultValue: "",
                }),
                label: fields.text({ label: "Etykieta nad blokiem (np. „Polecane”)" }),
                ctaLabel: fields.text({ label: "Tekst przycisku (np. „Sprawdź”)" }),
                items: fields.array(
                  fields.object({
                    title: fields.text({ label: "Tytuł" }),
                    description: fields.text({ label: "Opis", multiline: true }),
                    href: fields.text({ label: "Link" }),
                    image: fields.text({ label: "Obrazek (ścieżka lub URL)" }),
                  }),
                  { label: "Custom pozycje (gdy preset jest pusty)" },
                ),
              },
            }),
          },
        }),
      },
    }),
  },
});

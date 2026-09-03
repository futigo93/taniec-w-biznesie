import { config, fields, collection } from "@keystatic/core";
import { wrapper, inline, block } from "@keystatic/core/content-components";

// Local storage while wiring this up (`npm run dev` -> /keystatic works with
// zero setup). Switch to GitHub storage mode once the GitHub App is
// connected — see docs/artykuly-mdx-content-model.md.
const storage = { kind: "local" } as const;

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
        author: fields.conditional(
          fields.checkbox({ label: "Inny autor niż domyślny (Jakub Nowak)?", defaultValue: false }),
          {
            false: fields.empty(),
            true: fields.object({
              name: fields.text({ label: "Imię i nazwisko", validation: { isRequired: true } }),
              href: fields.url({ label: "Link (opcjonalnie)" }),
            }),
          },
        ),
        audio: fields.conditional(
          fields.checkbox({ label: "Ma wersję audio?", defaultValue: false }),
          {
            false: fields.empty(),
            true: fields.object({
              src: fields.url({ label: "URL pliku audio (mp3)", validation: { isRequired: true } }),
              description: fields.text({ label: "Opis pod odtwarzaczem (opcjonalnie)" }),
            }),
          },
        ),
        content: fields.mdx({
          label: "Treść",
          components: {
            // Rozpoznawane, "toolbar-owe" komponenty (patrz docs/artykuly-mdx-content-model.md).
            // Rzadkie, w pełni customowe bloki JSX (macierz umiejętności, ArticleSection)
            // celowo NIE są tu zarejestrowane — taki artykuł edytuje się bezpośrednio
            // jako plik, nie przez ten formularz.
            MarginNote: inline({
              label: "Notatka na marginesie",
              schema: {
                term: fields.child({ kind: "inline", placeholder: "Termin objęty notatką" }),
                title: fields.text({ label: "Tytuł notatki", validation: { isRequired: true } }),
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
                title: fields.text({ label: "Nagłówek (zostaw puste dla prostego wariantu)" }),
              },
            }),
            Promo: block({
              label: "Blok promo",
              schema: {
                preset: fields.select({
                  label: "Gotowy zestaw",
                  options: [
                    { label: "Ebook", value: "ebook" },
                    { label: "Seria o instruktorach", value: "instruktor-series" },
                    { label: "Workbook", value: "workbook" },
                    { label: "Zestaw Baileo", value: "baileo-suite" },
                  ],
                  defaultValue: "ebook",
                }),
              },
            }),
          },
        }),
      },
    }),
  },
});

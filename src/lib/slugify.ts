const POLISH_DIACRITICS: Record<string, string> = {
  ą: "a",
  ć: "c",
  ę: "e",
  ł: "l",
  ń: "n",
  ó: "o",
  ś: "s",
  ź: "z",
  ż: "z",
};

/**
 * Turns an ArticleSection `label` (e.g. "2. Stan wyjścia: co naprawdę
 * zaczęło boleć") into a URL-safe anchor id ("2-stan-wyjscia-co-naprawde-zaczelo-bolec").
 * Used both for the section's own `id` and for the table-of-contents link
 * pointing at it, so both must derive the anchor identically.
 */
export function slugifyLabel(label: string): string {
  return label
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (char) => POLISH_DIACRITICS[char] ?? char)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

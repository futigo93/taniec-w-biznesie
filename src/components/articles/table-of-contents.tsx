import { slugifyLabel } from "@/lib/slugify";

type TableOfContentsProps = {
  labels: string[];
};

/**
 * Auto-built table of contents for ArticleSection-based (case-study style)
 * articles — one link per section label, jumping to that section's anchor
 * (see ArticleSection's `id`, derived from the same label via slugifyLabel).
 * Renders nothing for regular articles (no ArticleSection labels found).
 * Collapsed by default; native <details> needs no client JS.
 */
export function TableOfContents({ labels }: TableOfContentsProps) {
  if (labels.length === 0) return null;

  return (
    <details className="surface-card group rounded-[1.5rem] p-4 md:p-5">
      <summary className="cursor-pointer text-sm font-semibold uppercase tracking-[0.18em] text-primary/80 [&::-webkit-details-marker]:hidden">
        Spis treści
      </summary>
      <ol className="mt-3 space-y-2 text-sm leading-6">
        {labels.map((label) => (
          <li key={label}>
            <a href={`#${slugifyLabel(label)}`} className="link-accent">
              {label}
            </a>
          </li>
        ))}
      </ol>
    </details>
  );
}

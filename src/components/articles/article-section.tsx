import type { ReactNode } from "react";
import { JourneyMarker } from "@/components/journey-marker";
import { slugifyLabel } from "@/lib/slugify";

type ArticleSectionProps = {
  label: string;
  children: ReactNode;
};

/**
 * Numbered, case-study-style section wrapper: renders a JourneyMarker step
 * chip and scopes its children for MarginNote positioning. Optional — use
 * only for articles that want this numbered layout (today: the one case
 * study). Promoted from a file-local component so any article can use it.
 *
 * The `id` (derived from `label`, same as TableOfContents' anchors —
 * see src/lib/slugify.ts) is what the auto-generated table of contents
 * jumps to.
 */
export function ArticleSection({ label, children }: ArticleSectionProps) {
  return (
    <section
      id={slugifyLabel(label)}
      className="surface-section relative scroll-mt-24 overflow-visible rounded-[2rem] p-6 shadow-[0_20px_60px_rgba(49,34,24,0.08)] md:scroll-mt-28"
    >
      <JourneyMarker label={label} />
      <h2 className="sr-only">{label}</h2>
      <div className="text-body relative space-y-4 text-base leading-8 xl:min-h-[8rem]" data-margin-note-scope>
        {children}
      </div>
    </section>
  );
}

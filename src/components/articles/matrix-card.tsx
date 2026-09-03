type MatrixCardProps = {
  title: string;
  description: string;
};

/**
 * Single cell for a quadrant/skill-matrix comparison. Promoted from a
 * file-local component (used inside a hand-built axis-labeled CSS grid in
 * one article) so it's reusable without redefining it per file. The
 * surrounding grid/axis-label layout stays inline in that article's MDX
 * body — it's a one-off visual, not worth abstracting further.
 */
export function MatrixCard({ title, description }: MatrixCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-xs text-white/80 md:p-4 md:text-sm">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/80 md:hidden">{title}</p>
      <p className="mt-2 text-xs text-white/85 md:mt-0 md:text-sm">{description}</p>
    </div>
  );
}

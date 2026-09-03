import type { ReactNode } from "react";
import { Lightbulb } from "lucide-react";

type CalloutProps = {
  title?: string;
  children: ReactNode;
};

/**
 * Shared "wyróżniona myśl" box for article bodies.
 * Without a `title`, renders a compact key-thought box.
 * With a `title`, renders the bigger "takeaways" box, styling any nested
 * markdown list as a stack of boxed items (matches the two ad hoc variants
 * that used to be hand-copied per article).
 */
export function Callout({ title, children }: CalloutProps) {
  if (title) {
    return (
      <div className="rounded-3xl border border-primary/45 bg-gradient-to-br from-primary/18 via-primary/10 to-background p-6 shadow-lg shadow-primary/10">
        <div className="mb-4 flex items-center gap-3">
          <div className="rounded-2xl border border-primary/35 bg-primary/20 p-2 text-primary">
            <Lightbulb className="h-5 w-5" />
          </div>
          <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
        </div>
        <div
          className="space-y-3 text-base leading-8 text-foreground/85
            [&_ul]:list-none [&_ul]:space-y-3 [&_ul]:pl-0
            [&_li]:rounded-2xl [&_li]:border [&_li]:border-primary/30 [&_li]:bg-background [&_li]:p-4 [&_li]:shadow-sm [&_li]:shadow-black/10"
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-primary/45 bg-primary/12 p-5 shadow-lg shadow-primary/10">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl border border-primary/35 bg-primary/20 p-2 text-primary">
          <Lightbulb className="h-5 w-5" />
        </div>
        <div className="text-sm leading-7 text-foreground/90 [&_p]:m-0">{children}</div>
      </div>
    </div>
  );
}

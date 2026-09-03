import type { MDXComponents } from "mdx/types";
import { MarginNote } from "@/components/articles/margin-note";
import { InlineArticlePromo } from "@/components/ads/inline-article-promo";
import { Promo } from "@/components/articles/promo";
import { ArticleAudioPlayer } from "@/components/audio/article-audio-player";
import { Callout } from "@/components/articles/callout";
import { ArticleSection } from "@/components/articles/article-section";
import { MatrixCard } from "@/components/articles/matrix-card";

// Global styling + component registry for every .mdx article body. Replaces
// the classes that used to be hand-copied onto every <p>/<ul>/<strong> in
// every article, and the locally-redefined `SectionSubheading` (now just
// plain `##`/`###` markdown).
const components: MDXComponents = {
  h2: (props) => <h2 className="pt-4 text-2xl font-semibold text-foreground" {...props} />,
  h3: (props) => <h3 className="text-xl font-semibold text-foreground" {...props} />,
  p: (props) => <p className="text-base leading-8 text-foreground/85" {...props} />,
  ul: (props) => <ul className="list-disc space-y-1 pl-5 text-base leading-8 text-foreground/85" {...props} />,
  ol: (props) => <ol className="list-decimal space-y-1 pl-5 text-base leading-8 text-foreground/85" {...props} />,
  strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
  a: (props) => <a className="link-accent font-semibold" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="rounded-2xl border border-primary/30 bg-primary/5 p-4 text-base italic leading-8 text-foreground/85"
      {...props}
    />
  ),
  img: (props) => (
    // Plain <img>: markdown images have no intrinsic width/height, so next/image
    // would need extra config per image.
    // eslint-disable-next-line @next/next/no-img-element
    <img className="w-full rounded-xl object-cover shadow-lg shadow-black/10" {...props} alt={props.alt ?? ""} />
  ),
  MarginNote,
  InlineArticlePromo,
  Promo,
  ArticleAudioPlayer,
  Callout,
  ArticleSection,
  MatrixCard,
};

export function useMDXComponents(): MDXComponents {
  return components;
}

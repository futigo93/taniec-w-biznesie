import { InlineArticlePromo } from "@/components/ads/inline-article-promo";
import { promoPresets, type PromoItem, type PromoPresetName } from "@/content/promo-presets";

type PromoProps = {
  preset?: PromoPresetName;
  items?: PromoItem[];
  label?: string;
  ctaLabel?: string;
};

/**
 * Thin wrapper around InlineArticlePromo: `<Promo preset="ebook" />` for the
 * common, reusable promo blocks, or `<Promo items={[...]} />` for a fully
 * custom one-off (e.g. linking to "the next article in this series").
 */
export function Promo({ preset, items, label, ctaLabel }: PromoProps) {
  const resolved = items ?? (preset ? promoPresets[preset] : undefined);
  if (!resolved) return null;

  return <InlineArticlePromo items={resolved} label={label} ctaLabel={ctaLabel} />;
}

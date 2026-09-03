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
  // Keystatic always writes `items` as an array (possibly empty, e.g. when
  // only `preset` was set in the form) rather than omitting it, so an empty
  // array must fall through to the preset — items?.length check, not `??`.
  const resolved = items && items.length > 0 ? items : preset ? promoPresets[preset] : undefined;
  if (!resolved) return null;

  return <InlineArticlePromo items={resolved} label={label} ctaLabel={ctaLabel} />;
}

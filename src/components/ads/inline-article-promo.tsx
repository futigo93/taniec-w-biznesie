"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type InlineArticlePromoItem = {
  title: string;
  description: string;
  href: string;
  image: string;
  weight?: number;
};

type InlineArticlePromoProps = {
  items: InlineArticlePromoItem[];
  label?: string;
  ctaLabel?: string;
};

const DEFAULT_LABEL = "Polecany artykuł";
const DEFAULT_CTA = "Czytaj dalej";

const pickWeightedItem = (items: InlineArticlePromoItem[]) => {
  if (items.length <= 1) return items[0];
  const totalWeight = items.reduce((sum, item) => sum + (item.weight ?? 1), 0);
  if (totalWeight <= 0) return items[0];
  let roll = Math.random() * totalWeight;
  for (const item of items) {
    roll -= item.weight ?? 1;
    if (roll <= 0) return item;
  }
  return items[items.length - 1];
};

export function InlineArticlePromo({ items, label = DEFAULT_LABEL, ctaLabel = DEFAULT_CTA }: InlineArticlePromoProps) {
  const [selected, setSelected] = useState<InlineArticlePromoItem | null>(null);

  useEffect(() => {
    setSelected(pickWeightedItem(items));
  }, [items]);

  if (!selected) return null;

  return (
    <div className="surface-focus rounded-3xl p-5 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <Link
          href={selected.href}
          className="relative block h-40 w-full overflow-hidden rounded-2xl md:h-28 md:w-48"
        >
          <Image
            src={selected.image}
            alt={selected.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 192px"
          />
        </Link>
        <div className="space-y-2">
          <p className="surface-chip">{label}</p>
          <h3 className="text-lg font-semibold leading-snug text-foreground">{selected.title}</h3>
          <p className="text-sm text-muted-foreground">{selected.description}</p>
          <Link href={selected.href} className="cta-link">
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

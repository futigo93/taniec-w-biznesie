"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

type EbookVariantTrackerProps = {
  variant: "ebook1" | "ebook2" | "ebook3";
};

export function EbookVariantTracker({ variant }: EbookVariantTrackerProps) {
  useEffect(() => {
    trackEvent("ebook_variant_view", { variant });
  }, [variant]);

  return null;
}

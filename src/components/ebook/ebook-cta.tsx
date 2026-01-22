"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AnchorLink } from "@/components/ui/anchor-link";
import { trackEvent } from "@/lib/analytics";

type EbookCtaProps = {
  demoHref: string;
  variant: "ebook1" | "ebook2" | "ebook3";
  className?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryClassName?: string;
  secondaryClassName?: string;
  primaryVariant?: "default" | "outline" | "secondary" | "ghost" | "link";
  secondaryVariant?: "default" | "outline" | "secondary" | "ghost" | "link";
};

export function EbookCta({
  demoHref,
  variant,
  className,
  primaryLabel = "Pobierz darmowy rozdział",
  secondaryLabel = "Pełna wersja po zapisie",
  primaryClassName,
  secondaryClassName,
  primaryVariant = "default",
  secondaryVariant = "outline",
}: EbookCtaProps) {
  const searchParams = useSearchParams();
  const communityAnchor = useMemo(() => {
    const query = searchParams?.toString();
    return query ? `/?${query}#zapis` : "/#zapis";
  }, [searchParams]);

  const handleDownload = () => {
    trackEvent("ebook_demo_download", { variant, source: "button" });
  };

  const handleCommunity = () => {
    trackEvent("ebook_full_interest", { variant });
  };

  return (
    <div className={className}>
      <Button asChild size="lg" variant={primaryVariant} className={primaryClassName}>
        <a href={demoHref} download onClick={handleDownload}>
          {primaryLabel}
        </a>
      </Button>
      <Button asChild size="lg" variant={secondaryVariant} className={secondaryClassName}>
        <AnchorLink anchor={communityAnchor} onClick={handleCommunity}>
          {secondaryLabel}
        </AnchorLink>
      </Button>
    </div>
  );
}

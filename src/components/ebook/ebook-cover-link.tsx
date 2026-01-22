"use client";

import { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type EbookCoverLinkProps = {
  demoHref: string;
  variant: "ebook1" | "ebook2" | "ebook3";
  className?: string;
  children: ReactNode;
};

export function EbookCoverLink({ demoHref, variant, className, children }: EbookCoverLinkProps) {
  const handleClick = () => {
    trackEvent("ebook_demo_download", { variant, source: "cover" });
  };

  return (
    <a href={demoHref} download className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type AnchorLinkProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  anchor: string;
};

export const AnchorLink = forwardRef<HTMLButtonElement, AnchorLinkProps>(
  ({ anchor, className, children, ...props }, ref) => {
    const handleClick = () => {
      const target = anchor.replace(/^#/, "");
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        const url = `${window.location.pathname}${window.location.search}#${target}`;
        history.replaceState(null, "", url);
      }
    };

    return (
      <button
        type="button"
        ref={ref}
        className={cn("inline-flex items-center", className)}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  },
);

AnchorLink.displayName = "AnchorLink";

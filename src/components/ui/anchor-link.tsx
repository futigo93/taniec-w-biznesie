"use client";

import { MouseEvent, forwardRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type AnchorLinkProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  anchor: string;
};

export const AnchorLink = forwardRef<HTMLButtonElement, AnchorLinkProps>(
  ({ anchor, className, children, onClick, ...props }, ref) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);
      if (event.defaultPrevented) return;

      const { targetHash, explicitPath, preferCurrentPath } = parseAnchor(anchor);
      const currentPath = pathname || "/";
      const pathToUse = explicitPath ?? (preferCurrentPath ? currentPath : "/");
      const isSamePath = pathToUse === currentPath;

      if (!isSamePath) {
        const nextUrl = targetHash ? `${pathToUse}#${targetHash}` : pathToUse;
        router.push(nextUrl);
        return;
      }

      if (!targetHash) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        history.replaceState(null, "", pathToUse);
        return;
      }

      const element = document.getElementById(targetHash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        const nextUrl = targetHash ? `${pathToUse}#${targetHash}` : pathToUse;
        history.replaceState(null, "", nextUrl);
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

function parseAnchor(value: string) {
  const raw = value?.trim() ?? "";
  if (!raw) {
    return { targetHash: "", explicitPath: "/", preferCurrentPath: false };
  }

  if (raw.startsWith("#")) {
    return { targetHash: raw.slice(1), explicitPath: null, preferCurrentPath: true };
  }

  if (raw.startsWith("/")) {
    const [pathPart, hashPart] = raw.split("#");
    return {
      targetHash: hashPart ?? "",
      explicitPath: pathPart || "/",
      preferCurrentPath: false,
    };
  }

  if (raw.includes("#")) {
    const [pathPart, hashPart] = raw.split("#");
    if (pathPart) {
      const normalizedPath = pathPart.startsWith("/") ? pathPart : `/${pathPart}`;
      return { targetHash: hashPart ?? "", explicitPath: normalizedPath, preferCurrentPath: false };
    }
    return { targetHash: hashPart ?? "", explicitPath: "/", preferCurrentPath: false };
  }

  const normalizedHash = raw.replace(/^#/, "");
  return { targetHash: normalizedHash, explicitPath: "/", preferCurrentPath: false };
}

"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { AnchorLink } from "@/components/ui/anchor-link";
import { cn } from "@/lib/utils";

const navLinks = [
  { anchor: "ebook", label: "Ebook" },
  { href: "/artykuly", label: "Artykuły" },
  { href: "/uslugi", label: "Wsparcie" },
  { href: "/o-mnie", label: "O mnie" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [compactHeader, setCompactHeader] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const compactHeaderRef = useRef(false);
  const lockUntilRef = useRef(0);
  const isEbook = pathname?.startsWith("/ebook");
  const isHome = pathname === "/";

  useEffect(() => {
    if (isEbook) return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, isEbook]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const setCompactState = (nextState: boolean, now: number) => {
      compactHeaderRef.current = nextState;
      setCompactHeader(nextState);
      lockUntilRef.current = now + 420;
    };

    const handleScroll = () => {
      const currentY = window.scrollY;
      const now = performance.now();

      if (currentY <= 24) {
        if (compactHeaderRef.current) {
          setCompactState(false, now);
        }
        lastScrollY.current = currentY;
        return;
      }

      if (now < lockUntilRef.current) {
        lastScrollY.current = currentY;
        return;
      }

      const delta = currentY - lastScrollY.current;

      if (!compactHeaderRef.current && delta > 10 && currentY > 132) {
        setCompactState(true, now);
      } else if (compactHeaderRef.current && (currentY < 72 || delta < -18)) {
        setCompactState(false, now);
      }

      lastScrollY.current = currentY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const expandedTop = document.documentElement.style.getPropertyValue("--journey-marker-expanded-top") || "6.8rem";
    document.documentElement.style.setProperty("--journey-marker-top", compactHeader ? "0.7rem" : expandedTop);
    document.documentElement.style.setProperty("--journey-marker-scale", compactHeader ? "0.96" : "1");

    return () => {
      document.documentElement.style.removeProperty("--journey-marker-top");
      document.documentElement.style.removeProperty("--journey-marker-scale");
    };
  }, [compactHeader]);

  useLayoutEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const updateExpandedMarkerTop = () => {
      const height = headerRef.current?.offsetHeight ?? 0;
      const top = Math.max(height + 6, 84);
      document.documentElement.style.setProperty("--journey-marker-expanded-top", `${top}px`);

      if (!compactHeader) {
        document.documentElement.style.setProperty("--journey-marker-top", `${top}px`);
      }
    };

    updateExpandedMarkerTop();

    const resizeObserver = typeof ResizeObserver !== "undefined" && headerRef.current
      ? new ResizeObserver(() => updateExpandedMarkerTop())
      : null;

    if (resizeObserver && headerRef.current) {
      resizeObserver.observe(headerRef.current);
    } else {
      window.addEventListener("resize", updateExpandedMarkerTop);
    }

    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateExpandedMarkerTop);
    };
  }, [compactHeader, isHome]);

  if (isEbook) {
    return null;
  }

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
        compactHeader
          ? "border-b border-transparent bg-transparent shadow-none backdrop-blur-0 supports-[backdrop-filter]:bg-transparent md:border-border/70 md:bg-background/90 md:shadow-[0_10px_30px_rgba(22,34,43,0.06)] md:backdrop-blur md:supports-[backdrop-filter]:bg-background/75"
          : "border-b border-border/70 bg-background/90 shadow-[0_10px_30px_rgba(22,34,43,0.06)] backdrop-blur supports-[backdrop-filter]:bg-background/75",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl flex-col px-4 transition-[padding,gap] duration-300 md:py-4 lg:flex-row lg:items-center lg:justify-between lg:px-6",
          compactHeader ? "gap-2 py-2.5" : "gap-4 py-3",
        )}
      >
        <div className={cn("flex w-full flex-col md:flex-row md:items-center md:justify-between", compactHeader ? "gap-2" : "gap-3")}>
          <div className="flex min-w-0 items-center justify-between gap-3 md:block">
            <AnchorLink
              anchor="start"
              className={cn(
                "flex min-w-0 flex-1 items-center gap-2 text-[0.95rem] font-semibold tracking-tight whitespace-nowrap transition-all duration-300 md:text-lg",
                compactHeader && "max-md:max-w-fit max-md:flex-none max-md:gap-0",
              )}
              aria-label={siteConfig.shortName}
            >
              <Image
                src="/taniec_w_biznesie_logo.png"
                alt={`${siteConfig.shortName} logo`}
                width={36}
                height={36}
                className={cn(
                  "h-9 w-9 shrink-0 rounded-full border border-border/70 bg-white object-contain transition-all duration-300 md:h-10 md:w-10",
                  compactHeader ? "p-0.5" : "p-1",
                )}
                priority
              />
              <span
                className={cn(
                  "truncate transition-[max-width,opacity,margin] duration-300",
                  compactHeader ? "max-md:ml-0 max-md:max-w-0 max-md:opacity-0" : "max-md:max-w-[12rem] max-md:opacity-100",
                )}
              >
                Taniec w&nbsp;Biznesie
              </span>
            </AnchorLink>
            <button
              className={cn(
                "shrink-0 rounded-full border border-border/80 text-foreground transition-all duration-300 md:hidden",
                compactHeader ? "bg-background/88 p-2 shadow-sm backdrop-blur-sm" : "bg-background/88 p-2 shadow-sm backdrop-blur-sm",
              )}
              onClick={() => setOpen(true)}
              aria-label="Otwórz menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
          {isHome ? (
          <div className="hidden items-center gap-3 md:flex lg:hidden">
            <Button asChild>
              <AnchorLink anchor="zapis">Odbierz ebook</AnchorLink>
            </Button>
          </div>
          ) : null}
          {isHome ? (
            <div
              className={cn(
                "overflow-hidden transition-[max-height,opacity] duration-300 md:hidden",
                compactHeader ? "max-h-0 opacity-0" : "max-h-20 opacity-100",
              )}
            >
              <Button asChild className="h-11 w-full rounded-full text-base">
                <AnchorLink anchor="zapis">Odbierz ebook</AnchorLink>
              </Button>
            </div>
          ) : null}
        </div>
        <nav className="hidden w-full flex-wrap gap-x-6 gap-y-3 text-sm font-medium md:flex lg:w-auto lg:flex-nowrap lg:items-center">
          {navLinks.map((link) => (
            link.anchor ? (
              <AnchorLink
                key={link.anchor}
                anchor={link.anchor}
                className="whitespace-nowrap text-muted-foreground transition hover:text-foreground"
              >
                {link.label}
              </AnchorLink>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="whitespace-nowrap text-muted-foreground transition hover:text-foreground"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild>
            <AnchorLink anchor="zapis">Odbierz ebook</AnchorLink>
          </Button>
        </div>
      </div>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open || typeof window === "undefined") return null;

  return createPortal(
    <div className="md:hidden">
      <div className="fixed inset-0 z-[120] bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 z-[130] w-72 max-w-full overflow-y-auto border-l border-border/70 bg-background p-6 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <AnchorLink
            anchor="start"
            className="flex items-center gap-2 text-base font-semibold tracking-tight whitespace-nowrap"
            onClick={onClose}
            aria-label={siteConfig.shortName}
          >
            <Image
              src="/taniec_w_biznesie_logo.png"
              alt={`${siteConfig.shortName} logo`}
              width={32}
              height={32}
              className="h-8 w-8 rounded-full border border-border/70 bg-white object-contain p-0.5"
            />
            Taniec w&nbsp;Biznesie
          </AnchorLink>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Zamknij menu">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium">
          {navLinks.map((link) =>
            link.anchor ? (
              <AnchorLink
                key={link.anchor}
                anchor={link.anchor}
                className="whitespace-nowrap text-left text-muted-foreground transition hover:text-foreground"
                onClick={onClose}
              >
                {link.label}
              </AnchorLink>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                onClick={onClose}
                className="whitespace-nowrap text-muted-foreground transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ),
          )}
          <Button asChild className="h-11 rounded-full">
            <AnchorLink anchor="zapis" onClick={onClose}>
              Odbierz ebook
            </AnchorLink>
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

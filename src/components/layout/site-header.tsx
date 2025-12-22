"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { AnchorLink } from "@/components/ui/anchor-link";

const navLinks = [
  { anchor: "ebook", label: "Ebook" },
  { href: "/artykuly", label: "Artykuły" },
  { href: "/uslugi", label: "Usługi dodatkowe" },
  { href: "/o-mnie", label: "O mnie" },
  { href: "/feedback", label: "Feedback" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-6">
        <div className="flex w-full items-center justify-between">
          <AnchorLink
            anchor="start"
            className="flex items-center gap-2 text-base font-semibold tracking-tight whitespace-nowrap md:text-lg"
            aria-label={siteConfig.shortName}
          >
            <Image
              src="/taniec_w_biznesie_logo.png"
              alt={`${siteConfig.shortName} logo`}
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 rounded-full border border-border/70 bg-white object-contain p-1"
              priority
            />
            Taniec w&nbsp;Biznesie
          </AnchorLink>
          <div className="flex items-center gap-3 md:hidden">
            <Button size="sm" asChild>
              <AnchorLink anchor="zapis">Zapisz się</AnchorLink>
            </Button>
            <button
              className="rounded-md border border-border/80 p-2 text-foreground"
              onClick={() => setOpen(true)}
              aria-label="Otwórz menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
          <div className="hidden items-center gap-3 md:flex lg:hidden">
            <Button asChild>
              <AnchorLink anchor="zapis">Zapisz się</AnchorLink>
            </Button>
          </div>
        </div>
        <nav className="hidden w-full flex-wrap gap-x-6 gap-y-3 text-sm font-medium md:flex lg:w-auto lg:flex-nowrap lg:items-center">
          {navLinks.map((link) => (
            link.anchor ? (
              <AnchorLink
                key={link.anchor}
                anchor={link.anchor}
                className="text-muted-foreground transition hover:text-foreground"
              >
                {link.label}
              </AnchorLink>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="text-muted-foreground transition hover:text-foreground"
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild>
            <AnchorLink anchor="zapis">Zapisz się</AnchorLink>
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
                className="text-left text-muted-foreground transition hover:text-foreground"
                onClick={onClose}
              >
                {link.label}
              </AnchorLink>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                onClick={onClose}
                className="text-muted-foreground transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ),
          )}
          <Button asChild>
            <AnchorLink anchor="zapis" onClick={onClose}>
              Zapisz się
            </AnchorLink>
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

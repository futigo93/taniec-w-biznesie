import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/#dla-kogo", label: "Dla kogo", scroll: true },
  { href: "/#ebook", label: "Ebook", scroll: true },
  { href: "/spolecznosc", label: "Społeczność" },
  { href: "/artykuly", label: "Artykuły" },
  { href: "/consulting", label: "Consulting" },
  { href: "/feedback", label: "Feedback" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight md:text-lg"
            aria-label={siteConfig.shortName}
          >
            {siteConfig.shortName}
          </Link>
          <span className="hidden text-sm text-muted-foreground md:inline">
            partner do myślenia
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll={link.scroll}
              className="text-muted-foreground transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" asChild>
            <Link href={siteConfig.socials.baileo} target="_blank" rel="noreferrer">
              baileo.pl
            </Link>
          </Button>
          <Button asChild>
            <Link href="/#zapis">Zapisz się</Link>
          </Button>
        </div>
      </div>
      <MobileNav />
    </header>
  );
}

function MobileNav() {
  return (
    <div className="border-t border-border/80 bg-background/95 md:hidden">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              scroll={link.scroll}
              className="transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Button variant="secondary" asChild>
          <Link href="/#zapis">Dołączam</Link>
        </Button>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MessageSquareText, Rss } from "lucide-react";
import { siteConfig } from "@/config/site";

const footerLinks = [
  { label: "Start", href: "/" },
  { label: "Artykuły", href: "/artykuly" },
  { label: "Wsparcie", href: "/uslugi" },
  { label: "O mnie", href: "/o-mnie" },
  { label: "Regulamin", href: "/regulamin" },
  { label: "Polityka prywatności", href: "/polityka-prywatnosci" },
  { label: "Polityka cookies", href: "/polityka-cookies" },
  { label: "Lista podmiotów", href: "/lista-podmiotow-przetwarzajacych" },
];

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname?.startsWith("/ebook")) {
    return null;
  }
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-[color:color-mix(in_srgb,var(--surface-quiet)_72%,transparent)] text-sm backdrop-blur-sm">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div className="space-y-2">
          <p className="font-semibold tracking-tight">Taniec w Biznesie</p>
          <p className="text-muted-foreground">
            O prowadzeniu szkoły tańca trochę spokojniej, trochę szerzej i bez
            udawania, że wszystko da się ogarnąć intuicją. Ebook, artykuły i
            konkretne materiały od Jakuba Nowaka.
          </p>
        </div>
        <div className="space-y-3">
          <p className="font-medium">Nawigacja</p>
          <div className="flex flex-wrap gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="font-medium">Kontakt</p>
          <ul className="space-y-1 text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageSquareText className="h-4 w-4" />
              <Link href="/feedback" className="hover:text-foreground">
                Napisz wiadomość
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Rss className="h-4 w-4" />
              <Link href="/artykuly" className="hover:text-foreground">
                Najnowsze teksty
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-4 py-4 text-center text-muted-foreground md:px-6">
        © {year} {siteConfig.shortName}. Zbudowano na fundamencie relacji i
        systemów.
      </div>
    </footer>
  );
}

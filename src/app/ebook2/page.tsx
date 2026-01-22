import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EbookCta } from "@/components/ebook/ebook-cta";
import { EbookVariantTracker } from "@/components/ebook/ebook-analytics";
import { trackEvent } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Demo ebooka: Kulisy prowadzenia szkoły tańca",
  description:
    "Bezpłatny rozdział pokazujący kulisy prowadzenia szkoły tańca. Dla instruktorów, właścicieli i ciekawych kursantów.",
};

const demoHref = "/Czego_nie_wiesz_o_prowadzeniu_szkoły_tanca_demo-Jakub_Nowak.pdf";

export default function EbookLandingTwo() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f6efe4] text-[#2b1a12]">
      <EbookVariantTracker variant="ebook2" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-32 h-[30rem] w-[30rem] rounded-full bg-[#7b6f5c]/15 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[26rem] w-[26rem] rounded-full bg-[#f2c572]/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.6),transparent_55%)]" />
      </div>

      <header className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em]">
            <Image
              src="/taniec_w_biznesie_logo.png"
              alt="Taniec w Biznesie"
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 rounded-full border border-[#2b1a12]/15 bg-white object-contain p-1"
            />
            Taniec w Biznesie
          </Link>
          <Link href="/o-mnie" className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7b6f5c] hover:text-[#2b1a12]">
            O mnie
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-6xl animate-in fade-in slide-in-from-bottom-4 duration-700 gap-10 px-6 pb-16 pt-10 lg:grid-cols-[0.95fr,1.05fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2b1a12]/10 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#7b6f5c]">
              Kulisy szkoły tańca
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-serif leading-tight md:text-5xl">
                Zajrzyj za kulisy. Tak wygląda szkoła tańca od środka.
              </h1>
              <p className="text-base text-[#4b342a] md:text-lg">
                Bezpłatny rozdział o przejściu z roli instruktora do właściciela. Dla osób z branży i dla kursantów, którzy
                chcą zrozumieć, co dzieje się po drugiej stronie recepcji.
              </p>
            </div>
            <EbookCta
              demoHref={demoHref}
              variant="ebook2"
              className="flex flex-wrap gap-3"
              primaryLabel="Pobierz rozdział demo"
              secondaryLabel="Pełna wersja po zapisie"
              primaryClassName="bg-[#2b1a12] text-[#f6efe4] text-base px-7 py-4 shadow-[0_16px_40px_rgba(43,26,18,0.35)] hover:shadow-[0_18px_46px_rgba(43,26,18,0.45)] hover:bg-[#3b261c]"
              primaryVariant="default"
              secondaryVariant="outline"
              secondaryClassName="border-[#2b1a12]/20 bg-transparent text-[#2b1a12] hover:bg-[#2b1a12]/10"
            />
            <div className="rounded-3xl border border-[#2b1a12]/10 bg-white/70 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7b6f5c]">W środku znajdziesz</p>
              <ul className="mt-4 space-y-3 text-sm text-[#4b342a]">
                <li>Dlaczego pasja przestaje wystarczać, gdy pojawiają się decyzje właścicielskie.</li>
                <li>Jak łatwo pomylić opinie kursantów z realnymi mechanizmami rynku.</li>
                <li>Co obiecuje nazwa szkoły i dlaczego rynek rozlicza z tej obietnicy.</li>
              </ul>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <a
              href={demoHref}
              download
              className="block"
              onClick={() => trackEvent("ebook_demo_download", { variant: "ebook2", source: "cover" })}
            >
              <div className="relative w-full max-w-md rotate-[-1.5deg] rounded-[32px] border border-[#2b1a12]/10 bg-white p-4 shadow-xl transition hover:scale-[1.01]">
                <Image
                  src="/ebook_cover.webp"
                  alt="Okładka ebooka Czego nie wiesz o prowadzeniu szkoły tańca"
                  width={420}
                  height={580}
                  className="w-full rounded-[24px] object-cover"
                  priority
                />
                <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.3em] p-2 text-[#7b6f5c]">
                  <span>Demo PDF</span>
                  <span>Rozdział 1</span>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              "Instruktorzy i właściciele szukający porządku w decyzjach.",
              "Menedżerowie, którzy układają ofertę i procesy.",
              "Kursanci ciekawi kulis prowadzenia szkoły.",
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-[#2b1a12]/10 bg-white/70 p-5 text-sm text-[#4b342a]">
                {item}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#2b1a12]/10 bg-white/70">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-[#7b6f5c]">
          <span>© 2026 Taniec w Biznesie</span>
          <div className="flex flex-wrap gap-4 uppercase tracking-[0.2em]">
            <Link href="/polityka-prywatnosci" className="hover:text-[#2b1a12]">
              Prywatność
            </Link>
            <Link href="/polityka-cookies" className="hover:text-[#2b1a12]">
              Cookies
            </Link>
            <Link href="/regulamin" className="hover:text-[#2b1a12]">
              Regulamin
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

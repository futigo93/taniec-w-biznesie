import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EbookCta } from "@/components/ebook/ebook-cta";
import { EbookVariantTracker } from "@/components/ebook/ebook-analytics";
import { EbookCoverLink } from "@/components/ebook/ebook-cover-link";

export const metadata: Metadata = {
  title: "Demo ebooka: Tożsamość właściciela",
  description:
    "Bezpłatny rozdział o przejściu z instruktora do właściciela. Dlaczego pasja przestaje wystarczać i co porządkuje decyzje.",
};

const demoHref = "/Czego_nie_wiesz_o_prowadzeniu_szkoły_tanca_demo-Jakub_Nowak.pdf";

export default function EbookLandingOne() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#130f0d] text-[#f6efe4]">
      <EbookVariantTracker variant="ebook1" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#d97706]/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-[#c28b45]/10 blur-[160px]" />
      </div>

      <header className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em]">
            <Image
              src="/taniec_w_biznesie_logo.png"
              alt="Taniec w Biznesie"
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 rounded-full border border-white/20 bg-white object-contain p-1"
            />
            Taniec w Biznesie
          </Link>
          <Link
            href="/o-mnie"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e5c89c] hover:text-white"
          >
            O mnie
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-6xl animate-in fade-in slide-in-from-bottom-4 duration-700 items-center gap-12 px-6 pb-16 pt-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#e5c89c]">
              Rozdział 1 - Demo
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-serif leading-tight text-white md:text-5xl">
                Instruktor czy właściciel? Ten wybór i tak Cię dogoni.
              </h1>
              <p className="text-base text-[#e9d9c3] md:text-lg">
                To nie jest poradnik sprzedaży karnetów. To uporządkowana opowieść o momencie, w którym pasja przestaje
                wystarczać do podejmowania decyzji właścicielskich. Demo to pełna, zamknięta całość.
              </p>
            </div>
            <EbookCta
              demoHref={demoHref}
              variant="ebook1"
              className="flex flex-wrap gap-3"
              primaryLabel="Pobierz darmowy rozdział"
              secondaryLabel="Pełna wersja po zapisie"
              primaryClassName="bg-[#d97706] text-[#1a110c] hover:bg-[#e58b1f]"
              secondaryVariant="outline"
              secondaryClassName="border-white/25 text-white hover:bg-white/10"
            />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e5c89c]">Co porządkuje demo</p>
                <p className="mt-3 text-sm text-white/85">
                  Rozpoznasz moment, w którym kończy się rola instruktora, a zaczyna rola właściciela. Zobaczysz, dlaczego
                  opinie kursantów często mylą się z realnymi mechanizmami rynku.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e5c89c]">Dla kogo jeszcze</p>
                <p className="mt-3 text-sm text-white/85">
                  Dla kursantów, którzy chcą zajrzeć za kulisy prowadzenia szkoły. Zrozumiesz, dlaczego niektóre decyzje
                  „od środka” wyglądają inaczej niż na sali.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-6 top-10 hidden h-24 w-24 rounded-full bg-[#d97706]/25 blur-2xl md:block" />
            <EbookCoverLink demoHref={demoHref} variant="ebook1" className="block">
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 shadow-2xl transition hover:scale-[1.01]">
                <Image
                  src="/ebook_cover.webp"
                  alt="Okładka ebooka Czego nie wiesz o prowadzeniu szkoły tańca"
                  width={420}
                  height={580}
                  className="w-full rounded-2xl object-cover"
                  priority
                />
                <p className="mt-4 text-center text-xs uppercase tracking-[0.3em] text-[#e5c89c]">
                  PDF - Demo - Rozdział 1
                </p>
              </div>
            </EbookCoverLink>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[0.9fr,1.1fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e5c89c]">
                  Co jest dalej w pełnej wersji
                </p>
                <h2 className="mt-3 text-2xl font-serif text-white">Oferta i stabilność</h2>
              </div>
              <p className="text-sm text-white/85">
                Kolejne rozdziały pokazują ofertę jako proces towarzyszenia klientowi oraz stabilność jako system powtarzalnych
                decyzji. Pełny ebook dostajesz od razu po zapisie do społeczności.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[#0f0b09]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-[#e9d9c3]">
          <span>© 2026 Taniec w Biznesie</span>
          <div className="flex flex-wrap gap-4 uppercase tracking-[0.2em]">
            <Link href="/polityka-prywatnosci" className="hover:text-white">
              Prywatność
            </Link>
            <Link href="/polityka-cookies" className="hover:text-white">
              Cookies
            </Link>
            <Link href="/regulamin" className="hover:text-white">
              Regulamin
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

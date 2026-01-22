import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EbookCta } from "@/components/ebook/ebook-cta";
import { EbookVariantTracker } from "@/components/ebook/ebook-analytics";
import { trackEvent } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Demo ebooka: Diagnoza chaosu w szkole tańca",
  description:
    "Bezpłatny rozdział, który porządkuje chaos w głowie właściciela i pokazuje trzy role w szkole tańca.",
};

const demoHref = "/Czego_nie_wiesz_o_prowadzeniu_szkoły_tanca_demo-Jakub_Nowak.pdf";

export default function EbookLandingThree() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f1f24] text-[#e7f2f3]">
      <EbookVariantTracker variant="ebook3" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-[24rem] w-[24rem] rounded-full bg-[#2dd4bf]/20 blur-[120px]" />
        <div className="absolute right-0 top-32 h-[22rem] w-[22rem] rounded-full bg-[#f59e0b]/15 blur-[140px]" />
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      <header className="relative z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em]">
            <Image
              src="/taniec_w_biznesie_logo.png"
              alt="Taniec w Biznesie"
              width={40}
              height={40}
              className="h-10 w-10 shrink-0 rounded-full border border-white/15 bg-white object-contain p-1"
            />
            Taniec w Biznesie
          </Link>
          <Link
            href="/o-mnie"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8cc7c9] hover:text-white"
          >
            O mnie
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        <section className="mx-auto grid max-w-6xl animate-in fade-in slide-in-from-bottom-4 duration-700 gap-12 px-6 pb-16 pt-10 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#8cc7c9]">
              Diagnoza chaosu
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-serif leading-tight text-white md:text-5xl">
                Masz wrażenie chaosu? To nie jest Twoja wina. To etap.
              </h1>
              <p className="text-base text-[#c9dde0] md:text-lg">
                Demo rozdziału porządkuje rolę właściciela i pokazuje trzy funkcje, których nie da się mieszać bez końca:
                instruktora, managera i właściciela.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Czujesz, że robisz wszystko, ale wciąż czegoś brakuje.",
                "Masz pełny grafik, a mimo to brakuje Ci czasu.",
                "Opinie kursantów nie przekładają się na realne decyzje.",
                "Brakuje jasnej roli i granic w zespole.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-[#e7f2f3]">
                  {item}
                </div>
              ))}
            </div>
            <EbookCta
              demoHref={demoHref}
              variant="ebook3"
              className="flex flex-wrap gap-3"
              primaryLabel="Pobierz rozdział i uporządkuj decyzje"
              secondaryLabel="Pełna wersja po zapisie"
              primaryClassName="bg-[#2dd4bf] text-[#0f1f24] hover:bg-[#4ae6d2]"
              secondaryVariant="outline"
              secondaryClassName="border-white/25 text-white hover:bg-white/10"
            />
          </div>
          <div className="relative">
            <a
              href={demoHref}
              download
              className="block"
              onClick={() => trackEvent("ebook_demo_download", { variant: "ebook3", source: "cover" })}
            >
              <div className="mx-auto max-w-sm rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl transition hover:scale-[1.01]">
                <Image
                  src="/ebook_cover.webp"
                  alt="Okładka ebooka Czego nie wiesz o prowadzeniu szkoły tańca"
                  width={420}
                  height={580}
                  className="w-full rounded-2xl object-cover"
                  priority
                />
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-xs uppercase tracking-[0.3em] text-[#8cc7c9]">
                  Demo - Rozdział 1 - PDF
                </div>
              </div>
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8cc7c9]">Co daje demo</p>
              <p className="mt-3 text-sm text-[#c9dde0]">
                Porządek w głowie, wspólny język z zespołem i klarowność, kiedy podejmować decyzje właścicielskie.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8cc7c9]">Dla kursantów</p>
              <p className="mt-3 text-sm text-[#c9dde0]">
                To spojrzenie za kulisy prowadzenia szkoły. Zobaczysz, dlaczego pewne decyzje z sali są nieoczywiste.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8cc7c9]">Pełna wersja</p>
              <p className="mt-3 text-sm text-[#c9dde0]">
                Rozdziały o ofercie i stabilności dostajesz po zapisie do społeczności wraz z aktualizacjami.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[#0b171b]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-[#8cc7c9]">
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

import { Button } from "@/components/ui/button";
import { AnchorLink } from "@/components/ui/anchor-link";

export function HeroSection() {
  return (
    <section
      id="start"
      className="relative overflow-hidden rounded-3xl border border-border/60 shadow-lg"
      style={{
        backgroundImage: "url('/herobg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/60" />
      <div className="relative mx-auto flex max-w-4xl flex-col gap-6 px-6 py-16 text-white sm:px-10 md:py-24">
        <p className="text-sm uppercase tracking-[0.5em] text-white/70">Taniec w Biznesie</p>
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
          Taniec w biznesie to przestrzeń dla właścicieli szkół tańca – zdobywaj wiedzę, chłoń doświadczenie, dziel się
          motywacją.
        </h1>
        <p className="text-lg text-white/85">
          Zapisz się do społeczności osób zainteresowanych poszerzaniem kompetencji w rozwijaniu szkół tańca. Jako pierwszy
          prezent dostaniesz ebook „Czego nie wiesz o prowadzeniu szkoły tańca”. To nic nie kosztuje.
        </p>
        <div>
          <Button asChild size="lg" className="text-base">
            <AnchorLink anchor="zapis">Dołącz do społeczności</AnchorLink>
          </Button>
        </div>
      </div>
    </section>
  );
}

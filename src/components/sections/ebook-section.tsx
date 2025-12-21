import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const demoHref = "/Czego_nie_wiesz_o_prowadzeniu_szkoły_tanca_demo-Jakub_Nowak.pdf";

export function EbookSection() {
  return (
    <section
      id="ebook"
      className="scroll-mt-32 rounded-3xl border border-border/60 bg-gradient-to-br from-[#1f1b18] via-[#171210] to-[#231a14] p-6 text-white shadow-2xl md:p-10"
    >
      <div className="grid gap-10 md:grid-cols-[1.5fr,0.9fr] md:items-center">
        <div className="space-y-6">
          <div className="[&_h2]:text-white [&_p]:text-muted-foreground/80">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
              Priorytet #1
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Ebook „Czego nie wiesz o prowadzeniu szkoły tańca”
            </h2>
            <p className="mt-4 text-base text-muted-foreground/80">
              Jeśli jesteś początkującym właścicielem szkoły, albo dopiero myślisz o jej założeniu –
              długa taneczna droga już za Tobą, ale równie długa dopiero przed Tobą. Nie daj się zaskoczyć
              nieznanemu. Dzielę się doświadczeniem z prowadzenia własnej szkoły w mniejszej miejscowości
              i pracy menedżerskiej w ogromnej szkole w dużym mieście.
            </p>
            <p className="mt-2 text-base text-muted-foreground/80">
              Pobierz bezpłatną próbkę – pierwszy rozdział – albo zapisz się do społeczności podobnych
              osób i od razu otrzymaj pełną książkę wraz z aktualizacjami.
            </p>
          </div>
          <div className="space-y-4">
            <InfoTile
              title="Rozdział dostępny dla wszystkich"
              description="Dlaczego prowadzenie szkoły tańca wcale nie kręci się wokół techniki czy stylu, tylko wokół emocji, decyzji i momentu, gdy pasja zderza się z odpowiedzialnością właścicielską."
            />
            <InfoTile
              title="Rozdziały po zapisie do społeczności"
              description="Cykl życia klienta, oferta jako system, długoterminowe zarządzanie szkołą w perspektywie miesięcy i lat oraz najczęstsze błędy właścicieli, których konsekwencje ujawniają się po czasie."
            />
            <InfoTile
              title="Dodatkowe treści"
              description="Aktualizacje ebooka, artykuły, podsumowania i zaproszenia do warsztatów trafiają na Twojego maila – dostępne tylko dla osób z listy."
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={demoHref} download>
                Pobierz darmowy rozdział
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#zapis">Dołącz do społeczności</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-full max-w-xs rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg">
            <div className="absolute -left-8 top-8 hidden h-20 w-20 rounded-full bg-primary/30 blur-3xl md:block" />
            <Image
              src="/ebook_cover.webp"
              alt="Okładka ebooka Czego nie wiesz o prowadzeniu szkoły tańca"
              width={400}
              height={560}
              className="relative z-10 w-full rounded-xl object-cover"
            />
            <p className="mt-4 text-center text-sm text-muted-foreground/70">
              Format PDF • regularne aktualizacje • nagrania audio w przygotowaniu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoTile({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-muted-foreground/90 shadow-inner">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">{title}</p>
      <p className="mt-2 text-base text-white/85">{description}</p>
    </div>
  );
}

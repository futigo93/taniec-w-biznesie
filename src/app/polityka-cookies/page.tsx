import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Polityka Cookies",
  description: "Zasady korzystania z plików cookies w serwisie taniecwbiznesie.pl",
};

export default function CookiesPage() {
  return (
    <div className="bg-background py-12">
      <div className="mx-auto max-w-4xl space-y-8 px-4 text-sm leading-relaxed md:px-0">
        <SectionHeading eyebrow="Dokument" title="Polityka Cookies taniecwbiznesie.pl" />
        <article className="space-y-6 rounded-3xl border border-border/70 bg-card p-6 shadow-sm">
          <section>
            <h2 className="text-lg font-semibold">1. Informacje ogólne</h2>
            <p className="mt-2">
              Strona internetowa taniecwbiznesie.pl (dalej: „Serwis”) wykorzystuje pliki cookies oraz podobne technologie w
              celu zapewnienia prawidłowego działania strony, poprawy jej funkcjonalności oraz – w przyszłości – analizy
              statystyk i działań marketingowych.
            </p>
            <p className="mt-2">Administratorem Serwisu jest Jakub Nowak, osoba fizyczna.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">2. Czym są pliki cookies?</h2>
            <p className="mt-2">
              Pliki cookies to niewielkie pliki tekstowe zapisywane na urządzeniu końcowym użytkownika (komputerze, tablecie,
              smartfonie), które umożliwiają prawidłowe funkcjonowanie strony internetowej lub ułatwiają korzystanie z niej.
              Cookies nie zawierają danych pozwalających na bezpośrednią identyfikację użytkownika.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">3. Rodzaje wykorzystywanych cookies</h2>
            <h3 className="mt-2 font-semibold">3.1. Cookies niezbędne (techniczne)</h3>
            <p className="mt-1">
              Serwis wykorzystuje cookies niezbędne do prawidłowego działania strony, zapewnienia bezpieczeństwa oraz obsługi
              zgód cookies. Te pliki cookies są zawsze aktywne i nie wymagają zgody użytkownika.
            </p>
            <h3 className="mt-4 font-semibold">3.2. Cookies analityczne</h3>
            <p className="mt-1">
              W przyszłości Serwis może wykorzystywać cookies analityczne (np. Google Analytics) w celu analizowania statystyk
              odwiedzin i poprawy jakości treści oraz działania strony. Cookies analityczne będą wykorzystywane wyłącznie po
              wyrażeniu zgody przez użytkownika.
            </p>
            <h3 className="mt-4 font-semibold">3.3. Cookies marketingowe</h3>
            <p className="mt-1">
              W przyszłości Serwis może wykorzystywać cookies marketingowe (np. Meta Pixel) w celu prezentowania dopasowanych
              treści oraz informowania o produktach i usługach Administratora lub partnerów. Cookies marketingowe będą
              wykorzystywane wyłącznie po wyrażeniu zgody użytkownika.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">4. Zarządzanie cookies</h2>
            <p className="mt-2">
              Podczas pierwszej wizyty w Serwisie użytkownik ma możliwość zaakceptowania wszystkich cookies, odrzucenia
              cookies opcjonalnych lub zmiany ustawień cookies. Preferencje można w każdej chwili zmienić poprzez ustawienia
              przeglądarki internetowej lub ponowne otwarcie panelu zgód dostępnego w Serwisie.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">5. Narzędzie do zarządzania zgodami</h2>
            <p className="mt-2">
              Serwis korzysta z narzędzia do zarządzania zgodami cookies, które umożliwia zapisywanie wyborów użytkownika,
              kontrolę nad rodzajami cookies oraz cofnięcie zgody w dowolnym momencie.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">6. Zmiany Polityki Cookies</h2>
            <p className="mt-2">
              Administrator zastrzega sobie prawo do zmiany niniejszej Polityki Cookies, w szczególności w przypadku zmian
              technologicznych, wprowadzenia nowych narzędzi analitycznych lub marketingowych, czy zmian przepisów prawa.
              Aktualna wersja dokumentu jest zawsze dostępna w Serwisie.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">7. Kontakt</h2>
            <p className="mt-2">
              W sprawach dotyczących cookies można skontaktować się z Administratorem pod adresem:
              <br />
              <strong>rodo@taniecwbiznesie.pl</strong>
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}

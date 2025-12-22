import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Informacje o przetwarzaniu danych w serwisie taniecwbiznesie.pl",
};

export default function PrivacyPage() {
  return (
    <div className="bg-background py-12">
      <div className="mx-auto max-w-4xl space-y-8 px-4 text-sm leading-relaxed md:px-0">
        <SectionHeading eyebrow="Dokument" title="Polityka prywatności taniecwbiznesie.pl" />
        <article className="space-y-6 rounded-3xl border border-border/70 bg-card p-6 shadow-sm">
          <section>
            <h2 className="text-lg font-semibold">1. Administrator danych</h2>
            <p className="mt-2">
              Administratorem danych osobowych jest Jakub Nowak, osoba fizyczna, adres e-mail: rodo@taniecwbiznesie.pl.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">2. Zakres przetwarzanych danych</h2>
            <p className="mt-2">Administrator przetwarza dane osobowe w postaci:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>imienia i nazwiska,</li>
              <li>adresu e-mail,</li>
              <li>nazwy szkoły (opcjonalnie),</li>
              <li>roli (np. właściciel, menedżer, osoba planująca otwarcie szkoły),</li>
              <li>treści wiadomości i feedbacku.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">3. Cele i podstawy prawne przetwarzania</h2>
            <p className="mt-2">Dane osobowe przetwarzane są w celu:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>realizacji zapisu do społeczności i newslettera (art. 6 ust. 1 lit. a RODO – zgoda),</li>
              <li>przesyłania treści edukacyjnych i materiałów w ramach społeczności (art. 6 ust. 1 lit. b i f RODO),</li>
              <li>odpowiedzi na wiadomości i feedback (art. 6 ust. 1 lit. f RODO),</li>
              <li>przesyłania treści marketingowych – wyłącznie po wyrażeniu zgody (art. 6 ust. 1 lit. a RODO).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">4. Treści marketingowe a treści edukacyjne</h2>
            <p className="mt-2">
              Treści edukacyjne przekazywane w ramach społeczności są elementem usługi edukacyjnej. Treści marketingowe obejmują
              wyłącznie komunikację wykraczającą poza usługę edukacyjną i wymagają odrębnej zgody.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">5. Odbiorcy danych</h2>
            <p className="mt-2">
              Dane mogą być przekazywane podmiotom przetwarzającym dane na zlecenie Administratora (np. dostawcom narzędzi
              mailingowych, hostingowych). Aktualna lista podmiotów przetwarzających dostępna jest pod adresem:
              taniecwbiznesie.pl/lista-podmiotow-przetwarzajacych.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">6. Okres przetwarzania danych</h2>
            <p className="mt-2">Dane przetwarzane są:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>do momentu cofnięcia zgody,</li>
              <li>do realizacji celu, dla którego zostały zebrane,</li>
              <li>lub do momentu zgłoszenia żądania usunięcia danych.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold">7. Prawa osób, których dane dotyczą</h2>
            <p className="mt-2">Każdej osobie przysługuje prawo do:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>dostępu do danych,</li>
              <li>ich sprostowania,</li>
              <li>usunięcia (prawo do bycia zapomnianym),</li>
              <li>ograniczenia przetwarzania,</li>
              <li>przenoszenia danych,</li>
              <li>wniesienia sprzeciwu,</li>
              <li>cofnięcia zgody w dowolnym momencie.</li>
            </ul>
            <p className="mt-2">Żądania można kierować na adres: rodo@taniecwbiznesie.pl.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">8. Cookies i narzędzia analityczne</h2>
            <p className="mt-2">
              Serwis wykorzystuje pliki cookies. W przyszłości mogą być stosowane narzędzia analityczne i marketingowe (np.
              Google Analytics). Szczegółowe informacje zawarte są w Polityce Cookies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">9. Postanowienia końcowe</h2>
            <p className="mt-2">
              Administrator stosuje odpowiednie środki techniczne i organizacyjne w celu ochrony danych. Polityka
              prywatności obowiązuje od dnia publikacji.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}

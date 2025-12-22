import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Regulamin",
  description: "Zasady korzystania z serwisu taniecwbiznesie.pl",
};

export default function TermsPage() {
  return (
    <div className="bg-background py-12">
      <div className="mx-auto max-w-4xl space-y-8 px-4 text-sm leading-relaxed md:px-0">
        <SectionHeading eyebrow="Dokument" title="Regulamin serwisu taniecwbiznesie.pl" />
        <article className="space-y-6 rounded-3xl border border-border/70 bg-card p-6 shadow-sm">
          <section>
            <h2 className="text-lg font-semibold">§1. Informacje ogólne</h2>
            <p className="mt-2">
              Niniejszy Regulamin określa zasady korzystania z serwisu internetowego dostępnego pod adresem
              taniecwbiznesie.pl (dalej: „Serwis”).
            </p>
            <p className="mt-2">
              Administratorem Serwisu jest Jakub Nowak, osoba fizyczna, adres e-mail: kontakt@taniecwbiznesie.pl (dalej:
              „Administrator”).
            </p>
            <p className="mt-2">
              Serwis ma charakter edukacyjny i społecznościowy i jest skierowany do osób prowadzących szkoły tańca,
              zarządzających szkołami tańca oraz planujących otwarcie szkoły tańca lub rozwój działalności w tej branży.
            </p>
            <p className="mt-2">Korzystanie z Serwisu oznacza akceptację niniejszego Regulaminu.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">§2. Zakres i charakter Serwisu</h2>
            <p className="mt-2">W ramach Serwisu Administrator udostępnia:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>artykuły edukacyjne (publiczne oraz niepubliczne),</li>
              <li>fragment ebooka dostępny bez podawania danych osobowych,</li>
              <li>możliwość zapisu do społeczności (newsletter),</li>
              <li>materiały edukacyjne wysyłane w ramach społeczności, w tym pełną wersję ebooka,</li>
              <li>formularz feedbacku umożliwiający przekazanie opinii.</li>
            </ul>
            <p className="mt-2">Część treści dostępna jest wyłącznie dla osób zapisanych do społeczności.</p>
            <p className="mt-2">Serwis nie jest platformą sprzedażową ani systemem do zawierania umów odpłatnych.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">§3. Społeczność i newsletter</h2>
            <p className="mt-2">Zapis do społeczności następuje poprzez formularz dostępny w Serwisie.</p>
            <p className="mt-2">W ramach społeczności Administrator może przesyłać:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>treści edukacyjne,</li>
              <li>materiały autorskie,</li>
              <li>informacje o nowych artykułach i materiałach,</li>
              <li>zaproszenia na wydarzenia online (np. spotkania edukacyjne).</li>
            </ul>
            <p className="mt-2">
              Treści edukacyjne przekazywane w ramach społeczności – również w przyszłości odpłatne – stanowią element
              usługi edukacyjnej, a nie marketing.
            </p>
            <p className="mt-2">
              Zapis do społeczności jest dobrowolny, a rezygnacja możliwa w każdym momencie poprzez link wypisu w
              wiadomościach e-mail lub kontakt z Administratorem.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">§4. Treści marketingowe</h2>
            <p className="mt-2">Treści marketingowe obejmują w szczególności:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>informacje o produktach i usługach Administratora niezwiązanych bezpośrednio z treściami edukacyjnymi,</li>
              <li>oferty partnerów zewnętrznych,</li>
              <li>informacje o narzędziach, systemach lub usługach komercyjnych (np. systemy do obsługi szkół tańca).</li>
            </ul>
            <p className="mt-2">Otrzymywanie treści marketingowych wymaga odrębnej zgody użytkownika.</p>
            <p className="mt-2">
              Brak zgody marketingowej nie wpływa na możliwość korzystania z Serwisu ani treści edukacyjnych.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">§5. Konsulting i usługi indywidualne</h2>
            <p className="mt-2">Informacje o konsultingu zamieszczone w Serwisie mają charakter informacyjny.</p>
            <p className="mt-2">Konsulting:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>nie jest realizowany za pośrednictwem Serwisu,</li>
              <li>jest ustalany indywidualnie poza platformą,</li>
              <li>płatności realizowane są poza Serwisem.</li>
            </ul>
            <p className="mt-2">
              W momencie rozpoczęcia działalności gospodarczej zasady te mogą ulec zmianie, o czym użytkownicy zostaną
              poinformowani.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">§6. Prawa autorskie</h2>
            <p className="mt-2">Wszystkie treści dostępne w Serwisie są chronione prawem autorskim.</p>
            <p className="mt-2">
              Prawa autorskie przysługują Administratorowi lub partnerom, którzy udostępnili swoje materiały.
            </p>
            <p className="mt-2">
              Zabronione jest kopiowanie, rozpowszechnianie lub wykorzystywanie treści w celach komercyjnych bez zgody
              uprawnionego podmiotu.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">§7. Odpowiedzialność</h2>
            <p className="mt-2">Treści publikowane w Serwisie mają charakter edukacyjny i informacyjny.</p>
            <p className="mt-2">
              Nie stanowią doradztwa prawnego, podatkowego, finansowego ani inwestycyjnego. Administrator nie ponosi
              odpowiedzialności za decyzje biznesowe podejmowane na ich podstawie.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">§8. Wiek użytkowników</h2>
            <p className="mt-2">Serwis przeznaczony jest wyłącznie dla osób, które ukończyły 18 lat.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">§9. Zmiany Regulaminu</h2>
            <p className="mt-2">
              Administrator zastrzega sobie prawo do zmiany Regulaminu. O istotnych zmianach użytkownicy zostaną
              poinformowani w Serwisie lub drogą mailową.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold">§10. Postanowienia końcowe</h2>
            <p className="mt-2">Regulamin obowiązuje od dnia publikacji w Serwisie.</p>
            <p className="mt-2">W sprawach nieuregulowanych zastosowanie mają przepisy prawa polskiego.</p>
          </section>
        </article>
      </div>
    </div>
  );
}

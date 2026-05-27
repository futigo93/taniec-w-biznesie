# Plan Przebudowy I Refreshu

Ten dokument ma przygotować grunt pod przebudowę `taniecwbiznesie.pl`.

Nie chodzi tylko o lifting kolorów. Potrzebna jest jednoczesna poprawa:
- roli strony,
- struktury treści,
- języka korzyści,
- UX,
- i warstwy wizualnej.

To ma być dokument roboczy dla kolejnego agenta albo dla człowieka, który przejmie prace nad refreshiem.

## Status wdrożenia

### Etap 1: Homepage

Status: **w dużej części wdrożony**

Zrobione:
- homepage został przebudowany wokół jednej głównej ścieżki dla właściciela / managera szkoły tańca
- główne CTA zostało ustawione na pełny ebook za mail
- demo ebooka zostało zdegradowane do CTA wtórnego
- z homepage zniknął `feedback teaser`
- z homepage zniknęło pozycjonowanie payrollu jako równorzędnej osi oferty
- sekcja artykułów została przeostrzona i oparta o kuratorski wybór treści właścicielskich
- nowy case study został włączony do serwisu i wyróżniony na homepage jako dowód jakości
- sekcja wsparcia została przepisana w kierunku `Baileo + consulting`
- warstwa wizualna homepage została rozjaśniona i przesunięta w kierunku bardziej editorialnym
- CTA zapisowe i formularz zostały przepisane komunikacyjnie pod bardziej dojrzały framing

Świadomie odłożone:
- pełne uproszczenie logiki formularza na poziomie liczby pól i zgód
- szersze porządki w całym serwisie poza homepage i bezpośrednimi sekcjami
- pełne dopracowanie analityki nowego leja po wdrożeniu

Najbliższy krok:
- test desktop/mobile i korekty wizualno-UX-owe po obejrzeniu wdrożonego homepage

### Etap 2-4: Podstrony i copy systemowe

Status: **wdrożone w głównym zakresie**

Zrobione:
- `/artykuly` zostało przebudowane jako kuratorski listing z lekkim filtrowaniem po odbiorcy
- najwyżej na listingu ustawione zostały case study i teksty właścicielskie
- `/uslugi` zostało przepisane z katalogu modułów na stronę dwóch kierunków wsparcia: Baileo i consulting
- payroll został usunięty z głównego planu `/uslugi` jako osobna noga oferty
- `/o-mnie` zostało przepisane pod ton zgodny z homepage
- `/spolecznosc` zostało usunięte z publicznej architektury serwisu
- `/feedback` zostało przepisane jako neutralna strona kontaktu zwrotnego
- header, footer i linkowanie zostały dopasowane do nowej hierarchii serwisu
- stare linki wewnętrzne do `localhost` i dawnych wersji `/uslugi` zostały poprawione w artykułach

Świadomie odłożone:
- pełniejszy porządek wszystkich historycznych cross-linków w całym archiwum tekstów
- dalsze doszlifowanie taksonomii tematów, jeśli obecne lekkie filtrowanie okaże się za słabe
- pełny przegląd pozostałych podstron prawnych, ankiet i mniej istotnych ścieżek

Najbliższy krok:
- wizualny i redakcyjny pass po całości na żywo po obejrzeniu nowych podstron w przeglądarce

### Etap 4.5: Mobile-first polish homepage + shared

Status: **wdrożony**

Zakres:
- homepage
- mobile header i mobile menu
- CTA na homepage
- cookie banner

Problemy wykryte w audycie:
- header mobile był zbyt ciężki i zbyt ciasny w jednym rzędzie
- hero na telefonie był za wysoki i za długo dochodził do sensu
- pierwsze sekcje częściowo powielały framing `dla kogo`
- copy w kilku miejscach było za długie jak na mobile
- cookie banner potrzebował własnych proporcji mobile

Zrobione:
- mobile header został przebudowany do układu dwurzędowego z osobnym pełnowymiarowym CTA
- branding w headerze został odchudzony na telefonie
- hero został skrócony copywritersko i zagęszczony pionowo na mobile
- wtórne CTA w hero i ebooku zostały odciążone na telefonie
- sekcja po hero została przestawiona z powtórki `dla kogo` na bardziej konkretne `co zyskasz`
- sekcje homepage dostały mniejsze mobile paddingi i lżejszy rytm
- skrócone zostały opisy w sekcjach: hero, wartości, ebook, artykuły, wsparcie, final CTA i szybki zapis
- cookie banner dostał własne override'y mobile dla wysokości, czcionki i przycisków

Świadomie odłożone:
- osobny mobile polish dla `/artykuly`, szablonu artykułu i `/uslugi`
- głębsze uproszczenie logiki formularza zapisowego

Najbliższy krok:
- kolejny pass mobile dla listingu artykułów, szablonu artykułu i wybranych podstron wspierających

### Etap 4.6: Mobile-first polish dla artykułów i usług

Status: **wdrożony**

Zakres:
- homepage
- shared mobile header i mobile menu
- `/artykuly`
- wspólny hero artykułu
- `/uslugi`
- dalszy pass cookie banneru

Problemy wykryte po obejrzeniu podstron na żywo:
- CTA w mobile headerze nie powinno być pokazywane na każdej podstronie
- największe nagłówki na mobile były nadal za agresywne i łamały się zbyt drobno
- listing `/artykuly`, hero artykułu i top `/uslugi` były za wysokie pionowo
- mobile cookie banner nadal zbyt mocno nachodził na pierwszy ekran

Zrobione:
- CTA w mobile headerze zostało ograniczone do homepage
- w mobile menu przycisk `Odbierz ebook` dostał pełny styling CTA
- mobile H1 i duże H2 zostały dalej obniżone i lepiej zbalansowane
- listing `/artykuly` został skrócony i spłaszczony w topowych sekcjach i kartach
- `ArticleHero` został zagęszczony i skrócony na mobile
- `/uslugi` zostało skrócone i odciążone typograficznie na wejściu
- cookie banner dostał drugi pass pod mniejszą wysokość i bardziej zwarte przyciski

Świadomie odłożone:
- osobny mobile pass dla `/o-mnie` i `/feedback`
- pełniejszy cleanup wszystkich historycznych szablonów artykułów, które nie korzystają jeszcze z tych samych wzorców

Najbliższy krok:
- osobny pass mobile dla `/o-mnie`, `/feedback` i pozostałych publicznych podstron, jeśli po obejrzeniu live nadal będą odstawać

### Kolejne etapy

- Etap 2: uporządkowanie strony artykułów i lepsza ekspozycja treści dla różnych odbiorców
- Etap 3: przebudowa podstrony usług tak, by była spójna z nowym homepage i nową rolą Baileo
- Etap 4: dalsze porządki w copy, SEO i ścieżkach pobocznych
- Etap 5: iteracje CTA, formularza i dalszych assetów eksperckich

### Decyzje zamknięte

- homepage prowadzi głównie właściciela / managera szkoły
- główne CTA homepage to pełny ebook za mail
- demo ebooka zostaje jako CTA wtórne
- case study pełni rolę mocnego dowodu jakości
- payroll nie jest osią oferty ani frontu
- szeroka marka zostaje utrzymana przez bibliotekę treści, a nie przez szeroki hero

### Otwarte rzeczy na później

- czy formularz da się uprościć prawnie i technicznie bez rozbijania obecnej integracji
- jak szeroko eksponować treści dla instruktorów i tancerzy na listingu artykułów
- jak przepisać podstronę usług, żeby nie wrócić do katalogu funkcji i modułów
- jakie nowe eventy analytics dodać do porównania starego i nowego leja CTA
- jak głęboko porządkować stare wpisy blogowe pod nowe etykiety i nowy model linkowania

### Stała reguła copy

Na front i podstrony publiczne nie trafia:
- język roboczy strategiczny
- język agencyjny lub meta-komentarz o tym, co sekcja `ma robić`
- techniczny opis architektury strony zamiast treści dla odbiorcy

Każdy nowy publiczny tekst trzeba czytać jak gotową publikację dla użytkownika, a nie jak notatkę roboczą autora lub agenta.

## Status na dziś

Strona działa, ma wartościowe treści i już dziś może zbierać zapisy.

Jednocześnie obecna wersja:
- miesza kilka ról naraz,
- nie prowadzi wystarczająco ostro użytkownika do jednego głównego ruchu,
- używa jeszcze sporo starego języka funkcji i narzędzi,
- i wizualnie jest zbyt ciężka oraz zbyt jednolicie brązowa.

Najkrócej:

To nie jest projekt do kosmetycznego retuszu.
To jest projekt do świadomego przeostrzenia.

## Najważniejsza decyzja strategiczna

Homepage nie powinna próbować być jednocześnie:
- landingiem ebooka,
- stroną społeczności,
- katalogiem usług,
- stroną narzędzi,
- portfolio autora,
- i agregatem wszystkich treści.

### Rekomendowana rola strony

`Taniec w Biznesie` powinno być ustawione przede wszystkim jako:

**marka ekspercka i redakcyjna dla właścicieli szkół tańca**

z:
- ebookiem / newsletterem jako głównym CTA,
- artykułami jako warstwą wiarygodności,
- usługami i narzędziami jako ścieżkami wtórnymi,
- a nie równorzędnymi bohaterami frontu.

Ważne doprecyzowanie:
- to nie znaczy, że cała marka ma być zawężona tylko do właścicieli,
- treści dla instruktorów i częściowo dla tancerzy mogą nadal być ważne strategicznie,
- ale homepage i główna ścieżka konwersji powinny być dużo wyraźniej ustawione pod właściciela / managera szkoły.

Najkrócej:
- **marka może być szersza**
- **homepage nie powinien być szeroki**

## Główne problemy do rozwiązania

### 1. Rozmyta architektura wartości

Na stronie jest dziś za dużo równoległych obietnic:
- ebook,
- społeczność,
- artykuły,
- Baileo,
- consulting,
- feedback.

W efekcie użytkownik nie dostaje jednej ostrej odpowiedzi na pytanie:

`Po co tu jestem i co mam zrobić dalej?`

### 2. Zbyt słaby język korzyści w warstwie usługowej i narzędziowej

W kilku miejscach wraca jeszcze framing typu:
- system do zarządzania grafikiem, zapisami i karnetami,
- moduł grafiku,
- widżet,
- zapisy online wkrótce,
- narzędzia i usługi.

To jest za blisko języka funkcji.

Warstwa narzędziowa powinna być przepisana mocniej na:
- mniejszy chaos,
- mniej ręcznej pracy,
- prostsze decyzje,
- bardziej wiarygodny front szkoły,
- mniej rozjazdów między komunikacją a rzeczywistością.

### 3. Za szeroki miks odbiorców na froncie

Strona ma dziś treści dla:
- właścicieli,
- managerów,
- instruktorów,
- tancerzy.

To może być OK jako biblioteka treści, ale nie jako główne wejście marki.

Na homepage priorytet powinien być dużo czytelniejszy:

**właściciel / manager szkoły tańca**

Treści dla instruktorów i tancerzy mogą zostać:
- w blogu,
- w tagach,
- w sekcjach pobocznych,
- ale nie powinny rozmywać głównego punktu wejścia.

To jest świadomy kompromis:
- szerokość marki i biblioteki treści zostaje,
- ale główna ścieżka wejścia ma być wyraźniejsza biznesowo.

### 4. Warstwa wizualna jest za ciężka

Najważniejszy problem nie brzmi:
- `brąz jest zły`

tylko:
- `brąz zalewa zbyt dużą część interfejsu`

Efekt dziś:
- zbyt mało oddechu,
- zbyt mało kontrastu między sekcjami,
- za mało jasnej hierarchii,
- zbyt podobny ciężar wizualny na całej stronie.

### 5. Formularz ma duży koszt wejścia

Przy top-of-funnelowym CTA prosimy dziś od razu o:
- imię i nazwisko,
- mail,
- nazwę szkoły,
- rolę,
- zgody,
- regulaminy.

To może być uzasadnione prawnie, ale UX-owo warto przemyśleć:
- czy wszystko musi być wymagane od razu,
- czy forma zapisu nie jest zbyt ciężka względem obietnicy pierwszego kontaktu.

## Priorytety przebudowy

### Priorytet 1. Ustawić nową strukturę homepage

Rekomendowana kolejność myślenia:

1. kim jest odbiorca
2. co go dziś boli
3. jaką wartość dostanie od strony / marki
4. jaki jest główny pierwszy krok
5. dopiero potem jakie są dalsze ścieżki

### Priorytet 2. Przepisać copy na język problemu i efektu

Najpierw:
- problem,
- napięcie,
- koszt,
- efekt,

dopiero potem:
- forma wsparcia,
- narzędzie,
- ebook,
- społeczność,
- usługa.

### Priorytet 3. Zrobić pełny refresh wizualny

To jest ważne i nie powinno zostać potraktowane jako dodatek.

Refresh ma:
- podnieść odbiór jakości,
- uporządkować hierarchię,
- i sprawić, że marka będzie wyglądała dojrzalej, lżej i bardziej świadomie.

### Priorytet 4. Uprościć wybory użytkownika

Na froncie powinno być mniej równorzędnych decyzji.

Na dziś najzdrowszy model:
- główne CTA: zapis / ebook / społeczność
- wtórne CTA: czytaj artykuły
- trzecie CTA: poznaj narzędzia i usługi

## Rekomendowany kierunek wizualny

### Czego nie robić

- nie utrzymywać strony w logice „ciemne brązowe wszystko”
- nie budować całej atmosfery tylko na ciężkich tłach i gradientach
- nie mnożyć kart, ramek i sekcji o podobnym ciężarze
- nie robić strony, która wygląda jak miks bloga, dashboardu i landing page'a

### Co robić

- zostawić brąz jako element tożsamości, ale używać go bardziej selektywnie
- przejść na jaśniejszą bazę strony
- zostawić jeden mocniejszy, ciemniejszy hero albo 1-2 ciemne sekcje akcentowe
- budować większy kontrast między:
  - tłem bazowym,
  - sekcjami premium,
  - CTA,
  - contentem redakcyjnym
- mocniej oprzeć design na:
  - typografii,
  - rytmie sekcji,
  - większych marginesach,
  - spokojniejszej siatce,
  - i bardziej editorialnym układzie

### Rekomendowany klimat

Nie:
- brown startup
- ani brown dashboard

Raczej:
- **editorial premium**
- z ciepłem,
- spokojem,
- dojrzałością,
- i większą ilością światła.

### Roboczy kierunek kolorystyczny

Możliwy kierunek:
- jasne tło bazowe: złamana kość słoniowa / ciepła biel / piaskowy off-white
- ciemny brąz tylko jako mocny kontrast i akcent
- mosiężne / bursztynowe / koniakowe akcenty dla CTA i detali
- grafit lub bardzo ciemny brąz dla typografii

Ważne:
- mniej „cała strona w brązie”
- więcej „brąz jako podpis marki”

## Rekomendowana nowa architektura homepage

To nie musi być finalny układ, ale to dobry punkt wyjścia.

### 1. Hero

Cel:
- ustawić, dla kogo jest strona,
- nazwać problem,
- zaprosić do pierwszego kroku.

Hero nie powinien mówić:
- `zdobywaj wiedzę, chłoń doświadczenie, dziel się motywacją`

Raczej powinien mówić:
- że to przestrzeń dla właścicieli szkół tańca,
- którzy chcą lepiej rozumieć decyzje, procesy i rozwój szkoły,
- bez chaosu i bez udawania, że wszystko da się ogarnąć intuicją.

### 2. Główna obietnica / dlaczego warto zostać

Sekcja o tym:
- co zyskuje właściciel,
- czego tu nie znajdzie,
- czym `Taniec w Biznesie` różni się od kolejnej ogólnej społeczności czy bloga.

### 3. Ebook jako pierwszy asset

Ebook powinien zostać, ale być osadzony w szerszej logice:
- pierwszy konkretny zasób,
- punkt wejścia,
- dowód, że tu jest treść z ciężarem.

### 4. Najlepsze artykuły

Nie jako szeroki miks wszystkiego.

Lepiej:
- mocniej kuratorsko,
- mniej kart,
- lepsze filtrowanie,
- być może 3 wybrane teksty dla właściciela / managera.

### 5. O autorze / dlaczego warto Ci ufać

Ta sekcja jest potrzebna, ale nie powinna być zbyt późno ani zbyt autobiograficzna.

Najpierw:
- co rozumiesz,
- skąd masz ten ogląd,
- dlaczego ten projekt nie jest teoretyzowaniem.

Dopiero potem:
- pełniejsza historia.

### 6. Narzędzia i usługi

Ta sekcja powinna zostać, ale:
- w lżejszej roli,
- lepszym języku,
- i jako ścieżka poboczna.

Nie jako:
- „tu są nasze produkty”

Raczej:
- „jeśli poza wiedzą potrzebujesz też wsparcia wdrożeniowego albo narzędziowego, tu są kierunki”

Ważne:
- samodzielny projekt payroll nie jest już aktywną osią oferty,
- nie powinien być dalej promowany jako osobny produkt do wypchnięcia,
- jeśli jego logika wraca, to raczej jako część większego kierunku Baileo, a nie osobna noga strony.

### 7. Główne CTA

Domknięcie:
- zapis na listę
- ebook
- lekka obietnica jakości i rytmu komunikacji

## Co przepisać treściowo

### Hero

Przepisać od zera.

Obecna wersja jest zbyt miękka, zbyt ogólna i za mało problemowa.

### Produkty i usługi

Przepisać w duchu:
- wartość,
- efekt,
- i miejsce w większej całości,

nie:
- lista funkcji,
- narzędzi,
- i `wkrótce`.

Dodatkowo:
- usunąć z frontu samodzielne pozycjonowanie payrollu jako osobnego projektu,
- nie budować już tej ścieżki jako niezależnej oferty,
- jeśli temat zostanie wspomniany, to najwyżej jako fragment szerszej kompetencji lub element przyszłego modułu Baileo.

### Artykuły

Przepisać opisy sekcji i sposób selekcji treści tak, żeby:
- właściciel szkoły szybciej widział, że to jest dla niego,
- i nie tonął w miksie tematów dla różnych odbiorców.

### CTA zapisowe

Przepisać tak, żeby:
- brzmiało bardziej dojrzale,
- mniej „zbieramy społeczność”,
- bardziej „to jest sensowny kanał wiedzy dla właścicieli szkół”.

## Jak korzystać z repo Baileo Marketing

Nie trzeba w tym repo przepisywać całej logiki języka od zera.

Kluczowe dokumenty pomocnicze znajdują się tutaj:

- `C:\Users\futig\Documents\projects\baileo-related-projects\baileo-marketing\00_strategy\current-strategic-conclusions.md`
- `C:\Users\futig\Documents\projects\baileo-related-projects\baileo-marketing\00_strategy\tone-and-messaging.md`
- `C:\Users\futig\Documents\projects\baileo-related-projects\baileo-marketing\00_strategy\outreach-and-followup-playbook.md`
- `C:\Users\futig\Documents\projects\baileo-related-projects\baileo-marketing\00_strategy\problem-map.md`
- `C:\Users\futig\Documents\projects\baileo-related-projects\baileo-marketing\00_strategy\offer-and-target.md`

Najważniejsze rzeczy do przeniesienia stamtąd na `Taniec w Biznesie`:
- język problemu zamiast języka funkcji,
- korzyści zamiast użyteczności,
- prostota i konkret zamiast katalogu modułów,
- większa uważność na codzienny ból szkoły,
- większa ostrość w mówieniu: dla kogo jest ta marka.

## Czego nie robić w refreshu

- nie zaczynać od samej zmiany kolorów
- nie przepisywać całego projektu od razu bez decyzji o roli homepage
- nie traktować refreshu wizualnego jako osobnego zadania od architektury treści
- nie dokładać nowych sekcji bez usunięcia lub połączenia starych
- nie poprawiać tylko copy, zostawiając tę samą przeciążoną strukturę

## Kolejność prac

### Etap 1

- ustalić docelową rolę homepage
- rozpisać nową architekturę sekcji
- ustalić hierarchię CTA

### Etap 2

- przygotować nowy kierunek wizualny
- ustalić paletę, typografię, rytm sekcji, styl kart i przycisków
- zdecydować, co zostaje z obecnej identyfikacji, a co wypada

### Etap 3

- przepisać homepage
- przepisać sekcję usług i narzędzi
- przepisać CTA zapisowe

### Etap 4

- poprawić stronę artykułów
- poprawić selekcję i ekspozycję treści
- dopracować wejścia do konkretnych ścieżek

### Etap 5

- dopiero wtedy robić dalsze dopieszczanie szczegółów

## Czego oczekujemy od nowego agenta

Nowy agent nie powinien zaczynać od przypadkowych poprawek w kodzie.

Najpierw powinien przygotować:

1. propozycję nowej architektury homepage
2. propozycję nowego kierunku wizualnego
3. propozycję nowego hero i głównych CTA
4. propozycję uproszczenia sekcji:
   - artykułów,
   - ebooka,
   - narzędzi i usług,
   - zapisu

Dopiero po akceptacji kierunku:
- wdrożenie w kodzie,
- iteracja wizualna,
- i dalsze szlify.

## Deliverables robocze

Jeśli nowy agent ma pracować porządnie, dobrze żeby oddał te rzeczy w tej kolejności:

### Deliverable 1

Krótki dokument albo wiadomość z odpowiedzią:
- kim jest główny odbiorca strony,
- jaka jest główna rola homepage,
- jakie są CTA priorytetowe,
- co usuwamy z pierwszego planu.

### Deliverable 2

Opis nowego kierunku wizualnego:
- kolorystyka,
- typografia,
- hierarchia sekcji,
- styl komponentów,
- klimat marki.

Najlepiej nie tylko słowami, ale też przez:
- prosty moodboard,
- albo referencje wizualne,
- albo szybki mock sekcji hero.

### Deliverable 3

Nowy szkielet homepage:
- kolejność sekcji,
- cel każdej sekcji,
- główna myśl,
- główne CTA.

### Deliverable 4

Dopiero potem:
- implementacja,
- iteracja,
- i porządki w pozostałych podstronach.

## Framework i technologia

Na dziś problemem strony nie jest przede wszystkim framework.

Najpierw trzeba naprawić:
- rolę strony,
- architekturę informacji,
- copy,
- hierarchię,
- i warstwę wizualną.

Dlatego:
- **refresh można spokojnie zrobić w obecnym stacku Next.js**
- migracja do Astro nie jest potrzebna na start

Astro można rozważać później, jeśli:
- pojawi się świadoma decyzja content-first,
- będzie sens ujednolicić warsztat z `baileo/apps/www`,
- albo obecny stack zacznie realnie przeszkadzać.

Na dziś:
- **najpierw lepsza strona**
- **dopiero potem ewentualna zmiana narzędzia**

## Rekomendowany efekt końcowy

Po refreshu strona powinna:
- wyglądać dojrzalej i lżej,
- dużo lepiej prowadzić właściciela szkoły,
- jaśniej tłumaczyć wartość projektu,
- nie tonąć w brązie,
- i nie mieszać na jednym poziomie ebooka, artykułów, konsultingu i narzędzi.

Najkrócej:

**To ma być mocniejsza marka ekspercka z lepszym frontem, a nie tylko ładniejsza wersja obecnej strony.**

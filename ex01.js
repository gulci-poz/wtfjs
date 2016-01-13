/*

Syntax Parser
- co robi kod, czy gramatyka jest poprawna
- nie tylko nasz kod, również dodatkowe czynności
- naszego kodu nie wykonuje komputer, najpierw jest on tłumaczony na kod, który komputer wykona

Lexical Environment
- gdzie coś się znajduje w kodzie, tam jest to ważne
- co otacza nasz kod
- istnieje związek pomiędzy umiejscowieniem elementów (np. zmienna) w języku programowania i fizycznym umiejscowieniem w pamięci
- umiejscowienie jest ważne dla kompilatora (interpretera)

Execution Context
- wrapper dla kodu, który jest uruchamiany (running)
- może zawierać więcej niż tylko to, co uwzględniliśmy w naszym kodzie
- może być wiele LE, za pomocą EC zarządza się tym, który LE ma działać (running)

Name/Value Pairs
- nazwa, która mapuje do konkretnej wartości (unique)
- nazwa może być zdefiniowana wiele razy, ale w danym kontekście może mieć jedną wartość
- wartością może być kolejna para nazwa/wartość

Objects
- kolekcja par nazwa/wartość

*/

/*
Address: {
    Street: 'Jana Piekalkiewicza',
    Number: 13,
    Apartment: {
        Floor: 2,
        Number: 0
    }
}
*/

/*

- kod zawsze działa w Execution Context
- podstawowy EC to global EC - wrapper dla globalnego kodu
- jest dostępny wszędzie i dla wszystkich elementów kodu danego okna/taba, w całym Lexical Environment (tutaj: m. in. nasz kod nie będący wewnątrz funkcji)
- globalny EC tworzy: Global Object oraz specjalną zmienną this
- uruchomienie pliku js (nawet pustego) powoduje stworzenie EC (wcześniej zadziałał Syntax Parser)
- mamy global EC; mamy Global Object window (Window to funkcja w tym obiekcie); mamy zmienną this - na globalnym poziomie (w global EC) obiekt window i zmienna this są sobie równe (this wskazuje/referuje do obiektu window)
- obiekt window to globalny obiekt w przeglądarkach
- np. w nodejs będziemy mieli inny globalny obiekt
- kolejne taby mają swój global EC i zmienną globalną window
- nie napisaliśmy ani jednej linii kodu, a dzięki parserowi i silnikowi js mamy EC, który coś nam już daje
- global = nie w funkcji, nic głębszego ;)
- jeśli tworzymy zmienne lub funkcje, które nie są w funkcji (leksykalnie), zostaną one dołączone do obiektu window; cały nasz kod nie będący wewnątrz jakichś funkcji jest w global EC
- link/referencja do Outer Environment - kiedy działa kod z funkcji, OE to kod poza nią
- w global EC nie ma OE, jesteśmy już najbardziej na zewnątrz

*/

/*

- EC jest tworzony w dwóch fazach
- creation phase: global object (dla global EC), this (zawsze), outer environment; rezerwacja pamięci dla zmiennych i funkcji - hoisting
- nie ma czegoś takiego, że deklaracje są kopiowane na początek skryptu, w js działa hoisting
- w hoistingu cały kod funkcji jest ładowany do pamięci, dlatego udało się wywołanie funkcji przed deklaracją
- silnik js nie wie w creation phase jaka będzie wartość zmiennej, dlatego przypisuje jej placeholder undefined; wszystkie zmienne w js mają początkową wartość undefined
- udefined - zmienna nie została zainicjalizowana
- undefined to nie to samo co not defined
- undefined to słowo kluczowe - wartość specjalna w js, nie string
- warto używać zmiennych po deklaracji, nie zastawiamy sobie pułapek
- nie przypisujemy undefined do zmiennych, kolejna pułapka
- execution phase: interpretacja linia po linii, wtedy ma miejsce przypisanie wartości do zmiennych, również przypisanie funkcji do zmiennej

*/

/*

Single Threaded, Synchronous Execution
- jednocześnie wykonuje się jedna komenda
- w przeglądarce dzieje się wiele więcej rzeczy (więcej wątków)
- z perspektywy programisty js działa jednowątkowo
- synchronicznie - jedna komenda jednocześnie, kolejno linia po linii

*/

/*

Function Invocation, Execution Stack
- invocation - calling (running) a function - nawiasy: b()
- uruchomienie funkcji - tworzy się nowy Execution Context, który ląduje na Execution Stack, tworzona jest zmienna this dla nowej funkcji; działający kontekst - kontekst, który jest na górze stosu, w nim wykonują się kolejne linie kodu - linia po linii
- kontekst będzie miał miejsce na swoje zmienne i funkcje, podobnei jak global EC; również mamy hoisting (wartość undefined dla zmiennych)
- uruchomienie kolejnej funkcji wewnątrz funkcji - powstanie kolejny EC i idzie na górę stosu
- kolejna linia kodu następująca po wywołaniu funkcji nie wykona się, będzie czekała na zakończenie funkcji - mamy wykonywanie synchroniczne
- po zakończeniu wykonywania funkcji są one kolejno zdejmowane ze stosu (pop)
- nie ma znaczenia porządek leksykalny kodu oraz pozostały kod poza funkcjami
- jeśli funkcja wywoła samą siebie, to również jest tworzony nowy EC

*/

/*

Functions, Context, Variable Environments
- VE - gdzie żyją zmienne i jakie są ich wzajemne relacje w pamięci
- każdy EC ma swoje własne VE, zmienne z funkcji znajdują się w takim VE
- global EC ma też swoje VE
- scope - gdzie jesteśmy w stanie widzieć zmienną, gdzie jest dostępna
- jeśli funkcja jest uruchomiona więcej razy, to mamy osobne EC i różne zmienne

The Scope Chain
- mamy referencję do Outer Environment, każdy EC
- referencja niekoniecznie musi być do bezpośredniego sąsiada w stosie
- tutaj działa Lexical Environment - ważne jest umiescowienie kodu funkcji względem kodu globalnego - to decyduje o scope zmiennej
- referencja do OE jest zapisywana względem LE, a nie Execution Stack
- interpreter znajdzie leksykalnie dostępną zmienną d w globalnym kontekście i silnik js w trakcie uruchomienia funkcji tak zapisze referencję do OE
- scope chain szuka po referencjach do OE, nie trzeba przeszukiwać stosu Execution Stack (w przypadku zagnieżdżonych wywołań byłoby to nieczytelne i zasobożerne); technicznie, wyszukiwanie odbywa się w Execution Stack, ale są wykonywane skoki
- zamiast szukania leksykalnego, kto mnie stworzył? który EC mnie stworzył (w swojej creation phase)?

ES6
- let - może być używane zamiast var, ale nie zastępuje go

if (a > b) {
    let c = true;
}

- let: zmienna c jest utworzona w creation phase i ma wartość undefined, ale nie możemy jej użyć aż do wywołania linii z deklaracją; jest w pamięci, ale silnik js nie pozwoli jej użyć
- block-scoping: jeśli zmienna c jest zdefiniowana z let w bloku {}, to jest dostępna tylko w tym bloku, w czasie jego wykonania (if, while, for, funkcja - za każdym razem jest to inna zmienna)

Asynchronous Callback
- asynchronous - więcej niż jedna instrukcja jednocześnie
- callback - funkcje, które się wykonują w reakcji np. na zdarzenie (asynchronicznie)
- asynchroniczność odnosi się do przeglądarki i elementów, które w niej działają i porozumiewają się ze sobą, np. asynchroniczne powiązanie silnika js z silnikiem renderującym lub z częścią obsługującą żądania http
- podobne zagadnienie do jednowątkowego modelu js i wielowątkowości samej przeglądarki
- sam silnik js to twór jednowątkowy i synchroniczny
- kolejna struktura - event queue, przeglądarka dodaje do tej kolejki informacje o zdarzeniu, które wystąpiło, a o którym silnik js ma być informowany
- funkcja callback nasłuchuje w oczekiwaniu na zdarzenie i w reakcji na jego wystąpienie wykonuje kod, który zawiera
- zdarzenia w kolejce nie muszą być obsłużone w js, po prostu występujące zdarzenia przeglądarka zapisuje w kolejce
- kiedy stos js jest pusty, silnik js sprawdza okresowo kolejkę wydarzeń (ponieważ czeka aż coś się w niej pojawi), jeśli wystąpiło jakieś zdarzenie i jest w kolejce, silnik js sprawdza czy jest w kodzie funkcja, która ma obsłużyc to zdarzenie (czy jest ustawiony listener z handlerem dla zdarzenia); jest tworzony EC dla funkcji handlera, stos znów jest opróżniany, wydarzenie jest usuwane z kolejki, kolejne wydarzenie może być obsłużone
- to przeglądarka asynchronicznie do wykonywania kodu js, umieszcza zdarzenia w kolejce do przetworzenia, sam js musi mieć pusty stos - wtedy sprawdza zdarzenia w klejsce i synchronicznie, linia po linii, wykonuje funkcję, która obsługuje zdarzenie - EC tej funkcji jest na stosie i tam wykonuje się kod
- cały czas działa event loop silnika js (synchronicznie); ta pętla działa cały czas, nawet po zakończeniu wykonywania kodu js, w tej pętli okresowo jest sprawdzana kolejka zdarzeń
- to zdarzenia są asynchroniczne, js radzi sobie z nimi synchronicznie, tylko wtedy jeśli nie ma stosie innych EC, inaczej trzeba czekać na obsługę zdarzenia przez js
- js obsługuje zdarzenia w kolejności ich wystąpienia

-> więcej o event loop???
-> clojures???

*/
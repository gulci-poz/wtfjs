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
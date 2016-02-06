//"use strict";

// strict mode, flaga
// wymagamy, żeby silnik JS w określonych sytuacjach nie był elastyczny w interpretacji kodu
// extra feature, różne silniki różnie to implementują, nie zgadzają się co do doboru reguł restrykcyjności
// jeśli mamy kilka plików, które są konkatenowane i minifikowane i pierwszy zawiera US, to reguła będzie stosowana dla całego kodu
// na logikę, jeśli będzie w którymś z pozostałych, to US nie będzie stosowana, ponieważ musi ona występować na początku pliku (funkcji)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

var person;

// zdefiniowalismy w ten sposób inny obiekt persom, bez użycia var; person pozostaje undefined
persom = {};

console.log(persom);
console.log(person);

// obie zmienne egzystują w globalnym obiekcie
console.log(window.persom);
console.log(window.person);

// silnik JS bardziej restrykcyjny, dodatkowe reguły przy parsowaniu
// nie pozwala nam użyć zmiennej bez uprzedniej deklaracji z var
// tutaj to nie zadziała, "use strict"; musi zostać użyte na początku pliku lub funkcji (tu i tu, jeśli w obu miejscach chcemy być restrykcyjni), liczy się EC
"use strict";

person2 = {};
console.log(person2);

function logNewPerson() {
    //"use strict";

    persom3 = {};
    console.log(persom3);
}

logNewPerson();

// cześć funkcjonalności ES6 wymaga włączenia flagi US (przeglądarki)

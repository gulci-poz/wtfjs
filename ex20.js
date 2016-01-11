// Function Statements and Function Expressions

// Expression - jednostka kodu, która daje wartość; nie musi być ona zapisana do zmiennej

// Statement - jednostka kodu, która wykonuje jakieś zadanie


var a;

// Expressions
a = 3;
//1 + 2;

// Statement
if (a === 3) {
    console.log(a);
}

// w js mamy funkcje w postaci statement i expression

// FS

// statement - funkcja jest umieszczona w pamięci (hoisting), ale nie daje żadnej wartości; podczas wykonywania tego kodu w execution phase nic się nie dzieje
// wartość przynosi dopiero wykonanie funkcji
function greet() {
    console.log('hi');
}

// FE

// mamy obiekt funkcji, znamy jego adres w pamięci, nie mamy nazwy (a dokładniej: właściwości nazwy, funkcja anonimowa); referencję zapamiętujemy pod zmienną, dzięki temu funkcja nie potrzebuje nazwy
// mamy expression, wartością jest obiekt
var anonymousGreet = function() {
    console.log('hi');
};

// wykonujemy kod funkcji, referencję do niej mamy w zmiennej
anonymousGreet();
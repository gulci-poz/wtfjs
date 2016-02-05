// built-in function constructors

// z konwersją
//var a = new Number("3");

var a = new Number(3);

// funkcja konstruktora zwraca obiekt, a nie liczbę
// właściwości i metody są zdefiniowane w prototypie Number
console.log(a);
console.log(Number.prototype);
console.log(a.toFixed(2));

var b = new String("John");
console.log(b);
console.log(String.prototype);
console.log(b.indexOf("o"));
console.log(b.indexOf("g"));

// Number i String to obiekty, które zawierają m. in. prymityw
// elementy Stringa są też przechowywane jako pary name-value

// mamy prymityw, ale JS opakowuje go w takim przypadku w obiekt String
console.log("John".length);
// to jest taka sama operacja
console.log((new String("John")).length);

var c = new Date("2/5/2016");
console.log(c);

// "klasy" JS można rozbudowywać, jest to praktycznie rozbudowa języka
String.prototype.isLengthGreaterThan = function (limit) {
    // this wskazuje na dany obiekt String (instancję typu String)
    return this.length > limit;
};

console.log("gulci".isLengthGreaterThan(5));

// prototype ustawiamy na klasie, obiekt nie ma takiej właściwości
// z kolei __proto__ obiektu referuje do prototype klasy

Number.prototype.isPositive = function () {
    return this > 0;
};

// mamy literał, którego JS nie skonwertuje na obiekt
//console.log(3.isPositive());

// tu Number działa jak rzutowanie (bez new, nie zwracamy obiektu), dostaniemy prymityw
//console.log(Number(3).isPositive());

console.log((new Number(3)).isPositive());

// dangerous aside

// Number i String to nie są prymitywy, to obiekty, które opakowują prymitywy w dodatkową funkcjonalność

console.log("prymityw vs obiekt");
// w przypadku == mamy coercion
console.log(3 == new Number(3));
console.log(3 === new Number(3));
// dostajemy prymityw, nie ma tworzenia i zwracania obiektu z new ponieważ używamy Number() jako zwykłej funkcji
console.log(3 === Number(3));

console.log("gulci" == new String("gulci"));
console.log("gulci" === new String("gulci"));
// prymityw
console.log("gulci" === String("gulci"));

// jeśli nie musimy, to nie używamy wbudowanych konstruktorów dla prymitywnych typów, używamy prymitywów

// jest też Boolean()

// biblioteka moment.js - do używania z datami, zamiast m. in. konstruktora Date()

// gulci's aside

// uwaga o funkcyjności JS
// funkcje (first class functions) to obiekty
// obiekty stworzone za pomocą konstruktora funkcji to trochę inne obiekty niż te stworzone za pomocą literału {} lub new Object(), prototypem jest obiekt, ale istnieje też właściwość costructor, tam można uruchomić apply()
// obiekt może zawierać funkcję

// wszystko jest obiektem lub prymitywem

// wszystko co w JS nie jest prymitywem posiada prototype, z wyjątkiem base object

var a = {};
var b = function () {};
var c = [];

// zawiera base object - pokazuje Object {} a w środku jest kopia __proto__
// to jest zawsze początek prototype chain
// ten __proto__ już nie ma kolejnego __proto__ (bo jest base object)
console.log(a.__proto__);

// tutaj dostaniemy null (coś takiego nie istnieje, nie undefined), nie ma już nic powyżej
// console.log(a.__proto__.__proto__);

// prototypem funkcji jest pusta funkcja
// na obiekcie funkcji mamy jeszcze więcej właściwości i funkcji (np. bind, call i apply), odwołujemy się do nich bezpośrednio, ale one są w __proto__
console.log(b.__proto__);
console.log(b.__proto__.__proto__);

// tutaj w prototypie mamy jakąś tablicę (pustą, chrome różnie wypisuje); jest sporo dodatkowych właściwości i metod
console.log(c.__proto__);
console.log(c.__proto__.__proto__);

// w przypadku funkcji i tablicy obiekty prototypu są rozbudowane i zawierają __proto__ czyli base object, prototyp zwykłego obiektu już jest base object - nie ma nic wyżej

a.prototype = {
    welcome: "hello"
};
console.log(a);

// pod b.prototype jest obiekt z konstruktorem (to jest funkcja, zawiera arguments)
// nadpisując __proto__ funkcji pozbawiamy się m. in. bind, call i apply, dlatego trzeba podstawiać pod prototype, a nie pod __proto__
// podobny problem będziemy mieli z tablicą

b.__proto__ = {
    welcome: "hola"
};
console.log(b);
console.log(b.__proto__);

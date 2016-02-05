// typeof, instanceof

// aside
// void - jeśli potrzebujemy zwrócić undefined, a mamy wyrażenie, które zwraca jakąś konkretną wartość
console.log(void(64 + 128));

// yield w ES6 - jak generatory w Pythonie

// nazwy są z małych liter, mamy do czynienia z prymitywami, a nie z obiektami utworzonymi za pomocą wbudowanych konstruktorów
// typeof to operator, zwraca string
console.log(typeof 3);
console.log(typeof "hello");
console.log(typeof {});

// dostaniemy object
console.log(typeof []);
// dostaniemy [object Array], całość jest stringiem
// wykonujemy bazową funkcję toString() za pomocą call() na obiekcie tablicy
console.log(Object.prototype.toString.call([]));

function Person(name) {
    this.name = name;
}

var p = new Person();
// object
console.log(typeof p);

// szukamy obiektu ("klasy") Person w prototype chain obiektu p
console.log(p instanceof Person);

// undefined
console.log(typeof undefined);
// object, bug
console.log(typeof null);

var z = function () {};
// function, funkcje w JS są obiektami, więc da się odczytać typ zmiennej, do której jest przypisana funkcja
console.log(typeof z);

// gulci's aside
// za pomocą underscore.js da się rozszerzyć obiekt o właściwości i metody z kilku obiektów, ale z instanceof tego nie zobaczymy, po przepisujemy tylko właściwości i cały czas mamy Object; można spróbować z obiektami tworzonymi przez konstruktor i new
// co jeśli nazwy pól różnych klas pokrywają się? właściwość zostanie nadpisana przez właściwość z podanego do kompozycji obiektu

var gulci = {
    firstname: "sebastian",
    lastname: "gulczynski"
};

var karolcia = {
    lastname: "moryson",
    city: "zbaszynek"
}

var wiki = {
    age: 3
}

_.extend(gulci, karolcia, wiki);

for (var prop in gulci) {
    console.log(gulci[prop]);
}

console.log(gulci instanceof Object);

// podobny przykład, ale obiekty tworzymy za pomocą konstruktora, a nie literału

function Gulci() {
    this.firstname = "sebastian";
    this.lastname = "gulczynski";
}

function Karolcia() {
    this.city = "zbaszynek";
    // ta właściwość zastąpi oryginalną przy kompozycji z underscore.js
    // this.lastname = "moryson";
}

function Wiki() {
    this.age = 3;
}

var gulobj = new Gulci();
var karobj = new Karolcia();
var wikobj = new Wiki();

// object
console.log(typeof gulobj);

_.extend(gulobj, karobj, wikobj);

// nie ruszamy konstruktora ani jego prototypu
console.log(Gulci);
console.log(gulobj);

// object
console.log(typeof gulobj);

// w obu przypadkach mamy true
// oba obiekty ("klasy") istnieją w prototype chain
console.log(gulobj instanceof Gulci);
console.log(gulobj instanceof Object);

// przepisaliśmy tylko właściwości, ich pochodzenie nie ma znaczenia dla prototypu
console.log(gulobj instanceof Karolcia);
console.log(gulobj instanceof Wiki);

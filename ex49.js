// Object.create and Pure Prototypal Inheritance

// polyfill
if (!Object.create) {
    Object.create = function(obj) {
        if (arguments.length > 1) {
            throw new Error("Object.create implementation only accepts the first parameter");
        }

        // Object.create() tak naprawdę wywołuje konstruktor i tworzy nowy obiekt, to samo robimy tutaj
        function F() {}
        F.prototype = obj;
        // zwracamy nowy obiekt
        return new F();

        // nowy obiekt zwrócony przez Object.create() w implementacji przeglądarki jest jednak trochę inny od stworzonego wprost przez konstruktor, np. nie zawiera właściwości constructor, tylko pola własne i prototypu, do tego base object __proto__
        // w tym polyfill obiekt będzie stworzony wprost za pomocą konstruktora
        // będziemy mieli tak naprawdę obiekt "typu" F
        // używając Object.create() przeglądarki mamy "typ" Object
        // ale chodzi nam o wypełnienie luki, to podejście gwarantuje nam działanie na starszych przeglądarkach (lub tych bez implementacji Object.create())
        // co ciekawe, prototyp przekazany w argumencie nie jest funkcją, to obiekt (tak jak __proto__), tworzymy funkcję i przypisujemy ten obiekt do prototype
    };
}

var person = {
    firstname: "Default",
    lastname: "Default",
    greet: function () {
        // nie jest to konstruktor funkcji, który tworzy nowy obiekt, ale musimy użyć tu this, żeby mieć referencję do obiektu person, w przeciwnym wypadku firstname odnosiłoby się do firstname dla kontekstu funkcji, a tam nie istnieje taka właściwość, dalej szukalibyśmy w global EC, tam też nie ma takiej właściwości
        return "Hi " + this.firstname;
    }
};

// przypomina się pożyczanie obiektu
// argumentem jest prototyp
// trzeba podać prototyp, inaczej się nie uda, funkcja create nie jest konstruktorem
// przypomina to fabrykę z projektu jsgmaps, gdzie dodajemy funkcję create do prototypu naszego obiektu
var john = Object.create(person);

// dostajemy pusty obiekt z obiektem prototypu __proto__ uzupełnionym o nowe właściwości, zawiera on też prototyp base object __proto__
// __proto__ wskazuje na podany w argumencie prototyp (obiekt)
console.log(john);
console.log(john.greet());

// możemy zmienić wartości, prototype chain znajdzie je najpierw na naszym obiekcie, nie zmieniamy samego prototypu
// prototyp jest nieruszony, a obiekt zyskał nowe właściwości
john.firstname = "sebastian";
john.lastname = "gulczynski";
console.log(john.greet());

// możemy w locie dodać do obiektu źródłowego właściwości, będą one widoczne w __proto__ naszego obiektu i będzie można się bezpośrednio do nich odwoływać
// nie używamy __proto__, nie musimy też kożystać w ścieżce z prototype
person.city = "poznan";
console.log(john.city);

// silnik JS danej przeglądarki może nie wspierać Object.create()
// polyfill - kod z implementacją funkcji, której może nie być w silniku JS
// definicja create: na początku pliku

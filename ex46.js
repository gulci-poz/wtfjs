// konstruktor funkcji i prototyp

// właściwości tworzymy w konstruktorze, a metody w prototypie
// gdybyśmy dodali metodę w kontruktorze (a możemy), to każdy obiekt będzie miał swoją kopię metody - jest to obiekt, a więc zajmie miejsce w pamięci
// stosujemy przypisanie = a nie :
// to są statements w funkcji, a nie definicje właściwości w literale obiektu
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

// ta funkcja jest widoczna zarówno w prototype, jak i bezpośrednio w __proto__
Person.prototype.getFullName = function () {
    return this.firstname + " " + this.lastname;
}

var john = new Person("John", "Doe");
console.log(john);

var jane = new Person("Jane", "Doe");
console.log(jane);

// __proto__ jest ustawiony na Person, tam w kontruktorze jest właściwość prototype
// ale nie jest to prototyp funkcji, tylko prototyp obiektu stworzonego za pomocą funkcji konstruktora
// na początku jest to zawsze pusty obiekt
// właściwość prototype jest używana tylko przez operator new (ale posiada ją każda funkcja)
// właściwość prototype jest miejscem wskazywanym przez prototype chain dla wszystkich obiektów stworzonych za pomocą funkcji konstruktora

// możemy w każdej chwili dodać coś do prototypu, będzie to widoczne dla obiektów wcześniej stworzonych za pomocą Person
Person.prototype.getFormalFullName = function () {
    return this.lastname + ", " + this.firstname;
};

// oczywiście możemy też na stworzonym obiekcie zmienić właściwość występującą w prototypie, zostanie ona zmieniona dla naszego obiektu - nadpisze wartość z prototypu, prototyp pozostanie nietknięty

console.log(john.getFormalFullName());

// gulci's aside

var obj = {};

// dla zwykłego obiektu prototype jest undefined
console.log(obj.prototype);

// możemy to ustawić, ale jest to tylko zwykły obiekt
obj.prototype = { greeting: "hello" };
console.log(obj.prototype);

// nie jest on dostępny bezpośrednio na obiekcie, możemy się odwoływać do niego dodając prototype w ścieżce odwołania
console.log(obj.greeting);

var objfun = function () {

};

// w przypadku funkcji właściwości dostępne w prototype są widoczne bezpośrednio na stworzonym obiekcie dopiero po użyciu funkcji jako konstruktora za pomocą new, ale sam prototyp istnieje bezpośrednio na funkcji i nie jest undefined
console.log(objfun.prototype);

// undefined
objfun.prototype = { greeting: "hello" };
console.log(objfun.greeting);

function test() {

}

// tutaj tak samo undefined
test.prototype = { greeting: "hello" };
console.log(test.greeting);

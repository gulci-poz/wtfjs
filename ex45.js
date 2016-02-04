// konstruktory funkcji, new i historia JS
// w ES6 będzie słowo class, mają zniknąć konstruktory (oczywiście będzie wsparcie wstecz)

// funkcja może być konstruktorem, który tworzy nowy obiekt "typu" (według wzorca) Person
// może też jednorazowo wykonać instrukcje, np. tutaj console
function Person() {
    // obiekt jest jeszcze pusty, nie zawiera właściwości
    console.log(this);

    this.firstname = "John";
    this.lastname = "Doe";

    // a co jeśli funkcja zawiera return?

    // tutaj nic się nie dzieje
    //return "hello";

    // zwracamy ten obiekt zamiast obiektu z nowymi właściwościami
    // tu mamy prosty prototyp (base object), a nie prototyp funkji
    //return { greeting: "hello" };
}

// funkcja konstruktora tworzy obiekt Person z zadanymi polami, wykonuje też instrukcje, this wskazuje na nowy obiekt
var john = new Person();
var john2 = new Person();

// w globalnym window będziemy mieli dwa nowe obiekty typu - john i john2

console.log(john);
console.log(john2);

// jeśli wywołamy funkcję, to this referuje do window i właśnie tam utworzy właściwości - na globalnym obiekcie
// funkcja Person() nie musi pełnić roli konstruktora, zyskuje ją dopiero po dodaniu słówka new
//Person();

// konwencja - funkcje, które mają pełnić rolę konstruktora nazywamy z wielkiej litery
// lintery mogą dostrzec, że używamy takiej funkcji bez new

// normalnie (bez new) funkcja zwróci undefined (jeśli nie ma return)
//console.log(Person());

// new to operator; tworzy pusty obiekt (dlatego this na początku pokazuje Person{}); wykonuje funkcję, EC tworzy zmienną this, która wskazuje na nowy pusty obiekt; dodaje właściwości do nowego obiektu
// jeśli funkcja Person nie zwraca wartości, to przy użyciu new silnik JS zwróci nowy obiekt, który zawiera prototyp funkcji (w przeciwnym wypadku - powyższe wywołanie)
// zwracany obiekt zawiera prototyp __proto__, w którym jest konstruktor, a w nim arguments oraz właściwość prototype, która jest na początku pusta
// właściwości i metody dla nowego obiektu zawsze dodajemy w konstruktorze za pośrednictwem this

// możemy przekazywać parametry
function Person2(first, last) {
    this.firstname = first;
    this.lastname = last;
}

var jane = new Person2("Jane", "Doe");

console.log(jane);

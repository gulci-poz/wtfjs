// ES6 i class

// syntactic sugar - class i extends
// idea konstruktora i new to raczej nie jest SS, trochę inny jest rezultat Object.create() lub ustawiania __proto__

// mimo słowa class, to nadal nie będzie klasyczna klasa - wzorzec, to będzie obiekt
// to wciąż jest prototypal inheritance
// nie jest to funkcja, więc nie wykonamy przypadkowo Person()

/*

class Person {

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet() {
        // bez this?
        return "Hi " + firstname;
    }

}

var john = new Person("John", "Doe");

*/

// ustawianie prototypu

/*

// ustawiamy __proto__

class InformalPerson extends Person {

    constructor(firstname, lastname) {
        super(firstname, lastname);
    }

    greet() {
        return "Yo " + firstname;
    }

}

*/

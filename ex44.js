// Reflection and Extend

// Reflection - obiekt ma wgląd w samego siebie, ma możliwość listowania i zmiany swoich właściwości i metod
// mechanizm Reflection jest wykorzystywany do tworzenia wzorca Extend

var person = {
    firstname: "Default",
    lastname: "Default",
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    }
};

var john = {
    firstname: "John",
    lastname: "Doe"
};

john.__proto__ = person;

// pobiera istniejące właściwości i metody oraz pozostałe z prototypu
for (var prop in john) {
    // zawężamy poszukiwania tylko do obiektu john, hasOwnProperty() jest w base object
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ": " + john[prop]);
    }
}

var jane = {
    address: "111 Main St.",
    getFormatFullName: function () {
        return this.lastname + ", " + this.firstname;
    }
};

var jim = {
    getFirstName: function () {
        return this.firstname;
    }
};

// implementacja extend z undersore.js
// john będzie rozszerzony (też: combined, composed) o właściwości i metody z jane i jim
// te właściwości będą widoczne za pośrednictwem hasOwnProperty()
_.extend(john, jane, jim);

for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ": " + john[prop]);
    }
}

for (var prop in john) {
    console.log(prop + ": " + john[prop]);
}

// żadne z tych wylistowań nie pokazuje __proto__

// w ES6 ma być extends, za pomocą którego ustawimy prototyp

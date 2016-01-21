// call(), apply(), bind()
// są one dostępne dla wszystkich obiektów funkcji (również IIFE)
// mają związek z this

// this może wskazywać na obiekt, w którym znajduje się funkcja (metoda)
// this jest powiązana z EC funkcji

var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('----------');
};

// decydujemy o zawartiści this
// pod this zostanie podstawiony obiekt person (referencja), w momencie uruchomienia funkcji
// bind zwraca nową funkcję
// obiekt logName jest kopiowany, żeby stworzyć nowy obiekt funkcji
// w trakcie tworzenia EC dla logPersonName pod this jest podstawiany obiekt person (można podstawić obiekt lub funkcję)
var logPersonName = logName.bind(person);

logPersonName('js-client', 'js-server');

// można też inaczej, na skróty
// pod logName zapisana będzie kopia funkcji stworzonej w locie, ale już z podstawionym pod this obiektem person
// wewnątrz funkcji można wtedy użyć person.getFullName() zamiast this
/*
var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
}.bind(person);
*/

// uruchomienie funkcji za pomocą call - pozwala określić, co będzie pod this
// call wykonuje funkcję, nie tworzy jej kopii
logName.call(person, 'js-client', 'js-server');

// apply robi dokładnie to samo co call, ale lista właściwych parametrów funkcji musi być przekazana w tablicy
logName.apply(person, ['js-client', 'js-server']);

// można też użyć IIFE, z call lub apply; tutaj również nie ma kopii funkcji
// zostaje użyte apply z IIFE
(function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('----------');
}).apply(person, ['js-client', 'js-server']);

// function borrowing
// pożyczamy funkcję dla użycia z obiektem person2
// nazwy właściwości muszą być takie same w obu obiektach
// to samo można zrobić z call

var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
};

console.log(person.getFullName.apply(person2));

// function currying
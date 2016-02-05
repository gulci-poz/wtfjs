// call(), apply(), bind()
// są one dostępne dla wszystkich obiektów funkcji (również IIFE)
// mają związek z this

// this może wskazywać na obiekt, w którym znajduje się funkcja (metoda)
// this jest powiązana z EC funkcji

var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function () {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var logName = function (lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('----------');
};

// decydujemy o zawartiści this
// pod this zostanie podstawiony obiekt person (referencja), w momencie uruchomienia funkcji
// bind zwraca nową funkcję; bind nie wykonuje funkcji
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

// można też użyć IIFE z call lub apply; tutaj również nie ma kopii funkcji
// można też użyć apply po klamrze i całość będzie wyrażeniem
// bez objęcia całości nawiasami apply nie wykona się
// z kolei jslint narzeka, żeby literału funkcji nie ujmować w nawiasy, jeśli nie zamierzamy tej funkcji wywołać; ale my wywołujemy za pomocą apply
// chyba bardziej sensowny jest zapis z apply po klamrze i całość w nawiasy wyrażenia
(function (lang1, lang2) {
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

// function currying - tworzenie kopii funkcji z zadanymi parametrami

function multiply(a, b) {
    return a * b;
}

// this nie ma znaczenia, coś trzeba przekazać; tutaj this zostanie zastąpione przez to samo this
// w kopii funkcji kolejne argumenty będą zastępowały kolejne argumenty oryginalnej funkcji
// te parametry będą permanentne
// 2 zastąpi a, w nowej funkcji trzeba podać tylko jeden argument - b
var multiplyByTwo = multiply.bind(this, 2);
console.log('multiplyByTwo: ' + multiplyByTwo(3));

// gulci's aside - to think and todo
/*
za pomocą bind i jakiegoś warunku można konstruować ciekawe funkcje, np. w zależności od jakiejś wartości przekazany obiekt będzie zawierał odpowiednią do tej wartości metodę, a my tym sposobem wyprodukujemy sobie z bind nową funkcję; można też uwzględnić wartość z curryingu przy konstrukcji funkcji
*/
// można komponować nazwę funkcji, złożyć ją do stringa i przekazać gdzieś, gdzie oczekiwana jest funkcja

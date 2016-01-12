// by Value vs by Reference

// by value

// a zawiera adres w pamięci
var a = 10;

// b zawiera nowy adres w pamięci, pod tym adresem jest przechowywana kopia wartości zapisanej pod adresem a
var b = a;

// przekazanie do funkcji zmiennej typu prymitywnego też jest by value

console.log(a);
console.log(b);

// porównujemy wartość i jej typ
console.log(a === b);


// by reference

// zmienne obiektów (w tym funkcji) również pamiętają adres w pamięci, ale nowa zmienna będzie wskazywała na tę samą komórkę pamięci; nie powstaje nowy obiekt, dwie zmienne wskazują na ten sam adres

// przekazanie obiektu do funkcji jest również by reference

var c = { firstname: 'Sebastian' };
var d = c;

console.log(c);
console.log(d);

d.firstname = 'Karolina'; // mutate

console.log(c);
console.log(d);

// mutate - zmienić coś

function changeGreeting(obj) {
    obj.greeting = 'hola';
}

var e = { greeting: 'hello'};

console.log(e.greeting);
changeGreeting(e);
console.log(e.greeting);

var f = e;
console.log(f);

// operator przypisania z wartością ustanawia nowy adres w pamięci
// mamy nowy object literal, który nie istnieje w zapisanej wcześniej komórce pamięci
// co się dzieje z obiektem, którego adres mieliśmy wcześniej zapisany pod zmienną? garbage collector?

f = { greeting: 'howdy' };
console.log(f);
// 1
/*
var a = 'Hello, World!';

function b() {
    console.log('Called b function.');
}

b();
console.log(a);
*/

// 2
/*
b(); // funkcja b jest dostępna, wykonała się
console.log(a); // undefined, ale zmienna a jest dostępna

var a = 'Hello, World!';

function b() {
    console.log('Called b function.');
}
*/

// 3
/*
b(); // funkcja b jest dostępna, wykonała się
console.log(a); // zmienna a nie jest zdefiniowana, uncaught ReferenceError

function b() {
    console.log('Called b function.');
}
*/

// 4
b(); // funkcja b jest dostępna, wykonała się
console.log(a); // undefined, ale zmienna a jest dostępna
console.log(funb); // undefined, przypisanie funkcji do zmiennej będzie miało miejsce w execution phase

var a = 'Hello, World!';
var funb = function() {
    console.log('I\'m function funb.');
};

function b() {
    console.log('Called b function.');
}
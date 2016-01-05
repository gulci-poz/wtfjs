console.log(isNew);

// trzeba użyć var, inaczej zmienna bedzie not defined, hoisting nie zadziała
// var "zwraca" w konsoli undefined
var isNew = true;
isNew = 'hello';
isNew = 1;

var a = 3 + 4 * 5;
console.log(a);

var a = 2, b = 3, c = 4;
// = right-to-left
a = b = c;
console.log(a); // 4
console.log(b); // 4
console.log(c); // 4

var conv = 1 + '2'; // '12'
console.log(conv);

console.log(1 < 2 < 3); // true
console.log(3 < 2 < 1); // true
console.log(false < '1'); // true
console.log(Number(false)); // 0
console.log(Number(true)); // 1

console.log(Number(undefined));
console.log(Number(null));

console.log('3' == 3); // true
console.log('3' === 3); // false
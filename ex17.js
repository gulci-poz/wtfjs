// namespace - kontener dla zmiennych i funkcji, separacja zmiennych i funkcji o takich samych nazwach

var greet = 'hello';
var greet = 'hola';

console.log(greet);

// kontenery dla ustanowienia przestrzeni namespace
var english = {};
var spanish = {};

english.greet = 'hello';
spanish.greet = 'hola';

console.log(english.greet);
console.log(spanish.greet);
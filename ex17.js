// namespace - kontener dla zmiennych i funkcji, separacja zmiennych i funkcji o takich samych nazwach
// druga deklaracja nadpisze pierwszą

var greet = 'hello';
var greet = 'hola';

console.log(greet);

// kontenery dla ustanowienia przestrzeni namespace (fake)
var english = {};
var spanish = {};

//english.greet = 'hello';
//spanish.greet = 'hola';
//console.log(english.greet);
//console.log(spanish.greet);


// pod english.greetings mamy undefined, a nie da się zapisać właściwości na czymś, co jest undefined
// trzeba najpierw stworzyć obiekt greetings

english.greetings = {};
spanish.greetings = {};

english.greetings.greet = 'hello';
spanish.greetings.greet = 'hola';

console.log(english.greetings.greet);
console.log(spanish.greetings.greet);


// można też na samym początku stworzyć całą strukcturę obiektu
/*
var english = {
    greetings: {
        greet: 'hello';
    }
};
*/
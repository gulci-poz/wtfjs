var a; // undefined
// var a = 1; // defined
// bez deklaracji - a is not defined

console.log(a);

// nigdy nie robimy takich rzeczy, pułapka gdy sprawdzamy czy zmienna ma przypisaną wartość
//a = undefined;

if(a === undefined) {
    console.log('a is undefined');
} else {
    console.log('a is defined');
}
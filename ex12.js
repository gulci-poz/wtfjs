// Existence and Booleans

console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean("")); // false
console.log(Boolean(0)); // false

var a;

//a = 'hello';

// mamy undefined czyli konwersja na false, sprawdzamy czy zmienna ma wartość
// na wypadek, gdyby a miało wartość zero, konwersja da false
// precedence: ===, ||
if(a || a === 0) {
    console.log('true');
} else {
    console.log('false');
}
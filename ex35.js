// enkapsulacja i wykorzystanie closure

var capsule = (function() {
    return function() {
        var msg = 'hello';
        console.log(msg);
    };
}());

console.log(typeof capsule);
capsule();

// krok dalej, zwracamy IIFE

// wykonujemy IIFE, które zwraca wyrażenie IIFE, a to wyrażenie zwraca funkcję, mamy podwójny kordon EC, w capsule IIFE dostajemy funkcję
var capsuleIIFE = (function() {
    return (
        function() {
            return function() {
                var msg = 'hola';
                console.log(msg);
            };
        }
    ());
}());

console.log(typeof capsuleIIFE);
capsuleIIFE();
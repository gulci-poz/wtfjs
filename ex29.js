// IIFEs and safe code

// tworzony jest EC dla anonimowej funkcji
// zmienna greeting będzie EV funkcji
// możemy mieć gdzieś indziej zmienną globalną greeting i nie koliduje ona z naszą zmienną
// IIFEs dają nam enkapsulację kodu

var greeting = 'hola';

(function (global, name) {
    // tu greeting jest hoisted, nie odwołujemy się zatem do globalnej greeting
    console.log(greeting);
    
    // gdyby nie było deklaracji, to moglibyśmy bezpośrednio się odwoływać do zmiennej globalnej
    var greeting = 'hello';
    console.log(greeting + ' ' + name);
    console.log(this.greeting);
    
    // nie uda się jeśli nasze IIFE nie jest leksykalnie w global EC, w innym EC mamy inne this
    //this.greeting = 0;
    
    console.log('global greeting: ' + global.greeting);
    global.test = 'test';
}(window, 'gulci'));

// obiekt jest przekazywany przez referencję, jeśli chcemy ingerować w globalny obiekt, to wystarczy podać do funkcji window; w przypadku nodejs podajemy inny obiekt (window nie jest tam obiektem globalnym), wewnątrz funkcji będziemy go mieli jako global

// dzięki temu na globalnym obiekcie możemy tworzyć zmienne, które potem będą dostępne poza IIFE; robimy to świadomie

console.log(greeting + ' from global context');
console.log(test);
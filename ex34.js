// closures
console.log('closure takie samo dla wszystkich funkcji');

function buildFunctions() {
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        );
    }
    
    return arr;
}

var fs = buildFunctions();

// dzięku closure mamy dostęp do załączonej zmiennej i, ale ona ma tylko jedną wartość - ostatnią znaną
// funkcje były utworzone w buildFunctions(), ale są wywoływane dopiero tutaj
// OE wszystkich funkcji jest takie samo, leksykalnie są w tym samym miejscu
// outer variable = free variable
fs[0]();
fs[1]();
fs[2]();

//---------- z użyciem let
console.log('odrębne zmienne j, w jednym closure, ES6 z użyciem let');

function buildFunctions2() {
    // strict mode lepiej używać tylko w funkcjach, które tego potrzebują
    "use strict";
    
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        // z let scope jest na blok, w każdym obiegu pętli mamy nową zmienną, później w OE każdej funkcji oprócz i jest jeszcze zmienna j, w każdej funkcji inna
        // brak wsparcia w Chrome 47 bez strict mode
        let j = i;
        
        arr.push(
            function() {
                console.log(j);
            }
        );
    }
    
    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

//---------- implementacja w ES5
console.log('odrębne closure dla każdej funkcji');

function buildFunctions3() {
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        arr.push(
            // w każdym obiegu pętli uruchamiamy IIFE
            // dostajemy nowy EC i odrębny scope dla danego IIFE (każda IIFE ma swoją zmienną j)
            // closure (dołączone outer variables) będzie w każdym elemencie tablicy inne dzięki istnieniu odrębnych EC
            // tablica będzie zawierała zwrócone funkcje ze swoimi closure (funkcje te są rezultatami wykonania IIFEs)
            
            (function(j) {
                return function() {
                    console.log(j);
                };
            }(i))
        );
    }
    
    return arr;
}

var fs3 = buildFunctions3();

fs3[0]();
fs3[1]();
fs3[2]();
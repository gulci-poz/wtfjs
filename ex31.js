// gulci's aside

// łączymy ideę IIFE oraz fake namespaces

// zwracamy obiekt
// this na każdym poziomie zwraca obiekt nadrzędny (z samymi obiektami też to mamy), w którym jest EC
// funkcje wewnętrzne zwracają za this Window
// funkcje - właściwości zwracają z this funkcję, w której jest EC
// dzięki IIFE mamy enkapsulację, przy samych obiektach tego nie ma
// mamy dzięki temu namespaces z pełną enkapsulacją z własnym EC, z samymi obiektami najwyższy poziom może się pokrywać z innym najwyższym poziomem, ponieważ są one w globalnym EC
// oczywiście można przez przypadek zakryć zmienną (capsule), ale chodzi o enkapsulację co do EC

var capsule = (function() {
    return {
        run: function() {
            console.log('run');
            console.log(this);
        },
        aux: {
            auxRun: function() {
                console.log('auxRun');
                console.log(this);
                
                var test = function() {
                    // this zwraca Windows
                    console.log(this);
                };
                
                //test();
            }
        }
    };
}());

// mamy obiekt, bo wkonaliśmy już funkcję
// moglibyśmy za każdym razem wywoływać capsule(), ale za każdym razem mielibyśmy nowy obiekt, teraz mamy cały czas ten sam obiekt
console.log('capsule: ' + typeof capsule);

capsule.run();
capsule.aux.auxRun();

// tej funkcji nie wykonamy, bo zmienna test jest jeszcze undefined, wykonuje się tylko wewnątrz funkcji auxRun
//capsule.aux.auxRun.test();
console.log('test: ' + capsule.aux.auxRun.test);

// tu auxFun jest jeszcze undefined, ale potem ją deklarujemy i mamy do niej dostęp
console.log('auxFun: ' + capsule.aux.auxRun.auxFun);
capsule.aux.auxRun.auxFun = function() { console.log('auxFun'); };
capsule.aux.auxRun.auxFun();

// możemy w dowolnym miejscu struktury dodać obiekt (też funkcja powyżej)
capsule.aux.addition = { firstname: 'gulci' };
console.log('nowy obiekt: ' + capsule.aux.addition.firstname);
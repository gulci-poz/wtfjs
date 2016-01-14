//---------- gulci's aside

// w funkcjach zdefiniowanych wewnątrz funkcji this wskazuje na Window (może to być nawet anonimowa funkcja)
// w funkcjach zdefiniowanych jako właściwość obiektu funkcji this wskazuje na obiekt nadrzędny (macierzystą funkcję, tam jest EC)
// przy wywołaniu tak zdefiniowanej funkcji pozostałe właściwości macierzystej funkcji są hoisted, ale undefined (nawet funkcje)
// powyższe reguły działają przy dalszym zagnieżdżaniu definicji funkcji

function a() {
    var id = 'fun_a';
    console.log(this);
    b();
    
    // możemy wewnątrz funkcji zadeklarować funkcję, w b this będzie się odwoływało do obiektu Window
    // gdy a zostanie wywołane, to b będzie hoisted jako funkcja, dlatego możemy ją wywołać przed deklaracją
    function b() {
        console.log(this);
    }
}

a();

// deklarujemy anonimową funkcję w postaci właściwości obiektu funkcji
// w tym wypadku this będzie się odwłoywało do obiektu a, który jest "globalnym obiektem" dla funkcji c (funkcja c jest zmienną w kontekście obiektu funkcji a)
// mamy dostęp do pozostałych właściwości obiektu a
// zmienna id funkcji a jest hoisted, nie uruchamiamy samej funkcji a, dlatego id jest undefined; b też będzie undefined
// mimo, że b jest funkcją, to bez wywołania a jest ona traktowana jak zmienna - jest hoisted i jest undefined, nie możemy w tym wypadku wykonać funkcji b
a.c = function() {
    console.log(a.id);
    console.log(a.b);
    console.log(this);
    //a.b();
    
    // tutaj this znów będzie się odwoływało do Window
    var d = function() {
        console.log('fun_d');
        console.log(this);
    };
    d();
};

a.c();

// funkcji d nie wywołamy, ale jest hoisting (undefined)
console.log(a.c.d);
//a.c.d();
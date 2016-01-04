function b() {
    console.log('function b');
    
    // nie mamy dostępu do zmiennej e z kontekstu funkcji a()
    // referencja do Outer Environment pokazuje na kontekst globalny (leksykalnie, funkcja b() jest leksykalnie "obok" kodu globalnego)
    //console.log(e);
    
    // mamy za to dostęp do zmiennej globalnej d
    console.log(d);
    
    var c;
}

function a() {
    console.log('function a');
    
    var e = 'variable e, function a';
    
    b();
    
    // mamy zmienną d w kontekście funkcji a(), początkowo będzie miała wartość undefined (hoisting)
    // jeśli nie damy var d, to oczywiście cały czas mamy dostęp do zmiennych w kontekście globalnym i pod d będziemy mieli właśnie globalną zmienną d
    // var tworzy zmienną w kontekście lokalnym funkcji, jeśli nie użyjemy var, to interpreter znajdzie leksykalnie dostępną zmienną d w globalnym kontekście i silnik js w trakcie uruchomienia funkcji tak zapisze referencję do OE
    console.log(d);
    var d = 'variable d, function a';
    console.log(d);
}

// zmienna globalna, w globalnym kontekście (nie jest w żadnej funkcji)
var d = 'variable d, global context';
console.log(d);

a();
console.log(d);
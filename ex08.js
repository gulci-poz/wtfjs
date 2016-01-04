function a() {
    
    function b() {
        // myVar leksykalnie będzie z funkcji a()
        console.log(myVar);
    }
    
    // jeśli nie byłoby tej deklaracji, to scope chain szukałby dalej aż do global EC
    var myVar = 2;
    b();
}

var myVar = 1;
a();
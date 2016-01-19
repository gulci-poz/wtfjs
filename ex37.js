function sayHiLater() {
    // zmienna wchodzi w skład closure funkcji anonimowej - callbacka z setTimeout()
    // setTimeout() wykonuje po zakończeniu przekazaną przez nas funkcję (calls back)
    var greeting = 'hi';
    
    // wykorzystujemy first class function (przekazanie) i function expression - deklarację funkcji w locie; jquery też ich używa
    setTimeout(function() {
        console.log(greeting);
    }, 3000);
}

// ta funkcja będzie czekała na opróżnienie stosu EC
sayHiLater();

function tellMeWhenDone(callback) {
    var a = 1000;
    var b = 2000;
    
    callback();
}

tellMeWhenDone(function() {
    console.log('I\'m done');
});

tellMeWhenDone(function() {
    console.log('all done');
});
// function factories
// użycie, np. zamiast function overload

function makeGreeting(language) {
    
    // language będzie w closure
    return function(firstname, lastname) {
     
        // na razie bez domyślnego argumentu language
        if (language === 'en') {
            console.log('Hello ' + firstname + ' ' + lastname);
        }

        if (language === 'es') {
            console.log('Hola ' + firstname + ' ' + lastname);
        }
        
    };
    
}

// dwa różne wywołania, dwa różne EC, a zatem różne closures
var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('Sebastian', 'Gulczynski');
greetSpanish('Sebastian', 'Gulczynski');

// closure - closed-in, closed-up ;)
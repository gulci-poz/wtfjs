// arguments and spread (ES6)

// w EC dostajemy zmienną arguments - zawiera wartości wszystkich argumentów przekazanych do funkcji, nie mamy dostępu do nazw
// arguments to obiekt, indeksy to nazwy dla par name/value (wypisane w pochylonych nawiasach kątowych; array like - wyglądają i zachowują się jak tablica, ale to nie tablica, nie ma całej funkcjonalności tablicy js; można się odwoływać po indeksach)

function greet(firstname, lastname, language) {
    language = language || 'en';
    
    // arguments to obiekt
    //console.log(typeof arguments);
    
    // możemy się odwoływać indeksem lub operatorem computed member access
    // do tablicy też można z computed member access
    //console.log(arguments[0]);
    //console.log(arguments['0']);
    
    if(arguments.length === 0) {
        console.log('missing parameters');
        console.log('----------');
        return;
    }
    
    // puste return powoduje wyjście z funkcji, nie potrzebujemy else
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('----------');
}

// dostaniemy undefined, lokalne zmienne są hoistowane w funkcji
// przekazujemy by value
greet();

// argumenty są przetwarzane left-to-right
greet('Sebastian');
greet('Sebastian', 'Gulczynski');
greet('Sebastian', 'Gulczynski', 'pl');

// w ES6 będzie można używać domyślnych argumentów w deklaracji funkcji

// arguments będzie deprecated, w ES6 będziemy mieli parametr spread
/*
function greet(firstname, lastname, language, ...other) {
kolejne argumenty zostaną zapisane w tablicy js other
*/
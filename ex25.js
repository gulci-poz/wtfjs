// function overloading - w js nie ma takiego mechanizmu, można go jedynie imitować następującym wzorcem

function greet(firstname, lastname, language) {
    language = language || 'en';
    
    if (language === 'en') {
        console.log('Hello ' + firstname + ' ' + lastname);
    }
    
    if (language === 'es') {
        console.log('Hola ' + firstname + ' ' + lastname);
    }
}

function greetEnglish(firstname, lastname) {
    greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
    greet(firstname, lastname, 'es');
}

greet('Sebastian', 'Gulczynski');
greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');
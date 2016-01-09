// object literal
// jeśli {} nie jest częścią np. bloku sterującego, to js zakłada, że chcemy stworzyć nowy obiekt; zawartość {} jest traktowana przez js jako jedna linia

// pusty obiekt
//var person = {};

// jeśli mamy swoje właściwości, to konsola nie wyświetla "fabrycznych" właściwości obiektu; jeśli mamy obiekt wewnątrz, to widzimy wszystko
var gulci = {
    firstname: 'Sebastian',
    lastname: 'Gulczynski',
    address: {
        street: 'Jana Piekalkiewicza 13',
        city: 'Poznan',
        state: 'wielkopolskie'
    }
};

//console.log(person);

function greet(person) {
    console.log('hi, ' + person.firstname);
}

greet(gulci);

// możemy stworzyć obiekt w locie za pomocą object literal
greet({ firstname: 'Karolina', lastname: 'Gulczynska' });

// możemy w locie dodać właściwości do obiektu, używając notacji . i object literal
gulci.addressJob = {
    street: 'Dabrowskiego',
    city: 'Poznan',
    state: 'wielkopolskie'
};

console.log(gulci.addressJob);
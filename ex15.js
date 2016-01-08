/*

Obiekt i jego properties
- podstawowe typy
- obiekty
- funkcje (tutaj: metody); funkcje to też obiekty

- obiekt ma adres w pamięci, properties też mają adresy w pamięci, obiekt przechowuje referencje do nich

*/

// nie jest to preferowany sposób tworzenia obiektów, raczej za pomocą object literals
var person = new Object();

var firstNameProperty = 'firstname';

// computed member access operator
// tu może być wyrażenie, które zostanie obliczone
// obiekt dostanie referencję (adres) do stringa 'firstname'
person[firstNameProperty] = 'Sebastian';
person['lastname'] = 'Gulczynski';

// w konsoli nie pokazuje wszystskich właściwości
console.log(person);

console.log(person[firstNameProperty]);

// member access operator, preferowany sposób dostępu do właściwości obiektu
console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = 'Jana Piekalkiewicza 13';
person.address.city = 'Poznan';
person.address.state = 'wielkopolskie';

console.log(person['address']);
console.log(person['address']['state']);

// najpierw wykona się . ale i tak 'address' musi zostać przeliczone, żeby było wiadomo, do której właściwości . ma się dostać
console.log(person['address'].city);

// member access ma wyższy priorytet niż computed member access
console.log(person.address['street']);
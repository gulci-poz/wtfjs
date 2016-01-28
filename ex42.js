// zablokowanie skrótów klawiszowych blokujących "ó" i "ż"
// ~/user/.atom/keymap.cson
/*
'body':
  'ctrl-alt-o': 'unset!'

'atom-workspace atom-text-editor:not([mini])':
  'ctrl-alt-z': 'unset!'
*/

// prototypal inheritance - examples

var person = {
    firstname: "Default",
    lastname: "Default",
    getFullName: function () {
        return this.firstname + " " + this.lastname;
    }
};

var john = {
    firstname: "John",
    lastname: "Doe"
};

// tak nie robimy, możemy mieć poważne problemy z wydajnością; tylko demo
// normalnie korzystamy z obj.prototype, __proto__ obiektu jest wtedy nieruszony

// john dziedziczy z person
// __proto__ będzie obiektem z właściwościami z person, w nim też będzie jego __proto__, nadpisujemy __proto__ na najwyższym poziomie, ale nie nadpisujemy wzorcowego __proto__ (bo mamy kopię)
// nie korzystamy z prototype
// nie będziemy mieli dostępu do oryginalnego __proto__ obiektu john, bo go nadpiszemy
// EC funkcji z person wie o jaki obiekt this nam chodzi - john
// będziemy odwoływali się do właściwości z person tylko wtedy, gdy nie znajdziemy tych właściwości w john (prototype chain)
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstname);

var jane = {
    firstname: "Jane"
};

// this początkowo wskazuje na jane (znajdujemy firstname), ale potem nie mamy lastname i po prototype chain szukamy w person - this wskazuje wtedy na ten obiekt
jane.__proto__ = person;
console.log(jane.getFullName());

// ustawiamy nową właściwość na obiekcie jane, nie nadpisujemy właściwości z prototypu, mimo że tam ta właściwość istnieje
/*
jane.lastname = "Dummy";
console.log(jane.getFullName());
console.log(person.getFullName());
*/

// __proto__ jest referencją, więc zmienimy lastname na obiekcie person
// z prototype było by tak samo
/*
jane.__proto__.lastname = "Dummy";
console.log(jane.getFullName());
console.log(person.getFullName());
*/

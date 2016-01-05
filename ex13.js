// Default Values

function greet(name) {
    // jeśli jest coś w name, to będzie wykorzystana pierwsza wartość; pierwsza wartość, która da się skonwertować na true; zero nie przejdzie
    // jeśli jedna z wartości będzie false, to zostanie zwrócona wartość, którą da się skonwertować na true
    // w ogólności: pierwsza wartość, którą da się skonwertować na true
    name = name || '<Your name here>';
    console.log('hello ' + name);
}

greet('gulci');

// hello undefined
// mamy EC funkcji greet() i lokalną zmienną name w funkcji, z przypisanym undefined (hoisting)
// tutaj undefined zostało skonwertowane na string
greet();
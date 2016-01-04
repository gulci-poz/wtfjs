function b() {
    console.log('called function b');
    console.log(a);
}

b(); // funkcja b() ma dostęp do zmiennej a, która na razie ma wartość udefined (hoisting)
console.log(a);

// w execution phase zmienna a ma nową wartość i mamy już dostęp do tej wartości

var a = 'Hello, World!';

b();
console.log(a);
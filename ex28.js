// immediately invoked function expressions (IIFE, /ifi/)

// immediately invoked - po utworzeniu funkcji
// następuje wywołanie, a pod zmienną greeting mamy undefined
var greeting = function(name) {
    console.log('Hello ' + name);
}('gulci');

console.log(greeting);
console.log(typeof greeting);

// rezultat działania funkcji zapamiętujemy pod zmienną hello
// bez wywołania, mielibyśmy funkcję zapisaną pod zmienną hello (return niczemu by tu nie przeszkadzało)
var hello = function(name) {
    return 'Hello ' + name;
}('johnny');

console.log(hello);
console.log(typeof hello);

// standalone function
// parser oczekuje, że to FS, ale nie widzi nazwy funkcji
// parser nie może widzieć, że function to pierwszy wyraz, grupujemy nawiasami i już mamy FE
// nawiasów używamy tylko z wyrażeniami, nigdy ze statement; js widząc nawiasy interpretuje zawartość jako wyrażenie
// mamy obiekt funkcji, który możemy wywołać
// łatwiej to pokazać z console.log() w środku, z return musielibyśmy ująć kod w console.log() lub zapisać pod zmienną, żeby otrzymać rezultat wizualnie
(function(name) {
    console.log('Hello ' + name);
})('wiki');

// do zmiennej
var mela = (
    function(name) {
        return 'Hello ' + name;
    }
)('mela');

console.log(mela);
console.log(typeof mela);

// jeszcze inaczej, argument podajemy wewnątrz nawiasów grupujących
// tu w nawiasach mamy już rezultat
// z argumentem podanym poza nawiasem, w samych nawiasach mamy obiekt funkcji, którą potem wywołujemy
// tutaj ma to może więcej sensu, ponieważ mamy enkapsulację całości (wraz z wywołaniem) w nawiasach
(function(name) {
    console.log('Hello ' + name);
}('wiki i mela'));

// nie zmienia to faktu, że na koniec i tak dostajemy to, co funkcja zwraca
var test = (
    function(name) {
        return 'Hello ' + name;
    }
('wiki i mela'));

console.log(test);
console.log(typeof test);
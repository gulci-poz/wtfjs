// closures

function greet(whattosay) {
    // funkcje to obiekty, można je zwracać
    // "tworzenie" closure; to silnik js tworzy closure
    return function(name) {
        console.log(whattosay + ' ' + name);
    }
}

var greetfun = greet('yol');
console.log(greetfun);

// zmienna whattosay została utworzona w funkcji greet
// w greetfun mamy zwróconą nową funkcję, nie ma już EC funkcji greet, ale mimo to pamiętamy whattosay
// normalnie zmienne z zakończonego EC podlegają garbage collection
// po usunięciu ze stosu EC, VE (miejsce w pamięci) wciąż istnieje

// funkcja greetfun wciąż posiada referencję do OE, jest tam zmienna whattosay
// każda funkcja zdefiniowana wewnątrz greet będzie miała referencję do pamięci jej EC
// silnik js dba o to, żeby idąc w dół po scope chain, można było znaleźć to miejsce w pamięci, mimo braku na stosie EC funkcji greet
// EC funkcji wewnętrznej załączył (closed-in) swoje zewnętrzne zmienne
// ten mechanizm załączania nazywa się closure, jest to funkcja języka js
// niezależnie od tego, kiedy uruchomimy greetfun, zawsze będziemy mieli dostęp do zmiennych OE (scope będzie nienaruszony)

greetfun('gulci');

greet('yol')();
greet('yol')('gulci');
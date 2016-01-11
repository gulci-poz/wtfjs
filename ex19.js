// funkcje to obiekty

// first class functions - można z nimi zrobić wszystko, co z innymi typami: przypisać do zmiennej, przekazać (jako argument), stworzyć w locie (podobnie do składni object literal)

// funkcje to specjalny typ obiektu, mają adres w pamięci oraz specjalne (ukryte) właściwości

// funkcja może mieć właściwości w postaci prymitywu, obiektu lub funkcji

// ukryte właściwości: nazwa (opcjonalna, funkcja może być anonimowa), kod (ciało funkcji); funkcja jest obiektem z właściwością kodu

// kod jest wykonywalny (invocable)

// funkcja może być przemieszczana, kopiowana, przypisana

// funkcja jest obiektem w global context


function greet() {
    console.log('hi');
}

// możemy dodać do obiektu funkcji właściwość, będzie ona w pamięci
greet.language = 'english';

// dostaniemy tekst (ciało) funkcji
console.log(greet);

console.log(greet.language);

// tworzy się EC
greet();
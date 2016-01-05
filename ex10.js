/*

Dynamic Typing
- silnik js sam określa podczas wykonywania kodu z jakiego typu danymi ma do czynienia; jedna zmienna może przechowywać dane różnego typu

Primitive (Simple) Types
- typ prymitywny reprezentuje pojedynczą wartość - nie jest to obiekt
- undefined - brak istnienia wartości, nie samej zmiennej; nie przypisujmy takiej wartości do zmiennej, żeby nie wprowadzać zamieszania; pamiętajmy, że zmiennej o wartości undefined sami jeszcze nie przypisaliśmy wartości, undefined przypisał silnik js w creation phase EC (hoisting zmiennej)
- null - to samo, co undefined, ale z nastawieniem, że sami możemy nadawać taką wartość, żeby określić brak konkretnej wartości
- boolean - true lub false
- number - domyślnie jest to float (zawsze jest jakaś część dziesiętna)
- string - sekwencja znaków
- symbol (ES6)

Operatory
- specjalna funkcja, która składniowo wygląda inaczej niż inne funkcje
- zazwyczaj dwa parametry i zwracają rezultat
- notacja infix

Operator Precedence and Associativity
- która funkcja operatora zostanie wykonana jako pierwsza; funkcje są wywoływane w kolejności następowania po sobie w porządku (precedence)
- w przypadku takiego samego precedence badamy associativity: left-to-right lub right-to-left
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
- = zwraca prawy parametr, przypisywana jest wartość, a nie referencja, = jest right-to-left

Coercion (wymuszenie)
- konwersja wartości z jednego typu na inny
- int + string lub string + int, int będzie konwertowany na string i będziemy mieli konkatenację (w konsoli może być na czarno, bez apostrofów lub cudzysłowia)
- wszystko dzieje się w funkcji operatora (i za pośrednictwem silnika js)

Comparison Operators
- < jest left-to-right
- 1 < 2 < 3 - true
- 3 < 2 < 1 - true
- boolean przy porównaniu z int lub string jest konwertowany odpowiednio na int lub string

- funkcja Number()
- Number(undefined) - NaN, nie da się skonwertować undefined na liczbę
- Number(NaN) - NaN
- NaN - można traktować jak primitive type
- Number(null) - 0

- '3' == 3 // true
- '3' === 3 // false, sprawdzanie co do typu
- false == 0 // true
- false === 0 // false, sprawdzanie co do typu
- null == 0, false
- null === 0, false
- '' == 0, true
- '' === 0, false
- '' == false, true
- '' === false, false

- === sprawdza również typ, a dokładniej: nie próbuje przeprowadzać konwersji
- używamy ===
- staramy się porównywać zmienne, o których wiemy, że mają taki sam typ
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
- ES6 - Object.is, dwa argumenty

*/
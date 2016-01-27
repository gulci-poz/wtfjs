// OOJS, prototypal inheritance - prostsze

// dziedziczenie w rozumieniu JS - obiekt uzyskuje dostęp do właściwości i metod innego obiektu

// wszystkie obiekty w JS mają właściwość __proto__ - jest to kopia obiektu: window.__proto__.__proto__.__proto__ - to jest base object, on już nie ma __proto__ (obiekt jest Window, ale zmienna referująca jest window)
// ten obiekt da się zmienić, dokonujemy zmian na obiekcie Window!
// przy tworzeniu nowych obiektów będziemy mieli cały czas dobry wzorzec __proto__
// __proto__ to też zmienna globalna, ktora wskazuje na ten sam obiekt z Window
// jest to samodzielny obiekt, ktorego możemy używać
// zmienną można globalnie zmienić - stracimy wtedy referencję
// jest to pierwowzor (wzorzec) każdego obiektu w JS (z wyjątkiem base object)
// raczej go nie zmieniamy w obiekcie, zmieniamy prototype
// nie referujemy do __proto__, w każdym obiekcie mamy dostępną jego kopię - prototyp

// właściwości są szukane w obiekcie, a w drugiej kolejności w prototypie (i dalej w prototype chain), ale wyglądają jakby były właściwościami naszego obiektu

// prototype może wskazywać na kolejny obiekt prototypu; każdy obiekt może mieć swoj własny prototyp; tworzy się prototype chain - tam dalej idzie wyszukiwanie właściwości

// tak ustala się dostęp do właściwości i metod, ktore są w sekwencji obiektow połączonych za pomocą właściwości prototype (trochę podobnie jak scope chain, ale tam jest leksykalnie); odwołujemy się bezpośrednio do właściwości obiektu, łańcuch jest przed nami ukryty - silnik JS go przeszukuje

// ustawiamy właściwość prototype, a nie __proto__

// obiekty mogą dzielić ten sam prototyp
// b.prototype = a.prototype
// wtedy oba obiekty mają dostęp do całego łańcucha prototype

// wygląda to tak: każdy obiekt ma kopię __proto__, na każdym obiekcie możemy ustawić prototype, taka właściwość prototype też jest obiektem i rownież posiada kopię __proto__
// możemy też ustawić prototyp na prototypie (a.prototype.prototype = {})
// możemy ten prototyp przypisać do prototypu innego obiektu, wowczas ten drugi obiekt ma dostęp do całego prototype chain

// obiekt może stać się prototypem dla innego obiektu: b.prototype = a
// cały czas robimy referencje, więc zmiany na właściwościach z prototype będą odzwierciedlone na innych obiektach, które do niego referują

// OOJS, prototypal inheritance - prostsze

// dziedziczenie w rozumieniu JS - obiekt uzyskuje dostęp do właściwości i metod innego obiektu

// wszystkie obiekty w JS mają właściwość __proto__ - jest to kopia base object, nie przechowujemy referencji do niego, więc nie ma obawy, że popsujemy oryginał
// jest to pierwowzor każdego obiektu w JS (z wyjątkiem samego base object), w takim sensie, że każdy obiekt w JS ma dostęp do właściwości i metod obecnych w base object
// __proto__ to również zmienna globalna, referuje ona do właściwości __proto__ w obiekcie Window, oczywiście można tu dokonywać zmian, ale trzeba uważać
// zmiany samego __proto__ w obiekcie mogą powodować poważne problemy z wydajnością, utratę __proto__ na najwyższym poziomie obiektu, a w przypadku funkcji i tablic, których prototyp jest bardziej rozbudowany niż dla zwykłego obiektu - utratę ważnych właściwości i metod
// nie zmieniamy __proto__ w obiekcie, zmieniamy właściwość prototype

// właściwości są szukane w obiekcie, a w drugiej kolejności w prototypie (i dalej w prototype chain), ale wyglądają jakby były właściwościami naszego obiektu

// prototype może wskazywać na kolejny obiekt prototypu; każdy obiekt może mieć swój własny prototyp, oprócz tego każdy obiekt ma swoją kopię __proto__; tworzy się prototype chain - tam dalej idzie wyszukiwanie właściwości

// tak ustala się dostęp do właściwości i metod, ktore są w sekwencji obiektow połączonych za pomocą właściwości prototype (trochę podobnie jak scope chain, ale tam jest leksykalnie); odwołujemy się bezpośrednio do właściwości obiektu, łańcuch jest przed nami ukryty - silnik JS go przeszukuje

// obiekty mogą dzielić ten sam prototyp
// b.prototype = a.prototype
// wtedy oba obiekty mają dostęp do całego łańcucha prototype

// wygląda to tak: każdy obiekt ma kopię __proto__, na każdym obiekcie możemy ustawić prototype, taka właściwość prototype też jest obiektem i rownież posiada kopię __proto__
// możemy też ustawić prototyp na prototypie (a.prototype.prototype = {})
// możemy ten prototyp przypisać do prototypu innego obiektu, wówczas ten drugi obiekt ma dostęp do całego prototype chain

// obiekt może stać się prototypem dla innego obiektu: b.prototype = a
// cały czas robimy referencje, więc zmiany na właściwościach z prototype będą odzwierciedlone na innych obiektach, które do niego referują

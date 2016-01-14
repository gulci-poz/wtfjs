// gulci's aside

// możemy skonstruować ciekawy zamiennik na switch

// tak naprawdę wszędzie można by użyć nazwy id, ale w trzech miejscach oznaczałaby ona co innego, lepiej to sobie zwizualizować odmiennymi nazwami zmiennych

// generator w py zrobiłby to sprytniej, bez konieczności deklarowania każdej zmiennej w tablicy

var funArr = [
    function (id) {
        console.log('function, id: ' + id)
    },
    function (id) {
        console.log('function, id: ' + id)
    },
    function (id) {
        console.log('function, id: ' + id)
    }
];

var randomId = funArr.length * funArr.length;
var randomIdEdge = randomId + 1;

var timesRun = 0;

while(randomId < randomIdEdge) {
    // trzeba uważać, żeby nie wyjść poza zakres
    //randomId = Math.floor(Math.random() * funArr.length);
    
    // ale tutaj możemy wyjść poza zakres, ponieważ mamy sprawdzenie w if
    // jeśli wyskoczymy powyżej ustalonego warunku brzegowego, to while się zakończy
    //losujemy dwa razy, mamy potem dwie losowe wartości do porównania, całkiem skuteczny random
    
    randomIdEdge = Math.floor(Math.random() * randomIdEdge);
    randomId = Math.floor(Math.random() * randomIdEdge);
    
    timesRun += 1;
    
    (function (checkId) {
        if (checkId < funArr.length) {
            funArr[checkId](checkId);
        } else {
            console.log('no function found');
        }

        // ewentualnie zamiast else
        //return;
    }(randomId));
}

console.log('times run: ' + timesRun);
// tablice i pętla for-in

Array.prototype.myCustomFeature = "hello";

var arr = ["John", "Jane", "Jim"];

// indeksy to tak naprawdę nazwy właściwości
// wypiszemy wszystkie właściwości, również te zdefiniowane w prototypie
// aside: zmienna prop zostaje w globalnym kontekście
for (var prop in arr) {
    console.log(prop + ": " + arr[prop]);
}

// jeśli chcemy tylko elementy tablicy, używamy tradycyjnego for i właściwości length tablicy
for (var i = 0; i < arr.length; i++) {
    console.log(i + ": " + arr[i]);
}

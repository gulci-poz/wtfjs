// functional programming

// first class functions (przekazywanie funkcji) i function expressions

// tablice to obiekty, przy przypisaniu jest przekazywana referencja, a nie wartość

var arr1 = [1, 2, 3];
console.log(arr1);

var arr2 = [];
for (var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}
console.log(arr2);

// przekazujemy referencję do tablicy, więc trzeba uważać na manipulację wartościami w tablicy
function mapForEach(arr, fun) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        // rezultat wykonania funkcji na danym elemencie tablicy
        newArr.push(fun(arr[i]));
    }
    return newArr;
}

var arr3 = mapForEach(arr1, function (item) {
    return item * item;
});
console.log(arr3);

function cubic(item) {
    return item * item * item;
}

var arr4 = mapForEach(arr1, cubic);
console.log(arr4);

var checkPastLimit = function(limiter, item) {
    return item > limiter;
};

// mamy kopię funkcji wzbogaconą o limiter = 1, w mapForEach będziemy przekazywali tylko argument item
var arr5 = mapForEach(arr4, checkPastLimit.bind(this, 1));
console.log(arr5);

var checkPastLimitSimplified = function (limiter) {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter);
};

// do mapForEach przekazujemy funkcję zwróconą przez checkPastLimitSimplified; robimy currying
var arr6 = mapForEach(arr4, checkPastLimitSimplified(1));
console.log(arr6);
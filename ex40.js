// functional programming - underscorejs, lodash

var arr1 = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

// obiekt _ jest dostępny globalnie

var arr2 = _.map(
    arr1,
    function (item) {
        return item * 4;
    }
);

console.log(arr1);
console.log(arr2);

// filter() zwraca wartości, ktore przechodzą test prawdziwości (predykat)

var arr3 = _.filter(
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    function (item) {
        return item % 2 === 0;
    }
);

console.log(arr3);

// arrays - collections of anything

var arrNew = new Array();

// literal syntax
var arr = [
    1,
    false,
    {
        name: 'gulci'
    },
    function(name) {
        // ta funkcja jest wyrażeniem
        var greeting = 'hello ';
        console.log(greeting + name);
    },
    'hello'
];

console.log(arr[0]);
console.log(arr);
arr[3](arr[2].name);
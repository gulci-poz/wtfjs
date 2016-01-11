// JSON czerpie inspirację z notacji object literal

var objectLiteral = {
    firstname: 'Mary',
    isAProgrammer: true
};

console.log(objectLiteral);
console.log(JSON.stringify(objectLiteral));


//JSON jest podzbiorem składni object literal
//właściwości muszą być w cudzysłowiu; w object literal mogą, ale nie muszą
//funkcja nie może być wartością w JSON
//JSON nie jest częścią js
//uwaga na białe znaki w stringu JSON

var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgramer": true }');
                           
console.log(jsonValue);
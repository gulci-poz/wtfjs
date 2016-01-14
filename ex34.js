// closures

function buildFunctions() {
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        );
    }
    
    return arr;
}

var fs = buildFunctions();

// dzięku closure mamy dostęp do załączonej zmiennej i, ale ona ma tylko jedną wartość - ostatnią znaną
// funkcje były utworzone w buildFunctions(), ale są wywoływane dopiero tutaj - 3,40 (47)
fs[0]();
fs[1]();
fs[2]();
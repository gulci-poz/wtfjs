function b() {
    var myVar;
    console.log('function b');
    console.log(myVar);
    console.log(window.myVar);
}

function a() {
    var myVar = 2;
    console.log('function a');
    console.log(myVar);
    console.log(window.myVar);
    b();
}

var myVar = 1;
console.log('global execution context');
console.log(myVar);
a();
function b() {
    console.log('function b');
    var c;
}

function a() {
    console.log('function a');
    b();
    var d;
}

a();
var d;
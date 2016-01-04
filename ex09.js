function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while(new Date() < ms) {
        // odczekujemy 3000ms
    }
    console.log('finished waitThreeSeconds function');
}

function clickHandler() {
    console.log('click event');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');
// kliknięcie będzie obsłużone po opróżnieniu stosu
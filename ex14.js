// Default Values - Frameworks

// framework to niekoniecznie to samo, co library
// my przyjmujemy:
// zgrupowanie kodu js, który wykonuje zadanie i jest przewidziany do ponownego użycia


// skrypty zadeklarowane w tagach script nie separują kodu, nie są tworzone osobne EC; kod jest kompletowany plik po pliku i uruchamiany linia po linii

// kod nie może ze sobą kolidować, bo normalnie kod jest zbierany do kupy i minimalizowany

// ponowne użycie var w drugim pliku sprawia, że zmienna jest tworzona na nowo (zastępuję poprzednią)

// libraryName jest jedną globalną zmienną w globalnym EC

console.log(libraryName);
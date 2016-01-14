// objects, functions, this

// uzupełnienie
// funkcja może być przemieszczana (przekazanie jako argument), kopiowana (funkcja to obiekt, przypisanie referencji do innego obiektu), przypisana (do zmiennej)

// this będzie wskazywać na różne obiekty, w zależności od tego, w jaki sposób funkcja jest wywołana

// obiekt globalny nazywa się Window (z wielkiej litery, funkcja wewnątrz też jest z wielkiej litery, Window); w nodejs to inny obiekt
// zmienna, która wskazuje na globalny obiekt to window (z małej litery)
console.log(this);

function a() {
    console.log(this);
    this.newVariable = 'hello';
}

// FS, this wskazuje na globalny obiekt Window
a();

b = function() {
    console.log(this);
}

// FE, this wskazuje na globalny obiekt Window
b();

function c(fun) {
    fun();
}

// FE, funkcja anonimowa zadeklarowana w locie, this wskazuje na globalny obiekt Window
c(function() {
    console.log('funkcja anonimowa zadeklarowana w locie');
    console.log(this);
});

// zmienna newVariable została dodana do obiektu globalnego wewnątrz funkcji
console.log(newVariable);

// object literal i this
var c = {
    name: 'The c object',
    log: function() {
        // modyfikujemy (mutujemy) zmienną name w obiekcie c
        this.name = 'Updated c object';
        
        // this wskazuje na adres obiektu, w self zapisujemy referencję
        // self i this wskazują wtedy na ten sam adres
        var self = this;
        
        // przy wywołaniu metody z obiektu powstaje nowy EC
        // funkcja leksykalnie znajduje się w obiekcie
        // a zatem this wskazuje na ten obiekt
        console.log(this.name);
        
        // internal function, this wskazuje na obiekt globalny
        // self wskazuje na this funkcji
        var setName = function(newName) {
            // jeśli zmienimy najpierw name w this, to będzie ona pamiętana w globalnym obiekcie w tabie przeglądarki
            this.name = newName;
            
            // setName jest leksykalnie na poziomie self, a wewnątrz setName nie ma osobnej self
            self.name = newName;
        }
        
        // mamy EC, ale normalnie this w internal function wskazuje na obiekt globalny
        setName('Updated c object, again');
        
        // tutaj name jest już uaktualniona, ponieważ setName zmienia też self, która wskazuje na ten sam obiekt, na który wskazuje this (this funkcji)
        console.log(this.name);
        
        // self wskazuje na this funkcji
        console.log(self.name);
        
        // tutaj eksperymentalnie tego nie robiłem, ale jak już mamy self to używamy go wszędzie po zadeklarowaniu, żeby nie zrobić sobie krzywdy np. zmianą this w funkcji wewnętrznej (internal)
    }
};

c.log();

// jeśli nie zmienimy this w internal function, to zmienna name nie będzie istniała; jeśli zmienimy, to będzie zapisana w globalnym obiekcie (i pamiętana w tabie)
console.log(this.name + ' globalna name');

// ES6 - let, alternatywa do używania self
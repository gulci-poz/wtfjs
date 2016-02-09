// gulci's aside
// framework a biblioteka
// framework to biblioteka, która buduje abstrakcję (moja definicja)

// średnik zapewnia zakończenie kodu JS, który był załadowany wcześniej

;(function (global, $) {

    // ta funkcja tak naprawdę służy do produkcji obiektów na życzenie
    var Greetr = function (firstName, lastName, language) {

        return new Greetr.init(firstName, lastName, language);
    };

    // ta zmienna będzie widoczna dla obiektu Greetr.init w closure, jest leksykalnie na tym samym poziomie,
    // ale nie eksponujemy jej na zewnątrz, poza EC tego IIFE (sposób na "uprywatnienie" zmiennej, ukrycie przed innymi programistami na zewnątrz)
    var supportedLangs = ["en", "es"];

    var greetings = {
        en: "Hello",
        es: "Hola"
    };

    var formalGreetings = {
        en: "Greetings",
        es: "Saludos"
    };

    var logMessages = {
        en: "Logged",
        es: "Inicio sesion"
    };

    // jeśli chcemy udostępnić zmienną na zewnątrz, to deklarujemy ją w prototypie

    Greetr.prototype = {
        fullName: function () {
            return this.firstName + " " + this.lastName;
        },

        validate: function () {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw "Ivalid language";
            }
        },

        greeting: function () {
            return greetings[this.language] + " " + this.firstName + "!";
        },

        formalGreeting: function () {
            return formalGreetings[this.language] + ", " + this.fullName();
        },

        // opakowujemy naszą funkcjonalność w jedną funkcję, umożliwiamy też sobie chaining dzięki zwracaniu this
        greet: function (formal) {
            var msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            // w IE console jest udefined, chyba że konsola jest otwarta
            // koercja w takim wypadku da nam false
            if (console) {
                console.log(msg);
            }

            return this;
        },

        // mamy chaining
        log: function () {
            if (console) {
                console.log(logMessages[this.language] + ": " + this.fullName());
            }

            return this;
        },

        // mamy chaining
        setLang: function (lang) {
            this.language = lang;
            this.validate();

            return this;
        },

        // wsparcie dla jQuery
        // również mamy chaining
        HTMLGreeting: function (selector, formal) {
            if (!$) {
                throw "jQuery not loaded";
            }

            if (!selector) {
                throw "Missing jQuery selector";
            }

            var msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }
    };

    Greetr.init = function (firstName, lastName, language) {
        var self = this;

        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";

        self.validate();
    };

    // __proto__ obiektu utworzonego za pomocą konstruktora Greeter init będzie wskazywać na ten prototyp
    // z kolei prototypem init będzie prototyp Greeter i tam możemy dodawać wszystkie metody
    Greetr.init.prototype = Greetr.prototype;

    // eksponujemy naszą funkcję (bibliotekę) dla globalnego kontekstu
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));

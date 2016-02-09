/*

// testy w konsoli

// bez przypisania do zmiennej i tak tworzymy nowy obiekt, tracimy dostęp do niego, mimo że jest on cały czas gdzieś w pamięci (silnik JS pewnie robi GC)

var g = G$("Sebastian", "Gulczynski");

//console.log(g);

g.setLang("es").greet(true).log();
g.greet(false);

// bez argumentów będzie false (koercja)
g.setLang("en").greet().log();

// nie ma takiego języka na liście
//g.setLang("pl");

*/

/*

// test wizualny, na stronie (jQuery)

var g = G$("Sebastian", "Gulczynski");
g.HTMLGreeting("#greeting", true);

*/

// ==================================================

// przycisk
$("#login").click(function () {
    var loginGreeter = G$("Sebastian", "Gulczynski");

    //$("#logindiv").hide();

    loginGreeter.setLang($("#lang").val()).HTMLGreeting("#greeting", true);

    //loginGreeter.log();
});

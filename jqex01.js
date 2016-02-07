var q = $("ul.people li");
console.log(q);

// nowy obiekt jQuery (wywołujemy funkcję, wewnątrz biblioteki jQuery tworzy obiekt za pomocą new), to specjalnie dostosowana tablica; ma ona dostęp do wszystkich metod zdefiniowanych lub dodanych do prototypu jQuery

// dodawanie do jQuery (pluginy) - za pomocą funkcji extend z jednym argumentem

// Sizzle to zmienna w jQuery, której jest przypisane IIFE

// method chaining - wywoływanie metod jedna po drugiej, każda działa na parent object, this dla każdej metody wskazuje na ten sam parent object

// idea w jQuery jest prosta, obie metody są zdefiniowane w prototypie jQuery i obie zwracają this

// jeśli będziemy korzystali z this wewnątrz jakiegoś callbaka w jQuery, to this będzie wskazywało na obiekt utworzony za pomocą jQuery (jest tam new, ale my wywołujemy funkcję jQuery)

$("ul.people").addClass("newclass").removeClass("people");

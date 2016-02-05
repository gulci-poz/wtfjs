// inicjalizacja

// dobry sposób na prototypowanie, np. modelowanie danych czy struktury programu, których jeszcze nie mamy
// po prostu tworzymy w ten sposób interfejs

var people = [
    {
        firstname: "Sebastian",
        lastname: "Gulczynski",
        addresses: [
            "Jana Piekalkiewicza 13",
            "Boleslawa Smialego 9/16"
        ]
    },
    {
        firstname: "Karolina",
        lastname: "Gulczynska",
        addresses: [
            "Jana Piekalkiewicza 13",
            "Jana Kasprowicza 11"
        ],
        greet: function () {
            return "Hello!";
        }
    }
];

console.log(people);

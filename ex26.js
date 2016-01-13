// automatic semicolon insertion

function getPerson() {
    // jeśli klamra będzie w nowej linii, to parser po return da automatyczny średnik, wtedy return wyskoczy z funkcji i w logu z wywołaniem dostaniemy undefined
    return {
        firstname: 'Sebastian'
    };
}

console.log(getPerson());
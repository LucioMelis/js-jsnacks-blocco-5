console.log('Js OK!');

// Scrivi una funzione
// che accetti una stringa come argomento
// e la ritorni girata (es. Ciao -> oaiC)

const ritornoStringa = stringaGirata('Lucio');
console.log(ritornoStringa);

function stringaGirata(stringa) {
    // trasformo una stringa in un array .SPLIT
    // poi inverto l'ordine degli elementi .REVERSE
    // trasformo l'array di una stringa e la ritorno .JOIN --> RETURN
    return stringa.split('').reverse().join('')
}
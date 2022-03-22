console.log('JS OK!');

// BONUS 1
// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi)
// prendendo alternativamente gli elementi da uno e dall’altro,
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].


const arrayAlternato = alternaArray();
console.log(arrayAlternato);

function alternaArray() {

    const array1 = [1, 2, 3, 4];
    const array2 = [5, 6, 7, 8];
    const arrayCompleto = [];

    for (let i = 0; i < 4; i++) {
        arrayCompleto.push(array1[i]);
        arrayCompleto.push(array2[i]);
    }

    return arrayCompleto
}
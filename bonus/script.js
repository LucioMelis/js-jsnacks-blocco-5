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

// BONUS 2
// Scrivi una funzione che accetti tre argomenti: un array e due numeri 
// (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array
// con i valori che hanno la posizione compresa tra “a” e “b”



const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nuovoArray = functionReturnArray(array, 2, 10);
console.log(nuovoArray);

function functionReturnArray(arrayX, num1, num2) {

    const arreyNuovo = [];
    for (let i = num1; i < (num2 - 1); i++) {
        arreyNuovo.push(arrayX[i]);
    }

    return arreyNuovo
}


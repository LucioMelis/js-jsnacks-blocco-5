console.log('Js OK!');

// Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

const arrayZucchine = [
    {
        varietà: 'Zucchina-nera',
        peso: 5,
        lunghezza: 10,
    },
    {
        varietà: 'Zucchino-romanesco',
        peso: 11,
        lunghezza: 12,
    },
    {
        varietà: 'Zucchino-fiorentino',
        peso: 20,
        lunghezza: 13,
    },
    {
        varietà: 'Zucchina-napoletana',
        peso: 22,
        lunghezza: 16,
    },
    {
        varietà: 'Zucchine-tonde',
        peso: 3,
        lunghezza: 8,
    },
    {
        varietà: 'Zucchine-trombetta',
        peso: 4,
        lunghezza: 22,
    },
    {
        varietà: 'Zucchina-verde',
        peso: 15,
        lunghezza: 20,
    },
    {
        varietà: 'Zucchina-sarda',
        peso: 30,
        lunghezza: 18,
    },
    {
        varietà: 'Zucchina-gialla',
        peso: 16,
        lunghezza: 5,
    },
    {
        varietà: 'Zucchina-rossa',
        peso: 1,
        lunghezza: 6,
    }
]


function sommaArray(array) {
    let somma = 0;
    for (i = 0; i < array.length; i++) {
        somma += array[i].peso;
    }
    return somma
}

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
const zucchineMeno15 = [];

const zucchinePiu15 = [];
// passo gli array
const zucchineMeno15Somma = sommaArray(zucchineMeno15);

const zucchinePiu15Somma = sommaArray(zucchinePiu15);


for (let i = 0; i < arrayZucchine.length; i++) {
    const elementiArray = arrayZucchine[i];

    if (elementiArray.lunghezza < 15) {
        zucchineMeno15.push(elementiArray);
    } else {
        zucchinePiu15.push(elementiArray);
    }

}

// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
console.log(zucchineMeno15);
console.log(zucchinePiu15);

console.log(zucchineMeno15Somma, zucchinePiu15Somma);





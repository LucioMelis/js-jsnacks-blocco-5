console.log('Js OK!');

// Crea un array di 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

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
        lunghezza: 15,
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

let sommaZucchine = 0;

for (let i = 0; i < arrayZucchine.length; i++) {
    sommaZucchine += arrayZucchine[i].peso;
}

console.log(sommaZucchine);
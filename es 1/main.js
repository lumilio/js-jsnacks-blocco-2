
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando foreach



/* Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
 */




/*
* Crea un array vuoto e chiedi all’utente un numero
* da inserire nell’array. Continua a chiedere i numeri
* all’utente e a inserirli nell’array fino a quando
* la somma degli elementi è minore di 50.
*/ 



const bici = [
    {
        nome: "bici1",
        peso: 10,
    },

    {
        nome: "bici2",
        peso: 20,
    },

    {
        nome: "bici3",
        peso: 30,
    },

    {
        nome: "bici4",
        peso: 5,
    },
]


let bicileggera = bici[0]


bici.forEach((item) =>{
    if (item.peso < bicileggera.peso) {
        bicileggera = item;
    }
})

console.log(bicileggera);
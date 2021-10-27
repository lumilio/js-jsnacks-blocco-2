
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando foreach



/* Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
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

/* for (let index = 0; index < bici.length; index++) {
    const item = bici[index];
    if (item.peso < bicileggera.peso) {
        bicileggera = item;
    } 
} */

console.log(bicileggera);
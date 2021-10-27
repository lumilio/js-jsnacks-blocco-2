
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando foreach



/*
* Crea un array vuoto e chiedi all’utente un numero
* da inserire nell’array. Continua a chiedere i numeri
* all’utente e a inserirli nell’array fino a quando
* la somma degli elementi è minore di 50.
*/ 





/* Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
 */










const squadre = [
    {
        nome: "squadra1",
        punti: 0,
        falli: 0
    },

    {
        nome: "squadra2",
        punti: 0,
        falli: 0
    },

    {
        nome: "squadra3",
        punti: 0,
        falli: 0
    },

    {
        nome: "squadra4",
        punti: 0,
        falli: 0
    },
]




function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

for (let index = 0; index < squadre.length; index++) {
    const element = squadre[index];
    element.punti = randomIntFromInterval(1, 30)
    element.falli = randomIntFromInterval(1, 30)  
}

console.log(squadre);
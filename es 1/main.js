
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore utilizzando foreach



/* Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
 */




/*
* Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.
*/ 



const numeri = []

let sum = 0

while (sum < 50) {
    let input = Number(prompt("Enter a number"));
    numeri.push(input)
    numeri.forEach((item)=>{
        sum += item;
    })
}

console.log(numeri);


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
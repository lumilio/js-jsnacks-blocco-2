const bici = [

    {
        nome: "bici1",
        peso: 17,
    },

    {
        nome: "bici1",
        peso: 15,
    },

    {
        nome: "bici1",
        peso: 16,
    },

    {
        nome: "bici1",
        peso: 3,
    },

    {
        nome: "bici1",
        peso: 5,
    },

]


let min = Math.min(...bici.map(item => item.peso));
console.log("min: " + min);


document.getElementById('displaydata').innerHTML =("la bici che pesa meno : " + min);
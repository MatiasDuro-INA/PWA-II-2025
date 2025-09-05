// Sincronia
// Asyncronia

console.log("A - Inicio sincronico");

let clima; 

setTimeout(() => { // simular una consulta a un servicio

    clima = "Soleado"

    console.log("B - Medio sincronico");
}, 1);


console.log("clima: ", clima);



console.log("C - Final sincronico");

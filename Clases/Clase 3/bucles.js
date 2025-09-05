
const usuarios = [
    { nombre: "Matías", edad: 28, sexo: "hombre" },
    { nombre: "Valentina", edad: 24, sexo: "mujer" },
    { nombre: "Agustín", edad: 31, sexo: "hombre" },
    { nombre: "Lucía", edad: 27, sexo: "mujer" }
];
// indices arrays: arrancan en 0, y son ascendentes
let frutas = ["banana", "manzana", "frutilla", "UVA", "KIWI"]



// BUCLES: FOR
// for clasico
// se utiliza cuando se cuanto va a durar
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}



// for each

console.log("//// ARRANCA FOR EACH///");

frutas.forEach(fru => {
    console.log(fru);
    
});





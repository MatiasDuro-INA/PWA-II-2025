
let frutas = ["Banana", "Manzana", "Frutilla"]

// console.log("Frutas: ", frutas);

// Agrega un elemento AL FINAL del array
frutas.push("Uva")

// console.log("Frutas: ", frutas);


// remover el primer elemento del array
frutas.shift()

//remover el ultimo elemento del array
frutas.pop()

// console.log("Frutas: ", frutas);

// agregar un elemento al comienzo del array
frutas.unshift('Kiwi')
// console.log("Frutas: ", frutas);

let numeros = [5, 7, 2, 27, 1]

// console.log("Numeros: ", numeros);
// Map:
// Nos devuelve un nuevo array, con la operacion que querrams
let nuevosNumeros = numeros.map((numero) => {
    // console.log("Numero: ", numero + 1);
    return numero + 1
})

// console.log("nuevosNumeros: ", nuevosNumeros);


let filtrados = nuevosNumeros.filter((numero) => {

    if(numero > 5){
        // console.log("mayor: ", numero);
    }else{
        // console.log("menor: ", numero);
    }
    return numero < 5
})

// console.log("filtrados: ", filtrados);

let letras = ['A', 'B', 'C', 'D'];
let nombre = 'hernan';
// join devuelve un string de un array
console.log("Letras: ", letras);

let join = letras.join("-")

console.log("join: ", join);

// split devuelve un array de un string

let split = nombre.toLowerCase().split("")
console.log("nombre: ", nombre);

let nombreentero = split.join("")

let nombreinvertido = split.reverse().join("");

if(nombreentero === nombreinvertido){
    console.log("Es palindromo!: ");
}else{
    console.log("No es palindromo: ");
}














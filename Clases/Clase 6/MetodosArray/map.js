let numeros = [5, 7, 2, 27, 1]

console.log("Numeros originales: ", numeros);


let nuevosNumeros = numeros.map((numero) => {
    return numero + 1
})

let nuevosNumeros2 = numeros.map((numero) => numero + 5)

let nuevosNumeros3 = numeros.map(function(numero){
    return numero * 10
})

numeros.push(99)

console.log("nuevosNumeros: ", nuevosNumeros);

console.log("nuevosNumeros2: ", nuevosNumeros2);

console.log("nuevosNumeros3: ", nuevosNumeros3);

console.log("devuelta numeros originales: ", numeros);

const listaVerduleria = ['banana', 'manzana', 'uva', 'pera']

listaVerduleria.map(function(frutas){

    return frutas 
})


// TIPOS DE VALORES EN JAVASCRIPT

// let nombre = 'Hernan';
// let edad = 24;
// let activo = false
// let sinDefinir
// let nulo = null // Null significa valor vacio, muy parecido al undefined
// let arrays = ['Papa', "Manzana", "Fruta"] // arrays son los valores directamente
// let objetos = {} // objetos, tienen llave y valor / key and value


// console.log("nombre: ", typeof nombre); // TIPO STRING o Cadena de Texto
// console.log("edad: ", typeof edad); // Tipo Number
// console.log("activo: ", typeof activo); // Tipo boolean / Significa verdadero o falso
// console.log("sinDefinir: ", typeof sinDefinir); // undefined es tanto un valor como tipo de dato
// console.log("arrays: ", typeof arrays); //
// console.log("nulo: ", typeof nulo); //


let nombre = "Hernan";
let edad = 24;
let activo = false
let sinDefinir
let nulo = null // Null significa valor vacio, muy parecido al undefined
let materias = ['Maquetacion', "Moviles", "PWA"] // arrays son los valores directamente
let objetodePrueba = {} // objetos, tienen llave y valor / key and value

let usuarioArray = [nombre, edad, activo, materias]

// console.log("usuarioArray: ", usuarioArray[1]);


let usuario = {
    nombreCompleto: nombre,
    edad,
    materiasAnotadas: materias,
    matriculado: activo,
    cualquiercosa: 27
}

// console.log("usuarioObjeto: ", usuario['materiasAnotadas']);
// console.log("usuarioObjeto: ", usuario.nombreCompleto);

// console.log("usuarioObjeto: ", usuario.nombreCompleto, "finalizo el console log", 7);

// console.log({
//     name: usuario.nombreCompleto,
//     edad,
//     activo,
//     mensaje: "fin del log"});


let nota = 10


    // console.log("El alumno Hernan tiene un 10");

    // console.log("El alumno", nombre, "tiene un", nota);


// TIP:
// Para comentar y descomentar rapidamente, es ctrl + / 
// Teclado espanol: es ctrl + shift + 7

// TIP:
// Ctrl + D, habiendo seleccionado una palabra, te permite manipular ambas a la vez

let mensaje = "Alumno es " + nombre + " tiene un " + nota

console.log(mensaje);


// si seleccion una palabra, y apreto ctrl + d, selecciono la siguiente que tenga el mismo valor
let mensajeMejorado = `Alumno es ${nombre} tiene un ${nota}`
console.log(mensajeMejorado);



    







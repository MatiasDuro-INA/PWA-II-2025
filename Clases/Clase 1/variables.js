
// Variables
// Hay 3 tipos de formas de declarar una variable
// 1- Var // Var no se debe utilizar. Que puede reasignar y redeclarar sobre todo, es un riesgo
// 2- let // Let si se puede utilizar. Se puede reasignar pero no redeclarar
// 3- const // const tambien se utiliza. Y tiene la peliculiaridad, que no se puede ni redeclarar, ni reasignar


// Var no se recomienda su uso
// Se puede reasignar, y redeclarar
// No se utiliza var, porque se puede reasignar y redeclarar, es peligroso
var nombre = 'Matias';

// console.log("Console log 1", nombre);

nombre = 'Jorge'

// console.log("Console log 2", nombre);

var nombre = 'Fulano'

// console.log("Console log 3", nombre);


// LET
// let es mucho mas seguro que var
// let se puede reasignar, pero no se puede redeclarar
let apellido = 'Duro';

// console.log("Console log 1", apellido);

// let apellido = 'Carballo'
// console.log("Console log 2", apellido);

let edad = 17;

// let edad = 21;

if(edad >= 18) {
    // console.log("Es mayor de edad");
}else{
    // console.log("Es menor de edad, tiene: ", edad);

}

// let apellido = 'Carballo'
// console.log("Console log 3", apellido);



// const

const nacionalidad = 'Argentino'

// console.log("Console log 1", nacionalidad);


// console.log("Console log 2", nacionalidad);




// Cuando vamos a utilizar uno o la otra? cuando utilizar let y const?

// todo lo que son funciones, deberian ir con const
// todo lo que son variables flexibles, podrian ir con let

const alumno = 'Hernan Carballo'
let nota

var sinValor1
console.log("sin Valor 1", sinValor1);

let sinValor2
console.log("sin Valor 2", sinValor2);

// const sinValor3
// console.log("sin Valor 3", sinValor3);







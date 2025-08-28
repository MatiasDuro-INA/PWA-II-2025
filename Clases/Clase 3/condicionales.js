// == vs ===
// == compara valor (convierte los tipos de datos al procesarlo), provoca que se confunda
// === compara valor y TIPO

// console.log("resultado: ", 2 !== 5);

let numero = null
// let usuario

// console.log("variable: ", numero);




// if(!numero ){
//     console.log("No hay numero");
// }else{
//     console.log("El numero es: ", numero)
// }


let valor = false
// console.log("Valor: ", !valor);


// Valores No positivos, o Falsy
// 1- null
// 2- undefined
// 3- ""
// 4- 0
// 5- false
// 6- NaN (Not a Number)

let usuario = "Martin";
let edad = 15

// if(edad >= 18 || usuario === "Martin"){
//     console.log("Puede Votar");
// }
// else if(edad < 18){
//     console.log("Todavia no puede votar");
// }
// else{
//     console.log("No sabemos la edad");
// }


// operador && (AND) ejecuta la derecha solo si la izquierda es positiva (verdadero)
// edad && console.log("Se ejecuta el operador AND");

// operador || (OR) devuelve el primer valor positivo/verdadero

console.log("Usuario: ", usuario);

    let nombre = "Mateo" || usuario

    // console.log(nombre);
    
    // if(edad >= 18){
    //     console.log("Puede Votar");
    // else{
    //     console.log("No sabemos la edad");
    // }

// Operador TERNARIO
// despues del `?` va que pasaria si la condicion es positiva
// despues de los `:` va que pasaria si la condicion es negativa

edad = 20
edad >= 18 ? console.log("Ahora puede manejar") : console.log("Todavia no puede conducir")

edad < 18 ? console.log("Todavia no puede manejar") : edad < 21 ? console.log("Puede manejar con tutor") : console.log("Puede sacar la licencia solo");


let personaje = {
    nombre: "Martin",
    edad: edad || 'Sin edad'
}



 
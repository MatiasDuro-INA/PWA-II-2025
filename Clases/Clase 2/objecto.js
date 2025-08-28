// Arrays = Solo guardan datos 

// Objetos, guardan llaves y valores

let nombre = 'Mateo'
let edad = 25
let materias = ['PWA', "Maquetacion"]

// a cada array, se le asigna un indice (index)
//  los index de usuario serian [0, 1, 2]
let usuario = [nombre, edad, materias]

// Sintaxis arrays: []
// Sintaxis objetos: {}

// el objeto tiene llave(key): valor
// let user = {
//     nombreCompleto: nombre,
//     edad,
//     materias: materias
// }

//console.log("usuario: ", usuario);
//console.log("user: ", user);
//console.log("user: ", user.edad);


const cursada = {
    primerCuatrimestre: {
        materias: {
            Maquetacion: {
                estado: 'aprobada',
                nota: 10
            },
            Figma: {
                estado: 'aprobada',
                nota: 10
            },
        }
    },
    segundoCuatrimestre:{

    }
}

// console.log(cursada);

const usuario3 = {
    nombre,
    edad,
    materias,
    cursada
}


console.log(usuario3.cursada.primerCuatrimestre.materias.Maquetacion);















// Mismo objeto, distinta forma

let usuario = {
    nombre: 'Matias',
    edad: 29,
    pais: 'Argentina'
}

let nombre = 'Hernan'
let edad = 37
let pais = 'Argentina'

let usuario2 = {
    nombre,
    edad,
    nacionalidad: pais
}
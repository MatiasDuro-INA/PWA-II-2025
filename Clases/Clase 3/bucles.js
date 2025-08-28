// Bucles, en su mayoria, se los conoce por for

// ciclo for clasico
// i = index 

// los indices de los arrays arrancan en 0
let canastaFrutas = ["Manzana", "Banana", "Uva"]

for (let i = 0; i < canastaFrutas.length; i++) {
    let element = canastaFrutas[i]
    // console.log("Element: ", element);
}


// For Each Solo arrays
canastaFrutas.forEach(fruta => {
    // console.log("Opcion: ", fruta); 
});

let numeros = [5, 7, 2, 10, 8]


// For...OF (para recorrer arrays o strings)
for (const num of numeros) {
// separar los numeros mayores a 6
    if(num > 6){
        // console.log("Num mayor a 6: ", num);
    }
}

let nacionalidad = 'Argentina'


// nacionalidad.forEach(element => {
//     console.log("Nacionalidad For Each: ", element); 
// });

// for (const element of nacionalidad) {
//         console.log("Nacionalidad For OF: ", element); 
// }


// FOR...IN (para recorrer objetos, mediante su clave, llave o key)

let persona = {
    nombre: 'Manuel', 
    edad: 27,
    estado: true,
    materias: 'PWA'
}

for (const key in persona) {

        const element = persona[key];
        console.log("element: ", element);
        
}
// console.log(persona.nombre);



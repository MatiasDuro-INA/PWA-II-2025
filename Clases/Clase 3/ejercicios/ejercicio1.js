// Separar usuarios segun la edad

const usuarios = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Juan", edad: 17 },
    { nombre: "Sofía", edad: 25 },
    { nombre: "Pedro", edad: 15 }
];

let mayores = []
let menores = []

for (const element of usuarios) {
    // console.log("element: ", element.edad);

    if(element.edad >= 18){
        mayores.push(element)
    }else{
        menores.push(element)
    }
}

console.log({
    mayores, 
    menores
});

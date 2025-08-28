// Imprimi uno por uno cada propiedad de cada usuario

const usuarios = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Juan", edad: 17 },
    { nombre: "Sofía", edad: 25 },
    { nombre: "Pedro", edad: 15 }
];

usuarios.forEach(element => {    
    for (const key in element) {
        const valor = element[key];
        console.log("valor: ", valor);
    }
});
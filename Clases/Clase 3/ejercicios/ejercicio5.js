// Consiga: Separar productos en stock y agotados
// Hace una funcion que retorne un objeto con un array de enStock y otro de Agotados

let productos = [
    { nombre: "Mouse", stock: 10 },
    { nombre: "Teclado", stock: 0 },
    { nombre: "Pad", stock: 3 },
    { nombre: "Monitor", stock: 0 },
];

function separarStock(productos){

    // inicializo las variables para poder pushear
    let enStock = []
    let Agotados = []

    productos.forEach(producto => {
        if(producto.stock > 0){
            enStock.push(producto)
        }else{
            Agotados.push(producto)
        }
    });


    return {
        enStock,
        Agotados
    }
}


let resultado = separarStock(productos)
  
console.log("Resultado: ", resultado);

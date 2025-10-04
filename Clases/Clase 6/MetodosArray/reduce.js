let numeros = [1, 2, 3, 4];

let suma = numeros.reduce(function(acumulador, num) {
    // mi acumulador arranca en 5
    // return 11 + 4
  return acumulador + num;
}, 5); // empieza en 0

// console.log(suma); 
// 10


let carrito = [
    { nombre: "Manzana", precio: 100, cantidad: 2 },
    { nombre: "Banana", precio: 50, cantidad: 3 },
    { nombre: "Pera", precio: 80, cantidad: 1 },
    { nombre: "Pepsi", precio: 50, cantidad: 2}
  ];
  
  // usamos reduce para sumar el total
  let total = carrito.reduce(function(acumulador, producto) {
    // el carrito arranca en 0
    // para manzana return devuelve 0 + (100 * 2)
    // para banana, return devuelve 200 + (50 * 3)
    // para Pera, return devuelve 350 + (80 * 1)
    // total acumulado = 430
    return acumulador + (producto.precio * producto.cantidad);
  }, 0); // empieza en 0
  
  console.log("Total a pagar: $" + total);

  let cantidadProductos = carrito.reduce(function(acumulador, producto) {

    console.log(`el acumulador va ${acumulador} mientras recorre el producto ${producto.nombre}`);
    
    return acumulador + producto.cantidad;
  }, 0); 

  console.log("Cantidad total de productos " + cantidadProductos);

  

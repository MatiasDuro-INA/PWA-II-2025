// separa los numeros par por un lado y impares por otro
// devolver un objeto con los arrays separados

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let pares = []
let impares = []

numeros.forEach(num => {
    if(num % 2 === 0){    
        pares.push(num)
    }else{
        impares.push(num)
    }
});

console.log({
    pares,
    impares
});

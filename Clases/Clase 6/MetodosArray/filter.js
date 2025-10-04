let numeros = [1, 2, 3, 4, 5];

let pares = numeros.filter(function(num) {
  return num % 2 === 0; // condición: ser par
//   el % (modulo) lo que hace es darme true o false dependiendo si es divisible por 2
});

console.log(pares); 


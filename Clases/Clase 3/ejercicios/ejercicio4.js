// Separar numeros positivos de negativos
// Quiero una funcion que devuelva un objeto con el array de positivos, y negativos
let numeros = [1, 5, -7, 20, -4, -9, 47]

function separar(numeros){

    let positivos = []
    let negativos = []
    
    numeros.forEach(num => {
        if(num > 0){            
            positivos.push(num)
        }else{
            negativos.push(num)
        }

    });


    return {
        positivos: positivos,
        negativos: negativos
    }
}


const resultado = separar(numeros)

console.log("Resultado: ", resultado);

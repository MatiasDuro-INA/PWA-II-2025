// let nombre = 'Mateo' 
// variable suelta en el archivo, se lo conoce como variables globales
// las variables globales, no son recomendadas, ya que se pueden filtrar por cualquier lado

// console.log("nombre: ", nombre);

// Los hijos, pueden heredar variables de sus padres, o de sus ambitos padres
const saludo = () => {
    
    let nombre = "Mateo"
    let edad = 27
    let cantidadLetras;
    let mayora6

    const calcularLetras = () => {
        cantidadLetras = nombre.length
        
        console.log("edad: ", edad);

        if(cantidadLetras > 6){
            mayora6 = true;

            console.log("tiene mas de 6 letras? ", mayora6);
            
        }else{
            mayora6 = false
            console.log("tiene mas de 6 letras? ", mayora6);

        }
        
    }

    console.log("cantidad letras: ", cantidadLetras);


    calcularLetras()
    
}

// Cuando hablamos de  Closure, nos referimos al ambito en el cual se declaro las variables
// console.log("nombre: ", nombre);

saludo();
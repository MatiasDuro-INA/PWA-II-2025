
// Las promesas representan un valor que va a existir en el futuro
// va a estar disponible, mas adelante, de la ejecucion

// Estados:
// 1- Pending / pendiente
// 2- Resolve / el resultado resuelto o positivo
// 3- Reject / el resultado fallado o negativo



function obtenerUsuarioPromise(id){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id === 3){
                // si el id 3 no existe (ejemplo inventado)
                return reject({ error: "Usuario 3 no encontrado"})
            }else{
                resolve({
                    id, 
                    nombre: `Usuario ${id}`
                })
            }

        }, 3000)

    })

}


// METODOS PARA MANIPULAR PROMESAS
// THEN - Se utiliza para ir avanzando en la promesa
// CATCH - Se utiliza para atrapar cualquier error en la promesa (estamos hablando del reject)
// FINALLY - es opcional, se ejecuta siempre al final de la promesa

obtenerUsuarioPromise(5).then( (respuesta) => {
    console.log("respuesta: ", respuesta);
    
}).catch( (error) => {
    console.log("error: ", error);
    
}).finally(() => {
    console.log("Promesa terminada");
    
})


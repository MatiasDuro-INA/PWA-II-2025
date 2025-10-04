// CALLBACKS: llamar hacia atras 

function suma(a, b){

    return a + b
}



// callback se refiere a que un parametro sea una funcion
function operacionMatematica(num1, num2, callback){
    
    return callback(num1, num2)
}

operacionMatematica(10, 2, suma)

// console.log(operacionMatematica(10, 2, suma));
// console.log(operacionMatematica(10, 2, (a, b) => {
//     return a * b
// }));


// METODOS DE ARRAYS QUE USAN CALLBACKS

const numeros = [5, 10, 15, 6, 3]

// numeros.forEach((numero) => {
//     numero * 5
// })


// manejar asincronia con callbacks




function obtenerUsuario(id, callback){

    setTimeout(() => {

    if(id === 3){
        // id 3 no existe
        const resp = callback("Usuario 3 no encontrado", null)

        console.log("resp: ", resp);
        
        return resp
    }else{
        // el usuario existe

        return callback(null, { id, nombre: `Usuario ${id}`})

    }
    }, 500);
}



// metodo error first / error primero
// Nos referimos a una funcion, que sirva para manejar errores, 
// y que el error sea el primer parametro
const encontrarUsuario = (error, usuario) => {

    if(error){
        console.log("Sucedio un error");
        return error
    }else{
        console.log("Usuario: ", usuario);
        return usuario

    }
}


for (let i = 0; i < 8; i++) {
    obtenerUsuario(i, encontrarUsuario)
}


// callback Hell
// cuando tenemos anidacion de funciones, en gran cantidad, se vuelve 
// Muy dificil de leer, mantener y manejar errores

function llamadoUsers() {
    obtenerUsuario(1, (err, u1) => {
        // obtener usuario 1, llama al usuario
        if (err) {
            console.log("error");

            return
        }
        console.log("todo ok: ", u1);

        // para llamar al usuario 2, necesito al usuario 1
        obtenerUsuario(2, (err, u2) => {

            if (err) {
                console.log("error");

                return
            }
            console.log("todo ok: ", u2);

            // para llamar al usuario 3, necesito al usuario 2

            obtenerUsuario(3, (err, u3) => {

                if (err) {
                    console.log("error");

                    return
                }
                console.log("todo ok: ", u3);

                obtenerUsuario(2,)

            })

        })

    })

}


llamadoUsers()
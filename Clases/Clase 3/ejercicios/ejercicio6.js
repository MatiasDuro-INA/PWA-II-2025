// Separar las tareas completadas de las pendientes, y sin comenzar
// Quiero una funcion que me devuelva un objeto, con un array de pendientes, otro de completadas
// y otro de sin comenzar

let tareas = [
    { titulo: "Estudiar JS", estado: "Completada" },
    { titulo: "Lavar platos", estado: "Sin Comenzar" },
    { titulo: "Practicar JS", estado: "Pendiente" },
    { titulo: "Leer 20 min", estado: "Completada" },
    { titulo: "Hacer compras", estado: "Sin Comenzar" },
    { titulo: "Hacer compras", estado: null },

];

function ordenarTareas(tareas){

    let completadas = []
    let pendientes = []
    let sinComenzar = []

    tareas.forEach(tarea => {

        if(tarea.estado){
        // console.log(tarea.estado);
        
        // switch (tarea.estado) {
        //     case "Completada":
        //         console.log("tarea completada: ", tarea.titulo);
        //         completadas.push(tarea)
        //         break;
        //     case "Pendiente":
        //         console.log("tarea pendiente: ", tarea.titulo);
        //         pendientes.push(tarea)
        //         break;
        //     default:
        //         console.log("tarea sin comenzar: ", tarea.titulo);
        //         sinComenzar.push(tarea)
        //         break;
        // }

        if(tarea.estado === "Completada"){
            completadas.push(tarea)
        }else if(tarea.estado === "Pendiente"){
            pendientes.push(tarea)
        }else{
            sinComenzar.push(tarea)
       }    
       
       

    } else{
        console.log("Tarea sin estado: ", tarea.titulo);
        
    }
});

    return {
        completadas,
        pendientes,
        sinComenzar
    }
}


const resultado = ordenarTareas(tareas)

console.log("Resultado: ", resultado);

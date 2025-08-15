
let usuario
let edad
let password
let mail




usuario = 'admin'
edad = 29
mail = 'matias.duro@ina.edu.ar'


if(usuario !== undefined && edad !== undefined && mail !== undefined && password !== undefined){
    console.log("Usuario creado con exito");
    console.log({
        usuario, edad, mail
    });
    
}else{
    console.log("Faltan datos");
    
}
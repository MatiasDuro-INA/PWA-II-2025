// closures 
// EL AMBITO DONDE VIVEN LAS VARIABLES

// es una variable Global

// Las funciones y los condicionales, dentro de las llaves, crean su propio ambito (scope)



function saludo(){
    let nombre = "Hernan"
    let edad;

    let nota = 5;
    if(nombre === "Hernan"){
        let nota = 10
        // Esta variable no puede vivir afuera del if/ de su ambito
        console.log("Nota ", nota);
    }

}



saludo()


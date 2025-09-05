const usuarios = [
    { nombre: "Ana", sexo: "F" },
    { nombre: "Pedro", sexo: "M" },
    { nombre: "Lucia", sexo: "F" },
    { nombre: "Juan", sexo: "M" },
];


// separar usuarios con callback, segun el sexo

const separarUsuarioCallback = (lista, callback) =>{

    let hombres = []
    let mujeres = []

    lista.forEach(user => {
        
        if(user.sexo === "M"){
            hombres.push(user.nombre)
        }else{
            mujeres.push(user.nombre)
        }
    });

    callback({
        hombres,
        mujeres
    })

}

separarUsuarioCallback(usuarios, (resultado) => {
    console.log("Resultado", resultado);
})
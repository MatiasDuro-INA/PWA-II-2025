const usuarios = [
    { nombre: "Matías", edad: 28, sexo: "hombre" },
    { nombre: "Valentina", edad: 24, sexo: "mujer" },
    { nombre: "Agustín", edad: 31, sexo: "hombre" },
    { nombre: "Lucía", edad: 27, sexo: "mujer" }
];

// quiero separarlos, mujeres por un lado y hombres por el otro
// quiero una funcion, que me devuelva un objeto, con el array de hombres y otro de mujeres

const separar = () => {
    let hombres = []
    let mujeres = []

    usuarios.forEach(user => {
        // console.log("user: ", user.sexo);

        if(user.sexo === "hombre"){
            hombres.push(user.nombre)
            // console.log("hombres: ", hombres);

        }else{
            mujeres.push(user.nombre)
            // console.log("mujeres: ", mujeres);
        }
        
    });
    

    return {
        hombres: hombres,
        mujeres: mujeres
    }
}

const resultado = separar()

console.log("resultado: ", resultado);

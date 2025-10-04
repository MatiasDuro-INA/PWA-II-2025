let bicicletas = [
    {
        "id": 1,
        "marca": "Fierce",
        "modelo": "FM18SI29AM211",
        "rodado": 16,
        "Año de fabricación": 2019,
        "color": "Rojo",
        "Peso en Kilogramos": 17,
        "tipo": "Montaña",
        "precio": 254.23,
        "vendida": "si"
    },
    {
        "id": 2,
        "marca": "Shifter",
        "modelo": "FM18F29AM210",
        "rodado": 26,
        "Año de fabricación": 2020,
        "color": "Gris",
        "Peso en Kilogramos": 19,
        "tipo": "Paseo",
        "precio": 244.14,
        "vendida": "si"
    },
    {
        "id": 3,
        "marca": "Olmo",
        "modelo": "Regal",
        "rodado": 28,
        "Año de fabricación": 2021,
        "color": "Negro",
        "Peso en Kilogramos": 18,
        "tipo": "Retro",
        "precio": 237.34,
        "vendida": "no"
    },
    {
        "id": 4,
        "marca": "Battle",
        "modelo": "Sunshine",
        "rodado": 29,
        "Año de fabricación": 2022,
        "color": "Azul",
        "Peso en Kilogramos": 19,
        "tipo": "Triatlon",
        "precio": 200.11,
        "vendida": "no"
    },
    {
        "id": 5,
        "marca": "TopMega",
        "modelo": "Techno",
        "rodado": 14,
        "Año de fabricación": 2023,
        "color": "Rojo",
        "Peso en Kilogramos": 100,
        "tipo": "Playera",
        "precio": 255.99,
        "vendida": "no"
    },
    {
        "id": 6,
        "marca": "SLP",
        "modelo": "HG145214",
        "rodado": 16,
        "Año de fabricación": 2024,
        "color": "Gris",
        "Peso en Kilogramos": 17,
        "tipo": "Retro",
        "precio": 250.41,
        "vendida": "si"
    },
    {
        "id": 7,
        "marca": "Halley",
        "modelo": "Mini",
        "rodado": 18,
        "Año de fabricación": 2020,
        "color": "Verde",
        "Peso en Kilogramos": 10,
        "tipo": "Montaña",
        "precio": 274.23,
        "vendida": "si"
    },
    {
        "id": 8,
        "marca": "Fixie",
        "modelo": "RX22",
        "rodado": 28,
        "Año de fabricación": 2022,
        "color": "Naranja",
        "Peso en Kilogramos": 21,
        "tipo": "Paseo",
        "precio": 250.24,
        "vendida": "no"
    }
]


//   crear una funcion, con parametro id, 
//   que devuelva la bici que le pase ese id. 
//   si no la encueentra, retorna null
// (Utilizar el método filter.)
function buscarBici(id) {

    const biciFiltrada = bicicletas.filter(function (bici) {
        return bici.id === id

    })

    return biciFiltrada[0]
}

// console.log(buscarBici(7));


// Crear funcion biciParaLaVenta,
// que devuelva si se puede vender o no

function biciParaLaVenta(bici){

    // a partir del parametro bici, si bici vendida es no, devuelve true, sino false

    if (bici.vendida === 'no') {
        return true
    } else {
       return false
    }
}


// crear funcion venderBici, que reciba como parametro id, ✅

// encontrar la bici entre todas segun el id, ✅
//  cambiar su estado de vendida a true,
// devolver todos los datos de esa bici
// y si no la encuentra, bicicleta no encontrada

function venderBici(id) {

    const bici = buscarBici(id)

    const disponible = biciParaLaVenta(bici)

    

    if(!disponible){
        return "Ya la vendi"
    }else{
        bici.vendida = "si"

        return {
            resultado: 'Vendida',
            bici
        }
    
    }
    


    // if (bici.vendida === 'no') {
    //     if (bici) {
    //         bici.vendida = "si"
    //     } else {
    //         return "Bicicleta no encontrada"
    //     }
    // } else {
    //     return "Ya la vendi maestro"
    // }

    // return bici

    // console.log("bici encontrada y vendida: ", bici);


}

const venta = venderBici();

console.log("Resultado venta: ", venta);

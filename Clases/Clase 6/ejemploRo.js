

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


function buscarBici(idABuscar) {
    // let bicicletaADevolver = bicicletas.filter(bicicleta => bicicleta.id == idABuscar);
        let bicicletaADevolver = bicicletas.filter(function(bicicleta){
            return bicicleta.id == idABuscar
        });

    if (bicicletaADevolver.length > 0) {
        return bicicletaADevolver[0];
    } else {
        return null;
    }
}
// console.log(buscarBici(2));

function venderBici(id, callBack) {
    let mensaje = "Bicicleta no encontrada"
    let biciEncontrada = callBack(id)
    if(biciEncontrada != null) {
        biciEncontrada.Vendida = "si"
        return biciEncontrada
    }else {
        return mensaje
    }
}

console.log(venderBici(2, buscarBici))
// console.log(venderBici(9, buscarBici))

function biciParaLaVenta() {
    let bicisNoVendidas = bicicletas.filter(bicicleta => bicicleta.Vendida == "no");
    return  bicisNoVendidas
}

//console.log(biciParaLaVenta());

function totalDeVentas() {
    let bicisVendidas = bicicletas.filter(bicicleta => bicicleta.Vendida =="si")

    let ventasTotales = bicisVendidas.reduce((contador, bicicleta) => {
        // primer bici contador arranca en 0, le suma el precio + 
        return contador + bicicleta.Precio}, 0)
    return ventasTotales
}
console.log(totalDeVentas());
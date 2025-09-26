import React, { useState } from 'react'
import Titulo from '../Titulo/Titulo';
import Descripcion from '../Descripcion/Descripcion';
import Button from '../Button/Button';

export default function CardOperacion() {

    const [contador, setContador] = useState(0)

    function Sumar() {
        setContador(contador + 1);
    }
    function Restar() {
        setContador(contador - 1);
    }

    return (
        <>
            <Titulo titulo={"Clase 5"} color={"blue"} />
            <Descripcion texto={"texto corto"} />
            <Button tituloButton={"suma"} Operat={Sumar} contador={contador} />
            <Button tituloButton={"resta"} Operat={Restar} contador={contador} />

        </>
    )
}

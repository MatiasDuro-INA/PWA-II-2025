import React from 'react'
import "./Styles.css"
import Descripcion from '../Descripcion/Descripcion'
import Titulo from '../Titulo/Titulo'
import Button from '../Button/Button'

export default function CardProducto() {



  return (
    <div class="card">


    <Titulo titulo={"Título de la Card"} color={"red"}/>


      <Descripcion texto={"Esta es una descripción corta dentro de la card. Podés escribir lo que quieras aquí."}/>
      <Descripcion texto={"$2.500"} color="green"/>

      <Button tituloButton={"Agregar al carrito"} background="green"/>

      <Button tituloButton={"Comprar"} background="blue"/>
      


    </div>
  )
}

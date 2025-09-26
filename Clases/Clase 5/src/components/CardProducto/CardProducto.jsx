import React from 'react'
import "./Styles.css"
import Descripcion from '../Descripcion/Descripcion'

export default function CardProducto() {



  return (
    <div class="card">


      <h2 class="card-title">Título de la Card</h2>
      <p class="card-description">
        Esta es una descripción corta dentro de la card. Podés escribir lo que quieras aquí.
      </p>

      <p class="card-price">$2.500</p>
      
      <button class="btn btn-cart">Agregar al carrito</button>
      <button class="btn btn-buy">Comprar</button>


    </div>
  )
}

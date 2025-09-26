
import React, { useState } from 'react'
import '../../App.css'

export default function Button({tituloButton, Operat, contador, background}) {
    
  return (
    <button style={{backgroundColor: background}} onClick={() => Operat()}> 
         {tituloButton} {contador}
        </button>
  )
}

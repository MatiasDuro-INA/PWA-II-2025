
import React, { useState } from 'react'
import '../../App.css'

export default function Button({tituloButton, Operat, contador}) {
    
  return (
    <button onClick={() => Operat()}> 
         {tituloButton} {contador}
        </button>
  )
}

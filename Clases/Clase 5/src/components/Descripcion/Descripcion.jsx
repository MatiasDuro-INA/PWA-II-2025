
import React from 'react'
import '../../App.css'
export default function Descripcion({texto, color}) {
  return (
    <p style={{color:color}}>{texto}</p>
  )
}

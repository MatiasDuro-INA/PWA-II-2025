import React from 'react'

export default function Titulo(props) {

    const {mensaje, color } = props

  return (
    <h1 style={{color: color}}>{mensaje}</h1>
  )
}

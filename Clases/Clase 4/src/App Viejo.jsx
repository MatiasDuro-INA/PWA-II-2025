import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import Titulo from './components/Titulo/Titulo'

function App() {

  // let contador = 7

  // Los Hooks, son funciones especiales de React, para manejar componentes
  // Como me doy cuenta de que algo es un HOOK? porque arranca con Use

  // el primer argumento del [] es el nombre del estado
  // el segundo argumento del [] es la funcion encargada de actualizar el state
  // el tercer argumento que sale al final dentro del useState() 
  // es el valor inicial
  const [contador, setContador] = useState(5)




  const handleContador = () => { 
    console.log("Contador: ", contador);
    setContador(contador + 1)
  }

  return (
    <>
      <Titulo mensaje={"Bienvenidos"} color={"white"}/>

      <h1>Contador:</h1>



      <h3>{contador}</h3>

      <button onClick={() => handleContador()}>Sumar +1</button>

      {/* <Input/> */}
      {/* <Button nombre={"Comprar"}/>
      <Button nombre={"Agregar al Carrito"}/> */}
      {/* <Titulo mensaje={"Adios"} color={"red"}/> */}

    </>
  )
}

export default App

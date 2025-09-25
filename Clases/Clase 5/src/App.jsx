import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [contador, setContador] = useState(0)

  // SetContador, o los sets de los estados, no se pueden pasar directamente al onclick
  // al onclick, hay que pasarle siempre una funcion

  function ManejarClick(){    
    setContador(contador + 1)
  }

  return (
    <>

{/* h1 va a componente Titulo */}
    <h1>Clase 5</h1> 

{/* p va a componente Descripcion */}
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat debitis doloribus rem voluptate error obcaecati quos laboriosam rerum maxime neque blanditiis, corrupti adipisci aliquam? Saepe ducimus excepturi aliquam tempora sunt.</p>
       

       {/* button vaya al componente Button */}
        <button onClick={() => ManejarClick()}>
          +1 El contador va en {contador}
        </button>
        <button onClick={ () => setContador(contador - 1)}>
          -1 El contador va en {contador}
        </button>
    </>
  )
}

export default App

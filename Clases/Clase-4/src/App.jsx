import { useState } from 'react'
import './App.css'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import Titulo from './components/Titulo/Titulo'

function App() {
  const tareasIniciales = [
    {id: 1, titulo: "tarea 1", completada: true},
    {id: 2, titulo: "tarea 2", completada: false},
    {id: 3, titulo: "tarea 3", completada: false},
  ]

  const [tareas, setTareas] = useState(tareasIniciales)

  const handleCompletada = (id) => {

    const tareasActualizadas = tareas.map((tarea) => {

      // spread operator ...
      return tarea.id === id ? {...tarea, completada: !tarea.completada} : tarea
    })
    setTareas(tareasActualizadas)
  }


  return (
    <>

      <input
        type='text'
        placeholder='Escribir una tarea'
        style={{margin: "20px"}}
      />

      <button>Agregar Tarea</button>

      <ul>
        {
          tareas.map(tarea => (
            <>
            <li key={tarea.id} style={{margin: "8px 0", textDecoration: tarea.completada ? "line-through" : "none"}}>
              {tarea.titulo}
            </li>
            
            <button onClick={ () => handleCompletada(tarea.id)}> {tarea.completada ? "❌ Desmarcar" : "✅ Completar"} </button>
            <button>Eliminar Tarea</button>          
            </>
          ))
        }
      </ul>
    </>
  )
}

export default App

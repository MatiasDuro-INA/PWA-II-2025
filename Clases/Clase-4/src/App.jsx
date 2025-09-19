import './App.css'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import Titulo from './components/Titulo/Titulo'

function App() {

  return (
    <>
      <Titulo mensaje={"Bienvenidos"} />
      <Input/>
      <Button nombre={"Comprar"} size={30} color={"red"} numero={27}/>
      <Button nombre={"Agregar al Carrito"}/>
      <Titulo mensaje={"Adios"} />

    </>
  )
}

export default App

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Titulo from "./components/Titulo/Titulo";
import Descripcion from "./components/Descripcion/Descripcion";
import Button from "./components/Button/Button";

function App() {
  const [contador, setContador] = useState(0) //arranca en 0
  function Sumar() {
    setContador(contador + 1);
  }
  function Restar() {
    setContador(contador - 1);
  }
  return (
    <>
      <Titulo titulo={"Clase 5"} color={"blue"} />
      <Descripcion texto={"texto corto"} />
      <Button tituloButton={"suma"} Operat ={Sumar}contador ={contador}/>
      <Button tituloButton={"resta"} Operat ={Restar}contador ={contador}/> 
    
    </>
  );
}

export default App;

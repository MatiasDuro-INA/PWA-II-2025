import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Titulo from "./components/Titulo/Titulo";
import Descripcion from "./components/Descripcion/Descripcion";
import Button from "./components/Button/Button";
import CardOperacion from "./components/CardOperacion/CardOperacion";
import CardProducto from "./components/CardProducto/CardProducto";

function App() {


  return (
    <>
      <CardOperacion/>
      <CardProducto/>
      
    </>
  );
}

export default App;

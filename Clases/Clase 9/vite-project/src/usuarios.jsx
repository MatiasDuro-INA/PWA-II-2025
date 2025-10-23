import React, { useEffect, useState } from "react";
import { obtenerUsuarios } from "./usuarios";
import "./style.css";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  // Cargar los usuarios desde la API o desde el archivo usuarios.js
  useEffect(() => {
    async function cargarUsuarios() {
      try {
        // Si querés traerlos de la API
        const respuesta = await fetch("https://randomuser.me/api/?results=6");
        const datos = await respuesta.json();
        setUsuarios(datos.results);

        // Si querés probar con los datos locales del archivo usuarios.js:
        // const datosLocales = await obtenerUsuarios();
        // setUsuarios(datosLocales.results);

      } catch (error) {
        console.error("Error al cargar los usuarios:", error);
      }
    }

    cargarUsuarios();
  }, []);

  return (
    <div className="container">
      <h1>Personas aleatorias</h1>
      <div className="card-grid">
        {usuarios.map((user, index) => (
          <div key={index} className="card">
            <img src={user.picture.large} alt={user.name.first} />
            <h3>
              {user.name.first} {user.name.last}
            </h3>
            <p><strong>Nacionalidad:</strong> {user.nat}</p>
            <p><strong>Género:</strong> {user.gender}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

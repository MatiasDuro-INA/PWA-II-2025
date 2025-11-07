import React, { useEffect, useState } from "react";
import "./style.css";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function cargarUsuarios() {
      try {
        const respuesta = await fetch("https://thesimpsonsapi.com/api/characters");
        const datos = await respuesta.json();
        setUsuarios(datos.results);
      } catch (error) {
        console.error("Error al cargar los usuarios:", error);
      }
    }

    cargarUsuarios();
  }, []);

  return (
    <div className="usuarios-container">
      <h1 className="titulo">Lista de Usuarios</h1>
      <div className="usuarios-grid">
        {usuarios.map((user) => (
          <div className="usuario-card" key={user.id}>
            <img className="usuario-img" src={user.portrait_path} alt={user.name} />
            <h3 className="usuario-nombre">{user.name}</h3>
            <p className="usuario-origen">{user.name}</p>
            <span className={`usuario-genero ${user.gender.toLowerCase()}`}>
              {user.gender}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

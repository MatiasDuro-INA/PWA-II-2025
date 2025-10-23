import React, { useEffect, useState } from "react";
import { obtenerUsuarios } from "./usuarios"; // tu archivo de datos

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const cargarDatos = async () => {
      const data = await obtenerUsuarios();
      setUsuarios(data.results);
    };
    cargarDatos();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lista de Usuarios</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {usuarios.map((u, i) => (
          <div
            key={i}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              width: "200px",
              padding: "10px",
              textAlign: "center",
              background: "#f9f9f9",
            }}
          >
            <img
              src={u.picture.medium}
              alt={u.name.first}
              style={{ borderRadius: "50%" }}
            />
            <h3>
              {u.name.first} {u.name.last}
            </h3>
            <p>{u.location.country}</p>
            <p style={{ fontSize: "12px" }}>{u.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

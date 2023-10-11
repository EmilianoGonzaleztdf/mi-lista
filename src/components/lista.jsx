import React, { useEffect, useState } from "react";
import "./lista.css";

const Lista = () => {

  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/lista")
      .then((resp) => resp.json())
      .then((data) => setPersonas(data))
      .catch((error) => {
        console.log("no se pudo obtener las personas", error);
      });
  }, []);

  return (
    <>
      <h1>Personas</h1>
      <div className="tabla">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Nacionalidad</th>
            </tr>
          </thead>
          {personas.map((persona, index) => (
            <tr key={index}>
              <td >{persona.nombre}</td>
              <td>{persona.apellido}</td>
              <td>{persona.nacionalidad}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};
export default Lista;

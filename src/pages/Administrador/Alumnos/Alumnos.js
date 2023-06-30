import React, { useEffect, useState } from "react";

import "./Alumnos.css";
import InicioAlumno from "./InicioAlumno";
import Alumno from "./Alumno";

import datos from "./DatosAlumnos";

function Alumnos() {
  //const [info, setInfo] = useState(datos);
  const [clickTipo, setClickTipo] = useState(null);
  //const [currentIndex, setCurrentIndex] = useState(null);
  //const [datosAlumnos, setDatos] = useState(datos);
  const [semestre, setSemestre] = useState(0);
  const [alumnos, setAlumnos] = useState();

  const handlerCargarDatos = function (e) {
    const opcion = e.target.value;
    console.log(opcion);
    setSemestre(e.target.value);
    console.log("semestre es: ", semestre);
  };

  useEffect(() => {}, [semestre]);

  console.log("los datos son: ", datos);
  return (
    <div>
      <InicioAlumno></InicioAlumno>
      <div className="selectSemestre">
        <div>
          Semestre:{"   "}
          <select
            name="tipo"
            id="seltipo"
            onClick={handlerCargarDatos}
            className="trabajos"
          >
            {datos.map((item, i) => (
              <option key={"tipo" + i} value={i}>
                {item.semestre}
              </option>
            ))}
          </select>
        </div>
      </div>
      {datos[semestre].alumnos.map((item) => (
        <div>
          {console.log("alumno es: ", item)}
          <Alumno items={item}></Alumno>
        </div>
      ))}
    </div>
  );
}

export default Alumnos;

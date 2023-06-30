import React, { useEffect, useState } from "react";

import "./Alumnos.css";
import InicioAlumno from "./InicioAlumno";
import Alumno from "./Alumno";

function ListaAlumnos(props) {
  //const [info, setInfo] = useState(datos);
  const [clickTipo, setClickTipo] = useState(null);
  //const [currentIndex, setCurrentIndex] = useState(null);
  //const [datosAlumnos, setDatos] = useState(datos);

  const [alumnos, setAlumnos] = useState();
  console.log("los props son: ", props);
  const [datos, setDatos] = useState(props.items);
  //const [semestre] = useState(props.items.semestre);

  //.log("el semestre es: ", semestre);
  console.log("los datos son: ", datos);
  console.log("los datos2 son: ", props.items);
  const [alumno, setAlumno] = useState();
  return (
    <div>
      {props.items.map((item, i) => (
        <div>
          {console.log("alumno es: ", alumno)}
          <Alumno items={props.items[i]}></Alumno>
        </div>
      ))}
    </div>
  );
}

export default ListaAlumnos;

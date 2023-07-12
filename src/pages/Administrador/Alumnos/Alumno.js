import React, { useEffect, useState } from "react";

import "./Alumno.css";
import InfoAlumno from "./InfoAlumno";
import { ROUTES } from "../../../constants/routes";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

function Alumno(props) {
  //const navigate = useNavigate();
  //const {(profileImageSrc, name, grade, description, studentItems)} = studentData;
  console.log("de cada alumno son: ", props);
  const [nombre, setNombre] = useState(props.items.nombre);
  const [grado, setGrado] = useState(props.items.grado);
  const [interes] = useState(props.items.interes);
  const [laboratorio] = useState(props.items.laboratorio);
  const [correo] = useState(props.items.correo);
  const [telefono] = useState(props.items.telefono);
  const [imagen] = useState(props.items?.imagen);
  const [tipo] = useState(props.items.tipo);
  const info = {
    nombre,
    grado,
    interes,
    laboratorio,
    correo,
    telefono,
    imagen,
    tipo,
  };
  //console.log("props: ", props);
  useEffect(() => {}, [nombre]);

  return (
    <div className="conteneroInfoAlumno">
      <div className="infoAlumno">
        <div className="contenedorImagen item_alumno">
          {/*//pathname: `${ROUTES.INFOALUMNO}/${nombre}`,*/}
          <Link to={`${ROUTES.INFOALUMNO}/:id`} state={props.items}>
            {/*<Link to={ROUTES.INFOALUMNO} state={"any type"}>*/}
            <a href={<InfoAlumno />}>
              {props.items?.imagen !== "" && (
                <img
                  src={require(`./img/${props.items?.imagen}`)}
                  alt="Imagen del alumno"
                  className="imagenAlumno"
                />
              )}
            </a>
          </Link>
        </div>
        <div className="info">
          <Link to={`${ROUTES.INFOALUMNO}/:id`} state={props.items}>
            {/*<Link to={ROUTES.INFOALUMNO} state={"any type"}>*/}
            <a href={<InfoAlumno />}>
              <div className="nombreAlumno">{props.items.nombre}</div>
            </a>
          </Link>
          <br />
          {props.items.grado != "" && (
            <div>Grado de estudio: {props.items.grado}</div>
          )}
          <br />
          {props.items.archivo != "" && <div>Tesis: {props.items.archivo}</div>}
          <div>Áreas de interés: {props.items.interes}</div>
          <br />
          <div>Laboratorio: {" " + props.items.laboratorio}</div>
          <br />
          <div>
            Contacto {props.items.correo} {" , "}
            {props.items.telefono}
          </div>
          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Alumno;

import React, { useState } from "react";

//import { IconName } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import ModalVideo from "../Galeria/ModalVideo";
//import Estudiante from "./img/Estudiante.jpg";

import "./InfoAlumno.css";

function InfoAlumno() {
  const location = useLocation();
  //const nombre = props.nombre;

  const nombre = location.state.nombre;
  const grado = location.state.grado;
  const interes = location.state.interes;
  const laboratorio = location.state.laboratorio;
  const correo = location.state.correo;
  const telefono = location.state.telefono;
  const imagen = location.state.imagen;
  const tipo = location.state.tipo;
  //const [nombre, grado, interes, laboratorio, correo, telefono, imagen] =
  //useLocation().state;
  //console.log("props es:", nombre); //"any type"
  const [datos, setDatos] = useState(0);
  //const [datos2, setDatos2] = useState(0);
  const [clickImage, setClickImage] = useState(null);
  const [clickTipo, setClickTipo] = useState(null);
  //const [currentIndex, setCurrentIndex] = useState(null);

  const handlerCargarDatos = function (e) {
    const opcion = e.target.value;
    console.log(opcion);
    setDatos(opcion);
    console.log("datos es: ", datos);
  };

  /*const handlerCargarDatos2 = function (e) {
    const opcion = e.target.value;
    console.log(opcion);
    setDatos2(opcion);
  };*/

  const handleClick = (item, tipo, index) => {
    //if (tipo == "Video") {
    //setCurrentIndex(index);
    setClickImage(item);
    setClickTipo(tipo);
    //}

    console.log("item: ", item);
    console.log("index: ", index);
  };

  /*const handleRotationRight = () => {
    const totalLength = datos.length;

    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = datos[0].ubicacion;
      setClickImage(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = datos.filter((item) => {
      return datos.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0].ubicacion;
    setClickImage(newItem);
    setCurrentIndex(newIndex);
  };*/

  /*const handleRotationLeft = () => {
    const totalLength = datos.length;

    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = datos[totalLength - 1].ubicacion;
      setClickImage(newUrl);
    }
    const newIndex = currentIndex - 1;
    const newUrl = datos.filter((item) => {
      return datos.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0].ubicacion;
    setClickImage(newItem);
    setCurrentIndex(newIndex);
  };*/

  return (
    <div className="informacionAlumnoPerfil">
      <br /> <br />
      <br />
      <br />
      <br />
      <div className="infoAlumnoPerfil">
        <div className="contenedorImagenPerfil">
          <img
            src={require(`./img/${imagen}`)}
            alt="Imagen de la institución"
          />
        </div>
        <div className="infoPerfil">
          <div className="nombreAlumnoPerfil">{nombre}</div>
          <br /> <br />
          {grado != "" && <div>Grado de estudio: {grado}</div>}
          <br />
          <div>Áreas de interés: {interes}</div>
          <br />
          <div>Laboratorio: {laboratorio}</div>
          <br />
          <div>
            Contacto: <br />
            {correo}, <br />
            {telefono}
          </div>
          <br />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="informacionTrabajos">
        <select
          name="tipo"
          id="seltipo"
          onClick={handlerCargarDatos}
          className="trabajos"
        >
          {tipo.map((item, i) => (
            <option key={"tipo" + i} value={i}>
              {item.nombre}
            </option>
          ))}
        </select>
        <br />
        <br />
        <br />

        {tipo[datos].datos.map((item, i) => (
          <div className="infoTrabajo">
            <table className="tablaTrabajosAlumno">
              {tipo[datos].años[i] !=
                undefined /* Creo solo hay que quitar esta condicion para que se vean los videos */ && (
                <tr>
                  {console.log("esta vacio: ", tipo[datos].años[i])}
                  <td className="celdaNombre celda">
                    <div className="nombreTrabajo">{item}</div>
                  </td>
                  <td className="celdaAño celda pos">
                    {tipo[datos].tipo[i] === "Video" && (
                      <a
                        href=""
                        onClick={() =>
                          handleClick(
                            tipo[datos].años[i],
                            tipo[datos].tipo[i],
                            i
                          )
                        }
                      >
                        Ver
                      </a>
                    )}
                    {tipo[datos].tipo[i] === "Documento" && (
                      <a
                        target="_blank"
                        href={require(`../Alumnos/${tipo[datos].años[i]}`)}
                      >
                        Ver
                      </a>
                    )}
                  </td>
                </tr>
              )}

              <div>
                {clickImage && (
                  <ModalVideo
                    clickImage={clickImage}
                    clickTipo={clickTipo}
                    setClickImage={setClickImage}
                  />
                )}
              </div>
            </table>
          </div>
        ))}
      </div>
      <br />
      <br />
      {/*
      <a href="./cv/curriculum.txt" download className="descargarCurriculum">
        Currículum
                </a>*/}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default InfoAlumno;

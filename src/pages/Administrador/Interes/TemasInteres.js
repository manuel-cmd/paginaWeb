import React, { useState } from "react";

//import { IconName } from "react-icons/fa";

import "./TemasInteres.css";
import tipo from "./Temas";

function TemasInteres() {
  const [datos, setDatos] = useState(0);

  function handlerCargarDatos(e) {
    const opcion = e.target.value;
    console.log(opcion);

    setDatos(opcion);
  }

  return (
    <div className="informacionTema">
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
        {/*<div class="row">
          <button
            type="button"
            class="button1"
            onclick={handlerCargarDatos(tipo[0].nombre)}
          >
            {" "}
            General
          </button>
          <button
            type="button"
            class="button1"
            onclick={handlerCargarDatos(tipo[1].nombre)}
          >
            {" "}
            Probabilidad y estadística
          </button>
          <button
            type="button"
            class="button1"
            onclick={handlerCargarDatos(tipo[2].nombre)}
          >
            {" "}
            Bases de datos
          </button>
          <button
            type="button"
            class="button1"
            onclick={handlerCargarDatos(tipo[3].nombre)}
          >
            {" "}
            Programación{" "}
          </button>
        </div>*/}
        {tipo[datos].nombre != "Programación" && (
          <div>
            {console.log("tipo[datos].nombre: ", tipo[datos])}
            {tipo[datos].datos.map((item, i) => (
              <div className="infoTrabajo">
                <table className="tablaTrabajosAlumno">
                  <tr>
                    <td className="celdaNombre celda">
                      <div className="nombreTrabajo">{item}</div>
                    </td>
                    <td className="celdaAño celda">
                      <a
                        target="_blank"
                        href={`${tipo[datos].enlace[i]}`}
                        className="descargarCurriculum"
                      >
                        Ver
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
            ))}
          </div>
        )}
        {tipo[datos].nombre == "Programación" && (
          <div>
            {console.log("tipo[datos].nombre: ", tipo[datos].temas)}
            {tipo[datos].temas.map((item, i) => (
              <div className="infoTrabajo">
                {console.log("item es: ", item)}
                <div className="nombreTrabajo">{item.tipo}</div>
                <table className="tablaTrabajosAlumno">
                  {item.datos.map((dato, i) => (
                    <tr>
                      {console.log("item.datos[i] es: ", item.datos[i])}
                      <td className="celdaNombre celda">
                        <div className="nombreTrabajo">{item.datos[i]}</div>
                      </td>
                      <td className="celdaAño celda">
                        <a
                          target="_blank"
                          href={`${item.enlace[i]}`}
                          className="descargarCurriculum"
                        >
                          Ver
                        </a>
                      </td>
                    </tr>
                  ))}
                  <br />
                </table>
              </div>
            ))}
          </div>
        )}
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default TemasInteres;

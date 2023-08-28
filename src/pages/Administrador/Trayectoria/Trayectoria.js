import React, { useEffect } from "react";

import "./Trayectoria.css";
import Profesor from "./img/profilepic.jpg";
import hawc from "./img/Hawc.jpg";

function Trayectoria() {
  useEffect(() => {}, []);

  return (
    <div>
      <br />
      <br />
      <br />

      <div className="trayectoria">
        <section class="imagenTrayectoria">
          <img
            className="imagenTrayectoriaHawc"
            src={hawc}
            alt="Imagen de la institución"
          />
          <div className="texto-sobre-imagen-inicio">
            Dr. Jesús Alberto Martínez Castro
          </div>
        </section>
        <div className="nombreOculto">Dr. Jesús Alberto Martínez Castro</div>
        <br />
        <br />

        <div className="informacion">
          <div className="conjunto">
            <div className="contenedorImagenTrayectoria">
              <img src={Profesor} className="imagenProfesor" alt="" />
            </div>
            <br />
            <br />
            <a
              className=" perfil"
              target="_blank"
              href="https://ipn.elsevierpure.com/es/persons/jes%C3%BAs-alberto-mart%C3%ADnez-castro"
            >
              {" "}
              Perfil{" "}
            </a>
          </div>
          <div className="contenedorInfo">
            Miembro del Sistema Nacional de Investigadores (I), actualmente
            colabora con el experimento HAWC (High Altitude Water Cherenkov; con
            sede en la Sierra Negra, en los límites entre Veracruz y Puebla.
            <br />
            <br />
            Jesús, ha sido profesor del Instituto Politécnico Nacional desde
            Septiembre de 1995 a la fecha y se encuentra adscrito al Centro de
            Investigación en Computación como Profesor Titular C (Categoría
            Máxima que otorga el IPN). <br />
            <br />
            Jesús, también ha sido evaluador de artículos en diversas revistas
            adscritas al Journal of Citation Report. Su especialidad es Física
            Nuclear y Partículas elementales de altas energías aunque ha
            colaborado también en proyectos interdisciplinarios
            (Física-Medicina-Cómputo) y en proyectos de computación paralela y
            distribuida (Actualmente colaborando con el desarrollo de la GRID,
            la cual es considerada como la siguiente generación de Internet).
          </div>
        </div>

        <div className="proyectos"></div>
      </div>
      {/*<InicioAlumno></InicioAlumno>
      <Alumno></Alumno>
  <Alumno></Alumno>*/}
      <br />
      <br />
      <br />
    </div>
  );
}

export default Trayectoria;

import React from "react";

//import Image from "react";

import "./Inicio_ventana.css";
import principal from "../../../img/principal.jpg";
import alumnos from "../../../img/alumnos.jpg";
import bit_cuantico from "../../../img/bit_cuantico.png";
import enlace from "../../../img/enlace.jpg";
import { ROUTES_ADMIN } from "../../../constants/routes_administrador";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";

function Inicio() {
  return (
    <div>
      <section class="imagen-institucion">
        <img src={principal} alt="Imagen de la institución" />
        <div class="texto-sobre-imagen">Dr. Jesús Alberto Martínez Castro</div>
      </section>

      <section class="cards">
        <h2>Investigador SNI nivel 1</h2>
        <div class="cards-container">
          <div
            class="card"
            onmouseenter="mostrarInfo(this)"
            onmouseleave="ocultarInfo(this)"
          >
            <div class="card-inner">
              <Link to={ROUTES.ALUMNOS} style={{ textDecoration: "none" }}>
                <div class="card-front">
                  <img src={alumnos} alt="Imagen de la card" />
                  <h3>Alumnos</h3>
                </div>
                <div class="card-back">
                  <h3>Alumnos</h3>
                  <p>Trabajos realizados por los alumnos.</p>

                  <a>Ir a la sección</a>
                </div>
              </Link>
            </div>
          </div>
          <div
            class="card"
            onmouseenter="mostrarInfo(this)"
            onmouseleave="ocultarInfo(this)"
          >
            <div class="card-inner">
              <div class="card-front">
                <img src={bit_cuantico} alt="Imagen de la card" />
                <h3>Líneas de investigación</h3>
              </div>
              <div class="card-back">
                <h3>Temas de investigación</h3>
                <p>
                  Investigaciones sobre cómputo cuántico, probabilidad, machine
                  learning, etc.
                </p>
                <a href="">Ir a la sección</a>
              </div>
            </div>
          </div>

          <div
            class="card"
            onmouseenter="mostrarInfo(this)"
            onmouseleave="ocultarInfo(this)"
          >
            <div class="card-inner">
              <Link to={ROUTES.INTERES} style={{ textDecoration: "none" }}>
                <div class="card-front">
                  <img src={enlace} alt="Imagen de la card" />
                  <h3>Temas de interés</h3>
                </div>
                <div class="card-back">
                  <h3>Temas de interés</h3>
                  <p>Noticias, publicaciones, etc.</p>
                  <a href="./views/interes/interes.html">Ir a la sección</a>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Inicio;

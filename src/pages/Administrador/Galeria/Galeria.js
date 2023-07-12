import React, { useEffect } from "react";

//import { useEffect } from "react";

import datos from "./Datos";
import Modal from "./Modal";
//import { ROUTES } from "../../../constants/routes";
import { useState } from "react";

import "./Galeria.css";

function Galeria() {
  const [clickImage, setClickImage] = useState(null);
  const [descriptionImage, setDescriptionImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  //console.log("datos son: ", datos);

  const handleClick = (item, index) => {
    console.log("ha detectado: ", item, index);
    setCurrentIndex(index);
    setClickImage(item.ubicacion);
    setDescriptionImage(item.descripcion);
  };

  const handleRotationRight = () => {
    const totalLength = datos.length;

    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = datos[0].ubicacion;
      const newDesc = datos[0].descripcion;
      setClickImage(newUrl);
      setDescriptionImage(newDesc);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = datos.filter((item) => {
      return datos.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0].ubicacion;
    const newDescItem = newUrl[0].descripcion;
    setClickImage(newItem);
    setDescriptionImage(newDescItem);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = datos.length;
    //console.log("currentIndex es: ", currentIndex, "total length es: ", totalLength);

    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = datos[totalLength - 1]?.ubicacion;
      const newDesc = datos[totalLength - 1].descripcion;
      setClickImage(newUrl);
      setDescriptionImage(newDesc);
      //console.log("clickImage es: ", clickImage);
      //console.log("datos[totallength - 1] es: ", datos[totalLength - 1]?.ubicacion);
      //console.log("newUrl es: ", newUrl);
    }

    let newIndex = currentIndex - 1;
    //console.log("newIndex es: ", newIndex);

    let newUrl = datos.filter((item) => {
      return datos.indexOf(item) === newIndex;
    });
    if (newIndex == -1) {
      newUrl = [datos[totalLength - 1]];
      newIndex = totalLength - 1;
      //setCurrentIndex(totalLength - 1);
    }
    //console.log("newUrl es: ", newUrl);

    const newItem = newUrl[0].ubicacion;
    const newDescItem = newUrl[0].descripcion;
    //console.log("newItem es: ", newItem);
    setClickImage(newItem);
    setDescriptionImage(newDescItem);
    setCurrentIndex(newIndex);
    //setCurrentIndex(newIndex);
  };

  useEffect(() => {}, [clickImage]);

  return (
    <div className="row">
      <br />
      <br />
      <br />
      <br />
      {datos.map((image, index) => (
        <div key={index} className="cardGaleria">
          {image.ubicacion !== "" && (
            <img
              src={require(`./img/${image.ubicacion}`)}
              alt="Imagen del alumno"
              className="imagenGaleria "
              onClick={() => handleClick(image, index)}
            />
          )}
        </div>
      ))}
      {clickImage && (
        <Modal
          clickImage={clickImage}
          handleRotationRight={handleRotationRight}
          setClickImage={setClickImage}
          handleRotationLeft={handleRotationLeft}
          descriptionImage={descriptionImage}
          setDescriptionImage={setDescriptionImage}
        />
      )}
      <br />
    </div>
  );
}

export default Galeria;

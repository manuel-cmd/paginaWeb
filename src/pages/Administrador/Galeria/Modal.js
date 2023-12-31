import React from "react";

const Modal = ({
  clickImage,
  handleRotationRight,
  setClickImage,
  handleRotationLeft,
  descriptionImage,
  setDescriptionImage,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss") || e.keyCode === 27) {
      setClickImage(null);
    }
  };

  const handleEsc = (e) => {
    if (e.keyCode === 27) {
      setClickImage(null);
    }
  };

  const handleKeyDown = (e) => {
    console.log("almenos detecta algo");
    if (e.keyCode === 27) {
      console.log("debe cerrar");
      setClickImage(null);
    }
    if (e.keyCode === 37) {
      console.log("a la izquierda");
      handleRotationLeft();
    }
    if (e.keyCode === 39) {
      console.log("a la derecha");
      handleRotationRight();
    }
  };

  document.onkeydown = handleKeyDown;

  return (
    <div
      className="overlay dismiss"
      onClick={handleClick}
      onKeyDown={handleEsc}
    >
      <div className="imagenDeGaleria">
        <div className="imagenBien">
          <img
            src={require(`./img/${clickImage}`)}
            alt="bigger picture"
            className="imagenFinal"
          />
        </div>
        {descriptionImage != "" && (
          <div className="informacionImagen">
            Descripcion: {descriptionImage}
          </div>
        )}
      </div>
      <span className="dismiss" onClick={handleClick}>
        X
      </span>
      <div
        onClick={handleRotationRight}
        onKeyDown={handleKeyDown}
        className="overlay-arrows_left"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div
        onClick={handleRotationLeft}
        onKeyDown={handleKeyDown}
        className="overlay-arrows_right"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Modal;

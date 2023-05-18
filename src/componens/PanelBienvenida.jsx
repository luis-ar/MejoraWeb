import React from "react";

const PanelBienvenida = ({ nombreUsuario, imagenUsuario }) => {
  return (
    <div className="contenedorBienvenida">
      <div>
        <h1 className="presentacionBienvenida">
          Bienvenido <span className="nomUsuario">{nombreUsuario}</span>
        </h1>

        <img src={imagenUsuario} className="imgUsuario" referrerPolicy="no-referrer" />
      </div>
    </div>
  );
};

export default PanelBienvenida;

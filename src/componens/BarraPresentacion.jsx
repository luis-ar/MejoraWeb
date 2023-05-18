import React from "react";
import Imagen from "../Imagenes/logo.jpeg";

const BarraPresentacion = ({ imagenUsuario, nombreUsuario }) => {
  return (
    <>
      <div className="contenedorBarra">
        <div className="empresaBarra">
        <img src={Imagen}  className="logoEmpresa"/>

          <h4 className="nombreEmpresaBarra">Expense Manager</h4>
        </div>

        <div className="infoBarra">
          <img src={imagenUsuario} className="imagenBarra" />
          <span className="nombreBarra">{nombreUsuario}</span>
        </div>
      </div>
    </>
  );
};

export default BarraPresentacion;

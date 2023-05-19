import React from "react";
import Imagen from "../Imagenes/logo.jpeg";

const BarraPresentacion = ({
  imagenUsuario,
  nombreUsuario,
  copiaCorreo,
  setMuestraPrograma,
  setCopiaCorreo,
  setImagenUsuario,
  setNombreUsuario,
}) => {
  let mostrarPanel = true;
  const AparecerPanel = () => {
    const panel = document.querySelector(".salirUsuario");

    if (mostrarPanel) {
      panel.style.display = "block";
      mostrarPanel = false;
    } else {
      panel.style.display = "none";
      mostrarPanel = true;
    }
  };

  const RegresarLogin = () => {
    setMuestraPrograma(false);
    setCopiaCorreo("");
    setImagenUsuario("");
    setNombreUsuario("");
  };
  return (
    <>
      <div className="contenedorBarra">
        <div className="empresaBarra">
          <img src={Imagen} className="logoEmpresa" />

          <h4 className="nombreEmpresaBarra">Expense Manager</h4>
        </div>

        <div className="infoBarra" onClick={AparecerPanel}>
          <img src={imagenUsuario} className="imagenBarra" />
          <span className="nombreBarra">{nombreUsuario}</span>
        </div>
      </div>

      <div className="salirUsuario">
        <div className="barraSuperior">
          <span className="datosBarra">Expense Manager</span>
          <h3 className="datosBarra btnBotonSalir" onClick={RegresarLogin}>Cerrar Sesión</h3>
        </div>
        <div className="datosGenerales">
          <div className="contenedorImagenDatos">
            <img src={imagenUsuario} className="datosGeneralesImagen" />
          </div>
          <div className="datosEspecificos">
            <h2 className="contenedorDatosUsuario">
              Usuario- <span className="datosUsuario">{nombreUsuario}</span>
            </h2>
            <h2 className="correo">{copiaCorreo}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarraPresentacion;

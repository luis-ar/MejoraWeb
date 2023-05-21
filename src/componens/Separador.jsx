import React, { useState } from "react";
import Registro from "./Registro";
import RecuperarCuenta from "./RecuperarCuenta";

const Separador = ({
  setRecuperar,
  recuperar,
  setCorreo,
  correo,
  contraseña,
  setContraseña,
  setMensaje,
  mensaje,
  setRegistro,
  setNombreUsuario,
  nombreUsuario,
  setImagenUsuario,
  imagenUsuario,
  setMuestraBienvenida,
  muestraBienvenida,
  setMuestraPrograma,
  setCopiaCorreo,
  copiaCorreo,
}) => {
  return (
    <>
      {recuperar ? (
        <Registro
          setRegistro={setRegistro}
          correo={correo}
          setCorreo={setCorreo}
          contraseña={contraseña}
          setContraseña={setContraseña}
          mensaje={mensaje}
          setMensaje={setMensaje}
          setNombreUsuario={setNombreUsuario}
          nombreUsuario={nombreUsuario}
          setMuestraBienvenida={setMuestraBienvenida}
          muestraBienvenida={muestraBienvenida}
          setImagenUsuario={setImagenUsuario}
          imagenUsuario={imagenUsuario}
          setMuestraPrograma={setMuestraPrograma}
          copiaCorreo={copiaCorreo}
          setCopiaCorreo={setCopiaCorreo}
        />
      ) : (
        <RecuperarCuenta
          correo={correo}
          setCorreo={setCorreo}
          contraseña={contraseña}
          setContraseña={setContraseña}
          mensaje={mensaje}
          setMensaje={setMensaje}
          setRegistro={setRegistro}
          setRecuperar={setRecuperar}
        />
      )}
    </>
  );
};

export default Separador;

import React from "react";

import { GoogleLogin } from "@react-oauth/google";
import decodeJwt from "../utils.jsx/decodeJwt";
const GoogleAuth = ({
  setMuestraBienvenida,
  setNombreUsuario,
  setImagenUsuario,
  setMuestraPrograma,
}) => {
  const onSuccess = async (credentialResponse) => {
    if (credentialResponse.credential) {
      const { payload } = await decodeJwt(credentialResponse.credential);
      const imagen = await payload.picture;
      setImagenUsuario(imagen);
      setNombreUsuario(payload.name);
      setMuestraBienvenida(true);
      setTimeout(() => {
        setMuestraBienvenida(false);
        setMuestraPrograma(true);
      }, 2000);
    }
  };

  const onFailure = (error) => {
    console.log("Google authentication failed!", error);
  };

  return (
    <>
      <GoogleLogin
        style={{ background: "red" }}
        logo_alignment="center"
        size="large"
        theme="filled_blue"
        text="continuar con google"
        type="standard"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </>
  );
};

export default GoogleAuth;

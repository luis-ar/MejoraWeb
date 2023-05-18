import datos from "../data/datos.json";
export default function NuevoUsuario(nombre, apellido, correo, password) {
  const usuario = {
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    password: password,
  };
  //datos.push(usuario);
  datos.push({ nombre: "luiss" });
  // const parts = token.split(".");
  // if (parts.length != 3) {
  //   throw new Error("Invalid token format");
  // }
  // const header = JSON.parse(atob(parts[0]));
  // const payload = JSON.parse(atob(parts[1]));
  // return { header, payload };
}

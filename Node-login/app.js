const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
require("dotenv").config({ path: "./.env" });
const puerto = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post("/nuevo", (req, res) => {
  const id = req.body.id;
  const nombreUsuario = req.body.nombreUsuario;
  const correo = req.body.correo;
  const contraseña = req.body.contraseña;
  const imagen = req.body.imagen;
  const datos = {
    id,
    nombreUsuario,
    correo,
    contraseña,
    imagen,
  };

  fs.readFile("datos1.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Error en el servidor" });
      return;
    }

    let datosExistentes = [];
    if (data) {
      datosExistentes = JSON.parse(data);
    }

    datosExistentes.push(datos);

    fs.writeFile("datos1.json", JSON.stringify(datosExistentes), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Error en el servidor" });
        return;
      }

      res.status(200).json({ mensaje: "Datos guardados correctamente" });
    });
  });
});

app.listen(puerto, () => {
  console.log("Conectado en el puerto " + puerto);
});

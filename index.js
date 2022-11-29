const express = require("express");
const conectarDB = require("./config/db");
const usuario = require("./models/Usuario");
const usuarioRouters = require("./routers/usuarioRouters");
const authRouters = require("./routers/authRouters");

conectarDB();

const app = express();

// habilita express.json

app.use(express.json({ extended : true}));

//Rutas o routers
app.use("/api/usuarios", usuarioRouters);

//autenticacion
app.use("/api/auth", authRouters );

app.listen(4000, () => {
    console.log("Servidor puerto 4000 ok esta corriendo con cambios");
});

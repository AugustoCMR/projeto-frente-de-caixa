require("dotenv").config();
const express = require("express");
const app = express();
const rotasUsuario = require("./rotas/usuario");
const rotasCategoria = require("./rotas/categoria");

app.use(express.json());
app.use("/", rotasCategoria);
app.use("/", rotasUsuario);




module.exports = app;

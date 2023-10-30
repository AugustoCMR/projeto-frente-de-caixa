require("dotenv").config();
const express = require("express");
const app = express();
const rotasUsuario = require("./rotas/usuario");
const rotasCategoria = require("./rotas/categoria");
const rotasProduto = require("./rotas/produto");

app.use(express.json());
app.use("/", rotasCategoria);
app.use("/", rotasUsuario);
app.use("/", rotasProduto);




module.exports = app;

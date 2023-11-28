require("dotenv").config();
const express = require("express");
const app = express();
const rotasUsuario = require("./rotas/usuario");
const rotasCategoria = require("./rotas/categoria");
const rotasProduto = require("./rotas/produto");
const rotasCliente = require("./rotas/cliente");
const rotasPedidos = require("./rotas/pedido");

app.use(express.json());
app.use("/", rotasCategoria);
app.use("/", rotasUsuario);
app.use("/", rotasProduto);
app.use("/", rotasCliente);
app.use("/", rotasPedidos);




module.exports = app;

const express = require("express");
const config = require("../config.js");
const vendedor = require("./vendedor/network");
const venta = require("./venta/network");
// const supervisor = require('./supervisor/network');
// const

const cors = require("cors");
const producto = require("./producto/network");
const supervisor = require("./supervisor/network");
const cliente = require("./cliente/network.js");

// const errors = require('../network/errors')
const app = express();

const whitelist = ["http://localhost:3001"];

const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("no permitido"));
    }
  },
};
app.use(cors(options));
//route

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");

  next();
});
app.use(express.json());

app.use("/api/vendedor", vendedor);
app.use("/api/producto", producto);
app.use("/api/supervisor", supervisor);
app.use("/api/cliente", cliente);

// app.use(errors)
app.listen(config.api.port, () => {
  console.log("Api escuchando en el puerto", config.api.port);
});

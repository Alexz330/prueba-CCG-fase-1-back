const DB = require("../../store/mysql");

const TABLA = "cliente";

class vendedorController {
  constructor(injectDstore) {
    this.store = injectDstore;

    if (!this.store) {
      store = new DB();
    }
  }

  list = () => {
    return this.store.list(TABLA);
  };
  get = (id) => {
    return this.store.get(TABLA, id);
  };

  insert = async (body) => {
    const cliente = {
      nombre: body.nombre,
      apellido: body.apellido,
      direccion: body.direccion,
    };
    return this.store.insert(TABLA, cliente);
  };

  update = async (body) => {
    const cliente = {
      id_cliente: body.id_cliente,
      nombre: body.nombre,
      apellido: body.apellido,
      direccion: body.direccion,
    };

    return this.store.update(TABLA, cliente);
  };

  delete = async (data) => {
    return this.store.delete(TABLA, data.id);
  };
}

module.exports = vendedorController;

const DB = require("../../store/mysql");

const TABLA = "producto";

class supervisorController {
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
    const producto = {
      nombre: body.nombre,
      descripcion: body.descripcion,
      precio: body.precio,

    };
    return this.store.insert(TABLA, producto);
  };

  update = async (body) => {
    const producto = {
        nombre: body.nombre,
        descripcion: body.descripcion,
        precio: body.precio,
    };

    return this.store.update(TABLA, producto);
  };

  delete = async (data) => {
    return this.store.delete(TABLA, data.id);
  };
}

module.exports = supervisorController;

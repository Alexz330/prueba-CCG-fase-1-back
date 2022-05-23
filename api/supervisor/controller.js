const DB = require("../../store/mysql");

const TABLA = "supervisor";

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
    const vendedor = {
      nombre: body.nombre,
      apellido: body.apellido,
      dpi: body.dpi,
      telefono: body.telefono,
      direccion: body.direccion,
    };
    return this.store.insert(TABLA, vendedor);
  };

  update = async (body) => {
    const vendedor = {
      id_supervisor: body.id_supervisor,
      nombre: body.nombre,
      apellido: body.apellido,
      dpi: body.dpi,
      telefono: body.telefono,
      direccion: body.direccion,
    };

    return this.store.update(TABLA, vendedor);
  };

  delete = async (data) => {
    return this.store.delete(TABLA, data.id);
  };
}

module.exports = supervisorController;

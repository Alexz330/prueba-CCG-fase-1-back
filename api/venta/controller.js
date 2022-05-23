

const DB = require("../../store/mysql");


const TABLA = "vendedor";

class Venta {

  constructor(injectDstore) {
    this.store = injectDstore;

    if (!this.store) {
      store = new DB();
    }
  }

  list = (id) => {
    return this.store.list(TABLA,id);
  };
  get = (id) => {
    return this.store.get(TABLA, id);
  };

  insert = async (body) => {
    const venta = {
 
        supervisor_id:body.supervisor_id,
        vendedor_id:body.vendedor_id,
        product_id:body.product_id,
        cliente_id:body.product_id
       
    }
    return this.store.insert(TABLA,vendedor );
  };

  update = async (body) => {
    const vendedor = {
        id_venta:body.id_venta,
        nombre:body.nombre,
        apellido: body.apellido,
        dpi:body.dpi,
        telefono:body.telefono,
        direccion:body.direccion
    }

    return this.store.update(TABLA, vendedor);
  };

  delete = async(data)=>{
    return this.store.delete(TABLA,data.id);
  }
}

module.exports = Venta;

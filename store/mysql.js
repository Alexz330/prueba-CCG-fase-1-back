const { set } = require("express/lib/application");
const mysql = require("mysql");
const config = require("../config");

const dbconf = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};

let connection;

function handleConnection() {
  connection = mysql.createConnection(dbconf);
  connection.connect((err) => {
    if (err) {
      console.error("[db err]", err);
      setTimeout(handleConnection, 2000);
    } else {
      console.log("DB Connected");
    }
  });

  connection.on("error", (err) => {
    console.error("[db err]", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleConnection();
    } else {
      throw err;
    }
  });
}

handleConnection();

class DB {
  list(table) {
  console.log(table);
   
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ${table} `, (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  }

  get(table, id) {

    return new Promise((resolve, reject) => {
      let query =  table === "tarea"? `SELECT * FROM ${table} WHERE usuario_id='${id}'; `: `SELECT * FROM ${table} WHERE id='${id}'`
     
      connection.query(query, (err, data) => {
        if (err) return reject(err);
        resolve(data);
      });
    });
  }

  insert(table, data) {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO ${table} SET ?`, data, (err, result) => {
          if (err) return reject(err);
          resolve(result);
      })
  })
  }

  update(table, data) {

    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE ${table} SET ? WHERE id_tarea='${data.id_tarea}'`,
        [data, data.id_tarea],
        (err, result) => {
          if (err) return reject(err);
          resolve(result);
        }
      );
    });
  }

  upsert = async (table, payload) => new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ? ON DUPLICATE KEY UPDATE ?`, [payload, payload], (error, data) => {

      if (error) {
        return reject(error)
      }
      resolve(data)
    })
  })

  query(tabla, query) {
    console.log(tabla, query);
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM ${tabla} WHERE ?`, query, (err, res) => {
        if (err) return reject(err);
        let output = {
          id: res[0].id,
          username: res[0].username,
          password: res[0].password,
        };

        resolve(output, null);
      });
    });
  }

  delete(tabla,id){
    return new Promise((resolve, reject) => {
      connection.query(`DELETE FROM ${tabla} WHERE id_tarea='${id}'`, (err, result) => {
          if (err) return reject(err);
          resolve(result);
      })
  })
  }
}
module.exports = DB;


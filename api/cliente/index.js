const DB = require('../../store/mysql');
const Controller =  require('./controller');
const store =  new DB();

module.exports =  new Controller(store);
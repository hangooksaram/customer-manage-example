const config = require('../config/musicdata.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host :  config.host,
  dialect : config.dialect
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.musicdatas = require('./musicdata.model.js')(sequelize, Sequelize);

module.exports = db;
const Sequelize = require("sequelize");

// TODO change the config file to match to your service
const config = require("../../../service.config.js");

const db = new Sequelize(config.databaseURL, {
  logging: false,
});

module.exports = db;

const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const { setupUserModels, setupProductModels} = require('../db/models/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    logging: true,
});

setupUserModels(sequelize);
setupProductModels(sequelize);

sequelize.sync();

module.exports = sequelize;
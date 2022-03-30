const config = require("../service/config-service");
const Sequelize = require('sequelize');


const sequelize = new Sequelize(`${config.DB_DATABASE}`, `${config.DB_USERNAME}`, `${config.DB_PASSWORD}`, {
    dialect: `${config.DB_CONNECTION}`,
    host: `${config.DB_HOST}`,
    port: `${config.DB_PORT}`
})





module.exports = sequelize;
require('dotenv').config();
//console.log(process.env)

//const port = process.env.port;



module.exports = {
    PORT:process.env.PORT||80,
    HOST:process.env.HOST||'localhost',
    ENV:process.env.ENV,
    //DATABASE
    DB_HOST:process.env.DB_HOST,
    DB_USERNAME:process.env.DB_USERNAME,
    DB_DATABASE:process.env.DB_DATABASE,
    DB_CONNECTION:process.env.DB_CONNECTION,
    DB_PORT:process.env.DB_PORT,
    DB_PASSWORD:process.env.DB_PASSWORD
};
require('dotenv').config(); // 'dotenv' en .env se declaran todas las VARIABLES que deseamos que esten disponibles en el projecto, y aqui se traen esas variables en un unico archivo 'index.js' en config (para no hacerlo en cada modulo)

module.exports.Config = {   // para que este archivo se pueda utilizar en otros archivos/modulos, devolviendo objetos
    port: process.env.PORT,   //accede al nombre del .env ya definido
    mongoUri: process.env.MONGO_URI,
    mongoDbname: process.env.MONGO_DBNAME,
}; 
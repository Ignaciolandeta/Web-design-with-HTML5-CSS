// codigo para generar la conexion con MondoDB Atlas could (data almacenada como .json (NoSql) )

const { MongoClient } = require('mongodb');
const debug = require('debug')('app:module-database');

const { Config } = require('../config/index');

var connection = null; // conexion inicial al servidor 'null' (sin conexion)
module.exports.Database = (collection) => new Promise( async (resolve, reject) => {   // este archivo se encargara de exportar una funcion que nos devuelva la conexion a la DB y a partir de ahi poder trabajar con cada modulo/servicio
    try {
        if (!connection) {  //logica que chequea las conexiones para no sobresaturar al servidor (si No existe una conexion crear una nueva, si ya hay una conexion usar esa)
            const client = new MongoClient(Config.mongoUri); //trae la conexion a la DB
            connection = await client.connect(); //genera una nueva conexion
            debug('New conection to MongoDB Atlas cloud server succsessfull')
        }
        debug('Already using a DB conexion'); //si ya esta utilizando una conexion existente utilizar esa
        const db = connection.db(Config.mongoDbname); //trae la DB sobre la cual ya está conectado (especificando el nombre de la DB definido en Atlas cloud) 
        resolve(db.collection(collection)); //resuelve la 'coleccion' de datos a la que queremos conectarnos dentro de la DB 'inventario' (mongoDB es una DB documental, NoSql)
    } catch (error) {
        reject(error);
    }
});  
 
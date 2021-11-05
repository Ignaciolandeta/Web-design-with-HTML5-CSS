// la capa de 'Serivios' posee el codigo para gestionar la comunicacion con la DB y hacer que estos servicios expongan las funciones necesarias para obtener la lista de users (GET) o crear nuevos users (POST)

const { ObjectId } = require('mongodb'); //para realizar las busquedas por 'id' (linea 15)

const { Database } = require('../database/index'); //conexion con el index.js del modulo Database

const COLLECTION = 'users'

const getAll = async () => {  //'getall' es la funcion que se encargara de traer todos los datos (users) de la DB
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray(); //consulta 'find' a la MongoDB que trae todo lo que encuentre en esa 'collection', transformado a un array
}  

const getById = async (id) => {  //'getById' es la funcion para realizar busquedas en base al 'id'
    const collection = await Database(COLLECTION);
    return collection.findOne({ _id: ObjectId(id) }); //'findOne' es un metodo de consulta de MongoDB para buscar un parametro particular
} 

const create = async (product) => {  //'create' es la funcion que crea un nuevo user en la DB
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product); //'insertOne' recibe los datos del producto y se almacena en la variable 'result'
    return result.insertedId
}


// falta funcion para hacer 'Update'
// falta funcion para hacer 'Delete'


module.exports.UsersService = {
    getAll,
    getById,
    create,
};
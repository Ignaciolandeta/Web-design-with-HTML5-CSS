// la capa de 'Serivios' posee el codigo para gestionar la comunicacion con la DB y hacer que estos servicios expongan las funciones necesarias para obtener la lista de producto (GET) o crear nuevos productos (POST)

const { ObjectId } = require('mongodb'); //para realizar las busquedas por 'id' (linea 15)

const { Database } = require('../database/index'); //conexion con el index.js del modulo Database
const { ProductsUtils } = require('./utils');

const COLLECTION = 'products'

const getAll = async () => {  //'getall' es la funcion que se encargara de traer todos los datos (productos) de la DB
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray(); //consulta 'find' a la MongoDB que trae todo lo que encuentre en esa 'collection', transformado a un array
}  

const getById = async (id) => {  //'getById' es la funcion para realizar busquedas en base al 'id' de un producto
    const collection = await Database(COLLECTION);
    return collection.findOne({ _id: ObjectId(id) }); //'findOne' es un metodo de consulta de MongoDB para buscar un parametro particular
} 

const create = async (product) => {  //'create' es la funcion que crea un nuevo producto en la DB
    const collection = await Database(COLLECTION);
    let result = await collection.insertOne(product); //'insertOne' recibe los datos del producto y se almacena en la variable 'result'
    return result.insertedId
}

const generateReport = async (name, res) => { //servicio para generar el reporte Excel
    let products = await getAll();
    ProductsUtils.excelGenerator(products, name, res )

}

// falta funcion para hacer 'Update'
// falta funcion para hacer 'Delete'


module.exports.ProductsService = {
    getAll,
    getById,
    create,
    generateReport,
};
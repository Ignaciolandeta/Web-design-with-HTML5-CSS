// algoritmo en JS para trabajar las logicas del modulo 'Productos';

const express = require('express'); // trae modulo express

const { ProductsController } = require('./controller'); // trae 'ProductsController' de controller.js del modulo products

const router = express.Router(); // definicion de las rutas independientemente de la app

module.exports.ProductsAPI = (app) => { //'ProductsAPI es una funcion que recibe 'app' como parametro y le aplica las rutas
    router // definicion de rutas del modulo 'Producto'
        .get('/', ProductsController.getProducts) // para traer toda la lista de productos en url http://localhost:PORT/api/products/
        .get('/report', ProductsController.generateReport) //ruta para que el usuario pueda solicitar el reporte Excel        
        .get('/:id', ProductsController.getProduct)   //recibe parametro 'id' para obtener un unico producto por id http://localhost:PORT/api/products/'id'
        .post('/', ProductsController.createProduct);  //crea producto http://localhost:PORT/api/products

        // falta ruta para 'Update' ver documentacion https://docs.mongodb.com/drivers/node/current/usage-examples/updateOne/
        // falta ruta para 'Delete' ver doc https://docs.mongodb.com/drivers/node/current/usage-examples/deleteOne/

    app.use('/api/products', router); //hace disponible las 3 rutas definidas antes, en la url '/api/products' concatenandolas http://localhost:8081/api/products/
};
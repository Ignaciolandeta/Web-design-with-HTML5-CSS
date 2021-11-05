// algoritmo en JS para trabajar las logicas del modulo 'Usuario';

const express = require('express'); // trae modulo express

const { UsersController } = require('./controller'); // trae '' de controller.js del modulo products

const router = express.Router(); // definicion de las rutas independientemente de la app

module.exports.UsersAPI = (app) => { // funcion que recibe 'app' como parametro y le aplica las rutas
    router // definicion de rutas del modulo 'Usuarios'
        .get('/', UsersController.getUsers) 
        .get('/:id', UsersController.getUser)   
        .post('/', UsersController.createUser);  

        // falta ruta para 'Update' ver documentacion https://docs.mongodb.com/drivers/node/current/usage-examples/updateOne/
        // falta ruta para 'Delete' ver doc https://docs.mongodb.com/drivers/node/current/usage-examples/deleteOne/

    app.use('/api/users', router); //hace disponible las 3 rutas definidas antes, en la url '' concatenandolas http://localhost:8081/api/products/
};
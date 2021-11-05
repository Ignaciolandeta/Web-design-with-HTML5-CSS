// modulo 'index' para gestionar las URLs que no encuentre

const express = require('express');
const createError = require('http-errors');

const { Response } = require('../common/response');

module.exports.IndexAPI = (app) => {
    const router = express.Router();
    
    router.get('/', (req, res) => {
        const menu = { // este objeto va a tener las UNICAS URLs disponibles para esta API (el resto dará error)
            products: `https://${req.headers.host}/api/products`,
            users: `https://${req.headers.host}/api/users`,
        } 
        
        Response.success(res, 200, "API inventario", menu)
    })

    app.use('/', router );
}


module.exports.NotFoundAPI = (app) => {  //esto contrala que si algun cliente realiza una peticion a una URL que No existe para la API, responderle con el codigo de error adecuado
    const router = express.Router();

    router.all('*', (req, res) => {
        Response.error(res, new createError.NotFound());
    })  

    app.use('/', router)
}
const express = require('express');
const debug = require('debug')('app:main'); // para levantar servidor

const { Config } = require('./src/config/index'); //llama al objeto 'Config' definido en 'index.js config'
const { ProductsAPI } = require('./src/products/index'); //trae el modulo y rutas del modulo 'Products' via su index
const { UsersAPI } = require('./src/users/index');
const { IndexAPI, NotFoundAPI } = require('./src/index/index');

const app = express();

app.use(express.json()); //capacidad para que el servidor reciba los datos

// Modulos;
IndexAPI(app);
ProductsAPI(app); //modulo 'Products'
UsersAPI(app); //modulo 'Users'
NotFoundAPI(app);

app.listen(Config.port, () => {
    debug(`Server listening in PORT ${Config.port}`)  //'debug' reemplaza la funcion 'console.log()' par imprimir mensajes en consola
});
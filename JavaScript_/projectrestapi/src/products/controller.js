//en 'controllers.js' se define el codigo para manejar los request y responses de este modulo 'Products'

const createError = require('http-errors');
const debug = require("debug")("app:module-products-controller");

const { ProductsService } = require("./services");
const { Response } = require('../common/response');
const { response } = require("express");

module.exports.ProductsController = {
  getProducts: async (req, res) => {
    //'getProducts' se encarga de responder con toda la lista de productos
    try {
      let products = await ProductsService.getAll();
      Response.success(res, 200, 'Products list;', products) //respuesta si la peticion fue satisfactoria, retorna los productos en un .json
    } catch (error) {
      debug(error);
      Response.error(res); //en caso de error
    }
  },
  getProduct: async (req, res) => {  //'getProduct' se encarga de responder con un producto individual 'id'
    try {
      const {
        param: { id },
      } = req;
      let product = await ProductsService.getById(id);
      if (!product) { //validacion de si no existe el Producto que envie una respuesta de error 404, else que envie respuesta satisfactoria
        Response.error(res, new createError.NotFound());
      } else {
        Response.success(res, 200, `Product ${id}`, product) //respuesta si la peticion fue satisfactoria, retorna los productos en un .json
      }
    } catch (error) {
      debug(error);
      Response.error(res); //en caso de error
    }
  },

  createProduct: async (req, res) => {
    //'createProduct' permite crear un producto
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) { //validacion en caso de error de que el body esté vacio (chequea que el lenght = 0)
        Response.error(res, new createError.BadRequest())
      } else {
        const insertedId = await ProductsService.create(body);
        Response.success(res, 201, 'Product added', insertedId)
    }
    } catch (error) {
      debug(error);
      Response.error(res); //en caso de error
    }
  },

  // falta controlador para 'Update'
  // falta controlador para 'Delete'

  generateReport: (req, res) => {
      try {
          ProductsService.generateReport('Inventario', res);
      } catch (error) {
        debug(error);
        Response.error(res); //en caso de error
  
          
      }
  }

};

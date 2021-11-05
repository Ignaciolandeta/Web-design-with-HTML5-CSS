//en 'controllers.js' se define el codigo para manejar los request y responses de este modulo 'Users'

const createError = require('http-errors');
const debug = require("debug")("app:module-users-controller");

const { UsersService } = require("./services");
const { Response } = require('../common/response');
const { response } = require("express");

module.exports.UsersController = {
  getUsers: async (req, res) => {
    // se encarga de responder con toda la lista
    try {
      let users = await UsersService.getAll();
      Response.success(res, 200, 'Users list;', users) //respuesta si la peticion fue satisfactoria, retorna los productos en un .json
    } catch (error) {
      debug(error);
      Response.error(res); //en caso de error
    }
  },
  getUser: async (req, res) => {  //'' se encarga de responder con un producto individual 
    try {
      const {
        param: { id },
      } = req;
      let user = await UsersService.getById(id);
      if (!user) { //validacion de si no existe el Producto que envie una respuesta de error 404, else que envie respuesta satisfactoria
        Response.error(res, new createError.NotFound());
      } else {
        Response.success(res, 200, `User ${id}`, user) //respuesta si la peticion fue satisfactoria, retorna los productos en un .json
      }
    } catch (error) {
      debug(error);
      Response.error(res); //en caso de error
    }
  },

  createUser: async (req, res) => {  // permite crear
    
    try {
      const { body } = req;
      if (!body || Object.keys(body).length === 0) { //validacion en caso de error de que el body esté vacio (chequea que el lenght = 0)
        Response.error(res, new createError.BadRequest())
      } else {
        const insertedId = await UsersService.create(body);
        Response.success(res, 201, 'User added', insertedId)
    }
    } catch (error) {
      debug(error);
      Response.error(res); //en caso de error
    }
  },

  // falta controlador para 'Update'
  // falta controlador para 'Delete'


};

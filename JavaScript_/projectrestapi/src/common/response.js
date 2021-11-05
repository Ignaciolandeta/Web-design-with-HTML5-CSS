// el objetivo del modulo 'common' es el de una respuesta Estandar estructurada para todos los modulos del proyecto, sobre lo que se envie desde la respuesta API

const createError = require('http-errors'); //gestion de los errores en http (400, 500, etc.)

module.exports.Response = {
    success: (res, status = 200, message = 'OK', body = {}) => {  //en caso de respuesta exitosa
        res.status(status).json({ message, body});
    },
    error: (res, error = null) => {
        const { statusCode, message } = error ? error : new createError.InternalServerError();
        res.status(statusCode).json({message})
    }   

}
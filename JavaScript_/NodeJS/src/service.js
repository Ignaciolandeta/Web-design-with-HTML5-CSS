/**
 * CRUD: Este archivo 'service.js' es el codigo que se encargará de controlar los datos bajo metodo CRUD.
 * C: create
 * R: read
 * U: update
 * D: delete
 */

const data = require('./MOCK_DATA.json'); //const para traer el path del archivo .json con los datos de ejemplo en 'MOCK_DATA.json' que se almacenan en la const 'data'

module.exports = { // desarrollo de modulo en nodeJS, con un objeto que se encargará de manipular los datos
    getUsers: () => data,  // get users es una funcion que retorna la 'data' definida en la const inicial
    getUser: (id) => {
    let identificador = Number(id);  // por default es un string pero en 'MOCK_DATA.json' en el key 'id' debe ser valor numerico por lo cual hay que transformar el string en numerico 
    let user = data.filter((person) => person.id === identificador )[0]; // 'let user' retorna y almacena un array y le pido la posicion inicial [0]
    return user
},
    createUser: (dataUser) => {   // funcion para 'C: Crear' un nuevo objeto (sin almacenamiento, solo creacion en la sesion activa)
        let newUser = {   // variable let que es un objeto para crear nueva data manteniendo las propiedades keys del array original del 'MOCK_DATA.json'
            id: data.length + 1, // genera automaticamente un nuevo id a partir de los ya existentes
            ...dataUser, //spread operator
        };

        data.push(newUser);  // con un '.PUSH' agrega en memoria el nuevo objeto 'id' al array data original
        
        return newUser; // retorna el nuevo dato de la variable 'newUser' con el nuevo 'id' despues de haber sido agregado
    },
};
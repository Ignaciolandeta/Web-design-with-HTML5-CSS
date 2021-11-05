const axios = require("axios");
const fs = require('fs').promises;  //paquete FileSystem asincrono
const path = require('path'); //path ayuda a generar las rutas

// simulacion de un cliente que realiza una peticion GET al servidor (rickandmortyapi.com), a la URL (API)
const main = async () => {
 let response = await axios.get("https://rickandmortyapi.com/api/character");  //trae la API
 let { 
    data: {results}
} = response; // desestructuracion de la data de la API para traer solo el array 'results' con los 20 objetos
   let character = results.map((character) => { // traigo solo los keys 'id', 'nombre', 'satus' y 'species' de cada objeto del array desde la API
      return{
         id: character.id,
         name: character.name,
         status: character.status,
         species: character.species,
      };
   })
   .map((personaje) => Object.values(personaje).join(','))   // algoritmo para generar un arhcivo CSV (separado por comas) que contenga los keys del objeto definidos antes
   .join("\n"); //se transforma en un String y con '\n' agrega un salto de linea
await fs.writeFile(path.join(__dirname, 'data.csv'), character) //generacion de un archivo .csv con los datos de 'characters' usando modulo .fs filesystem y funcion 'writeFile'

//   console.log(__dirname); //prueba de impresion para el modulo 'path'
//   console.log(path.join(__dirname, 'data.csv'));
//   console.log(character); // imprimo los objetos del array 'results'
};

main();
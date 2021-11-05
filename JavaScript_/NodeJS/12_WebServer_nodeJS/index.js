const express = require("express");

// const data = require('./MOCK_DATA.json');   //const para traer el path del archivo .json con los datos de ejemplo en 'MOCK_DATA.json' que se almacenan en la const 'data'

const service = require("../src/service"); // trae el codigo definido en el archivo 'service.js' para la manipulacion 'CRUD' de la data

const app = express();
const PORT = 3000; //puerto local

// app.use(express.json) // este metodo de 'express.json' permitirá recibir los nuevos datos de tipo .json peticionados desde el lado cliente.

app.get("/", (req, res) => {
  //comando para decirle a la App que al escuchar peticiones GET (ó POST) que llegan a la URL en el servidor, ejecute cierto codigo
  //   res.json({  // en este caso, el codigo dice que cada vez que el cliente haga la peticion GET la app responde 'res' (response) con un .json que diga 'Hello World'
  //    message: "Hello world from Express nodeJS server side"
  //   });
  res.status(201).json({
    //en este caso, el codigo dice con un comando 'res' traer como respuesta al GET, la 'data' desde './MOCK_DATA.json'
    message: "Hello, users list;",
    //        body: data,
    body: service.getUsers(), // accede a las propiedades del 'service.js'
  });
});

app.get("/:id", (req, res) => { // otro endpoint de tipo GET en la ruta base '/' y recibe un numero que es el 'id'
  //        let id = req.params;
  //        console.log(id); // imprime el 'id' como objeto en la consola
  let {
    params: { id },
  } = req;
  let user = service.getUser(id);
  res.json({
    message: `User ${id}`,
    body: user,
  });
});

app.post("/", (req, res) => {
  // nuevo endpoint para cuando un usuario haga POST envie la data al endpoint servidor al path definido '/'
  let { body: newUser } = req; // request en body con los datos peticionados por el cliente
  let user = service.createUser(newUser); // con esta linea se almacena en una variable let el nuevo objeto creado
  res.json({
    message: "Data successfully created", // le responde al clinete que los datos han sido satisfactoriamente creados
    body: user, // retorna y agrega el dato Creado
  });
});

app.listen(PORT, () => {
  console.log(`Server listening in http://localhost:${PORT}`); // genera un servidor local en la PC ("simulando" un servidor) escuchando en LocalHost 127.0.0.1: puerto 8081 (propia PC)
});

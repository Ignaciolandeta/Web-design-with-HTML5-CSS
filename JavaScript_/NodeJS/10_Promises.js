/**
 * Promises; permite manejar los procesos Asincronos
 */


const getdata = (error) => new Promise((resolve, reject) => {  // getdata1 es una FUNCION que retorna una nueva promesa, lo cual permite pasarle una parametro
    if (!error) { // si no hay error que devuelva los datos..
        setTimeout(() => {
            resolve({
                name: 'Igancio',
                lastname: 'Landeta',
            })
        }, 3000);
    } else{
        reject('Cant get data')
    }
});

console.log('Start');

getdata(false)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })

console.log('End');

// const getdata2 = new Promise((resolve, reject) => {})   // getdata2 esta definida como una Promisa (no una funcion con lo cual no se le puede pasar un parametro)

// ASYN + AWAIT; reserved words mas agiles de resolucion de Promesas

const getdata2 = (error) => new Promise((resolve, reject) => {  // getdata1 es una FUNCION que retorna una nueva promesa, lo cual permite pasarle una parametro
    if (!error) { // si no hay error que devuelva los datos..
        setTimeout(() => {
            resolve({
                name: 'Igancio',
                lastname: 'Landeta',
            })
        }, 3000);
    } else{
        reject('Cant get data')
    }
});

const main = async () => {
    let result = await getdata2(false);
    console.log(result);
}
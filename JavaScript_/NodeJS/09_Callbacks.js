// CALLBACKS: era el metodo inicial con el cual JS proponia manejar los asincronimos, e suna funcion que se pasa como argumento a otra funcion padre, para que se ejecute primero la funcion padre y luego esta.

// ejemplo Sin callback;
const sum = (a,b,) => {
    return a + b
}

var result = sum(1,2);
console.log(result);

// ejemplo Con callback 'cb';
const sum2 = (a,b, cb) => {
    cb(a + b)
}


sum2(2, 3, (result) => {
    console.log(result);
})


// otro ejemplo 
const sum3 = (a,b, cb) => cb(a + b)

const print = (data) => console.log(data);

sum3(3, 4, print);


// otro ejemplo, un metodo que se encarga de traer datos con callback;
const getdata = (cb) => {   // getdata es una funcion que trae 'data' y lo notifica con un callback despues de 3.000milisegundos 
    setTimeout(() => {
        cb({
            name: 'Jhon',
            lastname: 'Cohnor',
        })
    }, 3000);   
}

const printdata = (data) => console.log(data);

getdata(printdata);


// la anterior era la forma inicial antigua con la cual JS manejaba los Callbacks. La evolucion de este metodo son las 'PROMESAS'
const getdata2 = (cb, cberror) => {   // getdata es una funcion que trae 'data' y lo notifica con un callback despues de 3.000milisegundos 
    if(false) {             
        setTimeout(() => {
            cb({
                name: 'Jhon',
                lastname: 'Cohnor',
            });
        }, 3000);
    } else {
        cberror(new Error('No se pudo obtener los datos'))
    }
        
};

const printdata2 = (data) => console.log(data);

getdata2(printdata2);
const errorhandler = (error) => console.log(error);

getdata2(printdata2, errorhandler);
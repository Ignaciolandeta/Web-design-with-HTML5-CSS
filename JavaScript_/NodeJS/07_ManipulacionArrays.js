/**
 * Manipulacion de Arreglos(arrays);
 */

// FOR-EACH;
var letters = ['a', 'b', 'c', 'd', 'e'];
console.log(letters.length)

// Con un 'FOR' comun el recorrido por el array seria asi;
// for (let i = 0; i < letters.length; i++){
//    const element = letters[i];
//    console.log(element);
// }

// Pero con un 'FOR-EACH' se reusmen esas 3 lineas en 1 sola para el mismo output;
letters.forEach((element) => console.log(element));


// PUSH (agrega un elemento al array)
var letters2 = ['a', 'b', 'c', 'd', 'e'];
letters2.push('f');
console.log(letters2);

// SHIFT (remueve el 1er elemento del array, lo modifica y devuelve el resto)
letters2.shift();
console.log(letters2);

var firstelement = letters2.shift();
console.log(firstelement);

// POP (remueve el Ultimo elemento del array, lo modifica y devuelve el resto)
letters2.pop();
console.log(letters2);

var lastelement = letters2.pop();
console.log(lastelement);

// MAP  (agrega algo a cada elemento de un array pero devuelve el array sin modificar el mismo, por eso se llama "inmutable")
var students = ['John', 'Kevin', 'Mike', 'Clark']
var asistance = students.map((name) => {
    return {
        name: name,
        asistance: false,
    }

})
var asistance2 = students.map((name) => `Hello ${name}.`)
console.log(students);
console.log(asistance);
console.log(asistance2);
console.log(students);

var products = [
    { name: 'shirts', price: 15},
    { name: 'shoes', price: 20},
    { name: 'jean', price: 25},
]

var productstax = products.map((products) => {
    return {
        name: products.name,
        price: products.price,
        tax: .12
// otra opcion es usar el "sprears operator '...'"  '...products'    
    }
}) 
console.log(products);
console.log(productstax);

var prices = products.map((products) => products.price);
console.log(prices);

// FILTER (filtra elementos dentro de un arregla en base a alguna condicion logica)
var students2 = [
    {name: 'Kevin', age: 20, tuiton: true},
    {name: 'John', age: 22, tuiton: true},
    {name: 'Clark', age: 21, tuiton: false},
    {name: 'Solana', age: 24, tuiton: true},
    {name: 'Mary', age: 26, tuiton: false},
]
// filtrar estudiantes mayores de edad a 24 años Y con tuiton;
var filterage = students2.filter((students2) => students2.age >= 24 && students2.tuiton);
console.log(students2);
console.log(filterage);

// REDUCE (reduce todo el array a un solo valor de cualquier tipo)
var qualifications = [3, 5, 9, 10, 10];
var sum = qualifications.reduce((acumulador, qualifications) => acumulador + qualifications, 0);
console.log(qualifications);
console.log(sum);
console.log(sum / qualifications.length);

var ages = [21, 21, 23, 43, 21, 43, 18, 18, 23, 23];
// salida esperada que acumule #total de cada edad;
// {
//    21: 3,
//    43: 2,
//    23: 3,  
// }
var result = ages.reduce((acumulador, age) => {
    if (!acumulador[age]) {
        acumulador[age] = 1
    } else {
        acumulador[age] += 1
    }
    return acumulador
}, {})
console.log(ages);
console.log(result);

var sales = [
    {name: 'shirt', p: 15, q: 10},
    {name: 'shoes', p: 150, q: 8},
    {name: 'jean', p: 20, q: 30},
]
// salida esperada que calcule el Total vendido 'PxQ' de cada producto;
var result = sales.reduce((acumulador, product) => {
    let PxQ = product.p * product.q
    acumulador[product.name] = `$ ${PxQ}`
    return acumulador;  
}, {})
console.log(sales);
console.log(result);


var students3 = [
    {name: 'Kevin', age: 20, tuiton: true},
    {name: 'John', age: 22, tuiton: true},
    {name: 'Clark', age: 21, tuiton: false},
    {name: 'Solana', age: 24, tuiton: true},
    {name: 'Mary', age: 26, tuiton: false},
]
// calcular la cantidad que han sido matriculados y cuantos no
var result2 = students3
    .map((students3) => students3.tuiton)
    .reduce((acumulador, tuiton) => {
        if (tuiton) {
            acumulador.tuitontrue += 1
        } else {
            acumulador.tuitonfalse += 1
        }
        return acumulador;
    }, {tuitontrue: 0, tuitonfalse:0})
console.log(students3);
console.log(result2);

// SOME (verifica si al menos de UN de todos los elementos del arreglo cunmple con una condicion dada, y devuelve un boolean true/false-
var numbers = [1,2,3,4,5,6,7,8,9,10]
var result = numbers.some((number) => number % 2 === 0 ); // busca si algun elemento es par (residuo 0 al dividir por 2)
console.log(result); // True algunos elementos del array son pares

var numbers2 = [1,3,5,7,9] //cambio el array solo por numeros impares
var result = numbers2.some((number) => number % 2 === 0 );
console.log(result); // False ningun elemento del array es par

// EVERY (retorna un valor booleano true/false si TODOS los elementos del arreglo cunmple con una condicion dada)
var numbers = [1,2,3,4,5,6,7,8,9,10];
var result = numbers.every((number) => number % 2 === 0 )
console.log(result); // False no todos los elementos del array son pares.

// FIND (busca un elemento en el array que coincida con cierta condicion y retorna el 1ER VALOR de dicho elemento encontrado)
var clients = [
    {id: 0, name: 'John'},
    {id: 2, name: 'Kevin'},
    {id: 3, name: 'Sara'},
    {id: 1, name: 'Clerk'},
    {id: 2, name: 'Jim'},
]
var client = clients.find((client) => client.id === 1 ); // FIND solo devuelve el 1er elemento encontrado
var filter = clients.filter((client) => client.id === 2 ); // diferencia con FILTER, devuelve TODOS los elementos que coinciden, no solo el 1ro
console.log(clients);
console.log(client);
console.log(filter);


// FINDINDEX (busca el 1er elemento en el array que coincida con cierta condicion y retorna la POSICION (comenzando por 0) dicho elemento)
var clients = [
    {id: 0, name: 'John'},
    {id: 2, name: 'Kevin'},
    {id: 3, name: 'Sara'},
    {id: 1, name: 'Clerk'},
    {id: 2, name: 'Jim'},
]

var indexposition = clients.findIndex((client) => clients.id === 2) 
console.log(indexposition);

// INCLUDES (revisa si en un arreglo existe un elemento que cumpla con cierta condicion y devuelve booleano tru/false)
var pets = ['dog', 'cat', 'bunny'];
var results = pets.includes('cat')
var results2 = pets.includes('x')
console.log(results);
console.log(results2);

console.log('Ignacio'.includes('gn')); // buscar strings dentro de una cadena de strings



var search = (parameter) => {    // ejemplo de un buscador por nombre
    let clients = [
        {id: 0, name: 'John'},
        {id: 2, name: 'Kevin'},
        {id: 3, name: 'Sara'},
        {id: 1, name: 'Clerk'},
        {id: 2, name: 'Jim'},
    ]
    return clients.filter((client) => clients.name.includes(parameter))
}
// console.log(search('a'));

// JOIN (une/concatena todos los elementos de un arreglo y genera un string a partir de esa union)
var weather = ['air', 'fire', 'water']

var result = weather.join(); // por default une con una ',' coma
console.log(result);

var result = weather.join('_'); //se le puede agregar cualquier string para la concatenacion
console.log(result);

var clients = [
    {id: 0, name: 'John'},
    {id: 2, name: 'Kevin'},
    {id: 3, name: 'Sara'},
    {id: 1, name: 'Clerk'},
    {id: 2, name: 'Jim'},
]
console.log(clients.join()); // JOIN no puede concatenar un arreglo con varios elementos tira '[object Object]', hay que modificar el algoritmo

// console.log(Object.values({id: 3, name: 'Sara'})); // metodo "Object.value" devuelve los valores del elemento
// console.log(Object.keys({id: 3, name: 'Sara'})); // metodo "Object.key" devuelve los keys del elemento

var csvgenerator = (array, separator=',') => { // generador de un archivo de datos CSV separado por comas
    let headers = Object.keys(array[0]).join(separator)
    let data = array.map((element) => Object.values(element).join(separator))
    console.log(headers);
    data.forEach(element => console.log(element))
} 

csvgenerator(clients);

// CONCAT (permite concatenar varios arrays)
var array1 = [1,2,3,4,5];
var array2 = [6,7,8,9,0];
var array3concat = array1.concat(array2);
var array4 = [...array1, ...array2] // alternativa al CONCAT con spread operator '...'

console.log(array1);
console.log(array2);
console.log(array3concat);
console.log(array4);

// SORT (ordena los elementos del array, segun codigo ASCII)
var arrayA = [1,2,3,4,5,6,7,8,9,0];
console.log(arrayA.sort());

var alphabet = ['z','b','x','a']
console.log(alphabet.sort());

var numbers = [1,21,10000,4,30];
console.log(numbers.sort()); //ordena segun ACSII no segun orden numerico..
var order = numbers.sort((a, b) => b - a);  // con esta logica se propone hacer una resta ente un numero y el siguiente y ver si es mayor o menor para ordenar bajo ese criterio
console.log(order);

// SPLICE (remueve o modifica (reemplaza) elementos dentro de un array)
var names = ['Jhon', 'Kevin', 'Sara'];
// names.splice(1) // corta y elimina todos los elementos desde la posicion 1
// console.log(names);

// names.splice(1,1) //elimina 1 (un) elementos desde la posicion 1
// console.log(names);
names.splice(1,1,'Jim') // reemplaza 1 elemento desde la posicion 1, por el string 'Jim'


// SLICE (hace una copia de una parte mas pequeña (corte) del array)
var names2 = ['Jhon', 'Kevin', 'Sara'];
// var result = names2.slice(1,2); // copia desde la posicion 1 a la posicion 2, comenzando desde la posicion 0 y SIN incluir la ultima posicion
var result = names2.slice(1,3);
console.log(result);


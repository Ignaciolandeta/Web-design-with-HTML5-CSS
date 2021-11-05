/** Variables; 
 * There are 3 kind of varaiable assignment (reserved words);
 * 1_var
 * 2_let
 * 3_const
*/

// 1_Reserved word 'var' "x = something...". Dfinition and initializer;
var name = 'Ignacio';
console.log(name); 

var age = 30;
console.log(age);

var person = {
    name: 'John',
    lastname: 'James',
    age: 45,
    adress: {
        street: 'avenue',
        number: 100
    },
    cities: [
        'california',
        'buenos aires',
        'ushuaia'
    ]
}

var city; // var definition
city = 'buenos aires' // var initializer
console.log(city);



// 2_Reserved word 'let' (solo para bloques de codigo);
let name2 = 'Ignacio';
console.log(name2);

{ //inicio bloque de codigo para 'let'
    let hello = 'Hello, how are you?'
    console.log(hello);
} //fin bloque de codigo
//reference error por estar fuera del bloque de codigo -->   console.log(hello); 




// 3_Reserved word 'const';
const pi = 3.14;
// can´t redefined 'const´ --> pi = 3.14160000
console.log(pi);



// strings;
var name = 'Ignacio';
var hello = "Hello I am ${name}";
console.log(hello);

/**
 * Funtions
 */

// Funciones Declarativas;
// function FuntionName(){}

function hello(){
    console.log('Hello there, this is a JS Function example')
}
hello();  // para llamar a la funcion simplemente con el nombre()

function hello2(name){
    console.log(`Hello I am ${name}`);
}
hello2('Ignacio Landeta');

function hello3(name){
    return `Hello! I am ${name}` // return
}
var hi = hello3('Ignacio Landeta');
console.log(hi);

console.log(hello3('Ignacio Landeta'));


// Funciones de Expresion ó Anonimas;
var sum = function(a, b){
    return a + b;
}
console.log(sum(2,2));

// funciones "flecha ó arrow =>";
var resta = (a,b) => {
    if (typeof a == 'number' && typeof b == 'number'){
        return a - b
    } else{
        return 'Only numbers, not string text'
    }
}
console.log(resta(4,'2'));
console.log(resta(4, 2));


function multiplicar(a, b) {
    return a * b;
}  //sintaxis compacta (tiene un 'return implicito')
console.log(multiplicar(2,2));

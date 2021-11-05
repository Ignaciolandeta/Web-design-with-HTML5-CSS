/**
 * JavaScript Operators:
 */

/**
 *  Assignment operators;
 */

// operator '=';
var x = 2;
var y = true;

//  operator '+=';
var x = 2;
var y = 1;
x += y;
console.log(x);

// operator '-=';
var x = 1;
var y = 2;
x -= y;
console.log(x);

// operator '*=';
var x = 2;
var y = 3;
x *= y;
console.log(x);

// operator '/=';
var x = 2;
var y = 3;
x /= y;
console.log(x);

// operator residuo de /  '%=';
var x = 2;
var y = 2;
x %= y;
console.log(x);

// operator exp '**=';
var x = 2;
var y = 3;
x **= y;
console.log(x);

/** 
 * Comparisson operators  --> bulean output (true/false);
 */


// operator '==';
console.log(3 == 3);
console.log(3 == 4);
console.log(3 == '3');

// operator strictly equal '===';
console.log(3 === 3);
console.log(3 === '3');

// opetator not equal '!=';
console.log(3 != 3);

// operator strictly not equal '!==';
console.log(3 !== 4);

// other operator '>, >=, <, <=';
console.log(3 > 4);
console.log(3 >=3);
console.log(2 < 4);
console.log(2 <=4);


/**
 * Aritmetic operators
 * ' + , - , * , / , % , * '
 */

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 * 2);

// incremental operator '++';
var number = 0;
console.log(++number);

var number2 = 0;
console.log(number2++);
console.log(number2);

// decrement operator '--';
var number3 = 10;
console.log(--number3);


/**
 * Logical Operators (venn diagrams);
 */

// AND '&&';
console.log(true && true);
console.log(2 > 3 && 1 <=2);

// OR '||';
console.log(true || true);
console.log(true || false);
console.log(false || false);

// NOT '|';
console.log(true | true);
console.log(true | false);
console.log(false | false);


/**
 * Other operators;
 */

// concatenate operator '+' (only text strings);
var name = 'Ignacio';
var lastname = 'Landeta';
var fullname = name + ' ' + lastname;
console.log(fullname);

// conditional operator '(condition + ? + val1 + val2)';
console.log(2 > 3 ? 'Greater than' : 'Minor than');

// operador de desestructuracion de objetos '{}' (obtiene una propiedad especifca de un objeto);
var person = {
    name: 'Ignacio',
    lastname: 'Landeta',
}

var { name, lastname } = person
console.log(name);
console.log(lastname);
console.log(person);

// operador de desestructuracion de arrays '[]' (obtiene una propiedad especifca de un array);
var array = [111, 222, 333, 4, 5]
var [firstPosition, secondPosition] = array;
console.log(firstPosition);
console.log(secondPosition);

// operador de miembro de acceso de propiedad de un Objeto '.' y '[]';
var person = {
    name: 'Ignacio',
    lastname: 'Landeta',
}
console.log(person.name);
console.log(person.lastname);

console.log(person['name']);
console.log(person['lastname']);

var array = [24, 43, 56, 76]
console.log(array[2]);


// operador de determinacion de tipo de dato, 'typeof';
console.log(typeof 'text');
console.log(typeof 21);
console.log(typeof false);


/**
 * Operators - EXCERSICES;
 */


/** 
 * 1. Escribir un programa que calcule el número de segundos que existen en un día.
Para ello debemos multiplicar los segundos de un minuto, por los minutos de
una hora, por las horas de un día. Como todo el mundo sabe, un día tiene 86400 segundos.
*/ 

var seg = 60;
var min = 60;
var hr = 24;
var tot = seg * min * hr; 
console.log(tot);


/**
 * 2. Realiza un programa que a partir de los valores ancho=2 y alto=5,
calcule el área de un rectángulo.
 */

var height = 5
var width = 2
console.log(height*2 + width*2);

/**
 * 3. Hacer un conversor de grados centígrados a grados Fahrenheit.
Para ello deberé multiplicar por 9/5 y sumar 32.
Como todo el mundo sabe, 20 grados centígrados son 68 grados Fahrenheit.
 */

var cent = 20
var fahr = (cent * 9/5) + 32
console.log(fahr);

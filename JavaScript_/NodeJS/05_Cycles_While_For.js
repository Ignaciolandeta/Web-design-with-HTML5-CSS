/**
 * Cycles
 */

// WHILE;
// while (condition-->boolean true/false){bloque codigo}

var counter = 0;
while(counter <=5){
    console.log('Hello World! this is a While cycle');
//    counter = counter + 1
    counter += 1;
}

// DO WHILE;
// do {} while(condition)

var counter2 = 11;
do{
    console.log('Hello World! this is a Do-While cycle');
    counter2 += 1
} while(counter2 <=10)

// FOR loop;
// for(expresion inicial; expresion condicional; expresion de actualizacion){instrucciones/bloque codigo}

for (let i = 0; i <=5; i++){
    console.log('Hello World!, this is a FOR loop')
}

// FOR IN (para iterar dentro de un Objeto definido);
// for (variable - operador IN - objeto){instrucciones}
var person = {
    name: 'Ignacio',
    lastname: 'Landeta',
    age: 30,
}
for (let key in person){
    console.log(key, person[key]);
}

// FOR OF;
// for(variable - objeto iterable ){}
var array = [1,2,3,4,5]
for(let value of array){
    console.log(value)
} 

var string = 'String text'
for(let value of string){
    console.log(value)
}
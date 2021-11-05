/**
 * Control de Flujo (determinacion de cumplimiento de condiciones);
 */

// IF;
// if(condicion) {bloque de codigo}

var rain = true;
    if (rain) {
        console.log("Need an umbrella")
    }

var admin = true;
if(admin){
    console.log("Welcome login system_boolean")
}

var admin = 'admin';
if(admin === 'admin'){
    console.log("Welcome login system_string")
}

// IF-ELSE; ejemplo una logica que verific mayoria de edad;
const age_min = 18;
var age_person = 12;

if (age_person >= age_min){
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}

// IF-ELSE-IF; ejemplo semaforo de carrera;
var semaforo = 'xxx'
if (semaforo === 'green'){
    console.log('Go');
} else if (semaforo === 'yellow'){
    console.log('Set');
} else if (semaforo === 'red'){
    console.log('stop Ready');
} else {
    console.log('color dont identified - dont move')
}

// SWITCH;
//switch(expresion){casos / break}
// Ejemplo un software que devuelve Precio al ingresar nombre del Producto;
var product = 'carriot';
switch(product){
    case 'banana':
        console.log('Banana $1/kg.');
        break;
    case 'carriot':
        console.log('Carriot $2/kg.');
        break;
    case 'egg':
        console.log('Egg $0.5/u.');
        break;
    default:
        console.log('Product not availale');
}

var product = 'carriot';
switch(product){
    case 'banana':
    case 'carriot':
        console.log('Banana & Carriot $2/kg.');
        break;
    case 'egg':
        console.log('Egg $0.5/u.');
        break;
    default:
        console.log('Product not availale');
}

// Ejercicios Control de Flujos
// 1.Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.
// El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch

var dia = 'Sabado'
if(dia == 'Lunes'){
    console.log('Monday');
}else if(dia == 'Martes'){
    console.log('Tuesday');
}else if(dia == 'Miercoles'){
    console.log('Wensday');
}else if(dia == 'Jueves'){
    console.log('Thursday');
}else if(dia == 'Viernes'){
    console.log('Friday');
}else if(dia == 'Sabado'){
    console.log('Saturday');
}else if(dia == 'Domingo'){
    console.log('Sunday');
}else {
    console.log('Not valid day')
}

var dia2 = 'Domingo';
switch(dia2){
    case 'Lunes':
        console.log('Monday');
        break;
    case 'Martes':
        console.log('Tuesday');
        break;
    case 'Miercoles':
        console.log('Wensday');
        break;
    case 'Jueves':
        console.log('Thursday');
        break;
    case 'Viernes':
        console.log('Friday');
        break;
    case 'Sabado':
        console.log('Saturday');
        break;
    case 'Domingo':
        console.log('Sunday');
        break;    
    default:
        console.log('Day not valid');
}

// 2.Escribir un programa que según el total de la compra, se agregue un valor de envio.
// Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3
// Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5
// Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7
// Si la compra supera los $50 el gasto de envío será gratuito
// El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch

var purchase = 25
if(purchase <=10){
    ship = purchase += 3;
    console.log(`Total cost = ${ship}`);
} else if(purchase >=10 && purchase <=20){
    ship = purchase += 5;
    console.log(`Total cost = ${ship}`);
} else if(purchase >=20 && purchase <=50){
    ship = purchase += 7;
    console.log(`Total cost = ${ship}`);
} else{
    console.log(`Total cost = ${purchase} (free shipping)`)
}


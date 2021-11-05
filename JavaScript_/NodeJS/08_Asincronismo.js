// Asincrinismo: cuando JS detecta una tarea mas pesada entre otras tareas mas agiles, y la "separa" para ejecutarla en paralelo SIN demorar las tareas subsiguientes. Ejemplo;

console.log('Task 1');
console.log('Task 2');
console.log('Task 3');
setTimeout(() => {      //aqui ponemos una tarea mas pesada/larga(2.000miliseg) entre las otras 5 tareas mas livianas, se saltea el task 4, ejecuta el Task 5 y ejecuta la 4 al final cuando este lista
    console.log('Task 4');      
}, 2000) 
console.log('Task 5');


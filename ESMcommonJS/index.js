//uso de CommonJS module.export/require
//importamos las funciones que nos presta math.js
//como es una funcion podemos guardarla para no usar "require".

const math = require("./math");



//imprimimos el resultado de la suma llamando a la funcion como const pasandole los valores que recibe la funcion

console.log("2 + 3 = ", math.sumar(2,3));

//repetimos para usar la funcion de restar.
console.log("2 - 3 = ", math.restar(2, 3));


/*
Funciones modularizadas encargadas de sumar y restar datos
*/

function sumar (a,b){
    return a + b;
}

function restar(a,b){
    return a - b;
}

//Exportamos para que se puedan usar fuera de este archvio.

module.exports = {
    sumar,
    restar
};

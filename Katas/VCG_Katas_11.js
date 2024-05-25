//! Ejercicio 11

//? Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función: pista (typeof)


const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(array) {
    // Creo variable para almacenar suma de los números y longitudes de string del array.
    let sumArray = array[0];
    // Itero con bucle cada posición a partir de la primera para empezar la suma.
    for (let i = 1; i < array.length; i++) {
        // condicional de tipo para que sume por una parte números y por otra longitudes de string.
        if (typeof array[i] === "number") {
            sumArray = sumArray + array[i];
        } else if (typeof array[i] === "string") {
            sumArray = sumArray + array[i].length;
        }
        // muestro por consola para comprobar que actúa de forma correcta
        console.log(array[i].length);
        console.log(array[i]);
    }

    // Calculo nº de elementos del array para promedio
    let arrayLength = array.length;
    // Realizo división para obtener promedio
    let arrayAverage = sumArray / arrayLength;  
    // Retorno variable que activará la función al ser invocada.
    return arrayAverage;

}

console.log (averageWord(mixedElements));
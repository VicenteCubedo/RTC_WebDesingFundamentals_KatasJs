//! Ejercicio 9

//?Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos. Implementa la función denominada sumAll que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. Puedes usar este array para probar tu función:

const numbers = [1, 2, 3, 5, 45, 37, 58];


function sumAll(array) {
    // Creo variable para inicializar la suma y almacenar el número que va sumando en cada vuelta del bucle for.
    let sumArray = array[0];
    // Este bucle For va sumando el número en cada iteración con el anterior.
    for (let i = 1; i < array.length; i++) {  
    sumArray = sumArray + array[i]; 
  }
    // Retornamos variable que queremos cuyo valor retornamos al invocar la función.
    return sumArray;
}

sumAll (numbers)

console.log(sumAll (numbers));


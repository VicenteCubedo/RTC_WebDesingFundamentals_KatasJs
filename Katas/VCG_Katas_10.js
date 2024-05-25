//! Ejercicio 10

//? Calcular un promedio (media) es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average (array) {
  // Creo variable en la que almacenar suma de números del array, empezando por el primero [0]
  let sumArray = array[0];
  // Con bucle sumamos de uno en uno los valores del array, posición por posición va acumulando valor total en variable sumArray.
  for (let i = 1; i < array.length; i++) {
    sumArray = sumArray + array[i];
  }
  //Para la media necesitamos la suma total, dividido entre el número de sumandos, por lo que creamos otra variable que contenga la cantidad de números del array y finalmente hacemos una operación de división para conseguir la media.
  let arrayLength = array.length;
  let arrayAverage = sumArray / arrayLength;

  //retornamos valor a mostrar cuando invoquemos la función
  return arrayAverage;
}

average (numbers)

console.log(average (numbers));
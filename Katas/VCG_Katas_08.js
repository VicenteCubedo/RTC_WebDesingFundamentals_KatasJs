
//? Buscar la palabra más larga. Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero. Puedes usar este array para probar tu función:

//La idea es recorrer el Array con un for e ir comparando la longitud de los strings que se irán almacenando dentro de una variable tras cada vuelta del bucle, solo si el nuevo string que comparamos es mayor que el anterior.

function findLongestWord (array){
  // Creo variable para almacenar el string que queremos comparar, empezaremos por la posición [0] (1er string).
  let primerStringMasLargo = array[0];
  // Con este bucle recorremos a partir del 2º string [1], si cumple la condición del if, se almacena el string más largo en la variable. Al indicar que buscamos un string > que último string, una vez encuentre el primer valor más largo, despreciará los siguientes valores que coincidan en longitud con el valor más largo.
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > primerStringMasLargo.length) {
      primerStringMasLargo = array[i];
    }
  }
  // retornamos el valor de la variable dentro de la función para poder utilizarla fuera de esta.
  return primerStringMasLargo;
  
}

//? Array facilitado en el enunciado
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

// Llamamos a la función ingresando el array como parámetro y lo sacamos por consola. 
console.log(findLongestWord (avengers));
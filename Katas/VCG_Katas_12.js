//! Ejercicio 12

//? Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función: pista (cuando eliminamos algo de un array, su longitud se verá afectada)

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(array) {
    // Creo un array vacío en el que iré añadiendo los strings únicos del array con duplicados.
    let arrayWithNonDuplicates = [];
    // Con el bucle for itero sobre los elementos del array
    for (let i = 0; i < array.length; i++) {
        // Con el método includes en inverso/negativo lo que indico es que si el elemento (array[i) no está en el nuevo array, es decir, el condicional es false, que lo incluya con el push en el nuevo array. Por lo tanto cuando pase por un elemento duplicado, en este caso "string", como no cumple la condición, no lo inluirá con el push en el nuevo array.
       if (!arrayWithNonDuplicates.includes(array[i])) {
         arrayWithNonDuplicates.push(array[i])
       }
    }
    return arrayWithNonDuplicates
  }

  console.log (removeDuplicates(duplicates));



//!Ejercicio 13

//?Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
    
function finderName(array, nameToFind) {

  //Declaro dos variables por defecto para retornar los dos valores de estas en una sola variable al invocar a la función.
  let compareName = false;
  let postionOfName = 'no se ha encontrado';
  //Creo bucle para recorrer el array
  for (let i = 0; i < array.length; i++) {
    //Aquí indico que si al recorrer el bucle encuentra el nombre, que he pasado por parámetro, cambie estado de la variable a true y aigne valor de la posición dentro del array.
    if ( array[i] == nameToFind) {
    compareName = true;
    postionOfName = nameFinder.indexOf(nameToFind);
    }
  }
  //en una misma variable introduzco los dos valores solicitados y lo retorno más a bajo
  let showMessage = `El resultado de la búsqueda de ${nameToFind} es ${compareName} y su posición ${postionOfName} dentro del array.`

  return showMessage;
}
//Como solicita el ejercicio, llamo a la función y le paso array y string a encontrar.
console.log(finderName(nameFinder, 'Natasha'));
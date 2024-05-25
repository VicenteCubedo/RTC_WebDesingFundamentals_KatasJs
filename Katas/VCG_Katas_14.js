//!Ejercicio 14

//?Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:


const counterWords = ['code','repeat','eat','sleep','code','enjoy','sleep','code','enjoy','upgrade','code','upgrade'];

  function repeatCounter(array){
    //Creo un objeto en el que ir añadiendo clave: string y valor: veces que se repite.
    let resultOfCount = {};
    //Creo bucle para recorrer array
    for (let i = 0; i < array.length; i++) {
        let counter = array[i];
        //si el string ya está en el objeto que hemos creado le sumamos 1 al valor existente y si no está, creará la clave con el nombre del string que está recorriendo en ese momento y le asignará valor 1.
        if (resultOfCount[counter]) {
            resultOfCount[counter]++;
        } else {
            resultOfCount[counter] = 1;
        }
    }
    //retornamos la variable con el objeto que dispone de la información que sacaremos por consola.
    return resultOfCount;
  }

  console.log(repeatCounter(counterWords));

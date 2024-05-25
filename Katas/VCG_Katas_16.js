//! Ejercicio 16

//? Probando For...of: Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores. Puedes usar este array:

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

// En el For of solo añadimos el iterador en el que se almacenará el string del array (place) y el array que queremos recorrer (placesToTravel) Sacamos por consola el iterador.
for (const place of placesToTravel) {
    console.log(place);
}
//! Ejercicio 18

//? Probando For: Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:

const placesToTravel = [
    {id: 5, name: 'Japan'},
    {id: 11, name: 'Venecia'},
    {id: 23, name: 'Murcia'},
    {id: 40, name: 'Santander'},
    {id: 44, name: 'Filipinas'},
    {id: 59, name: 'Madagascar'}
]

//Recorremos el array con un for, cada elemento del array es un objeto, por lo que para acceder a propiedades del objeto tendremos que acceder con el ".",  
for (let i = 0; i < placesToTravel.length; i++) {
    const place = placesToTravel[i];
    //Con esta condición le decimos que si la porpiedad id de cada objeto/elemento del array, es 11 o 40, que lo elimine. Utilizamos el método .splice indicando "i" como elemento a eliminar, que será el objeto que itera en ese punto del bucle, y "1" para eliminar solo ese atributo.
    if (place.id == 11 || place.id == 40) {
        placesToTravel.splice(i,1)
    }
}

console.log(placesToTravel);

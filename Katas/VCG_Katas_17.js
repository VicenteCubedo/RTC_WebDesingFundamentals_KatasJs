//! Ejercicio 17

//? Probando For...in: Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

// For in itera sobre los elementos del objeto, para acceder a la clave, utilizaremos el iterador, en este caso key y para el valor nombreObjeto[key].
for (const key in alien) {
    console.log(`${key}: ${alien[key]}`);
}


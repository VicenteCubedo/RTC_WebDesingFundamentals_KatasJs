//! Ejercicio 21

//? Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

// Creo dos variables con array vacío, en una almacenaré los nombres de los mayores de edad y en otro los menores de edad.
let userYounger =[];
let userAdult =[];

//recorro array con forof y accedo a propiedad years con los dos condicionales if. Me ayudo del método push para añadir los nombres de los objetos dentro de sus correspondientes arrays.
for (const user of users) {
    if (user.years < 18) {
        userYounger.push(user.name);
    } else if (user.years >= 18){
        userAdult.push(user.name)
    }
}

//Finalmente saco por consola el texto + las dos variables en las que se encuentran los nombres
console.log(`Los usuarios menores de edad son: ${userYounger} y los mayores de edad son: ${userAdult}.`);

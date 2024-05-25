//! Ejercicio 4

//? array para trabajar del 4.1 a 4.4
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];

//? 4.1 Consigue el valor "HULK" del array de avengers y muestralo por consola.

console.log(avengers[0]);

//? 4.2 Cambia el primer elemento de avengers a "IRONMAN"
avengers.splice (0, 1, "IRONMAN");

//? 4.3 console numero de elementos en el array usando la propiedad correcta de Array.
console.log(avengers.length);

//*_____________________________________________________

//? 4.4 Añade 2 elementos al array: "Morty" y "Summer". 
let rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];

rickAndMortyCharacters.push("Morty", "Summer");

//? Muestra en consola el último personaje del array
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length-1]);

//? 4.5 Elimina el último elemento del array y muestra el primero y el último por consola.
rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.pop();
console.log(`El primero es ${rickAndMortyCharacters[0]} y el último ${rickAndMortyCharacters[rickAndMortyCharacters.length-1]}`);

//? 4.6 Elimina el segundo elemento del array y muestra el array por consola.
rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];

rickAndMortyCharacters.splice(1,1);
console.log(rickAndMortyCharacters);

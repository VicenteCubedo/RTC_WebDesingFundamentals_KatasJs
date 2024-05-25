//!Ejercicio 15

//? Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

//Creo variable en la que almacenar los strings que contengan "Camiseta"
let productWithShirt = []

// Con el bucle recorro las posiciones del array
for (let i = 0; i < products.length; i++) {
    const producto = products[i];
    // con includes comprobamos si cada string del array contiene 'Camiseta' y con push, lo introducimos dentro de la variable que almacenará los strings.
    if (producto.includes('Camiseta')) {
        productWithShirt.push(producto)
    }   
}

console.log(productWithShirt);
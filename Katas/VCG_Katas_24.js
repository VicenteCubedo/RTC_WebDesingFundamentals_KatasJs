//! Ejercicio 24

//? Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.

const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ];

//Creo variable donde almacenaré la suma total
let totalSales = 0;

//Bucle for para iterar sobre cada elemento del array
for (let i = 0; i < products.length; i++) {
    const sell = products[i];
    //En cada iteración sumo el resultado de venta en totalSales accediendo al valor de la clave sellCount.
    totalSales = totalSales + sell.sellCount;
}

console.log(totalSales);
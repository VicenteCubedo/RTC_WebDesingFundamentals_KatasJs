//! Ejercicio 25

//? Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos y mostrar por consola la media de ventas.

const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ];

  //Creamos variable para almacenar la suma de ventas por artículo (objeto)
  let totalSales = 0;
  //Bucle for para iterar sobre cada elemento del array
  for (let i = 0; i < products.length; i++) {
      const sell = products[i];
      //En cada iteración sumo el resultado de venta en totalSales accediendo al valor de la clave sellCount.
      totalSales = totalSales + sell.sellCount;
  }
  // Creamos variable para la media de ventas dividiendo el total de ventas por producto.
  let sellAverage = totalSales / products.length;
  
  console.log(`El total de ventas es de ${totalSales}€ y la media de ventas es de ${sellAverage}`);
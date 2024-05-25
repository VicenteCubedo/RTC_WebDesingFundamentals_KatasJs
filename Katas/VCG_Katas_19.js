//! Ejercicio 19

//? Mixed For e includes: Usa un bucle for para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo. Puedes usar este array:

const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]

    //recorremos array con bucle for
    for (let i = 0; i < toys.length; i++) {
        const toy = toys[i];
       //con método .includes entramos en propiedades name a comprobar si incluyen gato y con splice eliminamos el objeto(elemento de array), pero ojo, al usar .splice, tras eliminar el primer elemento coincidente del includes, las posiciones cambian y se salta el siguiente en la lista, es decir, si el eliminado está en posición [3], correría el siguiente a posición [3], por lo que en el [4] no encontraría nada que eliminar aunque hubiera un elemento coincidente con includes. Para solucionar esto, al final del if, retrocedemos una posición de [i] con i-- para comprobar la posición del array y asegurarnos de que se comprueban todos. Otra opción sería recorrer el array de final a inicio cambiando los parámetros del for, pero por comodidad, he elegido esta solución.
        if (toy.name.includes("gato")){
            console.log(toy);
            toys.splice(i,1);
            i--;
        }
    }

    console.log(toys);
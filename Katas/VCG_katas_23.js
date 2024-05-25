//!Ejercicio 23

//?Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.

const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];

  //creo las variables que almacenarán los tres tipos de películas, serán tres array vacíos.
let smallMovies = [];
let midMovies = [];
let bigMovies = [];

for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];

    //Con los if añado las condiciones para cada película y según la duración, con push introduciremos en cada array, la propiedad name de cada objeto.
    if (movie.durationInMinutes < 100){
        smallMovies.push(movie.name);
    } else if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200){
        midMovies.push(movie.name);
    } else if (movie.durationInMinutes > 200) {
        bigMovies.push(movie.name);
    };
}

if (smallMovies == 0) {
    smallMovies = `No hay películas más pequeñas de 100 minutos`;
}

console.log(smallMovies);
console.log(midMovies);
console.log(bigMovies);
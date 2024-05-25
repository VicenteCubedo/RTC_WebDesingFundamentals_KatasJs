//! Ejercicio 22

//? Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

//Con bucle for itero sobre el array  con los diferentes objetos
for (let i = 0; i < foodSchedule.length; i++) {
    const food = foodSchedule[i];
    //Si la propiedad isVegan del elemento es false, eliminio el objeto con splice y lo añado con push. Con fruits[i], utilizo el bucle para iterar fruits e ir añadiendo las frutas para que no se repitan.
    if (!food.isVegan) {
        foodSchedule.splice(i,1);
        foodSchedule.push({name: fruits[i], isVegan: true});
    }
}
    
console.log(foodSchedule)
//! Ejercicio7

//? Completa la función que tomando dos números como argumento devuelva el más alto.

function sum (numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        console.log(numberOne);
    } else if (numberOne < numberTwo) {
        console.log(numberTwo);
    }else {
        console.log("Los números son iguales");
    }
}

sum (5,1);
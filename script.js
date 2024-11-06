//asignamos 0 a las variables negativos, positivos y multiplosDe15,
// esto es para asegurarnos de que el contador esté vacío al comienzo del programa.
let negativos = 0;
let positivos = 0;
let multiplosDe15 = 0;
let valor;

//Se ejecuta 5 veces, solicitando al usuario que ingrese un valor entero en cada iteración
for (let i = 0; i < 5; i++) {
    valor = parseInt(prompt('Ingresa un valor entero:'));

    // Se usa if para verificar si (valor < 0) el valor es negativo mientras que, (valor > 0), el valor es positivo 
    if (valor < 0) {
        negativos++;
    } else if (valor > 0) { 
        positivos++;
    }
    if (valor % 15 === 0) {
        multiplosDe15++;
    }
}

// uso el console.log para que me muestre la inf en la consola
console.log(`Cantidad de valores negativos ingresados: ${negativos}`);
console.log(`Cantidad de valores positivos ingresados: ${positivos}`);
console.log(`Cantidad de múltiplos de 15: ${multiplosDe15}`);
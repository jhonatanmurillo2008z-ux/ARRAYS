/*Con la lectura del ejercicio 4, calcular el promedio diario redondeado a pesos, mostrar qué días
estuvieron por encima del promedio y cuántos fueron.*/

function calcularPromedio(numeros) {
    let suma = 0;
    for (let n of numeros) suma += n;
    return Math.round(suma / numeros.length);
}

function contarMayoresQue(numeros, limite) {
    let cantidad = 0;
    for (let n of numeros)
        if (n > limite) cantidad++;
    return cantidad;
}

function mostrarDiasSobre(dias, ventas, limite) {
    for (let i = 0; i < ventas.length; i++)
        if (ventas[i] > limite)
            console.log(dias[i] + ": $" + ventas[i]);
}

let dias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];
let ventas = [];

for (let i = 0; i < 7; i++)
    ventas.push(Number(prompt("Venta de " + dias[i] + ":")));

let promedio = calcularPromedio(ventas);

console.log("Promedio diario: $" + promedio);
console.log("Días por encima del promedio:");
mostrarDiasSobre(dias, ventas, promedio);
console.log("Total: " + contarMayoresQue(ventas, promedio) + " días");
function leerVentas(dias) {
    let ventas = [];

    for (let i = 0; i < dias.length; i++) {
        ventas.push(Number(prompt("Venta del " + dias[i] + ":")));
    }

    return ventas;
}

function calcularTotal(numeros) {
    let total = 0;

    for (let i = 0; i < numeros.length; i++) {
        total = total + numeros[i];
    }

    return total;
}

function mostrarReporte(dias, ventas) {
    for (let i = 0; i < dias.length; i++) {
        console.log(dias[i] + ": $" + ventas[i]);
    }

    console.log("Total semana: $" + calcularTotal(ventas));
}

function buscarPosicionMayor(numeros) {
    let posicionMayor = 0;

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numeros[posicionMayor]) {
            posicionMayor = i;
        }
    }

    return posicionMayor;
}

function buscarPosicionMenor(numeros) {
    let posicionMenor = 0;

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < numeros[posicionMenor]) {
            posicionMenor = i;
        }
    }

    return posicionMenor;
}

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

let ventas = leerVentas(dias);

let posicionMayor = buscarPosicionMayor(ventas);
let posicionMenor = buscarPosicionMenor(ventas);

console.log("Mejor día: " + dias[posicionMayor] + " ($" + ventas[posicionMayor] + ")");
console.log("Peor día: " + dias[posicionMenor] + " ($" + ventas[posicionMenor] + ")");

let diferencia = ventas[posicionMayor] - ventas[posicionMenor];

console.log("Diferencia: $" + diferencia);
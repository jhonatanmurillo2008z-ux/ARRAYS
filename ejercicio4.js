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

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

let ventas = leerVentas(dias);

mostrarReporte(dias, ventas);
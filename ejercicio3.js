function leerNumeros(cantidad) {
    let numeros = [];

    for (let i = 0; i < cantidad; i++) {
        numeros.push(Number(prompt("Número " + (i + 1) + ":")));
    }

    return numeros;
}

function obtenerUltimo(numeros) {
    return numeros[numeros.length - 1];
}

function mostrarMedio(numeros) {
    if (numeros.length % 2 == 0) {
        let medio1 = numeros[numeros.length / 2 - 1];
        let medio2 = numeros[numeros.length / 2];

        console.log("Del medio: " + medio1 + " y " + medio2);
    } else {
        let medio = numeros[Math.floor(numeros.length / 2)];

        console.log("Del medio: " + medio);
    }
}

let cantidad = Number(prompt("¿Cuántos números?"));

while (cantidad < 1) {
    console.log("La cantidad debe ser al menos 1");
    cantidad = Number(prompt("¿Cuántos números?"));
}

let numeros = leerNumeros(cantidad);

console.log("Primero: " + numeros[0]);
console.log("Último: " + obtenerUltimo(numeros));

mostrarMedio(numeros);
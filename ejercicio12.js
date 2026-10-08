/*En una fila de turnos, rotar k posiciones a la derecha significa que los últimos k pasan al inicio.
Leer N nombres y el valor de k, y retornar un array nuevo rotado. k puede ser mayor que N:
rotar 7 en una fila de 5 es lo mismo que rotar 2.*/

function rotarDerecha(lista, k) {
    let nuevo = [];
    k = k % lista.length;

    for (let i = 0; i < lista.length; i++)
        nuevo[(i + k) % lista.length] = lista[i];

    return nuevo;
}

let personas = [];
let n = Number(prompt("¿Cuántas personas?"));

for (let i = 0; i < n; i++)
    personas.push(prompt("Persona " + (i + 1) + ":"));

let k = Number(prompt("¿Cuántas posiciones rotar?"));

console.log("Fila original: " + personas.join(", "));
console.log("Fila rotada: " + rotarDerecha(personas, k).join(", "));
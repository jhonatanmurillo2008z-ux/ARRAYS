/*Leer N palabras. Crear una función que retorne un array nuevo con las palabras en orden
inverso, sin modificar el original y sin usar reverse. Mostrar ambos arrays para demostrar que
el original quedó igual.*/  

function invertir(lista) {
    let nuevo = [];

    for (let i = lista.length - 1; i >= 0; i--)
        nuevo.push(lista[i]);

    return nuevo;
}

function unirConComas(lista) {
    return lista.join(", ");
}

let palabras = [];
let n = Number(prompt("¿Cuántas palabras?"));

for (let i = 0; i < n; i++)
    palabras.push(prompt("Palabra " + (i + 1) + ":"));

let invertido = invertir(palabras);

console.log("Original: " + unirConComas(palabras));
console.log("Invertido: " + unirConComas(invertido));
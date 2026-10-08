/*Leer 8 números enteros. Construir dos arrays nuevos, uno con los pares y otro con los impares,
en el orden en que llegaron. Mostrar ambos con su cantidad. Si alguno queda vacío, mostrar
"(ninguno)".*/

function esPar(numero) {
    return numero % 2 === 0;
}

function filtarPares(numeros) {
    let pares = [];
    for (let n of numeros)
        if (esPar(n)) pares.push(n);
    return pares;
}
function filtrarImpares(numeros) {
    let impares = [];
    for (let n of numeros)
        if (!esPar(n)) impares.push(n);
    return impares;
}

let numeros = [];

for (let i = 0; i < 8; i++)
    numeros.push(Number(prompt("Número " + (i + 1) + ":")));

let pares = filtrarPares(numeros);
let impares = filtrarImpares(numeros);

console.log("Pares (" + pares.length + "): " + (pares.join(", ") || "(ninguno)"));
console.log("Impares (" + impares.length + "): " + (impares.join(", ") || "(ninguno)"));
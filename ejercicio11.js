/*Leer 10 números. Construir un array nuevo sin repetidos que conserve el orden en que
apareció cada número por primera vez. Mostrar cuántos repetidos se eliminaron. Prohibido
includes, indexOf y Set.*/

function existeEnLista(lista, valor) {
    for (let n of lista)
        if (n === valor) return true;
    return false;
}

function eliminarRepetidos(numeros) {
    let nuevo = [];

    for (let n of numeros)
        if (!existeEnLista(nuevo, n))
            nuevo.push(n);

    return nuevo;
}

let numeros = [];

for (let i = 0; i < 10; i++)
    numeros.push(Number(prompt("Número " + (i + 1) + ":")));

let sinRepetidos = eliminarRepetidos(numeros);
let repetidos = numeros.length - sinRepetidos.length;

console.log("Sin repetidos: " + sinRepetidos.join(", "));
console.log("Se eliminaron " + repetidos + " repetidos");
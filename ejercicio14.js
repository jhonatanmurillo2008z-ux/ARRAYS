/*Leer los precios de N productos sin IVA. Generar con map un array nuevo con el precio más
IVA del 19%, redondeado a pesos con Math.round. Mostrar ambos arrays y el total con IVA.
Escribe también la versión con for en otra función y comprueba que las dos den el mismo
resultado.*/

function calcularConIva(p) {
    return Math.round(p * 1.19);
}

function aplicarIvaConMap(a) {
    return a.map(calcularConIva);
}

function aplicarIvaConFor(a) {
    let r = [];
    for (let p of a) r.push(calcularConIva(p));
    return r;
}

function calcularTotal(a) {
    let t = 0;
    for (let n of a) t += n;
    return t;
}

let precios = [];
let n = Number(prompt("¿Cuántos productos?"));

for (let i = 0; i < n; i++)
    precios.push(Number(prompt("Precio:")));

let iva = aplicarIvaConMap(precios);

console.log("Sin IVA:", precios.join(", "));
console.log("Con IVA:", iva.join(", "));
console.log("Con for:", aplicarIvaConFor(precios).join(", "));
console.log("Total con IVA: $" + calcularTotal(iva));
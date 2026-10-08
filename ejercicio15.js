/*Leer las distancias en kilómetros de N pedidos del día. El envío es gratis hasta 3 km y la
cobertura máxima es de 10 km. Con filter, obtener los pedidos con envío gratis. Con find, el
primer pedido fuera de cobertura. Mostrar también cuántos pedidos pagan envío (más de 3 km
y hasta 10 km). Si ningún pedido está fuera de cobertura, mostrar "Todos los pedidos están en
cobertura".*/

function obtenerEnvioGratis(a) {
    return a.filter(n => n <= 3);
}

function contarConEnvio(a) {
    return a.filter(n => n > 3 && n <= 10).length;
}

function buscarPrimeroFuera(a) {
    return a.find(n => n > 10);
}

let distancias = [];
let n = Number(prompt("¿Cuántos pedidos?"));

for (let i = 0; i < n; i++)
    distancias.push(Number(prompt("Distancia:")));

let gratis = obtenerEnvioGratis(distancias);
let fuera = buscarPrimeroFuera(distancias);

console.log("Envío gratis (" + gratis.length + "): " + gratis.join(", "));
console.log("Pagan envío: " + contarConEnvio(distancias));

if (fuera === undefined)
    console.log("Todos los pedidos están en cobertura");
else
    console.log("Primer pedido fuera de cobertura: " + fuera + " km");
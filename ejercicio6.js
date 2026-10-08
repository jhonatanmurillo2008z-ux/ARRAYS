/*El programa tiene la lista fija de invitados:
let invitados = ["ana", "carlos", "luisa", "pedro", "sofía"];
El portero escribe nombres y para cada uno el programa dice si puede entrar. Termina cuando
escribe "fin". Al final muestra cuántos entraron y cuántos fueron rechazados. Prohibido
includes e indexOf.*/

let invitados = ["Carlos","Ana", "Luisa", "Pedro", "Sofía"];

function existeEnLista(lista, valor)  {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === valor) {
            return true;
        }
    }
    return false;
}

let entraron = 0;
let rechazados = 0;
let nombre = prompt("Nombre:");

while (nombre !== "fin") {
    if (existeEnLista(invitados, nombre)) {
        console.log(nombre + " puede entrar");
        entraron++;
    } else {
        console.log(nombre + " no está en la lista");
        rechazados++;
    }

    nombre = prompt("Nombre:");
}

console.log("Entraron: " + entraron);
console.log("Rechazados: " + rechazados);
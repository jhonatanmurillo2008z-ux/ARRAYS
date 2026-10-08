/*Reescribe mostrarLista del ejercicio 1 usando forEach en lugar de for. La salida debe ser
idéntica. Al final del archivo, responde en un comentario: ¿se puede detener un forEach a la
mitad, como hiciste en existeEnLista? ¿Qué te dice eso sobre cuándo usarlo y cuándo no?*/

function mostrarLista(productos) {
    productos.forEach((producto, i) => {
        console.log((i + 1) + ". " + producto);
    });
}

let productos = ["Pan", "Leche", "Arroz", "Huevos"];

mostrarLista(productos);

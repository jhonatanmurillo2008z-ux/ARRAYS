/*Una app de domicilios pide a los clientes calificar de 1 a 5 estrellas. Leer 10 calificaciones
validando el rango. Contar cuántas hubo de cada valor usando un array de 5 contadores (no
cinco variables) y mostrar un gráfico con asteriscos. Mostrar también la calificación más
frecuente.*/

function contarPorEstrellas(a) {
    let c = [0,0,0,0,0];
    for (let n of a) c[n-1]++;
    return c;
}

function repetirCaracter(c,n) {
    return c.repeat(n);
}

function buscarPosicionMayor(a) {
    let m = 0;
    for (let i=1;i<a.length;i++)
        if (a[i]>a[m]) m=i;
    return m;
}

let notas = [];

for (let i=0;i<10;i++) {
    let n = Number(prompt("Calificación:"));
    while (n<1 || n>5) n = Number(prompt("Ingrese 1 a 5:"));
    notas.push(n);
}

let c = contarPorEstrellas(notas);

for (let i=0;i<5;i++)
    console.log("Estrellas "+(i+1)+": "+repetirCaracter("*",c[i])+" ("+c[i]+")");

console.log("Más frecuente: "+(buscarPosicionMayor(c)+1)+" estrellas");
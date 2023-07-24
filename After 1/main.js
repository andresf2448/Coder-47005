// let edad = parseInt(prompt("Ingrese su edad"));

// alert(edad + 5)

// let numero = parseInt(prompt("Ingrese un numero para repetir el mensaje"));

// for (let i = 1; i <= numero; i++) {
//   alert("hola");
// }

// let texto = prompt("Ingrese el texto");
// let resultado = texto;
// let nuevoTexto = "";

// while (nuevoTexto != "ESC") {
//   resultado = resultado + " " + nuevoTexto;
//   alert(resultado);
//   nuevoTexto = prompt("Ingrese el nuevo texto");
// }
// let nombre;

// do {
//   nombre = prompt("Nombre");
// } while (nombre != "ESC");

// let nombre = prompt("Nombre");

// while(nombre != "ESC"){
//   nombre = prompt("Nombre");
// }

// 5 => 1 y 5 es primo
// 6 => 1, 2, 3, 6 no es primo
// 7 => 1, 7 es primo

let numero = parseInt(prompt("Ingrese el numero"));
let cantidadDivisores = 0;

for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    alert("divisores " + i);
    cantidadDivisores++;
  }
}

if (cantidadDivisores === 2) {
  alert("El numero es primo");
} else {
  alert("El numero no es primo");
}

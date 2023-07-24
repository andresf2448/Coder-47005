/* 
estructura de una funcion

function nombreFuncion(){
  codigo a ejecutar por la funcion
}

para ejecutar, invocar la funcion hacemos
nombreFuncion();
*/

// function saludar() {
//   console.log("Hola");
// }

// saludar();

// function saludar() {
//   let nombre = prompt("Ingrese el nombre");
//   alert(`su nombre es ${nombre}`);
// }

// saludar();

/* 
estructura de una funcion con parametros

function nombreFuncion(parm1, parm2, ..., parmn){
  codigo a ejecutar por la funcion
}
*/

// function sumar(num1, num2) {
//   console.log(num1 + num2);
// }

// sumar(9, 3);
// sumar(10, 5);

// function saludar(saludo, nombre) {
//   console.log(`${saludo} ${nombre}`);
// }

// saludar("Hola", "Camila");
// saludar("Bienvenido", "Andrés");

// function saludar() {
//   return "hola";
// }

// let resultado = saludar();

// console.log(resultado);

// function saludar() {
//   console.log("hola");
// }

// saludar();

// function saludar() {
//   console.log("Hola");
//   console.log("chao");
//   return;
// }

// saludar();

// function calculadora(num1, num2, operacion) {
//   switch (operacion) {
//     case "+":
//       return num1 + num2;
//       break;

//     case "-":
//       return num1 - num2;
//       break;

//     case "*":
//       return num1 * num2;
//       break;

//     case "/":
//       return num1 / num2;
//       break;

//     default:
//       return "Operacion no encontrada";
//       break;
//   }
// }

// let numeroUno = parseInt(prompt("Ingrese el numero 1"));
// let numeroDos = parseInt(prompt("Ingrese el numero 2"));
// let operacion = prompt("Ingrese la operacion");

// let resultado = calculadora(numeroUno, numeroDos, operacion);
// alert(`El resultado de la operacion es ${resultado}`);

// {
//   var nombre = "andres";
// }

// console.log(nombre);

// var nombre = "andres";
// var nombre = "camila";

// let resultado = 0;

// function sumar(num1, num2) {
//   resultado = num1 + num2;
// }

// sumar(3, 4);
// console.log(resultado);

// function sumar(num1, num2) {
//   let resultado = num1 + num2;
//   return resultado;
// }

// function restar(num1, num2) {
//   let resultado = num1 + num2;
//   return resultado;
// }

// function multiplicar(num1, num2) {
//   let resultado = num1 + num2;
//   return resultado;
// }

// function dividir(num1, num2) {
//   let resultado = num1 + num2;
//   return resultado;
// }

// const sumar = function (a, b) {
//   return a + b;
// };

// console.log(sumar(6, 7));

// const suma = (a, b) => {
//   return a + b;
// };

// console.log(suma(9, 8));

/* 
(a, b) => a + b
() => "Hola"
x => x + 6
(a,b) => {
  alsdkjf
  ;lasdf
  return asdf
}
*/

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = (x) => x * 0.21;

let precioProducto = 1000;
let descuento = 100;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
                // = resta(suma(1000, iva(1000)), 100);
                // = resta(suma(1000, 210), 100);
                // = resta(1210, 100);
                // = 1110

// precioProducto + iva - descuento
// console.log(nuevoPrecio);

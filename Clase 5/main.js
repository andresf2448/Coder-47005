/* 
estructura de un objeto

{clave1: valor1, clave2: valor2, ..., claven: valorn};
*/

// let nombre = "Pepito";
// let edad = 34;
// let direccion = "AV";

// const persona = {
//   nombre: "Pepito",
//   edad: 34,
//   direccion: "AV",
// };

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.direccion);
// console.log(persona.clave);

// let clave = "nombre";
// console.log(persona[clave]);
// console.log(persona["edad"]);
// console.log(persona["direccion"]);

// let clave = prompt("Ingrese el valor que quiere consultar");

// alert(persona.clave);
// alert(persona[clave]);

// alert(
//   `Nombre: ${persona.nombre} edad: ${persona.edad} direccion: ${persona.direccion}`
// );

// const persona = {
//   nombre: "Pepito",
//   edad: 34,
//   direccion: "AV",
// };

// persona["nombre"] = "Andres";
// persona["telefono"] = 1234;

// persona.edad = 50;
// persona.padre = "pepito";
// console.log(persona);

// función constructora
// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// const persona1 = new Persona("andres", 26, "AV");
// const persona2 = new Persona("camila", 18, "AV");

// console.log(persona1.nombre);
// console.log(persona2.nombre);

// {
//   nombre: "asdfasdf",
//   edad: 123,
//   direccion: "asdf",
// }

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.hablar = function () {
//     console.log(`Hola soy ${this.nombre}`);
//   };
// }

// const persona1 = new Persona("andres", 26, "AV");
// persona1.hablar();

// function Persona(info) {
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
// }

// const persona1 = new Persona({
//   direccion: "AV",
//   nombre: "andres",
//   edad: 26,
// });

// for(const propiedad in persona1){
//   console.log(propiedad, persona1[propiedad]);
// }

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.hablar = function () {
//     console.log(`Hola soy ${this.nombre}`);
//   };
// }

// const persona1 = new Persona("andres", 26, "AV");
// persona1.hablar();

// class Persona {
//   constructor(nombre, edad, direccion) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }

//   hablar() {
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("andres", 26, "AV");
// console.log(persona1);
// persona1.hablar();

// class Producto {
//   constructor(nombre, precio, imagen) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//     this.vendido = false;
//   }

//   vender() {
//     this.vendido = true;
//   }
// }

// const producto1 = new Producto(
//   "Monitor gamer curvo Samsung C27R500FHL",
//   867212,
//   "http://1234df"
// );

// const producto2 = new Producto(
//   "MÁS VENDIDO Monitor gamer Samsung S19A330 LCD 19 negro",
//   309900,
//   "http://asdlfhjk"
// );

// console.log(producto1);
// producto1.vender();
// console.log(producto1);
// console.log(producto2);

class Producto {
  constructor(nombre, precio, imagen, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad = cantidad;
  }

  vender() {
    this.cantidad -= 1; // this.cantidad = this.cantidad - 1
  }
}

const producto1 = new Producto(
  "Monitor gamer curvo Samsung C27R500FHL",
  867212,
  "http://1234df",
  5
);

console.log(producto1);
producto1.vender();
console.log(producto1);

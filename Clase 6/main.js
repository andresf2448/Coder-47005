/* 
estructura de un arreglo

[elemento1, lemento2, ..., elementon];
*/

// const vacio = [];
// const numeros = [3, 4, 5, 3];
// const nombres = ["andres", "camila", "juan"];
// const valores = [true, false, false, true];
// const varios = [1, true, false, "pepito"];

// console.log(nombres[2]);
// console.log(nombres[1]);
// console.log(numeros[0] + numeros[2]);

// const nombres = ["andres", "camila", "juan", "pepito", "pepita"];

// for (let index = 0; index < nombres.length; index++) {
//   console.log(nombres[index]);
// }

// const nombres = ["andres", "camila", "juan"];

// nombres.push("pepito"); //agrega un elemento al final del arreglo
// console.log(nombres);

// nombres.unshift("pepita"); //agrega un elemento al inicio del arreglo
// console.log(nombres);

// nombres.pop(); // saca un elemento del final del arreglo
// console.log(nombres);

// nombres.shift(); //saca un elemento del inicio del arreglo
// console.log(nombres);

// const nombres = ["andres", "camila", "juan", "pepito", "pepita"];
// nombres.splice(1, 2); //permite elminar varos elementos del arreglo
// console.log(nombres);

// const nombres = ["andres", "camila", "juan", "pepito", "pepita"];
// console.log(nombres.join("****")); //une en un solo string todos los elementos del arreglo separads por el parametro

// const nombres = ["andres", "camila", "juan", "pepito", "pepita"];
// const mascotas = ["firu", "max"];
// const varios = nombres.concat(mascotas); // une en un solo arreglo los elementos de los dos arreglos
// console.log(varios);

// const nombres = ["andres", "camila", "juan", "pepito", "pepita"];
// const copia = nombres.slice(1, 4); //crea una copia de un fragmento del arreglo
// console.log(copia);

// const nombres = ["andres", "camila", "juan", "pepito", "pepita"];
// console.log(nombres.indexOf("pepito")); //busca la posicion de un elemento dentro del arreglo
// console.log(nombres.indexOf("juan1"));

// const nombres = ["andres", "camila", "juan", "pepito", "pepita"];
// console.log(nombres.includes("camila")); //dice si un elemento está o no dentro del arreglo
// console.log(nombres.includes("camila1"));

// let nombre = prompt("Ingrese el nombre del usuario a verificar");

// if (nombres.includes(nombre)) {
//   alert("El nombre buscado se encuentra en la lista");
// } else {
//   alert("El nombre buscado no se encuentra en la lista");
// }

// const nombres = ["andres", "camila", "juan", "pepito", "pepita"];
// nombres.reverse(); //invierte el orden

// console.log(nombres);

// const nombres = ["andres", "camila", "juan", "pepito", "pepita"];

// const eliminar = (nombre) => {
//   let index = nombres.indexOf(nombre);

//   if (index != -1) {
//     nombres.splice(index, 1);
//     console.log(nombres);
//   }
// };

// eliminar("juan");

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 350 },
//   { id: 4, nombre: "zapato", precio: 1350 },
// ];

// for (const producto of productos) {
//   console.log(producto.nombre);
//   console.log(producto.precio);
// }

// //creamos la clase que crea los objetos
// class Producto {
//   //el constructor recibe nombre y precio
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.vendido = false;
//   }

//   //metodo para vender los productos
//   vender() {
//     this.vendido = true;
//   }
// }

//arreglo que va a contener los productos
// const productos = [];

//agregamos con el push objetos nuevos creados por la clase Producto
// productos.push(new Producto("camisa", 1000));
// productos.push(new Producto("zapato", 1320));
// productos.push(new Producto("gorra", 800));
// productos.push(new Producto("media", 700));

//recorremos cada uno de los elementos del arreglo
// for (const producto of productos) {
//   console.log(producto.nombre);
//   console.log(producto.precio);
// }

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 3, nombre: "gorra", precio: 350 },
  { id: 4, nombre: "zapato", precio: 1350 },
];

let nombre = prompt("Ingrese el nombre del producto a consultar");
let producto;

for (const item of productos) {
  if (item.nombre === nombre) {
    producto = item;
  }
}

if (producto) {
  let mensaje = `
    ID: ${producto.id}
    Nombre: ${producto.nombre}
    $${producto.precio}
  `;

  alert(mensaje);
} else {
  alert("El producto no se ha encontrado en la lista");
}

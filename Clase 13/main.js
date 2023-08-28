//SPREAD OPERATOR (...)
// const nombres = ["juan", "maria", "pedro"];

// console.log(...nombres);
// console.log(nombres.join(" "));

// let numeros = [3, 34, 5, 67, 8];

// console.log(Math.max(...numeros));
// console.log(Math.min(...numeros));

//paso por valor
// let nombre1 = "juan";
// let nombre2 = nombre1;

// nombre2 = "pepito";
// console.log(nombre1);

//paso por referencia
// let persona1 = { nombre: "juan", edad: 50 };
// let persona2 = {...persona1};

// persona2.nombre = "pepito";
// console.log(persona1);

// const usuario1 = {
//   nombre: "Juan",
//   edad: 24,
//   curso: "Javascript",
// };

// const usuario2 = {
//   ...usuario1,
//   curso: "react",
//   direccion: "AV",
// };

// console.log(usuario2);

//Rest parameters
// const sumar = (...numeros) => {
//   console.log(numeros.reduce((acum, item) => acum + item, 0));
// };

// sumar(1, 2, 3, 5, 6, 7);
// sumar(1, 2, 7);

//REPASO
/* 
estructura del if

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}else{
  codigo a ejecutar cuando la condicion es falsa
}

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones anteriores es verdadera
}
*/

/* 
for(desde; hasta; actualizacion){
  codigo a repetir
}

while(condicion){
  codigo a repetir siempre que ls condicion sea verdadera
}
*/

// let entrada = prompt("Ingrese el usuario");

// while (usuario != "pepito") {
//   alert("Usuario incorrecto");
//   entrada = prompt("Ingrese el usuario");
// }

/* 
function nombreFuncion(parm1, ..., parmn){
  codigo a ejecutar por le funcion
}

nombreFuncion(calor1, ..., valorn);

const nombreFuncion = (parm1, ..., parmn) => {
  codigo a ejecutar por la funcion
}

nombreFuncion(calor1, ..., valorn);

const sumar = (num1, num2) => num1 + num2;
*/

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  info() {
    console.log(`Soy ${this.nombre}`);
  }
}

// const producto1 = new Producto("camisa", 1040);
// console.log(producto1);
// console.log(producto1.nombre);
// console.log(producto1.precio);
// producto1.info();

// let nombre = prompt("Ingrese el nombre del nuevo producto");
// let precio = prompt("Ingrese el precio del producto");

// let producto = new Producto(nombre, precio);

// alert(`
//   El producto creado es
//   ${producto.nombre} y su precio es $${producto.precio}
// `);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1000 },
//   { id: 3, nombre: "media", precio: 1000 },
//   { id: 4, nombre: "gorra", precio: 1000 },
// ];

// //funcion a ejecutar cuando damos click en el boton agregar
// const agregar = (id) => {
//   let producto = productos.find((item) => item.id === id);
//   console.log(producto);
// };

// //mostramos los productos en el dom
// productos.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>ID: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//     <button id="boton${item.id}">Agregar</button>
//   `;
//   document.body.append(div);

//   //buscamos el boton por el id personalizado
//   let boton = document.getElementById(`boton${item.id}`);
//   boton.addEventListener("click", () => agregar(item.id));
// });

//arreglo para guardar los productos creados
const productos = [];
//contendor para mostrar los productos creados
let contenedor = document.getElementById("contenedor");

const renderizado = (productos) => {
  //borramos el contenedor para que quede limpio antes de volver a mostrar todos los productos
  contenedor.innerHTML = "";

  productos.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>ID: ${item.id}</h2>
      <p>Nombre: ${item.nombre}</p>
      <b>$${item.precio}</b>
    `;

    contenedor.append(div);
  });
};

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;

  let nombre = inputs[0].value;
  let precio = inputs[1].value;

  //agrego el nuevo producto al arreglo de productos creados

  productos.push({ id: productos.length + 1, nombre, precio });

  //muestra todos los productos creados en el dom
  renderizado(productos);
});

//LOCALSTORAGE
// localStorage.setItem("nombre", "andres"); // me permite ingresar datos al storage
// localStorage.setItem("valor", true);
// localStorage.setItem("numero", "5")

// let nombre = localStorage.getItem("nombre"); // me trae el valor de un elemento del storage dada su clave
// console.log(nombre);

// let valor = localStorage.getItem("valor");
// console.log(valor);

// let numero = localStorage.getItem("numero");
// console.log(numero);

// for (let i = 0; i < localStorage.length; i++) {
//   let clave = localStorage.key(i);

//   console.log("clave => ",clave);
//   console.log("valor obtenido => ", localStorage.getItem(clave));
// }

//ELIMINACIÓN EN EL STORAGE
// localStorage.removeItem("nombre"); //elimina el item con clave nombre
// localStorage.clear() //elimina todo el storage

//SESSIONSTORAGE
// sessionStorage.setItem("nombre", "andres"); // me permite ingresar datos al storage
// sessionStorage.setItem("valor", true);
// sessionStorage.setItem("numero", "5");

// let nombre = sessionStorage.getItem("nombre"); // me trae el valor de un elemento del storage dada su clave
// console.log(nombre);

// let valor = sessionStorage.getItem("valor");
// console.log(valor);

// let numero = sessionStorage.getItem("numero");
// console.log(numero);

// for (let i = 0; i < sessionStorage.length; i++) {
//   let clave = sessionStorage.key(i);

//   console.log("clave => ",clave);
//   console.log("valor obtenido => ", sessionStorage.getItem(clave));
// }

//ELIMINACIÓN EN EL STORAGE
// sessionStorage.removeItem("nombre"); //elimina el item con clave nombre
// sessionStorage.clear() //elimina todo el storage

//JSON
// let objeto = {
//   nombre: "Juan",
//   edad: 45,
// };

// localStorage.setItem("objeto", objeto);

// let arreglo = [1, 2, 3, 54];
// localStorage.setItem("arreglo", arreglo);

// let objeto = {
//   nombre: "Juan",
//   edad: 45,
// };

// localStorage.setItem("objeto", JSON.stringify(objeto));

// let arreglo = [1, 2, 3, 54];
// localStorage.setItem("arreglo", JSON.stringify(arreglo));

// let objeto = localStorage.getItem("objeto");
// console.log(JSON.parse(objeto));

/* 
Resumen

cuando quiero guardar un objeto o un arreglo en el storage
debo hacer el JSON.stringify(objeto) para dar el fomato de json y que el storage lo reconozca

cuando quiero traerme un objeto o un arreglo del storage
debo hacer el JSON.parse(objeto)
*/

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "media", precio: 300 },
//   { id: 4, nombre: "zapato", precio: 1000 },
// ];

// const guardarStorage = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// productos.forEach((item) => {
//   guardarStorage(item.id, JSON.stringify(item));
// });

// localStorage.setItem("carrito", JSON.stringify(productos));

// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario"); //traemos el usuario del storage

//si hay usuario mostramos saludo en caso contrario pedimos el usuario, guardamos en el storage y mostramos saludo
// if (usuarioStorage) {
//   usuario = usuarioStorage;
//   alert(`Bienvenid@ nuevamente ${usuario}`);
// } else {
//   usuario = prompt("Ingrese el usuario");
//   sessionStorage.setItem("usuario", usuario);
//   alert(`Bienvenid@ por primera vez ${usuario}`);
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "media", precio: 300 },
//   { id: 4, nombre: "zapato", precio: 1000 },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

let eliminar = document.getElementById("eliminar");
let carrito = [];
let carritoStorage = localStorage.getItem("carrito"); //traemos el carrito del storage

//si no hay carrrito mostramos mensaje de que está vacio
if (carritoStorage) {
  carrito = JSON.parse(carritoStorage);
} else {
  let div = document.createElement("div");
  div.innerHTML = "Carrito vacio";
  document.body.append(div);
}

//recorremos el carrito para mostrar todos los productos
carrito.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

  document.body.append(div);
});

//cuando damos click en el boton eliminar carrito, se borra el storage, recarga la pagina y muestra el mensaje
eliminar.addEventListener("click", () => {
  localStorage.removeItem("carrito");
  location.reload();
  alert(`carrito eliminado`);
});

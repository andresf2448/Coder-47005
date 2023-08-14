// getElementById
// let div = document.getElementById("aplicacion");
// console.log(div.innerHTML);
// console.log(div.innerText);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

//getElementsByClassName
// let perritos = document.getElementsByClassName("perritos");

// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

//getElementsByTagName
// let divs = document.getElementsByTagName("div");
// console.log(divs[0].innerHTML);
// console.log(divs[1].innerHTML);
// console.log(divs[2].innerHTML);

// let perritos = document.getElementsByClassName("perritos");

// for (const perrito of perritos) {
//   console.log(perrito.innerHTML);
// }

// let saludo = document.getElementById("saludo");
// let seccion = prompt("Ingrese la seccion que desea entrar");

// if (seccion === "carrito") {
//   saludo.innerHTML = "Bienvenido al carrito";
//   saludo.className = "rojo";
// } else if (seccion === "favoritos") {
//   saludo.innerHTML = "Bienvenido a los favoritos";
//   saludo.className = "azul";
// } else {
//   saludo.innerHTML = "Bienvenido a nuestra super página";
//   saludo.className = "verde";
// }

// let container = document.getElementById("container");

//creación de nodos
// let parrafo = document.createElement("p"); //creación de la etiqueta
// parrafo.innerHTML = "<h1>Hola a todos</h1>"; //creación del contenido
// document.body.append(parrafo); //asignamos al body
// container.append(parrafo); //asignamos al contenedor creado en el html

// let saludo = document.getElementById("saludo");
// saludo.remove();

// const nombres = ["pepito", "pepita", "andres", "juan", "sofia"];

// nombres.forEach((usuario) => {
//   let div = document.createElement("div");
//   div.innerHTML = usuario;
//   document.body.append(div);
// });

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 700 },
  { id: 3, nombre: "gorra", precio: 350 },
  { id: 4, nombre: "media", precio: 100 },
];

let precio = parseInt(prompt("Ingrese el precio minimo"));
let filtrados = productos.filter((item) => item.precio > precio);

filtrados.forEach((producto) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${producto.id}</h2>
    <p>Nombre: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
    <hr />
  `;

  document.body.append(div);
});
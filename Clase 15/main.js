//setTimeout(funcion, tiempo);

// setTimeout(() => {
//   console.log("Hola Coder");
// }, 3000);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 3000);

// console.log("Final");

// const boton = document.getElementById("boton");
// const saludo = document.getElementById("saludo");

// boton.addEventListener("click", () => {
//   saludo.classList.add("color");

//   setTimeout(() => {
//     saludo.classList.remove("color");
//   }, 3000);
// });

// for (let letra of "Hola") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 1000);
// }

// for (let letra of "Mundo") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 3000);
// }

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 3000);

// console.log("Final");

// function multiply(x, y) {
//   return x * y;
// }

// function printSquare(x) {
//   let resultado = multiply(x, x);
//   console.log(resultado);
// }

// printSquare(5);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

//setInterval(funcion, tiempo);

// setInterval(() => {
//   console.log("Ejecutando proceso");
// }, 1000);

// let counter = 0;
// const interval = setInterval(() => {
//   counter++;
//   console.log("Counter: ", counter);

//   if (counter >= 5) {
//     clearInterval(interval);
//     console.log("Se removió el intervalo");
//   }
// }, 1000);

/* 
new Promise((resolve, reject) => {
  //cuerpo de la promesa
})
*/

// const futuro = (valor) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       valor
//         ? resolve(["juan", "camilo", "pedro"])
//         : reject("Promesa rechazada");
//     }, 2000);
//   });
// };
// // console.log(futuro(false));

// futuro(true)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Proceso finalizado"));

///////////////////////////////////////////////////////SERVIDOR
const DB = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 750 },
  { id: 3, nombre: "media", precio: 370 },
  { id: 4, nombre: "gorra", precio: 287 },
];

const pedirProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(DB);
      reject("Error, Intente luego");
    }, 3000);
  });
};
//////////////////////////////////////////////////////

pedirProductos()
  .then((response) => {
    response.forEach((producto) => {
      let div = document.createElement("div");
      div.innerHTML = `
      <h2>ID: ${producto.id}</h2>
      <p>Nombre: ${producto.nombre}</p>
      <b>$${producto.precio}</b>
    `;

      document.body.append(div);
    });
  })
  .catch((error) => {
    let div = document.createElement("div");
    div.innerHTML = error;

    document.body.append(div);
  });

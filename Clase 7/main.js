// function mayorQue(n) {
//   return (m) => m > n;
// }

// let mayorQueCinco = mayorQue(5); //(m) => m > 5;
// console.log(mayorQueCinco(6));
// console.log(mayorQueCinco(2));

// let mayorQueDiez = mayorQue(10); //(m) => m > 10;
// console.log(mayorQueDiez(12));
// console.log(mayorQueDiez(5));

// function generarOperacion(operacion) {
//   if (operacion === "sumar") {
//     return (num1, num2) => num1 + num2;
//   }

//   if (operacion === "restar") {
//     return (num1, num2) => num1 - num2;
//   }

//   if (operacion === "multiplicar") {
//     return (num1, num2) => num1 * num2;
//   }

//   if (operacion === "dividir") {
//     return (num1, num2) => num1 / num2;
//   }
// }

// let suma = generarOperacion("sumar"); //(num1, num2) => num1 + num2;
// console.log(suma(5, 6));

// let resta = generarOperacion("restar"); //(num1, num2) => num1 - num2;
// console.log(resta(5, 6));

//funcion de alto orden que recibe un arreglo y una funcion
function iterador(arreglo, funcion) {

  //recorremos el arreglo
  for (const numero of arreglo) {
    //por cada elemento del arreglo le aplicamos la funcion pasada por parametro
    funcion(numero);
  }
}

iterador([4, 5, 6, 87], console.log);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 375 },
//   { id: 4, nombre: "pantalon", precio: 100 },
// ];

//forEach recorre el arreglo
// productos.forEach((item) => {
//   console.log(item.id);
//   console.log(item.nombre);
//   console.log(item.precio);
// });

//find encontrar el primer elemento dentro del arreglo que cumple la condicion
// const encontrado = productos.find(item => item.nombre === "camisa");
// console.log(encontrado);

// let nombre = prompt("Ingrese el nombre del producto que desea verificar");
// let producto = productos.find((item) => item.nombre === nombre);

// if (producto) {
//   alert(`
//     Id: ${producto.id}
//     Nombre: ${producto.nombre}
//     Precio: ${producto.precio}
//   `);
// } else {
//   alert("El producto no se encuentra disponible");
// }

//filter filtra un arreglo con respecto a una condicion
// let precio = parseInt(prompt("Ingrese el precio mínimo del producto"));
// let filtrados = productos.filter((item) => item.precio > precio);

// filtrados.forEach((item) => {
//   alert(`
//     Id: ${item.id}
//     Nombre: ${item.nombre}
//     Precio: ${item.precio}
//   `);
// });

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 375 },
//   { id: 4, nombre: "pantalon", precio: 100 },
// ];

//map transforma la información del arreglo
// let precios = productos.map((item) => item.precio);
// console.log(precios);

// let nombres = productos.map((item) => item.nombre);
// console.log(nombres);

// let productosNavidad = productos.map((item) => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21,
//   };
// });

// console.log(productosNavidad);

//reduce reduce un arreglo a un único valor
// const numeros = [3, 5, 6, 7, 3];
// const total = numeros.reduce((acumulador, item) => acumulador + item, 0);
// console.log(total);

// const carrito = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 375 },
//   { id: 4, nombre: "pantalon", precio: 100 },
// ];

// const total = carrito.reduce((acumulador, item) => acumulador + item.precio, 0);
// console.log(total);

//sort ordenar un arreglo
// const numeros = [40, 1, 5, 200];
// console.log(numeros.sort((a, b) => a - b));
// console.log(numeros.sort((a, b) => b - a));

const items = [
  { name: "Pikachu", price: 21 },
  { name: "Charmander", price: 37 },
  { name: "Pidgey", price: 45 },
  { name: "Squirtle", price: 60 },
];

console.log(
  items.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    }
    // a es igual a b
    return 0;
  })
);

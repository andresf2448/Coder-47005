//OPERADOR ++
// let numero = 1;
// numero = numero + 1;
// numero += 1;
// numero++;

//OPERADOR TERNARIO
/* 
estructura del operador ternario

condicion ? codigo cuando condicion es verdadera : codigo cuando condicion es falsa;
*/

// let edad = 15;

// if (edad >= 18) {
//   console.log("Eres mayor de edad");
// } else {
//   console.log("No eres mayor de edad");
// }

// let edad = 15;

// edad >= 18 ? console.log("Eres mayor de edad") : console.log("no eres mayor de edad");

// const usuario = {
//   nombre: "pepito",
//   edad: 50,
// };
// let permiso;

// if (usuario.edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if (permiso) {
//   console.log("Puede entrar a la fiesta");
// } else {
//   console.log("No puede entrar a la fiesta");
// }

// const usuario = {
//   nombre: "pepito",
//   edad: 12,
// };

// const permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("Puede entrar a la fiesta") : console.log("No puede entrar a la fiesta");

/* 
valor1 && valor2 retorna valor1 si este falso, en caso contrario retorna valor2
valor1 || valor2 retorna valor1 si este es verdadero, en caso contrario retorna valor2
*/

// const carrito = [];

// if (carrito.length === 0) {
//   console.log("El carrito está vacio");
// }

// carrito.length === 0 && console.log("El carrito está vacio");

// const usuario = {
//   nombre: "John",
//   edad: 50,
// };

// const registro = usuario.edad >= 18 && new Date();
// console.log(registro);

// console.log(0 || "Falsy"); // falsy
// console.log(40 || "Falsy"); //40
// console.log(null || "Falsy"); //falsy
// console.log(undefined || "Falsy"); //falsy
// console.log("Hola Mundo" || "Falsy"); //hola mundo
// console.log("" || "Falsy"); //falsy
// console.log(NaN || "Falsy"); //falsy
// console.log(true || "Falsy"); //true
// console.log(false || "Falsy"); //falsy

// const usuario = {
//   nombre: "John",
//   edad: 50,
// };

// const usuario2 = null;

// console.log(usuario || "El usuario no existe");
// console.log(usuario2 || "El usuario no existe");

// let carrito;

// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if (carritoStorage) {
//   carrito = carritoStorage;
// } else {
//   carrito = [];
// }

// en caso de que exista el carritoe n el storage se guarda en la constante, de lo contrario se guarda el arreglo vacio
// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// const usuario = null;

// const usuario = {
//   nombre: "juan",
//   edad: 54,
// };

// console.log(usuario?.nombre || "El usuario no existe");

// const usuario = {
//   nombre: "juan",
//   edad: 54,
//   cursos: {
//     javascript: "aprobado",
//   },
// };

// console.log(usuario?.cursos?.javascript || "la propiedad no existe");
// console.log(usuario?.trabajos?.coderhouse || "la propiedad no existe");

// const usuario = {
//   nombre: "John",
//   edad: 50,
//   direccion: "AV",
// };

// const nombre = usuario.nombre;
// const edad = usuario.edad;
// const direccion = usuario.direccion;

// const { nombre, edad } = usuario;
// console.log(nombre, edad);

// const usuario = {
//   nombre: "John",
//   edad: 50,
//   direccion: "AV",
//   telefonos: {
//     casa: 123,
//     celular: 345,
//     trabajo: 6,
//   },
// };

// const {
//   nombre: nombrePersona,
//   telefonos: { casa },
// } = usuario;

// console.log(nombrePersona, casa);

// const usuario = {
//   nombre: "John",
//   edad: 50,
//   direccion: "AV",
//   telefonos: {
//     telefono1: {
//       casa: 124,
//       trabajo: 234,
//     },
//     telefono2: {
//       casa: 1245,
//       trabajo: 2345,
//     },
//   },
// };

// const {
//   edad,
//   direccion,
//   telefonos: {
//     telefono1: { casa, trabajo: telefonoTrabajo },
//     telefono2: { trabajo },
//   },
// } = usuario;

// console.log(edad, direccion);
// console.log(casa, trabajo);

// const desestructurar = ({ nombre, edad }) => {
//   // const { nombre, edad } = usuario;
//   console.log(nombre, edad);
// };

// desestructurar({ nombre: "juan", edad: 54, direccion: "AV" });

// const nombres = ["andres", "juan", "pedro", "mariana"];
// const [ , , c, d] = nombres;

// console.log(c, d);

const info = ["Rodrigo", "Sarain"];
const [nombre, apellido] = info;

console.log(nombre, apellido);

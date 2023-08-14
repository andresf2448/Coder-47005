// const boton = document.getElementById("boton");

//primera forma para definir un evento
// boton.addEventListener("click", () => {
//   alert("Click");
// });

//segunda forma para definir un evento
// boton.onclick = () => {
//   console.log("click");
// };

// let evento = prompt("Ingrese el evento");

// boton.addEventListener(evento, () => {
//   alert("Click");
// });

// const saludar = (nombre) => {
//   alert(`Hola ${nombre}`);
// };

// boton.addEventListener("click", () => saludar("andres"));

//EVENTOS MAS COMUNES
// boton.addEventListener("mousedown", () => console.log("mousedown"))
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));
// boton.addEventListener("click", () => console.log("click"));
// boton.addEventListener("dblclick", () => console.log("dblclick"));

// boton.addEventListener("mousedown", () => console.log("mousedown"))
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("click", () => console.log("click"));

// const boton = document.getElementById("boton");
// const saludo = document.getElementById("saludo");

// boton.addEventListener("mousedown", () => {
//   saludo.className = "rojo";
// });

// boton.addEventListener("mouseup", () => {
//   saludo.className = "amarillo";
// });

// boton.addEventListener("mouseover", () => {
//   saludo.className = "azul";
// });

// boton.addEventListener("mouseout", () => {
//   saludo.className = "verde";
// });

// const saludo = document.getElementById("saludo");
// const nombre = document.getElementById("nombre");

// nombre.addEventListener("keydown", () => console.log("keydown"));
// nombre.addEventListener("keyup", () => console.log("keyup"));

// nombre.addEventListener("keyup", (e) => {
//   if (e.key === "a") {
//     saludo.className = "rojo";
//   } else if (e.key === "s") {
//     saludo.className = "amarillo";
//   } else if (e.key === "d") {
//     saludo.className = "azul";
//   } else {
//     saludo.className = "verde";
//   }
// });

// nombre.addEventListener("change", () => console.log("change"));

// nombre.addEventListener("input", () => {
//   if (!nombre.value.includes("@")) {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "blanco";
//   }
// });

//nos traemos el formulario
let formulario = document.getElementById("formulario");

//agregamos el evento submit que se reconoce cuando hago click en el boton enviar
formulario.addEventListener("submit", (e) => {
  //código para que el formulario no se recargue
  e.preventDefault();

  //nos traemos los inputs del objeto e, su propiedad target y el children
  let inputs = e.target.children;
  // console.log(inputs[0].value);
  // console.log(inputs[1].value);

  //validamos si el primer input tiene el @ en caso de que no borramos el input
  if (!inputs[0].value.includes("@")) {
    inputs[0].value = "";
  }
});

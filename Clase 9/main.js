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

let saludo = document.getElementById("saludo");
let seccion = prompt("Ingrese la seccion que desea entrar");

if (seccion === "carrito") {
  saludo.innerHTML = "Bienvenido al carrito";
  saludo.className = "rojo";
} else if (seccion === "favoritos") {
  saludo.innerHTML = "Bienvenido a los favoritos";
  saludo.className = "azul";
} else {
  saludo.innerHTML = "Bienvenido a nuestra super página";
  saludo.className = "verde";
}

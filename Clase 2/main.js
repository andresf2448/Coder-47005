/* 
estructura del if

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}
*/

// let edad = 15;

// if(edad < 18){
//   console.log("No puedes entrar a la fiesta ");
// }

// if(false){
//   console.log("entramos");
// }

// console.log("Finalizamos");

/* 
estructura del if else

if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}else{
  codigo a ejecutar en caso de que la condicion no sea verdadera
}
*/

// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad < 18) {
//   alert("No puedes entrar a la fiesta");
// } else {
//   alert("Puedes entrar a la fiesta");
// }

// let respuesta = prompt("terminaste la tarea?");

// if (respuesta === "si") {
//   alert("Puedes salir a jugar");
// } else {
//   alert("No puedes salir a jugar");
// }

/* 
estrucutra del if else if

if(condicion1){
  codigo a ejecutar cuando la condicion1 sea verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 sea verdadera
}else{
  codigio a ejecutar cuando ninguna de las condiciones sean verdaderas
}
*/

// let edad = 20;

// if(edad < 14){
//   console.log("no puedes entrar");
// }else if(edad < 18){
//   console.log("puedes entrar con un adulto");
// }else{
//   console.log("puedes entrar a la fiesta");
// }

/* 
&& es verdadera cuando todos los elementos son verdaderos en caso contrario es falso
|| es verdadera cuando al menos uno de los elementos es verdadero en caso contratrio es falso
*/

// let nombre = prompt("ingrese el nombre");
// let apellido = prompt("ingrese el apellido");

// if (nombre != "" && apellido != "") {
//   alert(`su nombre es: ${nombre} ${apellido}`);
// } else {
//   alert("el nombre y el apellido se requieren");
// }

// let edad = 45;

// console.log("su edad es: " + edad);
// console.log(`su edad es: ${edad}`);

// let nombre = prompt("Ingrese el nombre");

// if (nombre === "ANA" || nombre === "ana") {
//   alert(`Hola ${nombre}`);
// } else {
//   alert(`No eres ana, eres ${nombre}`);
// }

// let nombre = prompt("Ingrese el nombre");

// if (nombre != "" && (nombre === "ANA" || nombre === "ana")) {
//   alert(`Hola ${nombre}`);
// } else {
//   alert(`No eres ana, eres ${nombre}`);
// }

/* 
toUpperCase() pasa a mayúscula
toLowerCase() pasa a minúscula
*/
// SWEETARLERT

// Swal.fire(
//   'Good job!',
//   'You clicked the button!',
//   'success'
// )

// let boton = document.getElementById("boton");

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Error!",
//     text: "Deseas continuar?",
//     icon: "error",
//     confirmButtonText: "Ok!",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Genial!",
//     text: "Producto agregado con exito!",
//     icon: "success",
//     confirmButtonText: "Sí",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     position: "top-end",
//     icon: "success",
//     title: "Your work has been saved",
//     showConfirmButton: false,
//     timer: 1500,
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Sweet!",
//     text: "Modal with a custom image.",
//     imageUrl: "https://unsplash.it/400/200",
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: "Custom image",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Está seguro de eliminar el producto?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Sí, seguro",
//     cancelButtonText: "No, no quiero",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       //codigo a ejecutar o realizar

//       Swal.fire({
//         title: "Borrado!",
//         icon: "success",
//         text: "El archivo ha sido borrado",
//       });
//     }
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Ingrese el producto",
//     input: "text",
//     showCancelButton: true,
//     confirmButtonText: "Buscar",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       //codigo a ejecutar o realizar

//       Swal.fire({
//         title: `${result.value}`,
//       });
//     }
//   });
// });

//TOASTIFY
// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Probando toast!",
//     duration: 3000,
//   }).showToast();
// });

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Probando toast!",
//     duration: 3000,
//     style: {
//       background: "linear-gradient(to left, #00b09b, #96c92d)",
//     },
//   }).showToast();
// });

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Probando toast!",
//     duration: 3000,
//     onClick: () => {
//       Toastify({
//         text: "Clickeaste un Toast!",
//         duration: 1500,
//       }).showToast();
//     },
//   }).showToast();
// });

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Click aquí para ir a Coder!",
//     duration: 3000,
//     destination: "https://www.coderhouse.com",
//   }).showToast();
// });

//LUXON
// const DateTime = luxon.DateTime;
// const dt = DateTime.local(2023, 8, 30);

// console.log(dt.c);
// const now = DateTime.now();
// console.log(now.toString());

// console.log(now.year);
// console.log(now.month);
// console.log(now.day);
// console.log(now.second);
// console.log(now.weekday);
// console.log(now.zoneName);
// console.log(now.daysInMonth);

// console.log(now.toLocaleString());
// console.log(now.toLocaleString(DateTime.DATE_FULL));
// console.log(now.toLocaleString(DateTime.TIME_SIMPLE));
// console.log(now.setLocale("en").toLocaleString(DateTime.DATE_FULL));
// console.log(now.setLocale("es").toLocaleString(DateTime.DATE_FULL));

// const DateTime = luxon.DateTime;
// const now = DateTime.now();

// console.log(now.toLocaleString(DateTime.DATETIME_SHORT));

// const suma = now.plus({hours: 5, minutes: 10})

// console.log(suma.toLocaleString(DateTime.DATETIME_SHORT));

// const resta = now.minus({month: 1, days: 1})

// console.log(resta.toLocaleString(DateTime.DATETIME_SHORT));

// const DateTime = luxon.DateTime;
// const Interval = luxon.Interval;
// const now = DateTime.now();
// const navidad = DateTime.local(2023, 12, 25);

// const i = Interval.fromDateTimes(now, navidad);

// console.log(i.length("days"));
// console.log(i.length("hours"));
// console.log(i.length("minutes"));
const usuarios = [{ nombre: "andres", contrasena: "1234" }];

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  let nombre = inputs[0].value;
  let contrasena = inputs[1].value;

  let usuario = usuarios.find((item) => item.nombre === nombre);

  if (usuario.contrasena === contrasena) {
    let div = document.createElement("div");
    div.innerHTML = "Bienvenido";
    document.body.append(div);
  }else{
    let div = document.createElement("div");
    div.innerHTML = "Usuario o contrasena incorrectas";
    document.body.append(div);
  }

  //traer el localstorage
  //buscar el nombre del usuario en el storage
  //validar que la contrasena sea igual a la de la info recuperada del storage
});

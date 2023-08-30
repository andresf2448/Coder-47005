// SWEETARLERT

// Swal.fire(
//   'Good job!',
//   'You clicked the button!',
//   'success'
// )

let boton = document.getElementById("boton");

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

boton.addEventListener("click", () => {
  Swal.fire({
    title: "Ingrese el producto",
    input: "text",
    showCancelButton: true,
    confirmButtonText: "Buscar",
  }).then((result) => {
    if (result.isConfirmed) {
      //codigo a ejecutar o realizar

      Swal.fire({
        title: `${result.value}`,
      });
    }
  });
});

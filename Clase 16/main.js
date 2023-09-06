/* 
estructura del fetch

fetch(url, config);
*/

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     // console.log(data[0].title);
//     // console.log(data[0].body);
//   });

//traigo el listaddo donde se mostraran las publicaciones
// const listado = document.getElementById("listado");

//peticion al servidor
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//recorro las publicacion
//     data.forEach((publicacion) => {
//creo el item para cada una de las publicaciones
//       let li = document.createElement("li");
//       li.innerHTML = `
//         <h2>${publicacion.title}</h2>
//         <p>${publicacion.body}</p>
//       `;

//       listado.append(li);
//     });
//   });

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Primera publicacion coder",
//     body: "Nuestra primera publicacion dentro de coder",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((item) => {
//       let div = document.createElement("div");
//       div.innerHTML = `
//         <h2>ID: ${item.id}</h2>
//         <p>Nombre: ${item.nombre}</p>
//       `;

//       document.body.append(div);
//     });
//   });

const listado = document.getElementById("listado");

const traerDatos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  data.forEach((publicacion) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <h4>${publicacion.title}</h4>
        <p>${publicacion.body}</p>
    `;
    listado.append(li);
  });
};

traerDatos();

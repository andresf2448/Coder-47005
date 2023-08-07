// class Producto {
//   constructor(precio, nombre) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.vendido = false;
//   }

//   vender() {
//     this.vendido = true;
//   }
// }

// const productos = [];

// const producto1 = new Producto(1000, "pan");
// console.log(producto1);

// productos.push(new Producto(1000, "pan"));
// productos.push(new Producto(1300, "cafe"));

// let nombre = prompt("Ingrese el producto a consultar");

// while (nombre != "salir") {
//   let producto = productos.find((item) => item.nombre === nombre);

//   if (producto) {
//     let mensaje = `
//     Nombre: ${producto.nombre}
//     Precio: $${producto.precio}
//   `;

//     alert(mensaje);
//   } else {
//     alert("El producto no se encuentra disponible");
//   }

//   nombre = prompt("Ingrese el producto a consultar");
// }

class Producto {
  constructor(precio, nombre, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  vender() {
    if (this.cantidad === 0) {
      console.log("Se acabo el producto");
    } else {
      this.cantidad -= 1; // this.cantidad = this.cantidad - 1
    }
  }
}

const producto1 = new Producto(1000, "pan", 5);
console.log(producto1);

producto1.vender();
console.log(producto1);

producto1.vender();
producto1.vender();
producto1.vender();
console.log(producto1);
producto1.vender();
console.log(producto1);

producto1.vender();
producto1.vender();
producto1.vender();


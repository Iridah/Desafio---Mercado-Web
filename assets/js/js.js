function obtenerProducto(nombre) {
    // Implementar la lógica para obtener el producto por nombre
    // Ejemplo:
    const productos = [
      {
        nombre: "Producto 1",
        imagen: "imagen1.jpg",
        descripcion: "Descripción del producto 1",
        precio: 100
      },
      {
        nombre: "Producto 2",
        imagen: "imagen2.jpg",
        descripcion: "Descripción del producto 2",
        precio: 200
      }
    ];
    return productos.find(producto => producto.nombre === nombre);
  }
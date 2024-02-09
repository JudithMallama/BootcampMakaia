alert("Me concete al product listing");

import listaProductos from "../javascript/listProducts.js";

const filtroBotones = document.querySelectorAll('[name="filtro"] button');

const inputFiltroNombre = document.getElementById("filtroNombre");

const priceSelect = document.getElementById("filtroPrecio");



const filtrarProductos = (tipoAccesorio) => {
  const productosFiltrados = listaProductos.filter((item) => {
    if (tipoAccesorio === "todos") {
      return true;
    } else {
      return item.tipoAccesorio === tipoAccesorio;
    }
  });
  console.log("Lista de productos filtrados:", productosFiltrados);
  return productosFiltrados;
};


filtroBotones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const tipoAccesorio = boton.value;
    filtrarProductos(tipoAccesorio);
  });
});

const filtrarPorNombre = () => {
  const textoFiltro = inputFiltroNombre.value.toLowerCase();
  const productosFiltrados = listaProductos.filter((listaProductos) => {
    const nombreProducto = listaProductos.nombre.toLowerCase();
    const codigoProducto = listaProductos.codigo.toLowerCase();
    return (
      nombreProducto.includes(textoFiltro) ||
      codigoProducto.includes(textoFiltro)
    );
  });
  console.log("producto filtrado:", productosFiltrados);
};

inputFiltroNombre.addEventListener("input", filtrarPorNombre);

// Función para ordenar los productos por precio
const ordenarProductosPorPrecio = (event) => {
  const opcionSeleccionada = event.target.value;

  let productosOrdenado = [];

  switch (opcionSeleccionada) {
    case "menor":
        productosOrdenado = listaProductos.slice().sort((a, b) => Number(a.precioUnitario) - Number(b.precioUnitario));
      break;
    case "mayor":
        productosOrdenado = listaProductos.slice().sort((a, b) => Number(b.precioUnitario) - Number(a.precioUnitario));
      break;
    case "todos":
      productosOrdenado = listaProductos;
      break;
    default:
      console.log("Soy tu joyeria de confiaza");
      break;
  }

  console.log("Lista de prodcutos ordenados",productosOrdenado);
  return productosOrdenado
  //Ejecutarse la función de pintan las cards
}

priceSelect.addEventListener("change", ordenarProductosPorPrecio);


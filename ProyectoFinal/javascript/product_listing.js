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
  insertarProductosA(contenedorProductos, productosFiltrados);
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
  insertarProductosA(contenedorProductos, productosFiltrados);
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
      insertarProductosA(contenedorProductos, productosOrdenado);
      break;
    case "mayor":
      productosOrdenado = listaProductos.slice().sort((a, b) => Number(b.precioUnitario) - Number(a.precioUnitario));
      insertarProductosA(contenedorProductos, productosOrdenado);
      break;
    case "todos":
      productosOrdenado = listaProductos;
      insertarProductosA(contenedorProductos, productosOrdenado);
      break;
    default:
      console.log("Soy tu joyeria de confiaza");
      break;
  }

  console.log("Lista de prodcutos ordenados", productosOrdenado);
  return productosOrdenado
  //Ejecutarse la función de pintan las cards
}

priceSelect.addEventListener("change", ordenarProductosPorPrecio);

//Imprimir los primeros 8 productos
const contenedorProductos = document.getElementById("productosFiltrados")
console.log(contenedorProductos)
const contenedorProductosB = document.getElementById("productosFiltradosB")
console.log(contenedorProductosB);


const insertarProductosA = (contenedor, listaProductos) => {
  contenedor.innerHTML = "";
  listaProductos.forEach(producto => {
    console.log("pr", producto.id);
    contenedor.innerHTML += `
    <article name=${producto.id} id="productosFiltrados" class="third-part-imgA"}>
        <div data-click=productCard>
            <a href="">
                <img src= ${producto.imagenes[0]} alt=${producto.nombre}}>     
            </a>
            <p class="title">${producto.nombre}</p>
            <p  class="text">$${producto.precioUnitario}</p>
        </div>
        `;

  });
}



const goToDetails = () => {
  const cards = document.querySelectorAll("third-part-imgA");
  console.log("Es este", cards)

  cards.forEach((card) => {
    //event.preventDefault();
    card.addEventListener("click", () => {
      console.log("card", card.getAttribute("name"));
    })
  })
}
//event.preventDefault();


// location.href = "/ProyectoFinal/index/product_details.html";


goToDetails()
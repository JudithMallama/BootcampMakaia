import listaProductos from "../javascript/listProducts.js";

const filtroBotones = document.querySelectorAll('[name="filtro"] button');

const inputFiltroNombre = document.getElementById("filtroNombre");

const priceSelect = document.getElementById("filtroPrecio");
//Imprimir los primeros 8 productos
const contenedorProductos = document.getElementById("productosFiltrados")
//console.log(contenedorProductos)
const contenedorProductosB = document.getElementById("productosFiltradosB")
//console.log(contenedorProductosB);

const goToDetails = () => {
  const cards = document.querySelectorAll(".third-part-imgA")
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const idProduct = card.getAttribute("name")
      // console.log("id del pro", idProduct);
      if (idProduct != null) {
        console.log("id del pro", idProduct);
        localStorage.setItem("idProduct", JSON.stringify(idProduct))
        location.href = "/ProyectoFinal/index/product_details.html";
      }

    })
  })
}

////
const pintarProducts = (contenedor, listaProductos) => {
  contenedor.innerHTML = "";
  listaProductos.forEach(producto => {
    console.log("id", producto.id);
    if (producto.id>=9 && producto.id<=16) {
      contenedor.innerHTML += `
    <article id="productosFiltrados" class="third-part-imgA" name="${producto.id}">
        <div >
            <figure>
                <img src= ${producto.imagenes[0]} alt=${producto.nombre}}>     
            </figure>
            <p class="title">${producto.nombre}</p>
            <p class="text">$${producto.precioUnitario}</p>
        </div>
        `;
    }
  });
  goToDetails();
}

pintarProducts(contenedorProductos,listaProductos)

const insertarProductosA = (contenedor, listaProductos) => {
  contenedor.innerHTML = "";
  listaProductos.forEach(producto => {
    console.log("id", producto.id);
    contenedor.innerHTML += `
    <article id="productosFiltrados" class="third-part-imgA" name="${producto.id}">
        <div >
            <figure>
                <img src= ${producto.imagenes[0]} alt=${producto.nombre}}>     
            </figure>
            <p class="title">${producto.nombre}</p>
            <p class="text">$${producto.precioUnitario}</p>
        </div>
        `;

  });
  goToDetails();
}


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






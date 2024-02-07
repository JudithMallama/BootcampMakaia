alert("Me concete al product listing");

import listaProductos from '../javascript/listProducts.js';

//Funcion filtrar producto por tipo
const filtroBotones = document.querySelectorAll('[name="filtro"] button');

// Obtener referencia al campo de entrada de búsqueda por nombre
const inputFiltroNombre = document.getElementById('filtroNombre');

const filtrarProductos = (tipoAccesorio) => {
    const productosFiltrados = listaProductos.filter(item => {
        if (tipoAccesorio === 'todos') {
            return true;
        } else {
            return item.tipoAccesorio === tipoAccesorio;
        }
    });
    console.log("Lista de productos filtrados:", productosFiltrados);
};

// Agregar un evento de clic a cada botón de filtro
filtroBotones.forEach(boton => {
    boton.addEventListener('click', () => {
        const tipoAccesorio = boton.value;
        filtrarProductos(tipoAccesorio);
    });
});

const filtrarPorNombre = () => {

    const textoFiltro = inputFiltroNombre.value.toLowerCase();

    // Filtrar la lista de productos por el texto ingresado
    const productosFiltrados = listaProductos.filter(listaProductos => {
        // Convertir el nombre del producto a minúsculas para hacer la comparación
        const nombreProducto = listaProductos.nombre.toLowerCase();
        const codigoProducto = listaProductos.codigo.toLowerCase();
        // Verificar si el nombre del producto incluye el texto de filtro
        return nombreProducto.includes(textoFiltro) || codigoProducto.includes(textoFiltro);
    });
    console.log("producto filtrado:", productosFiltrados);
};

// Agregar un evento de cambio al campo de entrada para detectar cambios en el texto ingresado
inputFiltroNombre.addEventListener('input', filtrarPorNombre);








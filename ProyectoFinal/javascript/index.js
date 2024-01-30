alert("Conexion al index")

//Funcion por lista de porductos
function filtrarPorTipo(listaProductos, tipoAccesorio) {
    return listaProductos.filter(producto => producto.tipoAccesorio === tipoAccesorio);
}

//Funcion buscar por nombre
function buscarPorNombre(listaProductos, terminoBusqueda) {
    return listaProductos.filter(producto => producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()));
}

  //Funcion orden por precio
function ordenarPorPrecio(listaProductos, ascendente = true) {
    const copiaLista = [...listaProductos]; // Copia para no modificar la lista original
    
    copiaLista.sort((productoA, productoB) => {
      const precioA = productoA.precioUnitario;
      const precioB = productoB.precioUnitario;
      
      if (ascendente) {
        return precioA - precioB; // Orden ascendente
      } else {
        return precioB - precioA; // Orden descendente
      }
    });
  
    return copiaLista;
}
  

const listaProductos = [
    {
        id: 1,
        nombre: "Radiance Necklace",
        codigo: "59321",
        precioUnitario: "168.76",
        tipoAccesorio: "Collar",
        imagenes: ["../ProyectoFinal/img/hp_c2_img1.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold:{
                oneSize: 37,
                extraSmall:	84,
                small:	12,
                medium:	56,
            },
            RoseGold: {
                extraLarge :10,
                petite: 15,
                regular: 67,
                short: 20,
                long: 71,

            },
            onyxBlack: {
                extraLarge :10,
                petite: 15,
            }
        },
    },
    //otro
    {
        id: 2,
        nombre: "Exquisite Earrings",
        codigo: "92701",
        precioUnitario: "327.71",
        tipoAccesorio: "Pendientes",
        imagenes: ["../ProyectoFinal/img/hp_c2_img2.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold:{
                pearlWhite: 37,
                extraSmall:	84,
                small:	12,
                medium:	56,
            },
            diamondClear: {
                large:	20,
                extraLarge:	6,
                petite:	25,
            },
            silver: {
                extraLarge :10,
                petite: 15,
            }
        },
    },
    //otro
    {
        id: 3,
        nombre: "Glamour Necklace",
        codigo: "87456",
        precioUnitario: "620.73",
        tipoAccesorio: "Collar",
        imagenes: ["../ProyectoFinal/img/hp_c2_img3.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            emeraldGreen:{
                pearlWhite: 37,
                extraSmall:	4,
                small:	12,
                medium:	6,
            },
            diamondClear: {
                large:	20,
                extraLarge:	6,
                petite:	25,
                regular:	2,
            },
            onyxBlack: {
                choker:	55,
                princess: 82	,
                matinee: 22,
                opera: 8,

            }
        },
    },
    //otro
    {
        id: 4,
        nombre: "Delights Earrings",
        codigo: "78201",
        precioUnitario: "327.71",
        tipoAccesorio: "Pendientes",
        imagenes: ["../ProyectoFinal/img/hp_c2_img4.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold:{
                oneSize: 5,
                extraSmall:	25,
                small:3,
                medium:	41,

            },
            silver: {
                large:	20,
                extraLarge:	6,
                petite:	25,
                regular: 2,

            },
            roseGold: {
                choker:	5,
                princess: 8	,
                matinee: 22,
                opera: 8,

            }
        },
    },
    //otro
    {
        id: 5,
        nombre: "Dreamy Necklace",
        codigo: "10234",
        precioUnitario: "327.71",
        tipoAccesorio: "Collar",
        imagenes: ["../ProyectoFinal/img/hp_c2_img4.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold:{
                oneSize: 5,
                extraSmall:	25,
                small:3,
                medium:	41,

            },
            silver: {
                large:	20,
                extraLarge:	6,
                petite:	25,
                regular: 2,

            },
            roseGold: {
                choker:	5,
                princess: 8	,
                matinee: 22,
                opera: 8,

            }
        },
    },
    //otro
]

//Funcion por lista de producto
const productosFiltrados = filtrarPorTipo(listaProductos, "Collar");
console.log("Productos filtrados por tipo de accesorio 'Collar':", productosFiltrados);

//Funcion por nombre
const resultadoBusqueda = buscarPorNombre(listaProductos, "Necklace");
console.log("Productos encontrados por nombre 'Necklace':", resultadoBusqueda);

//Funcion orden de precio
const productosOrdenadosAscendente = ordenarPorPrecio(listaProductos, true);
console.log("Productos ordenados por precio de manera ascendente:", productosOrdenadosAscendente);

// Llamada a la función para ordenar por precio de manera descendente
const productosOrdenadosDescendente = ordenarPorPrecio(listaProductos, false);
console.log("Productos ordenados por precio de manera ascendente:", productosOrdenadosDescendente);

//Funcion de compra
function calcularTotalCompra(listaProductos) {
    // Utilizamos el método reduce para sumar la cantidad por el precio de cada producto
    const total = listaProductos.reduce((acumulador, producto) => {
      return acumulador + (producto.cantidad * producto.precioUnitario);
    }, 0); // El segundo parámetro de reduce es el valor inicial del acumulador, en este caso, 0
  
    return total;
  }
  
  // Datos de prueba
  const productosCompra = [
    { cantidad: 2, precioUnitario: 25.99 },
    { cantidad: 1, precioUnitario: 39.99 },
    { cantidad: 3, precioUnitario: 15.5 }
  ];
  
  // Llamada a la función y mostrar el resultado en la consola del navegador
  const totalPagar = calcularTotalCompra(productosCompra);
  console.log("Total a pagar:", totalPagar);
  

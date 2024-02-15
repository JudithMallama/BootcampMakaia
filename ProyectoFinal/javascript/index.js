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
            gold: {
                oneSize: 37,
                extraSmall: 84,
                small: 12,
                medium: 56,
            },
            RoseGold: {
                extraLarge: 10,
                petite: 15,
                regular: 67,
                short: 20,
                long: 71,

            },
            onyxBlack: {
                extraLarge: 10,
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
            gold: {
                pearlWhite: 37,
                extraSmall: 84,
                small: 12,
                medium: 56,
            },
            diamondClear: {
                large: 20,
                extraLarge: 6,
                petite: 25,
            },
            silver: {
                extraLarge: 10,
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
            emeraldGreen: {
                pearlWhite: 37,
                extraSmall: 4,
                small: 12,
                medium: 6,
            },
            diamondClear: {
                large: 20,
                extraLarge: 6,
                petite: 25,
                regular: 2,
            },
            onyxBlack: {
                choker: 55,
                princess: 82,
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
            gold: {
                oneSize: 5,
                extraSmall: 25,
                small: 3,
                medium: 41,

            },
            silver: {
                large: 20,
                extraLarge: 6,
                petite: 25,
                regular: 2,

            },
            roseGold: {
                choker: 5,
                princess: 8,
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
            gold: {
                oneSize: 5,
                extraSmall: 25,
                small: 3,
                medium: 41,

            },
            silver: {
                large: 20,
                extraLarge: 6,
                petite: 25,
                regular: 2,

            },
            roseGold: {
                choker: 5,
                princess: 8,
                matinee: 22,
                opera: 8,

            }
        },
    },
    //otro
    {
        id: 6,
        nombre: "Blissful Bloom Ring",
        codigo: "69780",
        precioUnitario: "327.71",
        tipoAccesorio: "Anillo",
        imagenes: ["../ProyectoFinal/img/hp_c2_img5.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            emeraldGreen: {
                short: 65,
                long: 18,
                Aadjustable: 25,
                choker: 55,
            },
            sapphireBlue: {
                princess: 82,
                matinee: 82,
                opera: 8,


            },
            pearlWhite: {
                oneSize: 7,
                extraSmall: 5,
                small: 75,


            }
        },
    },
    //otro
    {
        id: 7,
        nombre: "Exquisite Earrings",
        codigo: "34125",
        precioUnitario: "125.28",
        tipoAccesorio: "Pendientes",
        imagenes: ["../ProyectoFinal/img/pl_c2_img1.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            emeraldGreen: {
                medium: 86,
                large: 3,
                extraLarge: 4,
                petite: 4,

            },
            sapphireBlue: {
                regular: 2,
                short: 8,
                long: 92,



            },
            amethystPurple: {
                Aadjustable: 3,
                choker: 4,
                princess: 82,
                matinee: 3,
                opera: 4,



            }
        },
    },
    //otro
    {
        id: 8,
        nombre: "Elegance Earrings",
        codigo: "90876",
        precioUnitario: "620.73",
        tipoAccesorio: "Pendientes",
        imagenes: ["../ProyectoFinal/img/pl_c2_img2.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            emeraldGreen: {
                medium: 86,
                large: 3,
                extraLarge: 4,
                petite: 4,

            },
            sapphireBlue: {
                regular: 2,
                short: 8,
                long: 92,



            },
            amethystPurple: {
                Aadjustable: 3,
                choker: 4,
                princess: 82,
                matinee: 3,
                opera: 4,



            }
        },
    },
    //otro
    {
        id: 9,
        nombre: "Luxury Charms Brooch",
        codigo: "56789",
        precioUnitario: "327.71",
        tipoAccesorio: "Pendientes",
        imagenes: ["../ProyectoFinal/img/pl_c2_img3.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            emeraldGreen: {
                medium: 86,
                large: 3,
                extraLarge: 4,
                petite: 4,

            },
            sapphireBlue: {
                regular: 2,
                short: 8,
                long: 92,



            },
            amethystPurple: {
                Aadjustable: 3,
                choker: 4,
                princess: 82,
                matinee: 3,
                opera: 4,



            }
        },
    },
    //otro
    {
        id: 10,
        nombre: "Blissful Bloom Ring",
        codigo: "43210",
        precioUnitario: "327.71",
        tipoAccesorio: "Anillo",
        imagenes: ["../ProyectoFinal/img/pl_c2_img3.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            emeraldGreen: {
                medium: 86,
                large: 3,
                extraLarge: 4,
                petite: 4,

            },
            sapphireBlue: {
                regular: 2,
                short: 8,
                long: 92,



            },
            amethystPurple: {
                Aadjustable: 3,
                choker: 4,
                princess: 82,
                matinee: 3,
                opera: 4,



            }
        },
    },
    //otro
    {
        id: 11,
        nombre: "Luxury Gems Necklace",
        codigo: "21987",
        precioUnitario: "168.76",
        tipoAccesorio: "Collar",
        imagenes: ["../ProyectoFinal/img/pl_c2_img1.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            emeraldGreen: {
                medium: 86,
                large: 3,
                extraLarge: 4,
                petite: 4,

            },
            sapphireBlue: {
                regular: 2,
                short: 8,
                long: 92,



            },
            amethystPurple: {
                Aadjustable: 3,
                choker: 4,
                princess: 82,
                matinee: 3,
                opera: 4,



            }
        },
    },
    //otro
    {
        id: 12,
        nombre: "Aurora Ring",
        codigo: "65432",
        precioUnitario: "125.28",
        tipoAccesorio: "Anillo",
        imagenes: ["../ProyectoFinal/img/pl_c2_img2.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            emeraldGreen: {
                medium: 86,
                large: 3,
                extraLarge: 4,
                petite: 4,

            },
            sapphireBlue: {
                regular: 2,
                short: 8,
                long: 92,



            },
            amethystPurple: {
                Aadjustable: 3,
                choker: 4,
                princess: 82,
                matinee: 3,
                opera: 4,



            }
        },
    },
    //otro
    {
        id: 13,
        nombre: "Reflections Necklace",
        codigo: "78901",
        precioUnitario: "620.73",
        tipoAccesorio: "brazalete",
        imagenes: ["../ProyectoFinal/img/pl_c2_img3.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            emeraldGreen: {
                medium: 86,
                large: 3,
                extraLarge: 4,
                petite: 4,

            },
            sapphireBlue: {
                regular: 2,
                short: 8,
                long: 92,



            },
            amethystPurple: {
                Aadjustable: 3,
                choker: 4,
                princess: 82,
                matinee: 3,
                opera: 4,



            }
        },
    },
    //otro
    {
        id: 14,
        nombre: "Dreamy Infinity Ring",
        codigo: "34567",
        precioUnitario: "327.71",
        tipoAccesorio: "Anillo",
        imagenes: ["../ProyectoFinal/img/pl_c2_img4.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            emeraldGreen: {
                medium: 86,
                large: 3,
                extraLarge: 4,
                petite: 4,

            },
            sapphireBlue: {
                regular: 2,
                short: 8,
                long: 92,



            },
            amethystPurple: {
                Aadjustable: 3,
                choker: 4,
                princess: 82,
                matinee: 3,
                opera: 4,



            }
        },
    },
    //otro
    {
        id: 15,
        nombre: "Opulent Jewels Ring",
        codigo: "89012",
        precioUnitario: "168.76",
        tipoAccesorio: "Anillo",
        imagenes: ["../ProyectoFinal/img/pl_c2_img5.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            emeraldGreen: {
                medium: 86,
                large: 3,
                extraLarge: 4,
                petite: 4,

            },
            sapphireBlue: {
                regular: 2,
                short: 8,
                long: 92,



            },
            amethystPurple: {
                Aadjustable: 3,
                choker: 4,
                princess: 82,
                matinee: 3,
                opera: 4,



            }
        },
    },
    //otro
    {
        id: 16,
        nombre: "Serene Solitaire Earrings",
        codigo: "45678",
        precioUnitario: "125.28",
        tipoAccesorio: "Anillo",
        imagenes: ["../ProyectoFinal/img/pl_c2_img6.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            emeraldGreen: {
                medium: 86,
                large: 3,
                extraLarge: 4,
                petite: 4,

            },
            sapphireBlue: {
                regular: 2,
                short: 8,
                long: 92,



            },
            amethystPurple: {
                Aadjustable: 3,
                choker: 4,
                princess: 82,
                matinee: 3,
                opera: 4,



            }
        },
    },
    //otro
    {
        id: 17,
        nombre: "Timeless Halo Earrings",
        codigo: "12345",
        precioUnitario: "620.73",
        tipoAccesorio: "Pendientes",
        imagenes: ["../ProyectoFinal/img/pl_c2_img7.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            emeraldGreen: {
                medium: 86,
                large: 3,
                extraLarge: 4,
                petite: 4,

            },
            sapphireBlue: {
                regular: 2,
                short: 8,
                long: 92,



            },
            amethystPurple: {
                Aadjustable: 3,
                choker: 4,
                princess: 82,
                matinee: 3,
                opera: 4,



            }
        },
    },
    //otro
    {
        id: 18,
        nombre: "Timeless Halo Earrings",
        codigo: "67890",
        precioUnitario: "168.76",
        tipoAccesorio: "Pendientes",
        imagenes: ["../ProyectoFinal/img/pl_c2_img8.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            emeraldGreen: {
                medium: 86,
                large: 3,
                extraLarge: 4,
                petite: 4,

            },
            sapphireBlue: {
                regular: 2,
                short: 8,
                long: 92,



            },
            amethystPurple: {
                Aadjustable: 3,
                choker: 4,
                princess: 82,
                matinee: 3,
                opera: 4,



            }
        },
    },
    //otro
    {
        id: 19,
        nombre: "Luxury Charms Ring",
        codigo: "78205",
        precioUnitario: "620.73",
        tipoAccesorio: "Anillo",
        imagenes: ["../ProyectoFinal/img/pl_c3_img1.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            emeraldGreen: {
                medium: 86,
                large: 3,
                extraLarge: 4,
                petite: 4,

            },
            sapphireBlue: {
                regular: 2,
                short: 8,
                long: 92,



            },
            amethystPurple: {
                Aadjustable: 3,
                choker: 4,
                princess: 82,
                matinee: 3,
                opera: 4,



            }
        },
    },
    //otro
    {
        id: 20,
        nombre: "Luxury Charms Ring",
        codigo: "78205",
        precioUnitario: "620.73",
        tipoAccesorio: "Anillo",
        imagenes: ["../ProyectoFinal/img/pl_c3_img1.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            emeraldGreen: {
                medium: 86,
                large: 3,
                extraLarge: 4,
                petite: 4,

            },
            sapphireBlue: {
                regular: 2,
                short: 8,
                long: 92,



            },
            amethystPurple: {
                Aadjustable: 3,
                choker: 4,
                princess: 82,
                matinee: 3,
                opera: 4,



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


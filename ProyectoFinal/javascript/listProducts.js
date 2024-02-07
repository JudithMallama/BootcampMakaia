//alert("Se conecto a la lista de productos");


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

export default listaProductos;
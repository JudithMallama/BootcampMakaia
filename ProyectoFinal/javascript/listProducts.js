//alert("Se conecto a la lista de productos");


const listaProductos = [
    {
        id: 0, nombre: "Radiance Necklace", codigo: "59321", precioUnitario: "168.76", tipoAccesorio: "Collar", imagenes: ["/ProyectoFinal/img/hp_c3_img1.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { gargantilla: 23, princesa: 34, matine: 3, opera: 12, cuerdalarga: 9 },
            silver: { gargantilla: 3, princesa: 37, matine: 7, opera: 2, cuerdalarga: 9 },
            roseGold: { gargantilla: 38, princesa: 41, matine: 12, opera: 34, cuerdalarga: 9 }, emeraldGreen: { gargantilla: 25, princesa: 5, matine: 9, opera: 6, cuerdalarga: 23 }, sapphireBlue: { gargantilla: 3, princesa: 6, matine: 32, opera: 27, cuerdalarga: 4 }, rubyRed: { gargantilla: 2, princesa: 34, matine: 3, opera: 12, cuerdalarga: 9 },
            pearlWhite: { gargantilla: 23, princesa: 34, matine: 3, opera: 12, cuerdalarga: 9 }, amethystPurple: { gargantilla: 23, princesa: 34, matine: 3, opera: 12, cuerdalarga: 9 }, diamondClear: { gargantilla: 23, princesa: 43, matine: 3, opera: 12, cuerdalarga: 9 }, onyxBlack: { gargantilla: 4, princesa: 34, matine: 3, opera: 12, cuerd1alarga: 9 }
        },
    },
    {
        id: 1, nombre: "Exquisite Earrings", codigo: "92701", precioUnitario: "327.71", tipoAccesorio: "Pendientes", imagenes: ["/ProyectoFinal/img/hp_c3_img2.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { AA: 32, A: 4, M: 11, G: 21, XG: 12 },
            silver: { AA: 12, A: 4, M: 13, G: 22, XG: 12 },
            roseGold: { AA: 45, A: 4, M: 32, G: 1, XG: 12 },
            emeraldGreen: { AA: 3, A: 4, M: 13, G: 0, XG: 23 },
            sapphireBlue: { AA: 6, A: 4, M: 36, G: 21, XG: 12 },
            rubyRed: { AA: 12, A: 35, M: 32, G: 2, XG: 14 },
            pearlWhite: { AA: 12, A: 5, M: 32, G: 2, XG: 3 },
            amethystPurple: { AA: 12, A: 1, M: 1, G: 2, XG: 11 },
            diamondClear: { AA: 12, A: 35, M: 32, G: 2, XG: 44 },
            onyxBlack: { AA: 12, A: 34, M: 22, G: 4, XG: 4 }
        },
    },
    {
        id: 2, nombre: "Glamour Necklace", codigo: "87456", precioUnitario: "620.73", tipoAccesorio: "Collar", imagenes: ["/ProyectoFinal/img/hp_c3_img3.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { gargantilla: 3, princesa: 9, matine: 12, opera: 2, cuerdalarga: 9 },
            silver: { gargantilla: 1, princesa: 37, matine: 7, opera: 2, cuerdalarga: 0 },
            roseGold: { gargantilla: 39, princesa: 4, matine: 12, opera: 34, cuerdalarga: 1 }, emeraldGreen: { gargantilla: 23, princesa: 15, matine: 9, opera: 6, cuerdalarga: 23 }, sapphireBlue: { gargantilla: 34, princesa: 16, matine: 32, opera: 27, cuerdalarga: 4 }, rubyRed: { gargantilla: 7, princesa: 4, matine: 3, opera: 12, cuerdalarga: 9 },
            pearlWhite: { gargantilla: 8, princesa: 32, matine: 3, opera: 12, cuerdalarga: 23 }, amethystPurple: { gargantilla: 9, princesa: 14, matine: 3, opera: 12, cuerdalarga: 5 }, diamondClear: { gargantilla: 7, princesa: 23, matine: 3, opera: 12, cuerdalarga: 6 }, onyxBlack: { gargantilla: 4, princesa: 33, matine: 34, opera: 52, cuerd1alarga: 9 }
        },
    },
    {
        id: 3, nombre: "Delights Earrings", codigo: "78201", precioUnitario: "327.71", tipoAccesorio: "Pendientes", imagenes: ["/ProyectoFinal/img/pd_c2_img4.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { AA: 32, A: 4, M: 11, G: 21, XG: 12 },
            silver: { AA: 12, A: 4, M: 13, G: 22, XG: 12 },
            roseGold: { AA: 45, A: 4, M: 32, G: 1, XG: 12 },
            emeraldGreen: { AA: 3, A: 4, M: 13, G: 0, XG: 23 },
            sapphireBlue: { AA: 6, A: 4, M: 36, G: 21, XG: 12 },
            rubyRed: { AA: 12, A: 35, M: 32, G: 2, XG: 14 },
            pearlWhite: { AA: 12, A: 5, M: 32, G: 2, XG: 3 },
            amethystPurple: { AA: 12, A: 1, M: 1, G: 2, XG: 11 },
            diamondClear: { AA: 12, A: 35, M: 32, G: 2, XG: 44 },
            onyxBlack: { AA: 12, A: 34, M: 22, G: 4, XG: 4 }
        },
    },
    {
        id: 4, nombre: "Dreamy Necklace", codigo: "10234", precioUnitario: "327.71", tipoAccesorio: "Collar", imagenes: ["/ProyectoFinal/img/hp_c4_img2.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { gargantilla: 23, princesa: 34, matine: 3, opera: 12, cuerdalarga: 9 },
            silver: { gargantilla: 3, princesa: 37, matine: 7, opera: 2, cuerdalarga: 9 },
            roseGold: { gargantilla: 38, princesa: 41, matine: 12, opera: 34, cuerdalarga: 9 }, emeraldGreen: { gargantilla: 25, princesa: 5, matine: 9, opera: 6, cuerdalarga: 23 }, sapphireBlue: { gargantilla: 3, princesa: 6, matine: 32, opera: 27, cuerdalarga: 4 }, rubyRed: { gargantilla: 2, princesa: 34, matine: 3, opera: 12, cuerdalarga: 9 },
            pearlWhite: { gargantilla: 23, princesa: 34, matine: 3, opera: 12, cuerdalarga: 9 }, amethystPurple: { gargantilla: 23, princesa: 34, matine: 3, opera: 12, cuerdalarga: 9 }, diamondClear: { gargantilla: 23, princesa: 43, matine: 3, opera: 12, cuerdalarga: 9 }, onyxBlack: { gargantilla: 4, princesa: 34, matine: 3, opera: 12, cuerd1alarga: 9 }
        },
    },
    {
        id: 5, nombre: "Shimmering Ring", codigo: "69780", precioUnitario: "168.76", tipoAccesorio: "Anillo", imagenes: ["/ProyectoFinal/img/hp_c5_img1.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { XS: 12, S: 42, M: 31, L: 41, XL: 15 },
            silver: { XS: 16, S: 47, M: 81, L: 49, XL: 1 },
            roseGold: { XS: 12, S: 42, M: 11, L: 31, XL: 18 },
            emeraldGreen: { XS: 32, S: 42, M: 31, L: 41, XL: 15 },
            sapphireBlue: { XS: 15, S: 42, M: 61, L: 4, XL: 17 },
            rubyRed: { XS: 12, S: 43, M: 11, L: 21, XL: 14 },
            pearlWhite: { XS: 12, S: 12, M: 11, L: 41, XL: 13 },
            amethystPurple: { XS: 12, S: 42, M: 11, L: 41, XL: 12 },
            diamondClear: { XS: 12, S: 42, M: 11, L: 41, XL: 11 },
            onyxBlack: { XS: 12, S: 42, M: 11, L: 41, XL: 16 }
        },
    },
    {
        id: 6, nombre: "Exquisite Earrings", codigo: "34125", precioUnitario: "125.28", tipoAccesorio: "Pendientes", imagenes: ["/ProyectoFinal/img/hp_c5_img2.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { AA: 32, A: 4, M: 11, G: 21, XG: 12 },
            silver: { AA: 12, A: 4, M: 13, G: 22, XG: 12 },
            roseGold: { AA: 45, A: 4, M: 32, G: 1, XG: 12 },
            emeraldGreen: { AA: 3, A: 4, M: 13, G: 0, XG: 23 },
            sapphireBlue: { AA: 6, A: 4, M: 36, G: 21, XG: 12 },
            rubyRed: { AA: 12, A: 35, M: 32, G: 2, XG: 14 },
            pearlWhite: { AA: 12, A: 5, M: 32, G: 2, XG: 3 },
            amethystPurple: { AA: 12, A: 1, M: 1, G: 2, XG: 11 },
            diamondClear: { AA: 12, A: 35, M: 32, G: 2, XG: 44 },
            onyxBlack: { AA: 12, A: 34, M: 22, G: 4, XG: 4 }
        },
    },
    {
        id: 7, nombre: "Elegance Earrings", codigo: "90876", precioUnitario: "620.73", tipoAccesorio: "Pendientes", imagenes: ["/ProyectoFinal/img/hp_c5_img3.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { AA: 32, A: 4, M: 11, G: 21, XG: 12 },
            silver: { AA: 12, A: 4, M: 13, G: 22, XG: 12 },
            roseGold: { AA: 45, A: 4, M: 32, G: 1, XG: 12 },
            emeraldGreen: { AA: 3, A: 4, M: 13, G: 0, XG: 23 },
            sapphireBlue: { AA: 6, A: 4, M: 36, G: 21, XG: 12 },
            rubyRed: { AA: 12, A: 35, M: 32, G: 2, XG: 14 },
            pearlWhite: { AA: 12, A: 5, M: 32, G: 2, XG: 3 },
            amethystPurple: { AA: 12, A: 1, M: 1, G: 2, XG: 11 },
            diamondClear: { AA: 12, A: 35, M: 32, G: 2, XG: 44 },
            onyxBlack: { AA: 12, A: 34, M: 22, G: 4, XG: 4 }
        },
    },
    {
        id: 8, nombre: "Luxury Charms Brooch", codigo: "56789", precioUnitario: "327.71", tipoAccesorio: "Brazalete", imagenes: ["/ProyectoFinal/img/ca_c2_img4.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { XS: 12, S: 42, M: 31, L: 41, XL: 15 },
            silver: { XS: 16, S: 47, M: 81, L: 49, XL: 1 },
            roseGold: { XS: 12, S: 42, M: 11, L: 31, XL: 18 },
            emeraldGreen: { XS: 32, S: 4, M: 31, L: 41, XL: 15 },
            sapphireBlue: { XS: 15, S: 2, M: 61, L: 4, XL: 17 },
            rubyRed: { XS: 12, S: 43, M: 12, L: 21, XL: 14 },
            pearlWhite: { XS: 12, S: 12, M: 1, L: 8, XL: 13 },
            amethystPurple: { XS: 12, S: 42, M: 11, L: 41, XL: 12 },
            diamondClear: { XS: 12, S: 42, M: 7, L: 4, XL: 11 },
            onyxBlack: { XS: 12, S: 42, M: 9, L: 41, XL: 16 }
        },
    },
    {
        id: 9, nombre: "Luxury Gems Necklace", codigo: "21987", precioUnitario: "168.76", tipoAccesorio: "Collar", imagenes: ["/ProyectoFinal/img/pl_c2_img1.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { gargantilla: 23, princesa: 34, matine: 3, opera: 12, cuerdalarga: 9 },
            silver: { gargantilla: 3, princesa: 37, matine: 7, opera: 2, cuerdalarga: 9 },
            roseGold: { gargantilla: 38, princesa: 41, matine: 12, opera: 34, cuerdalarga: 9 }, emeraldGreen: { gargantilla: 25, princesa: 5, matine: 9, opera: 6, cuerdalarga: 23 }, sapphireBlue: { gargantilla: 3, princesa: 6, matine: 32, opera: 27, cuerdalarga: 4 }, rubyRed: { gargantilla: 2, princesa: 34, matine: 3, opera: 12, cuerdalarga: 9 },
            pearlWhite: { gargantilla: 23, princesa: 34, matine: 3, opera: 12, cuerdalarga: 9 }, amethystPurple: { gargantilla: 23, princesa: 34, matine: 3, opera: 12, cuerdalarga: 9 }, diamondClear: { gargantilla: 23, princesa: 43, matine: 3, opera: 12, cuerdalarga: 9 }, onyxBlack: { gargantilla: 4, princesa: 34, matine: 3, opera: 12, cuerd1alarga: 9 }
        },
    },
    {
        id: 10, nombre: "Aurora Ring", codigo: "65432", precioUnitario: "125.28", tipoAccesorio: "Anillo", imagenes: ["/ProyectoFinal/img/pl_c2_img2.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { XS: 12, S: 42, M: 31, L: 41, XL: 15 },
            silver: { XS: 16, S: 47, M: 81, L: 49, XL: 1 },
            roseGold: { XS: 12, S: 42, M: 11, L: 31, XL: 18 },
            emeraldGreen: { XS: 32, S: 42, M: 31, L: 41, XL: 15 },
            sapphireBlue: { XS: 15, S: 42, M: 61, L: 4, XL: 17 },
            rubyRed: { XS: 12, S: 43, M: 11, L: 21, XL: 14 },
            pearlWhite: { XS: 12, S: 12, M: 11, L: 41, XL: 13 },
            amethystPurple: { XS: 12, S: 42, M: 11, L: 41, XL: 12 },
            diamondClear: { XS: 12, S: 42, M: 11, L: 41, XL: 11 },
            onyxBlack: { XS: 12, S: 42, M: 11, L: 41, XL: 16 }
        },
    },
    {
        id: 11, nombre: "Reflections Necklace", codigo: "78901", precioUnitario: "620.73", tipoAccesorio: "Brazalete", imagenes: ["/ProyectoFinal/img/pl_c2_img3.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { XS: 12, S: 42, M: 31, L: 41, XL: 15 },
            silver: { XS: 16, S: 47, M: 81, L: 49, XL: 1 },
            roseGold: { XS: 12, S: 42, M: 11, L: 31, XL: 18 },
            emeraldGreen: { XS: 32, S: 4, M: 31, L: 41, XL: 15 },
            sapphireBlue: { XS: 15, S: 2, M: 61, L: 4, XL: 17 },
            rubyRed: { XS: 12, S: 43, M: 12, L: 21, XL: 14 },
            pearlWhite: { XS: 12, S: 12, M: 1, L: 8, XL: 13 },
            amethystPurple: { XS: 12, S: 42, M: 11, L: 41, XL: 12 },
            diamondClear: { XS: 12, S: 42, M: 7, L: 4, XL: 11 },
            onyxBlack: { XS: 12, S: 42, M: 9, L: 41, XL: 16 }
        },
    },
    {
        id: 12, nombre: "Dreamy Infinity Ring", codigo: "34567", precioUnitario: "327.71", tipoAccesorio: "Anillo", imagenes: ["/ProyectoFinal/img/pl_c2_img4.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { XS: 12, S: 42, M: 31, L: 41, XL: 15 },
            silver: { XS: 16, S: 47, M: 81, L: 49, XL: 1 },
            roseGold: { XS: 12, S: 42, M: 11, L: 31, XL: 18 },
            emeraldGreen: { XS: 32, S: 42, M: 31, L: 41, XL: 15 },
            sapphireBlue: { XS: 15, S: 42, M: 61, L: 4, XL: 17 },
            rubyRed: { XS: 12, S: 43, M: 11, L: 21, XL: 14 },
            pearlWhite: { XS: 12, S: 12, M: 11, L: 41, XL: 13 },
            amethystPurple: { XS: 12, S: 42, M: 11, L: 41, XL: 12 },
            diamondClear: { XS: 12, S: 42, M: 11, L: 41, XL: 11 },
            onyxBlack: { XS: 12, S: 42, M: 11, L: 41, XL: 16 }
        },
    },
    {
        id: 13, nombre: "Opulent Jewels Ring", codigo: "89012", precioUnitario: "168.76", tipoAccesorio: "Anillo", imagenes: ["/ProyectoFinal/img/pl_c2_img5.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { XS: 12, S: 42, M: 31, L: 41, XL: 15 },
            silver: { XS: 16, S: 47, M: 81, L: 49, XL: 1 },
            roseGold: { XS: 12, S: 42, M: 11, L: 31, XL: 18 },
            emeraldGreen: { XS: 32, S: 42, M: 31, L: 41, XL: 15 },
            sapphireBlue: { XS: 15, S: 42, M: 61, L: 4, XL: 17 },
            rubyRed: { XS: 12, S: 43, M: 11, L: 21, XL: 14 },
            pearlWhite: { XS: 12, S: 12, M: 11, L: 41, XL: 13 },
            amethystPurple: { XS: 12, S: 42, M: 11, L: 41, XL: 12 },
            diamondClear: { XS: 12, S: 42, M: 11, L: 41, XL: 11 },
            onyxBlack: { XS: 12, S: 42, M: 11, L: 41, XL: 16 }
        },
    },
    {
        id: 14, nombre: "Serene Solitaire Earrings", codigo: "45678", precioUnitario: "125.28", tipoAccesorio: "Pendientes", imagenes: ["/ProyectoFinal/img/pl_c2_img6.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { AA: 32, A: 4, M: 11, G: 21, XG: 12 },
            silver: { AA: 12, A: 4, M: 13, G: 22, XG: 12 },
            roseGold: { AA: 45, A: 4, M: 32, G: 1, XG: 12 },
            emeraldGreen: { AA: 3, A: 4, M: 13, G: 0, XG: 23 },
            sapphireBlue: { AA: 6, A: 4, M: 36, G: 21, XG: 12 },
            rubyRed: { AA: 12, A: 35, M: 32, G: 2, XG: 14 },
            pearlWhite: { AA: 12, A: 5, M: 32, G: 2, XG: 3 },
            amethystPurple: { AA: 12, A: 1, M: 1, G: 2, XG: 11 },
            diamondClear: { AA: 12, A: 35, M: 32, G: 2, XG: 44 },
            onyxBlack: { AA: 12, A: 34, M: 22, G: 4, XG: 4 }
        },
    },
    {
        id: 15, nombre: "Timeless Halo Earrings", codigo: "12345", precioUnitario: "620.73", tipoAccesorio: "Pendientes", imagenes: ["/ProyectoFinal/img/pl_c2_img7.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { AA: 32, A: 4, M: 11, G: 21, XG: 12 },
            silver: { AA: 12, A: 4, M: 13, G: 22, XG: 12 },
            roseGold: { AA: 45, A: 4, M: 32, G: 1, XG: 12 },
            emeraldGreen: { AA: 3, A: 4, M: 13, G: 0, XG: 23 },
            sapphireBlue: { AA: 6, A: 4, M: 36, G: 21, XG: 12 },
            rubyRed: { AA: 12, A: 35, M: 32, G: 2, XG: 14 },
            pearlWhite: { AA: 12, A: 5, M: 32, G: 2, XG: 3 },
            amethystPurple: { AA: 12, A: 1, M: 1, G: 2, XG: 11 },
            diamondClear: { AA: 12, A: 35, M: 32, G: 2, XG: 44 },
            onyxBlack: { AA: 12, A: 34, M: 22, G: 4, XG: 4 }
        },
    },
    {
        id: 16, nombre: "Exquisite Earrings", codigo: "35645", precioUnitario: "327.71", tipoAccesorio: "Pendientes", imagenes: ["/ProyectoFinal/img/pl_c2_img8.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { AA: 32, A: 4, M: 11, G: 21, XG: 12 },
            silver: { AA: 12, A: 4, M: 13, G: 22, XG: 12 },
            roseGold: { AA: 45, A: 4, M: 32, G: 1, XG: 12 },
            emeraldGreen: { AA: 3, A: 4, M: 13, G: 0, XG: 23 },
            sapphireBlue: { AA: 6, A: 4, M: 36, G: 21, XG: 12 },
            rubyRed: { AA: 12, A: 35, M: 32, G: 2, XG: 14 },
            pearlWhite: { AA: 12, A: 5, M: 32, G: 2, XG: 3 },
            amethystPurple: { AA: 12, A: 1, M: 1, G: 2, XG: 11 },
            diamondClear: { AA: 12, A: 35, M: 32, G: 2, XG: 44 },
            onyxBlack: { AA: 12, A: 34, M: 22, G: 4, XG: 4 }
        },
    },
    {
        id: 17, nombre: "Timeless Elegance Ring", codigo: "12932", precioUnitario: "168.76", tipoAccesorio: "Anillo", imagenes: ["/ProyectoFinal/img/pl_c3_img1.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { XS: 12, S: 42, M: 31, L: 41, XL: 15 },
            silver: { XS: 16, S: 47, M: 81, L: 49, XL: 1 },
            roseGold: { XS: 12, S: 42, M: 11, L: 31, XL: 18 },
            emeraldGreen: { XS: 32, S: 42, M: 31, L: 41, XL: 15 },
            sapphireBlue: { XS: 15, S: 42, M: 61, L: 4, XL: 17 },
            rubyRed: { XS: 12, S: 43, M: 11, L: 21, XL: 14 },
            pearlWhite: { XS: 12, S: 12, M: 11, L: 41, XL: 13 },
            amethystPurple: { XS: 12, S: 42, M: 11, L: 41, XL: 12 },
            diamondClear: { XS: 12, S: 42, M: 11, L: 41, XL: 11 },
            onyxBlack: { XS: 12, S: 42, M: 11, L: 41, XL: 16 }
        },
    },
    {
        id: 18, nombre: "Luxury Charms Ring", codigo: "78205", precioUnitario: "620.73", tipoAccesorio: "Anillo", imagenes: ["/ProyectoFinal/img/pl_c3_img2.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { XS: 12, S: 42, M: 31, L: 41, XL: 15 },
            silver: { XS: 16, S: 47, M: 81, L: 49, XL: 1 },
            roseGold: { XS: 12, S: 42, M: 11, L: 31, XL: 18 },
            emeraldGreen: { XS: 32, S: 42, M: 31, L: 41, XL: 15 },
            sapphireBlue: { XS: 15, S: 42, M: 61, L: 4, XL: 17 },
            rubyRed: { XS: 12, S: 43, M: 11, L: 21, XL: 14 },
            pearlWhite: { XS: 12, S: 12, M: 11, L: 41, XL: 13 },
            amethystPurple: { XS: 12, S: 42, M: 11, L: 41, XL: 12 },
            diamondClear: { XS: 12, S: 42, M: 11, L: 41, XL: 11 },
            onyxBlack: { XS: 12, S: 42, M: 11, L: 41, XL: 16 }
        },
    },
    {
        id: 19, nombre: "Blissful Bloom Ring", codigo: "39705", precioUnitario: "620.73", tipoAccesorio: "Anillo", imagenes: ["/ProyectoFinal/img/pl_c3_img3.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { XS: 12, S: 42, M: 31, L: 41, XL: 15 },
            silver: { XS: 16, S: 47, M: 81, L: 49, XL: 1 },
            roseGold: { XS: 12, S: 42, M: 11, L: 31, XL: 18 },
            emeraldGreen: { XS: 32, S: 42, M: 31, L: 41, XL: 15 },
            sapphireBlue: { XS: 15, S: 42, M: 61, L: 4, XL: 17 },
            rubyRed: { XS: 12, S: 43, M: 11, L: 21, XL: 14 },
            pearlWhite: { XS: 12, S: 12, M: 11, L: 41, XL: 13 },
            amethystPurple: { XS: 12, S: 42, M: 11, L: 41, XL: 12 },
            diamondClear: { XS: 12, S: 42, M: 11, L: 41, XL: 11 },
            onyxBlack: { XS: 12, S: 42, M: 11, L: 41, XL: 16 }
        },
    },
    {
        id: 20, nombre: "Sparkling Ring ", codigo: "58016", precioUnitario: "620.73", tipoAccesorio: "Anillo", imagenes: ["/ProyectoFinal/img/pl_c3_img4.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { XS: 12, S: 42, M: 31, L: 41, XL: 15 },
            silver: { XS: 16, S: 47, M: 81, L: 49, XL: 1 },
            roseGold: { XS: 12, S: 42, M: 11, L: 31, XL: 18 },
            emeraldGreen: { XS: 32, S: 42, M: 31, L: 41, XL: 15 },
            sapphireBlue: { XS: 15, S: 42, M: 61, L: 4, XL: 17 },
            rubyRed: { XS: 12, S: 43, M: 11, L: 21, XL: 14 },
            pearlWhite: { XS: 12, S: 12, M: 11, L: 41, XL: 13 },
            amethystPurple: { XS: 12, S: 42, M: 11, L: 41, XL: 12 },
            diamondClear: { XS: 12, S: 42, M: 11, L: 41, XL: 11 },
            onyxBlack: { XS: 12, S: 42, M: 11, L: 41, XL: 16 }
        },
    },
    {
        id: 21, nombre: "Glimmering Ring", codigo: "58016", precioUnitario: "620.73", tipoAccesorio: "Anillo", imagenes: ["/ProyectoFinal/img/pl_c3_img5.png"],
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur provident",
        StockPorColorTalla: {
            gold: { XS: 12, S: 42, M: 31, L: 41, XL: 15 },
            silver: { XS: 16, S: 47, M: 81, L: 49, XL: 1 },
            roseGold: { XS: 12, S: 42, M: 11, L: 31, XL: 18 },
            emeraldGreen: { XS: 32, S: 42, M: 31, L: 41, XL: 15 },
            sapphireBlue: { XS: 15, S: 42, M: 61, L: 4, XL: 17 },
            rubyRed: { XS: 12, S: 43, M: 11, L: 21, XL: 14 },
            pearlWhite: { XS: 12, S: 12, M: 11, L: 41, XL: 13 },
            amethystPurple: { XS: 12, S: 42, M: 11, L: 41, XL: 12 },
            diamondClear: { XS: 12, S: 42, M: 11, L: 41, XL: 11 },
            onyxBlack: { XS: 12, S: 42, M: 11, L: 41, XL: 16 }
        },
    },
]

export default listaProductos;
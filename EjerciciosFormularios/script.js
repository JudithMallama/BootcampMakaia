const products = [
    {
        id:1,
        nombre: "Camiseta Hombre",
        categoria:['Masculino' , 'Camisetas'],
        imagenes:["https://th.bing.com/th/id/OIP.pliP-_RtQrIm5ftUwU21XgHaHr?rs=1&pid=ImgDetMain", "https://pettegole.com/shop/9761-medium_default/camiseta-2523.jpg", "https://estampadoypublicidad.com/wp-content/uploads/2018/10/Camisetas-personalizadas-10.jpg"
        ],
        precioUnitario: 50000,
        stock:[
            {
                talla: "S",
                cantidad: 20,
                color: "white"
            },
            {
                talla: "S",
                cantidad: 5,
                color: "black"
            },
            {
                talla: "M",
                cantidad: 2,
                color: "white"
            },
            {
                talla: "M",
                cantidad: 3,
                color: "blue"
            },
        ]
    },

    {
        id:2,
        nombre: "Vestido Dama",
        categoria:['Masculino' , 'Camisetas'],
        imagenes:["https://i.pinimg.com/originals/0a/3b/7e/0a3b7eb60cad26b3a536d51af138d94f.jpg", "https://bridalroomboutique.com/wp-content/uploads/2021/05/mejores-precios-vestidos-fiesta-eventos-celebraciones-prom-isla-margarita-venezuela-evening-dress-boutique-caracas.jpg", "https://cdn0.bodas.com.mx/cat/vestidos-fiesta/pronovias/atos-style-16--mfvo278249.jpg"
        ],
        precioUnitario: 100000,
        stock:[
            {
                talla: "S",
                cantidad: 2,
                color: "pink"
            },
            {
                talla: "S",
                cantidad: 23,
                color: "red"
            },
            {
                talla: "M",
                cantidad: 5,
                color: "white"
            },
            {
                talla: "M",
                cantidad: 4,
                color: "blue"
            },
        ]
    }
]

const contenedorProductos = document.getElementById("container-products")
console.log(contenedorProductos)

const form = document.getElementById("formProductos")

const insertarProductos = (contenedor, listaProductos) => {
    contenedor.innerHTML = "";
    listaProductos.forEach(producto => {
        contenedor.innerHTML += `
        <article class="cardProducto">
            <figure>
                <img src= ${producto.imagenes[0]} alt=${producto.nombre} >
            </figure>
            <span>$ ${producto.precioUnitario.toLocaleString()}</span>
            <h3><p>${producto.nombre}<p></h3>
        </article>
        `
    });
}
insertarProductos(contenedorProductos, products)

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
   const formData = new FormData(form)
   const dataForm ={}
   
   console.log(formData.entries());
   for(const [key, value] of formData.entries()){
        dataForm[key]=value;
   }
   console.log(dataForm);
})

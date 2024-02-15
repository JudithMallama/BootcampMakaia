import listaProductos from "../javascript/listProducts.js";

const idProduct = JSON.parse(localStorage.getItem("idProduct"))
console.log(idProduct);

const selectedProduct = listaProductos.find(product => product.id == idProduct);
console.log(selectedProduct);

const contenedorProductosA = document.getElementById("contendorDetails")
const contenedorProductosB = document.getElementById("contendorDetailsB")

const printDetailsA = (contenedor, id) => {
    contenedor.innerHTML = "";
   
      console.log("id",);
      console.log("idaras",id);

      contenedor.innerHTML += `  
      <div class="buy-partA" id="contendorDetails">
            <ul class="buy-partA-imgbutton">
                <button><img src= ${id.imagenes[0]} alt=${id.nombre}}></button>
                <button><img src= ${id.imagenes[0]} alt=${id.nombre}}>  </button>
                <button><img src= ${id.imagenes[0]} alt=${id.nombre}}>  </button>
                <button><img src= ${id.imagenes[0]} alt=${id.nombre}}>  </button>
            </ul>
            <span>
                <button><img src= ${id.imagenes[0]} alt=${id.nombre}}></button>
                <img class="icono" src="/ProyectoFinal/img/pd_icono_heart.png" alt="">
            </span>
        </div>
        ` 
}

const printDetailsB = (contenedor, id) => {
    contenedor.innerHTML = "";
   
      console.log("id",);
      console.log("idaras",id);

      contenedor.innerHTML += `  
      <span id="contendorDetailsB">
      <p class="title">${id.nombre}</p>
      <p class="code">Codigo: ${id.codigo}</p>
      <p class="price">$${id.precioUnitario}</p>
      <p class="color">Color - ${id.StockPorColorTalla[5]}</p>
      <ul class="button-color">
          <button class="gray"></button>
          <button class="pink"></button>
      </ul>
      <div>
          <p class="size">Size - 48</p>
          <p class="what">What is my size?</p>
      </div>
      <ul class="buttons-size">
          <button>48</button>
          <button>50</button>
          <button>52</button>
          <button>54</button>
          <button>56</button>
          <button>58</button>
          <button>60</button>
          <button>62</button>
          <button>64</button>
          <button>66</button>
          <button>68</button>
          <button>70</button>
      </ul>
      <p class="quality">Quantity</p>
      <ul class="button-quantity">
          <button>-</button>
          <button>1</button>
          <button>+</button>
      </ul>

  </span>
        ` 
}
 
printDetailsA(contenedorProductosA, selectedProduct)
printDetailsB(contenedorProductosB, selectedProduct)
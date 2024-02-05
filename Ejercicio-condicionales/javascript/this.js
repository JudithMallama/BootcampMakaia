console.log("Este es el this global", this)
const obj = {
    mensaje: "hola objeto",
    mostrarThis: function() {
        console.log("Este es el this dentro de la función", this);
    }
}

document.getElementById("ejemploBoton").addEventListener("click", obj.mostrarThis.bind(obj));

obj.mostrarThis()

function mostrarThis()
{
    console.log("Este el this de la funcion normal", this)  
}

const mostrarThis2 = function(){
    console.log("Este en el this de la funcion anonima", this)
}

const mostrarThis3 = () => {
    console.log("este es el this de la arrow function", this)
}

mostrarThis()
mostrarThis2()
mostrarThis3()
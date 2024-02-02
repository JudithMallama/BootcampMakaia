const saludar = () => {
    alert("Holi")
}

const boton  = document.querySelector("#ejemploBoton")
boton.addEventListener("click", () => {
    alert("Holi x2")
})

const elemento = document.getElementById("section1")
console.log("get element by id", elemento)
console.log("get elements by class", document.getElementsByClassName("item"))
const p = document.getElementsByTagName("p")
console.log("get element by tag", p)

console.log("queryselector", document.querySelector("#section1"))
console.log("querySelectorAll", document.querySelectorAll(".item"))

const holamundo = document.querySelector("#holamundo2")
const node = document.createElement('div')
console.log("Hola mundo", holamundo)
//holamundo.textContent = "Este es el nuevo texto "
holamundo.appendChild(node)
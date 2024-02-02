// Realizar con 4 botones operaciones de suma, resta, multiplicación y
// división (+ - / *). El primer dato es quemado por un <span>,
// el segundo número debe ser ingresado por Promt. Se deben ver en
// pantalla: los dos números y el resultado de la operación indicada
// con los botones

alert("Calculadora")

const numeroIngresadoSting = prompt("Por favor ingrese un número")
const numeroIngresado = Number(numeroIngresadoSting)

//Capturamos el splan donde se debe mostrar el número ingresado en el promt
const spanNumeroIngresado = document.querySelector(".dato-ingresado")

// Capturamos el número que se encuentra en el span
const numeroQuemado = Number(document.querySelector(".dato-quemado").innerText)

const listaBotones = document.querySelectorAll(".btn-container button")

//Declaramos la funcon operaciones
const operacionesAritmeticas = (numeroIngresado, numeroEnSpan, operacion) => {
    switch (operacion) {
        case "suma":
            return numeroIngresado + numeroEnSpan
        case "resta":
            return numeroIngresado - numeroEnSpan
        case "multiplicacion":
            return numeroIngresado * numeroEnSpan
        case "divicion":
            return numeroIngresado / numeroEnSpan
        default:
            return "Operación incorrecta";
    }
}

//Insertar el texto o el número en el span
spanNumeroIngresado.innerHTML = numeroIngresadoSting

//Captura los botones del contenedor

console.log(listaBotones);

listaBotones.forEach(boton=> {
    boton.addEventListener("click", ()=>{
        // console.log("Hice click en el boton", boton.id);
        const resultado = operacionesAritmeticas(numeroIngresado,numeroQuemado,boton.id)
        console.log(resultado);
        const spanResultado = document.querySelector(".resultado-operacion")
        spanResultado.innerText = resultado
    })
})

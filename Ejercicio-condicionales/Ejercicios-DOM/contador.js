// Realizar un contador con un botón de menos, un número y un 
// botón de más. Al presionar el contador se debe incrementar o 
// decrementar el valor
const p = document.querySelector("#numero")
let counter = 0

p.innerHTML = counter

const sumar = () => {
    counter++
    p.innerHTML = counter
}

const restar = () => {
    if(counter > 0){
        counter--
        p.innerHTML = counter
    }
    
}

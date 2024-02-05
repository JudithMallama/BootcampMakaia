const suma1= 5+10;

function suma2 (numero1, numero2) {
    return numero1+numero2
}

function restar(numero1,numero2)
{
    return numero1-numero2
}

console.log("suma1", suma1)
console.log("suma2", suma2(90,50))
console.log("resta",restar(900,50))

//Arrow function
const nombreDeLaFuncion = (param1,param2) => {
    console.log("param1", param1)
    console.log("param2",param2)
}
nombreDeLaFuncion("hola", "mundo")

//Hola mundo
const saludar = () => {
    console.log("hola mundo")
}
saludar()

//funcion de una linea
const despedir = (numero) => console.log("Good bye",numero)

despedir()

//ejemplo de callback

const sumarySaludar =(n1,n2,callback) => {
    const suma =n1+n2
    callback(suma)
}
sumarySaludar(1, 2, despedir)
//otra funcion en el mismo parametro
sumarySaludar(1, 2, (suma)=> console.log("Este es otro saludo", suma))
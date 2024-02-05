// alert("Ejemplo Objetos")

// /*Ejemplos de objetos*/

// const computador = {
//     modelo: "Dell",
//     color: "Negro",
//     tamaño: "130x160",
//     procesador: "Intel core ¡7"
// }

// console.log("Modelo de mi computador", computador.modelo)

// /*Ejemplo array*/

// const myArray =[5,"hola", "bebe", computador.modelo]

// myArray.forEach((cosas,index)=>console.log("cosas" + index,cosas))

/*Rellena un array con los números del 1 al 10. Muéstralo por la consola. Luego, debo eliminar el elemento de la
posición 5 y solicitar un número al usuario y ubicarlo en dicha posición.
*/

let numberArray=[1, 2, 3, 4, 5, 6, 7 , 8, 9, 10];
console.log(numberArray)

/*Eliminar elementos*/
const eliminadoConFilter = numberArray.filter(function(number,index){
    return index !=5;    
})

console.log("Función Eliminador ",eliminadoConFilter)

console.log("Función Array redefinida",numberArray)

let numeros=[1, 2, 3, 4, 5, 6, 7 , 8, 9, 10];

numeros.splice(5, 1)
console.log("funcion splice", numeros)

numberArray = numberArray.filter((number)=>number!=8)

console.log("funcion arrawy", numberArray)

/*psosicion*/
const posición = numeros.findIndex((number)=>number===8);

console.log("funcion  con findIndex ",posición)

const pos= numeros.indexOf(8)

console.log("funcion  con indexOf ",pos)
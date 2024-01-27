alert("hola")
// Mayor de tres:
// Defian una función que determine el número más grande entre tres números

const num1= Number(prompt("Ingrese el primer número"))
const num2= Number(prompt("Ingrese el segundo número"))
const num3= Number(prompt("Ingrese el tercero número"))
let numMayor;

function mayor(n1, n2, n3){
    if(n1>n2 && n1>n3){
        console.log("El primer número: ", n1," es mayor que los números segundo ", n2 , " y tercero " , n3)
        numMayor= n1
    }else if(n2>n1 && n2>n3){
        console.log("El segundo número: ", n2," es mayor que los números primero ", n1 , " y tercero " , n3)
        numMayor= n2
        
    }else if(n3>n1 && n3>n2){
        console.log("El tercer número: ", n3," es mayor que los números primero ", n1 , " y segundo " , n2)
        numMayor= n3
    }
    return numMayor
}

console.log("Por lo tanto el mayor de todos los número es: ", mayor(num1,num2,num3))

/** Longitu de una cadena: */
/**Escribe una funcioón que tome uan cadena como párametro y devuelva la longitud de esa cadena */

const largo = prompt("Ingrese una cadena de texto")

const longitud= (cadena) => {
    return cadena.length
}
console.log("El largo de la cadena es", longitud(largo))

/* Es par:
Crea una función que determina si el numero es par o impar*/
const numero = Number(prompt("Ingrese un numero"))
const parOImpar = number => {
    return number%2===0 ? `${number} es Par` : `${number} es Impar`
}
console.log( parOImpar(numero))
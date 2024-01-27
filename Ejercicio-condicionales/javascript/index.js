// script.js
/*
alert("Hola, este es un mensaje desde un archivo externo");

let edad = 60;

switch (true) {
  case (edad < 12):
    console.log("Menor de 12 años");
    break;

  case (edad >= 12 && edad < 21):
    console.log("Entre 12 y 20 años");
    break;

   case (edad >= 21 && edad < 60):
    console.log("Eres adulto");
    break;

   case (edad >=60):
    console.log("eres viejo");
    break;

  default:
    console.log("entro al default");
}

let nota = Number(prompt("Por favor ingrese la nota"))

if(nota<=6){
    console.log("La nota es insuficiente" + nota)
} else if(nota<=7){
    console.log("La nota es sufuciente")
} else if(nota<=8){
    console.log("La nota es buena")
} else if(nota<=9){
    console.log("La nota es muy buena")
} else{
    console.log("LA nota es excelente")
}*/

//Calular factorial//
let numero;
let factorial=1;
do {
    const numeroString = prompt("Por favor ingrese un número entero: ");
    numero=parseInt(numeroString);
    console.log(typeof numero);

} while (Number .isNaN(numero));

console.log(numero);
for(let index=1; index<=numero;index++){
    factorial=factorial*index;
    console.log(index);
    console.log(factorial);
}
console.log("El factotial de ", numero, "es igual a", factorial);


/*Desarrollar con JavaScript los siguientes algoritmos:
a. De un operario se conoce su sueldo y años de antigüedad. Se pide crear 
un programa que lea los datos de entrada y muestre en consola el valor 
booleano de las siguientes comparaciones:
i. ¿El sueldo es inferior a $2000 US y su antigüedad es igual o 
superior a 10 años?
ii. ¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 
años?
iii. ¿El sueldo es mayor o igual a $2000 US?
*/
const sueldo = prompt("Por favor ingrese su sueldo")
const antiguedad = prompt("Por favor ingrese su antiguedad")
//alert("Su sueldo es " + sueldo)

const sueldoInferior2000 = Number(sueldo)<2000
antiguedad10 = number(antiguedad)==10 || Number(antiguedad)> 10
ejercicioa=sueldoInferior2000 && antiguedad10
console.log("respuesta 1.a:" + ejercicioa)

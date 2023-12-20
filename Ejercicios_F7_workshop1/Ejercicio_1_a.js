/*1. Desarrollar con JavaScript los siguientes algoritmos:
a. De un operario se conoce su sueldo y años de antigüedad. Se pide crear 
un programa que lea los datos de entrada y muestre en consola el valor 
booleano de las siguientes comparaciones:
i. ¿El sueldo es inferior a $2000 US y su antigüedad es igual o 
superior a 10 años?
ii. ¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 
años?
iii. ¿El sueldo es mayor o igual a $2000 US?
*/

// Ejercicio 1.a
const salary=prompt("Ingrese su sueldo en USD:");
console.log("Su sueldo es de $"+salary+ " dolares");

const years=prompt("Ingrese los años de antigüedad:");
console.log("Su años de antigüedad son "+years+" años");

//i. ¿El sueldo es inferior a $2000 US y su antigüedad es igual o superior a 10 años?
const lowerSalary1=Number(salary<2000) && Number(years>=10);
console.log("La proposición i es: "+Boolean(lowerSalary1));
// **********************************************************************************************
//ii. ¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 años?
const lowerSalary2=Number(salary<2000)||Number(years)<10;
console.log("La proposición ii es: "+Boolean(lowerSalary2));
// **********************************************************************************************
//iii. ¿El sueldo es mayor o igual a $2000 US?
const lowerSalary3=Number(salary>=2000);
console.log("La proposición iii es: "+Boolean(lowerSalary3));


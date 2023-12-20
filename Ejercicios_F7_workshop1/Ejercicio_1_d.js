/*Diseñe un algoritmo que lea o reciba el nombre de un empleado, 
su salario básico por horas 
y el número de horas trabajadas en un mes 
y realice lo siguiente:
i. Calcular su salario básico mensual
ii. Determinar si recibe o no subsidio de transportes. Un empleado 
recibe este subsidio cuando el salario mensual básico es menor o 
igual a $700.000 COP
iii. Mostrar en consola el nombre del empleado, su salario básico 
mensual y si recibe o no subsidio de transporte*/

const name=prompt("Ingrese su nombre completo");


const salary=prompt("Ingrese su salario basico por horas: ");
console.log("Su Salario basico por horas es $" + salary);

const hours=prompt("Ingrese sus horas trabajadas en un mes: ");
console.log("Sus horas trabajadas en un mes son: " + hours +" horas");

//i. Calcular su salario básico mensual
 const monthlySalary=Number(salary)*Number(hours);
 console.log("Su salario basico mensual es de: $" + monthlySalary);

 /*ii. Determinar si recibe o no subsidio de transportes. Un empleado 
recibe este subsidio cuando el salario mensual básico es menor o 
igual a $700.000 COP*/

const subsidy=monthlySalary<=700000;
console.log("Su subsidio de transporte es: "+subsidy);

/*iii. Mostrar en consola el nombre del empleado, su salario básico 
mensual y si recibe o no subsidio de transporte*/
console.log("Nombre completo: "+ name + "Su salario basico  mensual es: $"+monthlySalary+"El subsidio de transporte es: "+ subsidy );
alert("Nombre completo: "+ name + " Su salario basico  mensual es: $"+monthlySalary+" El subsidio de transporte es: "+ subsidy );
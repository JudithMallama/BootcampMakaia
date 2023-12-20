/*completar las siguientes tablas de verdad, resolviendo cada 
expresión lógica desde un algoritmo usando JavaScript y modificando los 
diferentes valores que toma las variables de proposición p y q:
*/

const p=true;
const q=true;

//a. p q NOT p NOT p AND q */
console.log("Punto A");
console.log("________________________________________"); 
console.log("|  p   |  q   |  NOTp  |   NOT p AND q |");
console.log("_______________________________________"); 
console.log("| "+p+" | "+q+" |  "+!p+" |      "+ (!p&&q)+"    |");
console.log("_______________________________________"); 
console.log("| "+p+" | "+!q+"|  "+!p+" |      "+ (!p&&!q)+"    |");
console.log("_______________________________________"); 
console.log("| "+!p+"| "+q+" |  "+p+"  |      "+ (p&&q)+"     |");
console.log("_______________________________________"); 
console.log("| "+!p+"| "+!q+"|  "+p+"  |      "+ (p&&!q)+"    |");
console.log("________________________________________"); 

console.log("");
console.log("**************************************************")
console.log("");
console.log("Punto B");

//b.p q NOT p NOT q NOT p AND NOT q 
console.log("________________________________________________"); 
console.log("|  p   |  q   |  NOTp  |  NOTq | NOTp AND NOTq |");
console.log("________________________________________________"); 
console.log("| "+p+" | "+q+" | "+!p+"  | "+!q+" |     "+(!p&&!q)+"     |");
console.log("________________________________________________"); 
console.log("| "+p+" | "+!q+"| "+!p+"  |  "+q+" |     "+(!p&&q)+"     |");
console.log("________________________________________________"); 
console.log("| "+!p+"| "+q+" | "+p+"  |  "+!q+" |     "+(p&&!q)+"     |");
console.log("________________________________________________"); 
console.log("| "+!p+"| "+!q+"| "+p+"  |  "+q+"  |     "+(p&&q)+"      |");
console.log("_________________________________________________"); 
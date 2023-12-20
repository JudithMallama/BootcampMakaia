/*c. Crear una fórmula para saber si un número es o no es un múltiplo de 2.*/

const number= prompt("Ingrese un número");

const multiple= (Number(number)%2)==0;

console.log("El número "+ number+" como multiplo de dos es: "+ multiple  );

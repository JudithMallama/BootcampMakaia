/* El aeropuerto El Dorado se encuentra en remodelación y requiere un 
programa para suministrarlo a su personal de seguridad con el objetivo de 
brindar información a los turistas sobre donde se debe tramitar las salidas 
internacionales para nacionales y extranjeros. Se le solicita diseñar este 
programa para que reciba el primer dígito de un número de pasaporte y 
que muestre el valor booleano que indique si el turista es del país o 
extranjero. Todos los No. de pasaporte que inicien con la letra A son 
nacionales.*/
const passport =prompt("Ingrese el número de su pasaporte");

// Obtenemos el primer dígito del número de pasaporte
const firstDigit = passport.charAt(0);

// Evaluamos si el turista es nacional o extranjero
const national = firstDigit === "A" ||firstDigit === "a" ;

// Imprimimos el resultado
console.log("¿El turista es nacional? "+ national);

/*Hacer un algoritmo con JavaScript que reciba cualquier letra del 
abecedario y muestre en consola el valor booleano que indique si es o no 
una vocal*/

const vocal= prompt("Ingrese una letras");
const comparison = vocal=='a'||vocal=='A'|| vocal =='e' ||vocal=='E'|| vocal=='i' || vocal=='I'|| vocal=='o' || vocal=='O'||vocal=='u'||vocal=='U';
 console.log("La letra es una vocal: "+Boolean(comparison));
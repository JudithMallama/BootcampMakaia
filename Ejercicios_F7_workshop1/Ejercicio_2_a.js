/*Considerando que 𝑎 = 4, 𝑏 = 7, 𝑐 = 2𝑏, 𝑥 = 𝑎 , 𝑦 = 3𝑥, 𝑢 = 6, 𝑤 = 10; crear 
un algoritmo con JavaScript que realice y muestre el resultado en consola de las 
siguientes operaciones algebraica:*/

let a= 4;
let b= 7;
let c= 2*b;
let x=a;
let y=3*x;
let u=6;
let w=10;
let z=2;

//  ***********************************************************************************
// a. a/bc
const puntoA = a/(b*c);
console.log("El punto A: "+puntoA);

//  ***********************************************************************************
// b. a^2 + b^92
const puntoB = (a**2) + (b**92);
console.log("El punto B: "+puntoB);

//  ***********************************************************************************
// c. (x+y)/(u+w/a)
const puntoC = (x+y)/(u+(w/a));
console.log("El punto C: "+puntoC);

//  ***********************************************************************************
// d. (x/y)(z+w);
const puntoD = (x/y)*(z+w);
console.log("Si se define z=2, El punto D: "+puntoD);

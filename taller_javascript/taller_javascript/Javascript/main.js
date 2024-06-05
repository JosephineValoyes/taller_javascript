/*De un operario se conoce su sueldo y años de antigüedad. Se pide crear un 
programa que lea los datos de entrada y muestre en consola el valor booleano 
de las siguientes comparaciones:
i. ¿El sueldo es inferior a $2000 US y su antigüedad es igual o superior a 
10 años?
ii. ¿El sueldo es inferior a $2000 US o su antigüedad es menor a 10 años?
iii. ¿El sueldo es mayor o igual a $2000 US? */

let antiMy = 10;
let antiMn = 9;
let sueldoMy = 2000;
let sueldoMn = 1999;
console.log(sueldoMy > antiMn)
console.log(sueldoMn< antiMn)
console.log(sueldoMy >= antiMy)

/*La tienda “Mis Zapatos” está de aniversario, por esta razón está realizando un 
descuento del 50% para compras mayores o iguales a los $100.000 COP. Se le 
pide realizar un algoritmo que reciba el valor de una compra y muestre en 
consola el valor booleano que indique si la compra recibe o no el descuento.*/
//Declaracion de variable
let descuento = 0.50;
let valor = 100000;
let producto1 = 101000
let producto 
//proceso
producto = (valor * descuento)
console.log(producto == valor, "tiene descuento")
console.log(producto1 != valor, "no tiene descuento") 



/*Considerando que 𝑎 = 4, 𝑏 = 7, 𝑐 = 2𝑏, 𝑥 = 𝑎 , 𝑦 = 3𝑥, 𝑢 = 6, 𝑤 = 10, 𝑧 = 2𝑤; 
crear un algoritmo con JavaScript que realice y muestre el resultado en consola de 
las siguientes operaciones algebraica*/


//1. Declaración de variables

const a =4;
const b = 7;
const c = 2 * b;
const x = a;
const y = 3 * x;
const u = 6;
const w = 10;
const z = 2 * w;

//2. Proceso
resultadoA = (a) / (b*c);
resultadoB = (a**2 + b**92);
resultadoC = (x + y) / (u + w / a);
resultadoD =(x / y) + (z + w);
//3. Mostrar resultado
console.log("A", resultadoA)
console.log("B", resultadoB)
console.log("C", resultadoC)
console.log("D", resultadoD);

//punto 3 item a, Tabla de Verdad 
const pVerdadera1 = true;
const qVerdadera1 = true;
const pFalsa1 = false;
const qFalsa1 = false;

//proceso
total_1 = !pVerdadera1 && qVerdadera1;
total_2 = !pVerdadera1 && qFalsa1;
total_3 = !pFalsa1 && qVerdadera1;
total_4 = !pFalsa1 && qFalsa1;

//punto 3 item b
const pVerdadera = true;
const qVerdadera = true;
const pFalsa = false;
const qFalsa = false;

//----Proceso: Cuando p y q son verdaderas
total1 = !pVerdadera && !qVerdadera;
total2 = !pVerdadera && !qFalsa;
total3 = !pFalsa && !qVerdadera;
total4 = !pFalsa && !qFalsa;

//3. Mostrar resultado
console.log("1. NOTp AND q ", total_1);
console.log("2. NOTp AND q ", total_2);
console.log("3. NOTp AND q ", total_3);
console.log("4. NOTp AND q ", total_4);
console.log("1. NOTp AND NOTq ", total1);
console.log("2. NOTp AND NOTq ", total2);
console.log("3. NOTp AND NOTq ", total3);
console.log("4. NOTp AND NOTq ", total4);
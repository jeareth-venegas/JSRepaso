//Escriba un programa que solicite al usuario un número e imprima la suma de todos los
//números desde 1 hasta ese número.

let numero = parseFloat(prompt('Digite un número:'));
let suma = 0;

for ( let i = 1; i <= numero; i++) {
        suma = suma + i;
        console.log(i);
    }
console.log(`La suma es ${suma}`)

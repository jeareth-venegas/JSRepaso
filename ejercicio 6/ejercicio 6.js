//Escriba un programa que solicite un número al usuario e imprima en la consola si el
//número es primo (solo divisible entre 1 y él mismo) o no.

let numero = parseInt(prompt('Digite un número positivo para saber si es un número primo.'));
let compuesto = true;
let contador = 2;

if(numero == 0 || numero == 1 || numero == 4){
    compuesto = false;
}
while(contador < numero){
    if(numero % contador == 0){
    compuesto = false;
    }
    contador++
}
if (compuesto == true){
    console.log('El número que digitó es primo');
}
else{
    console.log('El número que digitó es compuesto');
}

//Escriba un programa que le solicite al usuario adivinar un número “secreto” del 1 al
//100. El programa debe continuar preguntando por nuevos números al usuario hasta
//que lo adivine o ingrese un cero para salir. El programa debe indicar, cada vez que el
//usuario falle, si el número ingresado es mayor o menor que el número a adivinar.


let contador = 1;
const numero = 25

while (contador != 0) {
    numeroUser = parseInt(prompt('Adivine el número secreto digitando un número del uno al cien. Si desea abandonar el juego digite cero:'));
    if (numeroUser == 0 || numeroUser == numero) {
        contador = 0;
        if (numeroUser == numero) {
            console.log(`El numero secreto es ${numero}, ¡Felicidades!`);
        } else {
            console.log('Has abandonado el juego')
        }
    }else if (numeroUser > numero){
        console.log('El número que digitó es mayor que el número secreto.')
        contador++
    }else if (numeroUser < numero) {
        console.log('El número que digitó es menor que el número secreto.')
        contador++
    }
}

//Escribe un programa que le solicite al usuario una línea de texto y la imprima invertida,
//desde el final hasta el inicio.

let texto = prompt('Ingrese una línea de texto');
let i = texto.length;
let textoInvertido = '';

while (i >= 0) {
    textoInvertido = textoInvertido + texto.charAt(i);
    i--;
    
}
console.log(textoInvertido);
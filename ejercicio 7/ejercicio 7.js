//Escriba un programa que solicite un texto y lo imprima en la consola con todos los
//espacios en blanco removidos. Por ejemplo, si el usuario introduce “May the force be
//with you”, el programa debe retornar “Maytheforcebewithyou”.

let texto = prompt('Escriba un texto:')
console.log(texto.replace(/ /g, ""));
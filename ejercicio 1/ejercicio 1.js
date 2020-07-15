//Un año es bisiesto si es divisible entre 4 pero no entre 100, excepto si es divisible entre
//400. Por ejemplo, 1996 es bisiesto (divisible entre 4), 1900 no lo es (divisible entre 100)
//y 2000 sí lo es (divisible entre 400).
//Escriba un programa que solicite al usuario un año y le indique si es bisiesto o no.

let year = parseInt(prompt('Digite el año'));

if (year % 4 == 0){
    console.log('El año es bisiesto');
}
else if (year % 400 == 0) {
    console.log('El año es bisiesto');
}
else if (year % 100 != 0) {
    console.log('El año no es bisiesto');
}
else {
    console.log('El año no es bisiesto');
}
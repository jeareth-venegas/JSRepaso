//Escriba un programa que solicite al usuario un texto y un carácter y le indique al
//usuario cuántas veces aparece en el texto ese carácter.



let texto = prompt('Escriba un texto'); 
let caracter = prompt('Ingrese un caracter');
let arreglo = [];  
for(let i = 0; i < texto.length; i++){     
    if(texto[i] === caracter) {         
        arreglo.push(i);     
    }
} 
console.log(`El caracter ${caracter} se repite ${arreglo.length} veces en el texto que escribió`);
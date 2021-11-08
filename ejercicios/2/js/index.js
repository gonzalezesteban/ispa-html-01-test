let numeros = [1, 2, 3, 4, 5, 6, 7];

console.log(numeros);
document.getElementById("Antes").innerHTML= numeros

let resultado = numeros.reverse();
document.getElementById("Despues").innerHTML= resultado

let Total = resultado.length;
document.getElementById("Cantidad").innerHTML= Total

console.log(resultado);
console.log("Numero de letras: "+Total);
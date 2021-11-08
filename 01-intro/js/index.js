//document.write("HOLA MUNDO")

// String se escribe con "" o ´´
// console.log(document.getElementById('valor1').value)
// console.log(Number(valorUno.value) + Number(valorDos.value))
// NaN = Not a Number = No es Numero

// if (isNaN(val1) == false) {
//     resultado.value = val1 + val2
// } else {
//     alert('OPERACION INCORRECTA, NO ES UN NUMERO')
// }
// false == true
// if (isNaN(val1) == true) {
// && = AND
// || = OR
// if (isNaN(val1) && isNaN(val2)) {
// if (isNaN(val1) || isNaN(val2)) {
//     // alert('OPERACION INCORRECTA, NO ES UN NUMERO')
//     resultado = 'Solo se aceptan numeros'
// } else {
//     resultado.value = val1 + val2
// }
// isNaN(val1) || isNaN(val2) ? resultado.value = 'Solo se aceptan numeros' : resultado.value = val1 + val2

const valorUno = document.getElementById('valor1')
const valorDos = document.getElementById('valor2')
    // const resultado = document.getElementById('resultado')

function sumar() {
    let val1 = parseFloat(valorUno.value)
    let val2 = parseFloat(valorDos.value)

    validarIsNan(val1, val2) ? resultado.value = 'Solo se aceptan numeros' : resultado.value = val1 + val2
}

function restar() {
    let val1 = parseFloat(valorUno.value)
    let val2 = parseFloat(valorDos.value)

    validarIsNan(val1, val2) ? resultado.value = 'Solo se aceptan numeros' : resultado.value = val1 - val2
}

function multiplicar() {
    let val1 = parseFloat(valorUno.value)
    let val2 = parseFloat(valorDos.value)

    validarIsNan(val1, val2) ? resultado.value = 'Solo se aceptan numeros' : resultado.value = val1 * val2
}

function dividir() {
    let val1 = parseFloat(valorUno.value)
    let val2 = parseFloat(valorDos.value)

    console.log(valorUno.value, valorDos.value);
    if (validarVacios(valorUno.value, valorDos.value)) {
        resultado.value = 'No utilizo ningun numero'
    } else {
        validarIsNan(val1, val2) ? resultado.value = 'Solo se aceptan numeros' : resultado.value = val1 / val2
    }
}

function validarIsNan(valor1, valor2) {
    return isNaN(valor1) || isNaN(valor2) ? true : false;
}

function validarVacios(valor1, valor2) {
    return valor1 == '' || valor2 == '' ? true : false;
}



const resultado = document.getElementById('resultado')

document.formCalculadora.addEventListener("click", function(elemento) {
    const numerosValidos = ['0','1','2','3','4','5','6','7','8','9']
    const operadoresValidos = ['+', '-', 'x', '÷','(',')']
    let texto = elemento.target.textContent

    if (numerosValidos.includes(texto) || operadoresValidos.includes(texto)) {
        console.log('linea 82')
        resultado.value = resultado.value + elemento.target.textContent

        // let arrayTexto = texto.split("")
        // if (arrayTexto.some(valor => operadoresValidos.includes(valor))) {
        //     resultado.value = calcular(resultado.value)
        // }
    }

    if (texto == '=') {
        resultado.value = calcular(resultado.value)
    }

})

function calcular(operacion) {
    console.log('operacion', operacion)
    return eval(operacion)
}
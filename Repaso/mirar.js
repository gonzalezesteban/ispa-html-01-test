function ordenar() {
    const lista = ["n", "c", "z", "e"]
    console.log("Lista desordenada: ", lista)

    //asendente = .sort con a.localcompare(b)
    //desendente = .sort con b.localecompare(a)
    lista.sort((a, b) => b.localecompare(a))
    console.log("Lista ordenada: ", lista)
}
//void = vacio
const order = () => {
    const lista = ["n", "c", "z", "e"]
    console.log("Lista desordenada: ", lista)
    lista.sort((a, b) => b.localecompare(a))
    console.log("Lista ordenada: ", lista)
}
//Resumido
const order = (lista) => {
    lista.sort((a, b) => b.localecompare(a))
    return lista
}
//RESUMIDO 2
//----------DECLARAR FUNCION----------//
const order = (lista) => {
    return lista.sort((a, b) => b.localecompare(a));
}
//(order = ordenar) = Ambas son lo mismo
//ejecutar ORDER = order()

//----------DECLARAR VARIOABLES----------//
let listado = ["JUAN", "ANGEL", "NELSEON", "DIEGO"]

//ejecutar las funciones
console.log(listado)
console.log(order(listado))

// variableinicializada se usa mayormente en 0
//COMPARACION = 
//<
//>
//<=
//>=
//==
//!=
//FOR (variableinicializada; comparacion; incremento-resta) {
    //instruccion-accion
//}
/**/
/*LA FLECHA TO TIENE NOMBRE "=>" */
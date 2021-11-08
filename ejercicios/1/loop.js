function insertarNombre(evt) {
    //evita que se recargue la pagina
    evt.preventDefault();

    let nombre = document.getElementById("nombre").value;
    if(nombre == "") {
        alert("El nombre on puede estar vacio");
    }
    else{
        let opcion = "<li>"+nombre+"</li>";
    
    let lista = document.getElementById("lista-nombres");
    document.getElementById("lista-nombres").innerHTML= opcion
    // "+=" = acumular
    lista.innerHTML += opcion;
    alert("Se inserto el nombre");
    }
}
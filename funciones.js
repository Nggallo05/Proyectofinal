
let formularioDeRegistro = document.getElementById('formularioDeRegistro');
formularioDeRegistro.addEventListener("submit",guardarDatos)




function cargarRegistros(){
    let listadoRegistros = JSON.parse(localStorage.getItem("listadoRegistros"));
    if(listadoRegistros == null) {
        return [];
    }
    return listadoRegistros;
}

function guardarRegistros(listadoRegistros) {
    localStorage.setItem("listadoRegistros", JSON.stringify(listadoRegistros));
}

function guardarDatos(e) {
    e.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let email = document.querySelector("#email").value;
    let contraseña = document.querySelector("#contraseña").value;
    
    let listadoRegistros = cargarRegistros();

    listadoRegistros.push(new registros(nombre, email, contraseña));

    guardarRegistros(listadoRegistros);

    document.getElementById('formularioDeRegistro').reset();
}

function corroborarDatos(nombre,mail,contraseña){
    let verRegistros = cargarRegistros();
    let accceso = false;

    for (let i = 0; i < listadoRegistros.length; i++){
        if (nombre == verRegistros [i][0] && mail == verRegistros [i][1] && contraseña == verRegistros [i][2]){
            accceso = true;
        }
    }

    return accceso;
}






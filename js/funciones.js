
let formularioDeRegistro = document.getElementById('formularioDeRegistro');


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

function guardarDatos(nombre,email,contraseña) {
    
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







const nombre = document.getElementById('nombre');

const email = document.getElementById('email');

const contraseña = document.getElementById('contraseña');

const formulario = document.getElementById('formularioDeRegistro')

const parrafo = document.getElementById('alertas');

const ingreso = document.getElementById ('btnIngreso');



formulario.addEventListener("submit",e => {
    e.preventDefault()

    let alertas = ""
    let validarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let ingresar = false
    parrafo.innerHTML = ""

    if(nombre.value.length < 5 || (!validarEmail.test(email.value)) || contraseña.value.length <6){
        alertas += `validacion Pendiente <br>` 
        ingresar = false
    }else{
        ingresar= true
        alertas += `Acceso Concedido <br>` 
    }
    if(!ingresar){
        parrafo.innerHTML = alertas
    }
    else{
        guardarDatos(nombre.value, email.value, contraseña.value)
        parrafo.innerHTML = 'Ingresando...'
    }
})






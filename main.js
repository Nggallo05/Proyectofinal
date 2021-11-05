
const nombre = document.getElementById('nombre');

const email = document.getElementById('email');

const contraseña = document.getElementById('contraseña');

const formulario = document.getElementById('formularioDeRegistro')

const parrafo = document.getElementById('alertas');





formulario.addEventListener("submit", e => {
    e.preventDefault()
    let alertas = ""
    let validarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    let ingresar = false
    parrafo.innerHTML = ""
    if(nombre.value.length <5){
        alertas += `Nombre demasiado corto <br>` 
        ingresar = true
    }
    if(!validarEmail.test(email.value)){
        alertas += `Email no valido <br>`
        ingresar = true
    }
    if(contraseña.value.length <6){
        alertas += `Contraseña demasiada corta <br>` 
        ingresar = true
    }
    if(ingresar){
        parrafo.innerHTML = alertas
    }else{
        parrafo.innerHTML = 'Ingresando...'
    }
})








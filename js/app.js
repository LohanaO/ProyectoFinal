
// --------- REDIRECCION DEL BOTON CONTACTO ---------------

function redirec(){
    location.href="contacto.html";
}

// --------- GUARDAMOS NUESTRO FORMULARIO E INPUTS EN CONSTANTES ---------------
const $formulario = document.getElementById("formulario");
const $inputs = document.querySelectorAll("#formulario input")

const $mensaje=document.querySelector('#mensaje');



// --------- OBJETO CON NUESTRAS EXPRESIONES REGULARES ---------------
const expresiones = {
    asunto:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // AQUI ACEPTARA LETRAS CON O SIN ACENTO Y ESPACIOS
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // AQUI ACEPTARA LETRAS CON O SIN ACENTO Y ESPACIOS
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // ACEPTA DE TODO MENOS CARACTERES ESPECIALES
    telefono: /^\d{7,14}$/, // ACEPTARA MINIMO 7 Y MAXIMO 14 NÚMEROS
    mensaje: ""
}


// -------------- OBJETO CON NUESTROS CAMPOS ----------------------
const campos = {
    
    nombre: false,
    correo: false,
    asunto:false,
    telefono: false,
    mensaje:false
}


// --------- SWITCH PARA SELECCIONAR EL INPUT DONDE ÉSTE HACIENDO FOCO EL USUARIO  ---------------
const validarFormulario = (e) => {
    switch(e.target.name) {
        
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
        break;
       
        case "correo":
            validarCampo(expresiones.correo, e.target, "correo");
        break;
        case "asunto":
            validarCampo(expresiones.asunto, e.target, "asunto");
        break;

        case "telefono":
            validarCampo(expresiones.telefono, e.target, "telefono");
        break;
        case "mensaje":
        
            validarCampo(expresiones.mensaje, e.target, "mensaje");
        break;
    }
}


// -------------- VALIDAMOS NUESTROS INPUTS ------------------------
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[campo] = true;
        console.log("Funciona");
    } else {
           document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
           document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
           document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
           campos[campo] = false;
           console.log("Funciona");
        }
}




// --------- CAPTURAMOS CADA VEZ QUE EL USUARIO PRESIONA UNA TECLA ---------------
$inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);


    
    
    
});



// --------- VALIDAMOS TODO NUESTRO FORMULARIO ---------------
$formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    
    if( campos.nombre  && campos.correo && campos.telefono && campos.asunto) {
        // formulario.reset();

        document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
        setTimeout(() => {
           
            document.getElementById("formulario__mensaje-exito").classList.remove("formulario__mensaje-exito-activo");
           
            
        }, 1000);
        
       
        
        setTimeout(() => {
            location.reload();
        }, 3000);

    } else {
        document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
        setTimeout(() => {
            document.getElementById("formulario__mensaje").classList.remove("formulario__mensaje-activo");
        }, 2000);
        
    }
});
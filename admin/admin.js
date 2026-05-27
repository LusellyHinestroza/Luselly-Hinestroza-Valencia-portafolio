/*CREAR CV*/

/*ESTUDIOS........................................................................................*/
const formCrearEstudios = document.getElementById("formCrearEstudios");
const inputNombreEstudio = document.getElementById("nombreEstudio");
const inputNombreProfesion = document.getElementById("nombreProfesion");
const inputDescripcionEstudio = document.getElementById("descripcionEstudio");
const inputPaginaEstudio = document.getElementById("paginaEstudio");

/*LIMPIAR EL FORMULARIO*/
function limpiarFormCrearEstudios(){
    formCrearEstudios.reset()
    inputPaginaEstudio.value = "";
}

/*COLOR DE VALIDO E INVALIDO VERDE ROJO */
function valido(input){
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    

    const nombreError = document.getElementById("nombreError");
    nombreError.classList.remove("active");

    const profesionError = document.getElementById("profesionError");
    profesionError.classList.remove("active");

    const descripcionError = document.getElementById("descripcionError");
    descripcionError.classList.remove("active");

    const paginaError = document.getElementById("paginaError");
    paginaError.classList.remove("active");
}

/*MOSTRAR ERROR DEL IMPUT ...........................................*/
function error(input, idError, mensaje){
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    
    
    const nombreError = document.getElementById("nombreError");
    nombreError.textContent = mensaje;
    nombreError.classList.add("active");

    const profesionError = document.getElementById("profesionError");
    profesionError.textContent = mensaje;
    profesionError.classList.add("active");

    const descripcionError = document.getElementById("descripcionError");
    descripcionError.textContent = mensaje;
    descripcionError.classList.add("active");
    
    const paginaError = document.getElementById("paginaError");
    paginaError.textContent = mensaje;
    paginaError.classList.add("active");
}

/*VALIDAR INPUTS................................................*/
function validarNombreEstudio(){

    valido(inputNombreEstudio);
        
    if(inputNombreEstudio.value.trim() === ""){
        error(inputNombreEstudio, "EL nombre del lugar de estudio es hobligatorio");
        return false;
    }

    return true;
}

function validarNombreProfesion(){

    valido(inputNombreProfesion);

    if(inputNombreProfesion.value.trim() === ""){
        error(inputNombreProfesion, "EL nombre de la profecion es hobligatorio");
        return false;
    }

    return true;
}

function validarinputDescripcionEstudio(){

    valido(inputDescripcionEstudio);

    if(inputDescripcionEstudio.value.trim() === ""){
        error(inputDescripcionEstudio, "La descripcion es hobligatoria");
        return false;
    }

    return true;
}

function validarPaginaEstudio(){

    const correo = inputPaginaEstudio.value.trim();
    const condicion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

     if(correo === ""){
        error(inputPaginaEstudio, "El correo es hobligatoria");
        return false;
    }

    if(!condicion.test(correo)){
        error(inputPaginaEstudio, "Ingresa un correo válido");
        return false;
    }

    valido(inputPaginaEstudio);
    return true;
}

inputNombreEstudio.addEventListener("input", validarNombreEstudio);
inputNombreEstudio.addEventListener("blur", validarNombreEstudio);
inputNombreEstudio.addEventListener("input", ()=>{ inputNombreEstudio.value = inputNombreEstudio.value.replace(/[0-9]/g, '');});

inputNombreProfesion.addEventListener("input", validarNombreProfesion);
inputNombreProfesion.addEventListener("blur", validarNombreProfesion);
inputNombreProfesion.addEventListener("input", ()=>{ inputNombreProfesion.value = inputNombreProfesion.value.replace(/[0-9]/g, '');});

inputDescripcionEstudio.addEventListener("input", validarinputDescripcionEstudio);
inputDescripcionEstudio.addEventListener("blur", validarinputDescripcionEstudio);
inputDescripcionEstudio.addEventListener("input", ()=>{ inputDescripcionEstudio.value = inputDescripcionEstudio.value.replace(/[0-9]/g, '');});

inputPaginaEstudio.addEventListener("input", validarPaginaEstudio);
inputPaginaEstudio.addEventListener("blur", validarPaginaEstudio);



/* DE TIENE EL ENVIO DEL FORMULARIO*/
formCrearEstudios.addEventListener("submit", function(evento){
    
    const estudioValido = validarNombreEstudio();
    const profecionValido = validarNombreProfesion();
    const descripcionValido = validarinputDescripcionEstudio();
    const PaginaValido = validarPaginaEstudio();

    if(!estudioValido || !profecionValido || !descripcionValido || !PaginaValido){
        evento.preventDefault(); /*DETIENE EL ENVIO*/
    } 
});




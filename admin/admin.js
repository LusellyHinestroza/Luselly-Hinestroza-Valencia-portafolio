/*CREAR CV*/

/*ESTUDIOS.............................................................................................................................*/


let formEstudioss = document.getElementById("formEstudios");
let inputNombreEstudio = document.getElementById("nombreEstudio");
let inputNombreProfesion = document.getElementById("nombreProfesion");
let inputDescripcionEstudio = document.getElementById("descripcionEstudio");
let inputPaginaEstudio = document.getElementById("paginaEstudio");


const listaEstudio = JSON.parse(localStorage.getItem("ListaEstudios")) || [];

formEstudioss.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nuevoEstudios = {
        id: listaEstudio.length + 1,
        nombreEstudio: inputNombreEstudio.value.trim(),
        nombreProfecion: inputNombreProfesion.value.trim(),
        descripcionEstudios: inputDescripcionEstudio.value.trim(),
        paginaEstudios: inputPaginaEstudio.value.trim()
    };

    listaEstudio.push(nuevoEstudios);
    localStorage.setItem("ListaEstudios", JSON.stringify(listaEstudio));
    

    const mensajeEstudios = document.getElementById("mensajeEstudios");

    mensajeEstudios.textContent = "Estudio guardado correctamente";
    mensajeEstudios.style.color = "green";
    formEstudios.reset();

    setTimeout(() => {
        mensajeEstudios.textContent = "";
    }, 3000);
});






/*ESPERIENSIAS............................................................................................................................*/
let formularioExperiencia = document.getElementById("formularioExperiencia");
let inputNombreExperiencia = document.getElementById("nombreExperiencia");
let inputNombreCargo = document.getElementById("nombreCargo");
let descripcionExperiencia = document.getElementById("descripcionExperiencia");


const listaExperiencia = JSON.parse(localStorage.getItem("ListaExperiencia")) || [];

formularioExperiencia.addEventListener('submit', (evento) => {
    evento.preventDefault();

   
    const nuevaExperiencia = {
        id: listaExperiencia.length + 1,
        nombreExperiencia: inputNombreExperiencia.value.trim(),
        nombreCargo: inputNombreCargo.value.trim(),
        descripcionExperiencia: descripcionExperiencia.value.trim()
    };
   
  
    listaExperiencia.push(nuevaExperiencia);
    localStorage.setItem("ListaExperiencia", JSON.stringify(listaExperiencia));
    

    const mensajeExperiencia = document.getElementById("mensajeExperiencia");

    mensajeExperiencia.textContent = "Experiencia guardada correctamente";
    mensajeExperiencia.style.color = "green";
    formularioExperiencia.reset();

    setTimeout(() => {
        mensajeExperiencia.textContent = "";
    }, 3000);
});









/*HABILIDAD............................................................................................................................*/
let formularioHabilidad = document.getElementById("formularioabilidad");
let inputNombreHabilidad = document.getElementById("nombreHabilidad");
let inputDescripcionHabilidad = document.getElementById("descripcionHabilidad");
let inputImagenHabilidad = document.getElementById("imagenHabilidad");


const listaHabilidad = JSON.parse(localStorage.getItem("ListaHabilidad")) || [];

formularioHabilidad.addEventListener('submit', (evento) => {
    evento.preventDefault();

   
    const nuevaHabilidad = {
        id: listaHabilidad.length + 1,
        nombreHabilidad: inputNombreHabilidad.value.trim(),
        descripcionHabilidad: inputDescripcionHabilidad.value.trim(),
        imagenHabilidad: inputImagenHabilidad.value.trim()
    };
    
  
    listaHabilidad.push(nuevaHabilidad);
    localStorage.setItem("ListaHabilidad", JSON.stringify(listaHabilidad));
    

    const mensajeHabilidad = document.getElementById("mensajeHabilidad");

    mensajeHabilidad.textContent = "Habilidad guardada correctamente";
    mensajeHabilidad.style.color = "green";
    formularioHabilidad.reset();

    setTimeout(() => {
        mensajeHabilidad.textContent = "";
    }, 3000);
});





/*PUBLICACION............................................................................................................................*/
let formularioPublicaciones = document.getElementById("formularioPublicaciones");
let inputImagenPublicaciones = document.getElementById("imagenPublicaciones");
let inputNombreProyecto = document.getElementById("nombreProyectoPublicaciones");
let inputLenguaje = document.getElementById("nombreLenguajePublicaciones");
let inputDescripcionPublicaciones = document.getElementById("descripcionPublicaciones");
let inputImagenProyecto = document.getElementById("imagenProyectoPublicaciones");
let inputVideoPublicaciones = document.getElementById("videoPublicaciones");
let inputVideoEnlacePublicaciones = document.getElementById("videoEnlacePublicaciones");
let inputcodigoPublicaciones = document.getElementById("codigoPublicaciones");
let inputPaginaCodigo = document.getElementById("paginaCodigo");


const ListaPublicaciones = JSON.parse(localStorage.getItem("ListaPublicaciones")) || [];

formularioPublicaciones.addEventListener('submit', (evento) => {
    evento.preventDefault();

   
    const nuevaPublicacion = {
        id: ListaPublicaciones.length + 1,
        imagenPublicaciones: inputImagenPublicaciones.value.trim(),
        nombreProyecto: inputNombreProyecto.value.trim(),
        nombreLenguaje: inputLenguaje.value.trim(),
        descripcionPublicaciones: inputDescripcionPublicaciones.value.trim(),
        imagenProyecto: inputImagenProyecto.value.trim(),
        videoPublicaciones: inputVideoPublicaciones.value,
        videoEnlace: inputVideoEnlacePublicaciones.value.trim(),
        codigoPublicaciones: inputcodigoPublicaciones.value.trim(),
        codigoPublicaciones: inputcodigoPublicaciones.value.trim(),
        codigoPagina: inputPaginaCodigo.value.trim(),
    };
    
  
    ListaPublicaciones.push(nuevaPublicacion);
    localStorage.setItem("ListaPublicaciones", JSON.stringify(ListaPublicaciones));
    

    const mensajePublicaciones = document.getElementById("mensajePublicaciones");

    mensajePublicaciones.textContent = "Publicacion guardada correctamente";
    mensajePublicaciones.style.color = "green";
    formularioPublicaciones.reset();

    setTimeout(() => {
        mensajePublicaciones.textContent = "";
    }, 3000);
});
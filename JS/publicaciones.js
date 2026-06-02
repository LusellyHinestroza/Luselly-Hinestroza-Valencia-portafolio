
/*PUBLICACIONES.....................................................................................................*/

document.addEventListener("DOMContentLoaded", () => {
    const cajonPublicaciones = document.querySelector(".publicaciones");

    let datPublicaciones = JSON.parse(localStorage.getItem("ListaPublicaciones")) || [];

    datPublicaciones.forEach(publicacion => {
        cajonPublicaciones.appendChild(crearPublicaciones(publicacion));
    });
      
});
 

function crearPublicaciones(publicacion) {
    const cajonapublicacion = document.createElement("div");
    cajonapublicacion.classList.add("publicacion");

    cajonapublicacion.innerHTML = `
        <!-- ENCABEZADO -->
        <div class="encabezado">
            <div class="perfil">
                <img src="${publicacion.imagenPublicaciones}" alt="perfil">
                <div class="datos">
                    <h3>${publicacion.nombreProyecto}</h3>
                    <span>Desarrollo Web • Hace 2 horas</span>
                </div>
            </div>    
        </div>

        <!-- INFORMACION -->
        <div class="informacion" >

            <h1>${publicacion.nombreLenguaje}</h1>

            <p>${publicacion.descripcionPublicaciones}</p>

        </div>

        <!-- IMAGEN OPCIONAL -->
        <div class="imagenPublicacion" style="display: none;">          
            <img src="${publicacion.imagenProyecto}" alt="proyecto">       
        </div>

        <div class="videoPublicacion" >
            <video autoplay loop muted playsinline>
                <source src="${publicacion.videoPublicaciones}" type="video/mp4">
            </video>
        </div>
        <div class="videoPublicacion" >
            <video autoplay loop muted playsinline>
                <source src="${publicacion.videoEnlace}" type="video/mp4">
            </video>
        </div>

        <!-- CODIGO OPCIONAL -->
        <div class="codigoProyecto" style="display: none;">

            <pre><code>${publicacion.codigoPublicaciones}</code></pre>
                    
        </div>

        <!-- BOTONES -->
        <div class="acciones">

            <button>
                <i class="fa-regular fa-heart"></i>
                1.2k
            </button>

            <button>
                <i class="fa-regular fa-comment"></i>
                245
            </button>

            <button>
                <i class="fa-solid fa-share"></i>
                Compartir
            </button>

            <button class="codigo" onclick="window.open('${publicacion.codigoPagina}', '_blank')">
                <i class="fa-solid fa-code"></i>
                Ver código
            </button>

        </div>

        <!-- COMENTARIOS -->
        <div class="comentarios">

            <div class="inputComentario">
                <i class="fa-regular fa-face-smile"></i>
                <input type="text" placeholder="Escribe un comentario...">
                <button>
                    <i class="fa-solid fa-arrow-up"></i>
                </button>
            </div>

        </div>

              

    `;

    return cajonapublicacion;
}
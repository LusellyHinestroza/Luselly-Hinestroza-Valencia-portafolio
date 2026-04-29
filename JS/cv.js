let mostrar = document.querySelectorAll(".informacioCards");

mostrar.forEach(function(mostra){
    mostra.addEventListener("click", function(){
         if (this.style.boxShadow) {
            this.style.boxShadow = "";
        } else {
            this.style.boxShadow = "0px 0px 3px #87d0d0";
            this.style.bordersolid = "#647a84";

        }


        // Buscar la card actual
        let card = mostra.closest(".cardEstudios");

        // Buscar SOLO la .abilidad dentro de esa card
        let subir = card.querySelector(".abilidad");
        

        // Activar clase
        subir.classList.toggle("active");
    });
});



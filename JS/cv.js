let mostrar = document.querySelectorAll(".informacioCards");

mostrar.forEach(function(mostra){
    mostra.addEventListener("click", function(){
         if (this.style.boxShadow) {
            this.style.boxShadow = "";
        } else {
            this.style.boxShadow = " 0 0 10px #ffffff, 0 0 25px #8814eed3";
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



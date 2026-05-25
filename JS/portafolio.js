function mostrarTargeta(){
    let targeta = document.getElementById("targeta")
     if(targeta.style.display === "none" || targeta.style.display === ""){
        targeta.style.display = "flex";
    }else{
        targeta.style.display = "none";
    }
        
}

function cerrarTargeta(){
        document.getElementById("targeta").style.display = "none";
}
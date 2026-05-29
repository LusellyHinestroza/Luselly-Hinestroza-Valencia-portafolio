function menuResponse(){
    document.getElementById("menu").classList.toggle("active");
    document.getElementById("menu-resP").classList.toggle("active");
}

function irEnlaces(url){
    window.open(url, "_blank")
}

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("./html/navbar.html");
    const html = await response.text();

    document.getElementById("navbar-container").innerHTML = html;
});
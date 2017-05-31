// Mostrar menú

var iconElement = document.getElementById("icon");
var closeElement = document.getElementById("close");

// Menu versión movil

function showMenu() {
  var headerElement = document.querySelector(".header");
    headerElement.className = "mov header";
}

function closeMenu() {
  var headerElement = document.querySelector(".header");
    headerElement.className = "header";
}

iconElement.addEventListener("click", showMenu);
closeElement.addEventListener("click", closeMenu);

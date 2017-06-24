// Mostrar menú

var iconElement = document.getElementById("icon");
var closeElement = document.getElementById("close");

// Menu versión movil

function showMenu() {
  var bodyElement = document.querySelector(".container");
    bodyElement.classList.add("mov");
}

function closeMenu() {
  var bodyElement = document.querySelector(".container");
    bodyElement.classList.remove("mov");
}

iconElement.addEventListener("click", showMenu);
closeElement.addEventListener("click", closeMenu);


var items = ["curso", "nosotros", "contacto", "voluntariado"];
var menuElement = document.querySelector(".nav");

function createMenu (){
  for (var i = 0; i < items.length; i++) {
    menuElement.innerHTML += '<li><a href="#">' + items[i] + '</a></li>';
  }
}
createMenu ();

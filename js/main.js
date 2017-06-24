// Mostrar menú

var iconElement = document.getElementById("icon");
var closeElement = document.getElementById("close");

// Menu versión movil

function showMenu() {
  var headerElement = document.querySelector(".header");
    headerElement.classList("mov");
}

function closeMenu() {
  var headerElement = document.querySelector(".header");
    headerElement.classList.remove("mov");
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

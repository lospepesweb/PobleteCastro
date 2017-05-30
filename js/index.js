(function(){
// -- CENTRADO VERTICAL DEL FORMULARIO -- //

// VARIABLES
var anchoPantalla = window.innerWidth;
var alturaPantalla = window.innerHeight;
var alturaDiv = document.getElementById("home").clientHeight;
var margen = (alturaPantalla - alturaDiv) / 2;

// FUNCIONES
function seteo(){
	document.getElementById("imagen").style.marginTop = margen+"px";
	document.getElementById("imagen").style.marginBottom = margen+"px";

	document.getElementById("imagen1").style.marginTop = margen+"px";
	document.getElementById("imagen1").style.marginBottom = margen+"px";
};

// EVENTOS
seteo();

}())
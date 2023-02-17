/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno
 rectangular y se debe alambrar con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular
 y se debe alambrar con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
 debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoIngresado;
    var anchoIngresado;
    var cantidadDeAlambre;
    var perimetroDelTerreno;
    var primerMensajeAMostrar;

    largoIngresado = document.getElementById("txtIdLargo").value;
    anchoIngresado = document.getElementById("txtIdAncho").value;
    
    largoIngresado = parseFloat(largoIngresado);
    anchoIngresado = parseFloat(anchoIngresado);

    perimetroDelTerreno = (largoIngresado + anchoIngresado) * 2;

    cantidadDeAlambre = perimetroDelTerreno * 3;

    primerMensajeAMostrar = ("La cantidad de alambre requerido es de: ");
    primerMensajeAMostrar += (cantidadDeAlambre.toFixed(2) + " metros.");

    alert(primerMensajeAMostrar);
}
function Circulo () 
{
	var radioIngresado;
    var cantidadDeAlambre;
    var perimetroDelTerreno;
    var segundoMensajeAMostrar;

    radioIngresado = document.getElementById("txtIdRadio").value;
    radioIngresado = parseFloat(radioIngresado);

    perimetroDelTerreno = 2 * Math.PI * radioIngresado;
    cantidadDeAlambre = perimetroDelTerreno * 3;

    segundoMensajeAMostrar = ("La cantidad de alambre requerido es de: ");
    segundoMensajeAMostrar += (cantidadDeAlambre.toFixed(2) + " metros.");

    alert(segundoMensajeAMostrar);
}
function Materiales () 
{
    var largoIngresado;
   var anchoingresado; 
   var bolsasDeCal;
   var bolsasDeCemento;
   var metrosCuadrados; 
   var tercerMensajeAMostrar;

   largoIngresado = document.getElementById("txtIdLargo").value;
   anchoIngresado = document.getElementById("txtIdAncho").value;

   largoIngresado = parseFloat(largoIngresado);
    anchoIngresado = parseFloat(anchoIngresado);

   metrosCuadrados = largoIngresado * anchoingresado; 
  
   bolsasDeCemento = metrosCuadrados * 2;
   bolsasDeCal = metrosCuadrados * 3; 

   tercerMensajeAMostrar= ("Se necesitan: " + bolsasDeCal + " bolsas de cal y ");
   tercerMensajeAMostrar += (bolsasDeCemento + " bolsas de cemento");

   alert(tercerMensajeAMostrar);
  }

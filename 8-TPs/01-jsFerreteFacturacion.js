/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioIngresadoUno;
    var precioIngresadoDos;
    var precioIngresadoTres;
    var sumaDePrecios;
	
    precioIngresadoUno = document.getElementById("txtIdPrecioUno").value;
    precioIngresadoDos = document.getElementById("txtIdPrecioDos").value;
    precioIngresadoTres = document.getElementById("txtIdPrecioTres").value;

    precioIngresadoUno = parseFloat(precioIngresadoUno);
    precioIngresadoDos = parseFloat(precioIngresadoDos);
    precioIngresadoTres = parseFloat(precioIngresadoTres);

    sumaDePrecios = precioIngresadoUno + precioIngresadoDos + precioIngresadoTres;
    alert("El valor de la suma de todos los precios es :  " + sumaDePrecios);
}
function Promedio () 
{
	var precioIngresadoUno;
    var precioIngresadoDos;
    var precioIngresadoTres;
    var promedioDePrecios
	
    precioIngresadoUno = document.getElementById("txtIdPrecioUno").value;
    precioIngresadoDos = document.getElementById("txtIdPrecioDos").value;
    precioIngresadoTres = document.getElementById("txtIdPrecioTres").value;

    precioIngresadoUno = parseFloat(precioIngresadoUno);
    precioIngresadoDos = parseFloat(precioIngresadoDos);
    precioIngresadoTres = parseFloat(precioIngresadoTres);

    promedioDePrecios = (precioIngresadoUno + precioIngresadoDos + precioIngresadoTres) / 3;
    alert("El promedio de los precios es: " + promedioDePrecios);
}
function PrecioFinal () 
{
	var precioIngresadoUno;
    var precioIngresadoDos;
    var precioIngresadoTres;
    var sumaDePrecios;
    var valorDeIva;
    var precioFinal;
	
    precioIngresadoUno = document.getElementById("txtIdPrecioUno").value;
    precioIngresadoDos = document.getElementById("txtIdPrecioDos").value;
    precioIngresadoTres = document.getElementById("txtIdPrecioTres").value;

    precioIngresadoUno = parseFloat(precioIngresadoUno);
    precioIngresadoDos = parseFloat(precioIngresadoDos);
    precioIngresadoTres = parseFloat(precioIngresadoTres);

    sumaDePrecios = precioIngresadoUno + precioIngresadoDos + precioIngresadoTres;
    valorDeIva = sumaDePrecios * 21 / 100 ;
    precioFinal = sumaDePrecios + valorDeIva;
    alert("El precio final es :" + precioFinal.toFixed(2));
}
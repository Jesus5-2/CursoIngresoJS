/*
*Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
*/
function mostrar()
{
	var edadIngresada
	
	edadIngresada = document.getElementById("txtIdEdad").value;

	edadIngresada = parseFloat(edadIngresada)
	
	if(edadIngresada == 15)
	{
		alert("Niña bonita");
	}
}
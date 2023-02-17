/* 
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
*/

function mostrar()
{
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;

	edadIngresada = parseInt(edadIngresada);

	mensaje = ("Usted es un niño");

	if(edadIngresada > 17)
	{
		mensaje = ("Usted es mayor de edad");

	}
	else
	{
		if (edadIngresada > 12)
		{
			mensaje = ("Usted es un adolescente");
		}
	}

	alert(mensaje);
}
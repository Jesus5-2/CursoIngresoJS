/*
Ariel Ramirez DIV Z Grupo 1 Switch 08
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/
function mostrar()
{
	var mensaje;
	var destinoIngresado =txtIdDestino.value;

	switch (destinoIngresado) 
	{
		case "Bariloche":
		case "Ushuaia":
			mensaje = "Aqui hace frio";
			break;
		default: mensaje = "Aqui hace calor";
	}
	alert(mensaje);

}
/*
Ariel Ramirez DIV Z Grupo 1 Switch 07
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde
se encuentra Norte, Sur, Este u Oeste
*/
function mostrar()
{
	var mensaje;
	var destinoIngresado =txtIdDestino.value;

	switch (destinoIngresado) {
		case "Bariloche":
			mensaje = "Se encuentra al oeste";
			break;
		case "Cataratas":
			mensaje = "Se encuentra al norte";
			break;
		case "Mar del plata":
			mensaje = "Se encuentra al este";
			break;
		case "Ushuaia":	
			mensaje = "Se encuentra al sur";
			break;
		default:
	}
	alert(mensaje);
}
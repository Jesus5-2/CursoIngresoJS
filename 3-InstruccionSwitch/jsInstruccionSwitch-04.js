/*
Ariel Ramirez DIV Z Grupo 1 Switch 04
Al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/
function mostrar()
{
	var mesDelAño =txtIdMes.value;
	var mensaje;

	switch (mesDelAño) {
		case "Febrero":
			mensaje = "Este mes tiene 28 dias";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "Este mes tiene 30 dias";
			break;
		default: mensaje = "Este mes tiene 31 dias";
			break;
	}
	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN
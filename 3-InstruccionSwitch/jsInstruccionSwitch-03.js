/*
Ariel Ramirez DIV Z Grupo 1 Switch 03
Al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/
function mostrar()
{
	var mensaje;
	var mesDelAño =txtIdMes.value;
	switch (mesDelAño) {
		case "Febrero":
			mensaje="Este mes no tiene mas de 29 dias.";
			break;
		default: 
		mensaje="Este mes tiene 30 o más días";
	}
	alert(mensaje);
}
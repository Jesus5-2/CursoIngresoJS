/*
Ariel Ramirez DIV Z Grupo 1 Switch 01
Al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/
function mostrar()
{
	var mesDelAño =txtIdMes.value;
	var mensaje;

	switch (mesDelAño) 
	{
		case "Enero":
			mensaje="Que comiences bien el año!!!"
			break;
		case "Marzo":
			mensaje="A clases!!!"
			break;
		case  "Julio":
			mensaje="Se vienen las vacaciones!!!"
			break;
		case "Diciembre":
			mensaje="Felicies fiestas!!!"
			break;
	}

	alert(mensaje);
}
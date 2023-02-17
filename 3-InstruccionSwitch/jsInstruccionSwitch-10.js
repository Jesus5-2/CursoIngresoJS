/*
Ariel Ramirez DIV Z Grupo 1 Switch 10
Una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del
año estemos, informar si "Se viaja" o "No se viaja" a ese lugar
-En Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
-En Verano: Se viaja a Mar del plata y Cataratas solamente
-En Otoño: Se viaja a todos los destinos.
-En Primavera: solo no se viaja a Bariloche
*/
function mostrar()
{
	var destinoIngresado
	var estacionIngresada 

	destinoIngresado = document.getElementById("txtIdDestino").value;
	estacionIngresada = document.getElementById("txtIdEstacion").value;

	switch (estacionIngresada)
	{
		case "Invierno":
			if(destinoIngresado=="Bariloche")
			{
				mensaje=("Se viaja");
			}
			else
			{
				mensaje=("No se viaja");
			}
			break;
		case "Verano":
			if(destinoIngresado=="Mar del plata" || destinoIngresado=="Cataratas")
			{
				mensaje=("Se viaja");
			}
			else
			{
				mensaje=("No se viaja")
			}
			break;
		case "Otoño":
			mensaje = ("Se viaja")
			break;
		case "Primavera":
			if(destinoIngresado=="Bariloche")
			{
				mensaje=("No se viaja");
			}
			else
			{
				mensaje=("Se viaja")
			}
	}
	alert(mensaje);
}
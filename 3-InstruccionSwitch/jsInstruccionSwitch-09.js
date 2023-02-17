/*
Ariel Ramirez DIV Z Grupo 1 Switch 09
Una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia
como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder
calcular el precio final:
-En Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10%
Mar del plata tiene un descuento del 20%
-En Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%
-En Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10%
Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var precioBase;
	var precioFinal;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	precioBase = 15000;

	switch (estacionIngresada)
	{
		case "Invierno":
			if(destinoIngresado=="Bariloche")
			{
				precioFinal = precioBase + precioBase * 20 / 100;
			}
			else
			{
				if(destinoIngresado=="Cataratas" || destinoIngresado=="Cordoba")
				{
					precioFinal = precioBase - precioBase * 10 / 100;
				}
				else
				{
					if(destinoIngresado=="Mar del plata")
					{
					precioFinal = precioBase - precioBase * 20 / 100;
					}
				}
			}
			
			break;
		case "Verano":
			if(destinoIngresado=="Bariloche")
			{
				precioFinal = precioBase - precioBase * 20 / 100;
			}
			else
			{
				if(destinoIngresado=="Cataratas" || destinoIngresado=="Cordoba")
				{
					precioFinal = precioBase + precioBase * 10 / 100;
				}
				else
				{
				precioFinal = precioBase + precioBase * 20 / 100;
				}
			}
			break;
		case "Otoño":
		case "Primavera":
			if(destinoIngresado=="Bariloche" || destinoIngresado=="Cataratas" || 
			destinoIngresado=="Mar del plata")
			{
				precioFinal = precioBase + precioBase * 10 / 100;
			}
	}
	alert(precioFinal);
}
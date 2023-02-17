/*
Ariel Ramirez DIV Z Grupo 1 while 03
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Reingrese el número clave.");
	}
	alert("Clave correcta!");
	
}

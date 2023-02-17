/*
Ariel Ramirez DIV Z Grupo 1 while 01
Al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/

function mostrar()
{
	var numeroAscendente;

	numeroAscendente=1;

	while(numeroAscendente <11)
	{
		alert(numeroAscendente);
		numeroAscendente=numeroAscendente + 1;
	}
	alert('iteración while');
}
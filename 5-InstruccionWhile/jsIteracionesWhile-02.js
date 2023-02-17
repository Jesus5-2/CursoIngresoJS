/*
Ariel Ramirez DIV Z Grupo 1 while 02
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	var numeroDescendiente;

	numeroDescendiente=10;

	while(numeroDescendiente > 0)
	{
		alert(numeroDescendiente);
		numeroDescendiente=numeroDescendiente - 1;
	}

	alert('iteración while');

}
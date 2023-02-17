/*
Ariel Ramirez DIV Z Grupo 1 If 09
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/
function mostrar()
{
	var numeroAleatorio

	numeroAleatorio = Math.floor(Math.random()*10 + 1);

	alert(numeroAleatorio);

}
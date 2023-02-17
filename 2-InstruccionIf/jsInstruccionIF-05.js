/*
Ariel Ramirez DIV Z Grupo 1 If 05
Al ingresar una edad solo debemos informar si la persona NO es adolescente.
*/
function mostrar()
{
	var edadIngresada;
	
	edadIngresada = document.getElementById("txtIdEdad").value;

	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada <= 12 || edadIngresada >= 18 )
	{
	alert("Usted no es un adolescente");
	}
}
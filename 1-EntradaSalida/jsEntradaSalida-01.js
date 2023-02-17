/*
Tenemos que crear un programa que verifique si el usuario puede subirse a una montaña rusa,
para esto el usuario deberá ingresar los siguientes datos por prompt: Altura y edad. 
Si el usuario mide menos de 120 cm debemos indicar que no puede subirse a la montaña rusa,
en cambio sí tiene la altura correspondiente debemos preguntar su edad y mostrarle al usuario
por alert el monto a pagar.
El monto a pagar:
200$: para menores de edad y mayores de 80
400$: Mayores de edad menores a 80
*/
function mostrar()
{
	var alturaIngresada;
	var edadIngresada;

	alturaIngresada = prompt("Ingrese su altura");

	alturaIngresada = parseFloat(alturaIngresada);

	if(alturaIngresada >= 120)
	{
		edadIngresada = prompt("Ingrese su edad");

		if(edadIngresada >= 18 && edadIngresada <= 80)
		{
			alert("Usted debe abonar 400$");
		}
		else
		{
		
			alert("Usted debe abonar 200$");
		}
	}
	else
	{
		alert("Usted no puede subirse a la montaña rusa");
	}
}
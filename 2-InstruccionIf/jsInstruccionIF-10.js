/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
function mostrar()
{
	var numeroAleatorio;
	var mensaje;

	numeroAleatorio = Math.floor(Math.random()*10 + 1);

	mensaje = ("Vamos, la proxima se puede, su nota es: " + numeroAleatorio);

	if(numeroAleatorio > 8)
	{
		mensaje = ("Excelente, su nota es: " + numeroAleatorio);

	}
	else
	{
		if (numeroAleatorio > 3)
		{
			mensaje = ("Aprobó, su nota es: " + numeroAleatorio);
		}
	}

	alert(mensaje);
}
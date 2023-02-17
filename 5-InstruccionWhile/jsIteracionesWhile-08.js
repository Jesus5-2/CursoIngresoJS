/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;


	do
	{
		respuesta=prompt("Ingrese un numero");
		respuesta=parseFloat(respuesta);
		if(respuesta > -1)
		{
			sumaPositivos = sumaPositivos + respuesta;
			document.getElementById("txtIdSuma").value = sumaPositivos;
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos * respuesta;
			document.getElementById("txtIdProducto").value = multiplicacionNegativos;
		}
		respuesta = confirm("Quiere seguir ingresando numeros?");
	}while(respuesta);

}
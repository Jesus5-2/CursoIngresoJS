/*
Ariel Ramirez DIV Z Grupo 1 while 05
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");
	while(sexoIngresado!="f" && sexoIngresado!="m")
	{
		sexoIngresado = prompt("Reingrese f ó m .");
	}
	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN
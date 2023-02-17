/*
Ariel Ramirez DIV Z Grupo 1 Switch 05
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana."
*/ 
function mostrar()
{
	var mensaje;
	var horaDelDia =txtIdHora.value;

	horaDelDia = parseInt(horaDelDia);
	switch (horaDelDia)
	{
		case 8:
		case 9:
		case 10:
			mensaje=("Es de mañana.");
	}
	alert(mensaje);
}